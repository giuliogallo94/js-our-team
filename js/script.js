// 1. Creare array dei membri
const members = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(members);

// 2. Stampare le informazioni dei singoli membri
const rowElem = document.querySelector(".row");
let membersElems = "";
let titleMembers = `<div class="col-12">
<h2 class="mb-3">Our Team</h2>
<p class="mb-5">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Necessitatibus doloremque dicta ipsum labore hic reprehenderit
  dolorem.
</p>
</div>`;

for (let i = 0; i < members.length; i++) {
  const curMember = members[i]; // singolo membro

  membersElems += `<div class="col-5">
  <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Name</h5>
      <p class="card-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Placeat recusandae praesentium.
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
    </ul>
  </div>
</div>`;
}

rowElem.innerHTML = titleMembers + membersElems;
