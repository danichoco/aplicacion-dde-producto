import promptFact from "prompt-sync";
var prompt = promptFact();
var command = prompt(">");

export default function runCommandLine(callback){
    while(command != 'exit'){
       callback(command);
     
        command = prompt(">");
     
     };
     console.log(("bye bye")); 
    
}
   
   
