document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('splash-container');
    const splashSize = 40;
    let lastSplashTime = 0; 

    function createSplash(x, y) {
        const splashWrapper = document.createElement('div');
        splashWrapper.style.position = 'absolute';
        splashWrapper.style.left = `${x}px`;
        splashWrapper.style.top = `${y}px`;

        const rotation = Math.floor(Math.random() * 360);
        splashWrapper.style.transform = `rotate(${rotation}deg)`;

        const splash = document.createElement('div');
        splash.classList.add('splash');

        const hue = Math.floor(Math.random() * 360);

        splash.style.animationDelay = '0s';  // start immediately

        splashWrapper.appendChild(splash);
        container.appendChild(splashWrapper);

        // remove da splash
        splash.addEventListener('animationend', () => {
            container.removeChild(splashWrapper);
        });
    }

    document.addEventListener('mousemove', (event) => {
        const now = Date.now();
        if (now - lastSplashTime > 60) {
            const x = event.clientX - (splashSize / 2); // centre brush on cursor x
            const y = event.clientY - splashSize;       // start just above cursor
            createSplash(x, y);
            lastSplashTime = now;
        }
  });
});