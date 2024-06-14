function Notice(text, url, ispublic, start, expiry, iskiosk)
{
this.text = text;
this.url = url;
this.ispublic = ispublic;
this.start = start;
this.expiry = expiry;
this.iskiosk = iskiosk;
}
numberofnotices=2;
notices = new Array(numberofnotices);
// Notice numbers must start at zero,  and be sequential "numberofnotices" must = Actual number of notices
//  Dates should be  (no spaces)   YYYYMMDDHHMMSS  - use 24 hour clock
//Online banking

// Rewards MAINTENANCE
notices[0] =  new Notice("Maintenance to affect Avion Rewards","/onlinebanking/bankingusertips/notices/maint/Rewards.html",true,"20230201110000","20230202090000",true);

notices[1] =  new Notice("Technical issues affecting RBC Online Banking","/onlinebanking/bankingusertips/notices/techissues/OLBPopupSignIn.html",true,"20230131110000","20230202110000",true);

//notices[1] =  new Notice("Maintenance to affect RBC Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20230131110000","20230201080000",true);


//WEEKEND MAINTENANCE  
//notices[0] =  new Notice("Weekend maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekly.html",true,"20230120110000","20230122113000",true);


//  RBC Rewards  tech issues
//notices[0] =  new Notice("Technical issues affecting Avion Rewards" , "/onlinebanking/bankingusertips/notices/techissues/RBCRewards.html",true,"20230127110000","20230130080000",true);


// Technical issues with credit cards
//notices[0] =  new Notice("Technical issues with credit cards","/onlinebanking/bankingusertips/notices/techissues/CreditCards3.html",true,"20230127110000","20230130110000",true);

//Maintence Transfer Funds
//notices[0] =  new Notice("Maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/TransferFunds.html",true,"20230127110000","20230128080000",true);


 //  NOMI  maintenance
//notices[0] =  new Notice("Maintenance to affect NOMI" , "/onlinebanking/bankingusertips/notices/maint/Nomi_Budget.html",true,"20230119120000","20230120080000",true);

// OLB/Rewards Signin MAINTENANCE  
//notices[0] =  new Notice("Maintenance to affect Online Banking/Avion Rewards","/onlinebanking/bankingusertips/notices/maint/OnlineBanking.html",true,"20230116120000","20230117080000",true);

// WEEKday  MAINTENANCE  interac
//notices[0] =  new Notice("Maintenance to affect Online Banking/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Interac.html",true,"20230111100000","20230112080000",true);


//  Interac etransfer technical issues 
//notices[0] =  new Notice("Technical issues with Interac eTransfer","/onlinebanking/bankingusertips/notices/techissues/interac_e_transfer_out.html",true,"20230107000000","20230109000000",true);



//  RBC Rewards maintenance BestBuy
//notices[0] =  new Notice("Maintenance to affect Best Buy catalogue in Avion Rewards" , "/onlinebanking/bankingusertips/notices/maint/BestBuyMaint.html",true,"20221223110000","20221224230000",true);


//  IMPORTANT: MARKET CLOSURE; DECEMBER 24-27, 2022
//notices[1] =  new Notice("IMPORTANT: MARKET CLOSURE; DECEMBER 24-27, 2022","/onlinebanking/bankingusertips/notices/maint/Weekly.html",true,"20221222150000","20221228150000",true);

//  technical issues 
//notices[0] =  new Notice("Technical issues with Online Banking and Mobile Banking","/onlinebanking/bankingusertips/notices/techissues/CreditCards3.html",true,"20221212120000","20221213190000",true);

// Rewards MAINTENANCE
//notices[1] =  new Notice("Maintenance to affect Avion Rewards","/onlinebanking/bankingusertips/notices/maint/Rewards.html",true,"20221212120000","20221213080000",true);


//  RBC Rewards  tech issues
//notices[0] =  new Notice("Technical issues affecting Avion Rewards" , "/onlinebanking/bankingusertips/notices/techissues/RBCRewards.html",true,"20221129120000","20221201080000",true);


//notices[1] =  new Notice("Duplication of debit card transactions in Online and Mobile Banking","/onlinebanking/bankingusertips/notices/techissues/OLBTransaction.html",true,"20221129120000","20221201080000",true);




 //WEEKEND MAINTENANCE  
 

