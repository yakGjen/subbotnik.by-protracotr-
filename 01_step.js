describe('Переход к созданию страницы акции', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(true);
    });

    it('Переход с главной страницы', () => {

        browser.get('https://dvdmitry.github.io/subotnik/main');
        element(by.className('mat-button')).click();

        let step = element(by.id('mat-step-label-0-0'));
    
        expect(step.getAttribute('aria-selected')).toEqual('true');

    });

    it('Прямой переход по ссылке c определением первого шага', () => {

        browser.get('https://dvdmitry.github.io/subotnik/create-event-page');

        let step = element(by.id('mat-step-label-0-0'));
    
        expect(step.getAttribute('aria-selected')).toEqual('true');

    });

});