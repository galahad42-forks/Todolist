const errorMsg = document.querySelector(".err-msg");
const todotInput = document.querySelector(".todoInput");
const addbtn = document.querySelector(".btn");
const todos = document.querySelector(".todos");

addbtn.addEventListener("click", addMe);
todos.addEventListener("click", deleteCheck);

function addMe(e) {
  e.preventDefault();
  //console.log("goat")
  if (todotInput.value == "") {
    errorMsg.style.display = "block";
    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 1000);
  } else {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    let list = document.createElement("li");
    list.innerHTML = todotInput.value;
    list.classList.toggle("fish");

    todoDiv.appendChild(list);

    let done = document.createElement("button");
    done.innerHTML = "<img src = './images/check.png' >";
    done.classList.add("done");

    todoDiv.appendChild(done);

    let trash = document.createElement("button");
    trash.innerHTML = "<img src = './images/trash1.png'>";
    trash.classList.add("trash");
    todoDiv.appendChild(trash);

    todos.appendChild(todoDiv);

    todotInput.value = "";
  }
}

function deleteCheck(e) {
  //console.log(e.target)

  if (e.target.classList[0] === "trash") {
    let move = e.target.parentElement;

    move.classList.add("fall");
    todos.addEventListener("transitionend", () => {
      move.remove();
    });
  }

  if (e.target.classList[0] === "done") {
    let open = e.target.parentElement;
    open.classList.toggle("completed");
  }
}

function dark(){
 var elem= document.body;
elem.classList.toggle("dark-mode")
}