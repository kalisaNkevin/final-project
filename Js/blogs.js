let blogsCard = document.querySelector('.favorited')
let globalVal = "https://kalisakevin.herokuapp.com/api/v1";
let renderBlogs=(blog)=>{
    console.log(blog)
    let date= `${new Date(blog.data.blog.date)}`.split(" ");
            blogsCard.innerHTML = `
            <h4>${blog.data.blog.title}</h4>
            <p>${blog.data.blog.body}</p>
			<p><b>${date[0]} ${date[1]} ${date[2]} ${date[3]}</b></p>`
        }
    const blog= fetch(`${globalVal}/blogs/${location.search.split("=")[1]}`)
    .then(data=> data.json());
    blog.then(res =>renderBlogs(res))
    