//notices[1] =  new Notice("Maintenance to affect Avion Rewards","/onlinebanking/bankingusertips/notices/maint/Rewards.html",true,"20221129120000","20221131073000",true);

//  RBC Rewards  maintenance
//notices[0] =  new Notice("Maintenance to affect Best Buy catalogue in Avion Rewards" , "/onlinebanking/bankingusertips/notices/maint/RBCRewards_BestBuy.html",true,"20221117120000","20221118080000",true);




// WEEKday  MAINTENANCE  interac
//notices[0] =  new Notice("Maintenance to affect Online Banking/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Interac.html",true,"20221116120000","20221117080000",true);


//  RBC Rewards  tech issues
//notices[0] =  new Notice("Technical issues affecting Avion Rewards" , "/onlinebanking/bankingusertips/notices/techissues/RBCRewards2.html",true,"20221108120000","20221109080000",true);

//Avion Rewards Maintenance
//notices[0] =  new Notice("Maintenance to affect Avion Rewards","/onlinebanking/bankingusertips/notices/maint/RBCRewardsWeb_App.html",true,"20221108120000","20221109080000",true);



//Online Banking and Avion rewards tech issues
//notices[0] =  new Notice("Technical issues accessing RBC Online Banking and Avion Rewards website","/onlinebanking/bankingusertips/notices/techissues/RBCRewardsAccess.html",true,"2021101120000","20221106080000",true);

//  RBC Rewards  tech issues
//notices[0] =  new Notice("Technical issues affecting Avion Rewards" , "/onlinebanking/bankingusertips/notices/techissues/RBCRewards.html",true,"20220513090000","20221108160000",true);


// Nomi Maintenance
//notices[1] =  new Notice("Maintenance to affect Nomi","/onlinebanking/bankingusertips/notices/maint/Nomi.html",true,"20221101100000","20221102080000",true);

//Offers Maintenance
//notices[2] =  new Notice("Maintenance to affect Avion Rewards","/onlinebanking/bankingusertips/notices/maint/RBCRewardsWeb_App.html",true,"2021101120000","20221103080000",true);





//  Technical Issues with Interac services
//notices[0] =  new Notice("Technical issues affecting Interac services","/onlinebanking/bankingusertips/notices/techissues/Interac.html",true,"20221023230000","20221025080000",true);


//Maintenance Offers
//notices[0] =  new Notice("Maintenance to affect RBC Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20221024100000","20221025020000",true);

//  2 factor ID issues 
//notices[0] =  new Notice("Technical issues affecting 2 factor Authentication" , "/onlinebanking/bankingusertips/notices/techissues/MFA.html",true,"20221205100000","20221207230000",true);


// WEEKEND MAINTENANCE  
//notices[0] =  new Notice("Weekend maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekly.html",true,"20221021100000","20221023090000",true);



//Avion Rewards Maintenance
//notices[2] =  new Notice("Maintenance to affect Avion Rewards","/onlinebanking/bankingusertips/notices/maint/RBCRewardsWeb_App.html",true,"20221006100000","20221007070000",true);



// *******************************************************

//RBC Rewards maintenance Aug 26 - 29
//notices[1] =  new Notice("Maintenance to affect RBC Rewards","/onlinebanking/bankingusertips/notices/maint/Rewards2.html",true,"20220826100000","20220829080000",true);



//  Direct Investing Tech Issues
//notices[1] =  new Notice("Technical issues affecting access to Direct Investing Mobile app","/onlinebanking/bankingusertips/notices/techissues/di-out.html",true,"20220725000000","20220726080000",true);



//Offers Maintenance
//notices[0] =  new Notice("Maintenance to affect RBC Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20220714120000","20220715070000",true);


//  Technical Issues with Interac services
//notices[0] =  new Notice("Technical issues affecting RBC Online Banking","/onlinebanking/bankingusertips/notices/techissues/Rogers.html",true,"20220708050000","20220711230000",true);



//  Technical Issues with Interac services
//notices[1] =  new Notice("Technical issues affecting Interac services","/onlinebanking/bankingusertips/notices/techissues/Interac.html",true,"20220708050000","20220711230000",true);

