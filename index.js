
import runCommandLine from "./prompt.js";
import promptFact from 'prompt-sync'

const prompt = promptFact()


var products=[
  {name:'harina', price:'$25', cant:30, um:'lbs'},
  {name:'azucar', price:'$15', cant:18, um:'lbs'},
  {name:'arroz', price:'$30', cant:50, um:'kg'},
  {name:'aceite', price:'$18', cant:30, um:'lbs'},
]
    
    for(var product of products){
      console.log(product.name);
    }

function findProductsList(){
    list=[];
     
  for( product of products){
   list.push(products.name);
  }  
  
    return list;
   }

   console.log(findProductsList())

runCommandLine(function (command){
    
  if(command == 'show'){
    console.log(products)
  }
  
  else{
   console.log('El comando es: ' +command)
  }
 });
   
   