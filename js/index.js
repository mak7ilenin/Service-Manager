$('.video_block').each(function() {
    $(this).contents().wrap('<a href="https://www.youtube.com/embed/dAGpVZbWxTk"></a>');
});

$('.top').click(function() {
    $('.hidden_info').animate({
        height: 'toggle'
    }, "fast");
    // $('.hidden_info').css('transform: translateY(-50%)');
    // $('.hidden_info').toggle();
});