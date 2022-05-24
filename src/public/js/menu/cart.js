import { getCookies } from "../function/cookie.js"

const data = getCookies("id");

data.forEach(function (data) {
    alert(data.name + " " + data.value)
})