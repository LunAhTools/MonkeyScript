// ==UserScript==
// @name         no youtube shorts
// @namespace    https://github.com/LunAhEric
// @version      0.1
// @description  土炮自動跳轉short成一般觀看影片
// @author       LunAh
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com/
// @license      Copyright LunAh Eric
// ==/UserScript==

(function () {
    'use strict';
    const herf = window.location.href;
    const url = herf.split('https://www.youtube.com/shorts/');
    if(herf.match('shorts')){
        const doman = 'https://www.youtube.com/watch?v=';
        window.location = doman + url[1];
    }
})();