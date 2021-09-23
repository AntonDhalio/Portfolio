$(document).ready(function(){
    // $('.länkBild').mouseenter(function(){
    //   $(this).animate({
    //       width: '30%'
    //   });
    // });
    // $('.länkBild').mouseleave(function(){
    //     $(this).animate({
    //         width: '21%'
    //     });
    // });
    $('#länkBild1').hover(function(){
        $('#länkBild1').filter(':not(:animated)').animate({
            width: '30%'
        });
        $('#länkBild4').animate({
            width: '16%'
        });
        $('#länkBild2').animate({
            width: '16%' 
        });
        $('#länkBild3').animate({
            width: '16%' 
        });
        
    },
    function() {
        $('#länkBild1').animate({
            width: '21%'
        });
        $('#länkBild4').animate({
            width: '21%'
        });
        $('#länkBild2').animate({
            width: '21%' 
        });
        $('#länkBild3').animate({
            width: '21%' 
        });
    });
    // $('#länkBild4').mouseenter(function(){
    //     $(this).animate({
    //         width: '30%'
    //     });
    //     $('#länkBild1').animate({
    //         width: '16%'
    //     });
    //     $('#länkBild2').animate({
    //         width: '16%' 
    //     });
    //     $('#länkBild3').animate({
    //         width: '16%' 
    //     });
        
    // });
    // $('#länkBild4').mouseleave(function(){
    //     $(this).animate({
    //         width: '21%'
    //     });
    //     $('#länkBild1').animate({
    //         width: '21%'
    //     });
    //     $('#länkBild2').animate({
    //         width: '21%' 
    //     });
    //     $('#länkBild3').animate({
    //         width: '21%' 
    //     });
    // });
    // $('#länkBild1').mouseenter(function(){
    //     $(this).animate({
    //         width: '30%'
    //     });
    //     $('#länkBild4').animate({
    //         width: '16%'
    //     });
    //     $('#länkBild2').animate({
    //         width: '16%' 
    //     });
    //     $('#länkBild3').animate({
    //         width: '16%' 
    //     });
    // });
    // $('#länkBild1').mouseleave(function(){
    //     $(this).animate({
    //         width: '21%'
    //     });
    //     $('#länkBild4').animate({
    //         width: '21%'
    //     });
    //     $('#länkBild2').animate({
    //         width: '21%' 
    //     });
    //     $('#länkBild3').animate({
    //         width: '21%' 
    //     });
    // });
    // $('#länkBild2').mouseenter(function(){
    //     $(this).animate({
    //         width: '30%'
    //     });
    //     $('#länkBild4').animate({
    //         width: '16%'
    //     });
    //     $('#länkBild1').animate({
    //         width: '16%' 
    //     });
    //     $('#länkBild3').animate({
    //         width: '16%' 
    //     });
    // });
    // $('#länkBild2').mouseleave(function(){
    //     $(this).animate({
    //         width: '21%'
    //     });
    //     $('#länkBild4').animate({
    //         width: '21%'
    //     });
    //     $('#länkBild1').animate({
    //         width: '21%' 
    //     });
    //     $('#länkBild3').animate({
    //         width: '21%' 
    //     });
    // });
    // $('#länkBild3').mouseenter(function(){
    //     $(this).animate({
    //         width: '30%'
    //     });
    //     $('#länkBild4').animate({
    //         width: '16%'
    //     });
    //     $('#länkBild2').animate({
    //         width: '16%' 
    //     });
    //     $('#länkBild1').animate({
    //         width: '16%' 
    //     });
    // });
    // $('#länkBild3').mouseleave(function(){
    //     $(this).animate({
    //         width: '21%'
    //     });
    //     $('#länkBild4').animate({
    //         width: '21%'
    //     });
    //     $('#länkBild2').animate({
    //         width: '21%' 
    //     });
    //     $('#länkBild1').animate({
    //         width: '21%' 
    //     });
    // });
    
});
