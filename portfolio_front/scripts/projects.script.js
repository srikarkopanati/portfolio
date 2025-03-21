const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("animation-project-card-link-slide"); // Add animation class
          observer.unobserve(entry.target); // Stop observing once animated
      }
  });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering

const projects = [
  {
      title: "Zero-shot and Few-shot Classification of Telugu News Articles using LLMs",
      duration: "Jan 2024 – May 2024",
      description: `
          <strong>Tech Stack:</strong> NLP, Large Language Models, Text Classification, Zero-shot and Few-shot Techniques.<br>
          <strong>Models and frameworks used:</strong> LLMs such as mBERT, Indic-BERT, XLM-RoBERTa, Flan-T5, and BART.<br>
          • Explored a plethora of LLMs for Telugu news classification in Zero-shot and Few-shot scenarios.<br>
          • Implemented traditional machine learning models, including SVM, Naive Bayes, and AdaBoost, for comparison.<br>
          • Utilized prompt engineering techniques to enhance Zero-shot classification performance.
      `,
      codeLink: "https://github.com/your-repo/zero-shot-telugu"
  },
  {
      title: "Implementation of Approximated Parallel Prefix Adders",
      duration: "Feb 2024 – May 2024",
      description: `
          <strong>Tech Stack:</strong> Verilog coding, VLSI testing, Hardware.<br>
          • Developed high-speed adders using Parallel Prefix Adders (Kogge-Stone, Brent-Kung) to enhance computing efficiency.<br>
          • Conducted gate-level optimization and trade-off analysis to evaluate performance and minimize delay.<br>
          • Analyzed the error rates of the designed adders to ensure a balance between speed and accuracy.<br>
          • Validated the adder designs through practical implementation on FPGA boards.
      `,
      codeLink: "https://github.com/your-repo/prefix-adders"
  },
  {
      title: "Sleep Stage Scoring Using EEG",
      duration: "Jun 2023 – Oct 2023",
      description: `
          <strong>Tech Stack:</strong> Python, TensorFlow, scikit-learn, Random Forests, SVM, Signal Processing Libraries.<br>
          • Utilized deep learning and machine learning for automated sleep stage classification.<br>
          • Implemented Random Forests (RF) and Support Vector Machine (SVM) algorithms.<br>
          • Evaluated models using confusion matrix, F1 score, and accuracy metrics.<br>
          • Achieved 85% accuracy, surpassing random classification (typically around 20% accuracy for multi-class sleep stages), significantly enhancing EEG data analysis.
      `,
      codeLink: "https://github.com/your-repo/sleep-scoring"
  },
  // {
  //     title: "Supply Chain Monitoring",
  //     duration: "Sep 2022 – Jan 2023",
  //     description: `
  //         <strong>Tech Stack:</strong> IoT Sensors (NEO-6M GPS, Temperature/Humidity, Pressure, Gyro, Moisture, Speed), Python, Arduino.<br>
  //         • Integrated advanced sensors such as NEO-6M GPS, temperature/humidity, pressure, gyro, moisture, and speed sensors for monitoring.<br>
  //         • Implemented real-time monitoring and adjustments for efficient operations.<br>
  //         • Streamlined supply chain processes using IoT technology, improving resource management.
  //     `,
  //     codeLink: "https://github.com/your-repo/supply-chain-monitoring"
  // }
];

const parentElement = document.getElementById("project-section");

projects.forEach(project => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const body = document.createElement("div");
  body.classList.add("project-card-body");

  const title = document.createElement("h3");
  title.classList.add("text-primary", "project-name");
  title.textContent = project.title;

  const duration = document.createElement("p");
  duration.classList.add("text-secondary", "project-duration");
  duration.textContent = project.duration;

  const description = document.createElement("p");
  description.classList.add("text-secondary", "project-desc");
  description.innerHTML = project.description;
  description.style.marginBottom = "20px"; // Adds extra space below the text

  // Container for Code button
  const codeContainer = document.createElement("div");
  codeContainer.style.marginTop = "15px"; // Moves Code button further down

  const codeLink = document.createElement("a");
  codeLink.href = project.codeLink;
  codeLink.target = "_blank";
  codeLink.classList.add("project-redirect-link", "project-redirect-link-left", "text-primary");
  codeLink.innerHTML = `<span>Code</span>`;

  codeContainer.appendChild(codeLink);

  body.appendChild(title);
  body.appendChild(duration);
  body.appendChild(description);
  body.appendChild(codeContainer); // Ensure it's positioned lower

  projectCard.appendChild(body);
  parentElement.appendChild(projectCard);
});
