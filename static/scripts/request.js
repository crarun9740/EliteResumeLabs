const addButton = document.querySelector(".btn-add");
const removeButton = document.querySelector(".btn-remove");
const educationContainer = document.querySelector(".head-education");
const experienceDiv = document.querySelector(".exp-plc");
const addSkillBtn = document.querySelector(".skill-add-btn");
const removeSkillBtn = document.querySelector(".skill-remove-btn");
const skillsContainer = document.querySelector(".skills");

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const educationDiv = document.querySelector("#educationdiv");
  const departmentDiv = document.querySelector(".department");

  const newEducationDiv = educationDiv.cloneNode(true);
  const newDepartmentDiv = departmentDiv.cloneNode(true);

  newEducationDiv
    .querySelectorAll("input")
    .forEach((input) => (input.value = ""));
  newEducationDiv
    .querySelectorAll("select")
    .forEach((select) => (select.value = ""));

  newDepartmentDiv
    .querySelectorAll("input")
    .forEach((input) => (input.value = ""));
  newDepartmentDiv
    .querySelectorAll("select")
    .forEach((select) => (select.value = ""));

  educationContainer.insertBefore(
    newEducationDiv,
    educationContainer.lastElementChild
  );
  educationContainer.insertBefore(
    newDepartmentDiv,
    educationContainer.lastElementChild
  );
});

removeButton.addEventListener("click", (e) => {
  e.preventDefault();

  const allEducationDivs = document.querySelectorAll("#educationdiv");
  const allDepartmentDivs = document.querySelectorAll(".department");

  if (allEducationDivs.length > 1 && allDepartmentDivs.length > 1) {
    allEducationDivs[allEducationDivs.length - 1].remove();
    allDepartmentDivs[allDepartmentDivs.length - 1].remove();
  } else {
    alert("At least one education section must remain.");
  }
});

experienceDiv.style.display = "none";
const fresheryesbtn = document.querySelector(".fresher-yes");
const freshernobtn = document.querySelector(".fresher-no");

fresheryesbtn.addEventListener("click", (e) => {
  e.preventDefault();
  experienceDiv.style.display = "block";
});

freshernobtn.addEventListener("click", (e) => {
  e.preventDefault();
  experienceDiv.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(".projects");
  const projectField = document.querySelector(".project-field");
  const addButton = document.querySelector(".proj-btn-add");
  const removeButton = document.querySelector(".proj-btn-remove");

  const addProject = (e) => {
    e.preventDefault();

    const clonedField = projectField.cloneNode(true);

    const projectFields = projectsContainer.querySelectorAll(".project-field");
    const projectCount = projectFields.length;

    const projectLabel = clonedField.querySelector(
      "label[for='project1_name']"
    );
    const projectNameInput = clonedField.querySelector(
      "input[id='project1-name']"
    );
    const projectDescLabel = clonedField.querySelector(
      "label[for='project1_desc']"
    );
    const projectDescTextarea = clonedField.querySelector(
      "textarea[id='project1-desc']"
    );

    if (
      projectLabel &&
      projectNameInput &&
      projectDescLabel &&
      projectDescTextarea
    ) {
      projectLabel.textContent = `PROJECT ${projectCount + 1}`;
      projectNameInput.id = `project${projectCount + 1}-name`;
      projectNameInput.name = `project${projectCount + 1}_name`;
      projectNameInput.value = "";

      projectDescLabel.textContent = "DESCRIPTION";
      projectDescTextarea.id = `project${projectCount + 1}-desc`;
      projectDescTextarea.name = `project${projectCount + 1}_desc`;
      projectDescTextarea.value = "";
    }

    const buttonsContainer = document.querySelector(".projects-button");
    projectsContainer.insertBefore(clonedField, buttonsContainer);
  };

  const removeProject = (e) => {
    e.preventDefault();
    const projectFields = projectsContainer.querySelectorAll(".project-field");

    if (projectFields.length > 1) {
      const lastProject = projectFields[projectFields.length - 1];
      projectsContainer.removeChild(lastProject);
    } else {
      alert("At least one project field must remain.");
    }
  };

  addButton.addEventListener("click", addProject);
  removeButton.addEventListener("click", removeProject);
});
const addActivityBtn = document.querySelector(".activity-add-btn");
const removeActivityBtn = document.querySelector(".activity-remove-btn");
const activityContainer = document.querySelector(".activity-container");

addActivityBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newActivityDiv = activityContainer.cloneNode(true);

  const input = newActivityDiv.querySelector("input");
  input.value = "";

  const activitiesBtnContainer = document.querySelector(".activities-btn");
  activitiesBtnContainer.parentNode.insertBefore(
    newActivityDiv,
    activitiesBtnContainer
  );
});

removeActivityBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const allActivityDivs = document.querySelectorAll(".activity-container");
  if (allActivityDivs.length > 1) {
    allActivityDivs[allActivityDivs.length - 1].remove();
  } else {
    alert("At least one activity input must remain.");
  }
});
