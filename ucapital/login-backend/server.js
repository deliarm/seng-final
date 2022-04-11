import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DB connected"))

/*
mongoose.connect("mongodb://localhost:27017/loginDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => {
    console.log("Db connected")
})
*/

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (request, response) => {
    const {email, password} = request.body
    User.findOne({email:email}, (err, user) =>{
        if(user){
            if(password === user.password){
                response.send({message: "Login Successful", user})
            } 
            else{
                response.send({message: "Password didnt match"})
            }

        }else{
            response.send({message: "Account does not exist"})
        }
    })
})

app.post("/signup", (request, response) => {
    const {name, email, password} = request.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            response.send({message:"Account already exits"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    response.send(err)
                }
                else{
                    response.send({message : "Successfully Signed-up"})
                }
            })
        }
    })
    
})

app.listen(9002, ()=>{
    console.log("BE started at port 9002")
})
