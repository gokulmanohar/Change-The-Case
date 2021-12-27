function upper_case() {
    let taContent = document.getElementById('ctc-main-text-area');
    taContent.value = taContent.value.toUpperCase();
}

function lower_case() {
    let taContent = document.getElementById('ctc-main-text-area');
    taContent.value = taContent.value.toLowerCase();
}

function title_case() {
    let taContent = document.getElementById('ctc-main-text-area');
    taContent.value = taContent.value.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

function clipboard_copy() {
    const cb = navigator.clipboard;
    const taContent = document.getElementById('ctc-main-text-area');
    cb.writeText(taContent.value);
}
