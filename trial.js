// Siblings 

const myNode = document.querySelector("#p2")
console.log("Current  :", myNode.innerHTML)
const previous = myNode.previousElementSibling.innerHTML
console.log("Previos  :", previous)
const next = myNode.nextElementSibling.innerHTML
console.log("Next  :", next)

const parent = myNode.parentNode.innerHTML
console.log("Parent  :", parent)

const point = myNode.parentNode.previousElementSibling.previousElementSibling.innerHTML
console.log("Top  :", point)


 

