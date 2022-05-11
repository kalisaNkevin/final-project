const contactform=document.querySelector('#form')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
const email = document.getElementById('inputMail').value;
  const password = document.getElementById('inputPassword').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";

  if (email == '' || password == '') {
    alert(warning, 'Please fill empty fields !!');
    return 0;
  }
  try {
    const res = await axios.post(`${globalURL}/api/v1/users/login`, {
      email,
      password,
    }); 
    console.log(res);
    localStorage.setItem(`token`,`${res.data.token}`);
    localStorage.setItem(`role`,`${res.data.data.user.role}`);
    alert( 'Logged in successfully');
    setTimeout(() => {
      if(localStorage.getItem("role") === "admin"){

        return location.assign('./dashboard.html');
      }
      location.assign('./index.html');
    }, 3000);
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      alert(`Wrong email or password`);
    } else {
      alert(`${error.message}`);
    }
  }
})