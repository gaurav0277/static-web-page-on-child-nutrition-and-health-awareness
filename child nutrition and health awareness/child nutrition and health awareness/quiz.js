let question = {
  1: {
    1: "What is the recommended daily intake of fruits and vegetables for children aged 4-8 years?",
    2: "1-2 servings",
    3: "3-5 servings",
    4: "5-7 servings",
    5: "7-9 servings",
  },
  2: {
    1: "Which vitamin is essential for bone growth and is obtained from sunlight?",
    2: "Protein",
    3: "Carbohydrates",
    4: "Fats",
    5: "Vitamins",
  },
  3: {
    1: "Which nutrient is crucial for the development of a child's brain?",
    2: "Iron",
    3: "Calcium",
    4: "Fiber",
    5: "Sodium",
  },
  4: {
    1: "How much water should a child drink daily?",
    2: "2-4 cups",
    3: "4-6 cups",
    4: "6-8 cups",
    5: "8-10 cups",
  },
};

let answer = {
  1: "3-5 servings",
  2: "Carbohydrates",
  3: "Iron",
  4: "6-8 cups",
};

let next = document.getElementById("next");
let nextQuestion = document.getElementById("nextQuestion");
let click = document.getElementById("click");
let quiz = document.getElementById("quiz");
let resultTag = document.getElementById("result");

click.addEventListener("click", () => {
  quiz.style.display = "";
});

click.addEventListener("dblclick", (e) => {
  e.preventDefault();
  window.location.reload();
});

let i = 1;
let selectedAnswer = [];

function loadQuestion(index) {
  if (index < 11) {
    let html = `
      <h1 class="text-lg font-semibold mb-4">Question ${index}/10</h1>
      <p class="text-gray-500 mb-4">Personal Hygiene Quiz</p>      
      <p class="font-medium mb-6">${question[index][1]}</p>
      
      <form>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][2]}" class="form-radio text-blue-600">
            <span>${question[index][2]}</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][3]}" class="form-radio text-blue-600">
            <span>${question[index][3]}</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][4]}" class="form-radio text-blue-600">
            <span>${question[index][4]}</span>
          </label>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="question" value="${question[index][5]}" class="form-radio text-blue-600">
            <span>${question[index][5]}</span>
          </label>
        </div>
      </form>
    `;

    nextQuestion.innerHTML = html;
  }
  if (index == 11) {
    nextQuestion.innerHTML =
      "<h1 class='text-lg font-semibold mb-4'>Quiz Completed!</h1>";
    next.innerHTML = `<button type="submit"  class="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">Submit</button>`;
  }
  if (index == 12) {
    calculate(selectedAnswer, answer);
  }
}

next.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission behavior

  let selected = document.querySelector('input[name="question"]:checked');
  if (selected) {
    selectedAnswer.push(selected.value);
  } else {
    selectedAnswer.push(null);
  }

  i++;
  loadQuestion(i);

  console.log(selectedAnswer);
});

function calculate(selectedAnswer, answer) {
  let result = 0;
  let k = 0;
  let a = 1;
  while (k < 10) {
    if (selectedAnswer[k] == answer[a]) {
      result++;
      console.log("incre=" + result);
      console.log(selectedAnswer[k] + " answer = " + answer[a]);
    }
    k++;
    a++;
  }

  // show answer

  function showResult(result) {
    quiz.style.display = "none";
    if (result > 8) {
      resultTag.innerHTML = ` <h1 class='text-lg font-semibold mb-4 text-lime-300 '>Excellent</h1>`;
      console.log(result);
    }
    if (result < 8 && result > 5) {
      resultTag.innerHTML = ` <h1 class='text-lg font-semibold mb-4 text-yellow-300' >Good</h1>`;
      console.log(result);
    }
    if (result <= 5) {
      resultTag.innerHTML = ` <h1 class='text-lg font-semibold mb-4 text-red-500' >Poor</h1>`;
      console.log(result);
    }
  }

  showResult(result);
}

//  post form

let Tipspost = document.getElementById("Tipspost");
let show = document.querySelector(".show");
Tipspost.addEventListener("click", (e) => {
  e.preventDefault();
  Tipspost.style.display = "none";
  show.innerHTML = `
          
            <h1 class="text-lg font-semibold mb-4">Thank You !</h1>

            <form>
          

             
                <div class="mb-6">
                    <label for="feedback" class="block text-sm font-medium mb-2">Share Your Tips</label>
                    <textarea id="feedback" name="feedback" rows="4" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Share your thoughts..."></textarea>
                </div>

              
                <div class="mb-6">
                    <label for="email" class="block text-sm font-medium mb-2">Your Email (optional)</label>
                    <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="email@example.com">
                </div>

                <!-- Submit Button -->
                <div id="postSubmit" class="flex justify-end">
                    <button type="submit" class=" bg-[#33b3e6] text-[#111618] text-sm font-bold  py-2 px-6 rounded-full  ">Submit</button>
                </div>
            </form>
    
  `;

  let postSubmit = document.getElementById("postSubmit");
  postSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload();
  });
});


