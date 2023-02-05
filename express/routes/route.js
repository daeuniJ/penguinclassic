const express = require('express');
const router =  express.Router();
const fs = require('fs');
const path = require('path');
const db = require('./../db.js');


//메인페이지
router.get('/', (req, res) => {
  res.render('mainPage');
  
});

//공지사항 페이지
router.get('/noticeList', (req, res) => {
  db.getNoti((rows)=>{
    res.render('noticeList_page',{rows:rows});
  })
});

//공지사항 작성 페이지
router.get('/noticeWrite', (req, res) => {
  res.render('noticeWrite_page');
});

//작성페이지 액션
router.post('/newWrite',(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let writer = param['writer'];
  let date = param['date'];
  let title = param['title'];
  let cont = param['cont'];
  db.insertNoti(writer,date,title,cont, ()=>{
    res.redirect('/noticeList')
  })
})

//공지사항 수정 페이지
router.get('/noticeUpdate', (req, res) => {
  res.render('noticeUpdate_page');
});

//공지사항 수정 페이지에 데이터 가져오기
router.get('/updates', (req, res)=>{
  let id = req.query.id;

  db.getNotiByid(id, (row) => {
    res.render('noticeUpdate_page',{ row:row[0] })
  })
})

//공지사항 수정 액션
router.post('/updateNoti', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let writer = param['writer'];
  let date = param['date'];
  let title = param['title'];
  let cont = param['cont']; 
  db.updateNoti(id,writer,date,title,cont, ()=>{
    res.redirect('/noticeList')
  })
})

//공지사항 상세 페이지
router.get('/noticeCon', (req, res) => {
  let id = req.query.id;

  db.getNotiByid(id, (row)=>{
    res.render('noticeCon_page', { row:row[0] });
  })
});

//공지사항 삭제
router.get('/deletNoti',(req, res) => {
  let id = req.query.id;

  db.deleteNByid(id,() => {
    res.redirect('/noticeList')
  })
})

//로그인 페이지
router.get('/logIn', (req, res) => {
  res.render('logIn_page');
});

//약관동의 페이지
router.get('/termsOfUse', (req, res) => {
  res.render('termsOfUse_page');
});

//회원가입 페이지
router.get('/signUp', (req, res) => {
  res.render('signUp_page');
});

//출판사소개 페이지
router.get('/brandintro', (req, res) => {
  res.render('brandintro');
});

//도서 페이지
router.get('/books', (req, res) => {
  res.render('books_page');
});

//작가 페이지
router.get('/writer', (req, res) => {
  res.render('writer_page');
});

module.exports = router;
