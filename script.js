
const semesterContainer = document.getElementById("semester-buttons");
const contentContainer = document.getElementById("content-options");

function selectBranch(branch) {
  semesterContainer.innerHTML = `<h2>${branch} - Select Semester</h2>`;
  for (let i = 1; i <= 6; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Semester ${i}`;
    btn.onclick = () => selectSemester(branch, i);
    semesterContainer.appendChild(btn);
  }
  semesterContainer.classList.remove("hidden");
  contentContainer.classList.add("hidden");
}

function selectSemester(branch, sem) {
  const options = ['Notes', 'Softwares', 'Test Results', 'Syllabus', 'Question Papers'];
  contentContainer.innerHTML = `<h2>${branch} - Semester ${sem}</h2>`;
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => alert(`${opt} for ${branch} Semester ${sem}`);
    contentContainer.appendChild(btn);
  });
  contentContainer.classList.remove("hidden");
}
