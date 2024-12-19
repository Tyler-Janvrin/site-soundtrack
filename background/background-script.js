var paused = false;

async function pollPageUrl(){
    const re = new RegExp(".*tumblr.*");

    browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
        console.log("from inside pollPageUrl: " + tabs[0].url);
        if(!re.test(tabs[0].url)){
            document.getElementById('jazz-player').pause();
        }
        else{
            if(!paused){
                document.getElementById('jazz-player').play();
            }
        }
    });
    
    setTimeout(pollPageUrl, 500);
}

setTimeout(pollPageUrl, 500);

function handleMessage(request, sender, sendResponse) {
    console.log(`The background script received a message: ${request.greeting}`);
    if (request.greeting == "play"){
        document.getElementById('jazz-player').play();
        paused = false;
    }
    if (request.greeting == "pause"){
        document.getElementById('jazz-player').pause();
        paused = true;
    }

    // const tab = await getPage;
    // console.log("from inside handleMessage: " + tab);
    
    // console.log("title of active tab is " + window.top.location.href);

    sendResponse({ response: "Response from background script: received message: " + request.greeting,});
}
  
browser.runtime.onMessage.addListener(handleMessage);

console.log("Hello from background-script!");
