class homePages {
    /******************************************
       *  Case Register locators  *
       * ****************************************/


    emailinputbox = "//input[@id='signinSrEmail']"
    passwordinputbox="//input[@id='signupSrPassword']"
    loginbutton="//button[@id='signInBtn']"
    adminhomelogo= "//img[@class='navbar-brand-logo initial--36 onerror-image onerror-image']"



   Settingsbutton = "//a[@id='tourb-3']//span[contains(text(),'Settings')]"
   systemmodulesoptions = "//a[@id='tourb-3']//span[contains(text(),'Settings')]"
   Addnewmodule= "//a[@class='btn btn--primary']"
   modulenameinputbox = "//div[@id='default-form']//input[@placeholder='Ex: Grocery eCommerce Pharmacy etc.']"
   moduledescriptioninputbox = '//div[@id="cke_1_contents"]'
   moduleradiobutton = "//div[@class='module-radio-group']//input[@name='module_type']"
   moduleiconupload = '//*[@id="viewer"]'
   Modulethambnailupload = '//*[@id="viewer2"]'
   addmodulebutton = "//button[@type='submit']"
}
export default homePages;