
$(document).ready(function(){
    $("#sbtn").click(function(){
        $("#search").slideDown("slow");
        $("#menu").hide();
    });
});
$(document).ready(function(){
    $("#cbtn").click(function(){
        $("#menu").slideDown("slow");
        $("#search").hide();
    });
});
