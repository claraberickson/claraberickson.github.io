const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Tommy saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  const newStory = storyText;
//create a new variable newStory = storyText

let xitem = randomValueFromArray;
let yitem = randomValueFromArray;
let zitem = randomValueFromArray;
newStory = newStory.replace :insertx: :inserty: :insertz:

// create 3 more variables xitem, yitem, zitem
// let xitem = randomValueFromArray(insertx)
// let yitm - randsomValueFromArray(inserty)
// let zitem = random
// replace :insertX: :insertY: :insertz:
  if(customName.value !== '') {
    const name = customName.value;
// Step 4 - find bob  replace name
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(21.428571); // replace with the calculation that converts pounds into stone
newStory = newStory.replace 'stone'
    //turn weight into string step two add string and 'stone'together to create one string
    const temperature =  Math.round(94);
// do the same thing that you did for weight

// replace values in string with temp and weight variables

// there is a string method using replace
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
