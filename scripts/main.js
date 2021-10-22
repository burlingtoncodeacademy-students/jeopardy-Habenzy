let roundClock = document.getElementById("round-clock");
let turnClock = document.getElementById("turn-clock");
let questions = document.querySelectorAll(".question");
let turnDisp = document.getElementById("player-turn");
let guess = document.getElementById("guess")
let pass = document.getElementById("pass")
let userAnswer = document.getElementById("user-answer")
let turnInterval;
let currentPlayer = "player-1";
let activeCard;
let questArr = [
  {
    question:
      'Tolkien used this Old English word for "monster" as a synonym for "goblin"',
    answer: "orc",
  },
  {
    question:
      "It's the Queen's royal family name & the name of one of her castles",
    answer: "windsor",
  },
  {
    question:
      "From 1962 through 1997, this North Carolina men's basketball coach had an NCAA record 879 wins",
    answer: "Dean Smith",
  },
  {
    question: "One of 2 landlocked countries in South America",
    answer: ["bolivia", "paraguay"],
  },
  {
    question:
      "His pride had cast him out from heaven, with all his host of rebel angels",
    answer: "Milton",
  },
  {
    question:
      "This Italian word is a musical direction for something you must play; it's obligatory",
    answer: "Obligato",
  },
  {
    question: 'Its slogan is "When You Can\'t Breathe, Nothing Else Matters"',
    answer: "american lung association",
  },
  {
    question:
      "This made headlines when it crashed October 29, 1929; ask your broker, it's healthier now",
    answer: "the Stock Market",
  },
  {
    question:
      'Nebuchadnezzar told him, "Your god is a god of gods, and a lord of kings"',
    answer: "Daniel",
  },
  {
    question:
      'Descartes thought therefore he knew this first person singular form of the verb "to be"',
    answer: "Sum",
  },
  {
    question:
      "The U.S. Air Force Museum's Cold War gallery is, appropriately, in a 200,000-square-foot one of these",
    answer: "a hangar",
  },
  {
    question:
      "(Jimmy of the Clue Crew spins the dreidel on the monitor.)  When it's your spin of the dreidel, hopefully you don't land on this 21st letter of the Hebrew alphabet, or you'll have to add to the pot",
    answer: "shin",
  },
  { question: "John III Sobieski:1674 to 1696", answer: "Poland" },
  {
    question:
      "This Ray-Ban style was designed for military pilots in the 1930s",
    answer: "aviators",
  },
  {
    question:
      "This school's Hasty Pudding Club has been presenting its Woman of the Year Award since 1951",
    answer: "Harvard",
  },
  {
    question:
      " The alpha factor measures a stock's own volatility; this Greek letter compares it to the entire market",
    answer: "beta",
  },
  {
    question:
      "(Sofia of the Clue Crew)  It's the process undergone by the moisture in your breath when it reaches cold air outside & becomes visible",
    answer: "condensation",
  },
  {
    question:
      "Hapsburgs' empire / Low-lying Neusiedler Lake / Hey, Schwarzenegger!",
    answer: "Austria",
  },
  { question: `Hockey's "The Great One"`, answer: "Wayne Gretzky" },
  {
    question:
      "This Buddy Ebsen series had a Nielsen average of 39.1 for 1963-64, the highest season rating from 1960 to today",
    answer: "The Beverly Hillbillies",
  },
  {
    question:
      "It was named for William IV's wife, who was queen when it was founded in 1836",
    answer: "Adelaide",
  },
  {
    question: "What an unlucky surfer has just experienced in this song",
    answer: "a wipeout",
  },
  {
    question:
      'The name of this fried-fish-friendly mayo-based sauce containing capers & pickles is likely derived from a word for "hell"',
    answer: "tartar sauce",
  },
  {
    question: '1993:"An adventure 65 million years in the making"',
    answer: "Jurassic Park",
  },
  {
    question: `You're on this "wing" if you support traditional values & the conservative party line`,
    answer: "right-wing",
  },
  {
    question: `Lawrence of Arabia's wartime memoirs, published in 1926, were called "Seven Pillars of" this`,
    answer: "Wisdom",
  },
  { question: "I Hope I Get It", answer: "A Chorus Line" },
  {
    question:
      "On July 27, 1974 in the only game he ever pitched, Dodger Rex Hudson gave up this man's 726th home run",
    answer: "Hank Aaron",
  },
  {
    question:
      "One story about the origin of the name of this pie says its sweetness attracted a certain insect",
    answer: "shoo-fly pie",
  },
  {
    question: 'Abraham Lincoln said, "The ballot is stronger than" this',
    answer: "The bullet",
  },
  {
    question: 'Samuel Taylor Coleridge:"A Vision in a Dream"',
    answer: "Kubla Khan",
  },
  {
    question:
      "This James Hoban-designed D.C. landmark, lit by electricity in 1891, will offer candlelight tours in December 1999",
    answer: "the White House",
  },
  {
    question:
      "Group seen here, it took its name from a Monty Python skit: (syntax error)",
    answer: "Toad The Wet Sprocket",
  },
  {
    question:
      "This river that winds through Wyoming, Idaho & Oregon is the main tributary of the Columbia River",
    answer: "Snake River",
  },
  {
    question:
      "Apparently bored with his old conquests, in the 1998 version, Godzilla is intent on destroying this metropolis",
    answer: "New York",
  },
  {
    question: `This book says, "Monday burn Millay, Wednesday Whitman, Friday Faulkner...that's our official slogan"`,
    answer: `Fahrenheit 451`,
  },
  {
    question: `He discovered the four largest moons of Jupiter in 1610`,
    answer: `Galileo`,
  },
  {
    question: `Only 2 men have won 3 NCAA scoring titles -- Pete Maravich & this Cincinnati player known as the "Big O"`,
    answer: `Oscar Robertson`,
  },
  {
    question: `It's the scientific name for the lower jaw`,
    answer: `mandible`,
  },
  {
    question: ` In 2007 these studious "Boys" were back in town in Alan Bennett's play at Wyndham's Theatre`,
    answer: `The History Boys`,
  },
  {
    question: ` The world's largest known almond processing center as well as the governor's mansion are in this city`,
    answer: `Sacramento`,
  },
  {
    question: `A U.K. company was vilified for marketing "Little Hooliganz", action figures of fans of this sport`,
    answer: `soccer`,
  },
  {
    question: `This governor wants to appeal to young punks when he gets back into pro wrestling`,
    answer: `Jesse Ventura`,
  },
  {
    question: `Mongolia's annual Naadam festival includes archery, wrestling & the racing of   these animals`,
    answer: `horses`,
  },
  {
    question: `This governor wants to appeal to young punks when he gets back into pro wrestling`,
    answer: `Jesse Ventura`,
  },
  {
    question: `The Buffalo head nickel was also called this type; John Big Tree was a model for it`,
    answer: `an Indian nickel`,
  },
  {
    question: ` If you went to this European capital that existed only from 1949 to 1990, you'd definitely entered the "red zone"`,
    answer: `East Berlin`,
  },
  {
    question: `Bowler hats off to this Belgian painter who had his first exhibition in Brussels in 1927`,
    answer: `(René) Magritte`,
  },
  {
    question: `From Greek words for "living alone", it's the place a monk calls home`,
    answer: `a monastery`,
  },
  {
    question: `At his 1969 inaugural he said, "The greatest honor history can bestow is the title of peacemaker"`,
    answer: `Richard Nixon`,
  },
  {
    question: `Baseball players know the infield is shaped like this gem, which gives the field its name`,
    answer: `a diamond`,
  },
  {
    question: `Driving the Thrust SSC, Andy Green broke the land-speed record going 763 mph at Black Rock Desert in this state`,
    answer: `Nevada`,
  },
  { question: `It's called the "peach of the tropics"`, answer: `a mango` },
  {
    question: "If music be the food of love, play on...",
    answer: `Twelfth Night`,
  },
  {
    question: `In England it is appropriate to fly the Union Jack on April 23, this saint's day`,
    answer: `Saint George`,
  },
  {
    question: `What an unlucky surfer has just experienced in this song`,
    answer: `a wipeout`,
  },
  { question: `It describes a 2-House legislature`, answer: `Bicameral` },
  {
    question: `In August 1977 she opened her first cookie store in Palo Alto, California`,
    answer: `Debbi Fields`,
  },
  {
    question: `The 2 title items in this Carpenters' tune, No. 2 in '71, "always get me down"`,
    answer: "Awaken to a world of wonders",
  },
];