//Offers Maintenance
//notices[0] =  new Notice("Maintenance to affect RBC Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20220602100000","20220603070000",true);



//  RBC Rewards  tech issues
//notices[0] =  new Notice("Technical issues accessing RBC Rewards" , "/onlinebanking/bankingusertips/notices/techissues/RBCRewardsAccess.html",true,"20220513090000","20220517110000",true);




// WEEKDAY MAINTENANCE   Mobile April 29-30
//notices[0] =  new Notice("Weekend maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20220427100000","20220430083000",true);


//  RBC Rewards  tech issues
//notices[0] =  new Notice("Technical issues accessing RBC Rewards" , "/onlinebanking/bankingusertips/notices/techissues/RBCRewardsAccess.html",true,"20220506090000","20220509110000",true);




 //  NOMI  maintenance
//notices[1] =  new Notice("Maintenance to affect NOMI" , "/onlinebanking/bankingusertips/notices/maint/Nomi.html",true,"20220412120000","20220413020000",true);





//  technical issues -- 
//notices[1] =  new Notice("Technical issues with Online Banking and Mobile Banking","/onlinebanking/bankingusertips/notices/techissues/OnlineBanking.html",true,"20220409000000","20220409160000",true);

//RBC Rewards maintenance May 27-31
//notices[1] =  new Notice("Maintenance to affect RBC Rewards","/onlinebanking/bankingusertips/notices/maint/Rewards2.html",true,"20220527100000","20220531070000",true);



//  Apple Pay   maintenance
//notices[0] =  new Notice("Maintenance on Apple Pay ","/onlinebanking/bankingusertips/notices/maint/ApplePay.html",true,"20220407105000","20220408110000",true);

// Petro maintenance 
//notices[0] =  new Notice("Maintenance to affect Linking Petro-Canada","/onlinebanking/bankingusertips/notices/maint/PetroPoints.html",true,"20220405120000","20220406040000",true);

// Appointment booking issues
//notices[1] =  new Notice("Technical issues affecting appointment booking", "/onlinebanking/bankingusertips/notices/techissues/Appointment.html",true,"20220405110000","20220406120000",true);





//  RBC Rewards  maintenance  March 24-25
//notices[0] =  new Notice("Maintenance to affect RBC Rewards" , "/onlinebanking/bankingusertips/notices/maint/RBCRewards_emall.html",true,"20220324160000","20220325030000",true);



//  technical issues 
//notices[0] =  new Notice("Technical issues with Online Banking and Mobile Banking","/onlinebanking/bankingusertips/notices/techissues/CreditCards3.html",true,"20220626000000","20220627190000",true);

// mobile Maintenance DoorDash
//notices[2] =  new Notice("Maintenance to Affect DoorDash Offers","/onlinebanking/bankingusertips/notices/maint/DoorDash.html",true,"20220317110000","20220317220000",true);






//  technical issues -- Mortgage Renewal
//notices[1] =  new Notice("Technical issues affecting online mortgage renewal ","/onlinebanking/bankingusertips/notices/techissues/MFT.html",true,"20220603000000","20220604120000",true);


//Alert Maintenance
//notices[1] =  new Notice("Maintenance to affect Credit Card Alerts preferences","/onlinebanking/bankingusertips/notices/maint/Alerts.html",true,"20220224080000","20220304120000",true);




// technical issues RBC REWERDS 
//notices[0] =  new Notice("Technical issues affecting RBC Rewards","/onlinebanking/bankingusertips/notices/techissues/RBCRewards3.html",true,"20220105090000","20220110150000",true);


//  RBC Rewards  British Columbia and Newfoundland
//notices[1] =  new Notice("Servicing Update: Coronavirus and B.C./Newfoundland road closures" , "/onlinebanking/bankingusertips/notices/techissues/RedeemRewards_SpecialAdvisory.html",true,"20211123090000","2022111904000",true);

//Statements Issues
//notices[0] =  new Notice("Technical issues affecting access to eStatements","/onlinebanking/bankingusertips/notices/techissues/estatements.html",true,"20220531000000","20220601120000",true);




// Interac E-trasnfer maintenance
//notices[0] =  new Notice("Maintenance to affect Interac e-Transfer services","/onlinebanking/bankingusertips/notices/maint/Interac.html",true,"20211206120000","20211207080000",true);


