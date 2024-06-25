const dayjs = require("dayjs")

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirhtday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirhtday.diff(today, 'day')


    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário é em: ${nextBirhtday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday} dias!`)
}

birthday("1996-07-06")