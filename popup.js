const btn = document.querySelector('.btn');

btn.addEventListener('click', async() => {
    
    const urls = ['https://www.linkedin.com/in/purva-gautam-933645170',
    'https://www.linkedin.com/in/ritik-kundlas-66a466190',
    'https://www.linkedin.com/in/kajal-mittal-5ba86512b'
];
for ( const url of urls) {
    await new Promise((resolve) => {
        chrome.tabs.update({url, active: true}, (tab) => {
            chrome.tabs.onUpdated.addListener(function onUpdated(tabId, info){
                if (tabId === tab.id && info.status === 'complete') {
                    chrome.tabs.onUpdated.removeListener(onUpdated);
                    resolve();
                    }
                })
            })
        })
    }
})