
// JQUERY v3.6.0


$('.video_block').each(function() {
    $(this).contents().wrap('<a href="https://www.youtube.com/embed/dAGpVZbWxTk"></a>');
});

// No longer relevant but works great
$(window).ready(function() {
    $('.hidden_info').css('display', 'none');
    $('#static_hidden_info').css('display', 'flex');
    // $('.main_person').css({
    //     borderRadius: '50%',
    //     width: '170px',
    //     height: '170px',
    //     backgroundImage: 'url(../Images/Ellipse\ 3.png)',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     boxShadow: 'inset 0 0 10px 15px rgba(0, 0, 0, 0.7)'
    // });
});


$('.dropdown_info').click(function() {
    var hidden = $(this).find('.hidden_info');
    hidden.each(function() {
        // $('.hidden_info').not($(this).parent()).css('display', 'none');
        // $(this).css('display', 'flex');

        $('.hidden_info').not($(this).parent()).slideUp();
        if($(this).css('display') == 'none' || $(this).css('display') == 'block') {
            $(this).slideDown();
            $(this).css('display', 'flex');
        }else {
           $(this).slideUp();
        }
    });
});


var prevPerson = $('#previousPerson');
var nextPerson = $('#nextPerson');

var i1=0;
nextPerson.click(function() {
    if(i1 === 0 && i2 === 0) {
        $('.right_block').animate({marginTop: '485px'});
        nextPerson.css('display', 'none');
        i1++;
        console.log('i2 ' + i2 + ' i1 ' + i1);
        return;
    }
    if(i2 === 1 && i1 === 0) {
        $('.right_block').animate({marginTop: '0px'});
        prevPerson.css('display', 'unset');
        i1=0;
        i2=0;
        console.log('i2 ' + i2 + ' i1 ' + i1);
        return;
    }
});

var i2=0;
prevPerson.click(function() {
    if(i1 === 0 && i2 === 0) {
        $('.right_block').animate({marginTop: '-485px'});
        prevPerson.css('display', 'none');
        i2++;
        console.log('i2 ' + i2 + ' i1 ' + i1);
        return;
    }
    if(i2 === 0 && i1 === 1) {
        $('.right_block').animate({marginTop: '0px'});
        nextPerson.css('display', 'unset');
        i1=0;
        i2=0;
        console.log('i2 ' + i2 + ' i1 ' + i1);
        return;
    }
});


var mainMember = $('.main_person');
var secondaryMember = $('.secondary_person');

secondaryMember.click(function() {
    let secondaries = document.getElementsByClassName('secondary_person');
    for (let i = 0; i < secondaries.length; i++) {
        var secondaryPerson = secondaries[i];
    }
    let thisPerson = $(this);
    let thisSrc = $(this).children().attr('src');
    let badMainSrc = mainMember.css('backgroundImage');
    // url("http://127.0.0.1:5500/Images/Ellipse%203.png")
    let mainSrc = badMainSrc
        .replace('url("http://127.0.0.1:5500/', '')
        .replace('%', ' ')
        .replace('")', '')
        .replace('20', '');

    console.log('main ' + mainSrc);
    console.log(thisSrc);

    $(this).css({transition: 'all .4s'});
    mainMember.css({transition: 'all .4s'});

    $(this).children().css({width: '170px'});
    $(this).css({transform: 'translateX(110%)', opacity: '1'});

    mainMember.css({width: '100px', height: '100px'});
    mainMember.css({transform: 'translateX(-220%)', opacity: '0.45'});

    setTimeout(function() {
        mainMember.removeAttr('style');
        thisPerson.removeAttr('style');

        mainMember.removeClass('main_person');
        mainMember.addClass('secondary_person');
        mainMember.prepend('<img src="">');
        // mainMember.children().attr('src', mainSrc);
        
        thisPerson.addClass('main_person');
        thisPerson.empty();
        thisPerson.removeClass('secondary_person');
        // thisPerson.css({
        //     borderRadius: '50%',
        //     width: '170px',
        //     height: '170px',
        //     backgroundImage: 'url(' + thisSrc + ')',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     boxShadow: 'inset 0 0 10px 15px rgba(0, 0, 0, 0.7)'
        // });
        // secondaryPerson.setAttribute("style", "background-image: url(" + thisSrc + ")");
    }, 200);
});