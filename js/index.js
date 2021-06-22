// user interface
$(document).ready(function() {
    $('#design').click(function() {
        $('.design-text').show();
        $('#design').hide();
        $('.design-text').click(function() {
            $('.design-text').hide();
            $('#design').show();
        });
    });

    $('#dev').click(function() {
        $('.dev-text').show();
        $('#dev').hide();
        $('.dev-text').click(function() {
            $('.dev-text').hide();
            $('#dev').show();
        });
    });

    $('#product').click(function() {
        $('.product-text').show();
        $('#product').hide();
        $('.product-text').click(function() {
            $('.product-text').hide();
            $('#product').show();
        });
    }); 
});

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    };      
};

$(document).ready(function() {
    $(".mouse").click(function() {
        doBounce($('.mouse'), 50, '5px', 300);   
    });
});





// Business logic
$(document).ready(function() {
    $('.form-group').submit(function() {
        alert('We have successfully recieved your message! Thank you for contacting us.');
    });
});