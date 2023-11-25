const express= require('express')
const app=express()
const path=require('path')
const cors=require('cors')
const bodyParser=require('body-parser')
const libraryRouter=require('./routes/library.js')
const sequelize=require('./utils/library.js')
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',libraryRouter)

sequelize.sync({alter:true})
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server is working")
    })
    
})
.catch((err)=>{
    console.log('err',err)
})

