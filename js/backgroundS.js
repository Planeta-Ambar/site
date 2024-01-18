const screenshots = document.querySelector(".screenshots");
const rex = document.querySelector("#rex");
const yuti = document.querySelector("#yuti");
const yuti_2 = document.querySelector("#yuti_2");
const anodonto_didi = document.querySelector("#anodonto_didi");
const dilo_didi = document.querySelector("#dilo_didi");
const pachy_didi = document.querySelector("#pachy_didi");
const quetz = document.querySelector("#quetz");
const quetz_2 = document.querySelector("#quetz_2");
const thumbnail = document.querySelector("#thumbnail");
const trike = document.querySelector("#trike");

const imgs = ["rex", "yuti", "yuti_2", "anodonto_didi", "dilo_didi", "pachy_didi", "quetz", "quetz_2", "thumbnail", "trike"];
const img = [rex, yuti, yuti_2, anodonto_didi, dilo_didi, pachy_didi, quetz, quetz_2, thumbnail, trike]

function ContarSegundos() {
    for (let i = 0; i < 10; i++) {
        if (img[i].style.zIndex == "1") {
            //testando
            screenshots.style.backgroundImage = `url("./img/screenshots/${imgs[i]}.png")`;

            console.log("Entrou aqui!")
        }
    }
}

setInterval(ContarSegundos, 500);