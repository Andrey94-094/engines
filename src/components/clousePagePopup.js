export default () => {
    const clousePagePopup = document.querySelector("#clousePagePopup");
    clousePagePopup.addEventListener('click', () => {
        document.getElementById("bg_popup").style.display = "none";
        document.getElementsByTagName('body')[0].style.overflow = "auto";
    });
};