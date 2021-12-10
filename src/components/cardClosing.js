export default () => {
    const cardClosing = document.querySelector("#cardClosing");
    cardClosing.addEventListener('click', () => {
        document.getElementById("card").style.display = "none";
    });
};