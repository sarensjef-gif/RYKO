// RYKO Creator Toolkit
// Version 1.0.0


// -------------------------
// TITLE ANALYZER
// -------------------------

const titleInput = document.getElementById("titleInput");
const titleCount = document.getElementById("titleCount");

titleInput.addEventListener("input", function () {
    titleCount.textContent = titleInput.value.length;
});


function analyzeTitle() {

    const title = titleInput.value.trim();
    const results = document.getElementById("titleResults");

    if (!title) {
        results.innerHTML = `
            <div class="result-item">
                Please enter a title first.
            </div>
        `;

        results.classList.remove("hidden");
        return;
    }

    const length = title.length;

    let lengthScore;

    if (length >= 35 && length <= 65) {
        lengthScore = "Strong";
    } else if (length >= 25 && length <= 75) {
        lengthScore = "Okay";
    } else {
        lengthScore = "Needs improvement";
    }


    const curiosityWords = [
        "why",
        "how",
        "secret",
        "truth",
        "mistake",
        "never",
        "actually",
        "happened",
        "nobody",
        "you"
    ];

    let curiosityScore = 0;

    curiosityWords.forEach(word => {

        if (title.toLowerCase().includes(word)) {
            curiosityScore++;
        }

    });


    let curiosityResult;

    if (curiosityScore >= 2) {
        curiosityResult = "Strong";
    } else if (curiosityScore === 1) {
        curiosityResult = "Moderate";
    } else {
        curiosityResult = "Low";
    }


    const words = title.split(/\s+/).filter(Boolean);

    let clarity;

    if (words.length >= 4 && words.length <= 12) {
        clarity = "Good";
    } else {
        clarity = "Check wording";
    }


    results.innerHTML = `

        <div class="result-item">
            <div class="result-title">Title length</div>
            <div class="result-value">${length} characters — ${lengthScore}</div>
        </div>

        <div class="result-item">
            <div class="result-title">Curiosity</div>
            <div class="result-value">${curiosityResult}</div>
        </div>

        <div class="result-item">
            <div class="result-title">Clarity</div>
            <div class="result-value">${clarity}</div>
        </div>

        <div class="result-item">
            <div class="result-title">Word count</div>
            <div class="result-value">${words.length} words</div>
        </div>

    `;

    results.classList.remove("hidden");
}


// -------------------------
// HOOK GENERATOR
// -------------------------

function generateHooks() {

    const topic = document.getElementById("topicInput").value.trim();
    const results = document.getElementById("hookResults");

    if (!topic) {

        results.innerHTML = `
            <div class="result-item">
                Enter a topic first.
            </div>
        `;

        results.classList.remove("hidden");
        return;
    }


    const hooks = [

        `I tried ${topic} so you don't have to.`,

        `Nobody tells you this about ${topic}.`,

        `Here's what happened when I tested ${topic}.`,

        `I made one big mistake with ${topic}.`,

        `The truth about ${topic} is probably not what you expect.`,

        `Before you try ${topic}, watch this.`

    ];


    results.innerHTML = hooks.map((hook, index) => `

        <div class="result-item">

            <div class="result-title">
                Hook ${index + 1}
            </div>

            <div class="result-value">
                ${hook}
            </div>

        </div>

    `).join("");


    results.classList.remove("hidden");
}


// -------------------------
// SHORTS STRUCTURE
// -------------------------

function createStructure() {

    const idea = document.getElementById("ideaInput").value.trim();
    const results = document.getElementById("structureResults");

    if (!idea) {

        results.innerHTML = `
            <div class="result-item">
                Enter a video idea first.
            </div>
        `;

        results.classList.remove("hidden");
        return;
    }


    results.innerHTML = `

        <div class="result-item">
            <div class="result-title">0–2 sec — Hook</div>
            <div class="result-value">
                Start with the most interesting part of "${idea}".
            </div>
        </div>

        <div class="result-item">
            <div class="result-title">2–7 sec — Setup</div>
            <div class="result-value">
                Quickly explain what the viewer is about to see.
            </div>
        </div>

        <div class="result-item">
            <div class="result-title">7–25 sec — Main content</div>
            <div class="result-value">
                Deliver the information, story or ranking.
            </div>
        </div>

        <div class="result-item">
            <div class="result-title">25–30 sec — Payoff</div>
            <div class="result-value">
                End with the strongest result or surprising moment.
            </div>
        </div>

        <div class="result-item">
            <div class="result-title">Final step</div>
            <div class="result-value">
                Create a reason to keep watching or comment.
            </div>
        </div>

    `;


    results.classList.remove("hidden");
}
