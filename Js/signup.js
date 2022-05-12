const contactform=document.querySelector('#form')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
  const name = document.getElementById('inputNames').value;
  const email = document.getElementById('inputMail').value;
  const password = document.getElementById('inputPassword').value;
  const passwordConfirm = document.getElementById('inputPasswordConfirm').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";

  if (email == '' || password == '') {
    alert(warning, 'Please fill empty fields !!');
    return 0;
  }
  try {
    const res = await axios.post(`${globalURL}/api/v1/users/signup`, {
      name,
      email,
      password,
      passwordConfirm,
      role: "user"
    });
    

    localStorage.setItem(`token`,`${res.data.token}`);
    localStorage.setItem(`role`,`${res.data.data.user.role}`);
    console.log(res);
    alert( 'account created successsful');
    
    setTimeout(() => {
   
      if(localStorage.getItem("role") === "admin"){

        return location.assign('./dashboard.html');
      }
      location.assign('./login.html');
    }, 3000);
  } catch (error) {
    console.log(error);
    if (error.response?.data.message) {
      alert(`${error.response?.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
})