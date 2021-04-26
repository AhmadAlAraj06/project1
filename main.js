let answerNumber = 0;

const questionsGeoghraphic = [
  {
    question: "أكبر بحيرة في العالم من حيث المساحة ؟",
    answers: [
      { answer: "بحيرة هيرون", isCorrect: false },
      { answer: "بحيرة قزوين", isCorrect: true },
      { answer: "بحيرة فيكتوريا", isCorrect: false },
    ],
  },
  {
    question: "دولة عربية، يتخطاها خط الاستواء؟",
    answers: [
      { answer: "الصومال", isCorrect: true },
      { answer: "الجزائر", isCorrect: false },
      { answer: "مصر", isCorrect: false },
    ],
  },
  {
    question: "ما هي الحدود الطبيعية التي تفصل تركيا<br> واليونان؟",
    answers: [
      { answer: "البحر المتوسط", isCorrect: false },
      { answer: "بحر الاسود", isCorrect: false },
      { answer: "بحر إيجة", isCorrect: true },
    ],
  },
];
const questionsIslamic = [
  {
    question: "من أكثر الصحابة روايةً للحديث؟",
    answers: [
      { answer: "عبدالله بن عمر", isCorrect: false },
      { answer: "أبو هريرة ", isCorrect: true },
      { answer: "انس بن مالك", isCorrect: false },
    ],
  },
  {
    question: "بالزواج من عائشة بنت أبي بكر الصديق؟",
    answers: [
      { answer: "السنة الثانية للهجرة", isCorrect: true },
      { answer: "السنة الاولى للهجرة ", isCorrect: false },
      { answer: "السنة الرابعة للهجرة", isCorrect: false },
    ],
  },
  {
    question: "ما السيف الذي كان مرافقًا دائمًا<br> للنبي – صلى الله عليه وسلم تسليمًا كثيرًا ؟",
    answers: [
      { answer: "الحتف", isCorrect: false },
      { answer: "البتار", isCorrect: false },
      { answer: "ذو الفقار", isCorrect: true },
    ],
  },
];

const questionsQuraan = [
  {
    question: "...اتامرون الناس بالبر وتنسون انفسكم وانت تتلون الكتاب افلا",
    answers: [
      { answer: "تعلمون", isCorrect: false },
      { answer: "تعقلون ", isCorrect: true },
      { answer: "تتفكرون", isCorrect: false },
    ],
  },
  {
    question: "...ولا تلبسو الحق بالباطل وتكتموا الحق وانتم ",
    answers: [
      { answer: "تعلمون ", isCorrect: true },
      { answer: "تعقلون", isCorrect: false },
      { answer: "تتفكرون", isCorrect: false },
    ],
  },
  {
    question: "...قل يا عبادي الذين اسرفو على انفسهن لا تقنطو من رحمة الله ان الله يغفر الذنوب جميعا انه هو",
    answers: [
      { answer: "التواب الرحيم", isCorrect: false },
      { answer: "العزيز الحكيم", isCorrect: false },
      { answer: "الغفور الرحيم ", isCorrect: true },
    ],
  },
];

const  examType = (type) => {

  if(type==="Geoghraphic"){
   document.getElementById("questionTitle").innerHTML = questionsGeoghraphic[answerNumber].question;

   document.getElementById("answer1").textContent = questionsGeoghraphic[answerNumber].answers[0].answer;
   document.getElementById("answer1").value = questionsGeoghraphic[answerNumber].answers[0].isCorrect;
   
   document.getElementById("answer2").textContent = questionsGeoghraphic[answerNumber].answers[1].answer;
   document.getElementById("answer2").value = questionsGeoghraphic[answerNumber].answers[1].isCorrect;

   document.getElementById("answer3").textContent = questionsGeoghraphic[answerNumber].answers[2].answer;
   document.getElementById("answer3").value = questionsGeoghraphic[answerNumber].answers[2].isCorrect;
   


  
  //  var audio = new Audio('teimersound.mpeg');
  //  audio.play();
   answerNumber++;
  }
    if(type==="Islamic"){
     document.getElementById("questionTitle").innerHTML = questionsIslamic[answerNumber].question;
  // console.log(questionsIslamic[answerNumber].answers[0].answer)
     
     document.getElementById("answer1").textContent = questionsIslamic[answerNumber].answers[0].answer;
     document.getElementById("answer1").value = questionsIslamic[answerNumber].answers[0].isCorrect;

     document.getElementById("answer2").textContent = questionsIslamic[answerNumber].answers[1].answer;
     document.getElementById("answer2").value = questionsIslamic[answerNumber].answers[1].isCorrect;
  
     document.getElementById("answer3").textContent = questionsIslamic[answerNumber].answers[2].answer;
     document.getElementById("answer3").value = questionsIslamic[answerNumber].answers[2].isCorrect;
  
     
  
    //  var audio = new Audio('teimersound.mpeg');
    //  audio.play();
     answerNumber++;
    }
      if(type==="Quraan"){
       document.getElementById("questionTitle").innerHTML = questionsQuraan[answerNumber].question;
    
       document.getElementById("answer1").textContent = questionsQuraan[answerNumber].answers[0].answer;
       document.getElementById("answer1").value = questionsQuraan[answerNumber].answers[0].isCorrect;
       
       document.getElementById("answer2").textContent = questionsQuraan[answerNumber].answers[1].answer;
       document.getElementById("answer2").value = questionsQuraan[answerNumber].answers[1].isCorrect;
    
       document.getElementById("answer3").textContent = questionsQuraan[answerNumber].answers[2].answer;
       document.getElementById("answer3").value = questionsQuraan[answerNumber].answers[2].isCorrect;
    
       
    
      //  var audio = new Audio('teimersound.mpeg');
      //  audio.play();

       answerNumber++;
      }
  }
const nextQuestion = (btn,type) => {
  if(btn.value === 'true'){
    if(answerNumber === 3) {
      console.log("ahmad")

      document.location.href="index.html win.html";
    }
      examType(type);
    }
    
    else{
      document.location.href="index.html lose.html";
    }

  // if(btn.value === 'true'){
  //   if(answerNumber === 3) {
  //     document.location.href="index.html win.html";
  //   }
  //     examType(type);
  //   }
  //   else{
  //     document.location.href="index.html lose.html";
  //   }

  // if(btn.value === 'true'){
  //   if(answerNumber === 3)
  //   {
  //     document.location.href="index.html win.html";
  //   }
  //     examType(type);
  //   }
  //   else{
  //     document.location.href="index.html lose.html";
  //   }
   }
  
