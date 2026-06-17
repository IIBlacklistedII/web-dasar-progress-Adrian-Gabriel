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
                    <a href="ground.html">Ground Transport</a>
                    <a href="#">Railroad</a>
                    <a href="#">Air Transport</a>
                </div>
                <div class="menu-column">
                    <h3>Basics</h3>
                    <a href="#">Entrance Fees</a>
                    <a href="#">Visas</a>
                    <a href="#">Airports</a>
                </div>
                <div class="menu-column">
                    <h3>Values</h3>
                    <a href="#">Islam</a>
                    <a href="#">Ramadhan</a>
                </div>
            </div>
        </li>
        <li class="custom-dropdown-container">
            <a href="#" class="custom-dropbtn">Attractions</a>

            <div class="custom-dropdown-menu">
                <div class="menu-column">
                    <h3>Historical Sites</h3>
                    <a href="#">Palmyra</a>
                    <a href="#">Aleppo Citadel</a>
                    <a href="#">Crac des Chevaliers</a>
                </div>
                <div class="menu-column">
                    <h3>Natural Wonders</h3>
                    <a href="#">Dead Sea</a>
                    <a href="#">Orontes River</a>
                    <a href="#">Al-Ghab Plain</a>
                </div>
                <div class="menu-column">
                    <h3>Cultural Experiences</h3>
                    <a href="#">Damascus Old City</a>
                    <a href="#">Hama Water Wheels</a>
                    <a href="#">Bosra Theater</a>
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
            <a href="#">History</a>
            <a href="culture.html">Culture</a>
            <a href="#">Geography</a>
            <a href="#">Economy</a>
            <a href="pemerintahan.html">Government</a>
            <a href="#">Current Events</a>
        </div>
        <div id="footer-list" class="d-flex flex-column">
            <h3>Attractions</h3>
            <hr>
            <a href="#">Aleppo Citadel</a>
            <a href="#">Crac des Chevaliers</a>
            <a href="#">Dead Sea</a>
            <a href="#">Orontes River</a>
            <a href="#">Al-Ghab Plain</a>
            <a href="#">Damascus Old City</a>
            <a href="#">Hama Water Wheels</a>
            <a href="#">Bosra Theater</a>
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
    // 6. HISTORY PAGE TRIVIA ENGINE INTERACTION LOOP
    // ==========================================================================
    const quizQuestions = [
        {
            question: "Which Syrian city is widely considered one of the oldest continuously inhabited cities in the world?",
            options: ["Palmyra", "Damascus", "Latakia", "Bosra"],
            answer: 1 // Damascus is index position 1
        },
        {
            question: "The magnificent ancient desert trading hub ruled by Queen Zenobia was:",
            options: ["Aleppo", "Mari", "Palmyra", "Ebla"],
            answer: 2 // Palmyra is index position 2
        }
    ];

    let currentQuestionIndex = 0;

    const questionElement = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const quizForm = document.getElementById('quiz-form');
    const feedbackContainer = document.getElementById('quiz-feedback');
    const feedbackAlert = document.getElementById('feedback-alert');
    const nextBtn = document.getElementById('next-question-btn');

    // Render current active trivia question frame 
    function loadQuizQuestion() {
        if (!questionElement) return; // Breaks safe if viewed on non-history pages

        feedbackContainer.classList.add('d-none');
        quizForm.querySelector('button[type="submit"]').disabled = false;
        
        const qData = quizQuestions[currentQuestionIndex];
        questionElement.textContent = `Q${currentQuestionIndex + 1}: ${qData.question}`;
        
        // Clear previous configurations
        optionsContainer.innerHTML = '';
        
        // Load options fields
        qData.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'quiz-option-label';
            label.innerHTML = `<input type="radio" name="trivia-opt" value="${idx}" required> ${opt}`;
            optionsContainer.appendChild(label);
        });
    }

    if (quizForm) {
        loadQuizQuestion(); // Initial launch trigger 

        quizForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const selectedOpt = quizForm.querySelector('input[name="trivia-opt"]:checked');
            if (!selectedOpt) return;

            const chosenAnswer = parseInt(selectedOpt.value);
            const correctAnswer = quizQuestions[currentQuestionIndex].answer;

            quizForm.querySelector('button[type="submit"]').disabled = true;
            feedbackContainer.classList.remove('d-none');

            if (chosenAnswer === correctAnswer) {
                feedbackAlert.className = "alert alert-success m-0";
                feedbackAlert.innerHTML = "✨ <strong>Correct!</strong> Excellent job parsing history details.";
            } else {
                feedbackAlert.className = "alert alert-danger m-0";
                feedbackAlert.innerHTML = `❌ <strong>Incorrect.</strong> The correct answer was: <strong>${quizQuestions[currentQuestionIndex].options[correctAnswer]}</strong>.`;
            }
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                // Loop questions array indexing infinitely
                currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
                loadQuizQuestion();
            });
        }
    }