//  NOMI  maintenance
//notices[0] =  new Notice("Maintenance to affect NOMI" , "/onlinebanking/bankingusertips/notices/maint/Nomi.html",true,"20211221120000","2021122201000",true);





// Petro maintenance 
//notices[1] =  new Notice("Maintenance to affect Petro-Points ","/onlinebanking/bankingusertips/notices/maint/PetroPoints.html",true,"20211118090000","20211118220000",true);



// WEEKday  MAINTENANCE  
//notices[0] =  new Notice("Maintenance to affect Online Banking/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20211027080000","20211028080100",true);




//  Monday Maintenance RBC Rewards  maintenance
//notices[1] =  new Notice("Scheduled maintenance to affect RBC Rewards and RBC Mobile banking" , "/onlinebanking/bankingusertips/notices/maint/Rewards3.html",true,"20210912120000","20210913100000",true);

//OFFERS issues
//notices[0] =  new Notice("Technical issues with RBC Offers","/onlinebanking/bankingusertips/notices/techissues/RBCOffers.html",true,"20210901000001","20210902100000",true);

// WEEKday  MAINTENANCE  
//notices[0] =  new Notice("Short Service Disruption for ATM Usage, Debit and Credit Card Purchases","/onlinebanking/bankingusertips/notices/maint/Debit_Credit_Card_Maintenance.html",true,"20210811100000","20210812070100",true);






// tech issues Caribbean dollar payments
//notices[1] =  new Notice("Technical issues affecting payments in East Caribbean Dollars","/onlinebanking/bankingusertips/notices/techissues/Wires_Cbb.html",true,"20210415110000","20210930113000",true);

// tech issues Account Open
//notices[0] =  new Notice("Technical issues affecting online account open","/onlinebanking/bankingusertips/notices/maint/AccountInfo.html",true,"20211104000000","2021105093000",true);


// rewards issue
//notices[1] =  new Notice("Technical issues affecting access to RBC Rewards","/onlinebanking/bankingusertips/notices/techissues/RewardsDown_BBuy.html",true,"20211020000000","20211021230000",true);


// WEEKday  MAINTENANCE  
//notices[1] =  new Notice("Weekday maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20210502100000","20210503110000",true);

//Offers Maintenance
//notices[1] =  new Notice("Maintenance to affect Avion Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20221206000000","20221207023000",true);


//notices[1] =  new Notice("Please use the RBC Mobile app – Technical issues with RBC Direct Investing Online","/onlinebanking/bankingusertips/notices/techissues/DI-OL-Down.html",true,"20200511000000","20200512080000",true);
 



// IMT and Wires
//notices[2] =  new Notice("Technical issues with International Money Transfers and Wire Payments","/onlinebanking/bankingusertips/notices/techissues/IMTWires.html",true,"20210426000000","20210509000000",true);









//  RBC Rewards  maintenance
//notices[0] =  new Notice("Maintenance to affect RBC Rewards Online and Mobile" , "/onlinebanking/bankingusertips/notices/maint/RBCRewards_BestBuy.html",true,"20211223120000","2021122421000",true);

// technical issues /Mobile Banking working May 6
//notices[0] =  new Notice("Temporary issues when accessing some RBC Online services" ,"/onlinebanking/bankingusertips/notices/techissues/OLBandMobileTemp.html",true,"20210506000000","20210507000000",true);

// DI MAINTENANCE
//notices[0] =  new Notice("Please note: Problems logging into RBC Direct Investing through RBC Mobile" ,"/onlinebanking/bankingusertips/notices/maint/DI-Maintenance.html",true,"20210201070000","20210202090000",true);

//  RBC Rewards  maintenance
//notices[0] =  new Notice("Maintenance to affect RBC Direct Investing Online and Mobile " , "/onlinebanking/bankingusertips/notices/maint/RBCRewardsWeb_App.html",true,"20210128070000","2021020207000",true);



//Offers Maintenance
//notices[0] =  new Notice("Maintenance to affect RBC Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20210302090000","20210303040000",true);






// WEEKDAY MAINTENANCE  
//notices[0] =  new Notice("Weekend maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20210115120000","20210117093000",true);





