const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  dropdown.classList.toggle("active");
});

// For the Skills
const btnEpx = document.getElementById("btn-exp");
const btnEdu = document.getElementById("btn-edu");

const exp = document.getElementById("exp");
const edu = document.getElementById("edu");

btnEpx.addEventListener("click", () => {
  exp.classList = "text-exp";
  edu.classList = "text-exp skill-selcted";
  btnEpx.classList = "active";
  btnEdu.classList = "";
});
btnEdu.addEventListener("click", () => {
  edu.classList = "text-exp";
  exp.classList = "text-exp skill-selcted";
  btnEdu.classList = "active";
  btnEpx.classList = "";
});

// Feacher output
