var numberOfAnimalButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i <numberOfAnimalButtons; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {

        var buttons = this.innerText;

        switch (buttons) {

            case "cat":
                var cat = new Audio ("Audio/cat.mp3")
                cat.play();
                break;

            case "puppy":
                var puppy = new Audio ("Audio/puppy.mp3")
                puppy.play();
                break;

            case "bee":
                var bee = new Audio ("Audio/bee.mp3")
                bee.play();
                break;

            case "monkey":
                var monkey = new Audio ("Audio/monkey.mp3")
                monkey.play();
                break;
            default:
                break;
        }

});
}