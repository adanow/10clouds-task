import assert from 'assert';
import { HomePage } from '../pageobjects/homePage';
import { CareersPage } from '../pageobjects/careersPage';

const homepage = new HomePage();
const careersPage = new CareersPage();

const numberOfOpenRoles = 1;
const titleToSearch = 'Automation';

describe('Check open qa automation enginner open roles', () => {
    it('should be only one role open', async () => {
        await homepage.open();
        await homepage.careersPage.click();
        await careersPage.openPositionsButton.waitForDisplayed();
        const qaRoleCount = await careersPage.qaAutomationRole.length;

        assert.equal(qaRoleCount, numberOfOpenRoles, 'wrong number of roles');
    });

    it('role should contain Automation in title', async () => {
        await homepage.open();
        await homepage.careersPage.click();
        await careersPage.openPositionsButton.waitForDisplayed();
        await careersPage.searchJobInput.setValue(titleToSearch);

        const openRoles = await careersPage.jobOffersTitle;
        for (const role of openRoles) {
            const roleTitle = await role.getText();
            assert.equal(roleTitle.includes(titleToSearch), true, 'Title doesn`t include Automation');
          }
    });
});
