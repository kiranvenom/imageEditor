var fileInput = document.getElementById('image');

fileInput.addEventListener('change', function (event) {
	const selectedFile = event.target.files[0]; // Get the selected file

	if (selectedFile) {
		const reader = new FileReader();

		reader.onload = function (e) {
			console.log('File contents:');
			console.log(e.target.result); // This will contain the file contents
		};

		// Read the file as text (you can also use readAsDataURL for data URL)
		reader.readAsText(selectedFile);
	}
});
