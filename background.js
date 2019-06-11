var firstUrl;
var secondUrl;

chrome.storage.sync.get('firstUrl', function(result){
    firstUrl = result['firstUrl']
});
chrome.storage.sync.get(['secondUrl'], function(result){
    secondUrl = result['secondUrl']
});

chrome.storage.onChanged.addListener(function(result, location){
    // Get URLs
    chrome.storage.sync.get('firstUrl', function(result){
        firstUrl = result['firstUrl']
    });
    chrome.storage.sync.get(['secondUrl'], function(result){
        secondUrl = result['secondUrl']
    });
});

chrome.commands.onCommand.addListener(function (command) {

    if (command === "update") {

        // Get tab with url
        chrome.tabs.query(
            {url: firstUrl},
            function(result){

                // Need to set to active or else issue with pasting
                chrome.windows.update(result[0]['windowId'], {focused: true});
                chrome.tabs.update(result[0]['id'], {active: true}, function (tab){

                    // Execute script.js on tab
                    chrome.tabs.executeScript(
                        result[0]['id'],
                        {file: 'script.js'},
                        function(response){

                            console.log(secondUrl);
                            // Find second tab and refresh to see update
                            chrome.tabs.query(
                                {url: secondUrl},
                                function(result){
                                    setTimeout(function () {
                                        console.log(result);
                                        chrome.tabs.update(result[0]['id'], {active: true});
                                        chrome.tabs.reload(result[0]['id']);
                                    }, 2000); // Wait 2 seconds to give it time to save
                                }
                            );
                        }
                    );
                });

            }
        );
    }
});