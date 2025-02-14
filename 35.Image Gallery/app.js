let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openModel(`images/img${index}.jpg`)
    })
})

close.addEventListener('click', () => wrapper.style.display = 'none')

function openModel (pic) {
    wrapper.style.display = 'flex';
    imgWrapper.src = pic
}