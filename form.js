document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const Message = document.getElementById('CompletedFormMessage');
    const responseDiv = document.getElementById('form-response');
    const header = document.getElementById('formheader');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        form.style.display = 'none';
        messageTextarea.style.display = 'block';
        header.textContent = 'Form Submitted Successfully!';

        fetch('https://script.google.com/macros/s/AKfycbzuPGMp9Kl_i1mAkld-rAe3yktZA12jDm_MxS1HwcB50uHqAsLPC-BrMBRw8evVCdK4/exec', { // Replace with your actual Web App URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => response.text())
        .then(data => {
            responseDiv.textContent = data;
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // (Keep your radio button placeholder logic)
    const option1Radio = document.getElementById('website-quote');
    const option2Radio = document.getElementById('enquiry');
    const messageTextarea = document.getElementById('message');

    if (option1Radio && messageTextarea) {
        option1Radio.addEventListener('change', function() {
            messageTextarea.placeholder = this.checked
                ? 'Please provide details about your website. For example: I am looking for an ecommerce website, it will have 10 products, I want three website pages, etc... (More details more precise the quote will be!)'
                : 'Please enter your Enquiry...';
        });

        if (option2Radio) {
            option2Radio.addEventListener('change', function() {
                messageTextarea.placeholder = this.checked
                    ? 'Please enter your Enquiry...'
                    : 'Please provide details about your website. For example: I am looking for an ecommerce website, it will have 10 products, I want three website pages, etc... (More details more precise the quote will be!)';
            });
        }
    } else {
        console.error('Error: One or more required elements (Option 1 radio or Message textarea) not found in the DOM.');
    }
});