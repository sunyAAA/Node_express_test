// mongoDB 中的查找  find

// find 中的精确匹配
// db.student.find({"age":"20"});

// find 中的多条件精确匹配  与 
// db.student.find({"age":20},{"name":"小猪"})

//find 中的多条件模糊匹配 或
//db.student.find({$or[{"age":20},{"name":"小猪"}]})

// find 中的的 大于 小于
//db.student.find({"age":{$gt:20}})
//db.student.find({"age":{$lt:20}})

//sort 排序  asc(升) 1  desc(降序) -1
//db.student.find().sort("age":1)           *** 查询结果按 "age" 升序排列 

