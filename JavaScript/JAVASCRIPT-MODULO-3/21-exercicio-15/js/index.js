import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resulInput = document.getElementById('result')



document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleButtonPress)

input.addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)