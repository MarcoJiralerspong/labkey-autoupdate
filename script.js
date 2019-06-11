// Paste clipboard contents into field
setTimeout(function () {
    navigator.clipboard.readText().then(text => document.getElementById('wiki-input-body').value = text);
}, 100);

// "Dirty" form so labkey detects a change was made
setTimeout(function () {
    document.getElementById('wiki-input-body').dispatchEvent(new KeyboardEvent('keypress',{'key':''})); // REQUIRED to show changes have been made
}, 200);

// Save changes
setTimeout(function () {
    document.getElementById('wiki-button-save').click();
}, 300); // Difference in delays to ensure no conflict