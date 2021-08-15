"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// Launching the Browser and URL
cucumber_1.Given('I launch the url', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        //await  browser.get("https://way2automation.com/angularjs-protractor/banking/#/login").then (async function(){
        yield protractor_1.browser.get("https://accounts.google.com/signin").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.manage().window().maximize();
                yield protractor_1.browser.sleep(10000);
            });
        });
    });
});
//Entering the Mail ID and clicking on Next Button
cucumber_1.Given('I give the User mailId {string}', { timeout: 60 * 1000 }, function (mail) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath("//input[@type='email']")).sendKeys(mail);
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.element(protractor_1.by.xpath("(//button[@type='button'])[3]")).click();
    });
});
//Entering the Password and clicking on Next Button
cucumber_1.Then('I give the User password {string}', { timeout: 60 * 1000 }, function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath("//input[@type='password']")).sendKeys(password);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath("(//button[@type='button'])[3]")).click();
    });
});
//Entering the lastpassword and clicking on Next Button
cucumber_1.Given('I give the lastpassword {string}', { timeout: 60 * 1000 }, function (lpwd) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath("//input[@type='password']")).sendKeys(lpwd);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath("(//button[@type='button'])[3]")).click();
    });
});
//Clicking on Compose Button
cucumber_1.Given('I click on Compose', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.element(protractor_1.by.xpath("//div[text()='Compose']")).click();
        yield protractor_1.browser.sleep(3000);
    });
});
// Entering To mail, Subject and clicking on Send Button
cucumber_1.Given('I sends an email with subject {string},{string}', { timeout: 60 * 1000 }, function (tomail, sub) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath("//*[@name='to']")).sendKeys(tomail);
        yield protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Subject']")).sendKeys(sub);
        yield protractor_1.element(protractor_1.by.xpath("//*[text()='Send']")).click();
        yield protractor_1.browser.sleep(10000);
    });
});
//Handleing an pop-up
cucumber_1.Then('i should get the popup and handle it', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(3000);
        try {
            yield protractor_1.browser.switchTo().alert().getText().then(function (popupmessage) {
                console.log(popupmessage);
                protractor_1.browser.switchTo().alert().accept();
            });
        }
        catch (error) {
            console.log("Exception Handles:" + error);
        }
    });
});
//Clicking on Sent floder to verify the sent mail
cucumber_1.Then('I click on Sent folder and mail appears with the subject {string}', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.element(protractor_1.by.xpath("//div[text()='Sent']")).click();
        yield protractor_1.browser.sleep(10000);
    });
});
//Logging out from the account
cucumber_1.Then('i will Logout', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath("//img[@class='gb_Ca gbii']")).click();
        yield protractor_1.element(protractor_1.by.xpath("//*[text()='Sign out']")).click();
        yield protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5hdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywyQ0FBaUQ7QUFFakQsZ0NBQWdDO0FBQ2hDLGdCQUFLLENBQUUsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBRSxFQUFDOztRQUM5QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLCtHQUErRztRQUM5RyxNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFFOztnQkFDN0Qsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN6QixDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGtEQUFrRDtBQUNsRCxnQkFBSyxDQUFDLGlDQUFpQyxFQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUUsRUFBQyxVQUFnQixJQUFJOztRQUMvRSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixD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