//WEEKDAY
//notices[0] =  new Notice("Weekday maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20201105000000","20201106070000",true);

//  rbc Offers MAINTENANCE   Jan 27
//notices[0] =  new Notice("Maintenance to affect RBC Offers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20201208110000","20201209013000",true);




//  INTERAC SMS  issues   Dec 10

//notices[0] =  new Notice("Delays with receiving Interac transfers via text messages","/onlinebanking/bankingusertips/notices/techissues/SMSInterac.html",true,"20201210090000","20201211113000",true);



// technical issues online banking
//notices[2] =  new Notice("Technical issues with Online Banking","/onlinebanking/bankingusertips/notices/techissues/OLB.html",true,"20220423000000","20220423230000",true);



// Maintenance to Affect Rewards Web and Mobile 27  Black Friday Cyber Monday
//notices[0] =  new Notice("Gift Card Purchases in RBC Rewards","/onlinebanking/bankingusertips/notices/maint/RBCRewardsGiftCards.html",true,"20201116120000","20201117063000",true);




//  telephony Issues to AC

// notices[0] =  new Notice("Technical issues with the RBC Advice Centres","/onlinebanking/bankingusertips/notices/techissues/TelephonyIssues.html",true,"20200921040000","20200922010000",true);


  




//  Access to OLB Mobile issues
//notices[2] =  new Notice("Technical issues affecting Online Banking and Mobile Banking","/onlinebanking/bankingusertips/notices/techissues/OLBandMobileTemp.html",true,"20200615000000","20200615000000",true);





//  Technical Issues with Interac services
//notices[1] =  new Notice("Technical issues affecting Interac services","/onlinebanking/bankingusertips/notices/techissues/IET.html",true,"20220415080000","20220415230000",true);



//  Mobile Issues  - Slowness  
//notices[6] =  new Notice("Technical issues affecting RBC Mobile Banking and MyOffers","/onlinebanking/bankingusertips/notices/maint/RBCOffers.html",true,"20191212050000","20191215090000",true);







//FCOO Brazilian Currency
//notices[9] =  new Notice("IMPORTANT: Foreign Currency","/onlinebanking/bankingusertips/notices/maint/FCOO.html",true,"20200218000000","20200530000000",true);

//notices[5] =  new Notice("Be aware of email and text scams","/onlinebanking/bankingusertips/notices/Notice_Phishing.html",true,"20170324150000","20170407110000",true);

//notices[6] =  new Notice("iOS Update to the RBC Canada App for iPad","/onlinebanking/bankingusertips/notices/Int_ipad.html",true,"20170418070000","20170601000000",true);

//notices[7] =  new Notice("Delays with receiving text messages","/onlinebanking/bankingusertips/notices/techissues/SMS.html",true,"20190716150000","20190716160000",true);

//notices[8] =  new Notice("Monday, March 25 maintenance to affect Online/Mobile Banking","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20190324080000","20190325060000",true);

// estatements issues
//notices[1] =  new Notice("Technical issues affecting access to eStatements","/onlinebanking/bankingusertips/notices/techissues/estatements.html",true,"20201206000000","20201207120000",true);

// Debit Card Maintenance    COLT 
//notices[10] =  new Notice("Maintenance to Affect Debit Transactions and Account Balances","/onlinebanking/bankingusertips/notices/maint/DebitMaintence.html",true,"20190509120000","20190510050000",true);



// EPOST 
//notices[12] =  new Notice("Maintenance to affect RBC eBills service","/onlinebanking/bankingusertips/notices/maint/ePost.html",true,"20191008140000","20191008080000",true);





// Interac maintenance  
//notices[1] =  new Notice("Maintenance to affect Interac services","/onlinebanking/bankingusertips/notices/maint/Interac.html",true,"20200625000000","20200626030000",true);

// Cheque Pro Maintenance
//notices[0] =  new Notice("Maintenance to affect Cheque-Pro","/onlinebanking/bankingusertips/notices/maint/ChequePro.html",true,"202011040000000","2020110507000",true);

// WEEKDAY Maintenance
//notices[17] =  new Notice("Maintenance to affect Online/Mobile Banking October 9","/onlinebanking/bankingusertips/notices/maint/Weekday.html",true,"20191008120000","20191008080000",true);





