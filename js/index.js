
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
// scrollbar width is 17px
function autoResizeMain() {
    if($(window).width() < (1450 - 17)) {
        var info_block_margin = parseInt($('.info_block').css('margin-top'), 10);
        var video_block_margin = parseInt($('.video_block').css('margin-top'), 10);
        var wrapper_margin = parseInt($('.wrapper').css('margin-top'), 10);
        var autoHeight = ($('.info_block').height() + info_block_margin) 
                    + ($('.video_block').height() + video_block_margin) 
                    + wrapper_margin;

        $('.main_page_image').css({'height': autoHeight + 100});
        $('.main_page').css({'height': autoHeight});
    }
    if($(window).width() >= (1450 - 17)) {
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
        $('.burger_button').css({'position': 'fixed', 'margin-top': '-30px'});
        if($(window).width() <= 284) {
            $('.burger_button').css({'right': '5px'});
        }
        if($(window).width() > 284) {
            $('.burger_button').css({'right': '15px'});
        }
    }
    else {
        $('.burger_container').animate({'right': '-130%'}, 10);
        setTimeout(function () {
            $('input[type=checkbox]').prop('checked', false);
            $('.burger_button').css({'position': 'absolute', 'margin-top': '-7px'});
            if($(window).width() <= 284) {
                $('.burger_button').css({'right': '5px'});
            }
            if($(window).width() > 284) {
                $('.burger_button').css({'right': '30px'});
            }
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
        if($(window).width() <= 284) {
            $('.burger_button').css({'right': '5px'});
        }
        if($(window).width() > 284) {
            $('.burger_button').css({'right': '15px'});
        }
        $('.burger_container').hide();
    }
    if($(window).width() > 915 - 17) {
        $('.burger_container').animate({'right': '-130%'}, 10);
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
        if($('#check').is(':checked')) {}
        else {
            $('input[type=checkbox]').prop('checked', false);
            $('.burger_button').show();
            if($(window).width() <= 284) {
                $('.burger_button').css({'right': '5px'});
            }
            if($(window).width() > 284) {
                $('.burger_button').css({'right': '15px'});
            }
            $('.burger_container').hide();
        }
    }
    if($(window).width() > 915 - 17) {
        $('.burger_container').animate({'right': '-100%'}, 10);
        $('.burger_button').hide();
        $('.burger_button').removeAttr('style');
        $('input[type=checkbox]').prop('checked', false);
        setTimeout(function () {
            $('.burger_container').hide();
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


// Slider version for big device
var prevPerson = $('#previousPerson');
var nextPerson = $('#nextPerson');
if($(window).width() > 768) {
    var i1=0;
    nextPerson.click(function() {
        if(i1 === 0 && i2 === 0) {
            if($(window).width() > 1286) {
                $('.right_block').animate({marginTop: '485px'});
            }
            if($(window).width() <= 1286) {
                $('.right_block').animate({marginTop: '525px'});
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
}
// Slider version for small device
var nextPerson1 = $('#nextPerson1');
var prevPerson1 = $('#previousPerson1');
// Without JQuery
var current = 0;
var personContainer = document.querySelectorAll('.person_container');
$(window).resize(function() {
    if($(window).width() < 768) {
        function personSlider() {
            for (let i = 0; i < personContainer.length; i++) {
                personContainer[i].style.opacity = '0';
            }
            personContainer[current].style.opacity = '1';
        }
        nextPerson1.click(function() {
            if(current + 1 === personContainer.length) {
                current = 0;
            }else {
                current++;
            }
            personSlider();
        });
        prevPerson1.click(function() {
            if(current - 1 === -1) {
                current = personContainer.length - 1;
            }else {
                current--;
            }
            personSlider();
        });
    }else {
        for (let i = 0; i < personContainer.length; i++) {
            personContainer[i].style.opacity = '1';
        }
    }
});
$(window).ready(function() {
    if($(window).width() < (768 - 17)) {
        function personSlider() {
            for (let i = 0; i < personContainer.length; i++) {
                personContainer[i].style.opacity = '0';
            }
            personContainer[current].style.opacity = '1';
        }
        nextPerson1.click(function() {
            if(current + 1 === personContainer.length) {
                current = 0;
            }else {
                current++;
            }
            personSlider();
        });
        prevPerson1.click(function() {
            if(current - 1 === -1) {
                current = personContainer.length - 1;
            }else {
                current--;
            }
            personSlider();
        });
    }else {
        for (let i = 0; i < personContainer.length; i++) {
            personContainer[i].style.opacity = '1';
        }
    }
});


$(window).ready(function() {
    autoResizeAboutUs();
});
$(window).resize(function() {
    autoResizeAboutUs();
});
// scrollbar width is 17px
function autoResizeAboutUs() {
    var topBlock = $('.aboutUs_page').find($('.left_block'));
    var bottomBlock = $('.aboutUs_page').find($('.right_block'));;
    var topBlock_margin = parseInt(topBlock.css('margin-top'), 10);
    var bottomBlock_margin = parseInt(bottomBlock.css('margin-top'), 10);
    var autoHeight = (topBlock.height() + topBlock_margin) 
        + (bottomBlock.height() + bottomBlock_margin);
    
    var textField = bottomBlock.find($('.person_container')).find('.text_field');
    var imgContainer = bottomBlock.find($('.person_container')).find('.image_container');
    var imgContainer_margin = parseInt(imgContainer.css('margin-top'), 10);
    var autoHeightBlock = textField.height() 
        + imgContainer.height() 
        + imgContainer_margin;
    if($(window).width() < (633 - 17)) {
        bottomBlock.css({'height': autoHeightBlock + 100});
        $('.aboutUs_img').css({'height': autoHeight + 60});
        $('.aboutUs_page').css({'height': autoHeight});
    }
    if($(window).width() > (633 - 17) && $(window).width() < (768 - 17)) {
        bottomBlock.css({'height': '275px'});
        $('.aboutUs_img').css({'height': autoHeight + 30});
        $('.aboutUs_page').css({'height': autoHeight});
    }
    if($(window).width() > (768 - 17)) {
        bottomBlock.removeAttr('style');
        $('.aboutUs_img').css({'height': '564px'});
        $('.aboutUs_page').css({'height': '564px'});
    }
}


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
    // thisPerson.children().css({transform: 'scale(1.7)'});
    // mainMember.children().css({transform: 'scale(0.7)'});
    mainMember.css({width: '100px', height: '100px', boxShadow: 'none'});
    
    if ($(window).width() > 882) {
        if(thisPerson.attr('id') === $('.secondary_person:first').attr('id')) {
            thisPerson.animate({left: '205px', opacity: '1'});
            mainMember.animate({right: '230px', opacity: '0.45'});
        }
        
        if(thisPerson.attr('id') === $('.secondary_person:last').attr('id')) {
            thisPerson.animate({right: '205px', opacity: '1'});
            mainMember.animate({left: '230px', opacity: '0.45'});
        }
    }
    if($(window).width() <= 882 && $(window).width() > 500) {
        if(thisPerson.attr('id') === $('.secondary_person:first').attr('id')) {
            thisPerson.animate({left: '140px', opacity: '1'});
            mainMember.animate({right: '160px', opacity: '0.45'});
        }
    
        if(thisPerson.attr('id') === $('.secondary_person:last').attr('id')) {
            thisPerson.animate({right: '140px', opacity: '1'});
            mainMember.animate({left: '160px', opacity: '0.45'});
        }
    }
    if($(window).width() <= 500) {
        if(thisPerson.attr('id') === $('.secondary_person:first').attr('id')) {
            thisPerson.animate({top: '120px', opacity: '1'});
            mainMember.animate({bottom: '190px', opacity: '0.45'});
        }
    
        if(thisPerson.attr('id') === $('.secondary_person:last').attr('id')) {
            thisPerson.animate({bottom: '120px', opacity: '1'});
            mainMember.animate({top: '190px', opacity: '0.45'});
        }
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