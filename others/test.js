// 斐波那契数列  generator

// 常规写法

function foo1(max) {
  var
    a = 0,
    b = 1,
    arr = [0, 1]
  while (arr.length < max) {
    [a, b] = [b, a + b]
    arr.push(b)
  }
  return (arr)
}

console.log(foo1(10));

// 使用 generator

function* foo2(max) {
  var
    a = 0,
    b = 1,
    n = 0
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++
  }
  return //  执行到这里 会标记函数已经结束  ｛..., done : true｝
}

/* generator 函数的调用 
      foo2(10)    并不能执行该函数 仅仅创建了一个generator对象，还没有去执行它。

      next()方法会执行generator的代码，然后，每次遇到yield x;  就返回一个对象{value: x, done: true/false}，然后“暂停”。
      返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。
      如果done为true，则value就是return的返回值。
*/
var f = foo2(5);
var arr = []
/**
 *  f.next(); // {value: 0, done: false}
    f.next(); // {value: 1, done: false}
    f.next(); // {value: 1, done: false}
    f.next(); // {value: 2, done: false}
    f.next(); // {value: 3, done: false}
    f.next(); // {value: undefined, done: true}
 */
arr.push(f.next().value);
arr.push(f.next().value);
arr.push(f.next().value);
arr.push(f.next().value);
arr.push(f.next().value);
arr.push(f.next().value);       
console.log(arr)    // [ 0, 1, 1, 2, 3, undefined ]


/**
 *        yield   暂停并保存变量 
 *                因此要保存在一个重复执行的环境中 
 *                1.使用 while 条件判断
 *                2.使用 for 循环
 */

function* next_id(){
  var i =0
  while(1){
    yield i ;
    i++
  }
}
var g = next_id();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())