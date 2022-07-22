const inputName = document.querySelector('#name')
const btn = document.querySelector('#btn')
const storySpace = document.querySelector('#story')


const myarray =[

`It was 94 fahrenheit outside, so ${insert} went for a walk. <br> When they got to ${insert}, they stared in horror for a few moments, then ${insert}. <br> Bob saw the whole thing, but was not surprised — ${insert} weighs 300 pounds, and it was a hot day.`,

"Willy the Goblin <br> Big Daddy <br> Father Christmas",

"the soup kitchen <br> Disneyland <br> the White House",

"spontaneously combusted <br> melted into a puddle on the sidewalk <br> turned into a slug and crawled away"
]

//In addition you've got a function called randomValueFromArray() that takes an array, and returns one of the items stored inside the array at random.


let ranNum = Math.floor(Math.random() * (myarray.length)+1);

btn.addEventListener('click', genRanStor)

function genRanStor(){
    ranNum = Math.floor(Math.random() * (myarray.length)+1);
    console.log(ranNum)
    storySpace.innerHTML = myarray[ranNum -1]  
}
    

