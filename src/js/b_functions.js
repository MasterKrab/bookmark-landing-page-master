const validateEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
};

const changeFeature = id =>{
    featureResult.textContent = "";
    const {title, text, image} = features[id];

    const featureImage = featureTemplate.querySelector(".feature__image");
    featureImage.src= image;
    featureImage.alt = title;

    featureTemplate.querySelector(".feature__title").textContent = title;
    featureTemplate.querySelector(".feature__text").textContent = text;

    const node = document.importNode(featureTemplate, true);
    featureResult.appendChild(node);
};