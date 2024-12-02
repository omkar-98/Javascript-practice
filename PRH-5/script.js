var countDown = document.querySelector("h3");
var start = document.querySelector("#Start");
var end = document.querySelector("#end");
var intervalId;


/*

var currTime ;
function update(){
    var today = new Date();
     currTime = today.getHours() + ":" + String(today.getMinutes()).padStart(2,'0') + ":" + String(today.getSeconds()).padStart(2 ,'0');
    countDown.textContent = currTime;
}

start.addEventListener("click" ,function(){
    update();
    intervalId = setInterval(update,1000);
});

end.addEventListener("click",function(){
    countDown = clearInterval(intervalId);
});

*/

start.addEventListener("click",function(){
    var count = 0;
  intervalId =  setInterval(function(){
        countDown.textContent = count ;
        count++;
    },1000);

});

end.addEventListener("click",function(){
    countDown = clearInterval(intervalId);
})