const enlaces = document.querySelectorAll('ul li a');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.navegation');
let on_off = true;


enlaces.forEach((link) => {
    
    var links = link.innerText;
    link.dataset.text = links;
    
    link.addEventListener('mouseover', () => {
        menu.style.background = "none";
    });

    link.addEventListener('mouseout', () => {
        menu.style.background = "#fff";
    });

});


btnMenu.addEventListener('click', () => {
    
    if (on_off) {
      menu.style.left = "0";
      menu.style.transition = "300ms";
      on_off = false;
    }else{
      on_off = false;
      menu.style.left = "-100%";
      menu.style.transition = "300ms";
      on_off = true;
    }

});
