let But = document.querySelector(".But")

function Hi(event){
    event.preventDefault()

    let N = prompt()
    console.log("Привет,", N)
}

But.addEventListener("click", Hi);
