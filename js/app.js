const btn = document.getElementById("tweetBox__tweetButton");

btn.addEventListener('click', function (e){
    e.preventDefault();
    const input = document.getElementById("input_tweet");
    const feed = document.getElementById("post_feeds");
    const post = document.querySelector(".post:last-child").cloneNode(true);

    let post_text = input.value;
    post.querySelector(".post__headerDescription p").innerHTML = post_text;
    post.querySelector('.post__header+img').remove();
    input.value = ''
    input.focus();

    feed.prepend(post);
});