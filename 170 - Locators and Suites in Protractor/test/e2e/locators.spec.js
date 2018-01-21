var IndexPage = require('./IndexPage');

describe("hello-protractor", function () {

    var page = new IndexPage();

    beforeEach(function () {
        page.get();
    });

    describe("list behavior", function () {
        it("First item should be Ben", function () {
            expect(element.all(by.binding('item.name')).first().getText()).toBe('Ben');
        });

        it("Third item should be Sophi", function () {
            expect(element(by.css('.list')).all(by.tagName('li')).get(2).getText()).toBe('Sophi');
        });

        it("Fifth item should be Henry", function () {
            expect(element(by.repeater('item in items').row(4).column('{{ item.name }}')).getText()).toBe('Henry');
        });

        it("Item text color should change when clicked", function () {
	        var listItems = element(by.css('.list')).all(by.tagName('li'));
	        var ben = listItems.first();
            var sophi = listItems.get(2);
            sophi.click();

            expect(sophi.getAttribute('class')).toMatch('selected');
            expect(ben.getAttribute('class')).not.toMatch('selected');
        });
    });
});
