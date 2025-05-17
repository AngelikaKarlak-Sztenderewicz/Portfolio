const user = {
  name: "Jan",
  surname: "Kowalski",
  aboutMe:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  skills: [
    { name: "HTML", years: 3 },
    { name: "CSS", years: 2 },
    { name: "JavaScript", years: 3 },
    { name: "Chrome", years: 1 },
    { name: "Git", years: 2 },
  ],
  hobbies:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
  projects: [],
  messages: [],
};

let h2Element, h3Element;
let menuBtn, nav;
let prevBtn, nextBtn;
let carouselWrapper;

function updateCarouselHeight() {
  const homeContainer = document.getElementById("secondProjectSection");
  if (!homeContainer) return;

  if (window.innerWidth < 768) {
    const cards = homeContainer.querySelectorAll(".projectCard");
    const cardsCount = cards.length;

    const cardHeight = 460;
    const gap = 41;

    if (cardsCount === 0) {
      homeContainer.style.height = "0px";
    } else if (cardsCount >= 3) {
      homeContainer.style.height = `${3 * cardHeight + 2 * gap}px`;
    } else {
      const totalHeight = cardsCount * cardHeight + (cardsCount - 1) * gap;
      homeContainer.style.height = `${totalHeight}px`;
    }
  } else {
    homeContainer.style.height = "";
  }
}

function updateArrowVisibility() {
  const carousel = document.getElementById("secondProjectSection");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!carousel || !prevBtn || !nextBtn) {
    return;
  }

  if (carousel.children.length >= 4) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}

