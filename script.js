let But = document.querySelector(".But")

function Hi(event){
    event.preventDefault()

    let N = prompt("Тебя как зовут?")
    console.log("Привет,",N,"!")
    alert.log(N)
    document.title = "Привет, " + N + "!"
}

But.addEventListener("click", Hi);
