/*
последние два сценария из первого шага
 */
describe('заполнение_шага_3', () => {
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
    }, 70000);

    let backButt = $$('.mat-button').get(5);
    let placePicture = element(by.id('placePicture'));
    let actionPlace3 = $$('#actionPlace').get(1);
    let googleMapPlace3 = $$('.pac-item').get(0);

    let minSlider = $$('.mat-slider-thumb').get(0);
    let minNumb = $$('.circle').get(0);

    let maxSlider = $$('.mat-slider-thumb').get(1);
    let maxNumb = $$('.circle').get(1);

    let getToPlace = element(by.id('getToPlace'));
    let whatToDo = element(by.id('whatToDo'));
    let equipment = element(by.id('equipment'));
    let smthElse = element(by.id('smthElse'));

    let nextButt = $$('.mat-button').get(8);


    it('Нажатие кнопки "Назад"', () => {
        //browser.sleep(1000);
        backButt.click();
        browser.sleep(5000);
        expect(element(by.id('mat-step-label-0-1')).getAttribute('aria-selected')).toEqual('true');
    });

    it('Загрузка фото места проведения акции', () => {
        expect(placePicture.isEnabled()).toBe(true);
    });

    it('Указание ближайшего населённого пункта в котором будут собираться волонтеры', () => {
        actionPlace3.sendKeys('Брест ');
        browser.sleep(1000);
            googleMapPlace3.click();
        expect(actionPlace3.getAttribute('value')).toEqual('Брест, Брестская область, Беларусь');
    });

    it('Указание минимального количества участников с помощью слайдера', () => {

        browser.sleep(1000);
        minSlider.click();
        browser.actions().mouseMove(minSlider).mouseMove({x: 22, y: 0}).doubleClick().perform();
        browser.sleep(5000);

        expect(minNumb.isEnabled()).toBe(true);
    });

    it('Указание максимального количества участников с помощью слайдера', () => {
        browser.sleep(1000);

        minSlider.click();
        browser.actions().mouseMove(minSlider).mouseMove({x: 22, y: 0}).doubleClick().perform();

        maxSlider.click();
        browser.actions().mouseMove(maxSlider).mouseMove({x: 22, y: 0}).doubleClick().perform();

        expect(maxNumb.isEnabled()).toBe(true);
    });

    it('Успешное и полное заполнение третьего шага создания страницы акции', () => {
        actionPlace3.sendKeys('ул. Советская 33, Брест, Брестская область');

        browser.sleep(1000);

        let arr = $$('.pac-item');
        arr.get(0).click();

        getToPlace.sendKeys('33 автобус, 24 троллейбус до остановки "Площадь независимости"');
        whatToDo.sendKeys('выкопать ямки для посадки, посадить молодые деревья');
        equipment.sendKeys('Взять с собой перчатки и резиновые сапоги. На месте выдадут лопаты и другой необходимый инструмент.');

        minSlider.click();
        browser.actions().mouseMove(minSlider).mouseMove({x: 22, y: 0}).doubleClick().perform();

        maxSlider.click();
        browser.actions().mouseMove(maxSlider).mouseMove({x: 22, y: 0}).doubleClick().perform();

        smthElse.sendKeys('Одевайтесь потеплее');

        nextButt.click();

        expect(element(by.className('mat-display-1')).getText()).toEqual('Предпросмотр акции');
    }, 90000);

    it('Минимальное успешное заполнение третьего шага создания страницы акции', () => {
        actionPlace3.sendKeys('ул. Советская 33, Брест, Брестская область');
        browser.sleep(1000);

        let arr = $$('.pac-item');

        arr.get(0).click();

        browser.sleep(1000);

        nextButt.click();

        expect(element(by.className('mat-display-1')).getText()).toEqual('Предпросмотр акции');
    }, 90000);

});