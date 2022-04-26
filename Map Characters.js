// You are given a number stored in a variable with the nameN

// You have to print the first N English smaller case alphabets, mapped with the values starting from 1 toN, including the value stored inN

// For example, consider the value stored inN = 3, then the required output will be

// a-1
// b-2
// c-3
// Note : The value stored in N will always be less than or equal to 26, and greater than 0 

function mapChar(N) {
   
   
    //   let alp = "abcdefghijklmnopqrstuvwxyz"
    //   for(i=0; i<N; i++){
    //       console.log(alp[i]+"-"+(i+1));
    //   }
        let alp = "abcdefghijklmnopqrstuvwxyz"
     for(i=0; i<N; i++){
         let ok = {
        k :  alp[i]+"-"+(i+1)
         }  
         console.log(ok.k);
    
     }    
       
      
    }
       