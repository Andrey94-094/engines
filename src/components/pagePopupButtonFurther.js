export default () => {
    const pagePopupButtonFurther = document.querySelector("#pagePopupButtonFurther");
    pagePopupButtonFurther.addEventListener('click', () => {
        document.getElementsByClassName("modal__tab")[1].style.display = "block"
        document.getElementsByClassName("modal__tab")[0].style.display = "none"
    });
}