// ajax (Asyncronous JavaScript and XML)

const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    
    // onload what to do
    document.getElementById("demo").innerHTML = JSON.parse(this.responseText).age
    console.log(JSON.parse(this.responseText))
}

xhttp.open("GET","ajax.json")
xhttp.send()



