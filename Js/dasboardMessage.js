const MessagesArea = document.querySelector(".message-list");
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
            <td><div class="table_column"><a href="#" class="btn">Delete Message</a></div></td>
            
            </div>
           
        </tr>
        </table>`;
        });
    }
    );