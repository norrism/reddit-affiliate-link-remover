// ==UserScript==
// @name       Reddit Affiliate Link Remover
// @author     Michael Norris
// @namespace  http://norrism.com
// @version    1.0.0
// @description Replaces affilate URLs in hyperlinks on Reddit with the actual destination URL
// @match      http://*.reddit.com/*
// @match      https://*.reddit.com/*
// @require    http://code.jquery.com/jquery-latest.js

// @downloadURL    https://github.com/norrism/reddit-affiliate-link-remover/raw/master/reddit-affiliate-link-remover.user.js
// ==/UserScript==

// Replace the affilate URL when you hover over an affiliate hyperlink
$('a.affiliate').hover(function(){
    $(this).attr('data-affiliate-url', $(this).attr('data-href-url'));
});

/*
// Replace all affiliate URLs in hyperlinks on the page after it loads
$(document).ready(function(){
    $('a.affiliate').each(function(){
        $(this).attr('data-affiliate-url', $(this).attr('data-href-url'));
    });
});
*/
