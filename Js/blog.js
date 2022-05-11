const blogsArea = document.querySelector(".blogs-list");
fetch("https://kalisakevin.herokuapp.com/api/v1/blogs")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.data.blogs.map(blog => {
            blogsArea.innerHTML += `<div class="colum">
            <img src="adobe-cc.webp" alt="avatar" height="375px" width="400px"> 
            <div class="contain">
              <h4><b>${blog.date}</b></h4>
              <h2><b>${blog.title}</b></h4>
              <p>${blog.body?.slice(0,100)}...</p>
            </div>`;
        });
    }
    );