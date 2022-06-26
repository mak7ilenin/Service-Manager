$('.video_block').each(function() {
    $(this).contents().wrap('<a href="https://www.youtube.com/embed/dAGpVZbWxTk"></a>');
});

// No longer relevant but works great
$(window).ready(function() {
    $('.hidden_info').css('display', 'none');
    $('#static_hidden_info').css('display', 'flex');
});
window.addEventListener('load', (e) => {
    let hiddenElements = document.getElementsByClassName('hidden_info');
    for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = 'none';
    }
    document.getElementById('static_hidden_info').style.display = 'flex';
});

// Without jquery

// var dropdown = document.getElementsByClassName('dropdown_info');
// for (let i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         let hiddenElement = dropdown[i].getElementsByClassName('hidden_info');
//         for (let i = 0; i < hiddenElement.length; i++) {
//             if(hiddenElement[i].style.display == 'none') {
//                 hiddenElement[i].style.display = 'flex';
//             }else {
//                 hiddenElement[i].style.display = 'none';
//                 // hiddenElement[i].classList.toggle('hide');
//             }
//         }
//     });
// }

$('.dropdown_info').click(function() {
    var hidden = $(this).find('.hidden_info');
    hidden.each(function() {
        // $('.hidden_info').not($(this).parent()).css('display', 'none');
        // $(this).css('display', 'flex');

        $('.hidden_info').not($(this).parent()).slideUp();
        if($(this).css('display') == 'none' || $(this).css('display') == 'block') {
            $(this).slideDown();
            $(this).css('display', 'flex');
        }
    });
});