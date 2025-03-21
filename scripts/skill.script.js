const root = document.documentElement

const my = getComputedStyle(root).getPropertyValue('--skill-padding-y');


let frontendSkillsElement = document.getElementById('frontend-skills');
let backendSkillsElement = document.getElementById('backend-skills');
let testingSkillsElement = document.getElementById('testing-skills');
let frontendSkills = [
  {
    title: "C/C++", color: "snow",
    link: "https://learn.microsoft.com/en-us/cpp/?view=msvc-170",
    icon: `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="cplusplus-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#00599C" stroke="#004482" stroke-width="0.5"/>
    
    <!-- C++ Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="white">
      C++
    </text>
    
    <!-- Plus Signs -->
    <path d="M10 6H12V8H10V10H8V8H6V6H8V4H10V6Z" fill="#FFA500"/>
    <path d="M4 6H6V8H4V10H2V8H0V6H2V4H4V6Z" fill="#FFA500"/>
  </g>
</svg>
    `
  },
  {
    title: "Verilog", color: "#0081A3",
    link: "hhttps://www.chipverify.com/tutorials/verilog",
    icon: `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="verilog-icon">
    <!-- Background Square -->
    <rect x="1" y="1" width="14" height="14" fill="#4B0082" stroke="#800080" stroke-width="0.5"/>
    
    <!-- Chip Design -->
    <rect x="4" y="4" width="8" height="8" fill="#800080"/>
    <circle cx="6" cy="6" r="1" fill="#4B0082"/>
    <circle cx="10" cy="6" r="1" fill="#4B0082"/>
    <circle cx="6" cy="10" r="1" fill="#4B0082"/>
    <circle cx="10" cy="10" r="1" fill="#4B0082"/>
  </g>
</svg>
    `
  },
  { breakSkill: true },
  {
    title: "SQL", color: "#B7178C",
    link: "https://www.w3schools.com/sql/",
    icon: `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="sql-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#00758F" stroke="#003B4F" stroke-width="0.5"/>
    
    <!-- Database Symbol -->
    <path d="M8 3C5 3 3 4 3 6V10C3 12 5 13 8 13C11 13 13 12 13 10V6C13 4 11 3 8 3Z" fill="#003B4F"/>
    <path d="M8 5C10 5 11 5.5 11 6V8C11 8.5 10 9 8 9C6 9 5 8.5 5 8V6C5 5.5 6 5 8 5Z" fill="#00758F"/>
    <path d="M8 9C10 9 11 9.5 11 10V12C11 12.5 10 13 8 13C6 13 5 12.5 5 12V10C5 9.5 6 9 8 9Z" fill="#00758F"/>
    
    <!-- SQL Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="white">
      SQL
    </text>
  </g>
</svg>
    `


  },
  
  { breakSkill: true },
  
  
  { breakSkill: true },
];

