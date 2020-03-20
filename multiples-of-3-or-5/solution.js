function solution(n){
    var sum = 0;
    var arr = [];
    
    for(let i = 0; i < n; i++) {
      if(i%3 == 0) {
        arr.push(i);
        sum += i;
      }
      
      else if (i%5 == 0) {
        arr.push(i);
        sum += i;
      }
    }
    
    return sum; 
  }