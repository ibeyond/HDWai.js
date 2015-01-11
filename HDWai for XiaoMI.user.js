// ==UserScript==
// @name         HDWai for XiaoMI 
// @namespace    http://www.ibeyond.net/
// @version      0.1
// @description  Download ed2k in XiaoMI Router
// @author       iBeyond
// @match        http://hdwai.com/*
// @grant        none
// ==/UserScript==
$('a.btn-e').each(function(){
  $(this).attr({'href':'https://d.miwifi.com/d2r/?url='+Base64.encodeURI($(this).attr('href'))+'&src=yyets&name='+encodeURIComponent($(this).parent().prev().prev().text()),'target':'_blank'});
});


