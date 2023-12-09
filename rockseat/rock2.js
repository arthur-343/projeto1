function toggleMode() {
    const html = document.documentElement

    /*if (html.classList.contains("light")){
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }*/

html.classList.toggle('light')
//const img  = document.querySelector("#img")
//const img = document.querySelector("#img"); // Correção aqui

//if (html.classList.contains("light")){
//    img.setAttribute("src", "./rockseat/assets/OIP.jpg")
//}   else{
//    img.setAttribute("src", "./assests/rockseat/assets/manga-anime-musashi-miyamoto-musashi-hd-wallpaper-preview.jpg")
//}
const img = document.querySelector('#rockseat/assets/manga-anime-musashi-miyamoto-musashi-hd-wallpaper-preview.jpg');
img.setAttribute('src', 'rockseat/assets/OIP.jpg');

}

