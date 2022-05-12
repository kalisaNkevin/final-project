const { response } = require("express");

const DataId = location.search.split("=")[1];
console.log(DataId)
const readMore = async () => {
	let result = [];
	fetch(`https://kalisakevin.herokuapp.com/api/v1/blogs/${DataId}`, {
		method: "GET",

	})
		.then((response) => response.json())
		.then((json) => {
            console.log(json)
			result = json.data;
            document.getElementById("image").src = result.image
			document.getElementById("title").innerHTML = result.title;
            document.getElementById("body").innerHTML = result.body;
			;
     })
		.catch((err) => console.log(response))
};
readMore();