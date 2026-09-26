import { compileTS } from "./playground/compiler.js";
import { runJS } from "./playground/runner.js";
import { topics } from "./playground/exercises.js";
const topicButtons = document.querySelectorAll(".topic-btn");
const exerciseTitle = document.querySelector("#exerciseTitle");
const exerciseDescription = document.querySelector("#exerciseDescription");
const codeEditor = document.querySelector("#codeEditor");
const runBtn = document.querySelector("#runBtn");
const resetBtn = document.querySelector("#resetBtn");
const outputPanel = document.querySelector("#output");
const errorPanel = document.querySelector("#error");
if (!exerciseTitle ||
    !exerciseDescription ||
    !codeEditor ||
    !runBtn ||
    !resetBtn ||
    !outputPanel ||
    !errorPanel) {
    throw new Error("Required HTML elements were not found.");
}
let currentTopic = "union";
codeEditor.value = topics[currentTopic].code;
topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        const topic = button.dataset.topic;
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
