burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.right-nav');

burger.addEventListener('click',()=>{


navbar.classList.toggle('resp-ht-nav');
navlist.classList.toggle('resp-vis-class');
rightnav.classList.toggle('resp-vis-class');

})