document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("postForm");
    const message = document.getElementById("message");

    postForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(postForm);
        
        fetch("/api/v1/post", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Post created") {
                message.textContent = "Post created successfully!";
                message.style.color = "green";
                postForm.reset();
            } else {
                message.textContent = data.message;
                message.style.color = "red";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            message.textContent = "An error occurred, please try again later.";
            message.style.color = "red";
        });
    });
});
