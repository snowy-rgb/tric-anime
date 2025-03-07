function say(name, text) {
    document.getElementById("characterName").innerText = name;
    document.getElementById("message").innerText = "";
    let i = 0;
    function typeText() {
        if (i < text.length) {
            document.getElementById("message").innerText += text[i];
            i++;
            setTimeout(typeText, 50);
        }
    }
    typeText();
}
