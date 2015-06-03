/**
 * Created by James Lawrence on 29/05/2015.
 */
(function() {
    "use strict";

    // TODO: Stop using alert
    //alert("code is running");
    /**
     * Submits an order
     * @param parameters
     */
    function submitOrder(parameters) {
        var validate = parameters.validate;
        var size = parameters.size;
        var crust = parameters.crust;
        var toppings = parameters.toppings;
        alert("not implemented");
    }

    $(document).ready(function () {
        $("#orderForm").on("submit", function () {
            submitOrder({validate: true, size: "large", crust: "thin", toppings: ["pepperoni", "sausage"]});
            return false;
        });
    });
    var dog = new Animal();
    dog.name = "Lucky";
    dog.legCount = 3;
    dog.feed("Lamb Shank");

    var toInsert = "<div>\n    <ul>\n        <li>Lorem ipsum dolor.</li>\n        <li>Eum quasi, reprehenderit.</li>\n        <li>A, ullam, vero?</li>\n        <li>Autem beatae, itaque!</li>\n        <li>Eius fuga, recusandae.</li>\n    </ul>\n</div>";

    var toExecture = "var x = 0;";
    var ex = "[0-9A-Za-z ]*";
})();
