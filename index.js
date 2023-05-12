$(window).on("load", function() {
    $(".boxes").click(function(){
        $(".childBox").slideUp().delay(400);
        $("#largeBox").find(`.childBox[rel='${$(this).attr("id")}']`).slideToggle();
    })
    $(".images").hover(function(){
        $(this).parent().css("width", "35%");
        $(this).next().fadeToggle();
    }, function(){
        $(this).parent().css("width", "30%");
        $(this).next().fadeToggle();
    });
    $("article").contextmenu(function(event) {
        $("body").fadeOut(500).css("backgroundColor", `rgb(50, 50, ${event.pageX / 10})`).fadeIn(500);
    });
})

//3 more jquery methods