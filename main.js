
let bodyElement = document.body
let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let buttonEllement = document.createElement('btn')
bodyElement.append(buttonEllement)
buttonEllement.setAttribute('top', 'button')

buttonEllement.addEventListener("click", function () {
    console.log("buttonEllement clicked");
    let newTreeElt = Number(mainElement.append) - 1;
    mainElement.append = newTreeElt
})

let imageElement = document.createElement('img')
mainElement.append(imageElement)
imageElement.setAttribute('src', 'images.jpg')


let linkElement = document.createElement('link')
mainElement.append(linkElement)
let linkText = document.createTextNode('link to Amazon')
linkElement.append(linkText)
linkElement.setAttribute('title', 'linkText')
linkElement.setAttribute('href', 'https://www.amazon.com/')


