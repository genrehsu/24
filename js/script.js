// Smooth scroll to section when menu clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// SweetAlert popup for Login Admin
function showLoginPopup() {
    Swal.fire({
        title: 'Login Admin',
        html: '<input type="text" id="username" class="swal2-input" placeholder="Username"><input type="password" id="password" class="swal2-input" placeholder="Password">',
        confirmButtonText: 'Login',
        focusConfirm: false,
        preConfirm: () => {
            const username = Swal.getPopup().querySelector('#username').value;
            const password = Swal.getPopup().querySelector('#password').value;
            if (!username || !password) {
                Swal.showValidationMessage('Isi username dan password!');
            }
            return { username, password };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(`Selamat datang, ${result.value.username}!`);
        }
    });
}


// Hapus event login popup karena tombol sekarang berupa <a> ke halaman login

// Mobile menu toggle (hanya satu blok, tanpa duplikasi)
document.addEventListener('DOMContentLoaded', function () {
  var mobileMenuBtn = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    // Auto close mobile menu after click on menu item
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});

// Gallery hover animation (optional, if not handled by CSS)
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('shadow-2xl');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('shadow-2xl');
    });
});
