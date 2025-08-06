fetch("../components/navbar.html")
    .then(file => file.text())
    .then(text => document.getElementById("navbar").innerHTML = text);

