'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu_item');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        burger.classList.toggle('hamburger_active');
    });

    menuItems.forEach(item => item.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        burger.classList.toggle('hamburger_active');
    }));

});