// You are given a number stored in a variable with the nameN

// You are given another number stored in a variable with the nameK

// You have to map all the numbers in the range of[1, N], including the values stored inN, such that the mapping begins fromK

// For example, consider the value stored inN = 5, andK = 10, then the required output will be

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

function mapNumbers(N,K){
    
    for(i=0; i<N; i++){
        let it ={
        f : (i+1)+"-"+(K+i)
    }
        // console.log(i+1+"-"+(i+K));
     console.log(it.f);   
    }
}
    
    