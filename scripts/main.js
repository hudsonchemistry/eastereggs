//global object
const playingField = {
  boundingBox: document.getElementById('back'),
  mainArea: document.getElementById("main"),
  eggArea: document.getElementById("eggs"),
  width: clamp(window.innerWidth - 20, 400, 1950),
  height: clamp(window.innerHeight - 50, 400, 1295),
  image: {
    canvas: document.getElementById("myCanvas"),
    context: function () {
      return this.canvas.getContext("2d");
    },
    width: 1950,
    height: 1295,
    //x1,y1,x2,y2 with y from the BOTOM of the image
    regions: [
      [ 0, 0, 1950, 420,
        (x, y) => {
          y = playingField.image.height - (y + playingField.image.offset.y);
          return ((0.6 - 1) / 420) * y + 1;
        },
      ],
      [0, 420, 1290, 740, (x, y) => 0.6],
      [0, 740, 1290, 1000, (x, y) => 0.5],
      [640, 1000, 1040, 1100, (x, y) => 0.4],
      [1290, 420, 1950, 1000, (x, y) => 0.6],
      [1450, 1000, 1950, 1100, (x, y) => 0.6],
      [1740, 1100, 1950, 1200, (x, y) => 0.6],
    ],
    minEggHeight: 295,
    offset: { x: 0, y: 0 },
    inRegion: function (x, y) {
      //returns the region number of the coordinates or -1 if not found

      //assume y is from the wrong direction
      y = this.height - y;
      for (let i = 0; i < this.regions.length; i++) {
        //offset y is in the positive direction and offset x is in the negative direction
        if (
          x >= this.regions[i][0] - this.offset.x &&
          x < this.regions[i][2] - this.offset.x &&
          y >= this.regions[i][1] + this.offset.y &&
          y < this.regions[i][3] + this.offset.y
        ) {
          return i;
        }
      }
      return -1;
    },
  },
  setup: {
    popup: document.getElementById("hide-eggs"),
    numEggs: document.getElementById("egg-number"),
    subtract: document.getElementById("subtract"),
    add: document.getElementById("add"),
    start: document.getElementById("start"),
    minMax: document.getElementById("min-max"),
    minEggs: 10,
    maxEggs: eggQuestions.length,
    updateButtonState: function () {
      if (this.numEggs.value < this.maxEggs) {
        this.add.disabled = false;
      } else {
        this.add.disabled = true;
      }
      if (this.numEggs.value > this.minEggs) {
        this.subtract.disabled = false;
      } else {
        this.subtract.disabled = true;
      }
    },
    validateEggNum: function () {
      this.numEggs.value = clamp(
        this.numEggs.value,
        this.minEggs,
        this.maxEggs
      );
      this.updateButtonState();
    },
    restart: document.getElementById("restart"),
  },
  popups: document.getElementById('popups'),
  question: {
    popup: document.getElementById("question-popup"),
    num: 0,
    questionText: document.getElementById("questions"),
    input: document.getElementById("answer-input"),
    checkAnswer: document.getElementById("check-answer"),
    returnEgg: document.getElementById("return"),
    hint: document.getElementById("hint"),
    feedback: document.getElementById("feedback"),
  },
  tracker: {
    header: document.getElementById("header-info"),
    total: document.getElementById("total"),
    correct: document.getElementById("num-correct"),
    reset: function () {
      this.correct.innerHTML = "0";
    },
  },
  win: {
    popup: document.getElementById("completed"),
    hideMore: document.getElementById("hide-more"),
  },
};

document.body.addEventListener("animationend", removeElement);

window.onload = function () {
  //load the image to the canvas when the doucment loads

  playingField.image.canvas.width = playingField.width;
  playingField.image.canvas.height = playingField.height;

  let img = new Image();

  img.onload = function () {
    //offset the image so that the horizontal center is displayed
    playingField.image.offset.x =
      playingField.image.width / 2 - playingField.width / 2;
    //always show the bottom of the image
    playingField.image.offset.y = Math.max(
      0,
      playingField.image.height - playingField.height
    );
    //draw the image with the defined offset
    playingField.image
      .context()
      .drawImage(
        img,
        playingField.image.offset.x,
        playingField.image.offset.y,
        playingField.width,
        playingField.height,
        0,
        0,
        playingField.width,
        playingField.height
      );

      playingField.boundingBox.setAttribute(
        'style',
        `max-width: ${playingField.width}px;
         min-width: ${playingField.width}px;
         max-height: ${playingField.height}px;
         min-height: ${playingField.height}px;`
      );
      playingField.popups.setAttribute(
        'style',
        `left: ${playingField.width/2}px;
         top: ${playingField.height/2}px;`
      )
  };
  //hard code the image so we can grab pixel data with out CORS violation.
  img.src = imgString2();

};

