const contactform=document.querySelector('#form-message')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
  const title = document.getElementById('inputTitle').value;
  const body = document.getElementById('inputBody').value;
  const date = document.getElementById('inputDate').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";


  try {
    const res = await axios.post(`${globalURL}/api/v1/projects`, {
      title,
      body,
      date,

    })
    console.log(res);
    alert( 'Project created successsful');
    
    
  } catch (error) {
    console.log(error);
    if (error.response?.data.message) {
      alert(`${error.response?.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
})



const ProjectsArea = document.querySelector(".project-side");
const global= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
fetch("https://kalisakevin.herokuapp.com/api/v1/projects")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.data.projects.map(project => {
            ProjectsArea.innerHTML += `
            <table style="width:100%">
            <tr style="justify-content: space-between; display: flex; width: 90%; text-align:right;">
            <div class="table_row row_header">
            <td><div class="table_column">${project.title}</div></td>
            <td><div class="table_column">${project.body?.slice(0,100)}..</div></td>
            <td><div class="table_column">${project.date}</div></td>
            <td><button class="table_column" onClick="updateProject('${project._id}')" >Update Project</button></td>
            <td><button class="table_column" onClick="deleteProject('${project._id}')" >Delete Project</button></td>
            
            </div>
           
        </tr>
        </table>`;
        });
    }
    );


    async function deleteProject(id) {
        alert('Deleting project...');
        try {
            await axios
                .delete(`${global}/api/v1/projects/${id}`);
            location.reload()
        } catch (error) {
          
            if (error.response.data?.message) {
                alert(`${error.response.data.message}`);
            } else {
                alert(`${error.message}`);
            }
        }
    }

    async function updateArticle(id) {
      alert('Deleting blog...');
      try {
          await axios
              .patch(`${global}/api/v1/blogs/${id}`);
          location.reload()
      } catch (error) {
        
          if (error.response.data?.message) {
              alert(`${error.response.data.message}`);
          } else {
              alert(`${error.message}`);
          }
      }
  }
