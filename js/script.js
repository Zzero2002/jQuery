var flag=0
$(function(){

  function slideShow(){
     var current = $('#slider .show');
    var next = current.next().length ?
        current.next() :
        current.siblings().first();
    
     current.hide().removeClass('show');
     next.fadeIn("slow").addClass('show');
    
    
    setTimeout(slideShow, 2000);
    
  };
  slideShow();

  $(".bt1").on("click",function(){
    $("#slider .show").removeClass('show');
  })
  
}) 
$(function () {
      $("#img1").on("click", function () {
        $("#para1").slideToggle(500);
      });
    });
$(function () {
      $("#img2").on("click", function () {
        $("#para2").slideToggle(500);
      });
    });
$(function () {
      $("#img3").on("click", function () {
        $("#para3").slideToggle(500);
      });
    });