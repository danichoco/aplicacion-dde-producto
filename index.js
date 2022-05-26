import runCommandLine from "./mmm.js";
import promptFact from 'prompt-sync'
 
const prompt = promptFact()

const products= ['sal, azucar, canela, harina, arroz']

const productLast= ['sal, canela, harina, arroz']

runCommandLine(function (command){
  if(command == 'add'){
    var productsName = prompt('Especifique el nombre del producto: ');
  products.push(productsName);
  }
  else if(command == 'show'){
     console.log(products);
  }
  else if(command == 'delete'){
 var product= prompt('Especifique el elemento que desea eliminar: ');
   console.log(productLast); 
 }
  else{
    console.log('el commando es: ' +command);
}
});