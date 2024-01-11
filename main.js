// API
const API = "http://localhost:8800/todos";

getData();

//elemts from html for add
const addInp = document.querySelector(".todo__create__input");
const btnAdd = document.querySelector(".btn__add__todo");
const opBus = document.querySelector(".option__busines");
const opPer = document.querySelector(".option_personal");
const cardCont = document.querySelector(".todo__list__container");
const inpName = document.querySelector(".todo__title__name__input");

// function to save Name in localStorage
function inpNameSaver() {
  let name = inpName.value;
  localStorage.setItem("name", name);
}

inpName.addEventListener("input", inpNameSaver);

window.addEventListener("load", () => {
  let savedName = localStorage.getItem("name");

  if (savedName) {
    inpName.value = savedName;
  }
});

// fetch data function
async function getData() {
  let response = await fetch(API);
  let res = await response.json();
  render(res);
}

//render data
function render(arr) {
  try {
    cardCont.innerHTML = "";
    arr.forEach((item) => {
      cardCont.innerHTML += `
      
      <div class="todo__item__personal" id="${item.id}">
      <div class="checkbox__container checkbox_pink chekbox__in__item">
        <h1 class="checkbox__check__mark hidden chekmark__pink">.</h1>
      </div>
      <input type="text" readonly class="todo__item__text__input" value="${item.title}" />
      <div class="todo__btns__container">
        <button class="todo__item__btn__edit btnEdit" >Edit</button>
        <button class="todo__item__btn__delete  btnDelit">Delete</button>
      </div>
    </div>
  </div>
`;
    });
  } catch (error) {
    console.log(error);
  }
}

//const newData = function () {
const newData = function () {
  const data = {
    id: idGenretor,
    title: addInp.value,
  };
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("fail to post Data");
      }
    })
    .then(() => {
      addInp.value = "";
    })
    .catch((error) => console.log(error));
};

// post

function postNewData() {
  btnAdd.addEventListener("click", () => {
    if (!addInp.value.trim()) {
      alert("fill the input!");
      throw new Error("fail to get input value, check if  inputs filled");
    } else {
      newData();
      getData();
    }
    getData();
  });
}
postNewData();

// elemet from html btn on dlete Form
const delbtn = document.querySelector(".btnDelit");

//delete fetch
async function deleteTodo(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  getData();
}

// delte eventlistener
cardCont.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnDelit")) {
    deleteTodo(e.target.parentElement.parentElement.id);
  }
});

//edit html elems
const editBtn = document.querySelector(".btnEdit");
const edtInp = document.querySelector(".todo__item__text__input");

// Edit function
async function editCard(id, editData) {
  await fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editData),
  });
  getData();
}

// console.log(editBtn);

function handleInputEvent(inputItem, inputItemId) {
  inputItem.addEventListener("input", () => {
    let newValue = inputItem.value;
    editCard(inputItemId, newValue);
  });
}

// Listener to turn off readOnly
cardCont.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnEdit")) {
    const todoItem = e.target.closest(".todo__item__personal");
    const inputItem = todoItem.querySelector(".todo__item__text__input");
    inputItem.readOnly = false;
  }
  const newValue = inputItem.value;
  editCard(id, newValue);
});

// funstion for checkbox toggle
const checkboxes = document.querySelectorAll(".checkbox__container");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    e.currentTarget
      .querySelector(".checkbox__check__mark")
      .classList.toggle("hidden");
  });
});

// function id generetor
function idGenretor() {
  return Math.floor(Math.random() * 999999999999999);
}

getData();
