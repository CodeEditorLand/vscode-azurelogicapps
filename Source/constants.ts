/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class Constants {
	public static DesignerVersion = "2.30701.1.2";

	public static SubscriptionContextValue =
		"azureextensionui.azureSubscription";

	// #region Partners and Agreements

	public static Qualifier = new Map<string, string>([
		["1 - D-U-N-S (Dun & Bradstreet)", "1"],
		["2 - SCAC (Standard Carrier Alpha Code) (X12)", "2"],
		["3 - Federal Maritime Commission", "3"],
		["4 - IATA (International Air Transport Association)", "4"],
		["7 - Global Location Number (GLN)", "7"],
		[
			"8 - UCC Communications ID (Uniform Code Council Communications)",
			"8",
		],
		[
			"9 - X.121 (CCITT) / D-U-N-S (Dun & Bradstreet) with 4 digit suffix",
			"9",
		],
		["10 - Department of Defense", "10"],
		["11 - Drug Enforcement Administration", "11"],
		["12 - Telephone Number", "12"],
		["13 - UCS Code", "13"],
		[
			"14 - D-U-N-S Plus Suffix / EAN (European Article Numbering Association)",
			"14",
		],
		["15 - Petroleum Accountants Society of Canada Company Code", "15"],
		["16 - D&B D-U-N-S Number plus 4-character suffix", "16"],
		["17 - American Bankers Association", "17"],
		[
			"18 - Association of American Railroads (AAR) Standard Distribution Code / AIAG(Automotive Industry Action Group)",
			"18",
		],
		[
			"19 - EDI Council of Australia (EDICA) Communications ID Number (COMM ID)",
			"19",
		],
		["20 - Health Industry Number", "20"],
		[
			"21 - Integrated Postsecondary Education Data System, or (IPEDS)",
			"21",
		],
		[
			"22 - Federal Interagency Commission on Education, or FICE / INSEE (Institut National de la Statistique et des Etudes Economiques) - SIREN",
			"22",
		],
		[
			"23 - National Center for Education Statistics Common Core of Data 12-Digit Number for Pre-K-Grade 12 Institutes, or NCES",
			"23",
		],
		[
			"24 - The College Board's Admission Testing Program 4-Digit Code of Postsecondary Institutes, or ATP",
			"24",
		],
		["25 - ACT, Inc. 4-Digit Code of Postsecondary Institutions", "25"],
		["26 - Statistics of Canada List of Postsecondary Institutions", "26"],
		["27 - Health Care Financing Administration Carrier ID", "27"],
		["28 - Health Care Financing Administration Fiscal Intermediary", "28"],
		["29 - Health Care Financing Administration Medicare Provider", "29"],
		[
			"30 - U.S. Federal Tax Identification Number / ISO 6523: Organization Identification",
			"30",
		],
		[
			"31 - Jurisdiction Identification Number Plus 4 as assigned by the International Association of Industrial Accident Boards and Commissions (IAIABC)/ DIN (Deutsches Institut fuer Normung)",
			"31",
		],
		["32 - U.S. Federal Employer Identification Number", "32"],
		[
			"33 - National Association of Insurance Commissioners Company Code (NAIC) / BfA (Bundesversicherungsanstalt fuer Angestellte)",
			"33",
		],
		[
			"34 - Medicaid Provider and Supplier Identification Number as assigned by individual State Medicaid Agencies in conjunction with Health Care Financing Administration (HCFA) / National Statistical Agency",
			"34",
		],
		[
			"35 - Statistics Canada Canadian College Student Information System Institution Codes",
			"35",
		],
		[
			"36 - Statistics Canada University Student Information System Institution Codes",
			"36",
		],
		["37 - Society of Property Information Compilers and Analysts", "37"],
		[
			"38 - The College Board and ACT, Inc. 6-Digit Code List of Secondary Institutions",
			"38",
		],
		[
			"AM - Association Mexicana del Codigo de Producto (AMECOP) Communication ID",
			"AM",
		],
		["NR - National Retail Merchants Association", "NR"],
		[
			"SA - User Identification Number as assigned by the Safety and Fitness Electronic Records (SAFER) System",
			"SA",
		],
		["SN - Standard Address Number", "SN"],
		["ZZ - Mutually Defined", "ZZ"],
		["BT", "BT"],
		["AS2Identity", "AS2Identity"],
		[
			"5 - INSEE (Institut National de la Statistique et des Etudes Economiques)",
			"5",
		],
		["51 - GEIS (General Electric Information Services)", "51"],
		["52 - INS (IBM Network Services)", "52"],
		["53 - Datenzentrale des Einzelhandels", "53"],
		["54 - Bundesverband der Deutschen Baustoffhaendler", "54"],
		["55 - Bank Identifier Code", "55"],
		["57 - KTNet (Korea Trade Network Services)", "57"],
		["58 - UPU (Universal Postal Union)", "58"],
		[
			"59 - ODETTE (Organization for Data Exchange through Tele-Transmission in Europe)",
			"59",
		],
		["61 - SCAC (Standard Carrier Alpha Code)", "61"],
		["63 - ECA (Electronic Commerce Australia)", "63"],
		["65 - TELEBOX 400 (Deutsche Telekom)", "65"],
		["80 - NHS (National Health Service)", "80"],
		["82 - Statens Teleforvaltning", "82"],
		["84 - Athens Chamber of Commerce", "84"],
		["85 - Swiss Chamber of Commerce", "85"],
		["86 - US Council for International Business", "86"],
		["87 - National Federation of Chambers of Commerce and Industry", "87"],
		["89 - Association of British Chambers of Commerce", "89"],
		["90 - SITA (Societe Internationale de Telecommunications)", "90"],
		["91 - Assigned by seller or seller's agent", "91"],
		["92 - Assigned by buyer or buyer's agent", "92"],
		["103 - TW, Trade-van", "103"],
		["128 - CH, BCNR (Swiss Clearing Bank Number)", "128"],
		["129 - CH, BPI (Swiss Business Partner Identification)", "129"],
		[
			"144 - US, DoDAAC (Department of Defense Activity Address Code)",
			"144",
		],
		[
			"145 - FR, DGCP (Direction Generale de la Comptabilite Publique)",
			"145",
		],
		["146 - FR, DGI (Direction Generale des Impots)", "146"],
		[
			"147 - JP, JIPDEC/ECPC (Japan Information Processing Development Corporation / Electronic Commerce Promotion Center)",
			"147",
		],
		[
			"148 - ITU (International Telecommunications Union) Data Network Identification Code (DNIC)",
			"148",
		],
		["Z01 - Vehicle registration number", "Z01"],
		["ZZZ - Mutually Defined", "ZZZ"],
	]);

	public static AS2AllowedIdentityQualifiers = ["AS2Identity"];

	public static X12AllowedIdentityQualifiers = [
		"1",
		"2",
		"3",
		"4",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
		"32",
		"33",
		"34",
		"35",
		"36",
		"37",
		"38",
		"AM",
		"NR",
		"SA",
		"SN",
		"ZZ",
		"BT",
	];

	public static EdifactAllowedIdentityQualifiers = [
		"1",
		"4",
		"5",
		"8",
		"9",
		"12",
		"14",
		"18",
		"22",
		"30",
		"31",
		"33",
		"34",
		"51",
		"52",
		"53",
		"54",
		"55",
		"57",
		"58",
		"59",
		"61",
		"63",
		"65",
		"80",
		"82",
		"84",
		"85",
		"86",
		"87",
		"89",
		"90",
		"91",
		"92",
		"103",
		"128",
		"129",
		"144",
		"145",
		"146",
		"147",
		"148",
		"Z01",
		"ZZZ",
		"ZZ",
		"BT",
	];

	// #endregion

	// Content Types
	public static JsonContentType = "application/json";

	public static LiquidContentType = "text/plain";

	public static TextContentType = "text/plain";

	public static XmlContentType = "application/xml";
}
