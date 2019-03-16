// ==UserScript==
// @name         DarkTuring
// @version      0.1
// @description  Welcome to the Dark Turing!
// @author       Mathew Chovan
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @match        http://93.184.70.44:4001/*
// @match        https://www.turing.sk/fiit/*
// ==/UserScript==

// ==OpenUserJS==
// @author Grouter
// ==/OpenUserJS==

window.onload = function() {
    monaco.editor.setTheme('vs-dark');
};