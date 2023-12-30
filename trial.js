// /storage api 
// localStorage.setItem("name2","Hakan Pekkaya")
// const item = localStorage.getItem("name")
// console.log(item)

// Problem1 : Local_storage : save as string
// // Problem2 : Local_storage : save on it after delete

// const name  = ["Ahmet", "Mustafa"]
// localStorage.setItem("name", JSON.stringify(name))
// const item2 = JSON.parse(localStorage.getItem("name"))
// console.log(item2)

const name1  = ["Mehmet", "Muhammed"]
localStorage.setItem("name", JSON.stringify(name1))
const item = JSON.parse(localStorage.getItem("name"))
console.log(item)
const name2 =  [...JSON.parse(localStorage.getItem("name")),"Mahmut","Ali"]
localStorage.setItem("name",JSON.stringify(name2))
console.log(JSON.parse(localStorage.getItem("name")))

localStorage.removeItem("name")

// In order to add new