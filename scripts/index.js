function deetsOnClick() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    console.log("scrolled");
}

// inject navbar component 
fetch("../components/navbar.html")
    .then(file => file.text())
    .then(text => document.getElementById("navbar").innerHTML = text);

// onclick
const deets = document.getElementById("deets");
deets.addEventListener("click", deetsOnClick);

