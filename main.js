let switcherLis=document.querySelectorAll(".portfolio .container .shuffle li");
let imgs=Array.from(document.querySelectorAll(".portfolio .img-container .box img"));
let boxImage=document.querySelectorAll(".portfolio .img-container .box");


switcherLis.forEach((li)=>{

    li.addEventListener("click" ,removeActive );
    li.addEventListener("click" ,manegesStores );
} );

//Remove Active Class From All lis And added to selected one 
function removeActive() {
    switcherLis.forEach((li)=>{
li.classList.remove("active");
this.classList.add("active");
    })
};

// Manege stores
function manegesStores(){
    boxImage.forEach((img)=>{
        img.style.display='none';
    });
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display='block';


    });
   
};