console.log("scrit loaded");

// On attend que tout le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");
  let bout=document.querySelector("button")
  let list=document.querySelectorAll("li")

//   bout.addEventListener("click", function () {
//     taskItem.remove();
//   });

  function addTask() {
    // On supprime les espaces

    let taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
      });

      taskItem.addEventListener("dblclick", function () {
        taskItem.remove();
      });

      taskList.appendChild(taskItem);
      taskInput.value = "";
    }

    // bout.addEventListener("click", function () {
    //     list.remove();
    //   });


  }

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
