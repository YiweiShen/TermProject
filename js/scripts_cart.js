// Term project - Group 8

$(document).ready(function() {
    $("#remove_button_1").click(function(){
        alert("Item removed.");
        var count_num = +$("#lblCartCount").html()-1;
        $("#lblCartCount").html(count_num);
        $("#item_1").hide();
        var subtotal = Math.round(+$("#span_subtotal").html()-599);
        $("#span_subtotal").text(subtotal);
        var tax = Math.round(+$("#span_tax").html()-59.9);
        $("#span_tax").text(tax);
        var shipping = Math.round(+$("#span_shipping").html()-15);
        $("#span_shipping").text(shipping);
        var total = Math.round(+$("#span_total").html()-673.9);
        $("#span_total").text(total);
    });
    $("#remove_button_2").click(function(){
        alert("Item removed.");
        var count_num = +$("#lblCartCount").html()-1;
        $("#lblCartCount").html(count_num);
        $("#item_2").hide();
        var subtotal = Math.round(+$("#span_subtotal").html()-1000);
        $("#span_subtotal").text(subtotal);
        var tax = Math.round(+$("#span_tax").html()-100);
        $("#span_tax").text(tax);
        var shipping = Math.round(+$("#span_shipping").html()-15);
        $("#span_shipping").text(shipping);
        var total = Math.round(+$("#span_total").html()-1115);
        $("#span_total").text(total);
    });

});