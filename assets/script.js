/*   смена блока в преимуществах*/


let descriptions = document.querySelectorAll(".description")


let advantages_buttons = document.querySelectorAll(".advantages_button")


for (let i = 0; i < advantages_buttons.length; i++) {
    advantages_buttons[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < advantages_buttons.length; j++) {
            advantages_buttons[j].classList.remove("activ")
        }
        advantages_buttons[i].classList.add("activ");


        for (let k = 0; k < advantages_buttons.length; k++) {
            descriptions[k].classList.add("none")
        }

        descriptions[i].classList.remove("none");

    })
}


/*   увеличение карты*/

let map_img_small = document.querySelector("#map_img_small")
let modalMap = document.querySelector("#modal-map")
let crossMap = document.querySelector("#about_map .cross")
map_img_small.addEventListener("click", function (event) {
    modalMap.classList.remove("none")
})

crossMap.addEventListener("click", function (event) {
    modalMap.classList.add("none")
})


/*   слайдер*/

let controls = document.querySelectorAll("#control li")
let slides = document.querySelectorAll(".slide")

for (let i = 0; i < controls.length; i++) {

    controls[i].addEventListener("click", function (event) {

        /*   слайдер смена цвета у pointed*/

        for (let j = 0; j < controls.length; j++) {
            controls[j].classList.remove("pointed")
        }
        controls[i].classList.add("pointed")

        /*   слайдер смена слайда*/

        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.add("none")
        }
        slides[i].classList.remove("none")



    })
}
/*   модальное окно write us*/

let btnWriteUs = document.querySelector("#btn_writeUs")
let crossWriteUs = document.querySelector("#modal-writeUs .cross")
let modalwriteUs = document.querySelector("#modal-writeUs")
btnWriteUs.addEventListener("click", function (event) {
    modalwriteUs.classList.remove("none")
})

crossWriteUs.addEventListener("click", function (event) {
    modalwriteUs.classList.add("none")
})