function renderNavigation() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const navigation = document.createElement("div");
  navigation.classList.add("navigation");

  menuBtn = document.createElement("button");
  menuBtn.classList.add("menuBtn");

  for (let i = 0; i < 3; i++) {
    const bar = document.createElement("div");
    menuBtn.appendChild(bar);
  }
  nav = document.createElement("nav");
  nav.classList.add("menu");
  const ul = document.createElement("ul");

  const tabs = [
    {
      id: "home",
      label: "HOME",
      h2: "JAN KOWALSKI",
      h3: "WEB-DESIGNER",
    },
    {
      id: "projects",
      label: "PROJECTS",
      h2: "MY PROJECTS",
      h3: "MADE WITH LOVE",
    },
    {
      id: "about",
      label: "ABOUT",
      h2: "ABOUT ME",
      h3: "IT’S A-ME, JAN!",
    },
    {
      id: "contact",
      label: "CONTACT",
      h2: "CONTACT ME",
      h3: "SAY HELLO TO ME",
    },
    {
      id: "messages",
      label: "MESSAGES",
      h2: "MESSAGES",
      h3: "MESSAGE FROM THE INTERESTED PERSON",
    },
  ];
  tabs.forEach((tab) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = tab.label;
    button.addEventListener("click", () => {
      showSection(tab.id);
      updateHeader(tab.h2, tab.h3);

      nav.classList.remove("show");
      menuBtn.classList.remove("open");
    });
    li.appendChild(button);
    ul.appendChild(li);
  });

  const logo = document.createElement("h1");

  const logoLeft = document.createElement("span");
  logoLeft.classList.add("leftLogo");
  logoLeft.textContent = "ITP";

  const logoRight = document.createElement("span");
  logoRight.classList.add("rightLogo");
  logoRight.textContent = "ortfolio";

  logo.appendChild(logoLeft);
  logo.appendChild(logoRight);

  nav.appendChild(ul);
  navigation.appendChild(logo);
  navigation.appendChild(menuBtn);
  navigation.appendChild(nav);

  const headerText = document.createElement("div");
  headerText.classList.add("heroContent");

  h2Element = document.createElement("h2");
  h3Element = document.createElement("h3");

  headerText.appendChild(h2Element);
  headerText.appendChild(h3Element);

  const footerNav = nav.cloneNode(true);

  const footerContact = document.createElement("div");
  footerContact.classList.add("footerContact");

  const footerInfo = document.createElement("div");

  const contactEmail = document.createElement("div");
  contactEmail.textContent = "jan_kowalski@gmail.com";
  const contactNumber = document.createElement("div");
  contactNumber.textContent = "+123456789";

  const footerLogo = document.createElement("h5");

  const spanLeft = document.createElement("span");
  spanLeft.classList.add("leftLogo");
  spanLeft.textContent = "ITP";

  const spanRight = document.createElement("span");
  spanRight.classList.add("rightLogo");
  spanRight.textContent = "ortfolio";

  const spanCopyright = document.createElement("span");
  spanCopyright.textContent = "© 2024";

  footerLogo.appendChild(spanLeft);
  footerLogo.appendChild(spanRight);
  footerLogo.appendChild(document.createTextNode(" "));
  footerLogo.appendChild(spanCopyright);

  footerInfo.appendChild(contactEmail);
  footerInfo.appendChild(contactNumber);

  footerContact.appendChild(footerInfo);

  footerContact.appendChild(footerLogo);

  showSection("home");
  updateHeader("JAN KOWALSKI", "WEB-DESIGNER");
  document.querySelectorAll("nav button").forEach((btn) => {
    if (btn.textContent === "HOME") btn.classList.add("active");
  });

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("show");
  });

  function updateHeader(h2, h3) {
    h2Element.textContent = h2;
    h3Element.textContent = h3;
  }

  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("headerWrapper");
  headerWrapper.appendChild(navigation);
  headerWrapper.appendChild(headerText);

  header.appendChild(headerWrapper);

  const footerWrapper = document.createElement("div");

  footerWrapper.classList.add("footerWrapper");

  footerWrapper.appendChild(footerNav);

  footerWrapper.appendChild(footerContact);

  footer.appendChild(footerWrapper);

  addNavigationEventListeners(footerNav);
  addNavigationEventListeners(nav);
}
function addNavigationEventListeners(navElement) {
  navElement.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.textContent.toLowerCase();
      const tab = {
        home: { h2: "JAN KOWALSKI", h3: "WEB-DESIGNER" },
        projects: { h2: "MY PROJECTS", h3: "MADE WITH LOVE" },
        about: { h2: "ABOUT ME", h3: "IT’S A-ME, JAN!" },
        contact: { h2: "CONTACT ME", h3: "SAY HELLO TO ME" },
        messages: { h2: "MESSAGES", h3: "MESSAGE FROM THE INTERESTED PERSON" },
      }[tabId];

      showSection(tabId);
      updateHeader(tab.h2, tab.h3);

      document.querySelectorAll("nav button").forEach((btn) => {
        btn.classList.remove("active");
      });
      document.querySelectorAll("footer nav button").forEach((btn) => {
        btn.classList.remove("active");
      });
      document.querySelectorAll("button").forEach((btn) => {
        if (btn.textContent === button.textContent) {
          btn.classList.add("active");
        }
      });

      menuBtn.classList.remove("open");
      nav.classList.remove("show");
    });
  });
}

function updateHeader(title, subtitle) {
  h2Element.textContent = title;
  h3Element.textContent = subtitle;
}

function showSection(sectionId) {
  if (sectionId === "contact" && !document.getElementById("contact")) {
    renderContactSection();
  }

  const allSections = document.querySelectorAll("main > section");
  allSections.forEach((section) => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });
}

