const url_list = ["https://gelbooru.com", "https://www.gelbooru.com", "https://rule34.xxx",
                  "https://danbooru.donmai.us", "https://pornhub.com", "https://rule34.paheal.net",
                  "https://nhentai.net", "https://twitch.tv"];

function checkAdultURL(url) {
    let check = false;

    for (let i = 0; i < url_list.length; i++) {
        if (url == url_list[i]) {
            check = true;
            break;
        }
    }

    return check;
}

let url = window.location.origin;

if (checkAdultURL(url)) {
    window.location.replace("https://www.youtube.com/watch?v=_xcgTCvGbkA")
}