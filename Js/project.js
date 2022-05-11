const projectsArea = document.querySelector(".projects-list");
fetch("https://kalisakevin.herokuapp.com/api/v1/projects")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.data.projects.map(project => {
            projectsArea.innerHTML += `<div class="colum">
            <img src="mobile design.webp" alt="avatar" height="375px" width=200pxx" >
            <div class="contain">
              <h4><b>${project.date}</b></h4>
              <h2><b>${project.title}</b></h4>
              <p>${project.body?.slice(0,100)}...</p>
            </div>`;
        });
    }
    );