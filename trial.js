// ajax (Asyncronous JavaScript and XML)

// const xhttp = new XMLHttpRequest();
// xhttp.onload = function(){
    
//     // onload what to do
//     document.getElementById("demo").innerHTML = JSON.parse(this.responseText).age
//     console.log(JSON.parse(this.responseText))
// }

// xhttp.open("GET","ajax.json")
// xhttp.send()

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    console.log(this.readyState)
    console.log(this.status)
}

xhttp.onload = function(){
    document.getElementById("demo").innerHTML=this.responseText;
    console.log(this)
}
xhttp.open("GET","ajax.txt")
xhttp.send()


