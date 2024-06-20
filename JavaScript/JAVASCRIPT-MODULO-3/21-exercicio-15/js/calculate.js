export default function calculate(){
    const resulInput = document.querySelector('#result')
    resulInput.value = 'ERROR'
    resulInput.classList.add('error')
    const result = eval(input.value)
    resulInput.value = result
    resulInput.classList.remove('error')
}