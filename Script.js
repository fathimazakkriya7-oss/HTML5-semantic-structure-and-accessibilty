document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            document.getElementById("success").textContent =
            "Message sent successfully!";

            form.reset();
        });
    }
});
