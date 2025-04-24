document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleSections');
    const projects = document.getElementById('projects');
    const work = document.getElementById('work');
  
    toggleBtn.addEventListener('click', () => {
      projects.classList.toggle('show');
      work.classList.toggle('show');
    });
  });
  