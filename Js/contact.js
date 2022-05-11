const contactform=document.querySelector('#form')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
  const fullNames = document.getElementById('inputFullNames').value;
  const email = document.getElementById('inputEmail').value;
  const subject = document.getElementById('inputSubject').value;
  const text = document.getElementById('inputText').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";


  try {
    const res = await axios.post(`${globalURL}/api/v1/messages`, {
      fullNames,
      email,
      subject,
      text,

    })
    console.log(res);
    alert( 'Message sent successsful');
    
    
  } catch (error) {
    console.log(error);
    if (error.response?.data.message) {
      alert(`${error.response?.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
})