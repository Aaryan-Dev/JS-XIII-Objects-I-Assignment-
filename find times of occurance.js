// Problem 2 :
// Given a string print, the number of times each character appears

let party=["suraj", "ramu", "sonu", "suraj", "mohan"];


let new_list=[];


for (let i=0;i<party.length;i++){
  
let present=false;

  let person = party[i];

  
  for (let j=0;j<new_list.length;j++){
    if(person==new_list[j]){
      present=true;

      break;
    }
  }
  if(present==false){
    new_list.push(person);

  }
  
}
// console.log(new_list)


//2nd Part


for(i=0; i<new_list.length; i++){
   let count = 0;
   for(j=0; j<party.length; j++){
     if(party[j]==new_list[i]){
       count++
     }
   }
    console.log(new_list[i],count); 
}