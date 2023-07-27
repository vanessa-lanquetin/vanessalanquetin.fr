import {  ref } from "vue"

const htmlElement = document.querySelector('html')
if(!htmlElement.classList.contains('theme-default')) {
    htmlElement.classList.add('theme-default')
}
const themes = [
    {id: 'default', label: 'Par défaut', previewColor: 'black'},
    { id: 'indigo', label: 'Indigo', previewColor: 'indigo' },
    {id: 'blue', label: 'Bleu', previewColor: 'blue'},
]

let currentThemeName = ref('default')

export default {
    setCurrentTheme(themeName) {
        const oldTheme = `theme-${currentThemeName.value}`
        currentThemeName.value =  themeName
        htmlElement.classList.replace(oldTheme, `theme-${themeName}`)
    },
    currentThemeName,
    availableThemes: themes
}