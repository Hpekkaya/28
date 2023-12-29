// create paragraph 
// creates at the end of body inside it 

const para = document.createElement("p")
const node = document.createTextNode("This is new")
para.appendChild(node)
// document.body.appendChild(para)
// console.log(document.documentElement.innerHTML)
const element = document.getElementById("div1")
// element.appendChild(para)
// console.log(document.body.innerHTML)
const child = document.getElementById("p3");
element.insertBefore(para,child)
para.setAttribute("id","p4")
child.remove()



const bodyTest = document.body.innerHTML
console.log(bodyTest)


 

