document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="footer bg-dark text-white py-5">
        <div class="container">
            <div class="row align-items-center">
                <!-- Logo & Quick Links -->
                <div class="col-lg-4 col-md-6 text-center text-lg-start mb-4 mb-lg-0">
                    <a href="index.html">
                        <img src="image/IL02 (1).png" alt="Importance Leadership" style="width: 200px; height: auto;">
                    </a>
                    <ul class="list-unstyled mt-3">
                        <li><a href="who-we-are.html" class="text-white">Who We Are</a></li>
                        <li><a href="what-we-do.html" class="text-white">What We Do</a></li>
                        <li><a href="impact.html" class="text-white">Impact</a></li>
                        <li><a href="donate.html" class="text-white fw-bold">Donate</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-lg-4 col-md-6 text-center text-lg-start mb-4 mb-lg-0">
                    <h5 class="fw-bold">Get in Touch</h5>
                    <p><i class="fas fa-phone-alt me-2"></i> <a href="tel:+16037150801" class="text-white">+1 (603) 715-0801</a></p>
                    <p><i class="fas fa-envelope me-2"></i> <a href="mailto:info@importanceleadership.com" class="text-white">info@importanceleadership.com</a></p>
                    <div class="social-media mt-3">
                        <a href="https://www.instagram.com" class="text-white me-3"><i class="fab fa-instagram fs-22"></i></a>
                        <a href="https://www.facebook.com" class="text-white me-3"><i class="fab fa-facebook-f fs-22"></i></a>
                        <a href="https://www.linkedin.com" class="text-white me-3"><i class="fab fa-linkedin-in fs-22"></i></a>
                        <a href="https://www.youtube.com" class="text-white"><i class="fab fa-youtube fs-22"></i></a>
                    </div>
                </div>

                <!-- Newsletter -->
                <div class="col-lg-4 col-md-12 text-center text-lg-end">
                    <h5 class="fw-bold">Subscribe to Our Newsletter</h5>
                    <p>Stay updated with our latest news and updates.</p>
                    <form action="email-templates/subscribe-newsletter.php" method="post" class="position-relative w-100 d-flex">
                        <input type="email" name="email" class="form-control me-2" placeholder="Enter your email" required>
                        <button class="btn btn-primary"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="text-center mt-4 border-top pt-3">
                <small>&copy; 2024 Importance Leadership. All Rights Reserved.</small>
            </div>
        </div>
    </footer>`;

    // Append footer to the page
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
