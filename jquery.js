$(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth > 800) {
        if ($("#menu").is(":hidden")) {
            $("#menu").css("display","block");
            $("#menu-icon").css("display", "none");
        }
    }
    else {
        $("#menu").css("display","none");
        $("#menu-icon").css("display", "block");
        
    }
});

if($(window).width() < 799)
{
$(document).ready(function() {
    $(".staplar").hide();
    $(".portfolioBild").hide();
    $(".portfolioBild").slideDown(500);
    $(".text").hide();
    $(".text").delay(600).slideDown(800);
    $(".visa-kunskap").hide();
    $(".visa-kunskap").delay(1600).slideDown(500);
    $("#menu").css("display","none");
    $(".visa-kunskap").click(function(){
        $(".visa-kunskap").slideUp(200);
        $(".staplar").slideDown(400);
    });
});
}
else {
    $(document).ready(function() {
        $(".staplar").hide();
        $(".portfolioBild").hide();
        $(".portfolioBild").slideDown(500);
        $(".text").hide();
        $(".text").delay(600).slideDown(800);
        $(".visa-kunskap").hide();
        $(".visa-kunskap").delay(1600).slideDown(500);
        $(".visa-kunskap").click(function(){
            $(".visa-kunskap").slideUp(200);
            $(".staplar").slideDown(400);
        });
    });
}
$(document).ready(function() {
$("#menu-icon").click(function(){
    $("#menu").show(400);
    $("#menu-icon").hide();
});
$("#navicon").click(function(){
    $("#menu").hide(400);
    $("#menu-icon").show();
});
});