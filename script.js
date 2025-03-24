window.onload = function() {
    let name = prompt("Please enter your name:");
if (name) {
document.getElementById("greeting").innerText = 'Welcome, ' + name + '!';
}
};

localStorage.setItem("name", user1);

let name = JSON.stringify(user1);

