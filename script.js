function toggleSection(id) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('register').style.display = 'none';
            document.getElementById(id).style.display = 'block';
            window.scrollTo({ top: document.getElementById(id).offsetTop, behavior: 'smooth' });
        }

        function validateLogin() {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            const demoUser = "admin";
            const demoPass = "1234";

            if (username === demoUser && password === demoPass) {
                alert("Login successful!");
            } else {
                alert("Invalid username or password.");
            }

            return false;
        }

        
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyUfqjj87dFjI1rpmKAvMtByBhTtNy8Mfm3-LyvuJesM2Tneh8ocjybNZ9Zj8VHGn9eEA/exec';

    function registerUser() {
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const department = document.getElementById("department").value.trim();
        const year = document.getElementById("year").value.trim();
        const usn = document.getElementById("usn").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!fullname || !email || !department || !usn || !phone) {
            alert("Please fill all required fields.");
            return false;
        }

        const formData = {
            fullname,
            email,
            department,
            year,
            usn,
            phone
        };

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                alert("Registration successful!");
                document.querySelector("#register form").reset();
            } else {
                alert("Error submitting data. Try again.");
            }
        })
        .catch(error => {
            alert("Submission failed: " + error.message);
        });

        return false;
    }

