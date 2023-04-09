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
        let document_hight = $(document).scrollTop();
        // 視窗高度。
        let window_height = $(window).height();
        // 視窗高度+滑動頂端高度，就是現在滑多少高度。
        // 現在滑動頂端高度。
        let scrollSumWindow_height = window_height + document_hight;
        // 先輸出所有class flex-grow-1的高度。
        $(".flex-grow-1 > p").each(function () {
            // element == this
            // 先偵測，所有class flex-grow-1高度。 
            let a = $(this).offset().top;
            // console.log("物件距離頂端高度", a);
            // console.log("目前視窗觀看高度", scrollSumWindow_height)
            if ($(this).offset().top < scrollSumWindow_height - 200) {
                // console.log("顯示")
                $(this).addClass("show");
            } else {
                $(this).removeClass("show");
            }
        });
        let list_inline_top = $(".list-inline").offset().top;
        // 有多少個class或者是其他元素，$(元素).length，可判斷有多少元素，可以用在eq裡面。
        let howMachTest = $(".test").length;
        // console.log("howMachTest",howMachTest);
        if (list_inline_top < scrollSumWindow_height) {
            let time=0;
            for (let i = 0; i < howMachTest; i++) {
                setTimeout(() => {
                    $(".test").eq(i).addClass("show");
                }, time);
                time=time+750;
            }
            // 舊版寫法要是增加物件，就要多寫。
            // addclass無法使用delay，要用setTimeout，才能能夠
            /*$(".test").eq(0).addClass("show",);
            setTimeout(function () {
                $(".test").eq(1).addClass("show");
            }, 500);
            setTimeout(function () {
                $(".test").eq(2).addClass("show")
            }, 1000);
           setTimeout(() => {
               $(".test").eq(3).addClass("show");
           }, 1500); 
           setTimeout(() => {
               $(".test").eq(4).addClass("show");
           }, 2000);*/  
        } else {
            $(".test").removeClass("show");
        }
        /*
        setTimeout是指延遲時間，啟動finction裡面的程式，
        setTimeout(() => {
            要執行的內容。
        }, timeout:要延遲的時間。);
        */
    });
    // class  XXX下面的class XXX綁定。
    $(".ul_top_chang_font_size .nav-link").click(function (e) {
        // 停止預設動作。 
        e.preventDefault();
        // 找到物件p的font-size。
        let size=$("p").css("font-size");
        // 將裡面的px給去掉。
        size=Number(size.replace("px",""));
        if($(this).text()=="+A"){
            $("p").css("font-size", size+2);
        };
        if($(this).text()=="-A"){
            $("p").css("font-size", size-2);
        };
        
    });
});