function renderHomeSection() {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.id = "home";

  // ADD FOTO

  const img = document.createElement("img");
  img.src = "pictures/mainFoto.jpg";
  img.alt = `${user.name} ${user.surname}`;
  img.classList.add("profilePhoto"); //klasa zdjęcia

  section.appendChild(img);
  main.appendChild(section);
  //ABOUT ME
  const aboutHeader = document.createElement("h4");
  aboutHeader.textContent = "About me";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent = user.aboutMe;
  section.appendChild(aboutHeader);
  section.appendChild(aboutParagraph);

  // ADD SKILLS
  const skillsHeader = document.createElement("h4");
  skillsHeader.textContent = "My skills";
  const skillsContainer = document.createElement("div");
  skillsContainer.id = "skillsContainer";
  section.appendChild(skillsHeader);
  section.appendChild(skillsContainer);

  user.skills.forEach((skill) => {
    addSkill(skill.name, skill.years, skillsContainer);
  });

  //PROJECT CONTAINER

  const carousel = document.createElement("div");
  carousel.id = "secondProjectSection";
  carousel.classList.add("carousel");

  user.projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("projectCard");
    const list = document.createElement("ul");
    list.innerHTML =
      `<strong>${project.title}</strong>` +
      project.technologies.map((t) => `<li>${t}</li>`).join("");
    card.appendChild(list);
    carousel.appendChild(card);
  });

  carouselWrapper = document.createElement("div");
  carouselWrapper.classList.add("carouselWrapper");
  carouselWrapper.appendChild(carousel);

  prevBtn = document.createElement("button");
  prevBtn.id = "prevBtn";
  prevBtn.classList.add("arrowButton");
  prevBtn.innerHTML = `<img src="pictures/IconLeft.png" alt="<=" />`;

  nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.classList.add("arrowButton");
  nextBtn.innerHTML = `<img src="pictures/IconRight.png" alt="=>" />`;

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  buttonDiv.append(prevBtn, nextBtn);

  section.appendChild(carouselWrapper);
  section.appendChild(buttonDiv);
  updateArrowVisibility();
}
function setupMobileMenu() {
  const menuButton = document.getElementById("menuBtn");
  const navMenu = document.querySelector(".menu");

  if (!menuButton || !navMenu) return;

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
  });

  document.querySelectorAll(".menu button").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuButton.classList.remove("open");
    });
  });
}

