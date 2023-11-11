// Checking if the given domain exists within the list of registered porn sites and return true if it does exist.
function checkDomain(domainName) {
    let isPornSite = false;
    for (let i = 0; i < domainList.length; i++) {
        if (domainName == domainList[i]) {
            isPornSite = true;
            break;
        }
    }
    return isPornSite;
}

let domainName = window.location.origin; // Grabbing the current tabs url

// Calling the checkDomain function to verify if the given website is a porn site.
if (checkDomain(domainName)) {
    window.location.replace("https://www.youtube.com/watch?v=_xcgTCvGbkA")
}
