 document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.getElementById('theme-toggle');
            const body = document.body;
            
            // Check for saved theme preference or prefer-color-scheme
            const savedTheme = localStorage.getItem('theme');
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            
            // Set initial theme based on saved preference or system preference
            if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
                body.classList.add('dark-mode');
                themeToggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                themeToggle.checked = false;
            }
            
            // Toggle theme when switch is clicked
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                }
            });
            
            // Listen for changes in system preference
            prefersDarkScheme.addEventListener('change', function(e) {
                // Only apply system preference if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                        body.classList.add('dark-mode');
                        themeToggle.checked = true;
                    } else {
                        body.classList.remove('dark-mode');
                        themeToggle.checked = false;
                    }
                }
            });
            
            // Add some interactive effects to cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });