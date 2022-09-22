$(function(){
    $("#submit").on("click",function(){
      var text =  $("#add").val();
      
        if(text==""){
            alert("it is empty");
        }else{
            $("ol").append("<li>" + text + "<button id='approve'>aprrove</button><button id='delete'>delete</button></li> ");
        }
        });
        
        $("#approve").on("click","li",function(){
            $(this).toggleClass('completed')
        });
        $("#delete").on("click","li",function(){
            $(this).toggleClass('delete')
        })
       

    })