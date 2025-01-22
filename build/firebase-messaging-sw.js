importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

console.log('KPTEST: Firebase Messaging SW Registered', self.location);
// fetch(`https://sandbox.crm.com/self-service/v2/applications?cloud_name=sandboxportal.crm.com`)
fetch(`https://${self.location.hostname}/self-service/v2/applications?cloud_name=${self.location.hostname}`)
.then(response => response.json())
.then(data => {
	console.log("KPTEST: App Config:", data);
	if(data && data.firebase_config)
	{
		const firebaseConfig = JSON.parse(data.firebase_config.config);
		firebase.initializeApp(firebaseConfig);
		const messaging = firebase.messaging();
	}
})
.catch(error => console.error("KPTEST: Error fetching app config:", error));

