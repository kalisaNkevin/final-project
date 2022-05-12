const commentform=document.querySelector('#comments')
commentform.addEventListener('submit', async (e) => {
    e.preventDefault();
  const comment = document.getElementById('inputComment').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";


  try {
    const res = await axios.post(`${globalURL}/api/v1/blogs/comment/id`, {
      comment,
    })
    console.log(res);
    alert( 'comment sent successsful');
    
    
  } catch (error) {
    console.log(error);
    if (error.response?.data.message) {
      alert(`${error.response?.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
})


// comments display
const CommentArea = document.querySelector(".reesult");
fetch("https://kalisakevin.herokuapp.com/api/v1/blogs/comment/id")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.comments.map(comment => {
            CommentArea.innerHTML += `<div class="table_column">${comment.comment}</div>`;
            });
        }
        );