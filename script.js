const teamContainer = document.querySelector(".team-container");

const add = document.getElementById("addMemberButton");


let members = [
    {
        mName: "Angela Caroll",
        nRole: "Chief Editor",
        mImage: "img/angela-caroll-chief-editor.jpg"
    },
    {
        mName: "Angela Lopez",
        nRole: "Social Media Manager",
        mImage: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        mName: "Barbara Ramos",
        nRole: "Graphic Designer",
        mImage: "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        mName: "Scott Estrada",
        nRole: "Developer",
        mImage: "img/scott-estrada-developer.jpg"
    },
    {
        mName: "Walter Gordon",
        nRole: "Office manager",
        mImage: "img/walter-gordon-office-manager.jpg"
    },
    {
        mName: "Waybe Barnett",
        nRole: "Founder CEO",
        mImage: "img/wayne-barnett-founder-ceo.jpg"
    }
]

for (let i = 0; i < members.length; i++) {
    addCard(members[i].mName, members[i].nRole, members[i].mImage);
}

function addCard(name, role, image) {
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
    img.src = image;
    //add the text
    newCard.appendChild(cardText);
    cardText.classList.add("card-text");
    let title = document.createElement("h3");
    cardText.appendChild(title);
    title.innerText = name;
    let par = document.createElement("p");
    cardText.appendChild(par);
    par.innerText = role;
}



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

    members.push(member);

    addCard(member.mName, member.mRole, member.mImage);
})