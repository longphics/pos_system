import Cookies from './js.cookie.min.mjs'

function setCookie(cname, cvalue, expires_hour) {
    const expires_date = new Date()
    expires_date.setTime(expires_date.getTime() + (expires_hour * 60 * 60 * 1000))

    const expires = "expires=" + expires_date.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function getCookies() {
    let result = []
    const cookies = document.cookie.split("; ");

    cookies.forEach((cookie) => {
        let name = cookie.split("=")[0]
        let value = cookie.split("=")[1]
        let isAccept = true

        for(let i = 0; i < arguments.length; i++) {
            if (name == arguments[i]) {
                isAccept = false
            }
        }

        if (isAccept) {
            result.push({ name, value })
        }
    })

    return result;
}

function removeCookie(cname) {
    const expires_date = new Date()
    expires_date.setTime(expires_date.getTime() - (48 * 60 * 60 * 1000))

    const expires = "expires=" + expires_date.toUTCString()
    document.cookie = cname + "=" + "removed" + ";" + expires + ";path=/"
}

function setNewCookie() {
    Cookies.set('tên', 'Lê Long Phi')
}

function getNewCookie() {
    return Cookies.get('tên')
}

export { setCookie, getCookie, getCookies, removeCookie, setNewCookie, getNewCookie }