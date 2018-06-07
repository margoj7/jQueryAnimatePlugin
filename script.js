let div = document.getElementsByClassName("container");
let list = document.createElement("ul");
div[0].appendChild(list);

for (let i = 1; i <= 10; i++) {
    let lItem = document.createElement("li");
    lItem.innerHTML = "This is element number " + i;
    list.appendChild(lItem);
    lItem.style.display = "none";
}
