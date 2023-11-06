// 1. Creare array dei membri
const members = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg",
  },
];

console.log(members);

// 2. Stampare le informazioni dei singoli membri
const rowElem = document.querySelector(".row");
let membersElems = "";

for (let i = 0; i < members.length; i++) {
  const curMember = members[i]; // singolo membro

  membersElems += `<div class="col">
  <div class="card" style="width: 18rem">
  
    <img src="${curMember.image}" class="card-img-top"/>

    <div class="card-body">
      <h5 class="card-title">${curMember.name}</h5>
      <p class="card-text fw-lighter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Placeat recusandae praesentium.
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item fw-bold">${curMember.role}</li>
    </ul>
  </div>
</div>`;
}

rowElem.innerHTML += membersElems;
