// let darkModeBtn = document.getElementById("dark-mode-switch")

// darkModeBtn.addEventListener('click', function changeColor(){
//     let body = document.body
//     body.classList.toggle("dark-mode");
// })

// ----------------- theme switch ------------------ //
const switchTheme = () => {
    const rootElement = document.documentElement
    let dataTheme = rootElement.getAttribute('data-theme'), 
        newTheme

    newTheme = (dataTheme === 'dark') ? 'light' : 'dark'

    rootElement.setAttribute('data-theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)


// -----------------  ------------------ //