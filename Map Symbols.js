// You are given a number stored in a variable with the nameN

// You have to map the following symbols starting from the valueN

// The mapping is such that the difference between the values of two characters, is 2

// '!','@','#','$','%','^','&','*'

// For example, consider the value stored inN = 10, then the required output will be
// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24

function mapSymbols(N) {
    
    J = N - 2;
let it = {
   ko : "!",
   kf : "@",
   ka : "#",
   kw : "$",
   kh : "%",
   kc : "^",
   kl : "&",
   km : "*"
}
   for (key in it){
       let ok = it[key]
        let pk = J+=2
         console.log(ok+"-"+pk);
       
   }
}