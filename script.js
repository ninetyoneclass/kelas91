document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  loadSchedule();
  loadQuizQuestions();
});

function updateTime() {
  const timeElement = document.getElementById('current-date-time');
  setInterval(() => {
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
  }, 1000);
}

function loadSchedule() {
  const schedule = {
    "Monday": ["IPS", "Bahasa Indonesia", "BK", "Bahasa Inggris"],
    "Tuesday": ["Prakarya", "PJOK", "Bahasa Indonesia"],
    "Wednesday": ["IPA", "Matematika", "Informatika"],
    "Thursday": ["IPS", "Bahasa Inggris", "Matematika", "IPA"],
    "Friday": ["Pendidikan Agama", "PPKN"],
    "Saturday": ["Libur"],
    "Sunday": ["Libur"],
    // Tambahkan sesuai jadwal harian
  };

  const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  document.getElementById('schedule').innerHTML = `
    <h3>${today}</h3>
    <ul>${(schedule[today] || []).map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

function loadQuizQuestions() {
  const questions = [
    { q: "Siapa penemu lampu?", options: ["Edison", "Newton", "Einstein"], answer: "Edison" },
    { q: "7 + 8 =", options: ["13", "15", "17"], answer: "15" },
    // Tambahkan hingga 15 soal
  ];

  const quizContainer = document.getElementById('quiz-questions');
  quizContainer.innerHTML = questions.map((q, i) => `
    <div>
      <p>${i + 1}. ${q.q}</p>
      ${q.options.map(option => `
        <input type="radio" name="q${i}" value="${option}">${option}<br>
      `).join('')}
    </div>
  `).join('');
}

function checkAnswers() {
  const form = document.getElementById('quiz-form');
  const answers = ["Edison", "15"]; // Isi dengan jawaban sesuai soal
  let score = 0;

  answers.forEach((answer, i) => {
    if (form[`q${i}`].value === answer) score++;
  });

  document.getElementById('result').textContent = `Skor Anda: ${score} dari ${answers.length}`;
}