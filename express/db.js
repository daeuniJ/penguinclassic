const { query } = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.chl09dgpxexv.ap-northeast-1.rds.amazonaws.com',
  user     : 'root',
  password : '95052910',
  database : 'penguinclassic',
  dateStrings : 'date',
  multipleStatements: true //다중쿼리용 설정
});
 
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



//getMemo 내보내기 (이 과정이 있어야 이 함수를 다른 곳에서도 연동해서 쓸 수 있다)
// module.exports = {
  
// }