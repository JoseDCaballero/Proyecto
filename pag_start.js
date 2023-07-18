let form = document.getElementById("form");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textarea.value === "") {
    msg.innerHTML = "El comentario no puede estar vacio.";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};