import { setCookie, getCookie } from "../function/cookie.js"

let id = getCookie("id")
const home = location.origin + "/home"

if (id == "") {
    $("#submit button").click(() => {
        const str = "name=" + $("#name input").val()
        const create = location.origin + "/create"

        $.post(create, str, (id) => {
            setCookie("id", id, 1)
            location.replace(home + "?id=" + id)
        })
    })
} else {
    location.replace(home + "?id=" + id)
}