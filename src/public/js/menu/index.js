import { setCookie } from "../function/cookie.js"

$(document).ready(function () {
    // // Set amount from cookie
    // const name =  $(".amount[value=1]").attr("name")
    // alert(name)
    // $(".amount[name='"+ name + "']").css("display", "block")
    
    // Click home button
    $("#home").click(function () {
        history.back()
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

    // Click add / remove button
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
        setCookie(name, amount, 1)

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
    })

    // Click cart button
    $("#cart").click(function () {
        const cart = location.origin + "/menu/cart" + location.search
        location.href = cart;
    })
})