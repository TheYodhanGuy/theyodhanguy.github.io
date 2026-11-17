export function openCloak() {
    let win = window.open("about:blank");

    let iframe = win.document.createElement("iframe");

    iframe.src = "https://theyodhanguy.github.io";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.borderStyle = "hidden";

    win.document.body.style.margin = "0";
    win.document.body.style.padding = "0";
    win.document.body.style.overflow = "hidden";

    win.document.body.appendChild(iframe);
    window.close();
}

export function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name == cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}

export function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}