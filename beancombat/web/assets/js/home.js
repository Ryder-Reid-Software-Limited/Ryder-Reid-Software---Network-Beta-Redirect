document.addEventListener("DOMContentLoaded", function () {
    let progress = 0;
    const loadingBar = document.getElementById("loading-bar");

    function simulateLoading() {
        progress += 10;
        loadingBar.style.width = progress + "%";

        if (progress < 100) {
            setTimeout(simulateLoading, 1000);
        } else {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("content").style.display = "block";
        }
    }

    simulateLoading();
});
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});