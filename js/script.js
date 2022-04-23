let stars = document.querySelector('.stars');
let star = document.querySelectorAll('.star');


for (let i = 0; i < star.length; i++) {
    star[i].style.cssText = "cursor: pointer;"
    star[i].addEventListener('click', ()=>{
        if (star[i].classList.contains('star1')) {
            setTimeout(() => {
                star[0].innerText = "🧡"
            }, 50);
            star[1].innerText = "🖤"
            star[2].innerText = "🖤"
            star[3].innerText = "🖤"
            star[4].innerText = "🖤"
        } else if (star[i].classList.contains('star2')) {
            setTimeout(() => {
                star[0].innerText = "🧡"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "🧡"
            }, 100);
            star[2].innerText = "🖤"
            star[3].innerText = "🖤"
            star[4].innerText = "🖤"
        } else if (star[i].classList.contains('star3')) {
            setTimeout(() => {
                star[0].innerText = "🧡"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "🧡"
            }, 100);
            setTimeout(() => {
                star[2].innerText = "🧡"
            }, 150);
            star[3].innerText = "🖤"
            star[4].innerText = "🖤"
        } else if (star[i].classList.contains('star4')) {
            setTimeout(() => {
                star[0].innerText = "🧡"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "🧡"
            }, 100);
            setTimeout(() => {
                star[2].innerText = "🧡"
            }, 150);
            setTimeout(() => {
                star[3].innerText = "🧡"
            }, 200);
            star[4].innerText = "🖤"
        } else if (star[i].classList.contains('star5')) {
            setTimeout(() => {
                star[0].innerText = "🧡"
            }, 50);
            setTimeout(() => {
                star[1].innerText = "🧡"
            }, 100);
            setTimeout(() => {
                star[2].innerText = "🧡"
            }, 150);
            setTimeout(() => {
                star[3].innerText = "🧡"
            }, 200);
            setTimeout(() => {
                star[4].innerText = "🧡"
            }, 250);
        }
    });

    // star[0].addEventListener('mouseout', ()=>{
    //     star[0].innerText = "🖤";
    // })

    // star[i].addEventListener('click', ()=>{
    //     if (star[i].classList.contains('star1')) {
    //         setTimeout(() => {
    //             star[0].innerText = "🖤"
    //         }, 50);
    //         star[1].innerText = "🖤"
    //         star[2].innerText = "🖤"
    //         star[3].innerText = "🖤"
    //         star[4].innerText = "🖤"
    //     } else if (star[i].classList.contains('star2')) {
    //         setTimeout(() => {
    //             star[0].innerText = "🖤"
    //         }, 100);
    //         setTimeout(() => {
    //             star[1].innerText = "🖤"
    //         }, 50);
    //         star[2].innerText = "🖤"
    //         star[3].innerText = "🖤"
    //         star[4].innerText = "🖤"
    //     } else if (star[i].classList.contains('star3')) {
    //         setTimeout(() => {
    //             star[0].innerText = "🖤"
    //         }, 150);
    //         setTimeout(() => {
    //             star[1].innerText = "🖤"
    //         }, 100);
    //         setTimeout(() => {
    //             star[2].innerText = "🖤"
    //         }, 50);
    //         star[3].innerText = "🖤"
    //         star[4].innerText = "🖤"
    //     } else if (star[i].classList.contains('star4')) {
    //         setTimeout(() => {
    //             star[0].innerText = "🖤"
    //         }, 200);
    //         setTimeout(() => {
    //             star[1].innerText = "🖤"
    //         }, 150);
    //         setTimeout(() => {
    //             star[2].innerText = "🖤"
    //         }, 100);
    //         setTimeout(() => {
    //             star[3].innerText = "🖤"
    //         }, 50);
    //         star[4].innerText = "🖤"
    //     } else if (star[i].classList.contains('star5')) {
    //         setTimeout(() => {
    //             star[0].innerText = "🖤"
    //         }, 250);
    //         setTimeout(() => {
    //             star[1].innerText = "🖤"
    //         }, 200);
    //         setTimeout(() => {
    //             star[2].innerText = "🖤"
    //         }, 150);
    //         setTimeout(() => {
    //             star[3].innerText = "🖤"
    //         }, 100);
    //         setTimeout(() => {
    //             star[4].innerText = "🖤"
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