$(function() {
    'use strict';
    var paragraf = $(".p1");
    console.log(paragraf.text());
    
    var innyParagraf = $(".p2");
    innyParagraf.html("to jest <strong>HTML</strong>");
    innyParagraf.append("coś na końcu");
    innyParagraf.prepend("coś na początku");
    innyParagraf.after("<p>XYZ</p>");
    
    $("h1>strong").remove();
    
    $('p').css({
        'font-size': '30px',
        color: 'red'
    })
    
    $("p").eq(1).css({"background-color": "green" });
    
//   $('p').each(function(index)) {
//               $(this).addclick("paragraf-" + (index +1));
//               } 
   
  $('p').addClass(function(index) {
               return "paragraf-" + index;
});
})
