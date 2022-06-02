import { setCookie, getCookie, getCookies } from "../function/cookie.js"

$(document).ready(function () {
    // Set item detail and total-price from cookie
    let total_price = $("#total .total-price").attr("total-price")

    const cookies = getCookies("id", "total")
    cookies.forEach(function (cookie) {
        if (cookie.value != 0) {
            // Set item detail
            $("#content .item[name='" + cookie.name + "']").attr("active", "true")
            $("#content .item[name='" + cookie.name + "']" + " .info .price").attr("amount", cookie.value)

            // Set total-price
            let price = $("#content .item[name='" + cookie.name + "']" + " .info .price").attr("price")
            let amount = $("#content .item[name='" + cookie.name + "']" + " .info .price").attr("amount")
            total_price = Number(total_price) + (Number(price) * Number(amount))
        }
    })

    $("#total .total-price").attr("total-price", total_price)

    // Click back button
    $("#header .back").click(function () {
        const menu = location.origin + "/menu"
        location.replace(menu + location.search)
    })

    // Click remove button
    $("#header .remove").click(function () {
        const cookies = getCookies("id", "total")

        cookies.forEach(function (cookie) {
            if (cookie.value != 0) {
                // Change removed active attibute
                let name = cookie.name
                $("#content .item[name='" + name + "']").attr("active", "false")

                // Change removed value cookie
                setCookie(name, 0, 1)

                // Update total-price attribute
                let total_price = $("#total .total-price").attr("total-price")
                let price = $("#content .item[name='" + name + "']" + " .info .price").attr("price")
                let amount = $("#content .item[name='" + name + "']" + " .info .price").attr("amount")
                total_price = Number(total_price) - (Number(price) * Number(amount))
                $("#total .total-price").attr("total-price", total_price)

                // Update total cookie
                let total = getCookie("total")
                total = Number(total) - Number(amount)
                setCookie("total", total)

                // Update amount attribute
                $("#content .item[name='" + name + "']" + " .info .price").attr("amount", "0")
            }
        })
    })

    // Click remove-item button
    $(".item .remove-item").click(function () {
        // Change removed active attibute
        let name = $(this).attr("name")
        $("#content .item[name='" + name + "']").attr("active", "false")

        // Change removed value cookie
        setCookie(name, 0, 1)

        // Update total-price attribute
        let total_price = $("#total .total-price").attr("total-price")
        let price = $("#content .item[name='" + name + "']" + " .info .price").attr("price")
        let amount = $("#content .item[name='" + name + "']" + " .info .price").attr("amount")
        total_price = Number(total_price) - (Number(price) * Number(amount))
        $("#total .total-price").attr("total-price", total_price)

        // Update total cookie
        let total = getCookie("total")
        total = Number(total) - Number(amount)
        setCookie("total", total)

        // Update amount attribute
        $("#content .item[name='" + name + "']" + " .info .price").attr("amount", "0")
    })

    // Click send button
    $("#send").click(function () {
        alert("Tính năng này chưa hỗ trợ")
    })
})