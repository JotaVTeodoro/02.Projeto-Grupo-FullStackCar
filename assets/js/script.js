// configuração do menu

let btnMenu = document.getElementById('button-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
})