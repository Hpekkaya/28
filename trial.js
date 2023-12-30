// ajax (Asyncronous JavaScript and XML)

const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    debugger
    // onload what to do
    document.getElementById("demo").innerHTML = this.responseText
    console.log(this)
}
debugger
xhttp.open("GET","ajax.txt")
xhttp.send()
