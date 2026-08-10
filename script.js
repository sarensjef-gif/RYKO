// RYKO Creator Toolkit
// Version 1.1.0

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------
    // TITLE ANALYZER
    // -------------------------

    const titleInput = document.getElementById("titleInput");
    const titleCount = document.getElementById("titleCount");

    if (titleInput && titleCount) {
        titleInput.addEventListener("input", function () {
            titleCount.textContent = titleInput.value.length;
        });
    }


    window.analyzeTitle = function () {

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

                <div class="result-title">
                    Title length
                </div>

                <div class="result-value">
                    ${length} characters — ${lengthScore}
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Curiosity
                </div>

                <div class="result-value">
                    ${curiosityResult}
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Clarity
                </div>

                <div class="result-value">
                    ${clarity}
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Word count
                </div>

                <div class="result-value">
                    ${words.length} words
                </div>

            </div>

        `;

        results.classList.remove("hidden");
    };


    // -------------------------
    // HOOK GENERATOR
    // -------------------------

    window.generateHooks = function () {

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
    };


    // -------------------------
    // SHORTS STRUCTURE
    // -------------------------

    window.createStructure = function () {

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

                <div class="result-title">
                    0–2 sec — Hook
                </div>

                <div class="result-value">
                    Start with the most interesting part of "${idea}".
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    2–7 sec — Setup
                </div>

                <div class="result-value">
                    Quickly explain what the viewer is about to see.
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    7–25 sec — Main content
                </div>

                <div class="result-value">
                    Deliver the information, story or ranking.
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    25–30 sec — Payoff
                </div>

                <div class="result-value">
                    End with the strongest result or surprising moment.
                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Final step
                </div>

                <div class="result-value">
                    Create a reason to keep watching or comment.
                </div>

            </div>

        `;

        results.classList.remove("hidden");
    };


    // -------------------------
    // CREATOR ASSISTANT
    // -------------------------

    const assistantInput = document.getElementById("assistantInput");
    const assistantCount = document.getElementById("assistantCount");

    if (assistantInput && assistantCount) {

        assistantInput.addEventListener("input", function () {

            assistantCount.textContent =
                assistantInput.value.length;

        });

    }


    window.generateCreatorPackage = function () {

        if (!assistantInput) {
            return;
        }


        const idea = assistantInput.value.trim();
        const results = document.getElementById("assistantResults");


        if (!idea) {

            results.innerHTML = `
                <div class="result-item">

                    <div class="result-title">
                        Creator Assistant
                    </div>

                    <div class="result-value">
                        Enter a video idea first.
                    </div>

                </div>
            `;

            results.classList.remove("hidden");
            return;
        }


        // -------------------------
        // TITLE IDEAS
        // -------------------------

        const titles = [

            `Why ${idea} Actually Matters`,

            `The Truth About ${idea}`,

            `What Nobody Tells You About ${idea}`

        ];


        // -------------------------
        // HOOK IDEAS
        // -------------------------

        const hooks = [

            `Most people don't know this about ${idea}.`,

            `Here's what happens when you really understand ${idea}.`,

            `You probably think you understand ${idea} — but there's more to it.`

        ];


        // -------------------------
        // SCRIPT
        // -------------------------

        const script = `

Hook:
${hooks[0]}

Setup:
Here's what you need to know about ${idea}.

Main content:
The interesting part about ${idea} is that most people look at it the wrong way.

First, understand the basic idea.

Then, look at what actually happens in real situations.

Finally, remember that the small details can make the biggest difference.

Payoff:
Now you know why ${idea} is more interesting than it first appears.

CTA:
Follow for more quick insights like this.

`;


        // -------------------------
        // CREATOR PACKAGE OUTPUT
        // -------------------------

        results.innerHTML = `

            <div class="result-item">

                <div class="result-title">
                    Title Ideas
                </div>

                <div class="result-value">

                    ${titles.map((title, index) => `
                        <div>
                            ${index + 1}. ${title}
                        </div>
                    `).join("")}

                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Hook Ideas
                </div>

                <div class="result-value">

                    ${hooks.map((hook, index) => `
                        <div>
                            ${index + 1}. ${hook}
                        </div>
                    `).join("")}

                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Shorts Structure
                </div>

                <div class="result-value">

                    <strong>0–2 sec — Hook</strong><br>
                    Start with the most interesting part of the idea.

                    <br><br>

                    <strong>2–7 sec — Setup</strong><br>
                    Quickly explain what the viewer is about to learn or see.

                    <br><br>

                    <strong>7–25 sec — Main content</strong><br>
                    Deliver the key information, story or explanation.

                    <br><br>

                    <strong>25–30 sec — Payoff</strong><br>
                    End with the strongest insight or result.

                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    30-Second Script
                </div>

                <div class="result-value">

                    ${script.replace(/\n/g, "<br>")}

                </div>

            </div>


            <div class="result-item">

                <div class="result-title">
                    Call To Action
                </div>

                <div class="result-value">
                    Follow for more quick insights like this.
                </div>

            </div>

        `;


        results.classList.remove("hidden");

    };

});
