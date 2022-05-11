const MessagesArea = document.querySelector(".message-list");
fetch("https://kalisakevin.herokuapp.com/api/v1/messages")
    .then(data => data.json())
    .then(res => {
        console.log(res)
        res.getallMessages.map(message => {
            MessagesArea.innerHTML += `
            <table>
            <tr>
            <td><div class="table_column">${message.fullNames}</div></td>
            <td><div class="table_column">${message.email}</div></td>
            <td><div class="table_column">${message.subject}</div></td>
            <td><div class="table_column">${message.text}</div></td>
        </tr>
        </table>`;
        });
    }
    );