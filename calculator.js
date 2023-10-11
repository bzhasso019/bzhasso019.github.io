 /*jslint browser: true */
 window.onload = function () {
    document.getElementById("forma").addEventListener("submit", function (Mul) {
        Mul.preventDefault();
        let price;
        let count;
        let answer;
        let selector = document.getElementById("selector");
        let choise = selector.options[selector.selectedIndex];
        count = document.getElementById("input").value;
        price = choise.getAttribute("price");
        answer = price * count;

        if (/^\d+$/.test(count) && count >= 0) {
            document.getElementById("result").innerHTML = answer;
        } else {
            document.getElementById("result").innerHTML = "Подумай лучше";
        }
    });
};