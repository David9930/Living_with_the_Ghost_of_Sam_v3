// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage.endsWith(linkPath)) {
            link.classList.add('active');
        }
    });
    
    // Sam's Ghost Effect
    createGhostSam();
});

// Create and animate Sam's ghost
function createGhostSam() {
    // Create ghost container
    const ghostSam = document.createElement('div');
    ghostSam.id = 'ghost-sam';
    ghostSam.style.top = '0';
    ghostSam.style.left = '0';
    
    // Create image
    const samImage = document.createElement('img');
    samImage.src = '/Living_with_the_Ghost_of_Sam_v3/images/SamImagesmall.jpg';
    samImage.alt = 'Sam';
    
    // Higher opacity for Sam's Corner page
    if (window.location.pathname.includes('sams-corner')) {
        samImage.style.opacity = '0.6';
    }
    
    // Append image to container
    ghostSam.appendChild(samImage);
    
    // Add to body
    document.body.insertBefore(ghostSam, document.body.firstChild);
    
    // Initial position
    moveGhostSam();
    
    // Move periodically
    const moveInterval = window.location.pathname.includes('sams-corner') ? 1500 : 3000;
    setInterval(moveGhostSam, moveInterval);
    
    // Handle window resize
    window.addEventListener('resize', moveGhostSam);
}

// Move ghost to random position
function moveGhostSam() {
    const ghostSam = document.getElementById('ghost-sam');
    if (!ghostSam) return;
    
    const viewportWidth = Math.max(window.innerWidth, 320);
    const viewportHeight = Math.max(window.innerHeight, 240);
    
    const boxWidth = 300;
    const boxHeight = 200;
    
    const maxX = viewportWidth - boxWidth;
    const maxY = viewportHeight - boxHeight;
    
    const x = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX));
    const y = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));
    
    ghostSam.style.transform = `translate(${x}px, ${y}px)`;
}

// Scripts Wheel navigation - only initialize if element exists
document.addEventListener('DOMContentLoaded', function() {
    const upButton = document.getElementById('wheel-up');
    const downButton = document.getElementById('wheel-down');
    
    if (upButton && downButton) {
        initializeWheel();
    }
});

// Initialize wheel navigation (for scripts or character bible)
function initializeWheel() {
    const upButton = document.getElementById('wheel-up');
    const downButton = document.getElementById('wheel-down');
    const wheelItems = document.querySelectorAll('.wheel-item');
    
    let currentIndex = 0;
    const itemCount = document.querySelectorAll('.wheel-data-item').length;
    
    upButton.addEventListener('click', function() {
        currentIndex = currentIndex === 0 ? itemCount - 1 : currentIndex - 1;
        updateWheel();
    });
    
    downButton.addEventListener('click', function() {
        currentIndex = currentIndex === itemCount - 1 ? 0 : currentIndex + 1;
        updateWheel();
    });
    
    function updateWheel() {
        const prevIndex = currentIndex === 0 ? itemCount - 1 : currentIndex - 1;
        const nextIndex = currentIndex === itemCount - 1 ? 0 : currentIndex + 1;
        
        document.querySelectorAll('.wheel-item').forEach(item => {
            item.classList.remove('previous', 'current', 'next');
        });
        
        document.querySelectorAll('.wheel-box').forEach(box => {
            box.classList.remove('active', 'inactive');
        });
        
        const items = document.querySelectorAll('.wheel-data-item');
        
        // Update previous item
        wheelItems[0].classList.add('previous');
        wheelItems[0].querySelector('.wheel-box').classList.add('inactive');
        wheelItems[0].innerHTML = items[prevIndex].innerHTML;
        
        // Update current item
        wheelItems[1].classList.add('current');
        wheelItems[1].querySelector('.wheel-box').classList.add('active');
        wheelItems[1].innerHTML = items[currentIndex].innerHTML;
        
        // Update next item
        wheelItems[2].classList.add('next');
        wheelItems[2].querySelector('.wheel-box').classList.add('inactive');
        wheelItems[2].innerHTML = items[nextIndex].innerHTML;
    }
}
