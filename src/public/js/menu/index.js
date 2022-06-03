import { setCookie, getCookie, getCookies, removeCookie } from "../function/cookie.js"

$(document).ready(function () {
    // Set amount from cookie
    const cookies = getCookies("id", "total")
    cookies.forEach((cookie) => {
        const name = cookie[0]
        const amount = cookie[1]
        $(".select .amount[name='"+ name +"']").attr("amount", amount)
        $(".select .remove[name='"+ name +"']").attr("amount", amount)
    })

    // Set total from cookie
    const total = getCookie("total")
    if (total != undefined) {
        $("#cart .text-view").attr("total", total)
        $("#cart").attr("total", total)
    }
    
    // Click home button
    $("#home").click(function () {
        const home = location.origin + "/home" + location.search
        location.replace(home)
    })

    // Click navigation
    $("#navigation .type").click(function () {
        // Change navigation status
        $("#navigation .type[active=true]").attr("active", "false")
        $(this).attr("active", "true")
        
        // Change content status
        $("#content .item").css("display", "none")
        const type = $(this).text()
        $("#content .item[type='" + type + "']").css("display", "flex")
    })

    // Click add/remove button
    $(".select .btn").click(function () {
        // Check button
        let isAdd = true
        if ($(this).attr("class") == "remove btn") {
            isAdd = false
        }

        // Get new amount
        let name = $(this).attr("name")
        let amount = $(".select .amount[name='"+ name +"']").attr("amount")
        if (isAdd) {
            amount = Number(amount) + 1
        } else {
            amount = Number(amount) - 1
        }

        // Update new amount
        $(".select .amount[name='"+ name +"']").attr("amount", amount)
        $(".select .remove[name='"+ name +"']").attr("amount", amount)
        if (amount < 1) {
            removeCookie(name)
        } else {
            setCookie(name, amount)
        }

        // Get new total
        let total = $("#cart .text-view").attr("total")
        if (isAdd) {
            total = Number(total) + 1
        } else {
            total = Number(total) - 1
        }

        // Update new total
        $("#cart .text-view").attr("total", total)
        $("#cart").attr("total", total)
        if (total < 1) {
            removeCookie("total")
        } else {
            setCookie("total", total)
        }
    })

    // Click cart button
    $("#cart").click(function () {
        const cart = location.origin + "/menu/cart" + location.search
        location.replace(cart)
    })
})