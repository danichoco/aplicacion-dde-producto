import runCommandLine from "./mmm.js";
import promptFact from 'prompt-sync'

const prompt = promptFact()
    
  products={
    name:['cafe','arroz','azucar','leche'],
    cantidad:[10, 15, 30, 25],
    UM:['lbs','kg', 'lbs', 'lts'],
    precio:['$15', '$30', '$18','$25'],
  }

runCommandLine(function (command){
   
  if(command == 'add'){
    var productsName = prompt('Especifique el nombre del producto: ');
    products.push(productsName);
  }
  
  else if(command == 'show'){
    console.log(products);
  }
  
  else if(command == 'modify'){
    var products=prompt('Especifique el producto que desea modificar: ');
    someProduct.price='$30';
  }

  
  else if(command == 'list'){
    console.log(products)
  }

  else if(command == 'delete'){
    var products= prompt('Especifique el elemento que desea eliminar: ');
  }
  
  else{
   console.log('el commando es: ' +command);
  }
});
