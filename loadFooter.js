document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="footer text-white py-5" style="background-image: url('image/coming-soon.jpg'); background-size: auto;">
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
                    <p class="text-white text-center" style="font-style:italic;">We'd Love to hear from you! Whether you have questions or feedback or are interested in getting involved with Importance Leadership, our team is here to help
                </p>
                    <p><i class="fas fa-phone-alt me-2"></i> <a href="tel:+16037150801" class="text-white">+1 (603) 715-0801</a></p>
                    <p><i class="fas fa-envelope me-2"></i> <a href="mailto:info@importanceleadership.com" class="text-white">info@importanceleadership.com</a></p>
                    <div class="social-media mt-3">
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/importance_leadership_" class="me-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 2C4.02208 2 1 5.02208 1 8.75V15.25C1 18.9779 4.02208 22 7.75 22H15.25C18.9779 22 22 18.9779 22 15.25V8.75C22 5.02208 18.9779 2 15.25 2H7.75ZM7.75 4H15.25C17.8995 4 20 6.10051 20 8.75V15.25C20 17.8995 17.8995 20 15.25 20H7.75C5.10051 20 3 17.8995 3 15.25V8.75C3 6.10051 5.10051 4 7.75 4ZM17.75 6.5C17.3358 6.5 17 6.83579 17 7.25C17 7.66421 17.3358 8 17.75 8C18.1642 8 18.5 7.66421 18.5 7.25C18.5 6.83579 18.1642 6.5 17.75 6.5ZM12.5 7.5C9.73858 7.5 7.5 9.73858 7.5 12.5C7.5 15.2614 9.73858 17.5 12.5 17.5C15.2614 17.5 17.5 15.2614 17.5 12.5C17.5 9.73858 15.2614 7.5 12.5 7.5ZM12.5 9.5C14.1569 9.5 15.5 10.8431 15.5 12.5C15.5 14.1569 14.1569 15.5 12.5 15.5C10.8431 15.5 9.5 14.1569 9.5 12.5C9.5 10.8431 10.8431 9.5 12.5 9.5Z"/>
                                
                            </svg>
                            
                    </a>
                
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/share/12J1CX4vLQ8/?mibextid=wwXIfr" class="me-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9895 5.65685 21.1282 10.4375 21.8789V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29051 11.93 5.90625 14.2148 5.90625C15.3028 5.90625 16.4453 6.10156 16.4453 6.10156V8.5625H15.1641C13.9 8.5625 13.5625 9.33418 13.5625 10.1562V12H16.3281L15.8945 14.8906H13.5625V21.8789C18.3431 21.1282 22 16.9895 22 12Z"/>
                                
                            </svg>
                         
                    </a>
                
                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/company/importance-leadership/posts" class="me-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 2H2.5C1.67157 2 1 2.67157 1 3.5V20.5C1 21.3284 1.67157 22 2.5 22H21.5C22.3284 22 23 21.3284 23 20.5V3.5C23 2.67157 22.3284 2 21.5 2ZM7 19H4V9H7V19ZM5.5 7.5C4.67 7.5 4 6.83 4 6C4 5.17 4.67 4.5 5.5 4.5C6.33 4.5 7 5.17 7 6C7 6.83 6.33 7.5 5.5 7.5ZM20 19H17V14C17 12.9 16.1 12 15 12C13.9 12 13 12.9 13 14V19H10V9H13V10.5C13.64 9.5 14.72 9 15.85 9C18.09 9 20 10.91 20 13.15V19Z"/>
                               
                            </svg>
                           
                    </a>
                
                    <!-- YouTube -->
                    <a href="https://www.youtube.com/@importanceleadership" class="me-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 3H4.5C3.67 3 3 3.67 3 4.5V19.5C3 20.33 3.67 21 4.5 21H19.5C20.33 21 21 20.33 21 19.5V4.5C21 3.67 20.33 3 19.5 3ZM15.5 12.5L10.5 15.5V9.5L15.5 12.5Z"/>
                               
                            </svg>
                           
                    </a>
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
