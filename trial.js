// create paragraph 
// creates at the end of body inside it 

const parag = document.createElement("p")
const node = document.createTextNode("This is New")
parag.appendChild(node)
// document.body.appendChild(parag)
// console.log(document.body.innerHTML)

const bodyTest = document.body.innerHTML
const element = document.getElementById("div1")
element.appendChild(parag)
console.log(bodyTest)


 

