handleClick = () => {
    const userInput = document.getElementById('num').value
    const results = document.getElementById('results')
    const listElement = document.createElement('ul')
    results.appendChild(listElement)
    const inputValue = parseInt(userInput)
    for (let i = 0; i <= inputValue; i++) {
        let listItem = document.createElement('li')
        listItem.innerHTML = divisiblebyThree(i)
        listElement.appendChild(listItem)
    }
}


divisiblebyThree = (number) =>{
    if(number % 3 === 0 && number % 5 === 0){
        return "pingpong"
    }
    if(number % 3 === 0){
        return "Pong"
    }
    return divisiblebyFive(number)
}

divisiblebyFive = (number) =>{
    if(number % 5 === 0 && number % 3 === 0){
        return "pingpong"
    }
    if(number % 5 === 0){
        return "Ping"
    }   
    return number
}
