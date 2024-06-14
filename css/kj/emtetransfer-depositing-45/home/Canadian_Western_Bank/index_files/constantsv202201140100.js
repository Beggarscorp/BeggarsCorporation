
/** @namespace */
/**
 * This module contains all constants used throughout the app.
 */
define('constants', [
	'facade.collection',
	'staticConstants'
], function(_$Collection, staticConstants) {
'use strict';

	/**
	 * Application constants.
	 *
	 * @public
	 * @name CONSTANTS
	 * @namespace CONSTANTS
	 */
	var _constants = {

		BASE_URL: '/',

		/**
		 * Events relating to saving states of the member's interface. These use the
		 * /rest/member/state REST service listed above.
		 * @public
		 * @name CONSTANTS.SAVE_PREF
		 * @namespace Save preferences
		 */
		SAVE_PREF: {

			/**
			 * Called when a member hides/shows a widget.
			 * @public
			 * @name CONSTANTS.SAVE_PREF.WIDGET_TOGGLE_VISIBILITY
			 */
			WIDGET_TOGGLE_VISIBILITY: {
				KEY: 'toggle-widget-visibility',
				HIDE: 'hide',
				SHOW: 'show'
			},
			/**
			 * @public
			 * @name CONSTANTS.SAVE_PREF.SPENDING_ANALYSIS
			 */
			SPENDING_ANALYSIS: {
				/**
				 * When member chooses a different visualization format for the Spending Analysis Widget
				 * @public
				 * @name CONSTANTS.SAVE_PREF.SPENDING_ANALYSIS.CHART_TYPE
			 	 */
				CHART_TYPE: {
					KEY: 'toggle-spending-analysis-chart-type',
					PIE: 'pie',
					BAR: 'bar'
				},
				/**
				 * @public
				 * @name CONSTANTS.SAVE_PREF.SPENDING_ANALYSIS.CONFIG
				 */
				CONFIG: {
					KEY: 'spending-analysis-config-list'
				}
			},

			/**
			 * Called when a member chooses to show/hide their default budgets in Component-ManageBudgets.
			 * @public
			 * @name CONSTANTS.SAVE_PREF.MANAGE_BUDGETS_DEFAULT_BUDGETS_VISIBILITY
			 */
			MANAGE_BUDGETS_DEFAULT_BUDGETS_VISIBILITY: {
				KEY: 'toggle-manage-budgets-defaults-visibility',
				HIDE: 'hide',
				SHOW: 'show'
			},

			/**
			 * Keeps track of whether the onboarding modal should appear for a user or not.
			 * @public
			 * @name EVENTS.SAVE_PREF.ONBOARDING_VISIBILITY
			 */
			ONBOARDING_VISIBILITY: {
				KEY: 'onboarding-visibility',
				HIDE: '1',
				RESET: '0'
			},
			/**
			 * Keeps track of which membership is active.
			 * @public
			 * @name EVENTS.SAVE_PREF.ACTIVE_MEMBERSHIP
			 */
			ACTIVE_MEMBERSHIP : {
			    KEY: 'UserPreferred_AccountGroup'
			}
		},

		PFM_CATEGORIES: {
			TYPE_NAMES: {
				'1': '---',
				'2': 'INCOME CATEGORIES',
				'3': 'SPENDING CATEGORIES',
				'4': 'TRANSFER CATEGORIES',
				'5': 'DEFERRED COMPENSATION CATEGORIES'
			},
			ORDERING: [3,2,4,5,1],
			UNCATEGORIZED: {
				ID: 1,
				NAME: 'Uncategorized',
				TYPE_ID: 1,
				TYPE_NAME: '---'
			},
			INCOME: {
				TYPE_ID: 2,
				TYPE_NAME:  'INCOME CATEGORIES'
			},
			SPENDING: {
				TYPE_ID: 3,
				TYPE_NAME:  'SPENDING CATEGORIES'
			},
			TRANSFER: {
				TYPE_ID: 4,
				TYPE_NAME:  'TRANSFER CATEGORIES'
			},
			DEFERRED: {
				TYPE_ID: 5,
				TYPE_NAME:  'DEFERRED COMPENSATION CATEGORIES'
			}
		},

		/**
		 * Default settings for the HighCharts plugin.
		 * @pubic
		 * @name CONSTANTS.HIGHCHARTS
		 * @namespace HighCharts properties
		 */
		HIGHCHARTS:{
			CHART_BG_COLOR: '#FFFFFF',
			CHART_BG_OPACITY: '0',
			TITLE_COLOR:'#333333',
			TITLE_FONT:'bold 16px Arial, sans-serif',
			SUBTITLE_COLOR:'#333333',
			SUBTITLE_FONT:'bold 12px Arial, sans-serif',
			COLOURS: [
				'#3366CC',
				'#DC3912',
				'#FF9900',
				'#109618',
				'#990099',
				'#0099C6',
				'#DD4477',
				'#66AA00',
				'#B82E2E',
				'#316395',
				'#994499',
				'#FF9900'
			],
			LEGEND_FONT:'9pt Arial, sans-serif',
			LEGEND_HOVER_COLOR:'#3D3D3D',
			LEGEND_HIDDEN_COLOR:'#A8A8A8',
			LABELS_COLOR:'#333333',
			LABELS_SIZE:'10px',
			GRAPH_LABEL_TEXT_COLOR:'#FFFFFF',
			FONT_FAMILY: 'Arial, sans-serif',
			THEME: {
				NORMAL_COLOR: '#DDDDDD',
				HOVER_COLOR: '#2B78E4',
				SELECTED_COLOR: '#9FC5F8',
				BACKGROUND_HOVER_COLOR: '#CAE1FF',
				BACKGROUND_SELECTED_COLOR: '#E7F1FE',
				AXIS_COLOR: '#CFCFCF'
			}
		},

		/** 
		 * Common text to make global but isn't bound to a component.
		 * @public
		 * @name CONSTANTS.TEXT
		 * @namespace Text
		 */
		TEXT: {

			/**
			 * Yodlee error messages.
			 * @public
			 * @constants
			 * @name CONSTANTS.TEXT.YODLEE_ERROR
			 */
			 YODLEE_ERROR: {

			 	/**
			 	 * Error codes
			 	 * @public
			 	 * @constants
			 	 * @name CONSTANTS.TEXT.YODLEE_ERROR.ERROR_CODES
			 	 */
			 	ERROR_CODES: {
			 		400: '400',
			 		401: '401',
			 		402: '402',
			 		403: '403',
			 		404: '404',
			 		405: '405',
			 		406: '406',
			 		407: '407',
			 		408: '408',
			 		409: '409',
			 		411: '411',
			 		412: '412',
			 		413: '413',
			 		414: '414',
			 		415: '415',
			 		416: '416',
			 		417: '417',
			 		418: '418',
			 		419: '419',
			 		420: '420',
			 		421: '421',
			 		422: '422',
			 		423: '423',
			 		424: '424',
			 		425: '425',
			 		426: '426',
			 		427: '427',
			 		428: '428',
			 		429: '429',
			 		430: '430',
			 		433: '433',
			 		434: '434',
			 		435: '435',
			 		436: '436',
			 		499: '499',
			 		505: '505',
			 		506: '506',
			 		507: '507',
			 		508: '508',
			 		509: '509',
			 		517: '517',
			 		518: '518',
			 		519: '519',
			 		520: '520',
			 		521: '521',
			 		522: '522',
			 		523: '523',
			 		524: '524',
					801: '801',
			 		802: '802',
                    YodleePartnerAccountsNotAvailable: 'YodleePartnerAccountsNotAvailable'
			 	}

			},

			/**
			 * Text for form validation.
			 * @public
			 * @constants
			 * @name CONSTANTS.TEXT.FORM_VALIDATION
			 */
			FORM_VALIDATION: {
				REQUIRED: 'This field is required.',
				ALPHA: 'Only alphabetical characters allowed.',
				ALPHAWS: 'Only alphabetical and space characters allowed.',
				ALPHANUMERIC: 'Only alphanumeric characters allowed.',
				ALPHANUMERICWS: 'Only alphanumeric and space characters allowed.',
				EMAIL: 'Incorrect format.',
				PHONE: 'Incorrect format.',
				NUMERIC: 'Must be a numeric value.',
				INTEGER: 'Must be a numeric integer value.',
				MONETARY: 'Must be a monetary value.',
				REGEX: 'Incorrect format.',
				LENGTH: 'Incorrect number of characters.',
				RANGE: 'Value out of range.',
				UNIQUE: 'Value must be unique.'
			},

			/**
			 * Labels for months of the year
			 * @public
			 * @constants
			 * @name CONSTANTS.TEXT.MONTHS
			 */
			MONTHS: {
				FULL: 'January,February,March,April,May,June,July,August,September,October,November,December',
				SHORT: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
			}
		},

		/**
		 * Widget-specific, CU-overridable settings.
		 * TODO: move these to their respective ...-Control.properties files
		 * @public
		 * @name CONSTANTS.WIDGETS
		 * @namespace Widgets
		 */
		WIDGETS: {
			NOTIFICATIONS: {
				DISPLAY_DURATION: 2500
			},

			MODAL: {
				FADE_IN_TIME: 500,
				FADE_OUT_TIME: 500
			}
		},

		/**
		 * opt in out setting-specific, CU-overridable settings.
		 * constants
		 * @public
		 * @name CONSTANTS.PFM_OPT_IN_OUT
		 * @namespace pfm opt in out setting
		 */
		PFM_OPT_IN_OUT: {
			FREEZE_TIME: 24
		},

		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.INSTITUTION
		 * @namespace Institution settings
		 */
		INSTITUTION: {
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.AGGREGATE_EXTERNAL_ACCOUNTS
			 */
			AGGREGATE_EXTERNAL_ACCOUNTS: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.MOBILE_APP
			 */
			MOBILE_APP: true,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.MOBILE_WEB
			 */
			MOBILE_WEB: true,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.MANAGE_PARTNERS
			 */
			MANAGE_PARTNERS: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.GROUPS
			 */
			GROUPS: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.SWITCH_LOGIN
			 */
			SWITCH_LOGIN: true

		},
		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.CALCULATORS
		 * @namespace
		 */
		CALCULATORS: {
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.CALCULATORS
			 * @namespace
			 */
			RETIREMENT: {
				goalSavingsHighchartColor: "#4572a7",
				projectedSavingsHighchartColor: "#AA4643"
			}
		},

		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.BRAND
		 * @namespace
		 */
		BRAND: {
			BRANCH_ATM_LOCATOR: {
				ATM_ICON_COLOUR: "#8D8D8D",
				BRANCH_ICON_COLOUR: "#009AA6"
			}
		},

		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.TWOSS
		 */
		TWOSS: {
			ENABLED: false,
			HARD_TOKEN: false
		}
	};
	return _$Collection.extend(true, _constants, staticConstants);
});

