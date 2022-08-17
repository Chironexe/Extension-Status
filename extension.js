// List of Adult sites.
const url_list = ["https://gelbooru.com", "https://www.gelbooru.com", "https://rule34.xxx",
                  "https://danbooru.donmai.us", "https://pornhub.com", "https://rule34.paheal.net",
                  "https://nhentai.net", "https://twitch.tv"];

// This function takes a URL and loops through it to see if it's contained inside of the adult sites lsit.
function checkAdultURL(url) {
    let check = false;

    for (let i = 0; i < url_list.length; i++) {
        // Check if the URL is in the list. if yes check = true, else check = false.
        if (url == url_list[i]) {
            check = true;
            break;
        }
    }

    //return a boolean depending on if the URL is in the list.
    return check;
}

// Grab only the domain name and not the whole path.
// For example only grab https://wiki.debian.org/ and not https://wiki.debian.org/Xfce
let url = window.location.origin;

// Check if the URL is contained within the list of adult sites.
// if yes redirect else don't.
if (checkAdultURL(url)) {
    window.location.replace("https://www.youtube.com/watch?v=_xcgTCvGbkA")
}