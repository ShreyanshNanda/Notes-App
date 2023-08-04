const notesCont = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".inputBox");

function showNotes(){
    notesCont.innerHTML = localStorage.getItem("notes"); 
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes",notesCont.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Images/delete.png";
    notesCont.appendChild(inputBox).appendChild(img);
})

notesCont.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})