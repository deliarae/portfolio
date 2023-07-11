let darkModeBtn = document.getElementById("dark-mode-switch")

darkModeBtn.addEventListener('click', function changeColor(){
    let body = document.body
    body.classList.toggle("dark-mode");
})