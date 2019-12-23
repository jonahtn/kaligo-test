import Elements from '../pages/pageSelector.js';

const configElement = new Elements()

fixture`Test Filter Rating`
    .page`https://www.kaligo.com/`

test('Search hotels and filter rating 5 stars', async t => {
    await t
        .resizeWindow(1500, 800)
        .click(configElement.destination)
        .pressKey('S i n g a p o r e')
        .click(configElement.chooseFirst)
        .click(configElement.searchHotel)
        .click(configElement.ratingFilter5)
        .expect(configElement.verifyStar5.visible).ok()
})