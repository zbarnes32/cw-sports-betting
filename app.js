let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

function drawPlayers() {
    //Need to show all of the players in the array on the page via emojis
    let playersEmojis = ''
    players.forEach((player) => playersEmojis += `<span class="fs-1">${player.emoji}</span>`)
    const playersElem = document.getElementById("players")
    playersElem.innerHTML = playersEmojis;
     console.log('Did this work?', playersEmojis)
}

function getBalance() {
    // Calculates the user's current balance
    let balance = 100
    return balance

}

function drawBalance() {
    const currentBalance = getBalance();
    // console.log('did it work?', currentBalance)
    const balanceElem = document.getElementById("balance")
    balanceElem.innerText = ` $${currentBalance.toFixed(2)}`
}

function draftPlayersToTeams() {
    // Will split from the players from the players array to each team
    // Each player needs to be assigned to either team 1 or team 2
    // Create a math function that would randomly choose 1 or 2
    for (let i = 0; i < players.length; i++) {
        let randomTeam = Math.ceil(Math.random() * 2)
        const player = players[i]
        player.teamNumber = randomTeam
        // console.log('did it work', player)
    }

    // Move players to team's section
    let teamOne = players.filter((player) => player.teamNumber == 1)
    let teamTwo = players.filter((player) => player.teamNumber == 2)
    console.log(`team one`, teamOne)
    console.log(`team two`, teamTwo)

    let playerEmoji = ''
    teamOne.forEach((player) => playerEmoji += `<span>${player.emoji}</span>`)
    teamTwo.forEach((player) => playerEmoji += `<span>${player.emoji}</span>`)

    const teamOneElem = document.getElementById('teamOne')
    const teamTwoElem = document.getElementById('teamTwo')

    teamOneElem.innerHTML = playerEmoji
    teamTwoElem.innerHTML = playerEmoji



    // teamOneElem.innerHTML = `<span>${teamOne.players.emoji}</span>`
    // teamTwoElem.innerHTML = `<span>${teamTwo.players.emoji}</span>`

    drawPlayers()
    // console.log('Team', teamChoice)
    // players.forEach((player) => player.teamNumber = teamChoice);
    // console.log(players)
}

//ANCHOR drawing to page

drawPlayers();
drawBalance();
