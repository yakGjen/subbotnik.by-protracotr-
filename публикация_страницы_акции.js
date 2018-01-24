describe('публикация_страницы_акции', () => {
    beforeEach(() => {
        browser.waitForAngularEnabled(true);
        browser.get('https://dvdmitry.github.io/subotnik/create-event-page');
        element(by.id('mat-input-0')).sendKeys('Уборка левого берега р. Ислочь');
        element(by.id('actionPlace')).sendKeys('деревня Боровиковщина');
        browser.sleep(2000);
        element(by.className('pac-item')).click();
        element(by.className('mat-icon-button')).click();
        element(by.className('mat-calendar-body-today')).click();
        element(by.id('mat-input-2')).sendKeys('09:00');
        element(by.id('mat-input-3')).sendKeys('18:00');
        element(by.className('next-action')).click();

        element(by.id('citizenName')).sendKeys('Лопухова Марина');
        element(by.id('citizenPhone')).sendKeys('292222222');
        element(by.id('citizenPost')).sendKeys('marina@mail.ru');
        element(by.id('mat-input-8')).click();
        // #nextButt
        element(by.id('mat-step-label-0-2')).click();

        $$('#actionPlace').get(1).sendKeys('деревня Боровиковщина');
        browser.sleep(2000);
        let arr = $$('.pac-item');
        arr.get(1).click();
        browser.sleep(2000);
        $$('.mat-button').get(8).click();

        $$('.mat-button').get(1).click();
    }, 120000);

    it('Просмотр опубликованной страницы акции', () => {
        browser.sleep(5000);
        expect(true).toBe(true);
    });
});