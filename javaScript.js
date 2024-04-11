const navbar = document.getElementById('navbar');
const initialOffset = navbar.offsetTop;
const container1 = document.getElementById('container1');
window.onscroll = function() {
    var top = window.scrollY;

    if (top >= 50) {
        navbar.style.position = 'fixed';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.top = '0';
        navbar.style.zIndex = '999';
        container1.style.marginTop = '100px';
    } else {
        // Reset styles when scrolling back up
        navbar.style.position = 'static';
        navbar.style.left = 'auto';
        navbar.style.right = 'auto';
        navbar.style.top = 'auto';
        navbar.style.zIndex = 'auto';
        container1.style.marginTop = '0';
        
    }
}
