const teamContainer = document.querySelector(".team-container");

const add = document.getElementById("addMemberButton");

let members = [];


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
})



