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

//공지사항 추출할 때
function getNoti(callback){
  connection.query('SELECT * FROM notice ORDER BY id desc', (err, rows, fields) => {
    if(err) throw err;
    callback(rows);
  })
}

//공지사항 입력할 때
function insertNoti(writer,date,title,cont, callback){
  connection.query(`INSERT INTO notice(writer,date,title,cont) VALUES('${writer}','${date}','${title}','${cont}')`, (err)=>{
    if(err) throw err;
    callback();
  })
}

//공지사항 상세페이지에 출력할 때
function getNotiByid(id, callback){
  connection.query(`SELECT * FROM notice WHERE id=${id}`, (err,row) => {
    if(err) throw err;
    callback(row);
  })
}

//공지사항 삭제할 때
function deleteNByid(id, callback){
  connection.query(`DELETE FROM notice WHERE id=${id}`, (err) => {
    if(err) throw err;
    callback();
  })
}

//공지사항 수정할 때
function updateNoti(id,writer,date,title,cont, callback) {
  connection.query(`UPDATE notice SET writer="${writer}",date="${date}",title="${title}",cont="${cont}" where id=${id}`, (err) => {
    if(err) throw err;
    callback();
  })
}

module.exports = {
  getNoti,
  insertNoti,
  getNotiByid,
  deleteNByid,
  updateNoti,
}