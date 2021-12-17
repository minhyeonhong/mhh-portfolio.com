'use strict'

//import {includeHTML} from "./common.js"

// (function indexFirstFunction(){
// 	// includeHTML(document.querySelector('#header'), 'header.html');
//     // includeHTML(document.querySelector('#main'), 'main.html');
//     // includeHTML(document.querySelector('#footer'), 'footer.html');
//     alert('test');
// })();

// function includeHTML(divContainer, urlHTML) {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         if (this.status == 200) { divContainer.innerHTML = this.responseText; }
//         if (this.status == 404) { divContainer.innerHTML = "Page not found."; }
//     }
// }
// xhttp.open("GET", urlHTML, true);
// xhttp.send();
// }

// (function indexFirstFunction(){
// 	includeHTML(document.querySelector('#header'), '../html/header.html');
//     includeHTML(document.querySelector('#main'), '../html/main.html');
//     includeHTML(document.querySelector('#footer'), '../html/footer.html');    
// })();

(function indexFirstFunction(){
    alert("!");
})();

window.addEventListener('load', function() {
   // alert("!");
    // var allElements = document.getElementsByTagName('*');
    // Array.prototype.forEach.call(allElements, function(el) {
    //     var includePath = el.dataset.includePath;
    //     if (includePath) {
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.onreadystatechange = function () {
    //             if (this.readyState == 4 && this.status == 200) {
    //                 el.outerHTML = this.responseText;
    //             }
    //         };
    //         xhttp.open('GET', includePath, true);
    //         xhttp.send();
    //     }
    // });
});