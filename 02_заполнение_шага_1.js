describe('Заполнение первого шага создания страницы акции', () => {

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('https://dvdmitry.github.io/subotnik/create-event-page');
  });

  let locality = element(by.id('actionPlace'));
  let placeGoogleMap = element(by.className('pac-item'));
  let eventName = element(by.id('mat-input-0'));
  let calendar = element(by.className('mat-icon-button'));
  let calendarDate = element(by.className('mat-calendar-body-today'));
  let startDate = element(by.id('mat-input-2'));
  let endDate = element(by.id('mat-input-3'));
  let nextButt = element(by.className('next-action'));
  let startTime = element(by.id('mat-input-2'));
  let endTime = element(by.id('mat-input-3'));
  let checkbox = element(by.className('mat-checkbox-inner-container'));
  let calendarList = $$('.mat-icon-button');

  it('Указание ближайшего населённого пункта', () => {
    locality.sendKeys('деревня Боровиковщина');

    browser.sleep(2000);

    placeGoogleMap.click();

    expect(element(by.className('sebm-google-map-container')).isPresent()).toBe(true);
  }, 70000);

  it('Успешное и полное заполнение первого шага создания страницы акции', () => {
    eventName.sendKeys('Уборка левого берега р. Ислочь');
    locality.sendKeys('деревня Боровиковщина');

    browser.sleep(1000);

    placeGoogleMap.click();
    calendar.click();
    calendarDate.click();
    startDate.sendKeys('09:00');
    endDate.sendKeys('18:00');
    nextButt.click();

    let step = element(by.id('mat-step-label-0-1'));

    expect(step.getAttribute('aria-selected')).toEqual('true');
  });

  it('Минимальное успешное заполнение первого шага создания страницы акции', () => {
    eventName.sendKeys('Субботник в Осмоловке');
    locality.sendKeys('деревня Осмоловка');

    browser.sleep(2000);

    placeGoogleMap.click();
    calendar.click();
    calendarDate.click();
    startTime.sendKeys('09:00');
    endTime.sendKeys('18:00');

    nextButt.click();

    let step = element(by.id('mat-step-label-0-1'));

    expect(step.getAttribute('aria-selected')).toEqual('true');
  });

  it('Переход к указанию периода проведения акции вместо точной даты и времени', () => {
    checkbox.click();
    startTime.sendKeys('09:00');
    endTime.sendKeys('18:00');

    expect(element(by.id('actionDate')).getText()).toBe('');
    expect(startTime.getText()).toBe('');
    expect(endTime.getText()).toBe('');
  }, 50000);

  it('Указание периода проведения акции вместо точной даты и времени', () => {
    eventName.sendKeys('Субботник в Осмоловке');
    locality.sendKeys('деревня Осмоловка');

    browser.sleep(2000);

    placeGoogleMap.click();
    checkbox.click();
    calendarList.get(1).click();
    calendarDate.click();
    calendarList.get(2).click();
    element(by.className('mat-calendar-body-active')).click();

    nextButt.click();

    let step = element(by.id('mat-step-label-0-1'));

    expect(step.getAttribute('aria-selected')).toEqual('true');
  }, 50000);
});