// 1. Save the entire footer HTML markup inside a JavaScript template string variable
const sharedNavbarLayout = `
<nav class="navbar navbar-dark-solid">
    <div class="logo">
        <img src="Emblem_of_Syria.svg" class="img-fluid d-block mx-auto" alt="Responsive SVG description">
        <a href="index.html">SURIAH</a>
    </div>

    <ul class="nav-links">
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
                    <h3>Hotels & Tours</h3>
                    <a href="damascus.html">Damascus</a>
                    <a href="aleppo.html">Aleppo</a>
                    <a href="homs.html">Homs</a>
                    <a href="hama.html">Hama</a>
                    <a href="lattakia.html">Lattakia</a>
                </div>
            </div>
        </li>
    </ul>
</nav>
`;

const sharedNavbarLayoutMobile = `
<nav class="navbar navbar-expand-lg navbar-dark-solid">
    <div class="container-fluid">
        <!-- BRAND LOGO AND NAME -->
        <div class="logo d-flex align-items-center">
            <img src="Emblem_of_Syria.svg" class="img-fluid me-2" style="max-height: 40px;" alt="Emblem of Syria">
            <a class="navbar-brand m-0" href="index.html">SURIAH</a>
        </div>

        <button class="navbar-toggler text-white" type="button" data-bs-theme="dark" data-bs-toggle="collapse" data-bs-target="#mainNavbarAccordion" aria-controls="mainNavbarAccordion" aria-expanded="false" aria-controls="mainNavbarAccordion" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="mainNavbarAccordion">
            <div class="accordion w-100 d-lg-flex justify-content-end border-0 bg-transparent" id="navAccordion">
                
                <div class="accordion-item bg-transparent border-0 mx-lg-2">
                    <h2 class="accordion-header id="headingGeneral">
                        <button class="accordion-button collapsed bg-transparent text-white shadow-none px-0 py-2 py-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGeneral" aria-expanded="false" aria-controls="collapseGeneral">
                            General Information
                        </button>
                    </h2>
                    <div id="collapseGeneral" class="accordion-collapse collapse" aria-labelledby="headingGeneral" data-bs-parent="#navAccordion">
                        <div class="accordion-body custom-dropdown-menu d-flex flex-column flex-lg-row gap-3 p-3 p-lg-4">
                            <div class="menu-column d-flex flex-column">
                                <h3>Syria at a glance</h3>
                                <a href="pemerintahan.html">Current Government</a>
                                <a href="about.html">About Syria Tourism Board</a>
                            </div>
                            <div class="menu-column d-flex flex-column">
                                <h3>Getting around</h3>
                                <a href="transportasi-darat.html">Ground Transport</a>
                                <a href="transportasi-air-laut.html">Air & Water Transport</a>
                            </div>
                            <div class="menu-column d-flex flex-column">
                                <h3>Basics</h3>
                                <a href="entrance-fee.html">Entrance Fees</a>
                                <a href="visas.html">Visas</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent border-0 mx-lg-2">
                    <h2 class="accordion-header" id="headingAttractionsNav">
                        <button class="accordion-button collapsed bg-transparent text-white shadow-none px-0 py-2 py-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAttractionsNav" aria-expanded="false" aria-controls="collapseAttractionsNav">
                            Attractions
                        </button>
                    </h2>
                    <div id="collapseAttractionsNav" class="accordion-collapse collapse" aria-labelledby="headingAttractionsNav" data-bs-parent="#navAccordion">
                        <div class="accordion-body custom-dropdown-menu d-flex flex-column flex-lg-row gap-3 p-3 p-lg-4">
                            <div class="menu-column d-flex flex-column">
                                <h3>Historical Sites</h3>
                                <a href="https://whc.unesco.org/en/list/23/">Palmyra</a>
                                <a href="https://whc.unesco.org/en/list/21">Aleppo Citadel</a>
                                <a href="https://whc.unesco.org/en/list/1229">Crac des Chevaliers</a>
                            </div>
                            <div class="menu-column d-flex flex-column">
                                <h3>Natural Wonders</h3>
                                <a href="https://en.wikipedia.org/wiki/Ghab_Plain">Jabal an-Nusayriyah</a>
                                <a href="https://en.wikipedia.org/wiki/Orontes_River">Orontes River</a>
                                <a href="https://en.wikipedia.org/wiki/Syrian_Coastal_Mountain_Range">Al-Ghab Plain</a>
                            </div>
                            <div class="menu-column d-flex flex-column">
                                <h3>Cultural Experiences</h3>
                                <a href="https://whc.unesco.org/en/list/20/">Damascus Old City</a>
                                <a href="https://en.wikipedia.org/wiki/Norias_of_Hama">Hama Water Wheels</a>
                                <a href="https://whc.unesco.org/en/list/22/">Bosra Old City</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item bg-transparent border-0 mx-lg-2">
                    <h2 class="accordion-header" id="headingHotelsNav">
                        <button class="accordion-button collapsed bg-transparent text-white shadow-none px-0 py-2 py-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHotelsNav" aria-expanded="false" aria-controls="collapseHotelsNav">
                            Hotels & Tours
                        </button>
                    </h2>
                    <div id="collapseHotelsNav" class="accordion-collapse collapse" aria-labelledby="headingHotelsNav" data-bs-parent="#navAccordion">
                        <div class="accordion-body custom-dropdown-menu d-flex flex-column flex-lg-row gap-3 p-3 p-lg-4">
                            <div class="menu-column d-flex flex-column">
                                <h3>Hotels & Tours</h3>
                                <a href="damascus.html">Damascus</a>
                                <a href="aleppo.html">Aleppo</a>
                                <a href="homs.html">Homs</a>
                                <a href="hama.html">Hama</a>
                                <a href="lattakia.html">Lattakia</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>
`;

