describe('предпросмотр_страницы_акции', () => {
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
    }, 100000);

    /*it('Предпросмотр данных об акции', () => {
        expect(element(by.className('mat-display-1')).getText()).toEqual('Предпросмотр акции');
    }, 90000);*/

    /*it('Переход к странице "Редактирование страницы акции"', () => {
        let editButt = $$('.mat-button');
            editButt.get(0).click();

            browser.sleep(5000);

        let editText = 'Ниже вы можете отредактировать уже введённую информацию об акции. Возможно, помимо исправления вам захочется добавить ещё какие-то полезные для волонтёров сведения. Обязательные поля по прежнему отмечены звёздочкой(*).';

        expect(element(by.className('mat-subheading-2')).getText()).toEqual(editText);
    }, 150000);*/

    it('Публикация страницы акции', () => {
        let editButt = $$('.mat-button');
            editButt.get(1).click();

        browser.sleep(5000);

        let publicText = 'Поздравляем, страница вашей акции успешно опубликована';

        expect(element(by.className('mat-headline')).getText()).toEqual(publicText);
    }, 120000);

});