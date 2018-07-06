describe('Selection of Animals for Adaption',function(){

    var ExpectedAnimalItem='Simba the Lion';
    beforeEach(async function(){
        await browser.get("http://www.thetestroom.com/jswebapp/index.html");
        await element(by.buttonText('CONTINUE')).click();
    })

    xit('Verify Animal Selection Page Title',async function(){
        var ExpectedAnimalSelectionPageTitle='Zoo Adoption | Select your Animal';
        await browser.getTitle().then(async function(titleText){
            await console.log("Actual Title text:"+titleText);
            await expect(titleText).toEqual(ExpectedAnimalSelectionPageTitle);
        });
    });

    /**********************************************************************************************************
     * Iterating through <Select> using concept of 'filter(function)' and return <item>.getText()
     * getText() or getTitle - All these returns 'promise' in Protractor which needs to resolved by
     * .then(function(){}); by console.log() or expect()
     **********************************************************************************************************/

    xit('Verify Number of Animals Categories available for Selection using Filter(function)',async function(){
        var SelectionList=element.all(by.xpath("//select[@ng-model='animal']/option"));
        await SelectionList.then(async function(selectionitems){
            await console.log("Number of Items in Animal Selection dropdown:"+selectionitems.length);
        });
        await SelectionList.filter(async function(iteratelist){
            return iteratelist.getText().then(async function(eachItemText){
                await console.log("Items in DropDown:"+eachItemText);
            });
        });
    });

     /**********************************************************************************************************
     * Iterating through <Select> using concept of 'for loop'
     * getText() or getTitle - All these returns 'promise' in Protractor which needs to resolved by
     * .then(function(){}); by console.log() or expect()
     **********************************************************************************************************/   
    xit('Verify Number of Animals Categories available for Selection using For Loop and get(int)',async function(){
        var SelectItemList=element.all(by.xpath("//select[@ng-model='animal']/option"));
        await SelectItemList.then(async function(items){
            await console.log("Number of Items in Animal Selection dropdown:"+items.length);
            for(var i=0;i<items.length;++i)
            {
                await SelectItemList.get(i).getText().then(async function(SelectEachItems){
                    await console.log("Items Text in the Dropdown List:"+SelectEachItems);
                    
                });
            }
        });
    });

    it('Click on Item for Selection',async function(){
        var DropDownItemList=element.all(by.xpath("//select[@ng-model='animal']/option"));
        await DropDownItemList.then(async function(DropDownItems)
            {
                for(var j=0;j<DropDownItems.length;++j)
                {
                    await DropDownItemList.get(j).getText().then(async function(eachitem){
                        if(eachitem==ExpectedAnimalItem)
                        {
                            await DropDownItemList.get(j).click();
                        }
                    });
                }
            });
    });
});