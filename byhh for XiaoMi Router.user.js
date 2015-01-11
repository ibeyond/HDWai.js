// ==UserScript==
// @name         byhh for XiaoMi Router
// @namespace    http://www.ibeyond.net
// @version      0.1
// @description  enter something useful
// @author       iBeyond
// @match        http://www.byhh.org/*
// @grant        none
// @require      http://s.miwifi.com/d2r/js/base64.js
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==
$.each(['a.magDown','a.panshow','a.thunder','a.pannone'],function(index, element){
    $(element).each(function(){
        $(this).remove();	
    });
});
$('a.ed2kDown').each(function(){
    var title = $($(this).parent().parent().get(0)).children('.magTitle').children('a:first').text();
    var url = 'https://d.miwifi.com/d2r/?url='+Base64.encodeURI($(this).attr('ed2k'))+'&src=ibeyond&name='+encodeURIComponent(title);
    $(this).attr({'href':url,'target':'_blank'});
});