const sharedFooterLayout = `
<footer class="bagian-footer">
    <div class="d-flex justify-content-around gap-1" id="footer-details">
        <div id="footer-list" class="d-flex flex-column">
            <h3>About Syria</h3>
            <hr>
            <a href="history.html">History</a>
            <a href="culture.html">Culture</a>
            <a href="traditions.html">Traditions</a>
            <a href="geography.html">Geography</a>
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
            <a href="damascus.html">Damascus</a>
            <a href="aleppo.html">Aleppo</a>
            <a href="homs.html">Homs</a>
            <a href="hama.html">Hama</a>
            <a href="lattakia.html">Lattakia</a>
        </div>
    </div>
    <div>
        <h3 class="fs-5 bagian-footer">Made by: 2572053 / 2572054</h3>
    </div>
</footer>
`;

const sharedFooterLayoutMobile = `
<footer class="bagian-footer">
    <div class="accordion" id="footerAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAbout">
                <button class="accordion-button collapsed bg-transparent text-reset shadow-none p-0 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAbout" aria-expanded="false" aria-controls="collapseAbout">
                    About Syria
                </button>
            </h2>
            <div id="collapseAbout" class="accordion-collapse collapse" aria-labelledby="headingAbout" data-bs-parent="#footerAccordion">
                <div class="accordion-body d-flex flex-column">
                    <a href="history.html">History</a>
                    <a href="culture.html">Culture</a>
                    <a href="traditions">Traditions</a>
                    <a href="geography">Geography</a>
                    <a href="tourism.html">Tourism</a>
                    <a href="visas.html">Visas & Immigration</a>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAttractions">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAttractions" aria-expanded="false" aria-controls="collapseAttractions">
                    Attractions
                </button>
            </h2>
            <div id="collapseAttractions" class="accordion-collapse collapse" aria-labelledby="headingAttractions" data-bs-parent="#footerAccordion">
                <div class="accordion-body d-flex flex-column">
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
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingHotels">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHotels" aria-expanded="false" aria-controls="collapseHotels">
                    Hotels & Tours
                </button>
            </h2>
            <div id="collapseHotels" class="accordion-collapse collapse" aria-labelledby="headingHotels" data-bs-parent="#footerAccordion">
                <div class="accordion-body d-flex flex-column">
                    <a href="damascus.html">Damascus</a>
                    <a href="aleppo.html">Aleppo</a>
                    <a href="homs.html">Homs</a>
                    <a href="hama.html">Hama</a>
                    <a href="lattakia.html">Lattakia</a>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="fs-5 bagian-footer">Made by: 2572053 / 2572054</h3>
    </div>
</footer>
`;

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
            event.preventDefault();
            event.stopPropagation();

            const parentLi = btn.closest('.custom-dropdown-container');
            if (!parentLi) return;

            const targetMenu = parentLi.querySelector('.custom-dropdown-menu');
            if (!targetMenu) return;

            const isOpen = targetMenu.classList.contains('show-menu');

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
    const mediaQuery = window.matchMedia('(max-width: 992px)').matches;

    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = sharedNavbarLayout;

        if (mediaQuery) {
        navbarPlaceholder.innerHTML = sharedNavbarLayoutMobile;
        }

        // Custom Layout Modifications for Home Page specifically
        const navbarElement = navbarPlaceholder.querySelector('.navbar');
        if (navbarElement) {
            const currentPath = window.location.pathname;
            
            if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
                // Remove dark block background style on home page hero
                navbarElement.classList.remove('navbar-dark-solid');
            }
        }

        // Initialize menu toggles since navbar elements exist now
        initializeDropdowns();
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = sharedFooterLayout;
        
        if (mediaQuery) {
            footerPlaceholder.innerHTML = sharedFooterLayoutMobile;
        }
    }

    document.addEventListener('click', function (event) {
        if (event.target.closest('.custom-dropbtn') || event.target.closest('.custom-dropdown-menu')) {
            return; 
        }
        closeAllDropdowns();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAllDropdowns();
    });

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
        question: "Kota mana di Suriah yang secara luas dianggap sebagai salah satu kota tertua di dunia yang terus dihuni hingga kini?",
        options: ["Palmyra", "Damascus", "Latakia", "Bosra"],
        answer: 1
    },
    {
        question: "Pusat perdagangan gurun kuno yang megah yang diperintah oleh Ratu Zenobia adalah: ",
        options: ["Aleppo", "Mari", "Palmyra", "Ebla"],
        answer: 2
    },
    {
        question: "Bahasa apa yang distandarkan sebagai sarana perdagangan regional di seluruh wilayah pedalaman Suriah selama Zaman Besi?" ,
        options: ["Greek", "Latin", "Aramaic", "Arabic"],
        answer: 2
    },
    {
        question: "Setelah penaklukan yang dilakukan oleh Alexander Agung, kerajaan besar manakah yang menjadikan Antiokhia sebagai ibukotanya dan mengubah Suriah menjadi pusat peradaban Helenistik?",
        options: ["Kekaisaran Seleukia", "Kekaisaran Bizantium", "Kekaisaran Ottoman", "Kekaisaran Romawi"],
        answer: 0
    },
    {
        question: "Dari kota bersejarah mana di Suriah, Sultan Saladin menyatukan berbagai faksi regional selama Perang Salib?",
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

    if (!quizForm || !questionElement || !optionsContainer) {
        return; 
    }

    // Render current active trivia question frame 
    function loadQuizQuestion() {
        if (feedbackContainer) feedbackContainer.classList.add('d-none');
        
        const submitBtn = quizForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
        }
        
        const qData = quizQuestions[currentQuestionIndex];
        questionElement.textContent = `Q${currentQuestionIndex + 1}: ${qData.question}`;
        
        optionsContainer.innerHTML = '';
        
        // Load option nodes
        qData.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'quiz-option-label';
            label.innerHTML = `<input type="radio" name="trivia-opt" value="${idx}" required> ${opt}`;
            optionsContainer.appendChild(label);
        });
    }

    loadQuizQuestion(); 

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
            feedbackAlert.innerHTML = `❌ <strong>Salah.</strong> Jawaban yang benar adalah: <strong>${quizQuestions[currentQuestionIndex].options[correctAnswer]}</strong>.`;
        }

        // Alter the next button text if it is the absolute final question
        if (currentQuestionIndex === quizQuestions.length - 1) {
            if (nextBtn) nextBtn.innerHTML = "Lihat Hasil Akhir &rarr;";
        } else {
            if (nextBtn) nextBtn.innerHTML = "Pertanyaan Berikutnya &rarr;";
        }
    });

    // Calculating final percentage scores
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (currentQuestionIndex < quizQuestions.length - 1) {
                // Advance to the next question
                currentQuestionIndex++;
                loadQuizQuestion();
            } else {
                // End of quiz reached: Calculate the total final score percentage
                const finalPercentage = Math.round((correctAnswersCount / quizQuestions.length) * 100);
                
                questionElement.innerHTML = `🏁 Kuis Selesai!`;
                optionsContainer.innerHTML = `
                    <div class="text-center py-3">
                        <p class="display-4 font-weight-bold mb-2 text-warning">${finalPercentage}%</p>
                        <p class="lead">Anda telah menjawab tepat <strong>${correctAnswersCount}</strong> dari <strong>${quizQuestions.length}</strong> pertanyaan.</p>
                    </div>
                `;
                
                if (feedbackContainer) feedbackContainer.classList.add('d-none');
                
                const submitBtn = quizForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "🔄 Ulangi Kuis";
                    
                    quizForm.onsubmit = function(event) {
                        event.preventDefault();
                        currentQuestionIndex = 0;
                        correctAnswersCount = 0;
                        quizForm.onsubmit = null;
                        loadQuizQuestion();
                    };
                }
            }
        });
    }
});