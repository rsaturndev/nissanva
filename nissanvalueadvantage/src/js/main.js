// Import our custom CSS
import '../scss/styles.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Import all of Bootstrap's JS
import * as bootstrap from '../../node_modules/bootstrap';

/* Fix to mobile toggle issue  */
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    var menu = document.getElementById('navbarSupportedContent');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
