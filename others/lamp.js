// 过程
// var arr= [];
// var result=1;
// for(let i = 1 ; i<=100 ; i++ ) {
//   arr[i] = true;
// }
// for(let i = 2 ;i <=100; i ++) {
//   for(let j =i; j <=100;j+=i) {
//     arr[j] = ! arr[j]
//   }
//   if(arr[i]){
//     result++
//   }
// }
// console.log(result)

// 从结果出发
var result= 0
// 解2
for(let i = 100 ; i>=1; i-- ) {
  var stat = false
  for(let j =1 ; j<=i; j++) {
    if( i%j === 0 ) {
      stat = !stat
    }
  }
  if(stat) {
    result ++
  }
}
console.log(result)
