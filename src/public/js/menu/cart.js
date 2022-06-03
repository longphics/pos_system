import { setCookie, getCookie, getCookies, removeCookie } from "../function/cookie.js"

$(document).ready(function () {
    // Test cookie
    let resultStr = ""
    let results = getCookies()
    results.forEach((result) => {
        resultStr += result.name + " " + result.value + "\n"
    })
    alert(resultStr)

    // Set item detail and total-price from cookie
    let total_price = $("#total .total-price").attr("total-price")

    const cookies = getCookies("id", "total")
    cookies.forEach(function (cookie) {
        // Set item detail
        $("#content .item[name='" + cookie.name + "']").attr("active", "true")
        $("#content .item[name='" + cookie.name + "']" + " .info .price").attr("amount", cookie.value)

        // Set total-price
        let price = $("#content .item[name='" + cookie.name + "']" + " .info .price").attr("price")
        let amount = $("#content .item[name='" + cookie.name + "']" + " .info .price").attr("amount")
        total_price = Number(total_price) + (Number(price) * Number(amount))
    })

    $("#total .total-price").attr("total-price", total_price)

    // Click back button
    $("#header .back").click(function () {
        const menu = location.origin + "/menu" + location.search
        location.replace(menu)
    })

    // Click remove button
    $("#header .remove").click(function () {
        const cookies = getCookies("id", "total")

        cookies.forEach(function (cookie) {
            // Update remove status
            let name = cookie.name
            $("#content .item[name='" + name + "']").attr("active", "false")

            // Remove from cookie
            removeCookie(name)

            // Update amount attribute
            $("#content .item[name='" + name + "']" + " .info .price").attr("amount", "0")

            // // Update total-price attribute
            // let total_price = $("#total .total-price").attr("total-price")
            // let price = $("#content .item[name='" + name + "']" + " .info .price").attr("price")
            // let amount = $("#content .item[name='" + name + "']" + " .info .price").attr("amount")
            // total_price = Number(total_price) - (Number(price) * Number(amount))
            // $("#total .total-price").attr("total-price", total_price)

            // // Update total cookie
            // let total = getCookie("total")
            // total = Number(total) - Number(amount)
            // if (total < 1) {
            //     removeCookie("total")
            // } else {
            //     setCookie("total", total)
            // }
        })

        // Update total-price attribute
        $("#total .total-price").attr("total-price", "0")

        // Remove total cookie
        removeCookie("total")

        // Test cookie
        let resultStr = ""
        let results = getCookies()
        results.forEach((result) => {
            resultStr += result.name + " " + result.value + "\n"
        })
        alert(resultStr)

    })

    // Click remove-item button
    $(".item .remove-item").click(function () {
        // Change removed active attibute
        let name = $(this).attr("name")
        $("#content .item[name='" + name + "']").attr("active", "false")

        // Remove from cookie
        removeCookie(name)

        // Update total-price attribute
        let total_price = $("#total .total-price").attr("total-price")
        let price = $("#content .item[name='" + name + "']" + " .info .price").attr("price")
        let amount = $("#content .item[name='" + name + "']" + " .info .price").attr("amount")
        total_price = Number(total_price) - (Number(price) * Number(amount))
        $("#total .total-price").attr("total-price", total_price)

        // Update total cookie
        let total = getCookie("total")
        total = Number(total) - Number(amount)
        if (total < 1) {
            removeCookie("total")
        } else {
            setCookie("total", total)
        }

        // Update amount attribute
        $("#content .item[name='" + name + "']" + " .info .price").attr("amount", "0")

        // Test cookie
        let resultStr = ""
        let results = getCookies()
        results.forEach((result) => {
            resultStr += result.name + " " + result.value + "\n"
        })
        alert(resultStr)
    })

    // Click send button
    $("#send").click(function () {
        let dishes = []

        const cookies = getCookies("id", "total")
        cookies.forEach(function (cookie) {
            if (cookie.value != 0) {
                let name = cookie.name;
                let count = cookie.value;
                dishes.push({name: name, count: count})
            }
        })

        // let sendObj = {dishes: dishes};

        let sendStr = JSON.stringify(dishes);
        const send = location.origin + "/menu/cart/send" + location.search
        $.post(send, sendStr, (text) => {
            // Reset cookie
            const cookies = getCookies("id", "total")
            cookies.forEach((cookie) => {
                setCookie(cookie.name, 0, 1)
            })
            setCookie("total", 0, 1)

            // Alert
            alert(text);

            // Redirect to home page
            const home = location.origin + "/home" + location.search
            location.replace(home)
        })

    })
})