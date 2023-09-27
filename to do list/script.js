const inputText = document.getElementById("input-text");
const ListContainer = document.getElementById("list-container");
function addTask(){
    if(inputText.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();
    }

}, false);