function timer(numSec) {
  turnInterval = setInterval(() => {
    numSec--;
    turnClock.textContent = numSec;
    
    if (numSec === 0) {
      clearInterval(turnInterval);
    }
  }, 1000);
}
//five minute timer
function timer5(numSec, target) {
  target.textContent = `${Math.floor(numSec / 60)}:${numSec % 60}`;

  if (numSec === 0) {
    return;
  } else {
    setTimeout(() => {
      timer5(numSec - 1, target);
    }, 1000);
  }
}

//button event listeners

guess.addEventListener('click', (evt) => {
  evt.preventDefault()
  let answer = userAnswer.value
  let card = document.getElementById(activeCard)

  if(answer.toLowerCase() === questArr[activeCard].answer.toLowerCase()) {
    let scoreDisp = document.getElementById(currentPlayer)
    let playerScore = parseInt(scoreDisp.textContent)
    let newScore = parseInt(card.title) + playerScore

    scoreDisp.textContent = newScore
    clearInterval(turnInterval)
    activeCard = false
    card.textContent = ''
  }
})

questions.forEach((question, index) => {

  question.id = index;

  question.addEventListener("click", (evt) => {
    if(activeCard) {
      return
    }

    activeCard = evt.target.id

    guess.disabled = false;
    pass.disabled = false;

    evt.target.textContent = questArr[evt.target.id].question;

    timer(5);

    pass.addEventListener("click", (evt) => {
      evt.preventDefault();
      currentPlayer = currentPlayer === "player-1" ? "Player 2" : "Player 1";
      turnDisp.textContent = `It is ${currentPlayer}'s turn'`;
      clearInterval(turnInterval);
      timer(5);
    });
  });
});
//Starts round timer on page load
timer5(300, roundClock);
