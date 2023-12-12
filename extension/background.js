chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'Authorization') {
                chrome.storage.local.set({ authHeader: details.requestHeaders[i].value });
                break;
            }
        }
    },
    { urls: ["*://alpha.uipath.com/entity/portal_/api/filtering/leftnav/tenantsAndOrganizationInfo"] },
    ["requestHeaders"]
);