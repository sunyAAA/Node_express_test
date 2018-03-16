//删除操作
db.student.remove({"age":15})     // 默认会删除所有匹配到的文档


db.student.remove({"age":15},{justOne:true})     //  justOne 为true时只会删除匹配到的第一个

