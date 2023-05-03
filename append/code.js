let bodyHtml = document.querySelector('body')
let nav1HTML = document.createElement('nav')
    // nav1HTML.classList.add("navbar", "bg-body-tertiary")
nav1HTML.className = 'navbar bg-dark'
nav1HTML.setAttribute("data-bs-theme", "dark")
bodyHtml.appendChild(nav1HTML)

let divContainer = document.createElement('div')
divContainer.className = 'container-fluid'
nav1HTML.appendChild(divContainer)

let a_DivContainer = document.createElement('a')
a_DivContainer.className = 'navbar-brand'
a_DivContainer.href = '#'
divContainer.appendChild(a_DivContainer)

let img_a = document.createElement('img')
img_a.src = 'img/logo.svg'
img_a.className = 'logoStar'
a_DivContainer.appendChild(img_a)