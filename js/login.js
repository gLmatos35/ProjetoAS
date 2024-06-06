window.onload = function() {
    console.log("Window loaded");

    // Recupera os dados de usuário da sessionStorage
    let users = JSON.parse(sessionStorage.getItem('users')) || {
        "RolandoCristao@mercedes.pt": { password: "LebraoJaime", name: "Rolando Cristao" }
    };

    // Recupera a sessão atual do usuário da sessionStorage
    let currentSession = sessionStorage.getItem('currentSession');

    // Função para salvar os dados de usuário na sessionStorage
    function saveUsers() {
        sessionStorage.setItem('users', JSON.stringify(users));
    }

    // Função para salvar a sessão atual do usuário na sessionStorage
    function saveCurrentSession(email) {
        sessionStorage.setItem('currentSession', email);
    }

    // Função para verificar o login do usuário
    function verifyLogin(email, password) {
        if (users.hasOwnProperty(email)) {
            if (users[email].password === password) {
                console.log("Login successful!");
                alert("Login bem-sucedido!");
                // Salva a sessão corrente na sessionStorage
                saveCurrentSession(email);
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

    // Função para registrar um novo usuário
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

    // Adiciona um evento de clique ao botão de login
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
