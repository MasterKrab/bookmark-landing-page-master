const mainMenu = document.getElementById("main-menu");
const mainMenuButton = document.getElementById("main-menu-button")
const headerLogo = document.getElementById("header-logo");
const form = document.getElementById("form");
const featuresList = document.getElementById("features-list");
const featuresButtons = featuresList.querySelectorAll(".features-list__button");
const featureResult = document.getElementById("feature-result");
const featureTemplate = document.getElementById("feature-template").content;

const features = [
    {
        title: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: "assets/images/illustration-features-tab-1.svg"
    },
    {
        title: "Intelligent search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: "assets/images/illustration-features-tab-2.svg"
    },
    {
        title: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: "assets/images/illustration-features-tab-3.svg"
    }
];