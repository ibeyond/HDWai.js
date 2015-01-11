// ==UserScript==
// @name         HD-dwr for XiaoMi router
// @namespace    http://www.ibeyond.net/
// @version      0.2
// @description  enter something useful
// @author       You
// @match        http://www.hd-dwr.com/*
// @grant        none
// @require      http://s.miwifi.com/d2r/js/base64.js
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==
var ed2k = GvodUrls.split("###");
$.each(ed2k, function(i, u){
    var xiaomi = '<a class=\'xiaomi\' target=\'_blank\' href=\''+ 'https://d.miwifi.com/d2r/?url='+Base64.encodeURI(u)+'&src=ibeyond&name='+encodeURIComponent($('a.pic').children().attr('alt')) +'\'>' + $('a.pic').children().attr('alt') + '&nbsp;' + (i + 1) + '&nbsp;(小米下载）</a>';
	$(xiaomi).appendTo($('dd.playbtn'));
});