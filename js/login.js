window.onload = function() {
    console.log("Window loaded");

    const backArrow = document.querySelector('.backArrow');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.history.back();
        });
    } else {
        console.warn('.backArrow not found');
    }

    let users = JSON.parse(sessionStorage.getItem('users')) || {
        "RolandoCristao@mercedes.pt": { password: "LebraoJaime", name: "Rolando Cristao" }
    };

    function saveUsers() {
        sessionStorage.setItem('users', JSON.stringify(users));
    }

    function verifyLogin(email, password) {
        if (users.hasOwnProperty(email)) {
            if (users[email].password === password) {
                console.log("Login successful!");
                alert("Login bem-sucedido!");
                window.location.href = "profile.html";
            } else {
                console.log("Senha incorreta!");
                alert("Senha incorreta. Por favor, tente novamente.");
            }
        } else {
            console.log("Email não encontrado!");
            alert("Usuário não encontrado. Por favor, verifique o email.");
        }
    }

    function registerUser(name, email, password) {
        if (name === "" || email === "" || password === "") {
            console.log("Um dos campos está por preencher");
            alert("Preencha todos os campos.");
        } else if (!users.hasOwnProperty(email)) {
            users[email] = { password: password, name: name };
            console.log("User registered successfully!");
            console.log("name: " + name + "\n" + "email: " + email + "\n" + "password: " + password);
            alert("Registro bem-sucedido! Você pode fazer login agora.");
            saveUsers();
            window.location.href = "login.html";
        } else {
            console.log("Usuário já existe!");
            alert("Usuário já existe. Por favor, faça login ou use outro email.");
        }
    }

    // Adiciona um evento de clique ao botão de registro
    const createAccBoxReg = document.querySelector('.createAccBoxReg');
    if (createAccBoxReg) {
        createAccBoxReg.addEventListener('click', function() {
            const name = document.querySelector('.nameTextReg').value;
            const email = document.querySelector('.emailTextReg').value;
            const password = document.querySelector('.passwordTextReg').value;
            registerUser(name, email, password);
        });

        // Adiciona evento keydown para Enter
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const name = document.querySelector('.nameTextReg').value;
                const email = document.querySelector('.emailTextReg').value;
                const password = document.querySelector('.passwordTextReg').value;
                registerUser(name, email, password);
            }
        });
    } else {
        console.warn('.createAccBoxReg not found');
    }

    const loginButton = document.querySelector('.loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const email = document.querySelector('.emailTextLogin').value;
            const password = document.querySelector('.passwordTextLogin').value;
            verifyLogin(email, password);
        });

        // Adiciona evento keydown para Enter
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const email = document.querySelector('.emailTextLogin').value;
                const password = document.querySelector('.passwordTextLogin').value;
                verifyLogin(email, password);
            }
        });
    } else {
        console.warn('.loginButton not found');
    }
};
