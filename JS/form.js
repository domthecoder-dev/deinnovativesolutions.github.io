document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const Message = document.getElementById('CompletedFormMessage');
    const responseDiv = document.getElementById('form-response');
    const header = document.getElementById('formheader');
    const radiotitle = document.getElementById('radio-button-title');

    form.addEventListener('submit', function (event) {
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
        option1Radio.addEventListener('change', function () {
            messageTextarea.placeholder = this.checked
                ? 'Please enter your Enquiry...'
                : 'Please enter your Enquiry...';
        });

        if (option2Radio) {
            option2Radio.addEventListener('change', function () {
                messageTextarea.placeholder = this.checked
                ? 'Please enter your Enquiry...'
                : 'Please enter your Enquiry...';       
            });
        }
    } else {
        console.error('Error: One or more required elements (Option 1 radio or Message textarea) not found in the DOM.');
    }


    //Display Website types when website quote is clicked
    const websitetype = document.getElementById('website-type-inputs');
    const radiogroup = document.getElementById('radio-button')
    const questions = document.getElementById('website-questionaire');

    option1Radio.addEventListener('change', function () {
        if (this.checked) {
            websitetype.style.display = 'block'; // Or any other appropriate display value like 'flex', 'grid', etc.
            //option2Radio.style.display = 'none';
            radiogroup.style.display = 'none';
            radiotitle.textContent = 'Website Quote';
            radiotitle.style.display = 'block';
            questions.style.marginTop = '0px';

        } else {
            websitetype.style.display = 'none';
            radiotitle.textContent = 'General Enguiry';
            radiogroup.style.display = 'none';
            radiotitle.style.display = 'block';
        }
    });

    const optionFoundation = document.getElementById('website-type-foundation');
    const optionGrowth = document.getElementById('website-type-growth');
    const optionEvolved = document.getElementById('website-type-evolved');
    const pagenum = document.getElementById('page-num');
    const monthnum = document.getElementById('num-month-support');

    if (optionFoundation && messageTextarea && questions && pagenum && monthnum) {
        optionFoundation.addEventListener('change', function () {
            messageTextarea.placeholder = this.checked
                ? 'What are you looking for in this Foundation Website? Please give us as much details as you can!'
                : 'Please enter your Enquiry...';
            questions.style.display = this.checked
                ? 'block' : 'none';
            pagenum.max = this.checked
                ? 5
                : ''; // Set max to 5 if checked, remove max if not
            pagenum.placeholder = this.checked
                ? 'Up to 5 pages'
                : 'Page amount number';
            monthnum.max = this.checked
                ? 2
                : '';
            monthnum.placeholder = this.checked
                ? 'Up to 2 months of FREE Support'
                : '';

        });

        if (optionGrowth && messageTextarea && questions && pagenum && monthnum) {
            optionGrowth.addEventListener('change', function () {
                messageTextarea.placeholder = this.checked
                    ? 'What are you looking for in this Growth Website? Please give us as much details as you can!'
                    : 'Please enter your Enquiry...';
                questions.style.display = this.checked
                    ? 'none' : 'block';
                questions.style.display = this.checked
                    ? 'block' : 'none';
                pagenum.max = this.checked
                    ? 15 : ''; // Set max to 5 if checked, remove max if not
                pagenum.placeholder = this.checked
                    ? 'Up to 15 pages'
                    : 'Page amount number';
                monthnum.max = this.checked
                    ? 4
                    : '';
                monthnum.placeholder = this.checked
                    ? 'Up to 4 months of FREE support'
                    : '';
            });

            if (optionEvolved && questions && pagenum && monthnum) {
                optionEvolved.addEventListener('change', function () {
                    messageTextarea.placeholder = this.checked
                        ? 'What are you looking for in this Evolved Website? Please give us as much details as you can!'
                        : 'Please provide details about your website. For example: I am looking for an ecommerce website, it will have 10 products, I want three website pages, etc... (More details more precise the quote will be!)';
                    questions.style.display = this.checked
                        ? 'block' : 'none';
                    questions.style.display = this.checked
                        ? 'block' : 'none';
                    pagenum.max = this.checked
                        ? '' : ''; // Set max to 5 if checked, remove max if not
                    pagenum.placeholder = this.checked
                        ? 'Up to 15+ pages'
                        : 'Page amount number';
                    monthnum.max = this.checked
                        ? 6
                        : '';
                    monthnum.placeholder = this.checked
                        ? 'Up to 6 months of FREE support'
                        : '';
                });
            }
        } else {
            console.error('Error: One or more required elements (Option 1 radio or Message textarea) not found in the DOM.');
        }

    }

    //Display Website types when website quote is clicked
    const ywebinspo = document.getElementById('y-website-inspo');
    const nwebinspo = document.getElementById('n-website-inspo');
    const webinspoinput = document.getElementById('inspo-website');
    const ydomain = document.getElementById('y-domain-name');
    const ndomain = document.getElementById('n-domain-name');
    const domain = document.getElementById('domain-name');

    if (ywebinspo && webinspoinput) {
        ywebinspo.addEventListener('change', function () {
            webinspoinput.style.display = 'block';

        });

        if (nwebinspo && webinspoinput) {
            nwebinspo.addEventListener('change', function () {
                webinspoinput.style.display = "none";
            })
        }
    }

    if (ydomain && domain) {
        ydomain.addEventListener('change', function () {
            domain.style.display = 'block';
        });

        if (ndomain && domain) {
            ndomain.addEventListener('change', function () {
                domain.style.display = "none";
            })
        }
    };

        form.addEventListener('reset', function (event) {
        webinspoinput.style.display = 'none';
        domain.style.display = "none";
        questions.style.display = "none";
        websitetype.style.display = 'none';
        radiogroup.style.display = "block";
        radiotitle.style.display = "none";

        
           
    });


    
});
