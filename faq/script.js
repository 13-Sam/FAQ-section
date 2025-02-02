const faqData = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to make web pages interactive.",
  },
  {
    question: "What is an event listener?",
    answer:
      "An event listener waits for user actions like clicks, keypresses, etc.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The Document Object Model (DOM) represents the structure of an HTML document.",
  },
  {
    question: "What is CSS used for?",
    answer: "CSS is used for styling and layout of web pages.",
  },
];

const faqList = document.getElementById("faq-list");

// Generate questoins
faqData.map((faq) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  faqItem.innerHTML = `
        <div class="faq-question">
            ${faq.question} <span class="arrow">🔽</span>
        </div>
        <div class="faq-answer">${faq.answer}</div>
    `;

  faqList.appendChild(faqItem);
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    console.log(answer);
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    // Toggle arrow rotation
    const arrow = question.querySelector(".arrow");
    arrow.style.transform =
      answer.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
  });
});
