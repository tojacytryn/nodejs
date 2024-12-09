async function add() {
    let number1 = document.querySelector("#number1").value
    let number2 = document.querySelector("#number2").value

    const url = `http://127.0.0.1:3000/add/${number1}/${number2}`

    const data = await fetch(url)
    const response = await data.json()

    const p = document.querySelector("#result")
    p.textContent = `Wynik: ${response}`
}

async function palindrome() {
    let word = document.querySelector("#word").value

    const url = `http://127.0.0.1:3000/palindrome/${word}`

    const data = await fetch(url)
    const response = await data.json()

    const p = document.querySelector("#resultword")
    if (response == true) {
        p.textContent = `Podane słowo jest palindromem.`
    } else {
        p.textContent = `Podane słowo nie jest palindromem.`
    }
}

async function uppercase() {
    let text = document.querySelector("#uppercase").value

    const url = `http://127.0.0.1:3000/uppercase/${text}`

    const data = await fetch(url)
    const response = await data.json()

    const p = document.querySelector("#resultword")
    if (response == true) {
        p.textContent = `Podane słowo jest palindromem.`
    } else {
        p.textContent = `Podane słowo nie jest palindromem.`
    }
}

async function length() {
    let text = document.querySelector("#length").value

    const url = `http://127.0.0.1:3000/length/${text}`

    const data = await fetch(url)
    const response = await data.json()

    const p = document.querySelector("#resultLength")
    p.textContent = response
}



async function isEven() {
    let number = document.querySelector("#number").value

    const url = `http://127.0.0.1:3000/isEven/${number}`

    const data = await fetch(url)
    const response = await data.json()

    const p = document.querySelector("#resultIsEven")
    if (response == true) {
        p.textContent = `Ta liczba jest parzysta.`
    } else {
        p.textContent = `Ta liczba jest nieparzysta.`
    }
}

