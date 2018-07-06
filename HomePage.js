describe('Home Page Events in Zoo Adaptation Website',function(){
    beforeEach(async function(){
        await browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });
    it('Get the HomePage Title',async function()
    {
       await browser.getTitle().then(async function(title){
           await console.log("Actual Title:"+title);
           await console.log("=== Assertion1 has started ===");
           await expect(title).toEqual('Zoo Adoption | Home');
           await console.log("=== Assertion1 has completed ===");
       });
    });

    it('Keying Data in the Text Field in HomePage',async function(){
        var TextItem='Hello India';
        await element(by.model('person.name')).sendKeys(TextItem);
        var DynamicText=element(by.binding('person.name')).getText();
        await DynamicText.then(async function(expectedtext){
            await console.log("Actual text:"+expectedtext);
            await console.log("=== Assertion2 has started ===");
            await expect(expectedtext).toEqual(TextItem);
            await console.log("=== Assertion2 has completed ===");
        });
    });

    it('Click on Continue',async function(){
        await element(by.buttonText('CONTINUE')).click();
        await console.log("Button is clicked");
    });
});