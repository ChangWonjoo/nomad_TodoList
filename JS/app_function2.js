const calculator = {
    plus: function (a,b) {
        return a+b;
    },

    minus: function (a,b) {
        return a-b;
    },

    multi: function (a,b) {
        return a*b;
    },

    div: function (a,b) {
        return a/b;
    },

    power: function (a,b) {
        return a**b;
    },

};

plusResult = calculator.plus(3,4);
minusResult = calculator.minus(3,4);
multiResult = calculator.multi(3,4);
divResult = calculator.div(3,4);
powerResult = calculator.power(3,4);
