import { Selector } from 'testcafe'

export default class Elements {
    constructor() {

        //Homepage
        this.destination = Selector('#s2id_destinationInput')
        this.searchHotel = Selector('#search-form-submit')
        this.errorNoDestination = Selector('#main-search > div:nth-child(1) > div > div > div.dirtyMsg.tooltips')
        this.selectResult = Selector('#select2-results-22 > li:nth-child(2)')

        //Search Page
        this.selectFirstHotel = Selector('#main > div.mainWrapper > div > div.result-container > div.max-size > div > div.result-list > div.result-list-items > ul > li:nth-child(1) > hotel-detail > div > div.result-list-item-action > div.hotel-price-box > div > a')

        //Hotel Page
        this.seeRoom = Selector('#main > div.mainWrapper > div > div.hotel-detail-container.new-details-container > div.max-size > div > div.col-sm-6.hotel-info-container > div.reward-yourself.hidden-xs > div:nth-child(1) > div.text-right > div.see-room-options-container')
        this.selectRoom = Selector('#hotel-detail-booking-options > div:nth-child(2) > grouped-room > div:nth-child(1) > div.grouped-room > div.room-information-container > div > grouped-room-list-item > div > div > div.grouped-actions > div')

        //Checkout Page
        this.guestTitle = Selector('#guest-title')
        this.selectGuestTitleMr = Selector('#guest-title > option:nth-child(2)')
        this.guestFirstName = Selector('#guest-first-name')
        this.guestLastName = Selector('#guest-last-name')
        this.guestPhoneCode = Selector('#guest-phonecode')
        this.guestPhoneNumber = Selector('#guest-phone')

        this.detailsFirstName = Selector('input').withAttribute('name', 'firstName')
        this.detailsEmail = Selector('input').withAttribute('name', 'uEmail')
        this.cardNumber = Selector('input').withAttribute('name', 'uCreditCardNumber')
        this.cardName = Selector('input').withAttribute('name', 'uCardName')
        this.expiredMonth = Selector('select').withAttribute('name', 'uExpirationMonth')
        this.selectJan = Selector('#main > div.mainWrapper > div > div.checkout-container > div.max-size > div > div.row > div.col-xs-12.col-sm-8.pull-right.checkout-form-container > form > div.checkout-box.checkout-payment > wrapper > div:nth-child(5) > wrapper > div.row.expiry-and-security-code > div.col-sm-6.field.required > div.month-and-year > div.month-container.col-xs-12.col-sm-6.col-md-6 > select > option:nth-child(2)')
        this.expiredYear = Selector('select').withAttribute('name', 'uExpirationYear')
        this.select2025 = Selector('#main > div.mainWrapper > div > div.checkout-container > div.max-size > div > div.row > div.col-xs-12.col-sm-8.pull-right.checkout-form-container > form > div.checkout-box.checkout-payment > wrapper > div:nth-child(5) > wrapper > div.row.expiry-and-security-code > div.col-sm-6.field.required > div.month-and-year > div.year-container.col-xs-12.col-sm-6.col-md-6 > select > option:nth-child(8)')
        this.cvvInput = Selector('input').withAttribute('name', 'uCreditVerificationNumber')
        this.billingAddress = Selector('input').withAttribute('name', 'uAddress')
        this.billingCity = Selector('input').withAttribute('name', 'uCity')
        this.billingPostal = Selector('input').withAttribute('name', 'uPostalCode')
        this.billingCountry = Selector('#guest-country')
        this.checkboxTC = Selector('#uTermsCheckbox')


    }
}