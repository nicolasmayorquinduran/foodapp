// convertir array de arrays con objetos de varias propiedades a un array

const arraysToArray = x =>{
    var i = 0;
    var j = 0;
    var arr = []
  
    while(i<x.length){
        if(isNaN(x[i].id))
        {  if(j< x[i].diets.length){
          arr = arr.concat(x[i].diets[j].list)
          j++} else{
              x[i].diets = arr
              arr = []
              j=0
              i++
          }
        } else{
            i++
        }}
    return x
    }

        module.exports = {
           arraysToArray // para importart la conexión { conn } = require('./db.js');
          };