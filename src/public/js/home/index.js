$(document).ready(function () {
    $("#one").click(() => {
        alert("Hello")
    })

    $("#two").click(() => {
        alert("Hello")
    })

    $("#three").click(() => {
        alert("Hello")
    })

    $("#menu").click(() => {
        const menu = location.origin + "/menu"
        location.href = menu + location.search
    })
})