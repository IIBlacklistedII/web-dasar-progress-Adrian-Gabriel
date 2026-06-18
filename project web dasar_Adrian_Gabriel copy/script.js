// 1. Save the entire footer HTML markup inside a JavaScript template string variable
const sharedNavbarLayout = `
<nav class="navbar navbar-dark-solid">
    <div class="logo">
        <img src="Emblem_of_Syria.svg" class="img-fluid d-block mx-auto" alt="Responsive SVG description">
        <a href="suriah.html">SURIAH</a>
    </div>

    <ul class="nav-links">
        <li><a href="suriah.html">Home</a></li>
        <li class="custom-dropdown-container">
            <a href="#" class="custom-dropbtn">General Information</a>

            <div class="custom-dropdown-menu">
                <div class="menu-column">
                    <h3>Syria at a glance</h3>
                    <a href="pemerintahan.html">Current Government</a>
                    <a href="about.html">About Syria Tourism Board</a>
                </div>
                <div class="menu-column">
                    <h3>Getting around</h3>
                    <a href="transportasi-darat.html">Ground Transport</a>
                    <a href="transportasi-air-laut.html">Air & Water Transport</a>
                </div>
                <div class="menu-column">
                    <h3>Basics</h3>
                    <a href="entrance-fee.html">Entrance Fees</a>
                    <a href="visas.html">Visas</a>
                </div>
            </div>
        </li>
        <li class="custom-dropdown-container">
            <a href="#" class="custom-dropbtn">Attractions</a>

            <div class="custom-dropdown-menu">
                <div class="menu-column">
                    <h3>Historical Sites</h3>
                    <a href="https://whc.unesco.org/en/list/23/">Palmyra</a>
                    <a href="https://whc.unesco.org/en/list/21">Aleppo Citadel</a>
                    <a href="https://whc.unesco.org/en/list/1229">Crac des Chevaliers</a>
                </div>
                <div class="menu-column">
                    <h3>Natural Wonders</h3>
                    <a href="https://en.wikipedia.org/wiki/Ghab_Plain">Jabal an-Nusayriyah</a>
                    <a href="https://en.wikipedia.org/wiki/Orontes_River">Orontes River</a>
                    <a href="https://en.wikipedia.org/wiki/Syrian_Coastal_Mountain_Range">Al-Ghab Plain</a>
                </div>
                <div class="menu-column">
                    <h3>Cultural Experiences</h3>
                    <a href="https://whc.unesco.org/en/list/20/">Damascus Old City</a>
                    <a href="https://en.wikipedia.org/wiki/Norias_of_Hama">Hama Water Wheels</a>
                    <a href="https://whc.unesco.org/en/list/22/">Bosra Old City</a>
                </div>
            </div>
        </li>
        <li class="custom-dropdown-container">
            <a href="#" class="custom-dropbtn">Hotels & Tours</a>
            <div class="custom-dropdown-menu">
                <div class="menu-column">
                    <h3>Hotels</h3>
                    <a href="#">Luxury Hotels</a>
                    <a href="#">Budget Hotels</a>
                </div>
                <div class="menu-column">
                    <h3>Tours</h3>
                    <a href="#">Historical Tours</a>
                    <a href="#">Nature Tours</a>
                </div>
            </div>
        </li>
    </ul>
</nav>
`;

const sharedFooterLayout = `
<footer class="bagian-footer">
    <div class="d-flex flex-row justify-content-around gap-1">
        <div id="footer-list" class="d-flex flex-column">
            <h3>About Syria</h3>
            <hr>
            <a href="history.html">History</a>
            <a href="culture.html">Culture</a>
            <a href="traditions">Traditions</a>
            <a href="geography">Geography</a>
            <a href="tourism.html">Tourism</a>
            <a href="visas.html">Visas & Immigration</a>
        </div>
        <div id="footer-list" class="d-flex flex-column">
            <h3>Attractions</h3>
            <hr>
            <a href="https://whc.unesco.org/en/list/23/">Palmyra</a>
            <a href="https://whc.unesco.org/en/list/21">Aleppo Citadel</a>
            <a href="https://whc.unesco.org/en/list/1229">Crac des Chevaliers</a>
            <a href="https://en.wikipedia.org/wiki/Ghab_Plain">Jabal an-Nusayriyah</a>
            <a href="https://en.wikipedia.org/wiki/Orontes_River">Orontes River</a>
            <a href="https://en.wikipedia.org/wiki/Syrian_Coastal_Mountain_Range">Al-Ghab Plain</a>
            <a href="https://whc.unesco.org/en/list/20/">Damascus Old City</a>
            <a href="https://en.wikipedia.org/wiki/Norias_of_Hama">Hama Water Wheels</a>
            <a href="https://whc.unesco.org/en/list/22/">Bosra Old City</a>
        </div>
        <div id="footer-list" class="d-flex flex-column">
            <h3>Hotels & Tours</h3>
            <hr>
            <a href="#">Damascus</a>
            <a href="#">Aleppo</a>
            <a href="#">Homs</a>
            <a href="#">Hama</a>
            <a href="#">Lattakia</a>
        </div>
    </div>
</footer>
`;

