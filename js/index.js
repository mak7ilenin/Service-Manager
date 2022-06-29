
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


var firstPersonImage = $('#firstPerson').children().attr('src');
var midPersonImage = $('#midPerson').children().attr('src');
var thirdPersonImage = $('#thirdPerson').children().attr('src');

$('.secondary_person').click(function() {
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