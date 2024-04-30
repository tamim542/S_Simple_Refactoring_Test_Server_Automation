import QuickQuoteLoomis from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Quick Quote Domestic shipment Two', () => {

    const qQL = new QuickQuoteLoomis();
    const utilities = new Utilities();



    before('OPen the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Quick Quote  Loomis-------------------------

    it('Quick Quote for Domestic shipment two', async () => {


        await qQL.quickQuoteClick.click();
        await browser.pause(5000);


    })


    //--------------------------------- Quick Quote Origin Destination address  Loomis-------------------------

    it('Quick Quote Origin Destination postal code province country address for Domestic shipment two', async () => {


        await qQL.originPostalCode.setValue("T5Y 2W1");
        await browser.pause(3000);
        await qQL.originPostalCodeSelect.click(); 

        await qQL.destinationPostalCode.setValue("N3L 3E1");
        await browser.pause(3000);
        await qQL.destinationPostalCodeSelect.click();

        await qQL.whatyouSendSelect.selectByIndex(1);
        await qQL.lengthDimensions.setValue(34);
        await qQL.widthDimensions.setValue(34);
        await qQL.heightDimensions.setValue(34);
        await qQL.weightDimensions.setValue(34);
        await qQL.getQuoteButton.click();
        await browser.pause(2000);
        await qQL.getNewQuoteScroll.waitForDisplayed();
        await qQL.getNewQuoteScroll.scrollIntoView();
        await qQL.completeThisShipmetButton.click();
        await browser.pause(5000);


    })


    //---------------------------------Quick Quote Origin address  Loomis-------------------------


    it('Quick Quote Origin  address for Domestic shipment two', async () => {


        await qQL.originFirstName.setValue("Tamim");
        await browser.pause(3000);
        await qQL.originLastName.setValue("Bhuiyan");
        await qQL.originCompanyName.setValue("Toto Company");
        await browser.pause(3000);

        await qQL.originStreetAddress.setValue("5904 153 Ave NW");
        await qQL.originStreetAddressSelect.click();
       
        await qQL.originUnitNumber.setValue("6");
        await qQL.originPhoneNumber.setValue("3473473947");
        await qQL.originOrderReference.setValue("19");
        await qQL.originNextButton.click();
        await browser.pause(5000);

        


    })



    //---------------------------------Quick Quote Destination Address Loomis-------------------------

    it(' Quick Quote Destination Address for Domestic shipment two', async () => {


        await utilities.QuickQuoteDestination();

        await qQL.clickSelectStreetDestination.setValue("4 Brant Rd");
        await browser.pause(5000);

        await qQL.selectStreetDestination.click();
        await browser.pause(4000);

        await qQL.nextButtonDestination.click();
        await browser.pause(5000);



    })


    //---------------------------------Quick Quote Let's your Build Shipment for Domestic shipment two-------------------------

    it('Quick Quote Lets your Build Shipment for Domestic shipment two', async () => {

        await qQL.originNextButtonBuild.click();



    })



    //---------------------------------Quick Quote Select for Domestic shipment two -------------------------


    it('Quick Quote From Select for Domestic shipment two', async () => {

        await browser.pause(7000);

        // await qQL.purolator_Xpresspost.click();
        await browser.pause(7000);
        await qQL.courierButtonNextAllCourier.click();
        await browser.pause(2000);


    })


    //------------------------------------------Quick Quote Review & Confirm for Domestic shipment two----------------------------------

    it('Quick Quote Review & Confirm for Domestic shipment two', async () => {


        await utilities.ReviewConfirm();

    })



    //------------------------------------------Quick Quote for Domestic shipment two Label Print & Download ----------------------------------

    it('Quick Quote Label Print & Download for Domestic shipment two', async () => {


        await utilities.LabelPrintDownload();


    })


     //------------------------------------------  Label print and Download Done Quick Quote for Domestic shipment two----------------------------------

     it(' Label print and Download Done Quick Quote for Domestic shipment two', async () => {

        await browser.pause(2000);
        await qQL.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Quick Quote for Domestic shipment two"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})






})