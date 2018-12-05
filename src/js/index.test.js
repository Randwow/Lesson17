var calcObj = require('./index');

describe('Summa', function () {

    var a, b;

    describe('calculatesumma', function () {
        describe('a more than 0', function () {
            test('should return 6 when x = 2, n = 4', function () {
                a = 2;
                b = 4;
                expect(calcObj.sum).toEqual(6);
            });

            test('should return 5 when x = 3, n = 2', function () {
                a = 3;
                b = 2;

                expect(calcObj.sum).toEqual(5);
            });
        });

        describe('summa 0', function () {
            test('should return 0 when x = 0, n = 0', function () {
                a = 0;
                b = 0;

                expect(calcObj.sum).toEqual(0);
            });
        });

        describe('summa = 1', function () {
            test('should return 1 when a = 0, b = 1', function () {
                a = 0;
                b = 1;

                expect(calcObj.sum).toEqual(1);
            });
        });

        describe('summa less than 0', function () {
            test('should return -5 when x = 0, n = -5', function () {
                a = 2;
                b = -1;

                expect(calcObj.sum).toEqual(-5);
            });
        });
    });
}); 