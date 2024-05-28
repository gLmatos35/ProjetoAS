const likeButton = document.getElementById('likeButton');
const commentButton = document.getElementById('commentButton');
const shareButton = document.getElementById('shareButton');
const saveButton = document.getElementById('saveButton');

let likeClicked = false;
let commentClicked = false;
let shareClicked = false;
let saveClicked = false;

likeButton.addEventListener('click', function() {
    likeClicked = !likeClicked;
    likeButton.style.backgroundColor = likeClicked ? 'red' : 'transparent';
});

commentButton.addEventListener('click', function() {
    commentClicked = !commentClicked;
    commentButton.style.backgroundColor = commentClicked ? 'white' : 'transparent';
});

shareButton.addEventListener('click', function() {
    shareClicked = !shareClicked;
    shareButton.style.backgroundColor = shareClicked ? 'white' : 'transparent';
});

saveButton.addEventListener('click', function() {
    saveClicked = !saveClicked;
    saveButton.style.backgroundColor = saveClicked ? 'white' : 'transparent';
});

