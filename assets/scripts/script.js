function reverse_string() {
    const input = document.getElementById("user_input").value.trim();
    const resultMsg = document.getElementById("result_msg");

    resultMsg.classList.add("d-none");
    resultMsg.classList.remove("alert-danger", "alert-success");
    
    let reversed = "";
    
    if (input.length === 0) {
        show_error("Please enter a sentence");
        return;
    } else if (is_validNumber(input)) {
        show_error("Number(s) not allowed");
        return;
    } else if (/[^a-zA-Z0-9\s]/.test(input)) {
        show_error("Special Character(s) not allowed");
        return;
    } else if (input.includes(" ")) {
        show_error("Please enter only one word");
        return;
    } else if (input.length === 1) {
        show_error("Please enter more than one character");
        return;
    }
    
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }



function is_validNumber(value) {
    let dotCount = 0;
    let signCount = 0;
    let hasDigit = false;

    for (let i = 0; i < value.length; i++) {
        const ch = value[i];

    if (ch >= "0" && ch <= "9") {
        hasDigit = true;
        continue;
    } else if (ch === ".") {
        dotCount++;
        if (dotCount > 1) return false;
        continue;
    } else if (ch === "+" || ch === "-") {
        if (i !== 0) return false;
        signCount++;
        if (signCount > 1) return false;
        continue;
    }

        return false;
    }

    return hasDigit;
}

    resultMsg.innerText = `reverse string: ${reversed}`;
    resultMsg.classList.remove("d-none");
    resultMsg.classList.add("alert-success");
}

function show_error(message) {
    const resultMsg = document.getElementById("result_msg");
    resultMsg.innerText = message;
    resultMsg.classList.remove("d-none");
    resultMsg.classList.add("alert-danger");
}

function reset_form() {
    document.getElementById("user_input").value = "";
    document.getElementById("result_msg").classList.add("d-none");
}
