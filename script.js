

// ----------------- theme switch ------------------ //
const switchTheme = () => {
    const rootElement = document.documentElement
    let dataTheme = rootElement.getAttribute('data-theme'), 
        newTheme

    newTheme = (dataTheme === 'dark') ? 'light' : 'dark'

    rootElement.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)


// -----------------  ------------------ //

