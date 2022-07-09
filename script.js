// 1

const btnRemove = document.querySelector(".btn_remove");
btnRemove.addEventListener("click", function () {
  btnRemove.remove();
});

// 2

let image = document.createElement("img");
image.src = "https://picsum.photos/id/1/200/300";
btnRemove.insertAdjacentHTML("afterEnd", image.outerHTML);

// 4

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];

function renderCards(userArr) {
  const characterCard = userArr.map((el) => {
    return `<div class ="poster"><div class ="left-div"><h2>${el.first_name} ${el.last_name}</h2><h4>House: ${el.house}</h4><p>actor: ${el.actor}</p></div><img src='${el.image}'/></div>`;
  });

  return characterCard;
}

let myDiv = document.getElementById("characters-list");

myDiv.innerHTML = renderCards(characters).join("");
