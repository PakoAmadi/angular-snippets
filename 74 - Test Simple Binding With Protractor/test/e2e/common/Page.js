function Page () {
  this.button = element(by.id('button1'));
  this.message = element(by.binding('messageText'));

  this.get = function () {
    browser.get('/#');
  };

  this.clickButtonOne = function () {
    this.button.click();
  };
}

module.exports = Page;