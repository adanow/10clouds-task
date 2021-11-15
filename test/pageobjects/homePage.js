export class HomePage {
    get careersPage() {
        return $(`//a[contains(@href,'careers')]`);
    }

    open() {
        return browser.url(browser.options.baseUrl)
    }
}
