import LabelPurchase from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('Inner Label Purchase', () => {

    const lP = new LabelPurchase();
    const utilities = new Utilities();
  
   

        before('OPen the app', async () => {
            await browser.url(utilities.Signin_URL);
            await browser.maximizeWindow();
            // browser.setWindowSize(320, 568); 
            await utilities.Signin();
            await browser.pause(5000);

        })
    
//--------------------------------- Destination Address -------------------------

        it('Destination Address Field', async () => {

            

            await lP.firstNameDestination.setValue("Tamim");
            await lP.lastNameDestination.setValue("Buiyan");
            await lP.companyNameDestination.setValue("Ship Simple");

            const valueCounty = await lP.selectCountryDestination.getValue();
            
            
            await lP.selectCountryDestination.selectByIndex(1);
            await lP.clickSelectStreetDestination.setValue("4 Brant Rd");
            await browser.pause(7000);

            await lP.selectStreetDestination.click();
            await browser.pause(4000);

            await lP.unitNumberDestination.setValue("40");
            await lP.phoneNumberDestination.setValue("4079472341");
            await lP.emailDestination.setValue("tamim@yopmail.com");
            await lP.orderDestination.setValue("13111");
            await lP.invoiceDestination.setValue("13111");
            await lP.residenceAddresDestination.click();
        
            await browser.pause(5000);
            await lP.nextButtonDestination.click();
            await browser.pause(7000);

        

        }) 

    //--------------------------------- Lets Build Your Shipment -------------------------


        it('Lets Build Your Shipment', async () => {

            await lP.lengthPercel.setValue("12");
            await lP.widthPercel.setValue("6");
            await lP.heightPercel.setValue("10");
            await lP.weightPercel.setValue("11");
            await lP.weightMeasurePercel.click();
            await lP.shipmentProtection.click();
            await lP.valueOfShipmentProtection.setValue("100");
            await lP.signatureCheck.click();
            await lP.nextButtonBuilderShipment.click();
            await browser.pause(7000);

            

        })


    //--------------------------------- Select A Courier -------------------------
    

        it('Select a courier', async () => {

            await browser.pause(7000);


            
        // if (expect(lP.seeMoreCourierButton).toHaveValueContaining('View More')) {

        //     await lP.seeMoreCourierButton.click();

        // }



            await browser.pause(3000);
            await lP.selectACourier.click();
            await browser.pause(7000);
            await lP.courierButtonNext.click();

            await browser.pause(7000);

            

        })


 //------------------------------------------ Review & Confirm ----------------------------------

        it('Review & Confirm', async () => {

            await lP.confirmInformation.click();
            await lP.labelPurchaseButton.click();
            await browser.pause(5000); 

        })

 //------------------------------------------ Label Print & Download ----------------------------------

        it('Label Print & Download', async () => {

            await lP.downloadLabel.click();
            await browser.pause(5000);
            await lP.printLabel.click();
            await browser.pause(5000); 

        })



         //------------------------------------------  Label print and Download Done Inner Country----------------------------------

    it(' Label print and Download Done Inner Country', async () => {

        await browser.pause(2000);
        await lP.done.click();
        await browser.takeScreenshot();
        await browser.pause(2000);
        console.log("\n=======================================================================================\n");
        console.log("----------------------------"+" Label print and Download Done Inner Country"+"------------------------------\n");
        console.log("=======================================================================================\n");
    
   


})

   
  

    


})