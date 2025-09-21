// Section navigation
function showSection(sectionId) {
  document.querySelectorAll('main section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

// Flashcards
const flashcards = [
  { q: "Where do the Yoruba trace their ancestral origin?", a: "Ile-Ife" },
  { q: "Who is the founding ancestor of the Yoruba?", a: "Odùduwà" },
  { q: "Which empire was most powerful between 17th–19th century?", a: "Oyo Empire" },
  { q: "What art are the Yoruba famous for?", a: "Bronze and terracotta" },
];

let currentFlash = 0;

function showAnswer() {
  document.getElementById('answer').classList.remove('hidden');
}

function nextFlashcard() {
  currentFlash = (currentFlash + 1) % flashcards.length;
  document.getElementById('question').textContent = flashcards[currentFlash].q;
  document.getElementById('answer').textContent = flashcards[currentFlash].a;
  document.getElementById('answer').classList.add('hidden');
}

// Quiz
const quiz = [
  {
    q: "Where do the Yoruba trace their origin?",
    options: ["Ile-Ife", "Oyo", "Benin", "Togo"],
    a: "Ile-Ife"
  },
  {
    q: "Who is the founding ancestor of the Yoruba?",
    options: ["Oranmiyan", "Odùduwà", "Obatala", "Shango"],
    a: "Odùduwà"
  },
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[currentQ];
  document.getElementById('quiz-question').textContent = q.q;
  const optionsDiv = document.getElementById('quiz-options');
  optionsDiv.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      if(opt === q.a) score++;
      nextQuestion();
    };
    optionsDiv.appendChild(btn);
  });
  document.getElementById('quiz-score').textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentQ++;
  if(currentQ >= quiz.length) {
    document.getElementById('quiz-question').textContent = "Quiz Completed!";
    document.getElementById('quiz-options').innerHTML = "";
  } else {
    loadQuestion();
  }
}

// Initialize first quiz question
loadQuestion();
