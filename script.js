let But = document.querySelector(".But")

function Hi(event){
    event.preventDefault()

    let N = prompt("Тебя как зовут?")
    alert(`Привет, ${N}`)
    // console.log("Привет,",N,"!")
    document.title = "Привет, " + N + "!"
}

But.addEventListener("click", Hi);
