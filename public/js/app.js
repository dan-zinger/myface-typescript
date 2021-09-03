document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("colorchange-button");
    button.addEventListener('click', function() {
        console.log("great success!!!")
        const postlist = document.getElementsByClassName("eachpost");
        for (var i = 0; i< postlist.length; i++) {
            const post = postlist[i]
            post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("change-background-color");
    button.addEventListener('click', function() {
        const body = document.getElementsByTagName("body")[0];
        body.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
});