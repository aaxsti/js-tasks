let filelist = document.querySelector("#filelist");
let textarea = document.querySelector("#file");

function saveFile() {
    fetch(filelist.value, {method: "PUT",
        body: textarea.value});
}

function loadCurrentFile() {
    fetch(filelist.value).then(resp => resp.text()).then(file => {
        textarea.value = file;
    });
}

fetch("/").then(resp => resp.text()).then(files => {
  for (let file of files.split("\n")) {
    let option = document.createElement("option");
    option.textContent = file;
    filelist.appendChild(option);
  }
  loadCurrentFile();
});

filelist.addEventListener("change", loadCurrentFile);