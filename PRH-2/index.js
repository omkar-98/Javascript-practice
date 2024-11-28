

var img1 = document.querySelector(".img-container #img1");
var img2 = document.querySelector(".img-container #img2");

var btn = document.querySelector("button");

btn.addEventListener("click", function() {
//    var src1 = img1.src ;
//    var src2 = img2.src ;
//    img1.src = src2;
//    img2.src1 =src1 ;

var temp = img1.src ;
img1.src = img2.src ;
img2.src = temp;

});

