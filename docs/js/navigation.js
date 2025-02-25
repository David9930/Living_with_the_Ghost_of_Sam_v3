// Add this to your navigation.js or a new script
document.addEventListener('DOMContentLoaded', function() {
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
});
