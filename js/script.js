let stars = document.querySelector('.stars');
let star = document.querySelectorAll('.star');
const starStatus = document.querySelector('.hidestars');


for (let i = 0; i < star.length; i++) {
    star[i].style.cssText = "cursor: pointer;"
    star[i].addEventListener('click', ()=>{
        if (star[i].classList.contains('star1')) {
            setTimeout(() => {
                star[0].innerText = "๐งก"
            }, 50);
            star[1].innerText = "๐ค"
            star[2].innerText = "๐ค"
            star[3].innerText = "๐ค"
            star[4].innerText = "๐ค"
            starStatus.value = "๐งก ๐ค ๐ค ๐ค ๐ค";
        } else if (star[i].classList.contains('star2')) {
            setTimeout(() => {
                star[0].innerText = "๐งก"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "๐งก"
            }, 100);
            star[2].innerText = "๐ค"
            star[3].innerText = "๐ค"
            star[4].innerText = "๐ค"
            starStatus.value = "๐งก ๐งก ๐ค ๐ค ๐ค";
        } else if (star[i].classList.contains('star3')) {
            setTimeout(() => {
                star[0].innerText = "๐งก"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "๐งก"
            }, 100);
            setTimeout(() => {
                star[2].innerText = "๐งก"
            }, 150);
            star[3].innerText = "๐ค"
            star[4].innerText = "๐ค"
            starStatus.value = "๐งก ๐งก ๐งก ๐ค ๐ค";
        } else if (star[i].classList.contains('star4')) {
            setTimeout(() => {
                star[0].innerText = "๐งก"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "๐งก"
            }, 100);
            setTimeout(() => {
                star[2].innerText = "๐งก"
            }, 150);
            setTimeout(() => {
                star[3].innerText = "๐งก"
            }, 200);
            star[4].innerText = "๐ค"
            starStatus.value = "๐งก ๐งก ๐งก ๐งก ๐ค";
        } else if (star[i].classList.contains('star5')) {
            setTimeout(() => {
                star[0].innerText = "๐งก"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "๐งก"
            }, 100);
            setTimeout(() => {
                star[2].innerText = "๐งก"
            }, 150);
            setTimeout(() => {
                star[3].innerText = "๐งก"
            }, 200);
            setTimeout(() => {
                star[4].innerText = "๐งก"
            }, 250);
            starStatus.value = "๐งก ๐งก ๐งก ๐งก ๐งก";
        }
    });

    // star[0].addEventListener('mouseout', ()=>{
    //     star[0].innerText = "๐ค";
    // })

    // star[i].addEventListener('click', ()=>{
    //     if (star[i].classList.contains('star1')) {
    //         setTimeout(() => {
    //             star[0].innerText = "๐ค"
    //         }, 50);
    //         star[1].innerText = "๐ค"
    //         star[2].innerText = "๐ค"
    //         star[3].innerText = "๐ค"
    //         star[4].innerText = "๐ค"
    //     } else if (star[i].classList.contains('star2')) {
    //         setTimeout(() => {
    //             star[0].innerText = "๐ค"
    //         }, 100);
    //         setTimeout(() => {
    //             star[1].innerText = "๐ค"
    //         }, 50);
    //         star[2].innerText = "๐ค"
    //         star[3].innerText = "๐ค"
    //         star[4].innerText = "๐ค"
    //     } else if (star[i].classList.contains('star3')) {
    //         setTimeout(() => {
    //             star[0].innerText = "๐ค"
    //         }, 150);
    //         setTimeout(() => {
    //             star[1].innerText = "๐ค"
    //         }, 100);
    //         setTimeout(() => {
    //             star[2].innerText = "๐ค"
    //         }, 50);
    //         star[3].innerText = "๐ค"
    //         star[4].innerText = "๐ค"
    //     } else if (star[i].classList.contains('star4')) {
    //         setTimeout(() => {
    //             star[0].innerText = "๐ค"
    //         }, 200);
    //         setTimeout(() => {
    //             star[1].innerText = "๐ค"
    //         }, 150);
    //         setTimeout(() => {
    //             star[2].innerText = "๐ค"
    //         }, 100);
    //         setTimeout(() => {
    //             star[3].innerText = "๐ค"
    //         }, 50);
    //         star[4].innerText = "๐ค"
    //     } else if (star[i].classList.contains('star5')) {
    //         setTimeout(() => {
    //             star[0].innerText = "๐ค"
    //         }, 250);
    //         setTimeout(() => {
    //             star[1].innerText = "๐ค"
    //         }, 200);
    //         setTimeout(() => {
    //             star[2].innerText = "๐ค"
    //         }, 150);
    //         setTimeout(() => {
    //             star[3].innerText = "๐ค"
    //         }, 100);
    //         setTimeout(() => {
    //             star[4].innerText = "๐ค"
    //         }, 50);
    //     }
    // });

    // star[i].addEventListener('click', ()=>{
    //     star[i].removeEventListener('mouseout', a);
    // })
}







// const btn = document.querySelector('.click-btn');

// btn.addEventListener('click', (e)=>{
//     e.target.parentElement.classList.add('item-close');
//     e.target.parentElement.classList.remove('item-open');
//     e.target.parentElement.children[6].style.cssText = "display: none;"
    
    
// })

// const btn2 = document.querySelector('.click-btn2');

// btn2.addEventListener('click', (e)=>{
//     e.target.parentElement.classList.remove('item-close');
//     e.target.parentElement.classList.add('item-open');
//     e.target.parentElement.children[6].style.cssText = "display: block;"
    
    
// })

// const item = document.querySelector('.item-open');

// item.addEventListener('click', ()=>{
//     if (item.classList.contains('item-open')){
//         item.classList.add('item-close');
//         item.classList.remove('item-open');
//         item.children[4].style.cssText = "display: none;" 
//         console.log(item.children[4]);
//     } else {
//         item.classList.remove('item-close');
//         item.classList.add('item-open');
//         item.children[4].style.cssText = "display: block;" 
//         console.log(item.children[4]);
//     }
// })

const items = document.querySelectorAll('.item-close');

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', ()=>{

        if (items[i].classList.contains('item-close')){
            items[i].classList.add('item-open');
            items[i].classList.remove('item-close');
            items[i].children[4].style.cssText = "display: block;"
        } else if (items[i].classList.contains('item-open')){
            items[i].classList.add('item-close');
            items[i].classList.remove('item-open');
            items[i].children[4].style.cssText = "display: none;"
        }

        
    });
}

const addBook = document.querySelector('.addBook');
const modalWindow = document.querySelector('.modal-window');
const close = document.querySelector('.close');

addBook.addEventListener('click', ()=> {
    modalWindow.style.display = 'block';
})

close.addEventListener('click', ()=> {
    modalWindow.style.display = 'none';
})

addBook.addEventListener('mouseover', ()=> {
    addBook.style.cssText = "height: 41px;  box-shadow: 0 0 45px rgba(0, 0, 0, .36); padding-top: 12px;";
    
})

addBook.addEventListener('mouseout', ()=> {
    addBook.style.cssText = "height: 40px;  box-shadow: 0 0 45px rgba(0, 0, 0, .26); padding-top: 11px;";
})



function showStars() {
    console.log(starStatus.value)
}