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
    
    // $(".list-item").click(function () {
    //     if (index == $(this).attr("data-index")) return;
    //     index = $(this).attr("data-index");
    //     let scrollHeight = index * (height + 10);
    //     if ($("main").scrollTop() == scrollHeight) return;
    //     $("main").animate({ scrollTop: scrollHeight }, 500)
    // })

})