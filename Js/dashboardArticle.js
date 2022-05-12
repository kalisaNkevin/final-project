const contactform=document.querySelector('#form-message')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
  const title = document.getElementById('inputTitle').value;
  const body = document.getElementById('inputBody').value;
  const date = document.getElementById('inputDate').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";


  try {
    const res = await axios.post(`${globalURL}/api/v1/blogs`, {
      title,
      body,
      date,

    })
    console.log(res);
    alert( 'Article created successsful');
    
    
  } catch (error) {
    console.log(error);
    if (error.response?.data.message) {
      alert(`${error.response?.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
})

const ArticleArea = document.querySelector(".article-side");
const global= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
fetch("https://kalisakevin.herokuapp.com/api/v1/projects")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.data.projects.map(blog => {
            ArticleArea.innerHTML += `
            <table style="width:100%">
            <tr style="justify-content: space-between; display: flex; width: 100%; text-align:right;">
            <div class="table_row row_header">
            <td><div class="table_column">${blog.title?.slice(0,100)}..</div></td>
            <td><div class="table_column">${blog.body?.slice(0,100)}..</div></td>
            <td><div class="table_column">${blog.date?.slice(0,100)}..</div></td>
            <td><button class="table_column" onClick="updateBlog('${blog._id}')" >Delete Blog</button></td>
            <td><button class="table_column" onClick="deleteBlog('${blog._id}')" >Delete Blog</button></td>
            
            </div>
           
        </tr>
        </table>`;
        });
    }
    );

  async function deleteArticle(id) {
        alert('Deleting blog...');
        try {
            await axios
                .delete(`${global}/api/v1/blogs/${id}`);
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


