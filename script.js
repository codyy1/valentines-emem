document.addEventListener('DOMContentLoaded', function() { 
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    // Add some flowers
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        let left, top;
        do {
            left = Math.random() * 100;
            top = Math.random() * 100;
        } while (left > 30 && left < 70 && top > 30 && top < 70); // Avoid center area
        flower.style.left = left + '%';
        flower.style.top = top + '%';
        flower.style.animationDelay = Math.random() * 6 + 's';
        document.body.appendChild(flower);
    }

    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        setTimeout(() => {
            letter.classList.add('show');
            createHearts();
        }, 500);
    });

    function createHearts() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = '❤️';
            
            const envelopeRect = envelope.getBoundingClientRect();
            const startX = envelopeRect.left + envelopeRect.width / 2;
            const startY = envelopeRect.top + envelopeRect.height / 2;
            
            heart.style.left = startX + 'px';
            heart.style.top = startY + 'px';
            
            const angle = (Math.PI * 2 * i) / 15;
            const distance = 150 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 100;
            
            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }

    const originalClickHandler = envelope.onclick;
    envelope.addEventListener('click', function() {
        createHearts();
    });

    function createFlowers() {
        for (let i = 0; i < 30; i++) {
            const flower = document.createElement('div');
            flower.classList.add('celebration-flower');
            flower.textContent = '🌸';
            
            const startX = Math.random() * window.innerWidth;
            const startY = window.innerHeight;
            
            flower.style.left = startX + 'px';
            flower.style.top = startY + 'px';
            
            const angle = (Math.random() - 0.5) * 100;
            const distance = 200 + Math.random() * 150;
            const tx = angle;
            const ty = -distance;
            
            flower.style.setProperty('--tx', tx + 'px');
            flower.style.setProperty('--ty', ty + 'px');
            flower.style.setProperty('--rotation', Math.random() * 720);
            
            document.body.appendChild(flower);
            
            setTimeout(() => {
                flower.remove();
            }, 3500);
        }
    }

    yesBtn.addEventListener('click', function() {
        letter.classList.add('hidden');
        popupMessage.textContent = 'yeyy I love you babyy!!';
        popup.style.display = 'block';
        createHearts();
        createFlowers();
        setTimeout(() => {
            popup.style.display = 'none';
            letter.classList.remove('hidden');
        }, 2000);
    });

    noBtn.addEventListener('click', function() {
        letter.classList.add('hidden');
        popupMessage.textContent = 'Thats still a yes!! yeppiiee';
        popup.style.display = 'block';
        createHearts();
        createFlowers();
        setTimeout(() => {
            popup.style.display = 'none';
            letter.classList.remove('hidden');
        }, 2000);
    });
});
