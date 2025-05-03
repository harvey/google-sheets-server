let url = ""; // include /exec at the end from your google script URL

if (url !== "") {
    document.getElementById("url").value = url;
}

let dataInput = document.getElementById("data");
dataInput.value = "input=abc"; // change this to whatever you want to be your default value

document.getElementById("sendRequest").addEventListener("click", async function () {
    url = document.getElementById("url").value;
    const data = dataInput.value;
    fetch(`${url}?${data}`)
        .then(response => response.text())
        .then(text => {
            document.getElementById("responseText").innerText = text;
        })
        .catch(error => console.log('Error:', error));
});

function updateDataKey(newKey) {
    dataInput.value = `${newKey}=`;
}

// Set up button actions
document.getElementById("inputBtn").addEventListener("click", () => updateDataKey("input"));
document.getElementById("newCellBtn").addEventListener("click", () => updateDataKey("new_cell"));
document.getElementById("readCellBtn").addEventListener("click", () => updateDataKey("read_cell"));
document.getElementById("newPageBtn").addEventListener("click", () => updateDataKey("new_page"));
