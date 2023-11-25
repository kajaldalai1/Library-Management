const Sequelize=require('sequelize')

const sequelize=new Sequelize('library','root','Littletwinkle@1',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize