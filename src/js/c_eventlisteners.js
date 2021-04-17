mainMenuButton.addEventListener("click", () =>{
    document.body.classList.toggle("no-scroll");
    headerLogo.classList.toggle("top-bar__logo--light");
    mainMenuButton.firstElementChild.classList.toggle("top-bar__icon--active");
    mainMenu.classList.toggle("top-bar__links--active");

    !mainMenu.classList.contains("top-bar__links--active")
        ? mainMenu.classList.add("top-bar__links--hidden")
        : mainMenu.classList.remove("top-bar__links--hidden");
});

form.addEventListener("submit", e =>{
    e.preventDefault();

    if(validateEmail(form.email.value)){
        form.firstElementChild.classList.remove("contact__input--error");
        form.email.classList.remove("contact__email--error")
        form.email.ariaInvalid = true;
        form.reset();
    }else{
        form.firstElementChild.classList.add("contact__input--error");
        form.email.classList.add("contact__email--error")
        form.firstElementChild.dataset.error = "Whoops, make sure it's an email"
        form.email.ariaInvalid = false;
    }

    if(!form.email.value.trim().length > 0)
        form.firstElementChild.dataset.error = "The input field is empty";
});

featuresList.addEventListener("click", e =>{
    if(e.target.classList.contains("features-list__button")){
        for (const button of featuresButtons)
            button.classList.remove("features-list__button--active");

        e.target.classList.add("features-list__button--active");

        const featureImage = featureResult.querySelector(".feature__image")
        const featureCard = featureResult.querySelector(".feature__card");

        featureImage.addEventListener("animationend", () =>{
            console.log(featureResult)

            changeFeature(e.target.dataset.id);
        });

        featureImage.classList.add("feature__image--hidden");
        featureCard.classList.add("feature__card--hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => changeFeature(0))