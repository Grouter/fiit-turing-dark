// ==UserScript==
// @name         DarkTuring
// @namespace    DarkTuring
// @version      0.1
// @description  Welcome to the Dark Turing!
// @author       You
// @match        http://93.184.70.44:4001/*
// @match        https://www.turing.sk/fiit/zprpr2/*
// @grant        none
// @licence      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

window.onload = function() {
    monaco.editor.setTheme('vs-dark');
};