import Elements from '../pages/pageSelector.js';

const configElement = new Elements()

var pathJson = "../data/englishData.json"
var dataJson = require(pathJson)

fixture`Test Add Quest Event Stamp`
    .page`https://www.kaligo.com/`

// test('Book a hotel without a destination', async t => {
//     await t
//         .resizeWindow(1500, 800)
//         .click(configElement.searchHotel)
//         .expect(configElement.errorNoDestination.visible).ok()
// })

test('Book a hotel', async t => {
    await t
        .resizeWindow(1500, 800)
        .click(configElement.destination)
        .pressKey('S i n g a p o r e')
        .wait(1000)
        .pressKey('enter')
        .click(configElement.searchHotel)
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