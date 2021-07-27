window.onload = function () {
    let submitBtn = document.getElementById("submit");
    submitBtn.onclick = function () { checkRegExp() };
}
function checkRegExp() {

    let passwordInput = document.getElementById("inputPassword");
    let urlInput = document.getElementById("inputUrl");
    let userPasswordInput = passwordInput.value;
    let userUrlInput = urlInput.value;

    // RegExp for password
    let passwordExpression = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$");

    // RegExp for url
    let urlRegExpression = new RegExp("https?://.+");

    if (!userPasswordInput.match(passwordExpression))
        alert("Please, input a correct password!!");
    if (!userUrlInput.match(urlRegExpression))
        alert("Please, input a correct url!!");

    if (userPasswordInput.match(passwordExpression) && userUrlInput.match(urlRegExpression))
        alert("submition successfull!!");

}