let backendSkills = [
  
  {
    title: "Django", color: "#092E20",
    link: "https://docs.djangoproject.com/en/4.0/",
    icon: `
    
 
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="logos:django-icon" clip-path="url(#clip0_16_77)">
      <path id="Vector" d="M14.25 0H1.75C0.783502 0 0 0.783502 0 1.75V14.25C0 15.2165 0.783502 16 1.75 16H14.25C15.2165 16 16 15.2165 16 14.25V1.75C16 0.783502 15.2165 0 14.25 0Z" fill="#092E20"/>
      <path id="Vector_2" d="M11.6486 5.88737V10.0265C11.6486 11.4527 11.5442 12.1367 11.2312 12.7281C10.9413 13.2963 10.5586 13.6557 9.77025 14.0499L8.11213 13.2615C8.90063 12.8905 9.28325 12.5659 9.52669 12.0671C9.78182 11.5571 9.86307 10.9657 9.86307 9.41206V5.88737H11.6486ZM8.808 3.12987V11.3948C7.89206 11.5687 7.21956 11.6382 6.48913 11.6382C4.30931 11.6382 3.17307 10.6528 3.17307 8.7628C3.17307 6.94243 4.37894 5.75987 6.24557 5.75987C6.53544 5.75987 6.75575 5.78299 7.02244 5.85256V3.12999L8.808 3.12987ZM6.41956 7.19749C5.51519 7.19749 4.99338 7.75406 4.99338 8.72793C4.99338 9.67881 5.492 10.2005 6.408 10.2005C6.605 10.2005 6.76738 10.1889 7.02244 10.1542V7.29018C6.81375 7.22068 6.63988 7.19749 6.41956 7.19749ZM11.6486 3.13937V4.97137H9.86307V3.13943L11.6486 3.13937Z" fill="#FFFFFD"/>
      </g>
      <defs>
      <clipPath id="clip0_16_77">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
      </svg>


    `

  },
  {
    title: "Tornado", color: "#E44D26",
    link: "https://www.tornadoweb.org/en/stable/",
    icon: `
    
      <svg id="tornado-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 5H21L17 9H7L3 5ZM7 11H17L21 15H3L7 11ZM10 17H14L21 21H3L10 17Z" fill="#46B1E5"/>
</svg>

    `

  },
  {
    title: "HTML", color: "#E44D26",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: `
    
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="skill-icons:html" clip-path="url(#clip0_16_31)">
        <g id="Group">
        <path id="Vector" d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="#E14E1D"/>
        <path id="Vector_2" d="M3 2.375L3.53813 8.41206H10.4575L10.2253 11.0014L7.99744 11.6038L5.77375 11.0023L5.62506 9.33969H3.62125L3.90781 12.5448L7.997 13.6805L12.0914 12.5448L12.6403 6.41594H5.364L5.18131 4.37156H12.8212L13 2.375H3Z" fill="white"/>
        <path id="Vector_3" d="M8 2.375H3L3.53813 8.41206H8V6.41594H5.364L5.18131 4.37156H8V2.375ZM8 11.6029L7.99744 11.6038L5.77375 11.0023L5.62506 9.33969H3.62125L3.90781 12.5448L7.997 13.6805L8.00006 13.6796L8 11.6029Z" fill="#EBEBEB"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_16_31">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>

    `

  },
  {
    title: "CSS", color: "#264DE4",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: `
 
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="skill-icons:css" clip-path="url(#clip0_16_38)">
        <g id="Group">
        <path id="Vector" d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="#0277BD"/>
        <path id="Vector_2" d="M3.35956 6.41569L3.53844 8.41206H8.006V6.41569H3.35956ZM8.00594 2.375H3L3.1815 4.37138H8.00594V2.375ZM8.00594 13.6776V11.6005L7.99719 11.6028L5.77381 11.0025L5.63169 9.41025H3.62762L3.90731 12.5449L7.99675 13.6801L8.00594 13.6776Z" fill="#EBEBEB"/>
        <path id="Vector_3" d="M10.4574 8.41206L10.2256 11.0012L7.99905 11.6022V13.6791L12.0917 12.5449L12.1217 12.2076L12.5909 6.95181L12.6396 6.41569L13 2.375H7.99905V4.37138H10.8121L10.6305 6.41569H7.99905V8.41206H10.4574Z" fill="white"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_16_38">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>
 
    `

  },
  {title: "JavaScript", color: "#83CD29",
    link: "https://nodejs.org/en/docs/",
    icon: `
    
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="logos:nodejs-icon-alt" clip-path="url(#clip0_16_58)">
      <path id="Vector" d="M8.43269 0.112703C8.16119 -0.0378931 7.83881 -0.0378931 7.56731 0.112703L0.424188 4.17929C0.152688 4.32988 0 4.61437 0 4.91556V13.0654C0 13.3666 0.169688 13.6511 0.424188 13.8017L7.56731 17.8682C7.83881 18.0189 8.16119 18.0189 8.43269 17.8682L15.5758 13.8017C15.8473 13.6511 16 13.3666 16 13.0654V4.91556C16 4.61437 15.8303 4.32988 15.5758 4.17929L8.43269 0.112703Z" fill="url(#paint0_linear_16_58)"/>
      <g id="Mask group">
      <mask id="mask0_16_58" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-1" width="16" height="19">
      <g id="Group">
      <path id="Vector_2" d="M8.43269 0.112703C8.16119 -0.0378931 7.83881 -0.0378931 7.56731 0.112703L0.424188 4.17929C0.152688 4.32988 0 4.61437 0 4.91556V13.0654C0 13.3666 0.169688 13.6511 0.424188 13.8017L7.56731 17.8682C7.83881 18.0189 8.16119 18.0189 8.43269 17.8682L15.5758 13.8017C15.8473 13.6511 16 13.3666 16 13.0654V4.91556C16 4.61437 15.8303 4.32988 15.5758 4.17929L8.43269 0.112703Z" fill="white"/>
      </g>
      </mask>
      <g mask="url(#mask0_16_58)">
      <path id="Vector_3" d="M15.5928 4.17947L8.41562 0.113009C8.34774 0.0795976 8.26293 0.046125 8.19506 0.0293579L0.152679 13.6179C0.220554 13.7015 0.305429 13.7685 0.390179 13.8187L7.5673 17.8852C7.77093 18.0024 8.00849 18.0358 8.22905 17.9689L15.7794 4.34683C15.7284 4.27989 15.6606 4.22971 15.5927 4.17953" fill="url(#paint1_linear_16_58)"/>
      </g>
      </g>
      <g id="Mask group_2">
      <mask id="mask1_16_58" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-1" width="16" height="19">
      <g id="Group_2">
      <path id="Vector_4" d="M8.43269 0.112703C8.16119 -0.0378931 7.83881 -0.0378931 7.56731 0.112703L0.424188 4.17929C0.152688 4.32988 0 4.61437 0 4.91556V13.0654C0 13.3666 0.169688 13.6511 0.424188 13.8017L7.56731 17.8682C7.83881 18.0189 8.16119 18.0189 8.43269 17.8682L15.5758 13.8017C15.8473 13.6511 16 13.3666 16 13.0654V4.91556C16 4.61437 15.8303 4.32988 15.5758 4.17929L8.43269 0.112703Z" fill="white"/>
      </g>
      </mask>
      <g mask="url(#mask1_16_58)">
      <path id="Vector_5" d="M15.6098 13.8019C15.8134 13.6848 15.9661 13.484 16.0339 13.2664L8.1612 0.0125811C7.95757 -0.0208915 7.73701 -0.00418598 7.55038 0.112937L0.424133 4.16281L8.11032 17.9857C8.21207 17.9689 8.33088 17.9355 8.4327 17.8852L15.6098 13.8019Z" fill="url(#paint2_linear_16_58)"/>
      </g>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear_16_58" x1="1091.01" y1="314.442" x2="323.314" y2="1537.44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#41873F"/>
      <stop offset="0.3288" stop-color="#418B3D"/>
      <stop offset="0.6352" stop-color="#419637"/>
      <stop offset="0.9319" stop-color="#3FA92D"/>
      <stop offset="1" stop-color="#3FAE2A"/>
      </linearGradient>
      <linearGradient id="paint1_linear_16_58" x1="676.429" y1="991.618" x2="2624.86" y2="-81.6738" gradientUnits="userSpaceOnUse">
      <stop offset="0.1376" stop-color="#41873F"/>
      <stop offset="0.4032" stop-color="#54A044"/>
      <stop offset="0.7136" stop-color="#66B848"/>
      <stop offset="0.9081" stop-color="#6CC04A"/>
      </linearGradient>
      <linearGradient id="paint2_linear_16_58" x1="-68.0873" y1="899.361" x2="1584.8" y2="899.361" gradientUnits="userSpaceOnUse">
      <stop offset="0.09192" stop-color="#6CC04A"/>
      <stop offset="0.2864" stop-color="#66B848"/>
      <stop offset="0.5968" stop-color="#54A044"/>
      <stop offset="0.8624" stop-color="#41873F"/>
      </linearGradient>
      <clipPath id="clip0_16_58">
      <rect width="16" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>

    `

  },

];


