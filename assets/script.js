const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const close_menu = document.querySelector('.close');


menu_btn.addEventListener('click', function () {
    mobile_menu.style.right = '0';
    menu_btn.style.opacity = '0';
});

close_menu.addEventListener('click',function (){
    mobile_menu.style.right = '100%';
    menu_btn.style.opacity = '100';
   
    

});