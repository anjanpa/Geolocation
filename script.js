const button =document.querySelector("button");

button.addEventListener("click",()=>{
	if(navigator.geolocation){
		button.innerText="Allow to detect location";
		navigator.geolocation.getCurrentPosition(onSuccess);

	}
	else{
		button.innerText="Your browser not support";
	}
});

function onSuccess(position){
	button.innerText="Detecting your location..";
	let{latitude,longitude}=position.coords;
	console.log(longitude,latitude);
	fetch('https://api.opencagedata.com/geocode/v1/json?q=${longitude}+${latitude}&key=3d818eb228964a2fb2bf0188d4e4e5af')
	.then(response=>response.json()).then(result=>{
		let allDetails=result.results[0].components;
		console.log(allDetails);
		let{county,postcode,country}=allDetails;
		button.innerText='${county} ${postcode}, ${country}';
	})
}
