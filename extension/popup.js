document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('authHeader', function (data) {
        document.getElementById('authHeader').textContent = data.authHeader;
    });

    document.getElementById('copyButton').addEventListener('click', function () {
        var copyText = document.getElementById("authHeader");
        navigator.clipboard.writeText(copyText.textContent);
    });
});