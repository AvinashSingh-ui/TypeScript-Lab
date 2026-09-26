import { compileTS } from "./playground/compiler.js";
import { runJS } from "./playground/runner.js";
import { topics, type Topic } from "./playground/exercises.js";

const topicButtons = document.querySelectorAll<HTMLButtonElement>(".topic-btn");
const exerciseTitle = document.querySelector<HTMLHeadingElement>("#exerciseTitle");
const exerciseDescription = document.querySelector<HTMLParagraphElement>("#exerciseDescription");
const codeEditor = document.querySelector<HTMLTextAreaElement>("#codeEditor");
const runBtn = document.querySelector<HTMLButtonElement>("#runBtn");
const resetBtn = document.querySelector<HTMLButtonElement>("#resetBtn");
const outputPanel = document.querySelector<HTMLPreElement>("#output");
const errorPanel = document.querySelector<HTMLDivElement>("#error");

if (
  !exerciseTitle ||
  !exerciseDescription ||
  !codeEditor ||
  !runBtn ||
  !resetBtn ||
  !outputPanel ||
  !errorPanel
) {
  throw new Error("Required HTML elements were not found.");
}

let currentTopic: Topic = "union";

codeEditor.value = topics[currentTopic].code;

topicButtons.forEach(button => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic as Topic;

    if (!(topic in topics)) {
      return;
    }

    currentTopic = topic;
    const selected = topics[topic];

    exerciseTitle.textContent = selected.title;
    exerciseDescription.textContent = selected.description;
    codeEditor.value = selected.code;
    outputPanel.textContent = "";
    errorPanel.textContent = "";
  });
});

runBtn.addEventListener("click", () => {
  const source = codeEditor.value;
  outputPanel.textContent = "";
  errorPanel.textContent = "";

  const result = compileTS(source);

  if (result.diagnostics) {
    errorPanel.textContent = result.diagnostics;
    return;
  }

  runJS(result.js, outputPanel, errorPanel);
});

resetBtn.addEventListener("click", () => {
  codeEditor.value = topics[currentTopic].code;
  outputPanel.textContent = "";
  errorPanel.textContent = "";
});