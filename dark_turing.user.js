// ==UserScript==
// @name         DarkTuring
// @version      0.1.0
// @description  Welcome to the Dark Turing!
// @author       Mathew Chovan
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @match        http://93.184.70.44:4001/*
// @match        https://www.turing.sk/fiit/*
// ==/UserScript==

window.onload = function() {
    monaco.editor.setTheme('vs-dark');
};