const hidden = document.querySelector("main");
const btn = document.querySelector(".fa-arrow-up");
let open = false;

btn.addEventListener('click', function(){
    if(open){
      btn.className = 'fa fa-arrow-up';
      hidden.style.display ="block"
    } else{
      btn.className = 'fa fa-arrow-up open';
      hidden.style.display ="none"
    }

    open = !open;

})



