export default function genMenu(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    // creating the header
    let aboutHead = document.createElement("div");
    aboutHead.classList.add("aboutHead");
    aboutHead.innerHTML = "Menu"
    content.appendChild(aboutHead);
1   
    // creating the information about the restaraunt
    let item1 = document.createElement("div");
    let item2 = document.createElement("div");
    let item3 = document.createElement("div");
    let item4 = document.createElement("div");


    item1.classList.add("menuItem");
    item2.classList.add("menuItem");
    item3.classList.add("menuItem");
    item4.classList.add("menuItem");

    
    item1.innerHTML = "Candle item - coconut and bananas - $12"
    item2.innerHTML = "Candle acai bowl - strawberries and peanut butter - $15"
    item3.innerHTML = "Candle acai bowl - strawberries and peanut butter - $15"
    item4.innerHTML = "Candle acai bowl - strawberries and peanut butter - $15"


    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    content.appendChild(item4);

    //add a header that says about
    //add a paragraph with the info needed
}