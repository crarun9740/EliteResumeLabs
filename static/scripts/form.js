document.addEventListener("DOMContentLoaded", () => {
  const addLanguageButton = document.getElementById("add-language-button");
  const languagesList = document.getElementById("languages-list");
  const addSkillButton = document.getElementById("add-skill-button");
  const removeSkillButton = document.getElementById("remove-skill-button");
  const skillsList = document.getElementById("skills-list");
  const addActivityButton = document.getElementById("add-activity-button");
  const removeActivityButton = document.getElementById(
    "remove-activity-button"
  );
  const activitiesList = document.getElementById("activities-list");
  const addCertificationButton = document.getElementById(
    "add-certification-btn"
  );
  const removeCertificationButton = document.getElementById(
    "remove-certification-btn"
  );
  const certificationsList = document.getElementById("certifications-list");
  const addEducationButton = document.querySelector(
    ".education-button .btn-primary"
  );
  const removeEducationButton = document.querySelector(
    ".education-button .btn-destructive"
  );
  const educationDiv = document.getElementById("educationdiv");
  const addProjectButton = document.querySelector(".proj-btn-add");
  const removeProjectButton = document.querySelector(".proj-btn-remove");
  const projectsContainer = document.querySelector(".projects");

  function createInput(name, placeholder, className) {
    const input = document.createElement("input");
    input.type = "text";
    input.name = name;
    input.placeholder = placeholder;
    input.classList.add(className);
    return input;
  }

  function addListItem(list, inputConfig) {
    const newInput = createInput(
      inputConfig.name,
      inputConfig.placeholder,
      inputConfig.className
    );
    list.appendChild(newInput);
  }

  function removeListItem(list, selector) {
    const items = list.querySelectorAll(selector);
    if (items.length > 1) {
      list.removeChild(items[items.length - 1]);
    }
  }

  addLanguageButton.addEventListener("click", (e) => {
    e.preventDefault();
    addListItem(languagesList, {
      name: "languages[]",
      placeholder: "e.g. Kannada, English, Hindi",
      className: "language-input",
    });
  });

  addCertificationButton.addEventListener("click", (e) => {
    e.preventDefault();
    addListItem(certificationsList, {
      name: "certification[]",
      placeholder: "Add your Certifications",
      className: "certification-input",
    });
  });

  removeCertificationButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeListItem(certificationsList, ".certification-input");
  });

  addActivityButton.addEventListener("click", (e) => {
    e.preventDefault();
    addListItem(activitiesList, {
      name: "activities[]",
      placeholder: "Your Activities and Interest",
      className: "activity-input",
    });
  });

  removeActivityButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeListItem(activitiesList, ".activity-input");
  });

  addSkillButton.addEventListener("click", (e) => {
    e.preventDefault();
    addListItem(skillsList, {
      name: "skills[]",
      placeholder: "Your Skills",
      className: "skill-input",
    });
  });

  removeSkillButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeListItem(skillsList, ".skill-input");
  });

  addEducationButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newEducation = educationDiv.cloneNode(true);
    newEducation.querySelectorAll("input, select").forEach((input) => {
      input.value = "";
    });
    educationDiv.parentNode.insertBefore(
      newEducation,
      addEducationButton.parentNode
    );
  });

  removeEducationButton.addEventListener("click", (e) => {
    e.preventDefault();
    const educationSections = document.querySelectorAll(".education");
    if (educationSections.length > 1) {
      educationSections[educationSections.length - 1].remove();
    }
  });

  let projectCounter = 1;

  addProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectCounter++;
    const newProject = document.createElement("div");
    newProject.classList.add("project-field");
    newProject.innerHTML = `
            <p class="project-number">Project ${projectCounter}</p>
            <div class="project-name-container">
                <label class="project-name-label" for="project-name-${projectCounter}">Project Name</label>
                <input type="text" class="project-name-input" name="project_name[]" placeholder="Project Name" id="project-name-${projectCounter}" />
            </div>
            <div class="project-description">
                <label class="project-desc-label" for="project-desc-${projectCounter}">DESCRIPTION</label>
                <textarea id="project-desc-${projectCounter}" class="project_desc-field" name="project_desc[]" placeholder="Describe your project" rows="5"></textarea>
            </div>
        `;
    projectsContainer.insertBefore(newProject, addProjectButton.parentNode);
  });

  removeProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    const projectFields = document.querySelectorAll(".project-field");
    if (projectFields.length > 1) {
      projectFields[projectFields.length - 1].remove();
      projectCounter--;
    }
  });
});
const experience = document.querySelector(".exp-plc");
experience.style.display = "none";
const fresheryes = document.querySelector(".fresher-yes");
console.log(fresheryes);
const fresherno = document.querySelector(".btn-secondary");

fresheryes.addEventListener("click", (e) => {
  e.preventDefault();
  experience.style.display = "block";
});

fresherno.addEventListener("click", (e) => {
  e.preventDefault();
  experience.style.display = "none";
  fresherno.style.border = "3px solid red";
});
