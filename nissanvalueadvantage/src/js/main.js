// Import our custom CSS
import '../scss/styles.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Import all of Bootstrap's JS
import * as bootstrap from '../../node_modules/bootstrap';

/* Fix to mobile toggle issue  */
document.querySelector('.navbar-toggler-bottom').addEventListener('click', function() {
    var menu = document.getElementById('navbarSupportedContent');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});

document.querySelector('.navbar-toggler-top').addEventListener('click', function() {
    var menu = document.getElementById('navbarTopContent');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});