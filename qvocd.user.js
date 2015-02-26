// ==UserScript==
// @name        qvocd
// @namespace    http://www.ibeyond.net/
// @version      0.1
// @description  qvocd for xiaomi router mini
// @author       ibeyond
// @match        http://www.qvocd.org/*
// @grant        none
// @require      http://s.miwifi.com/d2r/js/base64.js
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==

$("[href^='ed2k://']").each(function(){
    $(this).attr({'href':'https://d.miwifi.com/d2r/?url='+Base64.encodeURI($(this).attr('href'))+'&src=qvocd&name='+encodeURIComponent($('H1').text()),'target':'_blank'});
});