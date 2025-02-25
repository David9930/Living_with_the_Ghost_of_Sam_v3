// navigation.js - Complete file for the Living with the Ghost of Sam v3 website

document.addEventListener('DOMContentLoaded', function() {
    // ===== WHEEL NAVIGATION =====
    // === spacer ====
    // Get wheel elements
    const wheelUpBtn = document.getElementById('wheel-up');
    const wheelDownBtn = document.getElementById('wheel-down');
    const wheelContainer = document.querySelector('.wheel-container');
    const wheelDataItems = document.querySelectorAll('.wheel-data-item');
    
    // Set initial state
    let currentIndex = 0;
    let totalEpisodes = wheelDataItems.length;
    
    // Setup wheel navigation
    wheelUpBtn.addEventListener('click', moveUp);
    wheelDownBtn.addEventListener('click', moveDown);
    
    function moveUp() {
        currentIndex = currentIndex === 0 ? totalEpisodes - 1 : currentIndex - 1;
        updateWheel();
    }
    
    function moveDown() {
        currentIndex = currentIndex === totalEpisodes - 1 ? 0 : currentIndex + 1;
        updateWheel();
    }
    
    function updateWheel() {
        const prevIndex = currentIndex === 0 ? totalEpisodes - 1 : currentIndex - 1;
        const nextIndex = currentIndex === totalEpisodes - 1 ? 0 : currentIndex + 1;
        
        // Update the wheel display
        const previousItem = wheelContainer.querySelector('.wheel-item.previous');
        const currentItem = wheelContainer.querySelector('.wheel-item.current');
        const nextItem = wheelContainer.querySelector('.wheel-item.next');
        
        // Update content from data items
        previousItem.innerHTML = wheelDataItems[prevIndex].innerHTML;
        currentItem.innerHTML = wheelDataItems[currentIndex].innerHTML;
        nextItem.innerHTML = wheelDataItems[nextIndex].innerHTML;
        
        // Ensure active/inactive states
        previousItem.querySelector('.wheel-box').classList.add('inactive');
        previousItem.querySelector('.wheel-box').classList.remove('active');
        currentItem.querySelector('.wheel-box').classList.add('active');
        currentItem.querySelector('.wheel-box').classList.remove('inactive');
        nextItem.querySelector('.wheel-box').classList.add('inactive');
        nextItem.querySelector('.wheel-box').classList.remove('active');
    }
    
    // Initialize the wheel
    if (wheelDataItems.length > 0) {
        updateWheel();
    }
    
    // ===== FLOATING SAM IMAGE =====
    // Create the floating image element
    const imageBox = document.createElement('div');
    imageBox.id = 'image-box';
    imageBox.style.position = 'fixed';
    imageBox.style.width = '300px';
    imageBox.style.height = '200px';
    imageBox.style.transition = 'transform 0.5s ease-in-out';
    imageBox.style.background = 'transparent';
    imageBox.style.pointerEvents = 'none';
    imageBox.style.zIndex = '0';
    imageBox.style.top = '0';
    imageBox.style.left = '0';

    const samImage = document.createElement('img');
    samImage.id = 'sam-image';
    samImage.src = 'images/SamImagesmall.jpg'; // Update path as needed
    samImage.alt = 'Sam';
    samImage.style.width = '100%';
    samImage.style.height = '100%';
    samImage.style.objectFit = 'cover';
    samImage.style.display = 'block';
    samImage.style.opacity = '0.3';

    imageBox.appendChild(samImage);
    document.body.insertBefore(imageBox, document.body.firstChild);

    function randomPosition() {
        const viewportWidth = Math.max(window.innerWidth, 320);
        const viewportHeight = Math.max(window.innerHeight, 240);
        const boxWidth = 300;
        const boxHeight = 200;
        const maxX = viewportWidth - boxWidth;
        const maxY = viewportHeight - boxHeight;
        const x = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX));
        const y = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));
        return { x, y };
    }

    function moveImageBox() {
        const { x, y } = randomPosition();
        imageBox.style.transform = `translate(${x}px, ${y}px)`;
    }

    moveImageBox();
    setInterval(moveImageBox, 3000);
    window.addEventListener('resize', moveImageBox);
    
    // ===== SET CURRENT YEAR IN FOOTER =====
    // This is from your original code
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});
