function addTask() {
  let input = document.getElementById("input");
  let text = input.value.trim();

  let li = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  li.textContent = text;
  li.appendChild(delBtn);
  let ul = document.getElementById("taskList");
  ul.appendChild(li);
  input.value = "";
}
