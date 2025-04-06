(() => {
    const refs = {
        formData: JSON.parse(localStorage.getItem('feedback-form-state')) || {
            email: '',
            message: '',
        },
        form: document.querySelector('.feedback-form'),
        storageKey: 'feedback-form-state'
    };

    refs.form.elements.message.value = refs.formData.message;
    refs.form.elements.email.value = refs.formData.email;

    function saveToLocal() {
        localStorage.setItem(refs.storageKey, JSON.stringify(refs.formData));
    }

    function handleInput(evt) {
        refs.formData[evt.target.name] = evt.target.value.trim();
        saveToLocal();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!refs.formData.email || !refs.formData.message) {
            alert('Fill please all fields');
            return;
        }
        console.log(refs.formData);
        localStorage.removeItem(refs.storageKey);
        refs.formData.email = '';
        refs.formData.message = '';
        refs.form.reset();
    }

    refs.form.addEventListener('input', handleInput);
    refs.form.addEventListener('submit', handleSubmit);
})();