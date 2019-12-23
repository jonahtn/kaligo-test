import Elements from '../pages/pageSelector.js';

const configElement = new Elements()

var pathJson = "../data/englishData.json"
var dataJson = require(pathJson)

fixture`Test Checkout Japan`
    .page`https://www.kaligo.com/`

test('Book a hotel in Japan Language', async t => {
    await t
        .resizeWindow(1500, 800)
        .click(configElement.translationFlag)
        .click(configElement.chooseJapan)
        .click(configElement.destination)
        .pressKey('S i n g a p o r e')
        .click(configElement.chooseFirst)
        .click(configElement.searchHotel)
        .click(configElement.ratingFilter5)
        .click(configElement.selectFirstHotel)
        .click(configElement.seeRoom)
        .click(configElement.selectRoom)
        .click(configElement.guestTitle)
        .click(configElement.selectGuestTitleMr)
        .typeText(configElement.guestFirstName, dataJson.guestFirstName)
        .typeText(configElement.guestLastName, dataJson.guestLastName)
        .click(configElement.guestPhoneCode)
        .pressKey('S i n g a p o r e')
        .pressKey('enter')
        .typeText(configElement.guestPhoneNumber, dataJson.guestPhoneNumber)
        .typeText(configElement.detailsFirstName, dataJson.detailsEmail)
        .typeText(configElement.detailsEmail, dataJson.detailsEmail)
        .typeText(configElement.cardNumber, dataJson.ccNumber)
        .typeText(configElement.cardName, dataJson.ccName)
        .click(configElement.expiredMonth)
        .click(configElement.selectJan)
        .click(configElement.expiredYear)
        .click(configElement.select2025)
        .typeText(configElement.cvvInput, dataJson.ccCvv)
        .typeText(configElement.billingAddress, dataJson.billingAddress)
        .typeText(configElement.billingCity, dataJson.billingAddress)
        .typeText(configElement.billingPostal, dataJson.billingPostal)
        .click(configElement.billingCountry)
        .pressKey('S i n g a p o r e')
        .pressKey('enter')
        .click(configElement.checkboxTC)
})