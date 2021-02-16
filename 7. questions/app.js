//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");

    questions.forEach((item) => {
      if (question !== item) {
        item.classList.remove("show-text");
      }
    });
  });
});

// *************** traversing the dom ***************
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
