// ==UserScript==
// @name        cililian.org
// @namespace    http://www.ibeyond.net/
// @version      0.1.1
// @description  cililian.org for xiaomi router mini
// @author       ibeyond
// @match        http://cililian.org/*
// @grant        none
// @require      http://s.miwifi.com/d2r/js/base64.js
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==

$("[href^='magnet:']").each(function(){
    $(this).attr({'href':'https://d.miwifi.com/d2r/?url='+Base64.encodeURI($.trim($(this).attr('href')))+'&src=cililian&name='+encodeURIComponent($('.T1').text()),'target':'_blank'});
});
