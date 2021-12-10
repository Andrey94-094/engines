export default () => {
    const buttonGoBackPopup = document.querySelector("#buttonGoBackPopup");
    const buttonGoBackPopups = document.querySelector("#buttonGoBackPopups");
    buttonGoBackPopups.addEventListener('click', () => {
        document.getElementsByClassName("modal_tab")[0].style.display = "block"
        document.getElementsByClassName("modal__tab")[1].style.display = "none"
        document.getElementsByClassName("modal__tab")[0].style.display = "none"
    })
    buttonGoBackPopup.addEventListener('click', () => {
        document.getElementsByClassName("modal_tab")[0].style.display = "block"
        document.getElementsByClassName("modal__tab")[1].style.display = "none"
        document.getElementsByClassName("modal__tab")[0].style.display = "none"
    })
}