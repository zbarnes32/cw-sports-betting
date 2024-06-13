let bank = 100
let balance = 100

const winFive = 5
const winTwentyFive = 25
const winOneHundred = 100
let winBank = 0
const lossFive = -5
const lossTwentyFive = -25
const lossOneHundred = -100
let lossBank = 0

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
     // console.log('Did this work?', playersEmojis)
}

function getBalance() {
    // Calculates the user's current balance
    let balance = 100
    return balance
}

function drawBalance() {
    const currentBalance = balance;
    // console.log('did it work?', currentBalance)
    const balanceElem = document.getElementById("balance")
    balanceElem.innerText = ` $${currentBalance.toFixed(2)}`
}

function declareTeams() {
    for (let i = 0; i < players.length; i++) {
        let randomTeam = Math.ceil(Math.random() * 2)
        const player = players[i]
        player.teamNumber = randomTeam
    }
}

function draftPlayersToTeams() {
    // Will split from the players from the players array to each team
    // Each player needs to be assigned to either team 1 or team 2
    // Create a math function that would randomly choose 1 or 2
   
    declareTeams()
    // Move players to team's section
    const teamOne = players.filter((player) => player.teamNumber == 1)
    const teamTwo = players.filter((player) => player.teamNumber == 2)
    // console.log(`team one`, teamOne)
    // console.log(`team two`, teamTwo)

    let playerEmoji = ''
    let playerEmojiTwo = ''
    teamOne.forEach((player) => playerEmoji += `<span class="fs-1">${player.emoji}</span>`)
    teamTwo.forEach((player) => playerEmojiTwo += `<span class="fs-1">${player.emoji}</span>`)
    // console.log('test', playerEmoji)
    // console.log('test2', playerEmojiTwo)

    const teamOneElem = document.getElementById('teamOne')
    const teamTwoElem = document.getElementById('teamTwo')

    teamOneElem.innerHTML = playerEmoji
    teamTwoElem.innerHTML = playerEmojiTwo



    // teamOneElem.innerHTML = `<span>${teamOne.players.emoji}</span>`
    // teamTwoElem.innerHTML = `<span>${teamTwo.players.emoji}</span>`

    drawPlayers()

    // console.log('Team', teamChoice)
    // players.forEach((player) => player.teamNumber = teamChoice);
    // console.log(players)
}

function addScores () {
    const teamOne = players.filter((player) => player.teamNumber == 1)
    const teamTwo = players.filter((player) => player.teamNumber == 2)
   // console.log("testOne", teamOne)
   // console.log("testTwo", teamTwo)

    let teamOneScore = 0
    let teamTwoScore = 0
    
    teamOne.forEach((player) => {
        teamOneScore += player.skill
    })

    
    teamTwo.forEach((player) =>  {
        teamTwoScore += player.skill
    })
    
    // console.log("testOne", teamOneScore)
    // console.log("testTwo", teamTwoScore)
    if (teamOneScore > teamTwoScore) {
        console.log('team one wins')
    } else if (teamOneScore < teamTwoScore) {
        console.log('team two wins')
        } else {
            console.log('tie')
        }
}


//ANCHOR drawing to page

drawPlayers();
drawBalance();

