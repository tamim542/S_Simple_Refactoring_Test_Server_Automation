import GLSCourier from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('GLS Courier Do not Show', () => {

    const GLSC = new GLSCourier();
    const utilities = new Utilities();
    let provinceName;


    before('Open the app', async () => {
        await browser.url(utilities.Signin_URL);
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    //--------------------------------- Destination Address -------------------------

    it('Destination Address Field', async () => {



        await GLSC.firstNameDestination.setValue("Tamim");
        await GLSC.lastNameDestination.setValue("Buiyan");
        await GLSC.companyNameDestination.setValue("Ship Simple");

        const valueCounty = await GLSC.selectCountryDestination.getValue();


        await GLSC.selectCountryDestination.selectByIndex(1);
        await GLSC.clickSelectStreetDestination.setValue("1-58 Glendale Ave St Catharines ON L2T2J3 CA");
        await browser.pause(7000);

        await GLSC.selectStreetDestination.click();
        await browser.pause(4000);

        await GLSC.unitNumberDestination.setValue("40");
        await GLSC.phoneNumberDestination.setValue("4079472341");
        await GLSC.emailDestination.setValue("tamim@yopmail.com");
        await GLSC.orderDestination.setValue("13111");
        await GLSC.invoiceDestination.setValue("13111");
        await GLSC.residenceAddresDestination.click();

        await browser.pause(5000);




        provinceName = await GLSC.provinceDestination.getValue();
        console.log("============provinceName================", provinceName);


        await browser.pause(5000);
        await GLSC.nextButtonDestination.click();
        await browser.pause(5000);


        // await utilities.SuggestEnterAddress();

        // if (expect(GLSC.suggestAddress).toHaveValueContaining('Use Entered Address')) {

        //     await GLSC.suggestAddress.click();

        // }

        await browser.pause(7000);



    })

    //--------------------------------- Lets Build Your Shipment -------------------------


    it('Lets Build Your Shipment', async () => {

        await GLSC.lengthPercel.setValue("12");
        await GLSC.widthPercel.setValue("6");
        await GLSC.heightPercel.setValue("10");
        await GLSC.weightPercel.setValue("11");
        await GLSC.weightMeasurePercel.click();
        await GLSC.shipmentProtection.click();
        await GLSC.valueOfShipmentProtection.setValue("100");
        await GLSC.nextButtonBuilderShipment.click();
        await browser.pause(14000);



    })


    //--------------------------------- Select A Courier -------------------------


    it('Select a courier', async () => {

        if (provinceName == 'AB' || provinceName == 'BC' || provinceName == 'MB' || provinceName == 'SK') {

            await expect(GLSC.GLSCourier).toHaveValueContaining('GDR');
            const gls = await GLSC.GLSCourier.getText();
            console.log("============GDR================", gls);

            await expect(gls).not.toBeDisplayed();

        }


        // await browser.pause(7000);
        await GLSC.selectACourier.click();
        await browser.pause(7000);
        await GLSC.courierButtonNext.click();

        await browser.pause(7000);



    })


    // ------------------------------------------ Review & Confirm ----------------------------------

    it('Review & Confirm', async () => {

        await GLSC.confirmInformation.click();
        await GLSC.labelPurchaseButton.click();
        await browser.pause(5000);

    })

    //------------------------------------------ Label Print & Download ----------------------------------

    it('Label Print & Download', async () => {

        await GLSC.downloadLabel.click();
        await browser.pause(5000);
        await GLSC.printLabel.click();
        await browser.pause(5000);

    })



 //------------------------------------------  Label print and Download Done Not Show GLS----------------------------------

 it(' Label print and Download Done Not Show GLS', async () => {

    await browser.pause(2000);
    await GLSC.done.click();
    await browser.takeScreenshot();
    await browser.pause(2000);
    console.log("\n=======================================================================================\n");
    console.log("----------------------------"+" Label print and Download Done Not Show GLS"+"------------------------------\n");
    console.log("=======================================================================================\n");




})




})