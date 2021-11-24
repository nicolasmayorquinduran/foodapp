export const Az = title => title.sort((a, b) => a.title >= b.title ? 1:-1 )
export const Za = title => title.sort((a, b) => a.title >= b.title ? -1:1 )
export const higherScore = score => score.sort((a, b) => a.spoonacularScore >= b.spoonacularScore ? -1:1 )
export const lowerScore = score => score.sort((a, b) => a.spoonacularScore >= b.spoonacularScore ? 1:-1 )
export const matchDiets = (all, selected) => all.filter(r=>r.diets.sort().join().includes(selected.sort()))
export const arraysToArray = x =>{
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