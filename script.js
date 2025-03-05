//add task
function attachDragsEvent(target) {
  target.addEventListener("dragstart", function () {
    target.classList.add("flying");
  });

  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

document.getElementById("addTask").addEventListener("click", function () {
  let task = prompt("Enter your Task :");
  if (!task) return;

  const p = document.createElement("p");
  p.innerHTML = task;
  p.classList.add("task");
  p.setAttribute("draggable", true);

  attachDragsEvent(p);

  document.getElementById("todo").append(p);
});

const allBoard = document.querySelectorAll(".board");
const allTask = document.querySelectorAll(".task");

allTask.forEach(attachDragsEvent);

allBoard.forEach((board) => {
  board.addEventListener("dragover", function (e) {
    const flyingElement = document.querySelector(".flying");

    board.appendChild(flyingElement);

    console.log(board, "kichu geche", flyingElement);
  });
});
