$(document).ready(function() {
    $("#menu").hide();
    $(".staplar").hide();
    $("#menu-icon").click(function(){
        $("#menu").show(400);
    });
    $("#navicon").click(function(){
        $("#menu").hide(400);
    });
    $(".visa-kunskap").click(function(){
        $(".visa-kunskap").slideUp(200);
        $(".staplar").slideDown(400);
    });
});