// Function to safely shut down open navigation mega-menus
function closeAllDropdowns() {
    document.querySelectorAll('.custom-dropdown-menu.show-menu').forEach(menu => {
        menu.classList.remove('show-menu');
    });
}

// ==========================================================================
// 2. CORE UTILITY OPERATIONS & HANDLERS
// ==========================================================================

function initializeDropdowns() {
    const dropdownButtons = document.querySelectorAll('.custom-dropbtn');

    dropdownButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            // Prevent link '#' jumping and stop event bubbling up to document click layers
            event.preventDefault();
            event.stopPropagation();

            const parentLi = btn.closest('.custom-dropdown-container');
            if (!parentLi) return;

            const targetMenu = parentLi.querySelector('.custom-dropdown-menu');
            if (!targetMenu) return;

            const isOpen = targetMenu.classList.contains('show-menu');

            // Close other open nav dropdown modules 
            closeAllDropdowns();

            // Toggle active menu state window
            if (!isOpen) {
                targetMenu.classList.add('show-menu');
            }
        });
    });
}

// ==========================================================================
// 3. ENGINE RUN TIME EVENT INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    
    // A. INJECT STABLE NAVBAR
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = sharedNavbarLayout;

        // Custom Layout Modifications for Home Page specifically
        const navbarElement = navbarPlaceholder.querySelector('.navbar');
        if (navbarElement) {
            const currentPath = window.location.pathname;
            
            if (currentPath.endsWith('suriah.html') || currentPath.endsWith('/')) {
                // Remove dark block background style on home page hero
                navbarElement.classList.remove('navbar-dark-solid');
                
                // Track down and strip out the home navigation page links list object
                const homeLink = navbarPlaceholder.querySelector('.nav-links a[href="suriah.html"]');
                if (homeLink) {
                    const homeLi = homeLink.closest('li');
                    if (homeLi) homeLi.remove(); 
                }
            }
        }
        // Initialize menu toggles since navbar elements exist now
        initializeDropdowns();
    }

    // B. INJECT STABLE FOOTER
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = sharedFooterLayout;
    }

    // C. DOCUMENT GLOBAL CLOSING CLICK REGISTER
    document.addEventListener('click', function (event) {
        if (event.target.closest('.custom-dropbtn') || event.target.closest('.custom-dropdown-menu')) {
            return; 
        }
        closeAllDropdowns();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAllDropdowns();
    });

    // D. MAP SELECTION ACTION MODIFIER
    const branchSelector = document.getElementById('branchSelector');
    if (branchSelector) {
        const branchPres = document.getElementById('branch-president');
        const branchPm = document.getElementById('branch-pm');
        const nodePres = document.getElementById('node-president');
        const nodePm = document.getElementById('node-pm');

        branchSelector.addEventListener('change', function () {
            const selection = this.value;
            nodePres.classList.remove('expanded');
            nodePm.classList.remove('expanded');
            branchPres.classList.remove('dimmed');
            branchPm.classList.remove('dimmed');

            if (selection === 'president') {
                nodePres.classList.add('expanded');
                branchPm.classList.add('dimmed');
            } else if (selection === 'pm') {
                nodePm.classList.add('expanded');
                branchPres.classList.add('dimmed');
            }
        });
    }
});

