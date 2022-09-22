$(function(){
    $("#submit").on("click",function(){
      var text =  $("#add").val();
      
        if(text==""){
            alert("it is empty");
        }else{
            $("ol").append("<li>" + text + "<button id='delete'>click me</button></li> ");
        }
        });
        
        $(document).on("click","li",function(){
            $(this).toggleClass('strike').fadeOut("slow");
        });
       

    })