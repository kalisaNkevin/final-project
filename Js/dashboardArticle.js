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

async function deleteBlog(id) {
  popupLoading('Deleting blog...');
  try {
      await axios
          .delete(`/api/v1/blogs/${id}`);
      location.reload()
  } catch (error) {
      popupLoadingRemove();
      if (error.response.data?.message) {
          popup(failure, `${error.response.data.message}`);
      } else {
          popup(failure, `${error.message}`);
      }
  }
}

function updateModal(id) {
  const modalUpdateArea = document.querySelector(`.modal_banner_update_${id}`);
  const formSubmit = document.querySelector(`#form_${id}`);
  modalBlock.addEventListener("click", () => {
      modalUpdateArea.classList.remove('upwards');
      modalBlock.style.display = 'none';
  })
  if ([...modalUpdateArea.classList].includes("upward")) {
      modalUpdateArea.classList.remove('upwards');
      modalBlock.style.display = 'none';
      modalBlock.style.display = 'none';
  } else {
      modalUpdateArea.classList.add('upwards');
      modalBlock.style.display = 'block';
  };
  formSubmit.addEventListener("submit", async (e) => {
      e.preventDefault();
      popupLoading('Updating blog...');
      const formData = new FormData(formSubmit);
      try {
          await axios
              .patch(`/api/v1/blogs/${id}`, formData, {
                  headers: {
                      "Content-Type": "multipart/form-data",
                  },
              });
          popupLoadingRemove();
          alert(success, 'Blog updated successfully');
          setTimeout(() => {
              location.reload();
          }, 3000);
      } catch (error) {
          popupLoadingRemove();
          if (error.response.data?.message) {
             alert (failure, `${error.response.data.message}`);
          } else {
              alert (failure, `${error.message}`);
          }
      }
  });
}