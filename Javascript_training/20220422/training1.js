

const week = {
  monday : ["getUp", "eatBreakfast", "brushMyTeeth", "dressedUp", "goAcademy", "eatLunch", "backHome", "study", "goToBed"],
  tuesday : ["week.monday", "goToDermatology"],
  wendsday :["week.monday", "teachJapaness"],
  thursday : "week.monday",
  friday : "week.monday",
  saterday : ["getUp", "takeACoffe", "eatLunch", "study", "whatchingTv", "walk", "goToBed"],
  sunday : ["getUp", "studyingAtCafe", "takeARest" ]
} 

const like = {
  food : "chicken",
  drink : ["beer", "coffe", "jucie"],
  behavior : ["sleep", "whatchingTv", "stayAtHome"] 
}

let happyThing = `I want to eat drink a ${like.drink[0]} with ${like.food} and ${like.behavior[1]} on friday!`

console.log(happyThing)
console.log(week.monday)
console.log(week)

console.log(`I will do ${week.saterday} on this saterday.`)

// console.log(week.monday[4])








