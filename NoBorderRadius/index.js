// ==UserScript==
// @name         no border radius
// @namespace    https://github.com/LunAhEric
// @version      0.1
// @description  移除醜不啦嘰的圓角
// @author       LunAh
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com/
// @license      Copyright LunAh Eric
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(() => {
        document.querySelector('ytd-player').style.cssText += 'border-radius: 0;'
    }, 1000);
})();