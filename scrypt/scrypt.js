let projectImg = document.querySelector('#projectImg');
let poemText2 = document.querySelector('#poemText2');
let poemText3 = document.querySelector('#poemText3');
let leftBtn = document.querySelector('#leftBtn');
let rightBtn = document.querySelector('#rightBtn');
let page1 = document.querySelector('#page1');
let page2 = document.querySelector('#page2');
let page3 = document.querySelector('#page3');







let links = ["img/images.jpg", "img/images2.jpg", "img/images3.jpg"];
let i = 0;

projectImg.src = links[i];

rightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    i++
    if (i > links.length - 1) {
        i = 0
    }
    projectImg.src = links[i];
})

leftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    i--
    if (i < 0) {
        i = links.length - 1
    }
    projectImg.src = links[i];
})









/*
// ввод переменных
let Page
let jSPage = localStorage.getItem('page');

if (jSPage == 1 || jSPage == 2 || jSPage == 3) {

} else {
    localStorage.setItem('page', 1);
}

Page = +jSPage;


if (Page == 1) {
    poemText1.style = `display: block;`
    page1.checked = 'true'
} else if (Page == 2) {
    poemText2.style = `display: block;`
    page2.checked = 'true'
} else if (Page == 3) {
    poemText3.style = `display: block;`
    page3.checked = 'true'
}
rightBtn.addEventListener('click', () => {
    Page++
    if (Page == 1) {
        poemText1.style = `display: block;`
        poemText2.style = `display: none;`
        poemText3.style = `display: none;`
        page1.checked = 'true'
    } else if (Page == 2) {
        poemText1.style = `display: none;`
        poemText2.style = `display: block;`
        poemText3.style = `display: none;`
        page2.checked = 'true'
    } else if (Page == 3) {
        poemText1.style = `display: none;`
        poemText2.style = `display: none;`
        poemText3.style = `display: block;`
        page3.checked = 'true'
    } else {
        Page = 3
        page3.checked = 'true'
    }
    localStorage.setItem('page', JSON.stringify(Page));
})
leftBtn.addEventListener('click', () => {
    Page--
    if (Page == 1) {
        poemText1.style = `display: block;`
        poemText2.style = `display: none;`
        poemText3.style = `display: none;`
        page1.checked = 'true'
    } else if (Page == 2) {
        poemText1.style = `display: none;`
        poemText2.style = `display: block;`
        poemText3.style = `display: none;`
        page2.checked = 'true'
    } else if (Page == 3) {
        poemText1.style = `display: none;`
        poemText2.style = `display: none;`
        poemText3.style = `display: block;`
        page3.checked = 'true'
    } else {
        Page = 1
        poemText1.style = `display: block;`
        page1.checked = 'true'
    }
    localStorage.setItem('page', JSON.stringify(Page));
})


page1.onclick = function () {
    poemText1.style = `display: block;`
    poemText2.style = `display: none;`
    poemText3.style = `display: none;`
    Page = 1
    localStorage.setItem('page', JSON.stringify(Page));
}
page2.onclick = function () {
    poemText1.style = `display: none;`
    poemText2.style = `display: block;`
    poemText3.style = `display: none;`
    Page = 2
    localStorage.setItem('page', JSON.stringify(Page));
}
page3.onclick = function () {
    poemText1.style = `display: none;`
    poemText2.style = `display: none;`
    poemText3.style = `display: block;`
    Page = 3
    localStorage.setItem('page', JSON.stringify(Page));
}






//page2.checked = true;








*/







