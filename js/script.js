$(function(){
    $("#twitty").draggable({ revert: false});
    $("#hole").droppable({
        drop:function(event,ui){
            $("#twitty").addClass("ui-none")
            .css("display" ,"none")
        }
    })
    $("button").on("click",function(){
    $("#twitty").effect("shake");
})
})

