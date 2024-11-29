var form = document.querySelector("form");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var error = document.querySelector("h4");
var inps = document.querySelectorAll('input[type="text"]');


/*

inp1.addEventListener("input",clearError);
inp2.addEventListener("input",clearError);

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    error.textContent ="";
    error.style.color = "";

    if(inp1.value ==="" && inp2.value === ""){
        error.textContent = "Error! , both input fields are empty";
        error.style.color = "red"
    }
    else if (inp1.value === ""){
        error.textContent = "Error! , input1 fields are empty";
        error.style.color = "red"
    }
    else if (inp2.value === ""){
        error.textContent = "Error! ,  input2 fields are empty";
        error.style.color = "red"
    }
    else{
        error.textContent = "your form is, submitted"; 
        error.style.color = "green";  
    }  
});

function clearError(){
    error.textContent = "";
    error.textContent = "";
}

*/

form.addEventListener("submit" , function(dets){
    dets.preventDefault();

    /*
    inps.forEach(function(inputs){
        if(inputs.value ===""){
            error.textContent = "errror,some fields are empty";
            error.style.color = "red" 
        }
        else{
            error.textContent = "";
            error.style.color = "" 
        }
     
    });

     */

    for(var i = 0 ;i<inps.length ;i++){
        if(inps[i].value ===""){
            error.textContent ="error";
            error.style.color = "red";
        }
        else{
            error.textContent ="form submitted";
            error.style.color = "green";
        }
    }

});
