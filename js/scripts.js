$(document).ready(function() {
    $('#design').click(function() {
        $('.design-text').show();
        $('#design').hide();
        $('.design-text').click(function() {
            $('.design-text').hide();
            $('#design').show();
        });
    });
});