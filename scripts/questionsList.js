const mainDiv = document.getElementById('add-questions')
for(let i = 0; i< eggQuestions.length; i++) {
  for (let j = 0; j< eggQuestions[i].questions.length; j++){
    let question = document.createElement('p')
    question.innerHTML = eggQuestions[i].questions[j];
    mainDiv.appendChild(question);
  }

}