playingField.setup.minMax.innerHTML = `(${playingField.setup.minEggs}-${playingField.setup.maxEggs})`;

playingField.setup.subtract.onclick = () => {
  playingField.setup.numEggs.value--;
  playingField.setup.updateButtonState();
};

playingField.setup.add.onclick = () => {
  playingField.setup.numEggs.value++;
  playingField.setup.updateButtonState();
};

playingField.setup.numEggs.onchange = () => {
  playingField.setup.validateEggNum();
};

playingField.setup.start.onclick = () => {
  //start the game

  //eggQuestions are in the questions.js file
  //make sure number of eggs is valid
  let actualEggs = playingField.setup.numEggs.value;
  let selectedQuestions = new Set();

  for (let i = 0; i < actualEggs; i++) {
    let randQ;
    do {
      randQ = randomIntFromInterval(0, eggQuestions.length - 1);
    } while (selectedQuestions.has(randQ));
    selectedQuestions.add(randQ);
    let egg = coloredEgg(randQ);
    playingField.eggArea.appendChild(egg);
  }

  playingField.tracker.total.innerHTML = actualEggs;

  //hide the setup screen
  playingField.setup.popup.classList.add("hidden");
};

playingField.setup.restart.onclick = () => {
  playingField.eggArea.innerHTML = "";
  playingField.question.popup.classList.add("hidden");
  playingField.setup.popup.classList.remove("hidden");
  playingField.win.popup.hidden = true;
  playingField.tracker.reset();
};

playingField.win.hideMore.onclick = playingField.setup.restart.onclick;

playingField.question.returnEgg.onclick = returnEgg;
playingField.image.canvas.onclick = returnEgg;
function returnEgg() {
  playingField.question.input.value = "";
  playingField.question.popup.classList.add("hidden");
}

playingField.question.hint.onclick = () => {
  let questImage = document.getElementById("hint-images");
  questImage.hidden = false;
};

playingField.question.checkAnswer.onclick = () => {
  //check if the answer is correct
  let correctAnswer = eggQuestions[playingField.question.num].answers.reduce(
    (acc, cv) => acc + cv,
    ""
  );

  playingField.question.feedback.classList.remove("hidden");

  if (playingField.question.input.value === correctAnswer) {
    let egg = document.getElementById(`egg${playingField.question.num}`);
    egg.classList.add("removed");
    playingField.question.feedback.innerHTML = "Correct!";
    playingField.question.popup.classList.add("removed");
    playingField.question.input.value = "";
    //increment the counter
    playingField.tracker.correct.innerHTML++;
    if (
      playingField.tracker.correct.innerHTML ===
      playingField.setup.numEggs.value
    ) {
      playingField.win.popup.hidden = false;
    }
  } else {
    //wrong answer feedback
    playingField.question.feedback.innerHTML =
      "Incorrect! Make sure capitalization is correct!";
  }
};

