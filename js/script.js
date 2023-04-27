$("document").ready(function(){
    for(let i = 0 ; i < 10; i++){
        let divObj = document.createElement("div"); 
        divObj.style.backgroundColor = 'black';
        divObj.style.width = 80 + 20 * i + "px";
        divObj.style.height = 80 + 20 * i + "px";
        document.getElementById("layout3-rec").appendChild(divObj);
    }
    
})