let testingSkills = [
  {
    title: "DSA", color: "#8A4182",
    link: "https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/",
    icon: `
    
          
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="dsa-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#FF6F61" stroke="#CC4B3E" stroke-width="0.5"/>
    
    <!-- DSA Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="white">
      DSA
    </text>
  </g>
</svg>


    `

  },
  {
    title: "OOPS", color: "#58D09E",
    link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming",
    icon: `
    
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="oops-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#FFA500" stroke="#CC8400" stroke-width="0.5"/>
    
    <!-- Class Box -->
    <rect x="4" y="4" width="8" height="8" fill="#FFFFFF" stroke="#000000" stroke-width="0.5"/>
    
    <!-- Inheritance Arrow -->
    <path d="M8 12L10 10L6 10L8 12Z" fill="#000000"/>
  </g>
</svg>

    `

  },
  {
    title: "DBMS", color: "#56C5A8",
    link: "https://www.techtarget.com/searchdatamanagement/definition/database-management-system#:~:text=A%20database%20management%20system%20(DBMS)%20is%20a%20software%20system%20for,delete%20data%20in%20a%20database.",
    icon: `
    
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="dbms-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#00758F" stroke="#003B4F" stroke-width="0.5"/>
    
    <!-- Database Symbol -->
    <path d="M8 3C5 3 3 4 3 6V10C3 12 5 13 8 13C11 13 13 12 13 10V6C13 4 11 3 8 3Z" fill="#003B4F"/>
    <path d="M8 5C10 5 11 5.5 11 6V8C11 8.5 10 9 8 9C6 9 5 8.5 5 8V6C5 5.5 6 5 8 5Z" fill="#00758F"/>
    <path d="M8 9C10 9 11 9.5 11 10V12C11 12.5 10 13 8 13C6 13 5 12.5 5 12V10C5 9.5 6 9 8 9Z" fill="#00758F"/>
  </g>
</svg>

    `

  },
  {
    title: "Machine Learning", color: "#56C5A8",
    link: "https://www.geeksforgeeks.org/machine-learning-algorithms/",
    icon: `
    
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="ml-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#4CAF50" stroke="#388E3C" stroke-width="0.5"/>
    
    <!-- ML Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="white">
      ML
    </text>
  </g>
</svg>

    `

  },
  {
    title: "Deep Learning", color: "#56C5A8",
    link: "https://cloud.google.com/discover/what-is-deep-learning",
    icon: `
    
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="dl-icon">
    <!-- Background Circle -->
    <circle cx="8" cy="8" r="7.25" fill="#9C27B0" stroke="#7B1FA2" stroke-width="0.5"/>
    
    <!-- DL Text -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="white">
      DL
    </text>
  </g>
</svg>

    `

  }
];