function addSkill(skillName, years, container) {
  if (years < 1) return;
  if (years > 5) years = 5;

  const skillImages = {
    css: "pictures/CSS3.png",
    figma: "pictures/Figma.png",
    git: "pictures/Git.png",
    github: "pictures/Github.png",
    chrome: "pictures/Chrome.png",
    html: "pictures/HTML5.png",
    visual: "pictures/VSC.png",
    javascript: "pictures/Javascript.png",
  };

  const input = skillName.toLowerCase().trim();
  const iconSrc = skillImages[input] || "pictures/default.png";

  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill");

  const img = document.createElement("img");
  img.src = iconSrc;
  img.alt = input + " icon";
  img.classList.add("skillIcon");

  const name = document.createElement("div");
  name.classList.add("skillName");
  name.textContent = skillName;

  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots");

  for (let i = 0; i < 5; i++) {
    const dot = document.createElement("span");
    dot.classList.add("emptyDot");
    dotsContainer.appendChild(dot);
  }

  for (let i = 0; i < years; i++) {
    dotsContainer.children[i].classList.add("fullDot");
  }

  const yearsText = document.createElement("div");
  yearsText.classList.add("years");
  yearsText.textContent = `${years} year${years > 1 ? "s" : ""}`;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("infoContainer");

  infoContainer.appendChild(name);
  infoContainer.appendChild(dotsContainer);
  infoContainer.appendChild(yearsText);
  skillDiv.appendChild(img);
  skillDiv.appendChild(infoContainer);
  container.appendChild(skillDiv);
}
function updateProjectDisplayMessage() {
  const projectSection = document.getElementById("projectSection");
  const noProject = document.getElementById("displayProject");

  if (projectSection && noProject) {
    const hasProjects =
      projectSection.querySelectorAll(".projectCard").length > 0;
    noProject.style.display = hasProjects ? "none" : "block";
  }
}
function renderProjectsSection() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "projects";

  const header = document.createElement("h4");
  header.textContent = "My Projects";

  const addButton = document.createElement("button");
  addButton.id = "addProject";
  addButton.classList.add("mainButton");

  const img = document.createElement("img");
  img.src = "pictures/Vector(2).png";
  img.alt = "+";
  img.classList.add("vector2");
  addButton.appendChild(img);
  addButton.appendChild(document.createTextNode(" Add Project"));

  const projectWrapper1 = document.createElement("div");
  projectWrapper1.id = "projectSection";

  const projectWrapper2 = document.createElement("div");
  projectWrapper2.id = "secondProjectSection";

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.display = "none";
  overlay.innerHTML = `
    <div class="popup">
    <div>
      <label for="projectTitle">Title</label>
      <input type="text" id="projectTitle" />
      <div id="titleError" class="error">Title must be at least 3 characters</div>
      <div id="secondTitleError" class="error">Title must not exceed 30 characters</div>
</div>
 <div>
      <label for="technologies">Technologies (comma separated)</label>
      <input type="text" id="technologies" />
      <div id="technologiesError" class="error">Please enter at least one technology</div>
</div> 
      <div >
        <button class="mainButton" id="submitProject"> <img src="pictures/Vector(2).png" alt="+" />Add project</button>
        <button id="closeButton"><img src="pictures/Vector(1).png" alt="X" /></button>
      </div>
    </div>
  `;

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");

  user.projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const title = document.createElement("h5");
    title.textContent = project.title;

    const techList = document.createElement("ul");
    techList.classList.add("techList");

    project.technologies.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      techList.appendChild(li);
    });

    projectDiv.appendChild(title);
    projectDiv.appendChild(techList);
    projectsContainer.appendChild(projectDiv);
  });

  const noProject = document.createElement("h4");
  noProject.id = "displayProject";
  noProject.textContent = "There are no projects to display.";

  section.appendChild(addButton);
  section.appendChild(projectWrapper1);
  section.appendChild(projectWrapper2);
  section.appendChild(projectsContainer);
  section.appendChild(noProject);
  main.appendChild(section);
  main.appendChild(overlay);

  updateProjectDisplayMessage();

  function showAddProjectForm() {
    const form = document.getElementById("projectForm");
    if (form) {
      form.style.display = "block";
    }
  }
}

