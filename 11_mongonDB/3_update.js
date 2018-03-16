// 修改数据

//单条数据修改
db.student.update(
  {"name":"小马"},      // 匹配要修改的数据
  {
    $set:{"age":10}     // 要修改的kv对
  }
)
 // 修改所有匹配到的数据      ｛mutil : true｝
db.student.update(
{"hobby":"打架"},
{
  $set : { "age" : 20}
},
{multi : true}           
)

//replace a document      不写 $set关键字 则 完整替换匹配到的项目

db.student.update({"name":"小马"},{"name":"小猴","age":2,"hobby":["吹牛","吃草"]})