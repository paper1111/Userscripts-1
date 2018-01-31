// ==UserScript==
// @name        CopyPastor Controls
// @namespace   paper1111
// @description Adds [k] [f] buttons to CopyPastor
// @include     http://copypastor.sobotics.org/posts/*
// @version     0.8
// @grant       none
// ==/UserScript==

var buttonSpan = document.createElement ('span');
buttonSpan.innerHTML   = '<span id="controls"> <a>k</a> <a>f</a> </span>';

var containers = document.getElementsByClassName("container");
Array.from(containers).forEach(function(container) {
    var rows = container.getElementsByClassName("row");
    Array.from(rows).forEach(function(row) {
        var cols = row.getElementsByClassName("col");
        Array.from(cols).forEach(function(col) {
            var titles = col.getElementsByTagName("h2")
            Array.from(titles).forEach(function(title) {
                var links = col.getElementsByTagName("a")
                Array.from(links).forEach(function(link) {
                    if (link.textContent === "Possible Plagiarism") {
                        console.log("match");
                        // insert text
                        title += buttonSpan;
                    }
                });
            });
        });
    });
});
