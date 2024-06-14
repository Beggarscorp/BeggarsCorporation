/**
 *  All client side content (error messages, confirmation messages, labels etc..) goes here.
 *
 */
var contextPath = "/onlinebanking"; 
var BMOContent = {
	
	/**
	 *  All form field error validation messages.
	 *
	 */
	validationMessages : {
		genericErrorMessage: "Please correct the highlighted fields below before continuing.",
		requiredField:"This field is required",
		invalidValue:"The value entered is not valid.",
		email: "The email address must be entered in the following format:  example@bmo.com",
		lettersOrNumbers:"Please enter only letters and numbers",
		invalidName:"Please enter only letters and numbers",
		dateNumber: "",
		dateMonth: "",
		dateMonthLess: "",
		dateDayless:"",
		amountNumber:"The amount may only contain numbers",
		amountNumberInvalid:"Enter only numbers and a decimal.",
		amountExceeds:"The amount needs to be between $[MIN] and $[MAX]",
		amountRangeInvalid:"The amount that you have entered is invalid. Please verify the amount and re-enter.",
		chequeNumbers:"",
		paymentNumber:"The value entered is not valid.",
		transerCrossCurrencyAmount:"The amount must be greater than $10.00 or less than $45,000.00 USD or equivalent.",
		denominationsNumbers:"",
		postalCode:"Please enter a valid postal code in the following format:  A1A1A1",
		telephoneNumbers:"",
		amountNumbers:"",
		numbersOnly:"Please enter only numbers",
		nickName:"The nickname you have entered is invalid.  Please try again.",
		name:"Please enter only letters",
		securityLength:"The Security Question must contain at least three letters and/or numbers and cannot contain a question mark.",
		securityAnswerLength:"The Security Response must contain at least three letters and/or numbers.",
		securityMatch:"Your Security Responses must match.",
		securityMatchQuestion:"The Security Response cannot be included in the Security Question. Please change your response and try again.",
		challengeLength:"Your challenge question must be between 2 and 30 characters",
		accountNumber:"Do not place any dashes or spaces when entering your account.",
		bankCardNumber:"Your bank card number must be exactly 10 digits in the box",
		coBankCardNumber:"Co-borrower Card Number is invalid. Please verify and re-enter.",
		guBankCardNumber:"Guarantor Card Number is invalid. Please verify and re-enter.",
		password:"Your password must be exactly 6 characters in length. Enter only letters and/or numbers.",
		currentPassword:"The current password must be 4-6 characters",
		passwordMatch:"Your passwords must match",
		personalPhrase:"Your personal phrase must be between 10 and 50 numbers and letters",
		regAnswer1:"Your answer must be between 2 and 30 numbers and letters",
		regAnswer2:"Your answer must be between 2 and 30 numbers and letters",
		regAnswer3:"Your answer must be between 2 and 30 numbers and letters",
		phoneNumber:"Please enter a valid phone number",
		securityResponse:"Security response is required.",
		securityResponseMatch:"The security responses you entered do not match. Please try again.",
		depositAccount:"Deposit To is required.",
		ILNBAccountNumber: "Please enter only letters or numbers",
		SFUserId: "Please enter only letters, numbers, @, dot, hyphen, and/or underscore without spaces.",
		ILAccountNumber: "The InvestorLine Account Number is invalid.",
		NBAccountNumber: "The Nesbitt Burns Account Number is invalid.",
		emtName: "The name field cannot contain any special characters other than a hyphen or a dash.",
		emtMemo: "The Message Field cannot contain any special characters (For Example: %, #, \\, {}, <>, [], &, \").",
		IRName: "The name field cannot contain any special characters other than a hyphen.",
		cardNickName: "The name field cannot contain any special characters other than an accent.",		
		address:"Please enter a valid street name",
		payeeName:"Please enter only letters and numbers.",
		payeeNotFound:"No Payee found",
		payeeTooShort:"Please enter at least three characters.",
		payeeAccountNumber:"Please enter a valid account number.",
		deletePayeeError:"You must select at least one payee to delete.",
		deleteFutureDatedPaymentError:"Please select the Future-dated bill payment you wish to delete.",
		cancelPaymentError:"You must select at least one payment to cancel.",
		epostMailerName:"Enter a Mailer Name",
		totalAmtExceeding:"The total amount you have entered exceeds the available funds on the MasterCard account.",
		removeBankCardMsg: "Please select a Bank Card to remove.",
		removeMasterCardMsg: "Please select a Credit Card to remove.",
		invalidDate: "The date entered is invalid.",	
		currencyTextboxFormat:"The value entered is not valid.",
		mechTransferAmountValidate:"The amount must be greater than $0.01",
		cbtAmountValidate:"The amount you wish to transfer is over the $25,000 USD limit. Please change the amount to less than $25,000.01 USD to proceed with the transfer online."
	},
	
	htmlText : {
		yes:"Yes",
		no:"No",
		cancel:"Cancel",
		edit:"Edit",
		deletetext:"Delete",
		save:"Save",
		areyousure:"Are you sure?",
		clearFilter:"Clear Filter"
	},

	etransferSearchFilterMessage : {
		firstLastName:"Enter first or last name"
	},
	etransferMessage : {
		updateProfileSuccess:"You have successfully updated your profile"
	},
	
	irSearchFilterMessage : {
		firstLastName:"Enter First or Last Name"
	},
	
	pageErrorMessages: {
		myShortcuts: {
			errorRemoving: "There was an error removing shortcuts: Lorem ipsum."
		}
	},
	messageCentreMessages: {		
		selectMessage: "Please select a message to delete."		
	},
	ePostMessageSelectMessages: {		
		selectMessage: "You must select at least one message."		
	},
	mortgageValidationMessages: {
		newAmountNumber: "Enter only numbers and a decimal",
		newAmountExceeds: "The New Amount needs to be between 0.01 and 99999999.99",
		percentNumber: "Please enter only numbers",
		percentExceeds: "The Percentage Increase needs to be between .1 and 20"
	},

	sbmcChangeAddressValidationMessages: {
		invalidHomePhone: "The home telephone number entered is invalid.  Please verify the number and re-enter.",
		invalidBusinessPhone: "The business telephone number is invalid. Please verify the number and re-enter.",
		invalidMobilePhone: "The cellular telephone number entered is invalid. Please verify the number and re-enter.",
		invalidAddress: "The address entered is invalid. Please verify the address and re-enter.",
		enterStreetNo: "Please enter your street number.",
		enterStreetName: "Please enter your street name.",
		enterCity: "Please enter your city.",
		enterProvince: "Please enter your province.",
		enterPostalCode: "Please enter your postal code."
	},
	
	/**
	 *  All tooltip messages
	 *
	 */
	tooltipMessages : {
		
		/**
		 *  Request Additional Cardholder / Authorized User 
		 *
		 */		
		requestAdditionalCardholderMessages : {		
		    ttBirthDate : "The minimum age for an authorized user is 13 years old"
		},			
		
		/**
		 *  eTransfer specific
		 *
		 */
		etransferMessages : {
			ttRecipientList: "<p>Don't see the name you want in the menu? Select \"New Recipient,\" enter the new contact information, and the new contact will be added to your recipient list.</p>",
			ttSentFrom: "<p>Your recipient will receive the transfer notification from this email address. </p><br/><p>You can only store one email address for your <em>Interac</em> e-Transfers. Changing your email address here will change the default address for <em>Interac</em> e-Transfers.</p>",
			ttAmountInCAD: "<strong><em>Interac</em>&reg; e-Transfer daily limit.</strong> <p>Send between $2,500.00 and [DOMAX] per 24 hours, [WOMAX] per seven days or [MOMAX] per 30 days providing these limits do not exceed the limits assigned to your BMO Debit Card.<br/><br/></p><p>Receive up to a maximum of [DIMAX] per 24 hours, [WIMAX] per seven days or [MIMAX] per 30 days.<br/><br/></p><p><em>Interac</em> e-Transfers must be a minimum [TMIN] and must be sent from a Canadian dollar account.</p>",
			ttAmountInCADBusiness: "<strong><em>Interac</em>&reg; e-Transfer daily limit.</strong> <p>Send between $2,500.00 and [DOMAX] per 24 hours, [WOMAX] per seven days or [MOMAX] per 30 days providing these limits do not exceed the limits assigned to your BMO Debit Card for Business.<br/><br/></p><p>Receive up to a maximum of [DIMAX] per 24 hours, [WIMAX] per seven days or [MIMAX] per 30 days.<br/><br/></p><p><em>Interac</em> e-Transfers must be a minimum [TMIN] and must be sent from a Canadian dollar account.</p>",
			ttAddMsg: "<p>This message is sent by email. Do not include confidential information or the response to your security question.</p>",
			ttSecQuestion: "<p>Do not use a question that is easy to guess the answer to such as \"What is my first name?\" Instead, use something that only you and your recipient would know such as \"Where did we first meet?\"</p>",
			ttSecQuestionBusiness: "<p>Do not use a question that is easy to guess the answer to such as \"What is the name of my Business?\" Instead, use something that only you and your recipient would know such as \"What is the reason for payment?\"</p>",
			ttSecResponse: "<strong>Follow these tips.</strong><p>Your response must be between three and 25 characters consisting of letters and/or numbers. It must not contain spaces or special characters.</p><br/><p>Your recipient will have three attempts to correctly answer the security question before the transfer is declined. You will receive an email notification that the <em>Interac</em>&reg; e-Transfer has not been processed.</p>",			
			ttAccntToCredit: "Using the drop-down menu, select the account you would like the funds to be deposited into.",
			ttChangeEmail: "If you change the email address of a recipient with pending <em>Interac</em>&reg; e-Transfers a copy of the original e-Transfer email notification will be sent to the new address.",
			ttFirstName: "The recipient name must match the identification used to pick up the Western Union Money Transfer.",
			ttLastName: "The recipient name must match the identification used to pick up the Western Union Money Transfer.",
			ttBusinessName: "This is your Business name. Your recipient will receive the transfer notification from this Business name."
		},
		
		/**
		 *  My Payments and Transfers specific
		 *
		 */
		myPaymentsTransfersMessages : {
			ttProvince : "Your payee's province. This may or may not be the same as your home province.<br />For example, you may reside in Ontario but be a client of Hydro Quebec because you have a summer cottage in that province. In this case, you would select Quebec as the payee's province.",
			ttPayeeName : "Enter the name or the company you would like to add as a payee and select from the list of suggested options that appear as you type.<br /><h3 class='tips'>Tips:</h3><ul><li>Enter a partial name if you are unsure of the payee's full legal name. <br />Example: if you enter \"tax\" the search will return \"property tax\" even though \"tax\" is not the first word in the payee's name.</li><li>Search using as few as three letters.<br /> Example: if you enter the letters \"hyd\" the search will return a list of all payees with those three letters in their name. (\"hydro.\")</li>",
			ttAccountNumber : "Lorem ipsum",
			ttCreateNickname : "Lorem ipsum",
			ttAddBMOHarrisAccount : "Your BMO Harris account can be located on your account statement or cheque and can be up to 10 digits in length.",
			ttWireTransferReasonMsg : "Enter the reason or purpose of the transfer to your BMO Harris account. To comply with regulatory requirements, we must collect this information when transferring funds outside of Canada."
		},
		
		/**
		 *  mortgages specific
		 *
		 */
		mortgages: {
			ttAmountInCAD : "You must enter a minimum of $100."
		},
		
		/**
		 *  My Accounts specific
		 *
		 */
		myAccountsMessages : {
			ttCCFrom : "This drop down menu contains a list of credit cards from other financial institutions. Choose the credit card that applies and enter your account number in the field below.",
			ttCCBranchTransitNumber : "Lorem ipsum",
			ttCCFinancialInstitutionNumber : "Lorem ipsum",
			ttPreAccountToDebit : "The currency of the Account to Debit must be the same as the currency of the Credit Card selected"
		},
		/**
		 *  Link my accounts
		 *
		 */
		linkMyAccounts : {
			ttLmaUserId_1 : "Your BMO Nesbitt Burns or <br/> BMO InvestorLine User ID or Account #.",
			ttLmaPassword_1 : "Your BMO Nesbitt Burns or <br/> BMO InvestorLine password.",
			ttLmaBirthDate: "Please provide the birth date associated with your accounts <br/>to help us verify your identity. "
		},
		/**
		 *  Registration Specific
		 *
		 */
		registrationMessages : {
			ttregCardNumber : "Lorem ipsum",
			ttregAccountNumber : "Lorem ipsum",
			ttregAccessibleCard: "The number of accounts excludes your BMO Bank of MOntrea Mosaik MasterCard and Personal Line of Credit. This number refers to the total number of bank accounts(e.g. Chequing, Savings, Other) you have set up on your card from any branch, excluding BMO Investorline&reg; link accounts.",
			ttregMCValidationNumber:"Your BMO Credit Card validation number is the<br/>three digits found beside the signature panel<br/>on the back of your BMO Credit Card <div class='MCValidation' id='ttNumberImage'><imgsrc='/images/registration/imgMCValidationNumber.jpg' width='132' height='83' alt='BMO Credit Card Validation Number' /></div>",
			ttSiRememberCard: "Select Remember my Card if you want Online Banking to remember your card number when using Online Banking in the future.",
			ttSiMCRememberCard: "Select Remember my BMO Credit Card if you want Online Banking to remember your card number when you use Online Banking in the future."
					},
		
		/**
		 *  Skip Mortgage Payment Specific
		 *
		 */
		smpMessages : {
			ttSmpEnterDetails : "<p>Take a Break&reg; and Family Care&reg; options apply to principal and interest payments on conventional and default insured mortgages for owner-occupied single-family dwellings only, including condominiums and duplexes. For mortgages insured against default, customers must have prepaid principal at least equal to the amount of payment(s) to be skipped. Any mortgage insurance premiums and tax payments cannot be skipped. The Family Care option is not available to self-employed individuals. Customers receiving Mortgage Disability Insurance benefits (provided by Sun Life Assurance Company of Canada) are not eligible for skipped payments. Interest for the skipped payment is added to the principal. The balance of your current mortgage plus the skipped payment must not exceed the original amount of your mortgage with us. For conventional uninsured mortgages, the balance of your current mortgage plus the skipped payment must not exceed 80% of the lesser of your home's present value or the original amount of your mortgage with us. Other conditions apply. Approval is required for the use of these options. Take a Break or Family Care options are not available with the Smart Fixed Mortgage.</p><p/>For more information see <a href=\'#\' onclick=\'javascript:window.open(&#39;http://www.bmo.com/home/popups/personal/help/mortgage-payment-options&#39;)\'>&quot;Understanding my mortgage payment options&quot;</a> in the Mortgages & Loans section on BMO.com.</p>"
		},
		
		/**
		 *  TCFC Order Details
		 *
		 */
		tcfcMessages : {
			ttDenominations : "Lorem ipsum"
		},
		
		/**
		 *  Stop Payment Specific
		 *
		 */
		spMessages : {
			ttChequeNumber : "<div class='ttChequeNumber'>The cheque number is the three-digit number that appears in the top right hand corner of your cheque. <div id='ttSpImage'><img src='"+contextPath+"/onlinebanking/en/images/myaccounts/imgChequeNumber.jpg' width='226' height='100' alt='Cheque Number' /></div></div>",
			ttSeriesChequeNumber : "The cheque number is the three-digit number that appears in the top right corner of your cheque",
			ttSeriesAmount : "The amount must be the same for all cheques in the series.",
			ttSeriesPayeeName : "The person or company you made the cheque out to must be the same on all cheques in the series."
		},

		investmentMessages: {
			ttRenewalInstructions: "If you choose annual or monthly interest options, your interest will automatically be deposited to the account you've chosen to pay for this purchase."
		},
		
		/**
		 *  View Credit Card Details Specific
		 *
		 */
		viewCreditCardDetails : {
			ttCcFormatInfo : "Lorem ipsum",
			ttAvailableCredit: "Available credit is your credit limit minus your current balance as of today's date and reflects all transactions including those that have been authorized but not yet posted to your account.",
			ttCurrentBalance: "Current Balance does not include pending interest charges or transactions that have been authorized but not yet posted to your account."
		},
		
		/**
		 *  Change Credit Limit
		 *
		 */
		changeCreditLimit : {
			ttOtherSourceGrossMonthlyIncome : "<p>Please specify the source of your secondary income. </p><p>Here are some examples: </p><ul><li>Income from a rental property</li><li>Investment income</li><li>Alimony or child support</li><li>Pension or long-term disability income</li></ul>",
			ttOtherGrossMonthlyIncome : "<p>Do you have a secondary source of income such as income from a rental property or a second job? If so, please indicate the before tax amount here.</p><p>You may also include the before tax income of a spouse or partner.</p><p>Enter numeric values only.</p>"			
		},
		
		/**
		 *  Bank Accounts
		 *
		 */
		bankAccounts : {
			ttAccountFunds : "Your available funds are the amount of money available to you to cover debit transactions from your account. It will be different from your account balance if there are funds on hold or if you have overdraft protection on your account. Visit the Help Centre for more information.",
			ttFundsOnHold : "Funds on hold are deposits you have made to your account that have not yet been cleared by the bank. ",
			ttTransitNumber : "This number identifies the branch where the account was opened. The first four digits are the branch number. The fifth digit identifies the location of the branch. The five digit number is necessary when setting up direct deposits and pre-authorized bill payments.",
			ttInstitutionNumber : "This number identifies the financial institution where the account is held. It is required when setting up direct deposits and pre-authorized bill payments and when receiving international wire payments.",
			ttFunds : "Your available funds are the amount of money available to you to cover debit transactions from your account. It will be different from your account balance if there are funds on hold or if you have overdraft protection on your account. Visit the Help Centre for more information.",
			ttLeadAccount : "The account from which your plan fee and/or service charges are debited.",
			AD: "Adjustment",
			BC: "Bill Payment Cancelled",
			CB: "Cheque Posted by Branch",
			CC: "Certified Cheque",
			CD: "Customer Deposit",
			CK: "Cheque",
			CM: "Credit Memo",
			CW: "Telephone/Online banking",
			DC: "Other Charge",
			DD: "Direct Deposit/Pre-authorized Debit",
			DM: "Debit Memo",
			DN: "Not Service chargeable",
			DR: "Overdraft",
			DS: "Service chargeable",
			EC: "Error Correction",
			FX: "Foreign Exchange",
			GS: "Tax",
			IB: "BMO ATM",
			IN: "Interest",
			LI: "Loan Interest",
			LN: "Loan Payment",
			LP: "Loan Advance",
			LT: "Large Volume Account List Total",
			MB: "Multi-Branch Banking®",
			NR: "Non-Resident Tax",
			NS: "Cheque Returned NSF",
			NT: "Nesbitt Burns Entry",
			OL: "Online Debit Purchase",
			OM: "Other Automated Banking Machine",
			OV: "Online Debit Refund",
			PR: "Purchase at Merchant",
			RC: "NSF Charge",
			RN: "Merchandise Return",
			RT: "Returned Item",
			RV: "Merchant Reversal",
			SC: "Service Charge",
			SO: "Standing Order",
			ST: "Merchant Deposit",
			TF: "Transfer of Funds",
			TX: "Tax",
			WD: "Withdrawal"						
		},
		
		/**
		 *  eStatements
		 *
		 */
		eStatements : {
			ttConsolidated : "Your accounts are currently set up for the consolidated statement option. A consolidated statement is a summary of your accounts and transactions on one monthly statements and consists of a main account which is the only account that will receive cheque images and member accounts which consists of your other accounts."
		},
		
		/**
		 *  PromoCode
		 *
		 */
		PromoCode : {
			ttpromoCode : "[PROMO]"
		},

		/**
		 *  TotalAmount
		 *
		 */
		TotalAmount : {
			ttTotalAmount : "[TOTAL]"
		},

		/**
		 *  NotifyByEmailaddress
		 *
		 */
		NotifyByEmailaddress : {
			ttNotifyByEmailaddress : "[NOTIFY]"
		},

		/**
		 *  SecurityQuestion
		 *
		 */
		SecurityQuestion : {
			ttSecurityQuestion : "[QUESTION]"
		},
		
		/**
		 *  SecurityResponse
		 *
		 */
		SecurityResponse : {
			ttSecurityResponse : "[RESPONSE]"
		},
					
		/**

		 *  Dispute Charge
		 *
		 */
		disputeChargeMessages : {
			ttOtherChargeHelp : "Enter an alternate Credit Card number if the charge you wish to dispute is on a different card than the one displayed.",
			ttMerchantNameOrDesc : "Please provide the merchant name or a brief description to help us correctly identify the charge."					
		},
		
		/* Travel Memo */
	 
		travelMemoMessages : {
			ttProvince : "Canadian and US destinations only.",
			ttTelephone : "Please provide a number where we can reach you during your trip  to verify details of a transaction if necessary.",
			ttStartDate : "The date selected must be no more than 45 days from today`s date."					
		},
		
		increaseMortgagePayments: {
			ttImpNewAmount: "<p>Use the New Amount option to specify the amount that you would like your new mortgage payment (principal and interest) to be in dollars.</p><p><h4>Example</h4>If your current payment (principal and interest) is $300 and you would like to increase your payment to $320, you would enter $320 in the New Amount field.</p>",
			ttImpPercentIncrease: "<p>Use this option to increase your mortgage payment (principal and interest) by a percentage.</p><p><h4>Example</h4>If you have a Smart Fixed Mortgage, you have the option to increase your payments by up to 10% over your current payment (principal and interest) without a prepayment charge. To maximize this option, you would enter 10% in the Percentage Increase field.</p>"
		},
		
		downloadAccountDetails: {
			ttCcFormatInfo: "<p>If you use QuickBooks, Quicken or Simply Accounting, select the appropriate option from the drop down and click Download to continue. Choose Comma Separated Value (CSV) if you are using a different money management program or if you do not have a money management program installed on your computer. Once downloaded, you will be able to upload your details from the CSV file into your program using the import function or open it using any standard spreadsheet program. </p><br/><p>Please ensure the software is properly installed on your computer for the format you select. Contact the applicable vendor for technical support if you encounter difficulties during installation.</p><br/><p>We recommend that you complete your Online Banking activity before downloading your details. </p>"
		},		
		
		/**
		 *  Investigate Bill Payments
		 *
		 */
		investigateBillPayments : {
			ttReferenceNumber : "Find the reference number in the My Payment History section of My Payments and Transfers."
		},
		/**
		 *	Acount Landing Page  
		 *
		 */
		accountLanding : {
			ttLinkMoreAccounts : "Lorem ipsum"
		},
		
		/**
		 *	Mortgage Details Landing Page  
		 *
		 */
		mortgageDetails : {
			ttMortgageCashAmount : "When you use your mortgage prepayment options, principal prepayments go towards building a Mortgage Cash Account. The balance shown can change and is only available subject to meeting certain eligibility criteria.",
			ttInsurancePremium: "If you purchased Mortgage Disability Insurance prior to March 2013, the Mortgage Disability premium is not included in the Insurance Premium shown here.",
			ttOriginalAmortDate: "The original amortization date reflects the period of time required to reduce your mortgage balance to zero based on the original terms of your mortgage. Visit the Help Centre for more information.",
			ttProjectedAmortDate: "The projected amortization date is an estimate of the date your mortgage will be paid off in full. <br/><br/>The date is an estimate because it does not take into account any changes that can affect your amortization date such as variable mortgage rates or the use of mortgage options.<br/><br/>Visit the Help Centre for more information.",
			ttFixedCurrentInterestRate: "Your rate/blended rate at time of setup or last renewal.",
			ttVariableCurrentInterestRate: "Your variable interest rate is based on BMO Prime Rate plus or minus the Variance from BMO Prime.",
			ttBMOPostedRate: "BMO posted/blended posted rate at time of mortgage setup or last renewal.",
			ttRateDiscount: "Your rate discount/blended discount from the BMO posted/blended posted rate at time of setup or last renewal.",
			ttRateBuyDown: "A reduction in your interest rate as a result of a payment to us to buy down your interest rate.",
			ttBMOPrimeRate: "The BMO Prime Rate is the yearly interest rate as of today payable on Canadian Dollar loans made in Canada and designated as our \"prime rate\". This rate can change at any time.",
			ttMortgageSubsidy: "A mortgage subsidy provided by your employer for financial assistance or an employee incentive that may be subject to tax as a taxable benefit."
	
		},

		/**
		 *	Bank Statements 
		 *
		 */
		bankStatements: {
			ttMainAccount: 'Your main account must be a Canadian account and will determine your monthly statement date and the address to which your monthly statement will be mailed. <br/> The cheque return option will only be available for your main account.'
		},
		
		retailMasterCardChangeAddress: {
			ttTempAddress: "Lorem ipsum"
		},
		
		ctpfEnterDetails: {
			ttCtpfProvince: "Lorem ipsum"
		},
		
		sbmcMessages: {
			ttSbmcOtherGrossMonthlyHouseholdIncome: "Lorem Ipsum",
			ttSbmcSourceOfOtherGrossMonthlyHouseholdIncome: "Lorem Ipsum",
			ttSbmcAllocateNewCredit: "Lorem Ipsum",
			ttSbmcDecAllocateNewCredit: "Lorem Ipsum",
			ttCorpCreditLimit: "The total of the credit limit of all corporate cards reporting to your company.",
			ttTotalUnAlctCreditLimit: "The portion of your corporate credit limit that has not been assigned to a corporate MasterCard.",
			ttAmountInCAD: "Lorem Ipsum"
		},
		
		estatementAlertMessage: {
			estatementInfo : "You will only receive an alert if your account is set up for eStatement."			
		},
		
		depositAlertMessage: {
			depositInfo : "You may receive an alert to notify you that a direct deposit has been made to your account prior to the funds being deposited.  In these cases, the funds will be available after midnight."
		}
		
	},
	
	/**
	 * Alert box messages
	 *
	 */
	 alertBoxes : {
		 
		 /**
		  * eTransfer specific
		  *
		  */
		etransferAlertBoxes :{
			etManageRecipientAlert: "You have successfully added [NAME] to your recipients."
		},
		
		/**
		 * IR specific.
		 */  
		IRAlertBoxes : {
			SuccessUpdateEmailAlert: "You have successfully updated your email address",
			SameEmailAlert: "No changes were made.  Please try again.",
			SameNameAlert: "No changes were made to the recipient name.  Please try again."
		},
		
		alertsAlertBoxes : {
			saveGeneralSettingsSuccess : "You have successfully changed your settings.",
			saveGeneralSettingsError : "There has been an error.  Please try again."
		}
	 },
	 
	 language:{
	 	code: "en"
	 },
	 
	 CSP_Messages: {
	 	CancelRequestWarningMsg : "You have selected to cancel your request and will be redirected back to SecureKey Concierge where you can find an alternative authentication method. \n\nPlease confirm that you no longer want to complete your request."
	 },
	 
	 futureDatedMessages: {
	 	description: "Notify me if this payment is not completed.",
		noEmailTooltip: "We will send you an email to the email address on file if the Bank is unable to complete this payment. No account information is included in the email sent to you. The email notification applies only to the future dated bill payments you have set up in this session. If you choose to delete your email address before your payment is scheduled to be made, the notification will also be deleted. Updating your email address on this form will also update it on your Contact Information and will be used in accordance with <a href=\"\" onClick=\"Popup('http://www.bmo.com/home/about/banking/privacy-security/our-privacy-code',1); return false;\">Our Privacy Code</a>.",
		updateEmailTooltip: "We will send you an email if the Bank is unable to complete this payment. The email notification will be sent to the email we have on file for you. No account information will be included in the email sent to you. If you choose to delete your email address before your payment is scheduled to be made, the notification will also be deleted.",
		updateEmailMsg: "The email address entered here will become part of your contact information. If you are updating your email address, your previous email preferences will no longer apply and all future communications will be sent to this new email address - as permitted by you and in accordance with <a href=\"\" onClick=\"Popup('http://www.bmo.com/home/about/banking/privacy-security/our-privacy-code',1); return false;\">Our Privacy Code</a>.",
		foreignEmailAddressMsg: "If this email is incorrect, please write to us with your current email address by choosing My Messages and Send a Message.",
		updateFailedMsg: "We are unable to update your email address at this time. Please proceed with your payment, and update your email address later by selecting My Profile & Preferences and My Contact Information. Your notification will be sent to the email address on file at the time the payment is made.",
		readFailedMsg: "We are unable to retrieve your email address at this time. Please proceed with your payment, and update your email address later by selecting My Profile & Preferences and My Contact Information. Your notification will be sent to the email address on file at the time the payment is made.",
		noEmailMsg: "No email address on file"
	 },
	 
	 cbtMessages: {
	 	harrisAccountName : "BMO Harris Account ",
	 	addHarrisDescription : "Add your U.S. Account with BMO Harris Bank",
	 	harrisAccountDesc : "Enter your BMO Harris account number",
	 	cbtDelete : "Remove this account <br>from Online Banking",
	 	cbtConfirmMsg : "Are you sure?",
	 	cbtYes : "Yes",
	 	cbtNo : "No",
	 	reasonMsg : "Reason is Required."
	 }
}