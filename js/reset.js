/*
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    //doc.body.clientWidth是获取当前的body的宽度，640是我们的移动端的最大宽度，相除就会得出一个比例，在乘以100px，就会得出我们当前的1rem等于多少px
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    console.log(oBody.style.fontSize);
}
*/

var html = document.querySelector('html');
	 rem();
	window.addEventListener('resize',function () {
		rem();
	})
	function rem() {
		var width = html.getBoundingClientRect().width;
		html.style.fontSize = 100*width/640+ 'px';
	}