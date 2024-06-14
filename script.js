let But = document.querySelector(".But")

function Hi(event){
    event.preventDefault()

    let N = prompt("Тебя как зовут?")
    document.title = "Привет, " + N + "!"
    alert(`Привет, ${N}`)
}

But.addEventListener("click", Hi);
