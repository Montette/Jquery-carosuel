$(function () {


    var carouselList = $("#carousel ul");
    var left = $(".fa-angle-left");
    var right = $(".fa-angle-right");


    var inter = setInterval(changeSlide, 3000);

    function changeSlide() {

        carouselList.animate({
            'margin-left': -700
        }, 800, moveFirstSlide);

    };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            'margin-left': 0
        });
   }

    right.click(function () {
        if (!carouselList.is(':animated')) {
            changeSlide()
        }
    })

    left.click(function () {
        if (!carouselList.is(':animated')) {
            carouselList.css({
                'margin-left': -700
            })
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.animate({
                'margin-left': 0
            }, 800);
        }
    })


    $('#carousel ul').hover(function () {
        window.clearInterval(inter);
    }, function () {
        inter = setInterval(changeSlide, 3000);
    });


})
