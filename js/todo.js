export default function () {
  const cleanTodo = document.querySelector(".clean-todo");
  const TodoText = document.querySelector(".TodoText");
  const todoBlock = document.querySelector(".todo-block");

  TodoText.addEventListener("change", () => {
    let todoItem = document.createElement("div");
    let chechbox = document.createElement("input");
    chechbox.type = "checkbox";

    let span = document.createElement("span");
    span.innerHTML = TodoText.value;
    todoItem.classList.add("todo-item");
    todoBlock.insertAdjacentElement("afterbegin", todoItem);
    todoItem.append(chechbox);
    todoItem.append(span);
    TodoText.value = "";
    chechbox.addEventListener("click", () => {
      let nextNode = chechbox.nextSibling;
      if (nextNode.style.textDecoration == "line-through") {
        nextNode.style.textDecoration = "none";
      } else {
        nextNode.style.textDecoration = "line-through";
      }
    });
  });

  cleanTodo.addEventListener("click", () => {
    
    todoBlock.innerHTML = "";
  });
}
