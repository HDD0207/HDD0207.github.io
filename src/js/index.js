$(() => {
    let height = $("main").outerHeight(true);
    let index = 0;
    $(".goTop").hide(500);
    $("main").scroll(function (e) {
        let scrollTop = $("main").scrollTop();
        if (scrollTop > 200) {
            $(".goTop").show(500);
        } else {
            $(".goTop").hide(500);
        }
    })
    $(".goTop").click(function () {
        index = 0;
        $("main").animate({ scrollTop: 0 }, 500);
    })
    function init() {
        let width = $(".v-title-item").width();
        let deg = Math.PI / 180;
        // console.log(deg * 30);
        let top = Math.sin(deg * 45);
        // console.log(top)
        let left = Math.cos(deg * 45)

        for (let i = 0; i < $(".v-title-item li").length; i++) {
            $(".v-title-item li").eq(i).css({ transform: `translate(${-left * i}rem, ${top * i}rem)` }) 
        }
    }
    init();
    // $(".list-item").click(function () {
    //     if (index == $(this).attr("data-index")) return;
    //     index = $(this).attr("data-index");
    //     let scrollHeight = index * (height + 10);
    //     if ($("main").scrollTop() == scrollHeight) return;
    //     $("main").animate({ scrollTop: scrollHeight }, 500)
    // })

})