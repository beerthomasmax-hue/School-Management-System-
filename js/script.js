// JavaScript functions for form validation, AJAX requests, and interactive dashboard features

// Form Validation Function
function validateForm(form) {
    let isValid = true;
    const inputs = form.getElementsByTagName('input');
    for (let input of inputs) {
        if (input.hasAttribute('required') && !input.value) {
            isValid = false;
            input.classList.add('error'); // example error handling
        } else {
            input.classList.remove('error');
        }
    }
    return isValid;
}

// AJAX Request Function
function sendAjaxRequest(url, method, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(JSON.stringify(data));
    });
}

// Interactive Dashboard Feature
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden'); // example toggling visibility
}