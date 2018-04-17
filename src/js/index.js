define(['jquery','swiper'],function($,swiper){
    var fn = function(){
       var mySwiper = new Swiper('.allPage')
       new Swiper('.banner',{
           loop:true,
           autoplay:1000
       });
       $('nav span').on('click',function(){
           var ind= $(this).index();
           mySwiper.slideTo(ind)
       })
    }
    return fn;
})