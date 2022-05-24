function ajax_get(url, callback) {
    const xhttp = new XMLHttpRequest()

    xhttp.open("GET", url, true)
    xhttp.send(str)

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this)
        }
    };
}

function ajax_post(url, str, callback) {
    const xhttp = new XMLHttpRequest()

    xhttp.open("POST", url, true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhttp.send(str)

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this)
        }
    };
}

export { ajax_get, ajax_post }