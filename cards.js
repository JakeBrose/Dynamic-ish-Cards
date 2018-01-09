let outputElement = document.getElementById("outputCard");


function makeDeleteButtonWork(newElement) {
    let deleteButtonThatWillHopefullyWork = newElement.querySelector('.deleteButton')
    console.log('deleteButtonThatWillHopefullyWork', deleteButtonThatWillHopefullyWork);
    deleteButtonThatWillHopefullyWork.addEventListener("click", function (event){
        eventTarget = event.target
        console.log('eventTarget',eventTarget);
        console.log('duuuuh', eventTarget.closest('div'));
        eventTarget.closest('div').remove();
    });
}

let createCard = document.getElementById("createButt").addEventListener("click", function (event){
    let userText = document.getElementById("input1").value;
    elementToAppend = document.createElement('div');
    elementToAppend.innerHTML = userText +`<button class="deleteButton">Delete</button>`;
    outputElement.appendChild(elementToAppend);
    makeDeleteButtonWork(elementToAppend);
});
