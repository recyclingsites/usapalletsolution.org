export interface City {
  name: string
  slug: string
  population: string
  description: string
  serviceAreas: string[]
  industries: string[]
}

export interface State {
  name: string
  slug: string
  abbreviation: string
  population: string
  description: string
  cities: City[]
  keyIndustries: string[]
  warehouseLocations: number
}

export const statesData: State[] = [
  {
    name: 'Alabama',
    slug: 'alabama',
    abbreviation: 'AL',
    population: '5.1 million',
    description: 'Alabama is a key industrial hub in the Southeast, with strong automotive manufacturing, aerospace, and logistics sectors. We serve businesses throughout the state with comprehensive pallet solutions.',
    keyIndustries: ['Automotive Manufacturing', 'Aerospace', 'Steel Production', 'Agriculture', 'Logistics'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Birmingham',
        slug: 'birmingham',
        population: '200,000+',
        description: 'The largest city in Alabama and a major industrial center. Birmingham\'s steel and automotive industries require robust pallet solutions for heavy-duty applications.',
        serviceAreas: ['Downtown Birmingham', 'Hoover', 'Vestavia Hills', 'Mountain Brook', 'Homewood'],
        industries: ['Steel Manufacturing', 'Automotive', 'Healthcare', 'Banking', 'Distribution']
      },
      {
        name: 'Montgomery',
        slug: 'montgomery',
        population: '200,000+',
        description: 'Alabama\'s capital city with growing manufacturing and distribution sectors. We provide fast delivery and comprehensive pallet services to Montgomery businesses.',
        serviceAreas: ['Downtown Montgomery', 'Prattville', 'Millbrook', 'Wetumpka', 'Pike Road'],
        industries: ['Government', 'Manufacturing', 'Retail', 'Distribution', 'Agriculture']
      },
      {
        name: 'Mobile',
        slug: 'mobile',
        population: '187,000+',
        description: 'Major Gulf Coast port city with extensive shipping and logistics operations. Our export-ready pallets meet all international standards.',
        serviceAreas: ['Downtown Mobile', 'Daphne', 'Fairhope', 'Saraland', 'Prichard'],
        industries: ['Port Operations', 'Shipbuilding', 'Aerospace', 'Chemical', 'Paper Products']
      }
    ]
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    abbreviation: 'AK',
    population: '733,000',
    description: 'Alaska\'s unique climate and remote locations require specialized pallet solutions. We provide weather-resistant pallets suitable for extreme conditions and long-distance shipping.',
    keyIndustries: ['Oil & Gas', 'Fishing', 'Tourism', 'Mining', 'Timber'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Anchorage',
        slug: 'anchorage',
        population: '288,000+',
        description: 'Alaska\'s largest city and economic hub. Our pallets are built to withstand extreme temperatures and harsh weather conditions.',
        serviceAreas: ['Downtown Anchorage', 'Eagle River', 'Girdwood', 'Chugiak', 'Palmer'],
        industries: ['Oil & Gas', 'Aviation', 'Seafood Processing', 'Tourism', 'Healthcare']
      },
      {
        name: 'Fairbanks',
        slug: 'fairbanks',
        population: '32,000+',
        description: 'Interior Alaska\'s largest city with mining and military operations requiring durable cold-weather pallets.',
        serviceAreas: ['Downtown Fairbanks', 'North Pole', 'Fort Wainwright', 'Eielson AFB', 'Salcha'],
        industries: ['Mining', 'Military', 'Tourism', 'Education', 'Research']
      }
    ]
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    abbreviation: 'AZ',
    population: '7.4 million',
    description: 'Arizona\'s rapidly growing economy and strategic location make it a logistics hub for the Southwest. We serve major distribution centers and manufacturing facilities throughout the state.',
    keyIndustries: ['Electronics', 'Aerospace', 'Mining', 'Tourism', 'Agriculture'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Phoenix',
        slug: 'phoenix',
        population: '1.7 million+',
        description: 'One of America\'s fastest-growing cities and a major logistics hub. Phoenix is home to numerous distribution centers requiring large-scale pallet solutions.',
        serviceAreas: ['Downtown Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Glendale', 'Chandler', 'Gilbert'],
        industries: ['Electronics Manufacturing', 'Aerospace', 'Healthcare', 'Distribution', 'Real Estate']
      },
      {
        name: 'Tucson',
        slug: 'tucson',
        population: '545,000+',
        description: 'Southern Arizona\'s largest city with aerospace, defense, and optics industries. We provide precision-manufactured pallets for sensitive equipment.',
        serviceAreas: ['Downtown Tucson', 'Oro Valley', 'Marana', 'Sahuarita', 'Catalina'],
        industries: ['Aerospace', 'Defense', 'Optics', 'Mining', 'Tourism']
      }
    ]
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    abbreviation: 'AR',
    population: '3.0 million',
    description: 'Home to Walmart headquarters, Arkansas is a logistics powerhouse. We serve the state\'s major distribution networks and agricultural industries.',
    keyIndustries: ['Retail Distribution', 'Agriculture', 'Manufacturing', 'Food Processing', 'Poultry'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Little Rock',
        slug: 'little-rock',
        population: '202,000+',
        description: 'Arkansas\' capital and largest city, central to the state\'s distribution networks.',
        serviceAreas: ['Downtown Little Rock', 'North Little Rock', 'Conway', 'Benton', 'Bryant'],
        industries: ['Healthcare', 'Banking', 'Transportation', 'Government', 'Retail']
      },
      {
        name: 'Bentonville',
        slug: 'bentonville',
        population: '55,000+',
        description: 'Home to Walmart HQ - one of the world\'s largest retailers. We provide high-volume pallet solutions for massive distribution operations.',
        serviceAreas: ['Bentonville', 'Rogers', 'Springdale', 'Fayetteville', 'Bella Vista'],
        industries: ['Retail', 'Distribution', 'Trucking', 'Warehousing', 'Supplier Networks']
      }
    ]
  },
  {
    name: 'California',
    slug: 'california',
    abbreviation: 'CA',
    population: '39.5 million',
    description: 'California\'s massive economy spans technology, agriculture, entertainment, and international trade. With multiple ports and distribution hubs, we provide comprehensive pallet solutions throughout the state.',
    keyIndustries: ['Technology', 'Agriculture', 'Entertainment', 'International Trade', 'Manufacturing'],
    warehouseLocations: 8,
    cities: [
      {
        name: 'Los Angeles',
        slug: 'los-angeles',
        population: '4 million+',
        description: 'America\'s second-largest city and home to the nation\'s busiest port complex. We serve LA\'s diverse industries from entertainment to international shipping.',
        serviceAreas: ['Downtown LA', 'Long Beach', 'San Pedro', 'Glendale', 'Pasadena', 'Santa Monica', 'Burbank'],
        industries: ['Port Operations', 'Entertainment', 'Fashion', 'Manufacturing', 'International Trade']
      },
      {
        name: 'San Francisco',
        slug: 'san-francisco',
        population: '875,000+',
        description: 'Tech hub and major port city. We provide specialized pallets for technology equipment and high-value goods.',
        serviceAreas: ['Downtown SF', 'Oakland', 'San Jose', 'Berkeley', 'Fremont', 'Hayward'],
        industries: ['Technology', 'Finance', 'Tourism', 'Port Operations', 'Biotechnology']
      },
      {
        name: 'San Diego',
        slug: 'san-diego',
        population: '1.4 million+',
        description: 'Major border city with Mexico and significant military presence. We serve defense contractors and international trade operations.',
        serviceAreas: ['Downtown San Diego', 'Chula Vista', 'Oceanside', 'Escondido', 'Carlsbad'],
        industries: ['Military', 'Biotechnology', 'Telecommunications', 'Tourism', 'Manufacturing']
      },
      {
        name: 'Sacramento',
        slug: 'sacramento',
        population: '525,000+',
        description: 'California\'s capital with strong government and agricultural sectors.',
        serviceAreas: ['Downtown Sacramento', 'Elk Grove', 'Roseville', 'Folsom', 'Davis'],
        industries: ['Government', 'Healthcare', 'Agriculture', 'Education', 'Technology']
      }
    ]
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    abbreviation: 'CO',
    population: '5.8 million',
    description: 'Colorado\'s thriving economy combines technology, aerospace, tourism, and agriculture. We provide pallet solutions adapted for high-altitude conditions and mountain logistics.',
    keyIndustries: ['Technology', 'Aerospace', 'Tourism', 'Agriculture', 'Brewing'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Denver',
        slug: 'denver',
        population: '715,000+',
        description: 'Mile High City and major distribution hub for the Rocky Mountain region. Strategic location makes Denver crucial for Western US logistics.',
        serviceAreas: ['Downtown Denver', 'Aurora', 'Lakewood', 'Thornton', 'Arvada', 'Westminster'],
        industries: ['Technology', 'Aerospace', 'Telecommunications', 'Energy', 'Healthcare']
      },
      {
        name: 'Colorado Springs',
        slug: 'colorado-springs',
        population: '480,000+',
        description: 'Home to military installations and defense contractors requiring specialized pallet solutions.',
        serviceAreas: ['Downtown Colorado Springs', 'Fountain', 'Monument', 'Manitou Springs', 'Security-Widefield'],
        industries: ['Military', 'Defense', 'Tourism', 'Technology', 'Healthcare']
      }
    ]
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    abbreviation: 'CT',
    population: '3.6 million',
    description: 'Connecticut\'s strategic location between New York and Boston makes it vital for Northeast logistics. We serve manufacturing, insurance, and pharmaceutical industries.',
    keyIndustries: ['Insurance', 'Manufacturing', 'Pharmaceuticals', 'Finance', 'Aerospace'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Hartford',
        slug: 'hartford',
        population: '120,000+',
        description: 'Insurance Capital of the World. We serve Hartford\'s corporate headquarters and distribution centers.',
        serviceAreas: ['Downtown Hartford', 'West Hartford', 'East Hartford', 'Bloomfield', 'Newington'],
        industries: ['Insurance', 'Healthcare', 'Government', 'Education', 'Manufacturing']
      },
      {
        name: 'Bridgeport',
        slug: 'bridgeport',
        population: '145,000+',
        description: 'Connecticut\'s largest city with manufacturing and port operations.',
        serviceAreas: ['Downtown Bridgeport', 'Fairfield', 'Stratford', 'Trumbull', 'Milford'],
        industries: ['Manufacturing', 'Healthcare', 'Port Operations', 'Retail', 'Finance']
      }
    ]
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    abbreviation: 'DE',
    population: '1.0 million',
    description: 'Delaware\'s business-friendly environment and strategic East Coast location make it a corporate and logistics hub. We provide comprehensive pallet services throughout the state.',
    keyIndustries: ['Finance', 'Chemical', 'Pharmaceuticals', 'Agriculture', 'Manufacturing'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Wilmington',
        slug: 'wilmington',
        population: '71,000+',
        description: 'Corporate Capital of America with major financial and chemical industries.',
        serviceAreas: ['Downtown Wilmington', 'Newark', 'Dover', 'Middletown', 'Bear'],
        industries: ['Finance', 'Chemical', 'Healthcare', 'Education', 'Legal Services']
      }
    ]
  },
  {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    population: '22.6 million',
    description: 'Florida\'s tourism, agriculture, and international trade sectors require diverse pallet solutions. We serve major ports, theme parks, and distribution centers throughout the Sunshine State.',
    keyIndustries: ['Tourism', 'Agriculture', 'International Trade', 'Aerospace', 'Healthcare'],
    warehouseLocations: 5,
    cities: [
      {
        name: 'Miami',
        slug: 'miami',
        population: '470,000+',
        description: 'Gateway to Latin America with massive port operations. We provide export-ready pallets meeting international standards for Caribbean and South American trade.',
        serviceAreas: ['Downtown Miami', 'Miami Beach', 'Coral Gables', 'Hialeah', 'Doral', 'Kendall'],
        industries: ['International Trade', 'Port Operations', 'Tourism', 'Finance', 'Real Estate']
      },
      {
        name: 'Tampa',
        slug: 'tampa',
        population: '400,000+',
        description: 'Major Gulf Coast port and distribution center. Strong manufacturing and cigar industry presence.',
        serviceAreas: ['Downtown Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Plant City'],
        industries: ['Port Operations', 'Manufacturing', 'Tourism', 'Healthcare', 'Finance']
      },
      {
        name: 'Orlando',
        slug: 'orlando',
        population: '310,000+',
        description: 'Theme park capital of the world. We serve major entertainment venues and related distribution networks.',
        serviceAreas: ['Downtown Orlando', 'Kissimmee', 'Winter Park', 'Sanford', 'Altamonte Springs'],
        industries: ['Tourism', 'Entertainment', 'Technology', 'Healthcare', 'Distribution']
      },
      {
        name: 'Jacksonville',
        slug: 'jacksonville',
        population: '950,000+',
        description: 'Florida\'s largest city by area with major port and military operations.',
        serviceAreas: ['Downtown Jacksonville', 'Jacksonville Beach', 'Orange Park', 'St. Augustine', 'Ponte Vedra'],
        industries: ['Port Operations', 'Military', 'Finance', 'Healthcare', 'Distribution']
      }
    ]
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    abbreviation: 'GA',
    population: '11.0 million',
    description: 'Georgia is a major logistics and distribution hub for the Southeast. Atlanta\'s airport and extensive rail network make it crucial for supply chain operations.',
    keyIndustries: ['Logistics', 'Manufacturing', 'Film Production', 'Agriculture', 'Technology'],
    warehouseLocations: 4,
    cities: [
      {
        name: 'Atlanta',
        slug: 'atlanta',
        population: '500,000+',
        description: 'Capital of the South and home to the world\'s busiest airport. Atlanta is a major distribution hub requiring massive pallet volumes.',
        serviceAreas: ['Downtown Atlanta', 'Marietta', 'Sandy Springs', 'Roswell', 'Decatur', 'Alpharetta'],
        industries: ['Logistics', 'Technology', 'Film Production', 'Finance', 'Healthcare']
      },
      {
        name: 'Savannah',
        slug: 'savannah',
        population: '145,000+',
        description: 'Major East Coast port city. We provide export pallets and high-volume solutions for port operations.',
        serviceAreas: ['Downtown Savannah', 'Pooler', 'Richmond Hill', 'Port Wentworth', 'Tybee Island'],
        industries: ['Port Operations', 'Manufacturing', 'Tourism', 'Military', 'Distribution']
      },
      {
        name: 'Augusta',
        slug: 'augusta',
        population: '200,000+',
        description: 'Major medical and cyber security hub along the Savannah River.',
        serviceAreas: ['Downtown Augusta', 'Evans', 'Martinez', 'Grovetown', 'Hephzibah'],
        industries: ['Healthcare', 'Cyber Security', 'Military', 'Manufacturing', 'Tourism']
      }
    ]
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    abbreviation: 'HI',
    population: '1.4 million',
    description: 'Hawaii\'s island geography requires specialized shipping solutions. We provide maritime-grade pallets resistant to salt air and humidity.',
    keyIndustries: ['Tourism', 'Agriculture', 'Military', 'Shipping', 'Renewable Energy'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Honolulu',
        slug: 'honolulu',
        population: '350,000+',
        description: 'Pacific hub for tourism and military operations. We provide moisture-resistant pallets for island conditions.',
        serviceAreas: ['Downtown Honolulu', 'Waikiki', 'Pearl City', 'Kailua', 'Kaneohe'],
        industries: ['Tourism', 'Military', 'Shipping', 'Healthcare', 'Retail']
      }
    ]
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    abbreviation: 'ID',
    population: '1.9 million',
    description: 'Idaho\'s agricultural and technology sectors require diverse pallet solutions. We serve food processing and high-tech manufacturing throughout the state.',
    keyIndustries: ['Agriculture', 'Food Processing', 'Technology', 'Mining', 'Lumber'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Boise',
        slug: 'boise',
        population: '235,000+',
        description: 'Idaho\'s capital and largest city with growing technology sector.',
        serviceAreas: ['Downtown Boise', 'Meridian', 'Nampa', 'Caldwell', 'Eagle'],
        industries: ['Technology', 'Healthcare', 'Government', 'Manufacturing', 'Agriculture']
      }
    ]
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    abbreviation: 'IL',
    population: '12.6 million',
    description: 'Illinois is America\'s transportation hub with Chicago at its center. We serve the nation\'s largest rail network and extensive manufacturing sector.',
    keyIndustries: ['Transportation', 'Manufacturing', 'Finance', 'Agriculture', 'Technology'],
    warehouseLocations: 5,
    cities: [
      {
        name: 'Chicago',
        slug: 'chicago',
        population: '2.7 million+',
        description: 'Third-largest US city and the nation\'s rail hub. Chicago\'s massive distribution networks require large-scale pallet operations.',
        serviceAreas: ['Downtown Chicago', 'Naperville', 'Aurora', 'Joliet', 'Schaumburg', 'Elgin'],
        industries: ['Transportation', 'Finance', 'Manufacturing', 'Technology', 'Healthcare']
      },
      {
        name: 'Springfield',
        slug: 'springfield',
        population: '115,000+',
        description: 'Illinois\' capital with government and healthcare sectors.',
        serviceAreas: ['Downtown Springfield', 'Chatham', 'Sherman', 'Rochester', 'Jerome'],
        industries: ['Government', 'Healthcare', 'Insurance', 'Education', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    abbreviation: 'IN',
    population: '6.8 million',
    description: 'Indiana\'s central location and manufacturing heritage make it vital for Midwest logistics. We serve automotive, pharmaceutical, and agricultural industries.',
    keyIndustries: ['Manufacturing', 'Automotive', 'Pharmaceuticals', 'Agriculture', 'Logistics'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Indianapolis',
        slug: 'indianapolis',
        population: '880,000+',
        description: 'Crossroads of America. Indianapolis\' central location makes it a major distribution hub.',
        serviceAreas: ['Downtown Indianapolis', 'Carmel', 'Fishers', 'Greenwood', 'Noblesville'],
        industries: ['Manufacturing', 'Pharmaceuticals', 'Healthcare', 'Logistics', 'Sports']
      },
      {
        name: 'Fort Wayne',
        slug: 'fort-wayne',
        population: '270,000+',
        description: 'Major manufacturing center in northeastern Indiana.',
        serviceAreas: ['Downtown Fort Wayne', 'New Haven', 'Woodburn', 'Leo-Cedarville', 'Huntertown'],
        industries: ['Manufacturing', 'Defense', 'Healthcare', 'Education', 'Distribution']
      }
    ]
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    abbreviation: 'IA',
    population: '3.2 million',
    description: 'Iowa\'s agricultural dominance and food processing industry require specialized food-grade pallets. We serve the nation\'s breadbasket with comprehensive solutions.',
    keyIndustries: ['Agriculture', 'Food Processing', 'Manufacturing', 'Insurance', 'Renewable Energy'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Des Moines',
        slug: 'des-moines',
        population: '215,000+',
        description: 'Iowa\'s capital and insurance hub. We provide pallets for agricultural products and distribution operations.',
        serviceAreas: ['Downtown Des Moines', 'West Des Moines', 'Ankeny', 'Urbandale', 'Johnston'],
        industries: ['Insurance', 'Agriculture', 'Finance', 'Government', 'Healthcare']
      },
      {
        name: 'Cedar Rapids',
        slug: 'cedar-rapids',
        population: '135,000+',
        description: 'Major manufacturing and food processing center.',
        serviceAreas: ['Downtown Cedar Rapids', 'Marion', 'Hiawatha', 'Robins', 'Ely'],
        industries: ['Food Processing', 'Manufacturing', 'Agriculture', 'Technology', 'Healthcare']
      }
    ]
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    abbreviation: 'KS',
    population: '2.9 million',
    description: 'Kansas\' agricultural and aviation industries drive our pallet operations. We serve wheat processing and aircraft manufacturing throughout the state.',
    keyIndustries: ['Agriculture', 'Aviation', 'Manufacturing', 'Energy', 'Livestock'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Wichita',
        slug: 'wichita',
        population: '395,000+',
        description: 'Air Capital of the World. Aircraft manufacturing requires precision pallets for sensitive components.',
        serviceAreas: ['Downtown Wichita', 'Derby', 'Andover', 'Haysville', 'Goddard'],
        industries: ['Aviation', 'Manufacturing', 'Healthcare', 'Energy', 'Agriculture']
      },
      {
        name: 'Kansas City',
        slug: 'kansas-city-ks',
        population: '155,000+',
        description: 'Major logistics hub on Kansas-Missouri border.',
        serviceAreas: ['Downtown KCK', 'Overland Park', 'Olathe', 'Lenexa', 'Shawnee'],
        industries: ['Logistics', 'Manufacturing', 'Automotive', 'Healthcare', 'Distribution']
      }
    ]
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    abbreviation: 'KY',
    population: '4.5 million',
    description: 'Kentucky\'s bourbon, automotive, and logistics industries require diverse pallet solutions. Louisville\'s UPS Worldport makes it a global shipping hub.',
    keyIndustries: ['Automotive', 'Logistics', 'Bourbon', 'Agriculture', 'Manufacturing'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Louisville',
        slug: 'louisville',
        population: '630,000+',
        description: 'Home to UPS Worldport - world\'s largest automated package handling facility. Major logistics and bourbon hub.',
        serviceAreas: ['Downtown Louisville', 'Jeffersontown', 'Shively', 'St. Matthews', 'Okolona'],
        industries: ['Logistics', 'Manufacturing', 'Bourbon', 'Healthcare', 'Distribution']
      },
      {
        name: 'Lexington',
        slug: 'lexington',
        population: '320,000+',
        description: 'Horse Capital of the World with technology and manufacturing sectors.',
        serviceAreas: ['Downtown Lexington', 'Georgetown', 'Winchester', 'Nicholasville', 'Richmond'],
        industries: ['Agriculture', 'Technology', 'Manufacturing', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    abbreviation: 'LA',
    population: '4.6 million',
    description: 'Louisiana\'s ports and petrochemical industry require heavy-duty and chemical-resistant pallets. We serve the Gulf Coast\'s major industrial operations.',
    keyIndustries: ['Oil & Gas', 'Petrochemicals', 'Port Operations', 'Agriculture', 'Tourism'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'New Orleans',
        slug: 'new-orleans',
        population: '385,000+',
        description: 'Major port city on the Mississippi River. We provide export pallets and solutions for Gulf Coast shipping.',
        serviceAreas: ['Downtown New Orleans', 'Metairie', 'Kenner', 'Marrero', 'Chalmette'],
        industries: ['Port Operations', 'Tourism', 'Oil & Gas', 'Healthcare', 'Shipping']
      },
      {
        name: 'Baton Rouge',
        slug: 'baton-rouge',
        population: '225,000+',
        description: 'Louisiana\'s capital and petrochemical hub. Chemical-resistant pallets for industrial operations.',
        serviceAreas: ['Downtown Baton Rouge', 'Denham Springs', 'Zachary', 'Baker', 'Central'],
        industries: ['Petrochemicals', 'Oil & Gas', 'Government', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'Maine',
    slug: 'maine',
    abbreviation: 'ME',
    population: '1.4 million',
    description: 'Maine\'s seafood, paper, and tourism industries require moisture-resistant and export-ready pallets. We serve coastal operations throughout the state.',
    keyIndustries: ['Seafood', 'Paper Products', 'Tourism', 'Lumber', 'Manufacturing'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Portland',
        slug: 'portland',
        population: '68,000+',
        description: 'Maine\'s largest city and major port. We provide seafood-grade and export pallets.',
        serviceAreas: ['Downtown Portland', 'South Portland', 'Westbrook', 'Scarborough', 'Falmouth'],
        industries: ['Seafood', 'Port Operations', 'Tourism', 'Healthcare', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    abbreviation: 'MD',
    population: '6.2 million',
    description: 'Maryland\'s proximity to Washington DC and the Port of Baltimore make it vital for government and international trade. We serve diverse industries throughout the state.',
    keyIndustries: ['Government', 'Biotechnology', 'Port Operations', 'Cyber Security', 'Healthcare'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Baltimore',
        slug: 'baltimore',
        population: '575,000+',
        description: 'Major East Coast port and industrial center. We provide export pallets and heavy-duty solutions.',
        serviceAreas: ['Downtown Baltimore', 'Columbia', 'Towson', 'Dundalk', 'Glen Burnie'],
        industries: ['Port Operations', 'Healthcare', 'Biotechnology', 'Manufacturing', 'Education']
      }
    ]
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    population: '7.0 million',
    description: 'Massachusetts\' technology, biotechnology, and education sectors require specialized pallets. Boston\'s port operations serve international trade.',
    keyIndustries: ['Technology', 'Biotechnology', 'Healthcare', 'Education', 'Finance'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Boston',
        slug: 'boston',
        population: '675,000+',
        description: 'Hub of education, technology, and healthcare. We serve Boston\'s diverse industries and port operations.',
        serviceAreas: ['Downtown Boston', 'Cambridge', 'Quincy', 'Somerville', 'Newton', 'Brookline'],
        industries: ['Technology', 'Biotechnology', 'Healthcare', 'Finance', 'Education']
      },
      {
        name: 'Worcester',
        slug: 'worcester',
        population: '205,000+',
        description: 'Central Massachusetts manufacturing and healthcare hub.',
        serviceAreas: ['Downtown Worcester', 'Shrewsbury', 'Auburn', 'Millbury', 'Holden'],
        industries: ['Manufacturing', 'Healthcare', 'Education', 'Biotechnology', 'Technology']
      }
    ]
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    abbreviation: 'MI',
    population: '10.1 million',
    description: 'Michigan\'s automotive industry and Great Lakes ports drive massive pallet demand. We serve manufacturing and shipping operations throughout the state.',
    keyIndustries: ['Automotive', 'Manufacturing', 'Agriculture', 'Technology', 'Port Operations'],
    warehouseLocations: 4,
    cities: [
      {
        name: 'Detroit',
        slug: 'detroit',
        population: '640,000+',
        description: 'Motor City and automotive capital. Heavy-duty pallets for manufacturing and assembly operations.',
        serviceAreas: ['Downtown Detroit', 'Dearborn', 'Warren', 'Sterling Heights', 'Livonia'],
        industries: ['Automotive', 'Manufacturing', 'Technology', 'Healthcare', 'Finance']
      },
      {
        name: 'Grand Rapids',
        slug: 'grand-rapids',
        population: '200,000+',
        description: 'Major furniture manufacturing and healthcare hub.',
        serviceAreas: ['Downtown Grand Rapids', 'Wyoming', 'Kentwood', 'Walker', 'Grandville'],
        industries: ['Manufacturing', 'Healthcare', 'Furniture', 'Technology', 'Distribution']
      }
    ]
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    abbreviation: 'MN',
    population: '5.7 million',
    description: 'Minnesota\'s diverse economy includes Fortune 500 headquarters, agriculture, and manufacturing. We provide cold-weather pallets and comprehensive logistics solutions.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Agriculture', 'Technology', 'Finance'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Minneapolis',
        slug: 'minneapolis',
        population: '430,000+',
        description: 'Twin Cities hub with major corporate headquarters and distribution centers.',
        serviceAreas: ['Downtown Minneapolis', 'St. Paul', 'Bloomington', 'Plymouth', 'Minnetonka'],
        industries: ['Healthcare', 'Finance', 'Technology', 'Manufacturing', 'Retail']
      },
      {
        name: 'Rochester',
        slug: 'rochester-mn',
        population: '120,000+',
        description: 'Home to Mayo Clinic - world-renowned medical center.',
        serviceAreas: ['Downtown Rochester', 'Byron', 'Stewartville', 'Kasson', 'Pine Island'],
        industries: ['Healthcare', 'Technology', 'Manufacturing', 'Education', 'Research']
      }
    ]
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    abbreviation: 'MS',
    population: '2.9 million',
    description: 'Mississippi\'s agriculture, manufacturing, and Gulf Coast operations require diverse pallet solutions. We serve industries throughout the state.',
    keyIndustries: ['Agriculture', 'Manufacturing', 'Shipbuilding', 'Forestry', 'Gaming'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Jackson',
        slug: 'jackson',
        population: '150,000+',
        description: 'Mississippi\'s capital and largest city with manufacturing and healthcare sectors.',
        serviceAreas: ['Downtown Jackson', 'Pearl', 'Clinton', 'Brandon', 'Ridgeland'],
        industries: ['Government', 'Healthcare', 'Manufacturing', 'Education', 'Distribution']
      },
      {
        name: 'Gulfport',
        slug: 'gulfport',
        population: '72,000+',
        description: 'Gulf Coast port and casino hub.',
        serviceAreas: ['Downtown Gulfport', 'Biloxi', 'Long Beach', 'Pass Christian', 'D\'Iberville'],
        industries: ['Port Operations', 'Gaming', 'Tourism', 'Shipbuilding', 'Seafood']
      }
    ]
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    abbreviation: 'MO',
    population: '6.2 million',
    description: 'Missouri\'s central location makes it a major transportation and logistics hub. We serve St. Louis and Kansas City\'s diverse industries.',
    keyIndustries: ['Transportation', 'Manufacturing', 'Agriculture', 'Healthcare', 'Aerospace'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Kansas City',
        slug: 'kansas-city',
        population: '510,000+',
        description: 'Major logistics and distribution hub. BBQ capital with strong manufacturing sector.',
        serviceAreas: ['Downtown Kansas City', 'Independence', 'Lee\'s Summit', 'Blue Springs', 'Raytown'],
        industries: ['Logistics', 'Manufacturing', 'Healthcare', 'Technology', 'Distribution']
      },
      {
        name: 'St. Louis',
        slug: 'st-louis',
        population: '300,000+',
        description: 'Gateway to the West. Major transportation and manufacturing center.',
        serviceAreas: ['Downtown St. Louis', 'Clayton', 'University City', 'Kirkwood', 'Webster Groves'],
        industries: ['Transportation', 'Manufacturing', 'Healthcare', 'Finance', 'Biotechnology']
      }
    ]
  },
  {
    name: 'Montana',
    slug: 'montana',
    abbreviation: 'MT',
    population: '1.1 million',
    description: 'Montana\'s mining, agriculture, and energy sectors require durable pallets for rugged conditions. We serve operations across Big Sky Country.',
    keyIndustries: ['Mining', 'Agriculture', 'Energy', 'Tourism', 'Lumber'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Billings',
        slug: 'billings',
        population: '110,000+',
        description: 'Montana\'s largest city and energy hub.',
        serviceAreas: ['Downtown Billings', 'Lockwood', 'Laurel', 'Shepherd', 'Worden'],
        industries: ['Energy', 'Healthcare', 'Agriculture', 'Transportation', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    abbreviation: 'NE',
    population: '2.0 million',
    description: 'Nebraska\'s agricultural and food processing industries drive pallet demand. We provide food-grade pallets and agricultural solutions throughout the state.',
    keyIndustries: ['Agriculture', 'Food Processing', 'Transportation', 'Insurance', 'Manufacturing'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Omaha',
        slug: 'omaha',
        population: '485,000+',
        description: 'Major transportation and food processing hub. Home to several Fortune 500 companies.',
        serviceAreas: ['Downtown Omaha', 'Bellevue', 'Papillion', 'La Vista', 'Ralston'],
        industries: ['Food Processing', 'Transportation', 'Insurance', 'Telecommunications', 'Finance']
      }
    ]
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    abbreviation: 'NV',
    population: '3.2 million',
    description: 'Nevada\'s gaming, mining, and logistics sectors require specialized pallet solutions. Las Vegas and Reno drive major distribution operations.',
    keyIndustries: ['Gaming', 'Mining', 'Tourism', 'Logistics', 'Technology'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Las Vegas',
        slug: 'las-vegas',
        population: '650,000+',
        description: 'Entertainment capital and major convention destination. Massive hospitality and distribution operations.',
        serviceAreas: ['Downtown Las Vegas', 'Henderson', 'North Las Vegas', 'Summerlin', 'Paradise'],
        industries: ['Gaming', 'Tourism', 'Entertainment', 'Distribution', 'Technology']
      },
      {
        name: 'Reno',
        slug: 'reno',
        population: '265,000+',
        description: 'Biggest Little City with major logistics and technology operations.',
        serviceAreas: ['Downtown Reno', 'Sparks', 'Carson City', 'Fernley', 'Incline Village'],
        industries: ['Logistics', 'Technology', 'Gaming', 'Mining', 'Distribution']
      }
    ]
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    abbreviation: 'NH',
    population: '1.4 million',
    description: 'New Hampshire\'s manufacturing and technology sectors require precision pallets. We serve industries throughout the Granite State.',
    keyIndustries: ['Manufacturing', 'Technology', 'Healthcare', 'Tourism', 'Education'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Manchester',
        slug: 'manchester',
        population: '115,000+',
        description: 'New Hampshire\'s largest city with manufacturing and healthcare sectors.',
        serviceAreas: ['Downtown Manchester', 'Nashua', 'Concord', 'Derry', 'Rochester'],
        industries: ['Manufacturing', 'Healthcare', 'Technology', 'Education', 'Finance']
      }
    ]
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    population: '9.3 million',
    description: 'New Jersey\'s strategic location between New York and Philadelphia makes it a logistics powerhouse. Major port and pharmaceutical operations drive pallet demand.',
    keyIndustries: ['Pharmaceuticals', 'Logistics', 'Manufacturing', 'Technology', 'Port Operations'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Newark',
        slug: 'newark',
        population: '310,000+',
        description: 'Major port and transportation hub serving the New York metro area.',
        serviceAreas: ['Downtown Newark', 'Jersey City', 'Elizabeth', 'Paterson', 'Edison'],
        industries: ['Port Operations', 'Transportation', 'Finance', 'Healthcare', 'Manufacturing']
      },
      {
        name: 'Trenton',
        slug: 'trenton',
        population: '90,000+',
        description: 'New Jersey\'s capital with pharmaceutical and manufacturing sectors.',
        serviceAreas: ['Downtown Trenton', 'Princeton', 'Ewing', 'Hamilton', 'Lawrence'],
        industries: ['Pharmaceuticals', 'Government', 'Manufacturing', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    abbreviation: 'NM',
    population: '2.1 million',
    description: 'New Mexico\'s oil & gas, military, and technology sectors require specialized pallets. We serve operations throughout the Land of Enchantment.',
    keyIndustries: ['Oil & Gas', 'Military', 'Technology', 'Mining', 'Tourism'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Albuquerque',
        slug: 'albuquerque',
        population: '560,000+',
        description: 'New Mexico\'s largest city with technology and military sectors.',
        serviceAreas: ['Downtown Albuquerque', 'Rio Rancho', 'Santa Fe', 'Los Lunas', 'Bernalillo'],
        industries: ['Technology', 'Military', 'Healthcare', 'Tourism', 'Manufacturing']
      }
    ]
  },
  {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    population: '19.8 million',
    description: 'New York\'s massive economy and port operations make it crucial for national and international trade. We serve the greater New York area with comprehensive pallet solutions.',
    keyIndustries: ['Finance', 'International Trade', 'Fashion', 'Media', 'Technology'],
    warehouseLocations: 4,
    cities: [
      {
        name: 'New York City',
        slug: 'new-york-city',
        population: '8.3 million+',
        description: 'America\'s largest city and financial capital. We serve Manhattan, Brooklyn, Queens, Bronx, and Staten Island with urban delivery expertise.',
        serviceAreas: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Jersey City'],
        industries: ['Finance', 'Fashion', 'Media', 'Technology', 'Real Estate']
      },
      {
        name: 'Buffalo',
        slug: 'buffalo',
        population: '276,000+',
        description: 'Major Great Lakes port city with manufacturing and distribution operations.',
        serviceAreas: ['Downtown Buffalo', 'Amherst', 'Cheektowaga', 'West Seneca', 'Tonawanda'],
        industries: ['Manufacturing', 'Healthcare', 'Education', 'Port Operations', 'Food Processing']
      },
      {
        name: 'Rochester',
        slug: 'rochester',
        population: '210,000+',
        description: 'Historic manufacturing city with strong optics and imaging industry.',
        serviceAreas: ['Downtown Rochester', 'Greece', 'Irondequoit', 'Brighton', 'Henrietta'],
        industries: ['Optics', 'Manufacturing', 'Healthcare', 'Education', 'Technology']
      }
    ]
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    population: '10.7 million',
    description: 'North Carolina\'s Research Triangle, banking sector, and manufacturing drive diverse pallet needs. We serve operations throughout the Tar Heel State.',
    keyIndustries: ['Technology', 'Banking', 'Manufacturing', 'Pharmaceuticals', 'Agriculture'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Charlotte',
        slug: 'charlotte',
        population: '900,000+',
        description: 'Major banking center and distribution hub. Second-largest financial center in the US.',
        serviceAreas: ['Downtown Charlotte', 'Concord', 'Gastonia', 'Rock Hill', 'Huntersville'],
        industries: ['Banking', 'Finance', 'Technology', 'Healthcare', 'Distribution']
      },
      {
        name: 'Raleigh',
        slug: 'raleigh',
        population: '470,000+',
        description: 'State capital and Research Triangle hub with technology and pharmaceutical sectors.',
        serviceAreas: ['Downtown Raleigh', 'Durham', 'Chapel Hill', 'Cary', 'Apex'],
        industries: ['Technology', 'Pharmaceuticals', 'Government', 'Education', 'Healthcare']
      },
      {
        name: 'Greensboro',
        slug: 'greensboro',
        population: '300,000+',
        description: 'Major manufacturing and distribution center.',
        serviceAreas: ['Downtown Greensboro', 'Winston-Salem', 'High Point', 'Burlington', 'Kernersville'],
        industries: ['Manufacturing', 'Distribution', 'Healthcare', 'Education', 'Technology']
      }
    ]
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    abbreviation: 'ND',
    population: '780,000',
    description: 'North Dakota\'s oil boom and agricultural operations require heavy-duty pallets for harsh conditions. We serve energy and farming operations statewide.',
    keyIndustries: ['Oil & Gas', 'Agriculture', 'Mining', 'Energy', 'Manufacturing'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Fargo',
        slug: 'fargo',
        population: '125,000+',
        description: 'North Dakota\'s largest city with agriculture and technology sectors.',
        serviceAreas: ['Downtown Fargo', 'West Fargo', 'Moorhead', 'Dilworth', 'Horace'],
        industries: ['Agriculture', 'Technology', 'Healthcare', 'Manufacturing', 'Retail']
      }
    ]
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    abbreviation: 'OH',
    population: '11.8 million',
    description: 'Ohio\'s manufacturing, logistics, and healthcare sectors make it a Midwest powerhouse. We serve major metros and industrial operations throughout the state.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Automotive', 'Logistics', 'Aerospace'],
    warehouseLocations: 4,
    cities: [
      {
        name: 'Columbus',
        slug: 'columbus',
        population: '900,000+',
        description: 'Ohio\'s capital and largest city with diverse economy and major logistics operations.',
        serviceAreas: ['Downtown Columbus', 'Dublin', 'Westerville', 'Reynoldsburg', 'Grove City'],
        industries: ['Government', 'Education', 'Healthcare', 'Technology', 'Distribution']
      },
      {
        name: 'Cleveland',
        slug: 'cleveland',
        population: '375,000+',
        description: 'Major Great Lakes port and manufacturing center.',
        serviceAreas: ['Downtown Cleveland', 'Parma', 'Lakewood', 'Cleveland Heights', 'Euclid'],
        industries: ['Manufacturing', 'Healthcare', 'Port Operations', 'Finance', 'Technology']
      },
      {
        name: 'Cincinnati',
        slug: 'cincinnati',
        population: '310,000+',
        description: 'Major river port and corporate headquarters hub.',
        serviceAreas: ['Downtown Cincinnati', 'Hamilton', 'Fairfield', 'West Chester', 'Mason'],
        industries: ['Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Distribution']
      }
    ]
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    abbreviation: 'OK',
    population: '4.0 million',
    description: 'Oklahoma\'s energy, aerospace, and agricultural sectors drive pallet demand. We serve oil & gas operations and manufacturing throughout the state.',
    keyIndustries: ['Oil & Gas', 'Aerospace', 'Agriculture', 'Energy', 'Manufacturing'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Oklahoma City',
        slug: 'oklahoma-city',
        population: '680,000+',
        description: 'State capital and energy hub with diverse economy.',
        serviceAreas: ['Downtown OKC', 'Edmond', 'Norman', 'Moore', 'Midwest City'],
        industries: ['Energy', 'Aerospace', 'Government', 'Healthcare', 'Transportation']
      },
      {
        name: 'Tulsa',
        slug: 'tulsa',
        population: '410,000+',
        description: 'Oil capital with aerospace and manufacturing sectors.',
        serviceAreas: ['Downtown Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks'],
        industries: ['Oil & Gas', 'Aerospace', 'Manufacturing', 'Healthcare', 'Technology']
      }
    ]
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    abbreviation: 'OR',
    population: '4.2 million',
    description: 'Oregon\'s technology, agriculture, and port operations require diverse pallet solutions. We serve the Pacific Northwest with eco-friendly options.',
    keyIndustries: ['Technology', 'Agriculture', 'Lumber', 'Port Operations', 'Manufacturing'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Portland',
        slug: 'portland-or',
        population: '650,000+',
        description: 'Pacific Northwest hub with major port operations and sustainable industries.',
        serviceAreas: ['Downtown Portland', 'Beaverton', 'Hillsboro', 'Gresham', 'Lake Oswego'],
        industries: ['Technology', 'Port Operations', 'Manufacturing', 'Healthcare', 'Retail']
      },
      {
        name: 'Eugene',
        slug: 'eugene',
        population: '175,000+',
        description: 'Timber and education hub with sustainable manufacturing.',
        serviceAreas: ['Downtown Eugene', 'Springfield', 'Cottage Grove', 'Veneta', 'Creswell'],
        industries: ['Lumber', 'Education', 'Manufacturing', 'Healthcare', 'Technology']
      }
    ]
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    abbreviation: 'PA',
    population: '13.0 million',
    description: 'Pennsylvania\'s manufacturing, energy, and port operations make it vital for Northeast logistics. We serve Philadelphia, Pittsburgh, and industrial operations statewide.',
    keyIndustries: ['Manufacturing', 'Energy', 'Healthcare', 'Finance', 'Port Operations'],
    warehouseLocations: 4,
    cities: [
      {
        name: 'Philadelphia',
        slug: 'philadelphia',
        population: '1.6 million+',
        description: 'Major East Coast port and pharmaceutical hub. Historic city with modern logistics operations.',
        serviceAreas: ['Downtown Philadelphia', 'Camden', 'Chester', 'Norristown', 'King of Prussia'],
        industries: ['Pharmaceuticals', 'Port Operations', 'Healthcare', 'Finance', 'Education']
      },
      {
        name: 'Pittsburgh',
        slug: 'pittsburgh',
        population: '300,000+',
        description: 'Steel City transformed into technology and healthcare hub.',
        serviceAreas: ['Downtown Pittsburgh', 'Monroeville', 'Cranberry Township', 'Bethel Park', 'Mt. Lebanon'],
        industries: ['Healthcare', 'Technology', 'Manufacturing', 'Education', 'Finance']
      },
      {
        name: 'Harrisburg',
        slug: 'harrisburg',
        population: '50,000+',
        description: 'Pennsylvania\'s capital with government and distribution sectors.',
        serviceAreas: ['Downtown Harrisburg', 'York', 'Lancaster', 'Hershey', 'Carlisle'],
        industries: ['Government', 'Distribution', 'Manufacturing', 'Healthcare', 'Agriculture']
      }
    ]
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    abbreviation: 'RI',
    population: '1.1 million',
    description: 'Rhode Island\'s small size belies its importance for Northeast logistics. We serve manufacturing, healthcare, and port operations throughout the Ocean State.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Education', 'Tourism', 'Port Operations'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Providence',
        slug: 'providence',
        population: '190,000+',
        description: 'Rhode Island\'s capital and largest city with healthcare and education sectors.',
        serviceAreas: ['Downtown Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
        industries: ['Healthcare', 'Education', 'Manufacturing', 'Port Operations', 'Tourism']
      }
    ]
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    abbreviation: 'SC',
    population: '5.3 million',
    description: 'South Carolina\'s automotive, aerospace, and port operations drive pallet demand. We serve manufacturing and logistics throughout the Palmetto State.',
    keyIndustries: ['Automotive', 'Aerospace', 'Port Operations', 'Manufacturing', 'Tourism'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Charleston',
        slug: 'charleston',
        population: '150,000+',
        description: 'Major port city with manufacturing and tourism sectors.',
        serviceAreas: ['Downtown Charleston', 'North Charleston', 'Mount Pleasant', 'Summerville', 'Goose Creek'],
        industries: ['Port Operations', 'Automotive', 'Aerospace', 'Tourism', 'Manufacturing']
      },
      {
        name: 'Columbia',
        slug: 'columbia',
        population: '135,000+',
        description: 'South Carolina\'s capital with government and manufacturing sectors.',
        serviceAreas: ['Downtown Columbia', 'Lexington', 'Irmo', 'West Columbia', 'Cayce'],
        industries: ['Government', 'Manufacturing', 'Healthcare', 'Education', 'Distribution']
      }
    ]
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    abbreviation: 'SD',
    population: '900,000',
    description: 'South Dakota\'s agriculture, tourism, and financial services require diverse pallet solutions. We serve operations throughout Mount Rushmore State.',
    keyIndustries: ['Agriculture', 'Tourism', 'Finance', 'Healthcare', 'Manufacturing'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Sioux Falls',
        slug: 'sioux-falls',
        population: '195,000+',
        description: 'South Dakota\'s largest city with finance and healthcare sectors.',
        serviceAreas: ['Downtown Sioux Falls', 'Brandon', 'Harrisburg', 'Tea', 'Dell Rapids'],
        industries: ['Finance', 'Healthcare', 'Agriculture', 'Manufacturing', 'Retail']
      }
    ]
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    abbreviation: 'TN',
    population: '7.1 million',
    description: 'Tennessee\'s central location, automotive manufacturing, and music industry create diverse pallet needs. We serve Nashville, Memphis, and industrial operations statewide.',
    keyIndustries: ['Automotive', 'Logistics', 'Healthcare', 'Manufacturing', 'Entertainment'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Nashville',
        slug: 'nashville',
        population: '690,000+',
        description: 'Music City and major healthcare hub with diverse economy.',
        serviceAreas: ['Downtown Nashville', 'Franklin', 'Murfreesboro', 'Brentwood', 'Hendersonville'],
        industries: ['Healthcare', 'Entertainment', 'Manufacturing', 'Technology', 'Tourism']
      },
      {
        name: 'Memphis',
        slug: 'memphis',
        population: '630,000+',
        description: 'Major logistics hub home to FedEx headquarters. River port and distribution center.',
        serviceAreas: ['Downtown Memphis', 'Germantown', 'Collierville', 'Bartlett', 'Southaven'],
        industries: ['Logistics', 'Distribution', 'Manufacturing', 'Healthcare', 'Entertainment']
      },
      {
        name: 'Knoxville',
        slug: 'knoxville',
        population: '190,000+',
        description: 'East Tennessee hub with manufacturing and education sectors.',
        serviceAreas: ['Downtown Knoxville', 'Farragut', 'Oak Ridge', 'Maryville', 'Clinton'],
        industries: ['Manufacturing', 'Education', 'Healthcare', 'Technology', 'Energy']
      }
    ]
  },
  {
    name: 'Texas',
    slug: 'texas',
    abbreviation: 'TX',
    population: '30.5 million',
    description: 'Texas\' massive economy, central location, and business-friendly environment make it a logistics powerhouse. We operate multiple facilities across the state serving diverse industries.',
    keyIndustries: ['Oil & Gas', 'Technology', 'Manufacturing', 'Agriculture', 'Logistics'],
    warehouseLocations: 6,
    cities: [
      {
        name: 'Houston',
        slug: 'houston',
        population: '2.3 million+',
        description: 'Energy capital of the world and home to the nation\'s largest port by tonnage. We provide heavy-duty pallets for oil & gas equipment and petrochemical products.',
        serviceAreas: ['Downtown Houston', 'Sugar Land', 'Pearland', 'The Woodlands', 'Pasadena', 'Baytown'],
        industries: ['Oil & Gas', 'Petrochemicals', 'Port Operations', 'Healthcare', 'Aerospace']
      },
      {
        name: 'Dallas',
        slug: 'dallas',
        population: '1.3 million+',
        description: 'Major business and financial hub with extensive distribution networks. Dallas-Fort Worth is one of America\'s largest logistics centers.',
        serviceAreas: ['Downtown Dallas', 'Fort Worth', 'Plano', 'Irving', 'Arlington', 'Frisco'],
        industries: ['Finance', 'Technology', 'Distribution', 'Telecommunications', 'Healthcare']
      },
      {
        name: 'Austin',
        slug: 'austin',
        population: '980,000+',
        description: 'Texas\' capital and major tech hub. We provide specialized pallets for sensitive electronics and technology equipment.',
        serviceAreas: ['Downtown Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown'],
        industries: ['Technology', 'Government', 'Education', 'Healthcare', 'Manufacturing']
      },
      {
        name: 'San Antonio',
        slug: 'san-antonio',
        population: '1.5 million+',
        description: 'Historic city with strong military presence and growing manufacturing sector.',
        serviceAreas: ['Downtown San Antonio', 'New Braunfels', 'Schertz', 'Boerne', 'Seguin'],
        industries: ['Military', 'Tourism', 'Healthcare', 'Manufacturing', 'Distribution']
      }
    ]
  },
  {
    name: 'Utah',
    slug: 'utah',
    abbreviation: 'UT',
    population: '3.4 million',
    description: 'Utah\'s technology sector and outdoor industry require specialized pallets. We serve Salt Lake City\'s Silicon Slopes and operations statewide.',
    keyIndustries: ['Technology', 'Mining', 'Tourism', 'Manufacturing', 'Healthcare'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Salt Lake City',
        slug: 'salt-lake-city',
        population: '200,000+',
        description: 'Mountain West hub with technology and outdoor industries.',
        serviceAreas: ['Downtown SLC', 'West Valley City', 'West Jordan', 'Sandy', 'Orem', 'Provo'],
        industries: ['Technology', 'Finance', 'Healthcare', 'Mining', 'Tourism']
      }
    ]
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    abbreviation: 'VT',
    population: '645,000',
    description: 'Vermont\'s agriculture, manufacturing, and tourism sectors require eco-friendly pallet solutions. We serve the Green Mountain State with sustainable options.',
    keyIndustries: ['Agriculture', 'Manufacturing', 'Tourism', 'Food Processing', 'Technology'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Burlington',
        slug: 'burlington',
        population: '44,000+',
        description: 'Vermont\'s largest city with manufacturing and healthcare sectors.',
        serviceAreas: ['Downtown Burlington', 'South Burlington', 'Winooski', 'Essex', 'Colchester'],
        industries: ['Manufacturing', 'Healthcare', 'Education', 'Tourism', 'Technology']
      }
    ]
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    abbreviation: 'VA',
    population: '8.7 million',
    description: 'Virginia\'s proximity to Washington DC, military installations, and port operations drive diverse pallet needs. We serve government contractors and commercial operations.',
    keyIndustries: ['Government', 'Military', 'Technology', 'Port Operations', 'Agriculture'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Virginia Beach',
        slug: 'virginia-beach',
        population: '450,000+',
        description: 'Major military and tourism hub with port operations.',
        serviceAreas: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Hampton', 'Newport News'],
        industries: ['Military', 'Port Operations', 'Tourism', 'Healthcare', 'Shipbuilding']
      },
      {
        name: 'Richmond',
        slug: 'richmond',
        population: '230,000+',
        description: 'Virginia\'s capital with finance and manufacturing sectors.',
        serviceAreas: ['Downtown Richmond', 'Henrico', 'Chesterfield', 'Mechanicsville', 'Glen Allen'],
        industries: ['Finance', 'Government', 'Manufacturing', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'Washington',
    slug: 'washington',
    abbreviation: 'WA',
    population: '7.8 million',
    description: 'Washington\'s technology, aerospace, and port operations make it a Pacific Northwest powerhouse. We serve Seattle\'s diverse industries and operations statewide.',
    keyIndustries: ['Technology', 'Aerospace', 'Agriculture', 'Port Operations', 'Manufacturing'],
    warehouseLocations: 3,
    cities: [
      {
        name: 'Seattle',
        slug: 'seattle',
        population: '750,000+',
        description: 'Emerald City and tech hub. Home to major tech companies and port operations.',
        serviceAreas: ['Downtown Seattle', 'Bellevue', 'Tacoma', 'Everett', 'Kent', 'Renton'],
        industries: ['Technology', 'Aerospace', 'Port Operations', 'Healthcare', 'Retail']
      },
      {
        name: 'Spokane',
        slug: 'spokane',
        population: '230,000+',
        description: 'Eastern Washington hub with healthcare and manufacturing sectors.',
        serviceAreas: ['Downtown Spokane', 'Spokane Valley', 'Liberty Lake', 'Cheney', 'Airway Heights'],
        industries: ['Healthcare', 'Manufacturing', 'Education', 'Agriculture', 'Technology']
      }
    ]
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    abbreviation: 'WV',
    population: '1.8 million',
    description: 'West Virginia\'s coal, natural gas, and chemical industries require heavy-duty pallets. We serve mining and manufacturing operations throughout the Mountain State.',
    keyIndustries: ['Mining', 'Natural Gas', 'Chemical', 'Manufacturing', 'Tourism'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Charleston',
        slug: 'charleston-wv',
        population: '47,000+',
        description: 'West Virginia\'s capital and chemical industry hub.',
        serviceAreas: ['Downtown Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'],
        industries: ['Chemical', 'Government', 'Healthcare', 'Energy', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    abbreviation: 'WI',
    population: '5.9 million',
    description: 'Wisconsin\'s manufacturing, agriculture, and brewing industries drive pallet demand. America\'s Dairyland requires food-grade and heavy-duty solutions.',
    keyIndustries: ['Manufacturing', 'Agriculture', 'Food Processing', 'Paper Products', 'Healthcare'],
    warehouseLocations: 2,
    cities: [
      {
        name: 'Milwaukee',
        slug: 'milwaukee',
        population: '575,000+',
        description: 'Major manufacturing and brewing hub on Lake Michigan.',
        serviceAreas: ['Downtown Milwaukee', 'Waukesha', 'West Allis', 'Wauwatosa', 'Brookfield'],
        industries: ['Manufacturing', 'Brewing', 'Healthcare', 'Technology', 'Port Operations']
      },
      {
        name: 'Madison',
        slug: 'madison',
        population: '270,000+',
        description: 'Wisconsin\'s capital with government, education, and technology sectors.',
        serviceAreas: ['Downtown Madison', 'Sun Prairie', 'Middleton', 'Fitchburg', 'Verona'],
        industries: ['Government', 'Education', 'Technology', 'Healthcare', 'Biotechnology']
      }
    ]
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    abbreviation: 'WY',
    population: '580,000',
    description: 'Wyoming\'s energy, mining, and tourism sectors require durable pallets for extreme conditions. We serve operations across the Cowboy State.',
    keyIndustries: ['Energy', 'Mining', 'Tourism', 'Agriculture', 'Manufacturing'],
    warehouseLocations: 1,
    cities: [
      {
        name: 'Cheyenne',
        slug: 'cheyenne',
        population: '65,000+',
        description: 'Wyoming\'s capital with government and transportation sectors.',
        serviceAreas: ['Downtown Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'],
        industries: ['Government', 'Transportation', 'Energy', 'Agriculture', 'Tourism']
      }
    ]
  }
]

// Helper function to get state by slug
export function getStateBySlug(slug: string): State | undefined {
  return statesData.find(state => state.slug === slug)
}

// Helper function to get city by state and city slug
export function getCityBySlug(stateSlug: string, citySlug: string): { state: State; city: City } | undefined {
  const state = getStateBySlug(stateSlug)
  if (!state) return undefined

  const city = state.cities.find(c => c.slug === citySlug)
  if (!city) return undefined

  return { state, city }
}

// Helper function to get all states
export function getAllStates(): State[] {
  return statesData
}
