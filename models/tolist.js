/*
 * @Author: shouxie
 * @Date: 2020-06-24 15:47:05
 * @Description: 
 */ 
module.exports = function(sequelize, DataType) {
  const toList = sequelize.define('tolist', {
    text: DataType.STRING,
    complete: DataType.BOOLEAN
  })
  return toList;
};