/**
 * An entry script to load the complete script into console 
 * as to not make AAEncoded file too large
 */

var a = document.createElement('script');
a.src = './happy-birthday.js';
a.onload = ()=>projectMohorovicic();document.head.appendChild(a);