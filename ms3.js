function quote(car_value, risk_rating) {

    var yearlyPremium;
    var monthlyPremium;
    var errorString = "Error: Input contains string";
    var errorNegative = "Error: Input contains negative number";
    var errorNull = "Error: Input is empty";

    if (typeof car_value === "number" && typeof risk_rating === "number" && car_value > 0 && risk_rating > 0) {
        yearlyPremium = Math.floor(car_value * risk_rating / 100);
        monthlyPremium = Math.round(yearlyPremium / 12 * 100) / 100;

        return [monthlyPremium, yearlyPremium]
    }
    else if (typeof car_value === "string" || typeof risk_rating === "string") {
        return errorString
    }
    else if (typeof car_value === "number" && typeof risk_rating === "number" && car_value < 0 || risk_rating < 0) {
        return errorNegative
    }
    else if (car_value == null || risk_rating == null) {
        return errorNull
    }
}
//console.log(quote("asdasd", 5))
module.exports = quote;