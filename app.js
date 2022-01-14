const patientsList = [
  {
    name: "Astha Singh",
    age: "28",
    gender: "Female",
    contact: "9876543210",
    city: "Pune",
    type: "Appointment",
  },
  {
    name: "Ashok Gangwani",
    age: "47",
    gender: "Male",
    contact: "9876543210",
    city: "Patna",
    type: "Patient",
  },
  {
    name: "Sumit Chakrabarti",
    age: "32",
    gender: "Male",
    contact: "9876543210",
    city: "Noida",
    type: "Appointment",
  },
  {
    name: "Khushi Ganguly",
    age: "55",
    gender: "Female",
    contact: "9876543210",
    city: "Kolkata",
    type: "Patient",
  },
  {
    name: "Mitra Prakash",
    age: "63",
    gender: "Female",
    contact: "9876543210",
    city: "Bangalore",
    type: "Patient",
  },
  {
    name: "Pratyush Taneja",
    age: "19",
    gender: "Male",
    contact: "9876543210",
    city: "Bangalore",
    type: "Appointment",
  },
  {
    name: "Pratik Balakrishnan",
    age: "24",
    gender: "Male",
    contact: "9876543210",
    city: "Delhi",
    type: "Patient",
  },
  {
    name: "Nisha Sule",
    age: "22",
    gender: "Female",
    contact: "9876543210",
    city: "Ahmedabad",
    type: "Patient",
  },
  {
    name: "Kalinda Som",
    age: "29",
    gender: "Female",
    contact: "9876543210",
    city: "Delhi",
    type: "Appointment",
  },
  {
    name: "Prabodh Ganguly",
    age: "37",
    gender: "Male",
    contact: "9876543210",
    city: "Simla",
    type: "Patient",
  },
];

const list = document.getElementById("list");
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filtereditems = patientsList.filter((element) => {
    return element.name.toLocaleLowerCase().includes(searchString);
  });
  displayList(filtereditems, e.target.value);
});

let listitems;
const displayList = (datalist, inputvalue) => {
  const htmlString = datalist.map((element) => {
    let imgsrc;
    element.gender === "Female"
      ? (imgsrc = "../images/female_avatar.svg")
      : (imgsrc = "../images/male_avatar.svg");
    return `
        <li class='list-item'>
          <div class='info'>
            <img src=${imgsrc}>
              <div class='desc'>
                <h2>${element.name}</h2>
                <p>| ${element.age} | ${element.gender} | ${element.contact}</p>
                <p>| ${element.city}</p>
              </div>
          </div>
          <div class='type'>
              <p>${element.type}</p>
          </div>
         </li>
        `;
  });

  list.innerHTML = htmlString
    .concat([
      `<div class='add'><h3>Create <span>${inputvalue}</span></h3><p>New</p></div>`,
    ])
    .join("");
  listitems = document.querySelectorAll(".list-item");
  listitems[0].classList.add("focused");
};
// displayList(patientsList);
let currentFocus = 0;
let focuseditem = document.querySelector(".focused");
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowUp") {
    if (currentFocus != 0) {
      console.log(currentFocus);
      currentFocus -= 1;
      focuseditem = document.querySelector(".focused");
      focuseditem.classList.remove("focused");
      listitems[currentFocus].classList.add("focused");
    }
  } else if (e.code == "ArrowDown") {
    if (currentFocus < listitems.length - 1) {
      console.log(currentFocus);
      currentFocus += 1;
      focuseditem = document.querySelector(".focused");
      focuseditem && focuseditem.classList.remove("focused");
      listitems[currentFocus].classList.add("focused");
    }
  }
});

focuseditem &&
  focuseditem.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      //Do something
    }
  });
