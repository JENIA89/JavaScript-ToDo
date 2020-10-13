const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");

let count = 0;

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});

const createDeleteElements = (value) => {
  count++;
  const btnDel = document.createElement("button");
  const li = document.createElement("li");
  li.className = "li";
  li.textContent = value;

  btnDel.className = "btn";
  btnDel.textContent = "delete";
  li.appendChild(btnDel);

  btnDel.addEventListener("click", (e) => {
    result.removeChild(li);
    count--;
    total.textContent = count;
  });

  li.addEventListener("click", (e) => {
    li.classList.toggle("li-active");
  });

  total.textContent = count;
  result.appendChild(li);
};