// ==========================================================================
// 6. HISTORY PAGE TRIVIA ENGINE INTERACTION LOOP (ISOLATED WITH PERCENTAGE)
// ==========================================================================
const quizQuestions = [
    {
        question: "Which Syrian city is widely considered one of the oldest continuously inhabited cities in the world?",
        options: ["Palmyra", "Damascus", "Latakia", "Bosra"],
        answer: 1
    },
    {
        question: "The magnificent ancient desert trading hub ruled by Queen Zenobia was:",
        options: ["Aleppo", "Mari", "Palmyra", "Ebla"],
        answer: 2
    },
    {
        question: "Which language was standardized as a regional trading medium across inland Syria during the Iron Age?",
        options: ["Greek", "Latin", "Aramaic", "Arabic"],
        answer: 2
    },
    {
        question: "Following Alexander the Great's conquest, which massive empire made Antioch its capital and transformed Syria into a Hellenistic epicenter?",
        options: ["The Seleucid Empire", "The Byzantine Empire", "The Ottoman Empire", "The Roman Empire"],
        answer: 0
    },
    {
        question: "Sultan Saladin unified regional factions during the Crusader wars from his base in which historical Syrian city?",
        options: ["Mari", "Ebla", "Latakia", "Damascus"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; // Tracks total correct answers

document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    const questionElement = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const feedbackContainer = document.getElementById('quiz-feedback');
    const feedbackAlert = document.getElementById('feedback-alert');
    const nextBtn = document.getElementById('next-question-btn');

    // CRITICAL GUARD: Only execute quiz logic if the form markup actually exists on this page
    if (!quizForm || !questionElement || !optionsContainer) {
        return; 
    }

    // Render current active trivia question frame 
    function loadQuizQuestion() {
        if (feedbackContainer) feedbackContainer.classList.add('d-none');
        
        const submitBtn = quizForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Answer";
        }
        
        const qData = quizQuestions[currentQuestionIndex];
        questionElement.textContent = `Q${currentQuestionIndex + 1}: ${qData.question}`;
        
        // Clear previous entries
        optionsContainer.innerHTML = '';
        
        // Load option nodes
        qData.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'quiz-option-label';
            label.innerHTML = `<input type="radio" name="trivia-opt" value="${idx}" required> ${opt}`;
            optionsContainer.appendChild(label);
        });
    }

    // Initialize first question on load securely
    loadQuizQuestion(); 

    // Handle form submissions safely
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const selectedOpt = quizForm.querySelector('input[name="trivia-opt"]:checked');
        if (!selectedOpt) return;

        const chosenAnswer = parseInt(selectedOpt.value);
        const correctAnswer = quizQuestions[currentQuestionIndex].answer;

        const submitBtn = quizForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        
        if (feedbackContainer) feedbackContainer.classList.remove('d-none');

        // Check if current answer is right
        if (chosenAnswer === correctAnswer) {
            correctAnswersCount++;
            feedbackAlert.className = "alert alert-success m-0";
            feedbackAlert.innerHTML = "✨ <strong>Correct!</strong>";
        } else {
            feedbackAlert.className = "alert alert-danger m-0";
            feedbackAlert.innerHTML = `❌ <strong>Incorrect.</strong> The correct answer was: <strong>${quizQuestions[currentQuestionIndex].options[correctAnswer]}</strong>.`;
        }

        // Alter the next button text if it is the absolute final question
        if (currentQuestionIndex === quizQuestions.length - 1) {
            if (nextBtn) nextBtn.innerHTML = "View Final Results &rarr;";
        } else {
            if (nextBtn) nextBtn.innerHTML = "Next Question &rarr;";
        }
    });

    // Handle changing questions safely or calculating final percentage scores
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (currentQuestionIndex < quizQuestions.length - 1) {
                // Advance to the next question frame
                currentQuestionIndex++;
                loadQuizQuestion();
            } else {
                // End of quiz reached: Calculate the total final score percentage
                const finalPercentage = Math.round((correctAnswersCount / quizQuestions.length) * 100);
                
                // Redesign container interface to display clean summary sheet metrics
                questionElement.innerHTML = `🏁 Quiz Complete!`;
                optionsContainer.innerHTML = `
                    <div class="text-center py-3">
                        <p class="display-4 font-weight-bold mb-2 text-warning">${finalPercentage}%</p>
                        <p class="lead">You correctly answered <strong>${correctAnswersCount}</strong> out of <strong>${quizQuestions.length}</strong> questions.</p>
                    </div>
                `;
                
                // Strip the operational controls away and leave a clean reset loop option
                if (feedbackContainer) feedbackContainer.classList.add('d-none');
                
                const submitBtn = quizForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "🔄 Retake Quiz";
                    
                    // Rewrite submit button function to reset memory array counters cleanly
                    quizForm.onsubmit = function(event) {
                        event.preventDefault();
                        currentQuestionIndex = 0;
                        correctAnswersCount = 0;
                        quizForm.onsubmit = null; // Unbind override logic hook
                        loadQuizQuestion();
                    };
                }
            }
        });
    }
});