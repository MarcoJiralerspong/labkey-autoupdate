$(document).ready(function(){

    window.onblur = function(){
        window.close();
    };

    function getStorage(id){
        chrome.storage.sync.get(id, function(result){
            $('#'+id).val(result[id]);
        });
    }

    getStorage('firstUrl');
    getStorage('secondUrl');

    var firstUrl = '';
    var secondUrl = '';

    $('#findTabs').click(function(){
        chrome.tabs.query({}, function(tabs){

            for (var i = 0; i < tabs.length; i++){
                if (tabs[i].url.includes('wiki-edit.view')){
                    firstUrl = tabs[i].url;
                    chrome.storage.sync.set({ 'firstUrl' : firstUrl}, function(){});
                    $('#firstUrl').val(firstUrl);
                    break;
                }
            }

            for (var i = 0; i < tabs.length; i++){
                if (tabs[i].url.includes('wiki-page.view')){
                    secondUrl = tabs[i].url;
                    chrome.storage.sync.set({ 'secondUrl' : secondUrl}, function(){});
                    $('#secondUrl').val(secondUrl);
                    break;
                }
            }

            if (firstUrl !== ''  && secondUrl !== ''){
                $('#success').text('Found both tabs.');
            }
            else if (firstUrl !== ''){
                $('#success').text('Only found edit tab.');
            }
            else{
                $('#success').text("Couldn't find tabs.");
            }

            setTimeout(function(){
                $('#success').text("");
            }, 1000)

        })
    });

    // $('#downloadSource').click(function(){
    //
    //
    //     var blob = new Blob(["array of", " parts of ", "text file"], {type: "text/plain"});
    //     var url = URL.createObjectURL(blob);
    //     chrome.downloads.download({
    //         url: url // The object URL can be used as download URL
    //         //...
    //     });
    // })

});