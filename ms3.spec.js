const { assert } = require('chai');
const quote = require("./ms3")
const request = require('supertest')('localhost:3000');

const testCases = [
    {
        scenario: "when car_value = 6614, risk_rating = 5",
        car_value: 6614,
        risk_rating: 5,
        expected: [27.5, 330]
    },
    {
        scenario: "when car_value = 50 00, risk_rating = 3",
        car_value: "50 00",
        risk_rating: 3,
        expected: "Error: Input contains string"
    },
    {
        scenario: "when car_value = -5000, risk_rating = 3",
        car_value: -5000,
        risk_rating: 3,
        expected: "Error: Input contains negative number"
    },
    {
        scenario: "when car_value = 5000!@#$, risk_rating = 5",
        car_value: "5000!@#$",
        risk_rating: 5,
        expected: "Error: Input contains string"
    },
    {
        scenario: "when car_value = , risk_rating = 3",
        car_value: null,
        risk_rating: 3,
        expected: "Error: Input is empty"
    }
]

describe("quote tests", () => {
    testCases.map(ts => {
        it(ts.scenario, () => {
            const actual = quote(ts.car_value, ts.risk_rating)
            expect(actual).toStrictEqual(ts.expected)
        })
    })
})

// describe('Users API', () => {
//     it('Get /quote').expect(200).then((res) => {
//         assert.equal(res.text, ['Test']);
//     })
// })