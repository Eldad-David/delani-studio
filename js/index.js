// user interface
$(document).ready(function() {
    $('#design').click(function() {
        $('.design-text').show('1s');
        $('#design').hide();
        $('.design-text').click(function() {
            $('.design-text').hide();
            $('#design').show('0.5s');
        });
    });

    $('#dev').click(function() {
        $('.dev-text').show('1s');
        $('#dev').hide();
        $('.dev-text').click(function() {
            $('.dev-text').hide();
            $('#dev').show('0.5s');
        });
    });

    $('#product').click(function() {
        $('.product-text').show('1s');
        $('#product').hide();
        $('.product-text').click(function() {
            $('.product-text').hide();
            $('#product').show('0.5s');
        });
    }); 
});

// code for mouse bounce
function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    };      
};


// code for portfolio images

$(document).ready(function() {
    $(".mouse").hover(function() {
        doBounce($('.mouse'), 50, '5px', 300);   
    });

    $('#work1').hover(function() {
        $('#1-text').show('2s');
        $('#work1').hide();  
        $('#1-text').click(function() {
            $('#1-text').hide();
            $('#work1').show('10s');
        });  
    });
 

    $('#work2').hover(function() {
        $('#2-text').show('2s');
        $('#work2').hide();  
        $('#2-text').click(function() {
            $('#2-text').hide();
            $('#work2').show('10s');
        });  
    });

    $('#work3').hover(function() {
        $('#3-text').show('1s');
        $('#work3').hide();  
        $('#3-text').click(function() {
            $('#3-text').hide();
            $('#work3').show('10s');
        });  
   });

    $('#work4').hover(function() {
        $('#4-text').show('2s');
        $('#work4').hide();  
        $('#4-text').click(function() {
            $('#4-text').hide();
            $('#work4').show('10s');
        });  
    });

    $('#work5').hover(function() {
        $('#5-text').show('2s');
        $('#work5').hide();  
        $('#5-text').click(function() {
            $('#5-text').hide();
            $('#work5').show('10s');
        });  
    });

    $('#work6').hover(function() {
        $('#6-text').show('2s');
        $('#work6').hide();  
        $('#6-text').click(function() {
            $('#6-text').hide();
            $('#work6').show('10s');
        });  
    });

    $('#work7').hover(function() {
        $('#7-text').show('2s');
        $('#work7').hide();  
        $('#7-text').click(function() {
            $('#7-text').hide();
            $('#work7').show('10s');
        });  
    });
    $('#work8').hover(function() {
        $('#8-text').show('2s');
        $('#work8').hide();  
        $('#8-text').click(function() {
            $('#8-text').hide();
            $('#work8').show('10s');
        });  
    });


});



// Business logic
$(document).ready(function() {
    $('.form-group').submit(function() {
        alert('We have successfully recieved your message! Thank you for contacting us.');
    });
});


        