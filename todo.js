const clear = document.querySelector(".clear");
const input = document.getElementById("input");
const list = document.getElementById("list");
const incomp = "glyphicon-minus";
const comp = "glyphicon-ok";
let LIST, id = 0;
let data = localStorage.getItem("TO");
if(data){
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
}
else{
  LIST = [];
  id = 0;
}

function loadList(array){
  let counter = 0;
  array.forEach(function(item){
    addTODO(item.name, counter, item.done);
    counter++;
  });
}

function addTODO(todo, incre, done){
  const DONE = done ? comp : incomp;
  const item = `<li class = "item">
                  <i class = "glyphicon glyphicon-trash" job = "delete" id = ${incre}></i>
                  <i class = "glyphicon ${DONE}" job = "complete" id = ${incre}></i>
                  <span class = "text"> ${todo} </span>
                </li>
                `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function(e){
  if(e.keyCode == 13){
    const toDo = input.value;
    if(toDo){
      addTODO(toDo, id, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
      });
      localStorage.setItem("TO", JSON.stringify(LIST));
      id++;
    }
    input.value = "";
  }
});

function complete(element){
  element.classList.toggle(comp);
  element.classList.toggle(incomp);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeTODO(element){
   element.parentNode.parentNode.removeChild(element.parentNode);
   LIST.splice(element.id, 1);
}

document.addEventListener("click", function(e){
  const element = e.target;
  const job = element.attributes.job.value;
  if(job == "complete"){
    complete(element);
    localStorage.setItem("TO", JSON.stringify(LIST));
  }
  else if(job == "delete"){
    removeTODO(element);
    localStorage.setItem("TO", JSON.stringify(LIST));
  }
  else{
    return;
  }
});