function setupProjectPopupHandlers() {
  const overlay = document.getElementById("overlay");
  const addProjectButton = document.getElementById("addProject");
  const closeButton = document.getElementById("closeButton");
  const submitButton = document.getElementById("submitProject");
  const titleInput = document.getElementById("projectTitle");
  const technologiesInput = document.getElementById("technologies");
  const errorDiv = document.getElementById("titleError");
  const secErrorDiv = document.getElementById("secondTitleError");
  const techErrorDiv = document.getElementById("technologiesError");

  let projectIdCounter = 0;

  if (!overlay || !addProjectButton || !closeButton || !submitButton) {
    return;
  }

  titleInput.addEventListener("input", function () {
    const currentLength = titleInput.value.trim().length;

    if (currentLength >= 3 && currentLength <= 30) {
      errorDiv.style.display = "none";
      secErrorDiv.style.display = "none";
      titleInput.style.borderColor = "";
    } else if (currentLength > 30) {
      errorDiv.style.display = "none";
      secErrorDiv.style.display = "block";
      titleInput.style.borderColor = "#af0808";
    } else if (currentLength < 3) {
      secErrorDiv.style.display = "none";
      errorDiv.style.display = "block";
      titleInput.style.borderColor = "#af0808";
    }
  });

  technologiesInput.addEventListener("input", function () {
    if (technologiesInput.value.trim().length >= 1) {
      techErrorDiv.style.display = "none";
      technologiesInput.style.borderColor = "";
    }
  });

  addProjectButton.onclick = function () {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  closeButton.onclick = function () {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  };

  submitButton.onclick = function () {
    const title = titleInput.value.trim();
    const technologies = technologiesInput.value.trim();
    const techList = technologies.split(",").map((tech) => tech.trim());
    const techItems = techList.map((tech) => `<li>${tech}</li>`).join("");
    let hasError = false;

    if (title.length < 3) {
      errorDiv.style.display = "block";
      titleInput.style.borderColor = "#af0808";
      secErrorDiv.style.display = "none";
      hasError = true;
    } else if (title.length > 30) {
      secErrorDiv.style.display = "block";
      titleInput.style.borderColor = "#af0808";
      errorDiv.style.display = "none";
      hasError = true;
    } else {
      secErrorDiv.style.display = "none";
      titleInput.style.borderColor = "";
      errorDiv.style.display = "none";
    }

    if (technologies.length < 1) {
      techErrorDiv.style.display = "block";
      technologiesInput.style.borderColor = "#af0808";
      hasError = true;
    } else {
      techErrorDiv.style.display = "none";
      technologiesInput.style.borderColor = "";
    }

    if (hasError) return;

    overlay.style.display = "none";
    document.body.style.overflow = "auto";

    const id = "project-" + projectIdCounter++;

    const createCard = (withDeleteButton = true, partner = null) => {
      const div = document.createElement("div");
      div.className = "projectCard";
      div.id = id;

      const list = document.createElement("ul");
      list.innerHTML = `<strong>${title}</strong>${techItems}`;
      div.appendChild(list);

      if (withDeleteButton) {
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = `<img class="bin" src="pictures/bin.png" alt="Delete" />`;
        deleteBtn.onclick = () => {
          div.remove();
          if (partner) partner.remove();
          updateProjectDisplayMessage();
          updateCarouselHeight();
          if (typeof updateArrowVisibility === "function")
            updateArrowVisibility();
        };
        div.appendChild(deleteBtn);
      }

      return div;
    };

    const clonedCard = createCard(false);
    const projectCard = createCard(true, clonedCard);

    const section1 = document.getElementById("projectSection");

    const homeContainer = document.getElementById("secondProjectSection");

    if (section1) section1.appendChild(projectCard);

    if (homeContainer) {
      homeContainer.appendChild(clonedCard);
      updateCarouselHeight();
      if (typeof updateArrowVisibility === "function") {
        updateArrowVisibility();
      }
    }

    updateProjectDisplayMessage();
    titleInput.value = "";
    technologiesInput.value = "";
  };
}

function renderAboutSection() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "about";
  // ADD FOTO

  const img = document.createElement("img");
  img.src = "pictures/mainFoto.jpg";
  img.alt = `${user.name} ${user.surname}`;
  img.classList.add("profilePhoto"); //klasa zdjęcia

  section.appendChild(img);
  // BACKGROUND
  const backgroundHeader = document.createElement("h4");
  backgroundHeader.textContent = "My background";
  const backgroundParagraph = document.createElement("p");
  backgroundParagraph.textContent = user.aboutMe;
  section.appendChild(backgroundHeader);
  section.appendChild(backgroundParagraph);
  //HOBBY
  const hobbiesHeader = document.createElement("h4");
  hobbiesHeader.textContent = "My hobbies and interests";
  const hobbiesParagraph = document.createElement("p");
  hobbiesParagraph.textContent = user.hobbies;
  section.appendChild(hobbiesHeader);
  section.appendChild(hobbiesParagraph);
  //contact me
  const contactButton = document.createElement("button");
  contactButton.id = "contactButton";
  contactButton.classList.add("mainButton");
  const contactImg = document.createElement("img");
  contactImg.src = "pictures/Icon.png";

  contactImg.alt = "=>";

  contactButton.addEventListener("click", () => {
    const navButtons = document.querySelectorAll("nav button");
    navButtons.forEach((btn) => {
      if (btn.textContent.toUpperCase() === "CONTACT") {
        btn.click();
      }
    });
  });
  contactButton.appendChild(contactImg);
  contactButton.appendChild(document.createTextNode("Contact"));
  section.appendChild(contactButton);
  main.appendChild(section);
}

