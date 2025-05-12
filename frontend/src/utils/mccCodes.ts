// MCC (Merchant Category Code) reference data
// Organized by industry/category for easier selection in the UI

export interface MCCCode {
  code: string;
  description: string;
}

export interface MCCCategory {
  name: string;
  codes: MCCCode[];
}

export const MCC_CATEGORIES: MCCCategory[] = [
  {
    name: "Food & Dining",
    codes: [
      { code: "5411", description: "Grocery Stores" },
      { code: "5812", description: "Restaurants" },
      { code: "5813", description: "Bars" },
      { code: "5814", description: "Fast Food" },
      { code: "5499", description: "Convenience Stores" },
      { code: "5921", description: "Liquor Stores" },
      { code: "5441", description: "Candy/Confectionery Stores" },
      { code: "5462", description: "Bakeries" },
      { code: "5451", description: "Dairy Product Stores" },
    ]
  },
  {
    name: "Travel",
    codes: [
      { code: "3000-3299", description: "Airlines and Air Carriers" },
      { code: "4111", description: "Transportation - Commuter/Passenger Railways" },
      { code: "4112", description: "Passenger Railways" },
      { code: "4121", description: "Taxicabs and Limousines" },
      { code: "4131", description: "Bus Lines" },
      { code: "4411", description: "Cruise Lines" },
      { code: "4511", description: "Airlines and Air Carriers" },
      { code: "4722", description: "Travel Agencies and Tour Operators" },
      { code: "7011", description: "Hotels, Motels, Resorts" },
      { code: "7512", description: "Car Rental Agencies" },
    ]
  },
  {
    name: "Business Services",
    codes: [
      { code: "7311", description: "Advertising Services" },
      { code: "7399", description: "Business Services" },
      { code: "8111", description: "Legal Services" },
      { code: "8931", description: "Accounting/Bookkeeping Services" },
      { code: "5968", description: "Direct Marketing - Subscription Merchants" },
      { code: "7276", description: "Tax Preparation Services" },
      { code: "7392", description: "Consulting Services" },
      { code: "8999", description: "Professional Services" },
    ]
  },
  {
    name: "Technology & Software",
    codes: [
      { code: "4816", description: "Computer Network/Information Services" },
      { code: "5045", description: "Computers, Computer Peripheral Equipment, Software" },
      { code: "5734", description: "Computer Software Stores" },
      { code: "7372", description: "Computer Programming Services" },
      { code: "7379", description: "Computer Maintenance & Repair Services" },
      { code: "5732", description: "Electronics Stores" },
    ]
  },
  {
    name: "Office & Supplies",
    codes: [
      { code: "5111", description: "Stationery, Office Supplies" },
      { code: "5943", description: "Stationery Stores, Office Supplies" },
      { code: "5044", description: "Office, Photographic, Photocopy Equipment" },
      { code: "5712", description: "Furniture, Home Furnishings" },
      { code: "5021", description: "Office and Commercial Furniture" },
    ]
  },
  {
    name: "Healthcare",
    codes: [
      { code: "5912", description: "Drug Stores and Pharmacies" },
      { code: "8011", description: "Doctors and Physicians" },
      { code: "8021", description: "Dentists and Orthodontists" },
      { code: "8062", description: "Hospitals" },
      { code: "8099", description: "Medical Services and Health Practitioners" },
      { code: "8050", description: "Nursing and Personal Care Facilities" },
      { code: "8071", description: "Medical and Dental Laboratories" },
      { code: "8043", description: "Optometrists, Ophthalmologists" },
    ]
  },
  {
    name: "Online Services",
    codes: [
      { code: "5818", description: "Digital Goods Media - Books, Movies, Music" },
      { code: "5967", description: "Direct Marketing - Inbound Telemarketing" },
      { code: "5969", description: "Direct Marketing - Other Direct Marketers" },
      { code: "7273", description: "Dating and Escort Services" },
      { code: "4899", description: "Cable, Satellite, and Other Pay Television and Radio" },
      { code: "5968", description: "Direct Marketing - Subscription" },
    ]
  },
  {
    name: "Education",
    codes: [
      { code: "8211", description: "Elementary and Secondary Schools" },
      { code: "8220", description: "Colleges, Universities, Professional Schools" },
      { code: "8299", description: "Educational Services" },
      { code: "5942", description: "Bookstores" },
      { code: "8241", description: "Correspondence Schools" },
    ]
  },
  {
    name: "Entertainment",
    codes: [
      { code: "7832", description: "Motion Picture Theaters" },
      { code: "7911", description: "Dance Halls, Studios, and Schools" },
      { code: "7922", description: "Theatrical Producers, Ticket Agencies" },
      { code: "7929", description: "Bands, Orchestras, Entertainers" },
      { code: "7991", description: "Tourist Attractions and Exhibits" },
      { code: "7994", description: "Video Game Arcades/Establishments" },
      { code: "7995", description: "Gambling Transactions" },
      { code: "7996", description: "Amusement Parks, Circuses, Carnivals" },
      { code: "7999", description: "Recreation Services" },
      { code: "7941", description: "Sports Clubs/Fields" },
    ]
  },
  {
    name: "Retail",
    codes: [
      { code: "5311", description: "Department Stores" },
      { code: "5511", description: "Car and Truck Dealers" },
      { code: "5533", description: "Auto Parts and Accessories Stores" },
      { code: "5541", description: "Service Stations (Gas Stations)" },
      { code: "5651", description: "Family Clothing Stores" },
      { code: "5691", description: "Men's and Women's Clothing Stores" },
      { code: "5942", description: "Bookstores" },
      { code: "5977", description: "Cosmetic Stores" },
      { code: "5999", description: "Miscellaneous Retail Stores" },
    ]
  },
  {
    name: "Miscellaneous",
    codes: [
      { code: "4900", description: "Utilities - Electric, Gas, Water, Sanitary" },
      { code: "6300", description: "Insurance Sales, Underwriting" },
      { code: "8699", description: "Membership Organizations" },
      { code: "6211", description: "Securities - Brokers/Dealers" },
      { code: "6513", description: "Real Estate Agents and Managers - Rentals" },
      { code: "7299", description: "Miscellaneous Personal Services" },
      { code: "7278", description: "Buying/Shopping Services" },
    ]
  }
];

// Simple array of all MCC codes for direct access
export const ALL_MCC_CODES = MCC_CATEGORIES.flatMap(category => 
  category.codes.map(code => ({
    ...code,
    category: category.name
  }))
);

// Helper function to find MCC description by code
export const getMCCDescription = (code: string): string => {
  const mcc = ALL_MCC_CODES.find(mcc => mcc.code === code);
  return mcc ? `${mcc.description} (${mcc.code})` : code;
};

// Helper function to find MCCs by partial text match
export const searchMCCs = (query: string): MCCCode[] => {
  const lowerQuery = query.toLowerCase();
  return ALL_MCC_CODES.filter(
    mcc => mcc.code.includes(lowerQuery) || 
           mcc.description.toLowerCase().includes(lowerQuery) ||
           mcc.category.toLowerCase().includes(lowerQuery)
  );
}; 