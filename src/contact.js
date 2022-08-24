export default function genContact(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    // creating the header
    let contHeader = document.createElement("div");
    contHeader.classList.add("aboutHead");
    contHeader.innerHTML = "Contact Us"
    content.appendChild(contHeader);
1   
    // creating the information about the restaraunt
    let contactPhone = document.createElement("div");
    let contactEmail = document.createElement("div");

    contactPhone.classList.add("contactInfo");
    contactEmail.classList.add("contactInfo")
    

    contactPhone.innerHTML = "(479)222-2222";
    contactEmail.innerHTML = "owner@candle.com";

    content.appendChild(contactPhone);
    content.appendChild(contactEmail);



    //add a header that says about
    //add a paragraph with the info needed
}



//contactInfo
