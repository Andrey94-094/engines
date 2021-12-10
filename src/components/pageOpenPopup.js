export default () => {
    const pageOpenPopup = document.querySelector("#pageOpenPopup");
    pageOpenPopup.addEventListener('click', () => {
        document.getElementsByClassName("modal_tab")[0].style.display = "none"
        document.getElementsByClassName("modal__poll-tab")[0].style.background = "none"
        document.getElementsByClassName("modal__tab")[0].style.display = "block"
        document.getElementsByClassName("modal__poll-tab")[0].style.padding = "35px 45px"
    });
}