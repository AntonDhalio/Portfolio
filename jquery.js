if($(window).width() < 799)
{
$(document).ready(function() {
    $("#menu").hide();
    $(".staplar").hide();
    $(".portfolioBild").hide();
    $(".portfolioBild").slideDown(500);
    $(".text").hide();
    $(".text").delay(600).slideDown(800);
    $(".visa-kunskap").hide();
    $(".visa-kunskap").delay(1600).slideDown(500);
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
}
else {
    $(document).ready(function() {
        $("#menu").show();
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