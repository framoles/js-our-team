const teamContainer = document.querySelector(".team-container");

const add = document.getElementById("addMemberButton");


add.addEventListener("click", function () {

    let member = {
        mName: undefined,
        mRole: undefined,
        mImage: undefined
    }

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;

    member.mName = name;
    member.mRole = role;
    member.mImage = image;


    let newCard = document.createElement("div");
    teamContainer.appendChild(newCard);
    newCard.classList.add("team-card");

    let cardImage = document.createElement("div");
    let cardText = document.createElement("div");
    //add the image
    newCard.appendChild(cardImage);
    cardImage.classList.add("card-image");
    let img = document.createElement("img");
    cardImage.appendChild(img);
    img.src = "img/" + member.mImage + ".jpg";
    //add the text
    newCard.appendChild(cardText);
    cardText.classList.add("card-text");
    let title = document.createElement("h3");
    cardText.appendChild(title);
    title.innerText = member.mName;
    let par = document.createElement("p");
    cardText.appendChild(par);
    par.innerText = member.mRole;
})