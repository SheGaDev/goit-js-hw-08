import _ from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const data = localStorage.getItem("feedback");
form.addEventListener("input", _(updateStorage, 500));
form.addEventListener("submit", clearStorage);
function updateStorage(e) {
    const local = JSON.parse(localStorage.getItem("feedback")) ?? { email: null, message: null };
    switch (e.target.type) {
        case "email":
            local.email = e.target.value;
            break;
        case "textarea":
            local.message = e.target.value;
            break;
    }
    localStorage.setItem("feedback", JSON.stringify(local))
}
function checkStorage() {
    if (!data) return;
    const parsed = JSON.parse(data)
    form.querySelector("input[name='email']").value = parsed.email;
    form.querySelector("textarea[name='message']").value = parsed.message;
}
function clearStorage(e) {
    e.preventDefault();
    form.querySelector("input[name='email']").value = null;
    form.querySelector("textarea[name='message']").value = null;
    console.log(localStorage.getItem("feedback"));
    localStorage.removeItem("feedback");
}
checkStorage();