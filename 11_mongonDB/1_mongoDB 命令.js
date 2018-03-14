// 1. 开启数据库服务 并保持连接
// mongod --dbpath c:\mongo
//        **指定数据库路径 

//2. 列出所有数据库
// show dbs

//3. 使用某个数据库
// use 数据库名称  （如果没有 则新建）

//4. 查看当前所在数据库
// db

//5.插入操作
// db.集合名.insert(json)

//6. 查询操作
// db.集合名.find(条件语句)
/*

      \$lt：小于
      \$lte：小于等于
      \$gt：大于
      \$gte：大于等于
*/
//7.  删除操作
// db.dropDataBase()    删除当前所在的数据库


//8. 导入数据库
//mongodb --db 数据库名 --collection 集合名 --drop(清空集合) --file 导入文件路径
