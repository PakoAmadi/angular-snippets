describe("hello-protractor", function () {

  describe("index", function () {
    it("should display the correct title", function () {
      browser.get('/#');
      expect(browser.getTitle()).toBe('hello protractor');
    });

    it("should display the message when button clicked", function () {
      var button = element(by.id('button1')),
        message = element(by.binding('messageText'));

      button.click();

      expect(message.getText()).toBe('button 1 clicked');
    });
  });
});