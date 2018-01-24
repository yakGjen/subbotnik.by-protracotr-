describe('заполнение_шага_2', () => {

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
    }, 70000);

    let citizenName = element(by.id('citizenName'));
    let citizenPhone = element(by.id('citizenPhone'));
    let citizenPost = element(by.id('citizenPost'));

    let nextButt = $$('.mat-button').get(4);
    let pressAddPhone = $$('.mat-icon-button').get(1);

    let citizenPhone2 = element(by.id('tel1'));
    let citizenPhone3 = $$('#tel2').get(1);
    let citizenWeb = element(by.id('citizenWeb'));
    let pressAddWeb = $$('.mat-icon-button').get(2);
    let citizenWeb2 = element(by.id('site1'));
    let citizenWeb3 = $$('#site2').get(1);
    let description = element(by.id('mat-input-8'));

    let backButt = $$('.mat-button').get(3);
    let company = element(by.id('mat-tab-label-0-1'));
    let companyName = element(by.id('companyName'));
    let companyPhone = element(by.id('companyPhone'));
    let companyPost = element(by.id('companyPost'));
    let companyWeb = element(by.id('companyWeb'));
    let companyContact = element(by.id('companyContact'));
    let descriptionCompany = element(by.id('smthToAdd'));


    it('Минимальное успешное заполнение второго шага "Информация об организаторах" индивидуальным организатором', () => {
        citizenName.sendKeys('Лопухова Марина');
        citizenPhone.sendKeys('292222222');
        citizenPost.sendKeys('marina@mail.ru');
        nextButt.click();

        let step = element(by.id('mat-step-label-0-2'));

        expect(step.getAttribute('aria-selected')).toEqual('true');
    }, 70000);

    it('Успешное добавление основного контактного номера телефона индивидуальным организатором', () => {
        citizenPhone.sendKeys('292222222');

        expect(citizenPhone.getAttribute('value')).toEqual('292222222');
        expect(pressAddPhone.isDisplayed()).toBe(true);
    });

    it('Успешный переход к добавлению первого дополнительного контактного номера телефона индивидуальным организатором', () => {
        citizenPhone.sendKeys('292222222');

        pressAddPhone.click();

        expect(citizenPhone2.isPresent()).toBe(true);
        expect(citizenPhone2.isEnabled()).toBe(true);
    });

    it('Успешный переход к добавлению первого дополнительного контактного номера телефона индивидуальным организатором', () => {
        citizenPhone.sendKeys('292222222');
        pressAddPhone.click();

        expect(citizenPhone2.isPresent()).toBe(true);
        expect(citizenPhone2.isEnabled()).toBe(true);
    });

    // нет кнопки удаления дополнительных номеров
    it('Успешное добавление первого дополнительного контактного номера телефона индивидуальным организатором', () => {
        citizenPhone.sendKeys('292222222');
        pressAddPhone.click();
        citizenPhone2.sendKeys('251111111');

        expect(citizenPhone2.getAttribute('value')).toEqual('251111111');
        expect(pressAddPhone.isPresent()).toBe(true);
    });

    it('Успешный переход к добавлению второго дополнительного контактного номера телефона индивидуальным организатором', () => {
        citizenPhone.sendKeys('292222222');
        pressAddPhone.click();
        citizenPhone2.sendKeys('251111111');
        pressAddPhone.click();

        expect(citizenPhone3.isPresent()).toBe(true);
        expect(citizenPhone3.isEnabled()).toBe(true);
    });

    it('Успешное добавление второго дополнительного контактного номера телефона индивидуальным организатором', () => {
        citizenPhone.sendKeys('292222222');
        pressAddPhone.click();
        citizenPhone2.sendKeys('251111111');
        pressAddPhone.click();
        citizenPhone3.sendKeys('441111111');

        expect(citizenPhone3.getAttribute('value')).toEqual('441111111');
    });


    // нет кнопок удаления телефонов
    /*it('Успешное удаление первого дополнительного контактного номера телефона индивидуальным организатором', () => {
        //element(by.id('citizenPhone')).sendKeys('292222222');
        citizenPhone.sendKeys('292222222');
        let pressAdd = $$('.mat-icon-button');
            pressAdd.get(1).click();
        let tel1 = element(by.id('tel1'));
            tel1.sendKeys('251111111');

            pressAdd.get(2).click();

            browser.sleep(5000);

        expect(tel1.isPresent()).toBe(false);
        // второе То ?...
    });*/

    // нет кнопок удаления телефонов
    /*it('Успешное удаление второго дополнительного контактного номера телефона индивидуальным организатором', () => {
        element(by.id('citizenPhone')).sendKeys('292222222');

        let pressAdd = $$('.mat-icon-button');
            pressAdd.get(1).click();

        let tel1 = element(by.id('tel1'));
            tel1.clear();
            tel1.sendKeys('251111111');

            pressAdd.get(3).click();

        let tel2 = $$('#tel2');
            tel2.get(1).clear();
            tel2.sendKeys('441111111');

            pressAdd.get(4).click();

            browser.sleep(5000);

        expect(tel2.get(1).isPresent()).toBe(false);
    });*/

    it('Успешное и полное заполнение второго шага "Информация об организаторах" индивидуальным организатором', () => {
        citizenName.sendKeys('Лопухова Марина');
        citizenPhone.sendKeys('292222222');
        pressAddPhone.click();
        citizenPhone2.sendKeys('251111111');
        pressAddPhone.click();
        citizenPhone3.sendKeys('441111111');
        citizenPost.sendKeys('marina@mail.ru');
        citizenWeb.sendKeys('https://www.facebook.com/marina.lopuhova');
        pressAddWeb.click();
        citizenWeb2.sendKeys('https://ok.ru/profile/112233445566');
        pressAddWeb.click();
        citizenWeb3.sendKeys('https://vk.com/id112233445');
        description.sendKeys('Уборка листвы в парке - отличный вариант провести день на свежем воздухе в Минске всей семьей или компанией.');
        nextButt.click();

        let step = element(by.id('mat-step-label-0-2'));

        expect(step.getAttribute('aria-selected')).toEqual('true');
    });

    it('Возврат на первый шаг "Основная информация" если заполнены основные поля на втором шаге "Информация об организаторах"', () => {
        citizenName.sendKeys('Лопухова Марина');
        citizenPhone.sendKeys('292222222');
        citizenPost.sendKeys('marina@mail.ru');
        backButt.click();

        let step = element(by.id('mat-step-label-0-0'));

        expect(step.getAttribute('aria-selected')).toBe('true');
    });

    it('Возврат на первый шаг "Основная информация" если заполнены некоторые поля на втором шаге "Информация об организаторах"', () => {
        citizenName.sendKeys('Лопухова Марина');
        backButt.click();

        let step = element(by.id('mat-step-label-0-0'));

        expect(step.getAttribute('aria-selected')).toBe('true');
    });

    it('Возврат на первый шаг "Основная информация" если не заполнено ни одно поле на втором шаге "Информация об организаторах', () => {
        browser.sleep(1000);
        backButt.click();

        let step = element(by.id('mat-step-label-0-0'));

        expect(step.getAttribute('aria-selected')).toBe('true');
    });

    it('Переход организатором на вкладку "Я представитель организации"', () => {
        company.click();

        expect(company.getAttribute('aria-selected')).toBe('true');
    });

    it('Минимальное успешное заполнение второго шага "Информация об организаторах" организатором', () => {
        company.click();
        //browser.sleep(1000);
        companyName.sendKeys('ООО "Гринпис');
        companyPhone.sendKeys('291234567');
        companyPost.sendKeys('test@mail.ru');
        nextButt.click();

        let step = element(by.id('mat-step-label-0-2'));

        expect(step.getAttribute('aria-selected')).toEqual('true');
    });

    it('Успешное и полное заполнение второго шага "Информация об организаторах" организатором', () => {
        company.click();
        companyName.sendKeys('ООО "Гринпис');
        companyPhone.sendKeys('291234567');
        companyPost.sendKeys('test@mail.ru');
        companyWeb.sendKeys('vk.com/greenpeace');
        companyContact.sendKeys('Александр Григорьевич Иванов');
        descriptionCompany.sendKeys('Мы благотворительная организация, которая занимает защитой окружающей среды');
        nextButt.click();

        let step = element(by.id('mat-step-label-0-2'));

        expect(step.getAttribute('aria-selected')).toEqual('true');
    });

    it('Возврат на первый шаг "Основная информация" если организатором заполнены не все поля на втором шаге "Информация об организаторах"', () => {
        company.click();
        companyName.sendKeys('ООО "Гринпис');
        companyPhone.sendKeys('291234567');
        companyPost.sendKeys('test@mail.ru');
        backButt.click();

        let step = element(by.id('mat-step-label-0-0'));

        expect(step.getAttribute('aria-selected')).toBe('true');
    });

    it('Возврат на первый шаг "Основная информация" если организатором не заполнено ни одно поле на втором шаге "Информация об организаторах"', () => {
        company.click();
        browser.sleep(1000);
        backButt.click();

        let step = element(by.id('mat-step-label-0-0'));

        expect(step.getAttribute('aria-selected')).toBe('true');
    });

});