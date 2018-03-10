// 1 .定义一个列表类 List，该类包含成员方法 add()、all() 和属性 length，要求构造函数和 add() 方法的参数为动态参数

class List {
  constructor(...arg){
   this.arr = [...arg];
  //  [].push.apply(this.arr,[].slice.call(arguments))
  }
  get length() {
    return this.arr.length
  }
  get all() {
    return this.arr.slice()
  }
  add(...arg){
    this.arr.push(...arg)
  }
}

var a = new List('A','B','C')
a.add('D','E')

console.log(a);
console.log(a.length);


//2 .一个数组，把奇数放到右边，偶数放到左边，不使用额外空间
var arr = [1,2,3,4,5,6,7,8,9,10]

arr.sort((a,b)=>{
  return a%2 
})

console.log(arr)