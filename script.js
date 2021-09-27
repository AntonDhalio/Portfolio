$(document).ready(function(){


// Använder funktionen hide för att gömma textfälten
$('#name_message').hide();
$('#mail_message').hide();
$('#phone_message').hide();
$('#text_message').hide();



//hämtar upp värdet i fältet namn och kallar på funktion
$('#namn').focusout(function(){
    check_name();
});

//hämtar värdet på id mail och kallar på funktion
$('#mail').focusout(function(){
    check_mail();
});

//hämtar värdet från id phone och kallar på funktion
$('#phone').focusout(function(){
    check_phone();
});

//hämtar värdet från id text och kallar på funktion
$('#text').focusout(function(){
    check_text();
});




//funktion som validerar namn
function check_name() {
    var RegExp = /\w{3,}/
    var name = $('#namn').val()

    if(RegExp.test(name) && name !== ''){
        $('#name_message').hide();
    } else {
        $('#name_message').html("Namnet måste innehålla minst 3 tecken!");
        $('#name_message').show();
    }
};

//funktion som validerar mail
function check_mail() {
    var RegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var mail = $('#mail').val()

    if(RegExp.test(mail)){
        $('#mail_message').hide();
    } else {
        $('#mail_message').html("Vänligen skriv en giltig e-postadress!");
        $('#mail_message').show();

    }
};

//funktion som validerar telefonnummer
function check_phone() {
    var RegExp = /(\d{3})[-]?(\d{7})/
    var phone = $('#phone').val()

    if(RegExp.test(phone)){
        $('#phone_message').hide();
    } else {
        $('#phone_message').html("Vänligen skriv ett giltigt telefonnummer!");
        $('#phone_message').show();
       
    }
};

//funktion som validerar textfältet
function check_text() {
    var RegExp = /\w{3,}/
    var text = $('#text').val()

    if(RegExp.test(text)){
        $('#text_message').hide();
    } else {
        $('#text_message').html("Vänligen skriv ett meddelande!");
        $('#text_message').show();

    }
};



function check_text() {
 
    var text = $('#text').val()

    if(text !== ''){
        $('#text_message').hide();
    } else {
        $('#text_message').html("Skriv ett meddelande!");
        $('#text_message').show();
    }
};



});