//
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('skill-active')
      observer.unobserve(entry.target);
    }
  })
}, { threshold: 0.2, rootMargin: "50px 0px" })

let addSkill = ({
  title,
  color,
  icon,
  link,
  breakSkill,
  skillsElement,
  removeAfter }) => {
  let skill = document.createElement('a');
  observer.observe(skill)

  if (link) {
    skill.href = link
    skill.target = "_blank"
  }
  skill.classList.add("skill");

  //// Handle events

  let handleMove = () => {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                                 linear-gradient(to right, ${color}, var(--skill-border-color)) border-box`;
  }
  let handleOut = () => {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                                 linear-gradient(to right, var(--skill-border-color), var(--skill-border-color)) border-box`;
  }

  skill.addEventListener('mouseover', handleMove);
  skill.addEventListener('mouseout', handleOut);

  skill.addEventListener('touchmove', handleMove);
  skill.addEventListener('touchend', handleOut);






  //// Add icon
  if (icon) {
    const svgSpan = document.createElement('span')
    svgSpan.style.display = "flex"
    svgSpan.style.alignItems = "center"
    svgSpan.style.marginRight = my
    svgSpan.innerHTML = icon
    skill.appendChild(svgSpan)
  }
  if (title) {
    const titleSpan = document.createElement('span')
    titleSpan.innerText = title
    skill.appendChild(titleSpan)
  }

  //// 
  if (breakSkill) {
    let breakSkillElement = document.createElement('div')
    breakSkillElement.classList.add('break-skill')
    skillsElement.appendChild(breakSkillElement);
  } else {
    skillsElement.appendChild(skill);
  }

  // setTimeout(() => {
  //   skill.style.animation = "none";
  // }, removeAfter);
};



let observeSkills = (skills, skillsElement) => {
  if (skillsElement && skills) {
    skills.forEach((skill, index) => {
      let delay = 100 * (index + 1); // Adjust delay for animation
      setTimeout(() => {
        addSkill({
          title: skill.title,
          icon: skill.icon, color: skill.color,
          link: skill.link,
          breakSkill: skill.breakSkill,
          skillsElement: skillsElement,
          removeAfter: delay
        });
      }, delay);
    });
  }
};

observeSkills(frontendSkills, frontendSkillsElement);
observeSkills(backendSkills, backendSkillsElement);
observeSkills(testingSkills, testingSkillsElement);
