
// JQUERY v3.6.0


$('.video').click(function() {
    location.href = 'https://www.youtube.com/embed/dAGpVZbWxTk'
});


$(window).resize(function() {
    autoResizeMain();
});
$(window).ready(function() {
    autoResizeMain();
});
// scrollbar width is 16px
function autoResizeMain() {
    if($(window).width() < (1450 - 16)) {
        var info_block_margin = parseInt($('.info_block').css('margin-top'), 10);
        var video_block_margin = parseInt($('.video_block').css('margin-top'), 10);
        var wrapper_margin = parseInt($('.wrapper').css('margin-top'), 10);
        var autoHeight = ($('.info_block').height() + info_block_margin) 
                    + ($('.video_block').height() + video_block_margin) 
                    + wrapper_margin;

        $('.main_page_image').css({'height': autoHeight + 100});
        $('.main_page').css({'height': autoHeight});
    }
    if($(window).width() >= (1450 - 16)) {
        $('.main_page_image').css({'height': '650px'});
        $('.main_page').css({'height': '600px'});
    }
}


// Burger menu
$('#check').click(function () {
    if($('#check').is(':checked')) {
        $('.burger_container').show();
        $('.burger_container').animate({'right': '0%'}, 10);
        $('.burger_button').show();
        $('input[type=checkbox]').prop('checked', true);
        $('.burger_button').css({'position': 'fixed', 'margin-top': '-30px', 'right': '15px'});
    }
    else {
        $('.burger_container').animate({'right': '-100%'}, 10);
        setTimeout(function () {
            $('input[type=checkbox]').prop('checked', false);
            $('.burger_button').css({'position': 'absolute', 'margin-top': '-7px', 'right': '30px'});
        }, 300);
        setTimeout(function () {
            $('.burger_container').hide();
        }, 800);
    }
});
$(window).ready(function () {
    if($(window).width() <= 915 - 17) {
        $('input[type=checkbox]').prop('checked', false);
        $('.burger_button').show();
        $('.burger_button').css({'right': '15px'});
        $('.burger_container').hide();
    }
    if($(window).width() > 915 - 17) {
        $('.burger_container').animate({'right': '-100%'}, 10);
        setTimeout(function () {
            $('input[type=checkbox]').prop('checked', false);
        }, 300);
        setTimeout(function () {
            $('.burger_container').hide();
            $('.burger_button').removeAttr('style');
            $('.burger_button').hide();
        }, 800);
    }
});
$(window).resize(function() {
    if($(window).width() <= 915 - 17) {
        if($('#check').is(':checked')) {
            
        }else {
            $('input[type=checkbox]').prop('checked', false);
            $('.burger_button').show();
            $('.burger_button').css({'right': '15px'});
            $('.burger_container').hide();
        }
    }
    if($(window).width() > 915 - 17) {
        $('.burger_container').animate({'right': '-100%'}, 10);
        // $('.burger_button').animate({'right': '-100%'}, 300);
        $('.burger_button').hide();
        $('.burger_button').removeAttr('style');
        $('input[type=checkbox]').prop('checked', false);
        setTimeout(function () {
            $('.burger_container').hide();
            // $('.burger_button').removeAttr('style');
        }, 800);
    }
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


if($(window).width() <= 768) {
    var prevPerson = $('#previousPerson1');
    var nextPerson = $('#nextPerson1');
}
if($(window).width() > 768) {
    var prevPerson = $('#previousPerson');
    var nextPerson = $('#nextPerson');
}

var i1=0;
nextPerson.click(function() {
    if(i1 === 0 && i2 === 0) {
        if($(window).width() > 1286) {
            $('.right_block').animate({marginTop: '485px'});
        }
        if($(window).width() <= 1286) {
            $('.right_block').animate({marginTop: '525px'});
        }
        if($(window).width() <= 768) {
            $('.right_block').animate({marginTop: '425px'});
        }
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
        if($(window).width() > 1286) {
            $('.right_block').animate({marginTop: '-485px'});
        }
        if($(window).width() <= 1286) {
            $('.right_block').animate({marginTop: '-525px'});
        }
        if($(window).width() <= 768) {
            $('.right_block').animate({marginTop: '-425px'});
        }
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


var firstPersonImage = $('#firstPerson').children().attr('src');
var midPersonImage = $('#midPerson').children().attr('src');
var thirdPersonImage = $('#thirdPerson').children().attr('src');

var animationTime = 1100;
var disabledClick = false;

$('.secondary_person').click(function() {
    if(disabledClick === true) {
        return false;
    }

    disabledClick = true;
    setTimeout(function() {
        disabledClick = false;
    }, animationTime)

    let thisPerson = $(this);
    let thisSrc = $(this).children().attr('src');

    var mainMember = $('.main_person');
    let mainPersSrc = mainMember.children().attr('src');

    
    // let badMainSrc = mainMember.css('backgroundImage');
    // url("http://127.0.0.1:5500/Images/Ellipse%203.png")
    // let mainSrc = badMainSrc
    //     .replace('url("http://127.0.0.1:5500/', '')
    //     .replace('%', ' ')
    //     .replace('")', '')
    //     .replace('20', '');
    
    // console.log('main ' + mainPersSrc);
    // console.log(thisSrc);
    
    $(this).css({transition: 'all .4s'});
    mainMember.css({transition: 'all .4s'});
    
    $('#team_member_name').fadeOut(900);
    
    thisPerson.children().animate({width: '170px', height: '170px'});
    mainMember.children().animate({width: '100px', height: '100px'});
    mainMember.css({width: '100px', height: '100px', boxShadow: 'none'});

    if(thisPerson.attr('id') === $('.secondary_person:first').attr('id')) {
        thisPerson.animate({left: '205px', opacity: '1'});
        mainMember.animate({right: '230px', opacity: '0.45'});
    }

    if(thisPerson.attr('id') === $('.secondary_person:last').attr('id')) {
        thisPerson.animate({right: '205px', opacity: '1'});
        mainMember.animate({left: '230px', opacity: '0.45'});
    }


    setTimeout(function() {
        mainMember.removeAttr('style');
        thisPerson.removeAttr('style');
        
        thisPerson.children().attr('src', mainPersSrc);
        mainMember.children().attr('src', thisSrc);
        
        thisPerson.css({transition: 'all .4s'});
        mainMember.css({transition: 'all .4s'});
        
        thisPerson.children().css({
            borderRadius: '50%',
            width: '100px',
            height: '100px'
        });
        
        mainMember.children().css({
            borderRadius: '50%',
            width: '160px',
            height: '160px',
        });

        if(thisSrc === firstPersonImage) {
            $('#team_member_name').text('Lana Milley');
        }
        if(thisSrc === midPersonImage) {
            $('#team_member_name').text('Sophie Turner');
        }
        if(thisSrc === thirdPersonImage) {
            $('#team_member_name').text('Eddie Maguare');
        }
        $('#team_member_name').fadeIn();
    }, 850);
    
    setTimeout(function(){
        thisPerson.removeAttr('style');
        mainMember.removeAttr('style');
    }, 850);
});