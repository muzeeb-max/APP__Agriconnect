// sucjava.js
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submit");

    btn.addEventListener("click", () => {
        // ✅ Get name from Flask variable defined in HTML
        const name = typeof userName !== "undefined" ? userName : "Guest";

        // Redirect to Flask /success route with name in URL
        window.location.href = `/success?name=${encodeURIComponent(name)}`;
    });
});
