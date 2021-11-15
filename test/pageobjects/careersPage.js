import { HomePage } from './homePage';

export class CareersPage extends HomePage {

    get careersPageTitle() {
        return `Careers - find open positions & reasons to work at 10Clouds`;
    }

    get openPositionsButton() {
        return $(`//*[contains(text(),'See open positions')]`);
    }

    get searchJobInput() {
        return $(`//*[@id="search-job"]`);
    }

    get qaAutomationRole() {
        return $$(`//*[contains(text(),'QA Automation Engineer')]`);
    }

    get jobOffersTitle() {
        return $$(`//*[@class="job-offer__title"]`);
    }
}