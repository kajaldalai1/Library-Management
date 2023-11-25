const Sequelize=require('sequelize')
const sequelize=require('../utils/library')

const library=sequelize.define('library',{
        id:{
           type:Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey:true,
           unique:true
        },
        Bookname:{
            type: Sequelize.STRING,
            allowNull:false
        },
        Status:{
            type:Sequelize.BOOLEAN,
            defaultValue:false
        }
})

module.exports=library;