$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayHoverPause:true,
    lazyLoad:true,
    loop:true,
    margin:5,
    stagePadding:5 ,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        485:{
            items:2,
            dots: false
        },
        728:{
            items:3,
            dots:false
        },
        960:{
            items:4,
            dots: false
        }
        ,
        1200:{
            items:5,
            dots: true
        }
    }


});

$('.owl-carousel').on('mousewheel','.owl-stage',function (e) {
    if(e.deltaY>0){
        $('.owl-carousel').trigger('next.owl');
    }else{
        $('.owl-carousel').trigger('prev.owl');
    }
    e.preventDefault();

});