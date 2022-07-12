
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveButtonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

saveButtonEl.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    renderLeads();
})

function renderLeads(){
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += `<li><a target=_blank rel=noopener noreferrer href='#'>${myLeads[i]}</a></li>`;
        listItems += `
        <li>
            <a target=_blank rel=noopener noreferrer href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
    };

    ulEl.innerHTML = listItems;
}