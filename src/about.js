export default function genAbout(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    // creating the header
    let aboutHead = document.createElement("div");
    aboutHead.classList.add("aboutHead");
    aboutHead.innerHTML = "About"
    content.appendChild(aboutHead);
1   
    // creating the information about the restaraunt
    let aboutPar = document.createElement("div");
    aboutPar.classList.add("aboutPar");
    aboutPar.innerHTML = "This is a store that sells acai bowls in old candle holders for some reason. The hoes gonn love this"
    content.appendChild(aboutPar);


    //add a header that says about
    //add a paragraph with the info needed
}
