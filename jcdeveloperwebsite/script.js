
        let currentVideoIndex = 0;

        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('active');
        }

        function changeVideo(index, videoId) {
            currentVideoIndex = index;
            const videoFrame = document.getElementById('videoFrame');
            videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
            
            const dots = document.querySelectorAll('.video-dot');
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function submitReview(event) {
            event.preventDefault();
            
            const name = document.getElementById('reviewName').value;
            const company = document.getElementById('reviewCompany').value;
            const rating = document.getElementById('reviewRating').value;
            const text = document.getElementById('reviewText').value;
            
            console.log('Review submitted:', { name, company, rating, text });
            
            document.getElementById('reviewSuccess').style.display = 'block';
            document.getElementById('reviewForm').reset();
            
            setTimeout(() => {
                document.getElementById('reviewSuccess').style.display = 'none';
            }, 5000);
        }

        function submitContact(event) {
            event.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const service = document.getElementById('contactService').value;
            const message = document.getElementById('contactMessage').value;
            
            console.log('Contact form submitted:', { name, email, phone, service, message });
            
            document.getElementById('contactSuccess').style.display = 'block';
            document.getElementById('contactForm').reset();
            
            setTimeout(() => {
                document.getElementById('contactSuccess').style.display = 'none';
            }, 5000);
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.8)';
            }
        });

//         /* ================= CHATBOT LOGIC ================= */
// function toggleChatbot() {
//     const box = document.getElementById('chatbotBox');
//     box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
// }

// function sendMessage() {
//     const input = document.getElementById('chatInput');
//     const msg = input.value.trim();
//     if (!msg) return;

//     const messages = document.getElementById('chatMessages');
//     messages.innerHTML += `<div class="user">${msg}</div>`;

//     const text = msg.toLowerCase();
//     let reply = "";

//     if (text.includes("clean") || text.includes("cleaning") || text.includes("module")) {
//         reply = "We provide wet cleaning and robotic solar module cleaning to improve panel efficiency.";
//     }
//     else if (text.includes("road") || text.includes("construction")) {
//         reply = "We handle internal road construction and infrastructure development for solar plants.";
//     }
//     else if (text.includes("grass") || text.includes("cutting")) {
//         reply = "We offer regular grass cutting and complete site maintenance services.";
//     }
//     else if (text.includes("maintenance") || text.includes("service")) {
//         reply = "We provide complete solar plant maintenance including cleaning, inspection, and upkeep.";
//     }
//     else if (text.includes("equipment") || text.includes("tractor") || text.includes("rent")) {
//         reply = "We supply solar equipment, tractors on rent, and water supply as per project needs.";
//     }
//     else if (text.includes("price") || text.includes("cost") || text.includes("charges")) {
//         reply = "Pricing depends on plant size and services required. Please contact us for a quotation.";
//     }
//     else if (text.includes("contact") || text.includes("phone") || text.includes("call")) {
//         reply = "You can call us at +91 7090833144 or contact us via WhatsApp anytime.";
//     }
//     else if (text.includes("time") || text.includes("hours") || text.includes("working")) {
//         reply = "Our working hours are Monday to Saturday, 9:00 AM – 6:00 PM.";
//     }
//     else if (text.includes("location") || text.includes("address")) {
//         reply = "We are located at Vijayapur Yatnai Road, Farhatabad, Karnataka.";
//     }
//     else {
//         reply = "Thanks for reaching out! Please tell me which service you are looking for: cleaning, road, grass cutting, maintenance, or equipment.";
//     }

//     setTimeout(() => {
//         messages.innerHTML += `<div class="bot">${reply}</div>`;
//         messages.scrollTop = messages.scrollHeight;
//     }, 500);

//     input.value = "";
// }

    function changeVideo(index, videoId) {
    const videoFrame = document.getElementById("videoFrame");

    // Force reload of iframe
    videoFrame.src = "";
    setTimeout(() => {
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=1`;
    }, 100);

    // Update active dot
    document.querySelectorAll(".video-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}



