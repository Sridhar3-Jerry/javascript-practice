1.
// const changeTextButton=document.getElementById("changeTextButton");
// changeTextButton.addEventListener('click', ()=>{
//     header.textContent="Text changed"
// });


// 2.

// const box=document.getElementsByClassName("box");
// const boxLength=box.length-1;

// const hideBoxesButton=document.getElementById("hideBoxesButton");
// hideBoxesButton.addEventListener('click',()=>{
//         box[boxLength-2].remove();
// });



//3.
// const text=document.querySelector(".text");
// const tb=document.getElementById("toggleButton");
//  tb.addEventListener('click',()=>{
//     text.classList.toggle("highlight");
//  });




// 4.
// const list_item=document.querySelectorAll("list-item")
// const list_iteml=list_item.length-1;
// const removeItemButton=document.getElementById("removeItemsButton");
// removeItemButton.addEventListener('click',()=>{
//     list_iteml[list_iteml-2].remove();
// })



// 5.
// const title=document.getElementById("title");
// const colorButton=document.getElementById("colorButton");
// colorButton.addEventListener('click',()=>{
//     title.style.backgroundColor="red";
// });




// 6.
// const text=document.querySelector(".text");
// const colorChangeButton=document.getElementById("colorChangeButton");
// colorChangeButton.addEventListener('click',()=>{
//     text.style.color="red"
// });



// 7.
// const info=document.getElementsByClassName("info");
// const toggleButton=document.getElementById("toggleButton");

// let isVisible=true;
// toggleButton.addEventListener('click',()=>{
//     isVisible= !isVisible;
//     for(let i=0;i<=info.length-1;i++){
//         info[i].style.display=isVisible ? 'block':'none';
//     }
// })




// 8.
// var addItemButton=document.getElementById("addItemButton");
// var itemList=document.getElementById("itemList");
// var newItem=document.getElementById("newItem");
//  addItemButton.addEventListener('click',()=>{
//     var listItem=document.createElement("li")
//     listItem.innerHTML=newItem.value+ "<button class='deleteItem'>Delete</button>"
//     itemList.append(listItem);
//  });


//  itemList.addEventListener('click', (event) => {
//     if (event.target.classList.contains('deleteItem')) {
//         event.target.parentElement.remove(); // Remove the parent <li>
//     }
// });



// 9.
// var colorBox=document.getElementsByClassName("color-box");
// var btn=document.getElementById("changeColorsButton");
//  btn.addEventListener('click',()=>{
//     for(i=0;i<=colorBox.length-1;i++){
//     colorBox[i].style.backgroundColor="red"
//  }
//  });