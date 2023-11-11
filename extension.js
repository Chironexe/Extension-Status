// Checking if the given domain exists within the list of registered adult sites and return true if it does exist.
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

let domainName = window.location.origin; // Grabbing the current tabs url

// Calling the checkDomain function to verify if the given website is an adult site.
if (checkDomain(domainName)) {
    window.location.replace("https://www.youtube.com/watch?v=_xcgTCvGbkA")
}
