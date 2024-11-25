var header=document.querySelector(".header");
var h1=header.textContent;
btn.addEventListener("click",function(){
    alert(h1);
});


// var listitem=document.createElement("div");
// listitem.className="box-style";
var body=document.getElementsByTagName("body")

document.getElementById("addBox").addEventListener('click',()=>{
    var listitem=document.createElement("div");
    listitem.className="box-style";
    listitem.textContent="New Box"
    document.querySelector(".container").append(listitem);
})

document.getElementById("removeBox").addEventListener('click',()=>{
    document.querySelector(".container").remove(listitem);
})


document.getElementById("showBoxCount").addEventListener('click',function(){
    
})


// function update(){
//     var listitem=document.createElement("div");
//     listitem.className="box-style";
//     listitem.textContent="New box"
//     document.getElementsByTagName(body)[0].appendChild(listitem);
// }


document.getElementById("alink").addEventListener('click',function(){
    var a=document.createElement("a");
    a.setAttribute("href","https://www.w3schools.com/jsref/met_element_setattribute.asp")
    a.textContent="Hi There";
    document.querySelector(".container").append(a);
    
})

