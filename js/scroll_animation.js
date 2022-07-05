// Main page
const info_block = $('.info_block');
const video_block = $('.video_block');
info_block.hide();
video_block.hide();

info_block.css({position: 'relative', opacity: 0, left: '-100%'});
video_block.css({position: 'relative', opacity: 0, right: '-100%'});

// Tools page
const title_column_mid = $('.tools_page').find('.mid_container');
const title_column_left = $('.left_title');
const title_column_right = $('.right_title');
const advantages_line = $('.advantages_line');

title_column_mid.css({position: 'relative', opacity: 0, top: '100px'});
title_column_left.css({position: 'relative', opacity: 0, left: '-20%'});
title_column_right.css({position: 'relative', opacity: 0, right: '-20%'});
advantages_line.css({opacity: 0});

var tools_page_pos = title_column_mid.position();
var tools_page_height = title_column_mid.height() * 2;

title_column_left.hide();
title_column_right.hide();

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

about_page.hide();

// Team page
const team_page = $('.team_page');
const left_image = $('#firstPerson');
const right_image = $('#thirdPerson');

team_page.css({position: 'relative', opacity: 0, top: '100px'});
left_image.css({position: 'relative', left: '-50%'});
right_image.css({position: 'relative', right: '-50%'});

left_image.hide();
right_image.hide();

var team_page_pos = team_page.position();
var team_page_height = team_page.height() / 10;

// Help page
const help_page = $('.help_page');
const left_input1 = $('.first_input');
const left_input2 = $('.third_input');
const right_input1 = $('.second_input');
const right_input2 = $('.fourth_input');
const big_input = $('.client_message');

help_page.css({position: 'relative', opacity: 0, top: '100px'});

left_input1.css({position: 'relative', opacity: 0, left: '-100%'});
left_input2.css({position: 'relative', opacity: 0, left: '-100%'});

right_input1.css({position: 'relative', opacity: 0, right: '-100%'});
right_input2.css({position: 'relative', opacity: 0, right: '-100%'});

big_input.css({position: 'relative', opacity: 0, bottom: '50px'});

var help_page_pos = help_page.position();
var help_page_height = help_page.height() / 6;


// Scroll animation in action
let main_counter = 0;
let tools_counter = 0;
let service_counter = 0;
let about_counter = 0;
let team_counter = 0;
let help_counter = 0;

$(window).ready(() => {
    if(main_counter < 1) {
        main_counter++;
        info_block.animate({opacity: 1, left: '0'}, 1500, 'swing');
        video_block.animate({opacity: 1, right: '0'}, 1500, 'swing');
    
        info_block.show();
        video_block.show();
        setTimeout(() => {
            info_block.removeAttr('style');
            video_block.removeAttr('style');
        }, 1550)
    }
});

$(window).scroll(() => {
    // Tools page
    if(tools_counter < 1) {
        if($(window).scrollTop() >= tools_page_pos.top - tools_page_height) {
            tools_counter++;
            title_column_left.animate({opacity: 1, left: '0%'}, 1200, 'swing');
            title_column_mid.animate({opacity: 1, top: '0px'}, 1000);
            title_column_right.animate({opacity: 1, right: '0%'}, 1200, 'swing');
            advantages_line.animate({opacity: 1}, 1500, 'swing');
    
            title_column_left.show();
            title_column_right.show();

            setTimeout(() => {
                title_column_left.removeAttr('style');
                title_column_mid.removeAttr('style');
                title_column_right.removeAttr('style');
            }, 1250)
        }
    }
    // Service page
    if(service_counter < 1) {
        if($(window).scrollTop() >= service_page_pos.top - service_page_height) {
            service_counter++;
            service_page.animate({opacity: 1, top: '0px'}, 700);
            setTimeout(() => {
                service_page.removeAttr('style');
            }, 750)
        }
    }
    // About us page
    if(about_counter < 1) {
        if($(window).scrollTop() >= about_page_pos.top - about_page_height) {
            about_counter++;
            about_page.show();
            about_page.animate({
                opacity: 1, 
                left: '0%'
            }, 1500, 'swing');
            setTimeout(() => {
                about_page.removeAttr('style');
            }, 1550)
        }
    }
    // Team page
    if(team_counter < 1) {
        if($(window).scrollTop() >= team_page_pos.top - team_page_height) {
            team_page.animate({opacity: 1, top: '0px'}, 700, 'swing');
            setTimeout(() => {
                team_page.removeAttr('style');
            }, 750)
        }
        if($(window).scrollTop() >= team_page_pos.top - (team_page_height / 100)) {
            team_counter++;
            left_image.animate({left: '0%'}, 700, 'swing');
            right_image.animate({right: '0%'}, 700, 'swing');
    
            left_image.show();
            right_image.show();
            setTimeout(() => {
                left_image.removeAttr('style');
                right_image.removeAttr('style');
            }, 1000)
        }
    }
    // Help page
    if(help_counter < 1) {
        if($(window).scrollTop() >= help_page_pos.top - help_page_height) {
            help_counter++;
            help_page.animate({opacity: 1, top: '0px'}, 1200);
    
            left_input1.animate({opacity: 1, left: '0%'}, 1100, 'swing');
            left_input2.animate({opacity: 1, left: '0%'}, 800, 'swing');
    
            right_input1.animate({opacity: 1, right: '0%'}, 800, 'swing');
            right_input2.animate({opacity: 1, right: '0%'}, 1100, 'swing');
    
            big_input.animate({opacity: 1, bottom: '0px'}, 800);
            setTimeout(() => {
                help_page.removeAttr('style');
                left_input1.removeAttr('style');
                left_input2.removeAttr('style');
                right_input1.removeAttr('style');
                right_input2.removeAttr('style');
                big_input.removeAttr('style');
            }, 1250)
        }
    }
});