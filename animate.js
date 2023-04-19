// Document objects from the DOM
const menu = document.querySelector(".menu");
const hamburgerOne = document.querySelector(".hamburger__one");
const hamburgerTwo = document.querySelector(".hamburger__two");
const hamburgerThree = document.querySelector(".hamburger__three");
const menuList = document.querySelector(".menu__list");

// let toggleState = false;

menu.addEventListener("click", (e) => {
    if (menu.classList.contains("open")){
        menu.classList.remove("open");
        console.log('Nav closed');
        menuList.classList.add("hide");
        if(menuList.classList.contains('show')) menuList.classList.remove("show");
        console.log("Menu Hidden");
    } else {
        menu.classList.add("open");
        console.log("Nav opened");
        menuList.classList.add("show");
        if(menuList.classList.contains('hide')) menuList.classList.remove("hide");
        console.log("Menu Shown");
    }
    // console.log("Toggle State: ", toggleState);
    // console.log("Hamburger 1", hamburgerOne);
    // console.log("Hamburger 2", hamburgerTwo);
    // console.log("Hamburger 3", hamburgerThree);
    // toggleState = !toggleState;
    // if(toggleState) {
        // add some animation to hamburger__one and three


    // }
})