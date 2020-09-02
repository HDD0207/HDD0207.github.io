$(() => {
    // $(window).on("load",function(){
    //     $(".v-mask").fadeOut(500)
    //     $("html,body").css({overflowY:"auto"})
    // })
    window.onload = new function(){
        $(".v-mask").fadeOut(500)
        $("html,body").css({overflowY:"auto"})
    }
    // if (window.addEventListener) {
    //     window.addEventListener("load", function () {
    //         console.log(1);
    //         $(".v-mask").fadeOut(500);
    //         $("html,body").css({ overflowY: "auto" });
    //     }, false);
    // } else if (window.attachEvent) {
    //     window.attachEvent("onload", function () {
    //         console.log(2);
    //         $(".v-mask").fadeOut(500);
    //         $("html,body").css({ overflowY: "auto" });
    //     });
    // } else if (window.onload) {
    //     window.onload = function () {
    //         console.log(3);
    //         $(".v-mask").fadeOut(500);
    //         $("html,body").css({ overflowY: "auto" });
    //     };
    // }
    let index = 0;
    let goTop = $(".goTop")
    goTop.hide(500);
    $(document).scroll(function () {
        let scrollTop = $(document).scrollTop();
        if (scrollTop > 200) {
            goTop.show(500);
        } else {
            goTop.hide(500);
        }
    })
    goTop.click(function () {
        index = 0;
        $("html,body").animate({ scrollTop: 0 }, 500);
    })
    let bool = true;
    $(".list-nav a").click(function () {
        let scrollTop = $($(this).attr("href")).offset().top;
        if (bool) {
            bool = false;
            $("html,body").animate({ scrollTop }, 500, function () {
                bool = true;
            })
        }
    })

})