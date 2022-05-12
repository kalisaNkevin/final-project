const MessagesArea = document.querySelector(".message-list");
const global= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
fetch("https://kalisakevin.herokuapp.com/api/v1/messages")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.getallMessages.map(message => {
            MessagesArea.innerHTML += `
            <table style="width:100%">
            <tr style="justify-content: space-between; display: flex; width: 95%; text-align:right;">
            <div class="table_row row_header">
            <td><div class="table_column">${message.fullNames}</div></td>
            <td><div class="table_column">${message.email}</div></td>
            <td><div class="table_column">${message.subject}</div></td>
            <td><div class="table_column">${message.text}</div></td>
            <td><button class="table_column" onClick="deleteMessage('${message._id}')" >Delete Message</button></td>
            
            </div>
           
        </tr>
        </table>`;
        });
    }
    );


    async function deleteMessage(id) {
        alert('Deleting Message...');
        try {
            await axios
                .delete(`${global}/api/v1/messages/${id}`);
            location.reload()
        } catch (error) {
          
            if (error.response.data?.message) {
                alert(`${error.response.data.message}`);
            } else {
                alert(`${error.message}`);
            }
        }
    }