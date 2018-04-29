$(function(){
    'use strict';
  

    $("#buttonP").click(function() {
        $("p").hide("3000ms");
    })
    $("#buttonP").click(function() {
        $("p").show("3000ms");
    })
     $("#buttonH1").click(function() {
        $("h1").fadeOut("3000ms").fadeIn("3000ms");
    })
     $("#buttonH2").click(function() {
        $("h2").slideUp("3000ms").slideDown("3000ms");
      })
    
    animateDiv();
    
    function animateDiv() {
        $('div')
        .animate({width:'200px', height:'200px'}, 2000)
        .animate({width:'100px', height:'100px'}, 2000, animateDiv)
    }
         
})
