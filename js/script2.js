$(function(){
    $("#submit").on("click",function(){
      var text =  $("#add").val();
      
        if(text==""){
            alert("it is empty");
        }else{
            $("ol").append("<li style='margin-bottom:10px'>" + text + "<button id='approve'>aprrove</button><button id='delete'>delete</button></li> ");
        }
       
        });
        
        $("ol").on("click","#approve",function(){
            $(this).parent("li").css("background","green");
        });
        $("ol").on("click","#delete",function(){
            $(this).parent("li").fadeOut('slow')
        })
       
       

    })