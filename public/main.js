let count = 0
let countForTeamTwo = 0

let addOnePointForTeamOne = () => {
  ++count
  let ptagCount = document.querySelector('p.score-team-one')
  ptagCount.textContent = count
}

let subtractOnePointForTeamOne = () => {
  if (count > 0) {
    --count
  } else {
    count = 0
  }
  let ptagCount = document.querySelector('p.score-team-one')
  ptagCount.textContent = count
}

let addOnePointForTeamTwo = () => {
  ++countForTeamTwo
  let ptagCount = document.querySelector('p.score-team-two')
  ptagCount.textContent = countForTeamTwo
}

let subtractOnePointForTeamTwo = () => {
  if (countForTeamTwo > 0) {
    --countForTeamTwo
  } else {
    countForTeamTwo = 0
  }
  let ptagCount = document.querySelector('p.score-team-two')
  ptagCount.textContent = countForTeamTwo
}

let updateTeamOneName = () => {
  let teamOneNameInput = document.querySelector('#new-team-one-name')
  let newName = teamOneNameInput.value
  let teamOneName = document.querySelector('h2.team-one-name')
  teamOneName.textContent = newName
}

let updateTeamTwoName = () => {
  let teamOneNameInput = document.querySelector('#new-team-two-name')
  let newName = teamOneNameInput.value
  let teamTwoName = document.querySelector('h2.team-two-name')
  teamTwoName.textContent = newName
}

const main = () => {
  let ptagCount = document.querySelector('p.score-team-one')
  ptagCount.textContent = count
  let ptagForTeamTwo = document.querySelector('p.score-team-two')
  ptagForTeamTwo.textContent = countForTeamTwo
  let addOneButton = document.querySelector('button.add-for-team-one')
  addOneButton.addEventListener('click', addOnePointForTeamOne)
  let subtractOneButton = document.querySelector('button.subtract-for-team-one')
  subtractOneButton.addEventListener('click', subtractOnePointForTeamOne)
  let addOneButtonForTeamTwo = document.querySelector('button.add-for-team-two')
  addOneButtonForTeamTwo.addEventListener('click', addOnePointForTeamTwo)
  let subtractOneButtonForTeamTwo = document.querySelector(
    'button.subtract-for-team-two'
  )
  subtractOneButtonForTeamTwo.addEventListener(
    'click',
    subtractOnePointForTeamTwo
  )
  let updateTeamOneNameButton = document.querySelector(
    'button.update-team-one-name'
  )
  updateTeamOneNameButton.addEventListener('click', updateTeamOneName)
  let updateTeamTwoNameButton = document.querySelector(
    'button.update-team-two-name'
  )
  updateTeamTwoNameButton.addEventListener('click', updateTeamTwoName)
}

document.addEventListener('DOMContentLoaded', main)
