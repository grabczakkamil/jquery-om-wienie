$(function() {
    'use strict';
    var paragraf = $("p").first();
    console.log(paragraf.text());
    
    paragraf.text("Jest piękna pogoda");
    
    console.log(paragraf.text());
    
    
    
})