$(document).ready(function () {
    $("#one").click(() => {
        alert("Tính năng này chưa hỗ trợ")
    })

    $("#two").click(() => {
        alert("Tính năng này chưa hỗ trợ")
    })

    $("#three").click(() => {
        alert("Tính năng này chưa hỗ trợ")
    })

    $("#menu").click(() => {
        const menu = location.origin + "/menu"
        location.replace(menu + location.search)
    })

    $("#notice").click(() => {
        alert("Tính năng này chưa hỗ trợ")
    })
})