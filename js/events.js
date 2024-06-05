document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.toggle('active')) {
                showPopup('Adicionado aos favoritos');
            } else {
                showPopup('Removido dos favoritos');
            }
        });
    });

    function showPopup(message) {
        const popup = document.createElement('div');
        popup.innerText = message;
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';
        popup.style.padding = '10px 20px';
        popup.style.backgroundColor = '#000';
        popup.style.color = '#fff';
        popup.style.borderRadius = '5px';
        popup.style.zIndex = '1000';
        popup.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        popup.style.marginTop = '10px'; 
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 2000);
    }
});