function renderContactSection() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "contact";
  const contactHeader = document.createElement("h4");
  contactHeader.textContent = "Contact me";
  section.appendChild(contactHeader);
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contactInputs");

  const contactInputs = document.createElement("div");
  contactInputs.id = "contactInputs";
  // NAME
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  nameLabel.setAttribute("for", "name");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "name");

  const nameError = document.createElement("div");
  nameError.classList.add("nameError");
  nameError.id = "nameError";
  nameError.textContent = "Name must be at least 3 characters.";
  nameError.style.display = "none";

  const secondNameError = document.createElement("div");
  secondNameError.classList.add("secondNameError");
  secondNameError.id = "secondNameError";
  secondNameError.textContent = "Name must be less than 20 characters.";
  secondNameError.style.display = "none";

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  nameDiv.appendChild(nameError);
  nameDiv.appendChild(secondNameError);

  // EMAIL
  const emailDiv = document.createElement("div");
  emailDiv.classList.add("emailDiv");
  emailDiv.id = "emailDiv";
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  emailLabel.setAttribute("for", "email");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("id", "email");

  const emailError = document.createElement("div");
  emailError.classList.add("emailError");
  emailError.id = "emailError";
  emailError.textContent = "Invalid email address.";
  emailError.style.display = "none";

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  emailDiv.appendChild(emailError);
  //MESSAGE
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("messageDiv");
  messageDiv.id = "messageDiv";

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  messageLabel.setAttribute("for", "message");

  const messageInput = document.createElement("input");
  messageInput.setAttribute("id", "message");
  const messageError = document.createElement("div");
  messageError.classList.add("messageError");
  messageError.id = "messageError";
  messageError.textContent = "Message cannot be empty.";
  messageError.style.display = "none";

  const secondMessageError = document.createElement("div");
  secondMessageError.classList.add("secondMessageError");
  secondMessageError.id = "secondMessageError";
  secondMessageError.textContent = "Message is too long (max 100 characters).";
  secondMessageError.style.display = "none";

  const sendButton = document.createElement("button");
  sendButton.textContent = "Send Message";
  sendButton.id = "sendMessage";

  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(messageInput);
  messageDiv.appendChild(messageError);
  messageDiv.appendChild(secondMessageError);

  contactInputs.appendChild(nameDiv);
  contactInputs.appendChild(emailDiv);

  contactDiv.appendChild(contactInputs);
  contactDiv.appendChild(messageDiv);
  contactDiv.appendChild(sendButton);

  section.appendChild(contactDiv);
  main.appendChild(section);
  setupContactFormValidation();
}