const coloredEgg = (id) => {
  //returns a completed egg div

  //rotate the egg for more variety
  let maxAngle = 120,
    angle = Math.random() * maxAngle - maxAngle / 2;
  //set the width of the egg div
  let eWidth = 25,
    eHeight = 30;

  //put an egg in a defined region
  let x = -1,
    y = -1;
  let region = -1;
  while (region === -1) {
    x = randomIntFromInterval(10, playingField.width - eWidth);
    //y here is from the top of the playing field
    y = randomIntFromInterval(10, playingField.height - eHeight);
    region = playingField.image.inRegion(x, y);
  }

  //give the egg a color based on the pixel color close to the egg
  let pixelData = playingField.image
    .context()
    .getImageData(x + 10, y + 10, 1, 1).data;
  let colorArrayHSL = rgbToHSL(pixelData[0], pixelData[1], pixelData[2]);

  //clamp the color to be pastelly
  colorArrayHSL[1] = clamp(colorArrayHSL[1] * 2, 60, 100);
  colorArrayHSL[2] = clamp(colorArrayHSL[1] / 60, 0.5, 1);

  //scale the eggs based on 'distance'
  let scale = playingField.image.regions[region][4](x, y) * 1.2;

  //create the egg html
  let egg = document.createElement("div");
  egg.id = "egg" + id;

  egg.style = `width: ${eWidth}px; height: ${eHeight}px`;
  egg.style.position = "absolute";
  egg.style.left = `${x}px`;
  egg.style.top = `${y}px`;

  //add the SVG with the modifications for scale and angle
  egg.innerHTML = `<svg id="egg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 55 72" style="transform: rotateZ(${angle}deg) scale(${scale},${scale});">
    <defs id="defs4${id}">
      <radialGradient
        id="radialGradient3886${id}"
        fx="547.73999"
        fy="430.03"
        gradientUnits="userSpaceOnUse"
        cy="492.35999"
        cx="567.08002"
        gradientTransform="matrix(0.13360925,-2.0245588e-8,3.6293489e-8,0.24149731,-39.410055,-85.19999)"
        r="135.41">
        <stop id="stop3761${id}"
          style="stop-color:#ffffff"
          offset="0" />
        <stop
          id="stop3763${id}"
          style="stop-color:#ffffff;stop-opacity:0"
          offset="1" />
      </radialGradient>
      <radialGradient
        id="radialGradient3888${id}"
        fx="370.47"
        fy="510.73999"
        gradientUnits="userSpaceOnUse"
        cy="492.35999"
        cx="377.5"
        gradientTransform="matrix(0.29393022,1.6748936e-8,-3.0326593e-8,0.53664252,-99.934785,-230.52167)"
        r="135.41">
        <stop
          id="stop3773${id}"
          offset="0"
          style="stop-color:hsl(${colorArrayHSL[0]},${colorArrayHSL[1]}%, ${
    42 * colorArrayHSL[2]
  }%)" />
        <stop
          id="stop3777${id}"
          style="stop-color:hsl(${colorArrayHSL[0]}, ${colorArrayHSL[1]}%, ${
    42 * colorArrayHSL[2]
  }%);stop-opacity:0.33071"
          offset="0.45455" />
        <stop
          id="stop3775${id}"
          style="stop-color:hsl(${colorArrayHSL[0]}, ${colorArrayHSL[1]}%, ${
    42 * colorArrayHSL[2]
  }%);stop-opacity:0"
          offset="1" />
      </radialGradient>
    </defs>
    <g id="layer1" transform="translate(${angle < 0 ? 0 : 50},2) scale(${
    angle < 0 ? 1 : -1
  }, 1)">
      <path
        id="path2987${id}"
        d="m 25.500235,1 c 28.9479,0 36.1849,65.40211 0,65.40211 -36.1849,0 -28.9479004,-65.40211 0,-65.40211 z"
        style="fill:hsl(${colorArrayHSL[0]}, ${colorArrayHSL[1]}%, ${
    83 * colorArrayHSL[2]
  }%);stroke:none;stroke-width:0.999999;stroke-opacity:1"
          />
      <path
        id="path3757${id}"
        style="opacity:0.72441;fill:url(#radialGradient3886${id});stroke:none;stroke-width:0.999999"
        d="m 25.500235,1 c 28.9479,0 36.1849,65.40211 0,65.40211 -36.1849,0 -28.9479004,-65.40211 0,-65.40211 z" />
      <path
        id="path3767"
        d="m 25.500235,1 c 28.9479,0 36.1849,65.40211 0,65.40211 -36.1849,0 -28.9479004,-65.40211 0,-65.40211 z"
        style="opacity:0.72441;fill:url(#radialGradient3888${id});stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    </g>
  </svg>`;

  //set up the egg click
  egg.onclick = () => {
    //id is from the previous scope
    console.log('clicked');
    questionBlock(id);
  };
  return egg;
};

function questionBlock(num) {
  //sets up the question after clicking on an egg
  //reuses the same div

  //clear the previous question
  playingField.question.questionText.innerHTML = "";
  playingField.question.feedback.classList.add("hidden");
  playingField.question.popup.classList.remove("hidden");

  //store the current question in the question block
  playingField.question.num = num;

  //get a question based on the number
  let questionParams = eggQuestions[num];

  //set up the new question block
  let element = document.createElement("div");
  element.classList.add("question-text");

  //add all the question parts
  for (let i = 0; i < questionParams.questions.length; i++) {
    let questText = document.createElement("p");
    questText.innerHTML = `${questionParams.questions[i]}`;
    element.appendChild(questText);
  }

  //add to the question block
  playingField.question.questionText.appendChild(element);

  //set up the images
  element = document.createElement("div");
  element.classList.add("question-images-wrapper");

  for (let i = 0; i < questionParams.images.length; i++) {
    let questImage = document.createElement("img");
    questImage.src = `img/${questionParams.images[i]}`;
    questImage.classList.add("question-image");
    questImage.id = "hint-images";
    questImage.hidden = true;
    element.appendChild(questImage);
  }
  //add images to the quesiton block
  playingField.question.questionText.appendChild(element);
}

function removeElement(event) {
  //hides an element after animation.
  //callback from 'animationed' event.
  if (event.animationName === "disapear") {
    event.target.classList.add("hidden");
    event.target.classList.remove("removed");
  }
}
