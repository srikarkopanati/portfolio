//
let aboutMe = `
    I am a backend developer with expertise in Django, Tornado, and FastAPI, specializing in building high-performance and scalable applications. I develop RESTful APIs and real-time data processing systems, leveraging Django Ninja for structured APIs and Tornado for async WebSockets. My experience includes integrating ML models, optimizing ETL pipelines, and managing databases like PostgreSQL, MongoDB, and Redis. With a strong foundation in data science and backend systems, I aim to build efficient, AI-driven solutions.`
let aboutMeSection = document.getElementById('about-me-section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            fadeTypingAnimation(aboutMeSection,
                aboutMe
                , 100);
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering





observer.observe(aboutMeSection);
