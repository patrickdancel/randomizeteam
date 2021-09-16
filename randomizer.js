const randBtn = document.querySelector('#randTeam')

randBtn.addEventListener('click', function(e) {
    e.preventDefault();
    randomizeTeam()
})

const nbaTeams = [
    '76ers', 'Nets', 'Bucks', 'Knicks', 'Hawks', 'Heat',
    'Celtics', 'Wizards', 'Pacers', 'Hornets', 'Bulls', 
    'Raptors', 'Cavaliers', 'Magic', 'Pistons', 'Jazz', 
    'Suns', 'Nuggets', 'Clippers', 'Mavericks', 'Trail Blazers', 
    'Lakers', 'Grizzlies', 'Warriors', 'Spurs', 'Pelicans', 
    'Kings', 'Timberwolves', 'Thunder', 'Rockets'
]

const randomizeTeam = () => {
    let nbaRand =  nbaTeams[Math.floor(Math.random() * nbaTeams.length)] 
    const showTeam = document.createElement('LI')
    showTeam.innerText = nbaRand;
    document.body.append(showTeam)

}

