const {Sequelize}= require('sequelize');

const sequelize=require('../util/database');

const User= sequelize.define('expense',{
  id:{
    type:Sequelize.INTEGER,
  autoIncrement:true,
  allowNull:false,
  primaryKey:true
},

expenseamount:{
  type:Sequelize.INTEGER,
  allowNull:false
},

description:{
  type:Sequelize.STRING,
  unique:true
},

Category:{
  type:Sequelize.STRING,

}

});

module.exports=User;