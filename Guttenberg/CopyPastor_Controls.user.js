// ==UserScript==
// @name        CopyPastor Controls
// @namespace   paper1111
// @description Adds [k] [f] buttons to CopyPastor
// @include     http://copypastor.sobotics.org/posts/*
// @version     0.5
// @grant       none
// ==/UserScript==

var buttonSpan = document.createElement ('span');
buttonSpan.innerHTML   = '<span id="controls"> <a>k</a> <a>f</a> </span>';

var containers = document.getElementsByClassName("container");
[].forEach.call(containers, function(container) {
    var rows = container.getElementsByClassName("row");
    [].forEach.call(rows, function(row) {
        var cols = row.getElementsByClassName("col");
        [].forEach.call(cols, function(col) {
            var titles = col.getElementsByTagName("h2")
            [].forEach.call(titles, function(title) {
                var links = col.getElementsByTagName("a")
                [].forEach.call(links, function(link) {
                    if (link.textContent === "Possible Plagiarism") {
                        console.log("match");
                        titles += buttonSpan;
                    }
                });
            });
        });
    });
});
