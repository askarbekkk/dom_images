//let imagesThumb = document.querySelector('.images-thumb')
let imagesThumb = document.querySelectorAll('.images-thumb img')
let productImg = document.querySelector('.product-img img')
// imagesThumb.addEventListener('click',  (event)=> {
//     if (event.target.src !== undefined){
// productImg.src = event.target.src
//     }
// })

imagesThumb.forEach(small =>  {
    small.addEventListener('click', (event) => {
        productImg.src = event.target.src
        removeAllActive()
        small.classList.add('active')
    })
})

// imagesThumb.forEach(small =>  {
//     small.addEventListener('click', () => {
//         productImg.src = small.src
//     })
// })
function removeAllActive() {
    imagesThumb.forEach((img)=> {
        img.classList.remove('active')
    })
}

productImg.addEventListener('mousemove', (event) =>  {
    productImg.style.transform = `translate(${event.offsetX/20}px,${event.offsetY/20}px)`
    console.log(event.offsetX)
})