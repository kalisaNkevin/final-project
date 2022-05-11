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