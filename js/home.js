let index=0;
const slide=document.querySelector('.slides');
const circle=document.querySelectorAll('.circle');

function changePoster(num=1){
    index=index+num;
    if(index>2) index=0;
    else if(index<0) index=2;
    circle.forEach((item)=>item.style.backgroundColor='rgba(128, 128, 128, 0.425)');
    circle[index].style.backgroundColor="rgba(128, 128, 128, 1)";
    slide.style.transform=`translateX(-${100 * index}%)`;
}
setInterval(changePoster,10000);

function posternum(num){
    index=num;
    circle.forEach((item)=>item.style.backgroundColor='rgba(128, 128, 128, 0.425)');
    circle[num].style.backgroundColor="rgba(128, 128, 128, 1)";
    slide.style.transform=`translateX(-${100 * num}%)`;
}


const eyeBtn=document.querySelector('.eye-btn');
    const inputs=document.querySelectorAll('input');
    const passwordInp=document.querySelector('.password-input');
    
    inputs.forEach(input=>{
      input.addEventListener("focus",()=>{
        const parent=input.parentNode;
        parent.classList.add("active");
      })
      input.addEventListener("blur",()=>{
        const parent=input.parentNode;
        parent.classList.remove("active");
      })
    })
    
    eyeBtn.addEventListener("click",()=>{
      if(passwordInp.type === 'password'){
        passwordInp.type='text';
        eyeBtn.innerHTML='<ion-icon name="eye-outline"></ion-icon>';
      }
      else{
        passwordInp.type='password';
        eyeBtn.innerHTML='<ion-icon name="eye-off-outline"></ion-icon>';
      }
    })

    const signInBtn=document.querySelector('.sign-in-btn');
    const signUpBtn=document.querySelector('.sign-up-btn');
    const signUpForm=document.querySelector('.sign-up-form');
    const signInForm=document.querySelector('.sign-in-form');

    signUpBtn.addEventListener("click",()=>{
      signInForm.classList.add('hide');
      signInForm.classList.remove('show');
      signUpForm.classList.add('show');
    })
    signInBtn.addEventListener("click",()=>{
      signInForm.classList.remove('hide');
      signInForm.classList.add('show');
      signUpForm.classList.remove('show');

    })

    const loginIds=document.querySelectorAll('.login-id');
    const loginBox=document.querySelector('.sign-in-up-container');
    const closeBtns=document.querySelectorAll('.close-btn');
    loginIds.forEach(loginId=>{ loginId.addEventListener('click',()=>{
        loginBox.style.display='flex';
        loginBox.style.top=document.body.offsetTop+'px';
        document.body.style.overflowY='hidden';
    })})
    closeBtns.forEach(closeBtn=>{
        closeBtn.addEventListener('click',()=>{
            loginBox.style.display='none';
        document.body.style.overflowY='scroll';
        })
    })
    // setTimeout(()=>{ loginBox.style.display='flex';
    // document.body.style.overflowY='hidden';},15000);

    const prevDWMs=document.querySelectorAll('.prev-dwm');
 const nextDWMs=document.querySelectorAll('.next-dwm');
 const boxDWM=document.querySelector('.slider-box-dwm');
 prevDWMs.forEach(prevDWM=>{prevDWM.addEventListener('click',()=>{
   const parent=prevDWM.parentNode;
    parent.style.marginLeft="0vw";
 })})
 nextDWMs.forEach( nextDWM=>{ nextDWM.addEventListener('click',()=>{
     const parent=nextDWM.parentNode;
    parent.style.marginLeft="-80vw";
 })})

 const offHandle=document.querySelector('.off-card-handle');
 const offHandleArrow=document.querySelector('.arrow');
 const offBox=document.querySelector('.off-card-container');
 let offHandleOut=false;
 offHandle.addEventListener('click',()=>{
  if(offHandleOut === false){
        offBox.style.transform="translateX(0)";
        offHandleArrow.innerHTML='<ion-icon name="caret-forward-outline">';
        offHandleOut=true;
  }else{
        offBox.style.transform="translateX(400px)";
        offHandleArrow.innerHTML='<ion-icon name="caret-back-outline">';
        offHandleOut=false;
  }
 })


 window.onscroll=function(){nav()};

 const bottomNav=document.querySelector('.bottom-nav');
 const logo=document.querySelector('.bottom-nav .logo');
 const btn=document.querySelector('.bottom-nav .mid-nav-right');

 function nav(){
   if( document.documentElement.scrollTop > 220){
      bottomNav.classList.add('fix-nav');
      logo.classList.remove('fix-nav-hide');
      btn.classList.remove('fix-nav-hide');
      setTimeout(()=>{bottomNav.classList.add('slide');},100);
    
    }
    else{
      bottomNav.classList.remove('slide');
      bottomNav.classList.remove('fix-nav');
      logo.classList.add('fix-nav-hide');
      btn.classList.add('fix-nav-hide');
    }
  }


  const bags=document.querySelectorAll(".bag");
  const homeSec=document.querySelector(".home-sec");

  bags.forEach(bag=>bag.addEventListener('click',()=> {
            homeSec.style.display="none";

  }))

  const carts=document.querySelectorAll(".cart");
  const baskets=document.querySelectorAll("#basket");
  let basketCount=0;
carts.forEach(cart=>cart.addEventListener('click',()=>{
  if(cart.innerHTML === "<span>Add to cart</span>"){
    ++basketCount
     baskets.forEach(basket => basket.innerHTML=basketCount);
     cart.innerHTML="<span>Remove</span>";
    }
    else{
      --basketCount
      baskets.forEach(basket =>  basket.innerHTML=basketCount);
      cart.innerHTML="<span>Add to cart</span>";
    }
}))