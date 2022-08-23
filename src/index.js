import './style.css'

let cont = document.getElementById('content')
let doc = document.createElement("div");
doc.innerHTML = "where it at";
doc.classList.add('hello');
cont.appendChild(doc);


console.log('test again')