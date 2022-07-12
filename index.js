
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveButtonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteButtonEl = document.getElementById("delete-btn");
const tabButtonEl = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

function renderLeads(leads){
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        // listItems += `<li><a target=_blank rel=noopener noreferrer href='#'>${myLeads[i]}</a></li>`;
        listItems += `
        <li>
            <a target=_blank rel=noopener noreferrer href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    };

    ulEl.innerHTML = listItems;
}

saveButtonEl.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    renderLeads(myLeads);
})

deleteButtonEl.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})

tabButtonEl.addEventListener("click", function(){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads(myLeads)
})
