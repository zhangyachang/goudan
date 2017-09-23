/**
 * Created by HiWin10 on 2017/9/18.
 */
//界面尺寸修正
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    /*doc.body.clientWidth是获取当前的body的宽度，640是我们的移动端的最大宽度，相除就会得出一个比例，在乘以100px，就会得出我们当前的1rem等于多少px*/
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    console.log(oBody.style.fontSize);
}


/*搜索框出广告条 显示背景颜色 开始*/
var oHeader = document.getElementsByClassName("header")[0];

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    if(scrollTop>220){
        oHeader.style.background = "#e4393c"
    }else{
        oHeader.style.background = "transparent"
    }
};
/*搜索框出广告条 显示背景颜色 结束*/


/*轮播图 开始*/
var mySwiper = new Swiper ('#swiper1', {
    autoplay: 3000,
    loop: true,
    paginationClickable:true,	//让分页器可以点击切换

    // 如果需要分页器
    pagination: '.swiper-pagination'
});

/*轮播图 结束*/

/*swiper5 开始*/
var mySwiper = new Swiper ('#swiper5', {
    autoplay: 5000,
    loop: true,
    paginationClickable:true,	//让分页器可以点击切换

    // 如果需要分页器
    pagination: '.swiper-pagination'
});




/*swiper5 结束*/



/*swiper2 开始*/
var mySwiper = new Swiper ('#swiper2', {
    autoplay: 1000,
    loop: true,
    paginationClickable:true,	//让分页器可以点击切换

    // 如果需要分页器
    pagination: '.swiper-pagination'
});




/*swiper2 结束*/

