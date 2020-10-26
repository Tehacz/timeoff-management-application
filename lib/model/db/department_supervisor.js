"use strict";

var moment = require('moment'),
_          = require('underscore'),
config     = require('../../config');

module.exports = function(sequelize, DataTypes){
  var DepartmentSupervisor = sequelize.define("DepartmentSupervisor", {
    user_id : {
      type         : DataTypes.INTEGER,
      allowNull    : false,
    }, 
    department_id : {
      type         : DataTypes.INTEGER,
      allowNull    : false,
    },
  },{ 
    indexes : [{
      fields : [ 'department_id' ],
    },{
      fields : [ 'user_id' ],
    }],

    classMethods : {
      associate : function(models) {

        DepartmentSupervisor.belongsTo(models.Department, {
          as         : 'department',
          foreignKey : 'department_id',
        });

        DepartmentSupervisor.belongsTo(models.User, {
          as         : 'user',
          foreignKey : 'user_id',
        });
      },
    },

  });

  return DepartmentSupervisor;
};
