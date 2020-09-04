$(() => {
    $(".v-mask").fadeOut(3500,()=>{
        $("html,body").css({ overflowY: "auto" });
    })
    let goTop = $(".goTop");
    goTop.hide();
    $(document).scroll(function () {
        let scrollTop = $(document).scrollTop();
        if (scrollTop > 200) {
            goTop.show(500);
        } else {
            goTop.hide(500);
        }
    })
    goTop.click(function () {
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