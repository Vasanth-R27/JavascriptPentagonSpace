let string = "";
let outputscreen = document.getElementById("output-screen");

function display(num){
    outputscreen.value += num;
}
function calculation(){
       try{
        outputscreen.value= eval("outputscreen.value");
    }
    catch(err)
       {
        alert("invaild");
       }
    
}
function clear(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}

