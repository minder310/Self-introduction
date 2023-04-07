/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(document).ready(function () {
    $(window).scroll(function () {
        // 先輸出所有class flex-grow-1的高度。
        $(".flex-grow-1 > p").each(function () {
            // element == this
            // 先偵測，所有class flex-grow-1高度。 
            let a= $(this).offset().top;
            console.log("物件距離頂端高度",a);
            // 現在滑動頂端高度。
            let document_hight=$(document).scrollTop();
            // 視窗高度。
            let window_height=$(window).height();
            // 視窗高度+滑動頂端高度，就是現在滑多少高度。
            let scrollSumWindow_height=window_height+document_hight;
            console.log("目前視窗觀看高度",scrollSumWindow_height)
            if($(this).offset().top<scrollSumWindow_height-500){
                console.log("顯示")
                $(this).slideDown(5000);
            }else{
                $(this).slideUp(1000);
            }
            
        });
    });
});
