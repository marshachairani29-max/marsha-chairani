function login() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (name === "" || pass === "") {
        alert("Nama dan Password harus diisi!");
    } else {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("homePage").classList.remove("hidden");
        document.getElementById("displayName").innerText = name;
    }
}

function logout() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function previewImage(event) {
    const image = document.getElementById("outputImage");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = "block";
}
