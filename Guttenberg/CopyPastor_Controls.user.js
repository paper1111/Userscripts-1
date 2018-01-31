// ==UserScript==
// @name        CopyPastor Controls
// @namespace   paper1111
// @description Adds [k] [f] buttons to CopyPastor
// @include     http*://http://copypastor.sobotics.org/posts/*
// @version     0.1.0
// @grant       none
// ==/UserScript==

var buttonSpan = document.createElement ('span');
buttonSpan.innerHTML   = '          \
    <span id="controls">            \
        <a>k</a>                    \
        <a>f</a>                    \
    </span>                         \
';

var containers = document.getElementsByClassName("container");
containers.forEach( function(container) {
    var rows = container.getElementsByClassName("row");
    rows.forEach( function(row) {
    
    }
});
