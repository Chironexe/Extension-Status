const url = 'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/porn-only/hosts';
let domainList = []

function checkDomain(domainName) {
    let isAdultSite = false;
    for (let i = 0; i < domainList.length; i++) {
        if (domainName == domainList[i]) {
            isAdultSite = true;
            break;
        }
    }
    return isAdultSite;
}
if (checkDomain(domainName)) {
    window.location.replace("https://www.youtube.com/watch?v=_xcgTCvGbkA")
}

async function fetchBlockList() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok could not fetch file: ' + response.statusText);
        }

        const content = await response.text();
        const lines = content.split('\n');

        const amountOfLines = lines.length - 1;

        for (let i = 0; i < amountOfLines; i++) {
            if (!lines[i].includes('#', 0)) {
              if (lines[i] === "") { continue; }
              domainList.push(lines[i].replace("0.0.0.0 ", ""))
            }
        }

        console.log(domainList)
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}

fetchBlockList();

let domainName = window.location.origin;