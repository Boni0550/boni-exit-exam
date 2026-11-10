let current=[],course='',index=0,answers={};
let timeLeft=0, timerInterval=null;
const quizMinutes={business:100,risk:120};

function startTimer(minutes){
 clearInterval(timerInterval);
 timeLeft=minutes*60;
 updateTimer();
 timerInterval=setInterval(()=>{
   timeLeft--;
   updateTimer();
   if(timeLeft<=0){
     clearInterval(timerInterval);
     alert('Time is up! Your quiz will now be submitted.');
     showResult();
   }
 },1000);
}
function updateTimer(){
 const mins=Math.floor(Math.max(timeLeft,0)/60);
 const secs=Math.max(timeLeft,0)%60;
 document.getElementById('timer').textContent=`Time: ${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function startQuiz(name){
 course=name; current=quizzes[name]; index=0; answers={};
 document.getElementById('home').classList.add('hidden');
 document.getElementById('result').classList.add('hidden');
 document.getElementById('quiz').classList.remove('hidden');
 document.getElementById('courseTitle').textContent=name==='business'?'Business Ethics':'Risk Management & Insurance';
 startTimer(quizMinutes[name]);
 buildNav();
 renderQuestion();
}
function renderQuestion(){
 const q=current[index];
 document.getElementById('counter').textContent=`Question ${index+1} of ${current.length}`;
 document.getElementById('bar').style.width=((index+1)/current.length*100)+'%';
 document.getElementById('question').textContent=q.question;
 let out='';
 Object.entries(q.options).forEach(([letter,text])=>{
  const checked=answers[index]===letter?'checked':'';
  out+=`<label class="option"><input type="radio" name="answer" value="${letter}" ${checked} onchange="answers[${index}]='${letter}';updateNav()"> <b>${letter}.</b> ${text}</label>`;
 });
 document.getElementById('options').innerHTML=out;
 document.getElementById('nextBtn').textContent=index===current.length-1?'Submit Quiz':'Next';
 document.getElementById('prevBtn').disabled=index===0;
 updateNav();
}

function buildNav(){
 document.getElementById('navGrid').innerHTML=current.map((q,i)=>`<button class="nav-btn" id="nav${i}" onclick="goToQuestion(${i})" title="Question ${i+1}">${i+1}</button>`).join('');
}
function updateNav(){
 current.forEach((q,i)=>{
  const b=document.getElementById('nav'+i); if(!b) return;
  b.classList.toggle('answered',!!answers[i]);
  b.classList.toggle('current',i===index);
 });
 const cur=document.getElementById('nav'+index);
 if(cur) cur.scrollIntoView({block:'nearest',inline:'nearest'});
}
function goToQuestion(i){index=i;renderQuestion();}
function submitEarly(){
 const left=current.filter((q,i)=>!answers[i]).length;
 const msg=left?`You have ${left} unanswered question(s). Submit anyway?`:'Submit your quiz now?';
 if(confirm(msg)) showResult();
}
function nextQuestion(){
 if(index===current.length-1){submitEarly();}else{index++;renderQuestion();}
}
function previousQuestion(){if(index>0){index--;renderQuestion();}}
function showResult(){
 clearInterval(timerInterval);
 document.getElementById('quiz').classList.add('hidden');
 document.getElementById('result').classList.remove('hidden');
 let correct=current.filter((q,i)=>answers[i]===q.answer).length;
 let pct=Math.round(correct/current.length*100);
 document.getElementById('score').textContent=`${correct} / ${current.length} (${pct}%)`;
 document.getElementById('message').textContent=pct>=80?'Excellent work!':pct>=50?'Good effort! Keep practicing.':'Keep studying and try again!';
 document.getElementById('review').classList.add('hidden');
}
function reviewAnswers(){
 const r=document.getElementById('review'); r.classList.remove('hidden');
 r.innerHTML='<h2>Answer Review</h2>'+current.map((q,i)=>{
   const user=answers[i]||'No answer'; const ok=user===q.answer;
   return `<div class="quiz-card"><b>Q${i+1}. ${q.question}</b><p class="${ok?'correct':'wrong'}">Your answer: ${user} ${ok?'✓':'✗'}</p><p class="correct">Correct answer: ${q.answer}. ${q.options[q.answer]}</p></div>`;
 }).join('');
}
function goHome(){
 document.getElementById('result').classList.add('hidden');
 document.getElementById('quiz').classList.add('hidden');
 document.getElementById('home').classList.remove('hidden');
}