function setupContactFormValidation() {
  const sendButton = document.getElementById("sendMessage");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const secondNameError = document.getElementById("secondNameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const secondMessageError = document.getElementById("secondMessageError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nameInput.addEventListener("input", function () {
    const name = nameInput.value.trim();
    if (name.length >= 3 && name.length <= 20) {
      nameError.style.display = "none";
      secondNameError.style.display = "none";
      nameInput.style.borderColor = "";
    } else if (name.length < 3) {
      nameError.style.display = "block";
      secondNameError.style.display = "none";
      nameInput.style.borderColor = "#af0808";
    } else {
      nameError.style.display = "none";
      secondNameError.style.display = "block";
      nameInput.style.borderColor = "#af0808";
    }
  });

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (emailRegex.test(email)) {
      emailError.style.display = "none";
      emailInput.style.borderColor = "";
    } else {
      emailError.style.display = "block";
      emailInput.style.borderColor = "#af0808";
    }
  });
  messageInput.addEventListener("input", function () {
    const message = messageInput.value.trim();
    if (message.length >= 1 && message.length <= 100) {
      messageError.style.display = "none";
      secondMessageError.style.display = "none";
      messageInput.style.borderColor = "";
    } else {
      messageError.style.display = "none";
      secondMessageError.style.display = "block";
      messageInput.style.borderColor = "#af0808";
    }
  });

  sendButton.addEventListener("click", function (e) {
    e.preventDefault();

    let hasError = false;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Walidacja imienia
    if (name.length < 3) {
      nameError.style.display = "block";
      nameInput.style.borderColor = "#af0808";
      secondNameError.style.display = "none";

      hasError = true;
    } else if (name.length > 20) {
      secondNameError.style.display = "block";
      nameInput.style.borderColor = "#af0808";
      nameError.style.display = "none";
      hasError = true;
    } else {
      nameError.style.display = "none";
      secondNameError.style.display = "none";
      nameInput.style.borderColor = "";
    }

    // Walidacja e-maila
    if (!emailRegex.test(email)) {
      emailError.style.display = "block";
      emailInput.style.borderColor = "#af0808";
      hasError = true;
    } else {
      emailError.style.display = "none";
      emailInput.style.borderColor = "";
    }

    // Walidacja wiadomości
    if (message.length < 1) {
      messageError.style.display = "block";
      messageInput.style.borderColor = "#af0808";
      secondMessageError.style.display = "none";

      hasError = true;
    } else if (message.length > 100) {
      secondMessageError.style.display = "block";
      messageInput.style.borderColor = "#af0808";
      messageError.style.display = "none";

      hasError = true;
    } else {
      messageError.style.display = "none";
      secondMessageError.style.display = "none";
      messageInput.style.borderColor = "";
    }

    if (hasError) return;

    // Wyświetlanie wiadomości
    const createMessageCard = () => {
      const div = document.createElement("div");
      div.className = "messageCard";
      div.innerHTML = `
          <div>Name: ${name} <br>
          E-mail: ${email}<br>
          Message: ${message}</div>
        `;
      return div;
    };

    const messageCard = createMessageCard();

    const messageDisplay = document.getElementById("messageDisplay");
    if (messageDisplay) {
      messageDisplay.appendChild(messageCard);
    }
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    nameInput.classList.remove("nameError");
    nameInput.classList.remove("secondNameError");
    emailInput.classList.remove("emailError");
    messageInput.classList.remove("messageError");
    messageInput.classList.remove("secondMessageError");
  });
}
function renderMessagesSection() {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.id = "messages";

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("messageDiv");
  messageDiv.id = "messageDisplay";

  section.appendChild(messageDiv);
  main.appendChild(section);
}
const projects = document.querySelectorAll(".projectCard");

function assignScrollEvents() {
  // klonujemy przyciski/usuniecie eventow starych
  const oldPrevBtn = document.getElementById("prevBtn");
  const oldNextBtn = document.getElementById("nextBtn");

  oldPrevBtn.replaceWith(oldPrevBtn.cloneNode(true));
  oldNextBtn.replaceWith(oldNextBtn.cloneNode(true));

  const newPrevBtn = document.getElementById("prevBtn");
  const newNextBtn = document.getElementById("nextBtn");

  const carousel = document.getElementById("secondProjectSection");
  const carouselWrapper = document.querySelector(".carouselWrapper");

  if (window.innerWidth > 768) {
    newPrevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
    });

    newNextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
    });
  } else {
    newPrevBtn.addEventListener("click", () => {
      carouselWrapper.scrollBy({
        top: -carouselWrapper.clientHeight,
        behavior: "smooth",
      });
    });

    newNextBtn.addEventListener("click", () => {
      carouselWrapper.scrollBy({
        top: carouselWrapper.clientHeight,
        behavior: "smooth",
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  renderNavigation();
  renderHomeSection();
  updateCarouselHeight();
  window.addEventListener("resize", updateCarouselHeight);
  renderProjectsSection();
  setupProjectPopupHandlers();
  renderAboutSection();
  renderContactSection();
  renderMessagesSection();
  showSection("home");
  assignScrollEvents();
});

window.addEventListener("resize", assignScrollEvents);
