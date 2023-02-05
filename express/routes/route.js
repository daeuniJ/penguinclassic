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
  res.render('noticeList_page');
  
});

//공지사항 작성 페이지
router.get('/noticeWrite', (req, res) => {
  res.render('noticeWrite_page');
  
});

//공지사항 수정 페이지
router.get('/noticeUpdate', (req, res) => {
  res.render('noticeUpdate_page');
});

//공지사항 상세 페이지
router.get('/noticeCon', (req, res) => {
  res.render('noticeCon_page');
});

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
