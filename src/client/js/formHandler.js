function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let url = document.getElementById("name").value;
	Client.checkForName(url);

	console.log(url);

	console.log("::: Form Submitted :::");
	if (Client.validateUrl(url)) {
		fetch("http://localhost:3000/sentimentUrl", {
			method: "POST",
			body: JSON.stringify({ url }),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then(function (res) {
				console.log(res);
				renderUI(res);
			})
			.catch((error) => console.log(error));
	} else {
		alert("Invalid url. Please check and try again!");
	}
}

function renderUI(data) {
	const results = document.getElementById("results");
	const ul = document.createElement("ul");
	const agreementLi = document.createElement("li");
	agreementLi.innerText = `Agreement: ${data.agreement}`;

	const confidenceLi = document.createElement("li");
	confidenceLi.innerText = `Confidence: ${data.confidence}`;

	const ironyLi = document.createElement("li");
	ironyLi.innerText = `Irony: ${data.irony}`;

	const subjectivityLi = document.createElement("li");
	subjectivityLi.innerText = `Subjectivity: ${data.subjectivity}`;

	ul.append(agreementLi, confidenceLi, ironyLi, subjectivityLi);
	results.appendChild(ul);
}

export { handleSubmit };
