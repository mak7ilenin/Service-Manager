// Tools page
const tools_page_mid = $('.tools_page').find('.mid_container');
tools_page_mid.css({position: 'relative', opacity: 0, top: '100px'});

var tools_page_pos = tools_page_mid.position();
var tools_page_height = tools_page_mid.height() * 2;

// Service page
const service_page = $('.service_page');
service_page.css({position: 'relative', opacity: 0, top: '100px'});

var service_page_pos = service_page.position();
var service_page_height = service_page.height() / 2;

// About Us page
const about_page = $('.aboutUs_page');
about_page.css({position: 'relative', opacity: 0, left: '-110%'});

var about_page_pos = about_page.position();
var about_page_height = about_page.height();

// Team page
const team_page = $('.team_page');
team_page.css({position: 'relative', opacity: 0, top: '100px'});

var team_page_pos = team_page.position();
var team_page_height = team_page.height() * 1.2;

// Help page
const help_page = $('.help_page');
help_page.css({position: 'relative', opacity: 0, right: '200%'});

var help_page_pos = help_page.position();
var help_page_height = help_page.height() * 1.3;


// Scroll animation in action
$(window).scroll(() => {
    if($(window).scrollTop() >= tools_page_pos.top - tools_page_height) {
        tools_page_mid.animate({opacity: 1, top: '0px'}, 700);
    }
    if($(window).scrollTop() >= service_page_pos.top - service_page_height) {
        service_page.animate({opacity: 1, top: '0px'}, 700);
    }
    if($(window).scrollTop() >= about_page_pos.top - about_page_height) {
        about_page.animate({opacity: 1, left: '0%'}, 1000);
    }
    if($(window).scrollTop() >= team_page_pos.top - team_page_height) {
        team_page.animate({opacity: 1, top: '0px'}, 700);
    }
    if($(window).scrollTop() >= help_page_pos.top - help_page_height) {
        help_page.animate({opacity: 1, right: '0px'}, 1200);
    }
});