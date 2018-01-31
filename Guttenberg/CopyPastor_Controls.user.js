// ==UserScript==
// @name        CopyPastor Controls
// @namespace   paper1111
// @description Adds [k] [f] buttons to CopyPastor
// @match       *://http://copypastor.sobotics.org/posts/*
// @version     0.1.1
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
        var cols = row.getElementsByClassName("col");
        cols.forEach( function(col) {
            var titles = col.getElementsByTagName("h2")
            titles.forEach( function(title) {
                var links = col.getElementsByTagName("a")
                links.forEach( function(link) {
                    if (link.textContent === "Possible Plagiarism") {
                        titles += buttonSpan;
                    }
                });
            });
        });
    });
});
