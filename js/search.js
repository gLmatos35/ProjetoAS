document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const messagesContainer = document.getElementById('messagesContainer');
    const messages = messagesContainer.getElementsByClassName('message');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        
        Array.from(messages).forEach(function(message) {
            const messageInfo = message.getElementsByClassName('message-info')[0];
            const name = messageInfo.getElementsByTagName('h4')[0].innerText.toLowerCase();

            if (name.includes(filter)) {
                message.style.display = '';
            } else {
                message.style.display = 'none';
            }
        });
    });
});
