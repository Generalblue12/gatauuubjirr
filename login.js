document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Validasi sederhana
    if (username === 'admin' & password){
        message.innerHTML = 'Login Berhasil';
        href = 'https://generalblue12.github.io/Jagocodinglah/index.html'; // Redirect ke halaman lain
    }

});

        