// /storage api 
localStorage.setItem("name2","Hakan Pekkaya")
const item = localStorage.getItem("name")
console.log(item)

// Problem1 : Local_storage : save as string
// Problem2 : Local_storage : save on it after delete

const name  = ["Ahmet", "Mustafa"]
localStorage.setItem("name", JSON.stringify(name))
const item2 = JSON.parse(localStorage.getItem("name"))
console.log(item2)
