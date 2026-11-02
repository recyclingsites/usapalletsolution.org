export interface City {
  name: string
  slug: string
  description: string
  serviceAreas: string[]
  industries: string[]
}

export interface State {
  name: string
  slug: string
  abbreviation: string
  description: string
  cities: City[]
  keyIndustries: string[]
}

export const statesData: State[] = [
  {
    name: 'Alabama',
    slug: 'alabama',
    abbreviation: 'AL',
    description: 'Automotive assembly, aerospace work around Huntsville, steel and forestry shape Alabama\'s economy, and the Port of Mobile links the state to Gulf shipping.',
    keyIndustries: ['Automotive Manufacturing', 'Aerospace', 'Steel Production', 'Agriculture', 'Logistics'],
    cities: [
      {
        name: 'Birmingham',
        slug: 'birmingham',
        description: 'Birmingham grew up around iron and steel, and its metro economy now also leans on health care, banking and auto parts. Heavy metal goods usually need a sturdier pallet, so include load weight in your request.',
        serviceAreas: ['Downtown Birmingham', 'Hoover', 'Vestavia Hills', 'Mountain Brook', 'Homewood'],
        industries: ['Steel Manufacturing', 'Automotive', 'Healthcare', 'Banking', 'Distribution']
      },
      {
        name: 'Montgomery',
        slug: 'montgomery',
        description: 'Montgomery combines state government with auto parts manufacturing, distribution and farming in the surrounding Black Belt.',
        serviceAreas: ['Downtown Montgomery', 'Prattville', 'Millbrook', 'Wetumpka', 'Pike Road'],
        industries: ['Government', 'Manufacturing', 'Retail', 'Distribution', 'Agriculture']
      },
      {
        name: 'Mobile',
        slug: 'mobile',
        description: 'Mobile is Alabama\'s Gulf port, with shipbuilding, aerospace assembly and paper and chemical plants near the waterfront. Export shipments may need ISPM 15 heat-treated wood pallets, depending on the destination.',
        serviceAreas: ['Downtown Mobile', 'Daphne', 'Fairhope', 'Saraland', 'Prichard'],
        industries: ['Port Operations', 'Shipbuilding', 'Aerospace', 'Chemical', 'Paper Products']
      }
    ]
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    abbreviation: 'AK',
    description: 'Alaska\'s economy rests on oil and gas, commercial fishing, mining and tourism, and much of its freight arrives by sea or air. Distance makes shipping a bigger part of planning a pallet order here than in most states.',
    keyIndustries: ['Oil & Gas', 'Fishing', 'Tourism', 'Mining', 'Timber'],
    cities: [
      {
        name: 'Anchorage',
        slug: 'anchorage',
        description: 'Anchorage is Alaska\'s main commercial center, with a major cargo airport, a seaport and oil industry offices. Much of the freight bound for the rest of the state passes through here.',
        serviceAreas: ['Downtown Anchorage', 'Eagle River', 'Girdwood', 'Chugiak', 'Palmer'],
        industries: ['Oil & Gas', 'Aviation', 'Seafood Processing', 'Tourism', 'Healthcare']
      },
      {
        name: 'Fairbanks',
        slug: 'fairbanks',
        description: 'Fairbanks is the supply point for Interior Alaska, supporting gold mining, nearby military bases and university research. Deep winter cold is worth mentioning if pallets will be stored outdoors.',
        serviceAreas: ['Downtown Fairbanks', 'North Pole', 'Fort Wainwright', 'Eielson AFB', 'Salcha'],
        industries: ['Mining', 'Military', 'Tourism', 'Education', 'Research']
      }
    ]
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    abbreviation: 'AZ',
    description: 'Semiconductor and electronics manufacturing, aerospace, copper mining and winter agriculture all feature in Arizona\'s economy, and the Phoenix area has grown into a distribution center for the Southwest.',
    keyIndustries: ['Electronics', 'Aerospace', 'Mining', 'Tourism', 'Agriculture'],
    cities: [
      {
        name: 'Phoenix',
        slug: 'phoenix',
        description: 'Phoenix is a fast-growing metro with electronics plants, aerospace suppliers and large distribution parks along its freeways. Dry heat can affect how wood pallets hold up in outdoor storage.',
        serviceAreas: ['Downtown Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Glendale', 'Chandler', 'Gilbert'],
        industries: ['Electronics Manufacturing', 'Aerospace', 'Healthcare', 'Distribution', 'Real Estate']
      },
      {
        name: 'Tucson',
        slug: 'tucson',
        description: 'Tucson\'s economy includes aerospace and defense work, optics companies, nearby copper mining and a state university. Delicate equipment may need a custom pallet, so describe the load in your request.',
        serviceAreas: ['Downtown Tucson', 'Oro Valley', 'Marana', 'Sahuarita', 'Catalina'],
        industries: ['Aerospace', 'Defense', 'Optics', 'Mining', 'Tourism']
      }
    ]
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    abbreviation: 'AR',
    description: 'Arkansas combines retail distribution in its northwest corner with poultry and rice farming and food processing. Its interstates and river ports carry goods between Texas, Tennessee and Missouri.',
    keyIndustries: ['Retail Distribution', 'Agriculture', 'Manufacturing', 'Food Processing', 'Poultry'],
    cities: [
      {
        name: 'Little Rock',
        slug: 'little-rock',
        description: 'Little Rock is the state capital, with health care, banking and state government, plus rail and barge traffic on the Arkansas River.',
        serviceAreas: ['Downtown Little Rock', 'North Little Rock', 'Conway', 'Benton', 'Bryant'],
        industries: ['Healthcare', 'Banking', 'Transportation', 'Government', 'Retail']
      },
      {
        name: 'Bentonville',
        slug: 'bentonville',
        description: 'Bentonville and northwest Arkansas are built around retail headquarters, their vendors and the trucking firms that work with them. Retail vendors may have specific pallet requirements, so check them before sending a request.',
        serviceAreas: ['Bentonville', 'Rogers', 'Springdale', 'Fayetteville', 'Bella Vista'],
        industries: ['Retail', 'Distribution', 'Trucking', 'Warehousing', 'Supplier Networks']
      }
    ]
  },
  {
    name: 'California',
    slug: 'california',
    abbreviation: 'CA',
    description: 'California\'s economy spans technology, farming in the Central Valley, film and television, and trade through its Pacific ports. Export loads leaving those ports may need ISPM 15 heat-treated wood pallets, depending on the destination.',
    keyIndustries: ['Technology', 'Agriculture', 'Entertainment', 'International Trade', 'Manufacturing'],
    cities: [
      {
        name: 'Los Angeles',
        slug: 'los-angeles',
        description: 'Los Angeles and neighboring Long Beach form one of the country\'s busiest port complexes, backed by warehouses across the Inland Empire. Apparel, entertainment and aerospace add to the local economy.',
        serviceAreas: ['Downtown LA', 'Long Beach', 'San Pedro', 'Glendale', 'Pasadena', 'Santa Monica', 'Burbank'],
        industries: ['Port Operations', 'Entertainment', 'Fashion', 'Manufacturing', 'International Trade']
      },
      {
        name: 'San Francisco',
        slug: 'san-francisco',
        description: 'The San Francisco Bay Area is known for technology and biotech, with container traffic moving through the Port of Oakland. Lab and server equipment can need a specific pallet size, so include dimensions in your request.',
        serviceAreas: ['Downtown SF', 'Oakland', 'San Jose', 'Berkeley', 'Fremont', 'Hayward'],
        industries: ['Technology', 'Finance', 'Tourism', 'Port Operations', 'Biotechnology']
      },
      {
        name: 'San Diego',
        slug: 'san-diego',
        description: 'San Diego\'s economy features naval bases, biotechnology, wireless technology and cross-border manufacturing ties with Tijuana.',
        serviceAreas: ['Downtown San Diego', 'Chula Vista', 'Oceanside', 'Escondido', 'Carlsbad'],
        industries: ['Military', 'Biotechnology', 'Telecommunications', 'Tourism', 'Manufacturing']
      },
      {
        name: 'Sacramento',
        slug: 'sacramento',
        description: 'Sacramento pairs state government with the farms of the Central Valley, and its river port handles bulk farm products.',
        serviceAreas: ['Downtown Sacramento', 'Elk Grove', 'Roseville', 'Folsom', 'Davis'],
        industries: ['Government', 'Healthcare', 'Agriculture', 'Education', 'Technology']
      }
    ]
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    abbreviation: 'CO',
    description: 'Aerospace, technology, energy, agriculture and craft brewing all feature in Colorado\'s economy. Interstate routes through Denver connect the Front Range with the rest of the Mountain West.',
    keyIndustries: ['Technology', 'Aerospace', 'Tourism', 'Agriculture', 'Brewing'],
    cities: [
      {
        name: 'Denver',
        slug: 'denver',
        description: 'Denver is the main distribution point for the Rocky Mountain region, where interstates meet near aerospace, energy and telecom businesses.',
        serviceAreas: ['Downtown Denver', 'Aurora', 'Lakewood', 'Thornton', 'Arvada', 'Westminster'],
        industries: ['Technology', 'Aerospace', 'Telecommunications', 'Energy', 'Healthcare']
      },
      {
        name: 'Colorado Springs',
        slug: 'colorado-springs',
        description: 'Colorado Springs has several military installations, along with defense contractors, tourism around Pikes Peak and a growing technology sector.',
        serviceAreas: ['Downtown Colorado Springs', 'Fountain', 'Monument', 'Manitou Springs', 'Security-Widefield'],
        industries: ['Military', 'Defense', 'Tourism', 'Technology', 'Healthcare']
      }
    ]
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    abbreviation: 'CT',
    description: 'Connecticut sits on the corridor between New York and Boston, with an economy built on insurance, aerospace manufacturing, pharmaceuticals and precision machining.',
    keyIndustries: ['Insurance', 'Manufacturing', 'Pharmaceuticals', 'Finance', 'Aerospace'],
    cities: [
      {
        name: 'Hartford',
        slug: 'hartford',
        description: 'Hartford is known as the Insurance Capital, and the wider area also has a long record of jet engine and aerospace parts manufacturing.',
        serviceAreas: ['Downtown Hartford', 'West Hartford', 'East Hartford', 'Bloomfield', 'Newington'],
        industries: ['Insurance', 'Healthcare', 'Government', 'Education', 'Manufacturing']
      },
      {
        name: 'Bridgeport',
        slug: 'bridgeport',
        description: 'Bridgeport is an old industrial city on Long Island Sound, with manufacturing, health care and a harbor, close to the finance offices of Stamford.',
        serviceAreas: ['Downtown Bridgeport', 'Fairfield', 'Stratford', 'Trumbull', 'Milford'],
        industries: ['Manufacturing', 'Healthcare', 'Port Operations', 'Retail', 'Finance']
      }
    ]
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    abbreviation: 'DE',
    description: 'Delaware is known for corporate and banking activity, chemicals, and poultry farming on the Delmarva Peninsula, and it sits directly on the Northeast Corridor.',
    keyIndustries: ['Finance', 'Chemical', 'Pharmaceuticals', 'Agriculture', 'Manufacturing'],
    cities: [
      {
        name: 'Wilmington',
        slug: 'wilmington',
        description: 'Wilmington is known for banking and corporate law, and the chemical industry has deep roots in the area. It sits between Philadelphia and Baltimore on I-95.',
        serviceAreas: ['Downtown Wilmington', 'Newark', 'Dover', 'Middletown', 'Bear'],
        industries: ['Finance', 'Chemical', 'Healthcare', 'Education', 'Legal Services']
      }
    ]
  },
  {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    description: 'Tourism, citrus and vegetable farming, aerospace along the Space Coast and trade through Atlantic and Gulf ports drive Florida\'s economy. Warm, humid conditions make storage an important question for wood pallets here.',
    keyIndustries: ['Tourism', 'Agriculture', 'International Trade', 'Aerospace', 'Healthcare'],
    cities: [
      {
        name: 'Miami',
        slug: 'miami',
        description: 'Miami is a gateway for trade with Latin America and the Caribbean, with cargo moving through its seaport and airport. Export shipments may need ISPM 15 wood pallets or a plastic alternative, depending on the destination.',
        serviceAreas: ['Downtown Miami', 'Miami Beach', 'Coral Gables', 'Hialeah', 'Doral', 'Kendall'],
        industries: ['International Trade', 'Port Operations', 'Tourism', 'Finance', 'Real Estate']
      },
      {
        name: 'Tampa',
        slug: 'tampa',
        description: 'Tampa has a working port on its bay, and the area\'s economy also covers health care, financial services and manufacturing, with a cigar-making past in Ybor City.',
        serviceAreas: ['Downtown Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Plant City'],
        industries: ['Port Operations', 'Manufacturing', 'Tourism', 'Healthcare', 'Finance']
      },
      {
        name: 'Orlando',
        slug: 'orlando',
        description: 'Orlando\'s economy centers on theme parks, hotels and conventions, which take in large volumes of food, merchandise and supplies. Simulation and technology firms also work in the area.',
        serviceAreas: ['Downtown Orlando', 'Kissimmee', 'Winter Park', 'Sanford', 'Altamonte Springs'],
        industries: ['Tourism', 'Entertainment', 'Technology', 'Healthcare', 'Distribution']
      },
      {
        name: 'Jacksonville',
        slug: 'jacksonville',
        description: 'Jacksonville has a container port on the St. Johns River, naval bases, and rail and interstate links that make it a distribution point for the Southeast.',
        serviceAreas: ['Downtown Jacksonville', 'Jacksonville Beach', 'Orange Park', 'St. Augustine', 'Ponte Vedra'],
        industries: ['Port Operations', 'Military', 'Finance', 'Healthcare', 'Distribution']
      }
    ]
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    abbreviation: 'GA',
    description: 'Georgia\'s economy leans on freight: air cargo and rail through Atlanta and container traffic through Savannah. Carpet manufacturing, poultry, peanuts and film production add to the mix.',
    keyIndustries: ['Logistics', 'Manufacturing', 'Film Production', 'Agriculture', 'Technology'],
    cities: [
      {
        name: 'Atlanta',
        slug: 'atlanta',
        description: 'Atlanta is the freight center of the Southeast, with a major airport, rail yards and interstates meeting in the metro. Warehouses here handle goods bound for much of the region.',
        serviceAreas: ['Downtown Atlanta', 'Marietta', 'Sandy Springs', 'Roswell', 'Decatur', 'Alpharetta'],
        industries: ['Logistics', 'Technology', 'Film Production', 'Finance', 'Healthcare']
      },
      {
        name: 'Savannah',
        slug: 'savannah',
        description: 'Savannah\'s container port is among the busiest in the country, and warehouses line the highways around it. Export loads may need ISPM 15 wood pallets, depending on where they are headed.',
        serviceAreas: ['Downtown Savannah', 'Pooler', 'Richmond Hill', 'Port Wentworth', 'Tybee Island'],
        industries: ['Port Operations', 'Manufacturing', 'Tourism', 'Military', 'Distribution']
      },
      {
        name: 'Augusta',
        slug: 'augusta',
        description: 'Augusta on the Savannah River is known for its medical institutions, a large Army post focused on cyber operations, and manufacturing.',
        serviceAreas: ['Downtown Augusta', 'Evans', 'Martinez', 'Grovetown', 'Hephzibah'],
        industries: ['Healthcare', 'Cyber Security', 'Military', 'Manufacturing', 'Tourism']
      }
    ]
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    abbreviation: 'HI',
    description: 'Hawaii\'s economy depends on tourism, military installations and ocean freight, since most goods arrive by ship. Salt air, humidity and island logistics all affect which pallet material makes sense.',
    keyIndustries: ['Tourism', 'Agriculture', 'Military', 'Shipping', 'Renewable Energy'],
    cities: [
      {
        name: 'Honolulu',
        slug: 'honolulu',
        description: 'Honolulu\'s harbor is the main entry point for goods coming into Hawaii, and the city supports tourism and military activity. Humid, salty air can be hard on untreated wood stored outdoors.',
        serviceAreas: ['Downtown Honolulu', 'Waikiki', 'Pearl City', 'Kailua', 'Kaneohe'],
        industries: ['Tourism', 'Military', 'Shipping', 'Healthcare', 'Retail']
      }
    ]
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    abbreviation: 'ID',
    description: 'Idaho is known for potatoes and other crops, food processing, timber and mining, along with a semiconductor presence around Boise.',
    keyIndustries: ['Agriculture', 'Food Processing', 'Technology', 'Mining', 'Lumber'],
    cities: [
      {
        name: 'Boise',
        slug: 'boise',
        description: 'Boise combines state government with semiconductor manufacturing, health care and the farm country of the Treasure Valley.',
        serviceAreas: ['Downtown Boise', 'Meridian', 'Nampa', 'Caldwell', 'Eagle'],
        industries: ['Technology', 'Healthcare', 'Government', 'Manufacturing', 'Agriculture']
      }
    ]
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    abbreviation: 'IL',
    description: 'Illinois is a national freight crossroads, with Chicago\'s rail yards, interstates and intermodal terminals at the center. Manufacturing, finance and corn and soybean farming round out the state\'s economy.',
    keyIndustries: ['Transportation', 'Manufacturing', 'Finance', 'Agriculture', 'Technology'],
    cities: [
      {
        name: 'Chicago',
        slug: 'chicago',
        description: 'Chicago is the country\'s rail center, with intermodal yards and warehouses spread across the suburbs and out along I-80 and I-55. Food processing, machinery and finance add to the local economy.',
        serviceAreas: ['Downtown Chicago', 'Naperville', 'Aurora', 'Joliet', 'Schaumburg', 'Elgin'],
        industries: ['Transportation', 'Finance', 'Manufacturing', 'Technology', 'Healthcare']
      },
      {
        name: 'Springfield',
        slug: 'springfield',
        description: 'Springfield is the Illinois capital, with state government, insurance and health care, surrounded by corn and soybean country.',
        serviceAreas: ['Downtown Springfield', 'Chatham', 'Sherman', 'Rochester', 'Jerome'],
        industries: ['Government', 'Healthcare', 'Insurance', 'Education', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    abbreviation: 'IN',
    description: 'Indiana has a strong manufacturing base in vehicles, recreational vehicles, steel and pharmaceuticals, and its highways earned it the nickname Crossroads of America.',
    keyIndustries: ['Manufacturing', 'Automotive', 'Pharmaceuticals', 'Agriculture', 'Logistics'],
    cities: [
      {
        name: 'Indianapolis',
        slug: 'indianapolis',
        description: 'Indianapolis sits where several interstates meet, and its airport is a major air cargo center. Pharmaceuticals, motorsports and logistics all play a part in the local economy.',
        serviceAreas: ['Downtown Indianapolis', 'Carmel', 'Fishers', 'Greenwood', 'Noblesville'],
        industries: ['Manufacturing', 'Pharmaceuticals', 'Healthcare', 'Logistics', 'Sports']
      },
      {
        name: 'Fort Wayne',
        slug: 'fort-wayne',
        description: 'Fort Wayne in northeastern Indiana has a manufacturing tradition in trucks, wire and defense electronics, with a health care sector alongside.',
        serviceAreas: ['Downtown Fort Wayne', 'New Haven', 'Woodburn', 'Leo-Cedarville', 'Huntertown'],
        industries: ['Manufacturing', 'Defense', 'Healthcare', 'Education', 'Distribution']
      }
    ]
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    abbreviation: 'IA',
    description: 'Corn, soybeans, hogs and the food processing built around them anchor Iowa\'s economy, alongside insurance, farm equipment manufacturing and wind energy.',
    keyIndustries: ['Agriculture', 'Food Processing', 'Manufacturing', 'Insurance', 'Renewable Energy'],
    cities: [
      {
        name: 'Des Moines',
        slug: 'des-moines',
        description: 'Des Moines is a capital city with a strong insurance sector, and it sits at the center of Iowa\'s farm economy.',
        serviceAreas: ['Downtown Des Moines', 'West Des Moines', 'Ankeny', 'Urbandale', 'Johnston'],
        industries: ['Insurance', 'Agriculture', 'Finance', 'Government', 'Healthcare']
      },
      {
        name: 'Cedar Rapids',
        slug: 'cedar-rapids',
        description: 'Cedar Rapids processes corn and oats at large scale and also has avionics manufacturing. Food plants may have their own pallet requirements, so state them in your request.',
        serviceAreas: ['Downtown Cedar Rapids', 'Marion', 'Hiawatha', 'Robins', 'Ely'],
        industries: ['Food Processing', 'Manufacturing', 'Agriculture', 'Technology', 'Healthcare']
      }
    ]
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    abbreviation: 'KS',
    description: 'Kansas combines wheat farming, cattle and meatpacking with aircraft manufacturing centered on Wichita. Its central position also makes it a rail and trucking corridor.',
    keyIndustries: ['Agriculture', 'Aviation', 'Manufacturing', 'Energy', 'Livestock'],
    cities: [
      {
        name: 'Wichita',
        slug: 'wichita',
        description: 'Wichita is known as the Air Capital of the World for its aircraft plants. Large or delicate aircraft parts may need custom-built pallets, so include dimensions in your request.',
        serviceAreas: ['Downtown Wichita', 'Derby', 'Andover', 'Haysville', 'Goddard'],
        industries: ['Aviation', 'Manufacturing', 'Healthcare', 'Energy', 'Agriculture']
      },
      {
        name: 'Kansas City',
        slug: 'kansas-city-ks',
        description: 'Kansas City, Kansas, sits on the state line, with rail yards, a vehicle assembly plant and warehouses in the surrounding Johnson and Wyandotte county suburbs.',
        serviceAreas: ['Downtown KCK', 'Overland Park', 'Olathe', 'Lenexa', 'Shawnee'],
        industries: ['Logistics', 'Manufacturing', 'Automotive', 'Healthcare', 'Distribution']
      }
    ]
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    abbreviation: 'KY',
    description: 'Bourbon distilling, vehicle assembly and air freight through Louisville all shape Kentucky\'s economy, along with horse breeding and agriculture.',
    keyIndustries: ['Automotive', 'Logistics', 'Bourbon', 'Agriculture', 'Manufacturing'],
    cities: [
      {
        name: 'Louisville',
        slug: 'louisville',
        description: 'Louisville is known for bourbon and for a major air cargo hub at its airport, along with appliance and truck manufacturing.',
        serviceAreas: ['Downtown Louisville', 'Jeffersontown', 'Shively', 'St. Matthews', 'Okolona'],
        industries: ['Logistics', 'Manufacturing', 'Bourbon', 'Healthcare', 'Distribution']
      },
      {
        name: 'Lexington',
        slug: 'lexington',
        description: 'Lexington is the heart of Kentucky horse country, and the area also has vehicle manufacturing, a large university and health care.',
        serviceAreas: ['Downtown Lexington', 'Georgetown', 'Winchester', 'Nicholasville', 'Richmond'],
        industries: ['Agriculture', 'Technology', 'Manufacturing', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    abbreviation: 'LA',
    description: 'Louisiana\'s economy runs on oil and gas, petrochemical plants along the Mississippi River, and deep-water ports handling grain and bulk cargo. Chemical and drum loads may call for a specific pallet type, so it helps to describe them in a request.',
    keyIndustries: ['Oil & Gas', 'Petrochemicals', 'Port Operations', 'Agriculture', 'Tourism'],
    cities: [
      {
        name: 'New Orleans',
        slug: 'new-orleans',
        description: 'New Orleans anchors the lower Mississippi River port system, handling grain, coffee, steel and more. Tourism and offshore energy also support the local economy.',
        serviceAreas: ['Downtown New Orleans', 'Metairie', 'Kenner', 'Marrero', 'Chalmette'],
        industries: ['Port Operations', 'Tourism', 'Oil & Gas', 'Healthcare', 'Shipping']
      },
      {
        name: 'Baton Rouge',
        slug: 'baton-rouge',
        description: 'Baton Rouge is Louisiana\'s capital, with refineries and chemical plants lining the Mississippi River. Plants may have their own pallet rules, so state them in your request.',
        serviceAreas: ['Downtown Baton Rouge', 'Denham Springs', 'Zachary', 'Baker', 'Central'],
        industries: ['Petrochemicals', 'Oil & Gas', 'Government', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'Maine',
    slug: 'maine',
    abbreviation: 'ME',
    description: 'Maine\'s economy is rooted in lobster and other seafood, paper and forest products, boatbuilding and summer tourism.',
    keyIndustries: ['Seafood', 'Paper Products', 'Tourism', 'Lumber', 'Manufacturing'],
    cities: [
      {
        name: 'Portland',
        slug: 'portland',
        description: 'Portland is Maine\'s main seaport and commercial center, with lobster and fish landings, a working waterfront and a busy summer tourist season.',
        serviceAreas: ['Downtown Portland', 'South Portland', 'Westbrook', 'Scarborough', 'Falmouth'],
        industries: ['Seafood', 'Port Operations', 'Tourism', 'Healthcare', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    abbreviation: 'MD',
    description: 'Maryland\'s economy blends federal agencies and contractors, biotechnology and cargo through the Port of Baltimore, with the Washington and Baltimore metro areas close together.',
    keyIndustries: ['Government', 'Biotechnology', 'Port Operations', 'Cyber Security', 'Healthcare'],
    cities: [
      {
        name: 'Baltimore',
        slug: 'baltimore',
        description: 'Baltimore\'s port handles cars, heavy equipment and containers, and the city also has major hospitals and biotech research. Heavy or export loads are worth describing in detail in a request.',
        serviceAreas: ['Downtown Baltimore', 'Columbia', 'Towson', 'Dundalk', 'Glen Burnie'],
        industries: ['Port Operations', 'Healthcare', 'Biotechnology', 'Manufacturing', 'Education']
      }
    ]
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    description: 'Massachusetts is known for universities, hospitals, biotechnology and software, with precision manufacturing still active outside Greater Boston.',
    keyIndustries: ['Technology', 'Biotechnology', 'Healthcare', 'Education', 'Finance'],
    cities: [
      {
        name: 'Boston',
        slug: 'boston',
        description: 'Boston\'s economy is led by universities, hospitals, biotech and finance, with a container terminal in South Boston. Dense streets and loading limits are worth noting when requesting delivery.',
        serviceAreas: ['Downtown Boston', 'Cambridge', 'Quincy', 'Somerville', 'Newton', 'Brookline'],
        industries: ['Technology', 'Biotechnology', 'Healthcare', 'Finance', 'Education']
      },
      {
        name: 'Worcester',
        slug: 'worcester',
        description: 'Worcester in central Massachusetts has a manufacturing past and now leans on health care, colleges and biotech, with I-90 and I-290 running through it.',
        serviceAreas: ['Downtown Worcester', 'Shrewsbury', 'Auburn', 'Millbury', 'Holden'],
        industries: ['Manufacturing', 'Healthcare', 'Education', 'Biotechnology', 'Technology']
      }
    ]
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    abbreviation: 'MI',
    description: 'Michigan is the center of the American auto industry, while furniture making, cherries and other fruit, and Great Lakes shipping add variety to the state\'s economy.',
    keyIndustries: ['Automotive', 'Manufacturing', 'Agriculture', 'Technology', 'Port Operations'],
    cities: [
      {
        name: 'Detroit',
        slug: 'detroit',
        description: 'Detroit is the Motor City, surrounded by assembly plants and parts suppliers. Automotive suppliers may have set pallet specifications from their customers, so include them in your request.',
        serviceAreas: ['Downtown Detroit', 'Dearborn', 'Warren', 'Sterling Heights', 'Livonia'],
        industries: ['Automotive', 'Manufacturing', 'Technology', 'Healthcare', 'Finance']
      },
      {
        name: 'Grand Rapids',
        slug: 'grand-rapids',
        description: 'Grand Rapids is known for office furniture manufacturing, medical research and food production in West Michigan.',
        serviceAreas: ['Downtown Grand Rapids', 'Wyoming', 'Kentwood', 'Walker', 'Grandville'],
        industries: ['Manufacturing', 'Healthcare', 'Furniture', 'Technology', 'Distribution']
      }
    ]
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    abbreviation: 'MN',
    description: 'Minnesota\'s economy includes medical devices, food companies, grain trade and iron ore mining on the Iron Range, with Duluth as a Great Lakes port. Long winters mean outdoor pallet storage deserves some thought.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Agriculture', 'Technology', 'Finance'],
    cities: [
      {
        name: 'Minneapolis',
        slug: 'minneapolis',
        description: 'Minneapolis and St. Paul form a corporate center for the Upper Midwest, with retail, medical device and food companies and grain trade along the Mississippi.',
        serviceAreas: ['Downtown Minneapolis', 'St. Paul', 'Bloomington', 'Plymouth', 'Minnetonka'],
        industries: ['Healthcare', 'Finance', 'Technology', 'Manufacturing', 'Retail']
      },
      {
        name: 'Rochester',
        slug: 'rochester-mn',
        description: 'Rochester\'s economy revolves around a world-known medical center, which supports research, hotels and health technology firms.',
        serviceAreas: ['Downtown Rochester', 'Byron', 'Stewartville', 'Kasson', 'Pine Island'],
        industries: ['Healthcare', 'Technology', 'Manufacturing', 'Education', 'Research']
      }
    ]
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    abbreviation: 'MS',
    description: 'Mississippi\'s economy draws on poultry, cotton, forestry, vehicle assembly and shipbuilding on the Gulf Coast, where casinos also support the hospitality trade.',
    keyIndustries: ['Agriculture', 'Manufacturing', 'Shipbuilding', 'Forestry', 'Gaming'],
    cities: [
      {
        name: 'Jackson',
        slug: 'jackson',
        description: 'Jackson is Mississippi\'s capital, with state government, health care and distribution along I-55 and I-20.',
        serviceAreas: ['Downtown Jackson', 'Pearl', 'Clinton', 'Brandon', 'Ridgeland'],
        industries: ['Government', 'Healthcare', 'Manufacturing', 'Education', 'Distribution']
      },
      {
        name: 'Gulfport',
        slug: 'gulfport',
        description: 'Gulfport has a deep-water port on the Mississippi Sound that handles bananas and other produce, close to the casinos of Biloxi and shipyards along the coast.',
        serviceAreas: ['Downtown Gulfport', 'Biloxi', 'Long Beach', 'Pass Christian', 'D\'Iberville'],
        industries: ['Port Operations', 'Gaming', 'Tourism', 'Shipbuilding', 'Seafood']
      }
    ]
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    abbreviation: 'MO',
    description: 'Missouri sits at the meeting point of the Mississippi and Missouri rivers, with major rail and trucking routes through St. Louis and Kansas City. Aerospace, vehicle assembly and agriculture contribute to its economy.',
    keyIndustries: ['Transportation', 'Manufacturing', 'Agriculture', 'Healthcare', 'Aerospace'],
    cities: [
      {
        name: 'Kansas City',
        slug: 'kansas-city',
        description: 'Kansas City, Missouri, is a rail and trucking center in the middle of the country, with underground warehouses carved into limestone and a long barbecue tradition.',
        serviceAreas: ['Downtown Kansas City', 'Independence', 'Lee\'s Summit', 'Blue Springs', 'Raytown'],
        industries: ['Logistics', 'Manufacturing', 'Healthcare', 'Technology', 'Distribution']
      },
      {
        name: 'St. Louis',
        slug: 'st-louis',
        description: 'St. Louis sits on the Mississippi near the Missouri River junction, with barge, rail and truck links, plus aerospace, biosciences and brewing.',
        serviceAreas: ['Downtown St. Louis', 'Clayton', 'University City', 'Kirkwood', 'Webster Groves'],
        industries: ['Transportation', 'Manufacturing', 'Healthcare', 'Finance', 'Biotechnology']
      }
    ]
  },
  {
    name: 'Montana',
    slug: 'montana',
    abbreviation: 'MT',
    description: 'Montana\'s economy relies on cattle and grain, coal and metal mining, timber and tourism around its national parks. Long distances between towns make freight a key part of any pallet order here.',
    keyIndustries: ['Mining', 'Agriculture', 'Energy', 'Tourism', 'Lumber'],
    cities: [
      {
        name: 'Billings',
        slug: 'billings',
        description: 'Billings is a trade center for eastern Montana and northern Wyoming, with oil refineries, ranching and health care.',
        serviceAreas: ['Downtown Billings', 'Lockwood', 'Laurel', 'Shepherd', 'Worden'],
        industries: ['Energy', 'Healthcare', 'Agriculture', 'Transportation', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    abbreviation: 'NE',
    description: 'Beef, corn and food processing anchor Nebraska\'s economy, with rail and insurance activity centered in Omaha.',
    keyIndustries: ['Agriculture', 'Food Processing', 'Transportation', 'Insurance', 'Manufacturing'],
    cities: [
      {
        name: 'Omaha',
        slug: 'omaha',
        description: 'Omaha is known for rail, insurance, beef and other food processing, and it sits on the Missouri River along I-80.',
        serviceAreas: ['Downtown Omaha', 'Bellevue', 'Papillion', 'La Vista', 'Ralston'],
        industries: ['Food Processing', 'Transportation', 'Insurance', 'Telecommunications', 'Finance']
      }
    ]
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    abbreviation: 'NV',
    description: 'Nevada\'s economy is shaped by casinos and conventions, gold mining, and a distribution corridor around Reno that reaches much of the West.',
    keyIndustries: ['Gaming', 'Mining', 'Tourism', 'Logistics', 'Technology'],
    cities: [
      {
        name: 'Las Vegas',
        slug: 'las-vegas',
        description: 'Las Vegas runs on casinos, hotels and conventions, which bring in steady flows of food, beverages and trade show freight.',
        serviceAreas: ['Downtown Las Vegas', 'Henderson', 'North Las Vegas', 'Summerlin', 'Paradise'],
        industries: ['Gaming', 'Tourism', 'Entertainment', 'Distribution', 'Technology']
      },
      {
        name: 'Reno',
        slug: 'reno',
        description: 'Reno and nearby Sparks host large warehouses and distribution centers that reach much of the West, along with battery manufacturing east of town and casino tourism.',
        serviceAreas: ['Downtown Reno', 'Sparks', 'Carson City', 'Fernley', 'Incline Village'],
        industries: ['Logistics', 'Technology', 'Gaming', 'Mining', 'Distribution']
      }
    ]
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    abbreviation: 'NH',
    description: 'New Hampshire\'s economy is built on precision manufacturing, electronics and tourism, and its southern towns sit within reach of the Boston market.',
    keyIndustries: ['Manufacturing', 'Technology', 'Healthcare', 'Tourism', 'Education'],
    cities: [
      {
        name: 'Manchester',
        slug: 'manchester',
        description: 'Manchester grew up around textile mills on the Merrimack River and now has health care, technology and aerospace parts firms.',
        serviceAreas: ['Downtown Manchester', 'Nashua', 'Concord', 'Derry', 'Rochester'],
        industries: ['Manufacturing', 'Healthcare', 'Technology', 'Education', 'Finance']
      }
    ]
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    description: 'New Jersey sits between New York and Philadelphia, and its ports, turnpike warehouses and pharmaceutical plants make it one of the most active freight states in the Northeast.',
    keyIndustries: ['Pharmaceuticals', 'Logistics', 'Manufacturing', 'Technology', 'Port Operations'],
    cities: [
      {
        name: 'Newark',
        slug: 'newark',
        description: 'Newark\'s seaport and airport, along with neighboring Elizabeth, form a main freight gateway for the New York metro, and warehouses fill the surrounding area.',
        serviceAreas: ['Downtown Newark', 'Jersey City', 'Elizabeth', 'Paterson', 'Edison'],
        industries: ['Port Operations', 'Transportation', 'Finance', 'Healthcare', 'Manufacturing']
      },
      {
        name: 'Trenton',
        slug: 'trenton',
        description: 'Trenton is New Jersey\'s capital on the Delaware River, and the corridor toward Princeton has pharmaceutical and research firms.',
        serviceAreas: ['Downtown Trenton', 'Princeton', 'Ewing', 'Hamilton', 'Lawrence'],
        industries: ['Pharmaceuticals', 'Government', 'Manufacturing', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    abbreviation: 'NM',
    description: 'New Mexico\'s economy includes oil and gas in the Permian Basin, national laboratories, military bases, film production and chile farming.',
    keyIndustries: ['Oil & Gas', 'Military', 'Technology', 'Mining', 'Tourism'],
    cities: [
      {
        name: 'Albuquerque',
        slug: 'albuquerque',
        description: 'Albuquerque is New Mexico\'s main commercial city, with national laboratory work, an Air Force base and film studios, and I-25 and I-40 cross there.',
        serviceAreas: ['Downtown Albuquerque', 'Rio Rancho', 'Santa Fe', 'Los Lunas', 'Bernalillo'],
        industries: ['Technology', 'Military', 'Healthcare', 'Tourism', 'Manufacturing']
      }
    ]
  },
  {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    description: 'New York\'s economy reaches from finance, media and fashion in the city to dairy farming, manufacturing and Great Lakes trade upstate.',
    keyIndustries: ['Finance', 'International Trade', 'Fashion', 'Media', 'Technology'],
    cities: [
      {
        name: 'New York City',
        slug: 'new-york-city',
        description: 'New York City is the country\'s center for finance, media and fashion. Tight streets, limited loading dock hours and elevator sizes are all worth mentioning in a request.',
        serviceAreas: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Jersey City'],
        industries: ['Finance', 'Fashion', 'Media', 'Technology', 'Real Estate']
      },
      {
        name: 'Buffalo',
        slug: 'buffalo',
        description: 'Buffalo sits at the eastern end of Lake Erie, with a history in grain milling and steel and a present-day economy in food processing, health care and manufacturing.',
        serviceAreas: ['Downtown Buffalo', 'Amherst', 'Cheektowaga', 'West Seneca', 'Tonawanda'],
        industries: ['Manufacturing', 'Healthcare', 'Education', 'Port Operations', 'Food Processing']
      },
      {
        name: 'Rochester',
        slug: 'rochester',
        description: 'Rochester, New York, has a long history in imaging and optics, and its economy now includes photonics, food production and universities.',
        serviceAreas: ['Downtown Rochester', 'Greece', 'Irondequoit', 'Brighton', 'Henrietta'],
        industries: ['Optics', 'Manufacturing', 'Healthcare', 'Education', 'Technology']
      }
    ]
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    description: 'North Carolina combines banking in Charlotte, research and pharmaceuticals in the Research Triangle, and long-standing furniture, textile and farming industries.',
    keyIndustries: ['Technology', 'Banking', 'Manufacturing', 'Pharmaceuticals', 'Agriculture'],
    cities: [
      {
        name: 'Charlotte',
        slug: 'charlotte',
        description: 'Charlotte is a major banking center, and its interstates and airport also make it a distribution point for the Carolinas. Motorsports teams are based nearby.',
        serviceAreas: ['Downtown Charlotte', 'Concord', 'Gastonia', 'Rock Hill', 'Huntersville'],
        industries: ['Banking', 'Finance', 'Technology', 'Healthcare', 'Distribution']
      },
      {
        name: 'Raleigh',
        slug: 'raleigh',
        description: 'Raleigh is the state capital and one corner of the Research Triangle, with pharmaceutical, software and university activity.',
        serviceAreas: ['Downtown Raleigh', 'Durham', 'Chapel Hill', 'Cary', 'Apex'],
        industries: ['Technology', 'Pharmaceuticals', 'Government', 'Education', 'Healthcare']
      },
      {
        name: 'Greensboro',
        slug: 'greensboro',
        description: 'Greensboro and the Piedmont Triad have roots in textiles, furniture and tobacco, and now also have aviation and distribution.',
        serviceAreas: ['Downtown Greensboro', 'Winston-Salem', 'High Point', 'Burlington', 'Kernersville'],
        industries: ['Manufacturing', 'Distribution', 'Healthcare', 'Education', 'Technology']
      }
    ]
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    abbreviation: 'ND',
    description: 'Oil from the Bakken, wheat and other small grains, and ranching drive North Dakota\'s economy. Harsh winters and long hauls are worth mentioning when planning a pallet order.',
    keyIndustries: ['Oil & Gas', 'Agriculture', 'Mining', 'Energy', 'Manufacturing'],
    cities: [
      {
        name: 'Fargo',
        slug: 'fargo',
        description: 'Fargo on the Red River combines farm equipment manufacturing, agricultural trade, software and a state university.',
        serviceAreas: ['Downtown Fargo', 'West Fargo', 'Moorhead', 'Dilworth', 'Horace'],
        industries: ['Agriculture', 'Technology', 'Healthcare', 'Manufacturing', 'Retail']
      }
    ]
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    abbreviation: 'OH',
    description: 'Ohio has a broad industrial economy covering vehicles, steel, polymers, aerospace and health care, and its highways link the Midwest with the East Coast.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Automotive', 'Logistics', 'Aerospace'],
    cities: [
      {
        name: 'Columbus',
        slug: 'columbus',
        description: 'Columbus has a diverse economy in government, education, insurance and retail, and its rail-truck terminals draw large distribution centers.',
        serviceAreas: ['Downtown Columbus', 'Dublin', 'Westerville', 'Reynoldsburg', 'Grove City'],
        industries: ['Government', 'Education', 'Healthcare', 'Technology', 'Distribution']
      },
      {
        name: 'Cleveland',
        slug: 'cleveland',
        description: 'Cleveland on Lake Erie has steel, paint and polymers, a busy medical sector and a Great Lakes port.',
        serviceAreas: ['Downtown Cleveland', 'Parma', 'Lakewood', 'Cleveland Heights', 'Euclid'],
        industries: ['Manufacturing', 'Healthcare', 'Port Operations', 'Finance', 'Technology']
      },
      {
        name: 'Cincinnati',
        slug: 'cincinnati',
        description: 'Cincinnati sits on the Ohio River, with barge traffic, consumer goods and grocery headquarters, and an air cargo hub just across the river in Northern Kentucky.',
        serviceAreas: ['Downtown Cincinnati', 'Hamilton', 'Fairfield', 'West Chester', 'Mason'],
        industries: ['Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Distribution']
      }
    ]
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    abbreviation: 'OK',
    description: 'Oil and natural gas, aviation maintenance, cattle and wheat shape Oklahoma\'s economy, with an inland river port near Tulsa giving the state a route to the Gulf.',
    keyIndustries: ['Oil & Gas', 'Aerospace', 'Agriculture', 'Energy', 'Manufacturing'],
    cities: [
      {
        name: 'Oklahoma City',
        slug: 'oklahoma-city',
        description: 'Oklahoma City is the state capital, with oil and gas companies, aviation maintenance and cattle markets where I-35 and I-40 meet.',
        serviceAreas: ['Downtown OKC', 'Edmond', 'Norman', 'Moore', 'Midwest City'],
        industries: ['Energy', 'Aerospace', 'Government', 'Healthcare', 'Transportation']
      },
      {
        name: 'Tulsa',
        slug: 'tulsa',
        description: 'Tulsa built its name as an oil capital and now has aviation maintenance, energy equipment manufacturing and an inland river port nearby.',
        serviceAreas: ['Downtown Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks'],
        industries: ['Oil & Gas', 'Aerospace', 'Manufacturing', 'Healthcare', 'Technology']
      }
    ]
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    abbreviation: 'OR',
    description: 'Oregon\'s economy includes semiconductor manufacturing, athletic apparel, timber, hazelnuts and wine, with river and ocean shipping through Portland.',
    keyIndustries: ['Technology', 'Agriculture', 'Lumber', 'Port Operations', 'Manufacturing'],
    cities: [
      {
        name: 'Portland',
        slug: 'portland-or',
        description: 'Portland, Oregon, sits where the Willamette meets the Columbia, with marine terminals, semiconductor plants to the west and apparel companies.',
        serviceAreas: ['Downtown Portland', 'Beaverton', 'Hillsboro', 'Gresham', 'Lake Oswego'],
        industries: ['Technology', 'Port Operations', 'Manufacturing', 'Healthcare', 'Retail']
      },
      {
        name: 'Eugene',
        slug: 'eugene',
        description: 'Eugene in the southern Willamette Valley has a timber and wood products history, a state university and craft food and beverage makers.',
        serviceAreas: ['Downtown Eugene', 'Springfield', 'Cottage Grove', 'Veneta', 'Creswell'],
        industries: ['Lumber', 'Education', 'Manufacturing', 'Healthcare', 'Technology']
      }
    ]
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    abbreviation: 'PA',
    description: 'Pennsylvania\'s economy includes steel and manufacturing in the west, natural gas from the Marcellus Shale, health care, and long warehouse corridors in the Lehigh Valley and along the Delaware River.',
    keyIndustries: ['Manufacturing', 'Energy', 'Healthcare', 'Finance', 'Port Operations'],
    cities: [
      {
        name: 'Philadelphia',
        slug: 'philadelphia',
        description: 'Philadelphia has pharmaceutical and health care businesses, universities and a Delaware River port that handles fruit and other refrigerated cargo.',
        serviceAreas: ['Downtown Philadelphia', 'Camden', 'Chester', 'Norristown', 'King of Prussia'],
        industries: ['Pharmaceuticals', 'Port Operations', 'Healthcare', 'Finance', 'Education']
      },
      {
        name: 'Pittsburgh',
        slug: 'pittsburgh',
        description: 'Pittsburgh is the Steel City, and while metal work remains, its economy now leans on health care, universities and robotics.',
        serviceAreas: ['Downtown Pittsburgh', 'Monroeville', 'Cranberry Township', 'Bethel Park', 'Mt. Lebanon'],
        industries: ['Healthcare', 'Technology', 'Manufacturing', 'Education', 'Finance']
      },
      {
        name: 'Harrisburg',
        slug: 'harrisburg',
        description: 'Harrisburg is Pennsylvania\'s capital, and the I-81 and I-83 corridors around it are lined with warehouses. Food manufacturing and nearby Lancaster County farms add to the mix.',
        serviceAreas: ['Downtown Harrisburg', 'York', 'Lancaster', 'Hershey', 'Carlisle'],
        industries: ['Government', 'Distribution', 'Manufacturing', 'Healthcare', 'Agriculture']
      }
    ]
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    abbreviation: 'RI',
    description: 'Rhode Island is small but sits on Narragansett Bay and the Northeast Corridor, with an economy covering health care, education, boatbuilding, jewelry making and tourism.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Education', 'Tourism', 'Port Operations'],
    cities: [
      {
        name: 'Providence',
        slug: 'providence',
        description: 'Providence is Rhode Island\'s capital, with hospitals, universities and a Narragansett Bay port that handles fuel and bulk cargo.',
        serviceAreas: ['Downtown Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
        industries: ['Healthcare', 'Education', 'Manufacturing', 'Port Operations', 'Tourism']
      }
    ]
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    abbreviation: 'SC',
    description: 'South Carolina\'s economy features vehicle and aircraft assembly, tire manufacturing and container traffic through Charleston, with an inland port connecting to the Upstate.',
    keyIndustries: ['Automotive', 'Aerospace', 'Port Operations', 'Manufacturing', 'Tourism'],
    cities: [
      {
        name: 'Charleston',
        slug: 'charleston',
        description: 'Charleston\'s container port and nearby vehicle and aircraft plants make it a busy freight area, alongside a large tourist trade.',
        serviceAreas: ['Downtown Charleston', 'North Charleston', 'Mount Pleasant', 'Summerville', 'Goose Creek'],
        industries: ['Port Operations', 'Automotive', 'Aerospace', 'Tourism', 'Manufacturing']
      },
      {
        name: 'Columbia',
        slug: 'columbia',
        description: 'Columbia is South Carolina\'s capital, with state government, a state university, an Army training post and manufacturing where I-20 and I-26 meet.',
        serviceAreas: ['Downtown Columbia', 'Lexington', 'Irmo', 'West Columbia', 'Cayce'],
        industries: ['Government', 'Manufacturing', 'Healthcare', 'Education', 'Distribution']
      }
    ]
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    abbreviation: 'SD',
    description: 'South Dakota\'s economy rests on corn, soybeans and cattle, credit card and banking operations in Sioux Falls, and tourism around Mount Rushmore and the Black Hills.',
    keyIndustries: ['Agriculture', 'Tourism', 'Finance', 'Healthcare', 'Manufacturing'],
    cities: [
      {
        name: 'Sioux Falls',
        slug: 'sioux-falls',
        description: 'Sioux Falls has grown on banking, health care and meat processing, and it sits where I-29 and I-90 cross.',
        serviceAreas: ['Downtown Sioux Falls', 'Brandon', 'Harrisburg', 'Tea', 'Dell Rapids'],
        industries: ['Finance', 'Healthcare', 'Agriculture', 'Manufacturing', 'Retail']
      }
    ]
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    abbreviation: 'TN',
    description: 'Tennessee\'s economy includes vehicle assembly, health care companies, country music and air freight through Memphis, with interstates crossing the state from end to end.',
    keyIndustries: ['Automotive', 'Logistics', 'Healthcare', 'Manufacturing', 'Entertainment'],
    cities: [
      {
        name: 'Nashville',
        slug: 'nashville',
        description: 'Nashville is Music City, and it is also a center for health care companies, with vehicle assembly in the surrounding counties.',
        serviceAreas: ['Downtown Nashville', 'Franklin', 'Murfreesboro', 'Brentwood', 'Hendersonville'],
        industries: ['Healthcare', 'Entertainment', 'Manufacturing', 'Technology', 'Tourism']
      },
      {
        name: 'Memphis',
        slug: 'memphis',
        description: 'Memphis sits on the Mississippi with one of the country\'s busiest air cargo airports, rail lines and barge terminals, so many distribution centers cluster nearby.',
        serviceAreas: ['Downtown Memphis', 'Germantown', 'Collierville', 'Bartlett', 'Southaven'],
        industries: ['Logistics', 'Distribution', 'Manufacturing', 'Healthcare', 'Entertainment']
      },
      {
        name: 'Knoxville',
        slug: 'knoxville',
        description: 'Knoxville in East Tennessee has a state university, nearby federal energy research at Oak Ridge, and boat and parts manufacturing.',
        serviceAreas: ['Downtown Knoxville', 'Farragut', 'Oak Ridge', 'Maryville', 'Clinton'],
        industries: ['Manufacturing', 'Education', 'Healthcare', 'Technology', 'Energy']
      }
    ]
  },
  {
    name: 'Texas',
    slug: 'texas',
    abbreviation: 'TX',
    description: 'Texas has one of the largest state economies, spanning oil and gas, petrochemicals, technology, cattle and cross-border trade. Distances within the state are long, so exact location details help when a request goes out.',
    keyIndustries: ['Oil & Gas', 'Technology', 'Manufacturing', 'Agriculture', 'Logistics'],
    cities: [
      {
        name: 'Houston',
        slug: 'houston',
        description: 'Houston is the center of the US energy industry, and its ship channel handles petrochemicals, steel and containers. Oilfield equipment can be heavy and awkward, so give dimensions and weights in your request.',
        serviceAreas: ['Downtown Houston', 'Sugar Land', 'Pearland', 'The Woodlands', 'Pasadena', 'Baytown'],
        industries: ['Oil & Gas', 'Petrochemicals', 'Port Operations', 'Healthcare', 'Aerospace']
      },
      {
        name: 'Dallas',
        slug: 'dallas',
        description: 'Dallas and Fort Worth form one of the country\'s main inland distribution areas, with large rail yards, an airport freight center, and finance and telecom firms.',
        serviceAreas: ['Downtown Dallas', 'Fort Worth', 'Plano', 'Irving', 'Arlington', 'Frisco'],
        industries: ['Finance', 'Technology', 'Distribution', 'Telecommunications', 'Healthcare']
      },
      {
        name: 'Austin',
        slug: 'austin',
        description: 'Austin is the Texas capital and a technology center with semiconductor and electronics plants. Electronics loads can call for clean, dry pallets, so describe them in your request.',
        serviceAreas: ['Downtown Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown'],
        industries: ['Technology', 'Government', 'Education', 'Healthcare', 'Manufacturing']
      },
      {
        name: 'San Antonio',
        slug: 'san-antonio',
        description: 'San Antonio has a large military presence, plus tourism, health care, vehicle assembly and truck traffic on I-35 toward the Mexican border.',
        serviceAreas: ['Downtown San Antonio', 'New Braunfels', 'Schertz', 'Boerne', 'Seguin'],
        industries: ['Military', 'Tourism', 'Healthcare', 'Manufacturing', 'Distribution']
      }
    ]
  },
  {
    name: 'Utah',
    slug: 'utah',
    abbreviation: 'UT',
    description: 'Utah\'s economy includes software in the Silicon Slopes area, copper mining, outdoor recreation brands and a growing distribution sector west of Salt Lake City.',
    keyIndustries: ['Technology', 'Mining', 'Tourism', 'Manufacturing', 'Healthcare'],
    cities: [
      {
        name: 'Salt Lake City',
        slug: 'salt-lake-city',
        description: 'Salt Lake City sits where I-15 and I-80 cross, with warehouses on its west side, copper mining nearby and software firms to the south.',
        serviceAreas: ['Downtown SLC', 'West Valley City', 'West Jordan', 'Sandy', 'Orem', 'Provo'],
        industries: ['Technology', 'Finance', 'Healthcare', 'Mining', 'Tourism']
      }
    ]
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    abbreviation: 'VT',
    description: 'Vermont\'s economy is small and rural, known for dairy, maple syrup, specialty food makers, ski tourism and some electronics manufacturing.',
    keyIndustries: ['Agriculture', 'Manufacturing', 'Tourism', 'Food Processing', 'Technology'],
    cities: [
      {
        name: 'Burlington',
        slug: 'burlington',
        description: 'Burlington on Lake Champlain has a state university, a regional hospital, and food and outdoor gear makers.',
        serviceAreas: ['Downtown Burlington', 'South Burlington', 'Winooski', 'Essex', 'Colchester'],
        industries: ['Manufacturing', 'Healthcare', 'Education', 'Tourism', 'Technology']
      }
    ]
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    abbreviation: 'VA',
    description: 'Virginia\'s economy blends federal contracting in the north, naval shipbuilding and the port at Hampton Roads in the southeast, and agriculture in the Shenandoah Valley.',
    keyIndustries: ['Government', 'Military', 'Technology', 'Port Operations', 'Agriculture'],
    cities: [
      {
        name: 'Virginia Beach',
        slug: 'virginia-beach',
        description: 'Virginia Beach is part of Hampton Roads, with naval bases, shipbuilding across the harbor, a large container port and a seaside tourist trade.',
        serviceAreas: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Hampton', 'Newport News'],
        industries: ['Military', 'Port Operations', 'Tourism', 'Healthcare', 'Shipbuilding']
      },
      {
        name: 'Richmond',
        slug: 'richmond',
        description: 'Richmond is Virginia\'s capital, with finance, tobacco and chemical manufacturing, where I-95 and I-64 meet.',
        serviceAreas: ['Downtown Richmond', 'Henrico', 'Chesterfield', 'Mechanicsville', 'Glen Allen'],
        industries: ['Finance', 'Government', 'Manufacturing', 'Healthcare', 'Education']
      }
    ]
  },
  {
    name: 'Washington',
    slug: 'washington',
    abbreviation: 'WA',
    description: 'Washington\'s economy covers software, aircraft manufacturing, apples and other tree fruit, and Pacific trade through the ports of Seattle and Tacoma.',
    keyIndustries: ['Technology', 'Aerospace', 'Agriculture', 'Port Operations', 'Manufacturing'],
    cities: [
      {
        name: 'Seattle',
        slug: 'seattle',
        description: 'Seattle\'s economy features software and online retail, aircraft manufacturing nearby and container traffic on Puget Sound.',
        serviceAreas: ['Downtown Seattle', 'Bellevue', 'Tacoma', 'Everett', 'Kent', 'Renton'],
        industries: ['Technology', 'Aerospace', 'Port Operations', 'Healthcare', 'Retail']
      },
      {
        name: 'Spokane',
        slug: 'spokane',
        description: 'Spokane is the commercial center of the Inland Northwest, with health care, aerospace parts, and wheat and lumber trade.',
        serviceAreas: ['Downtown Spokane', 'Spokane Valley', 'Liberty Lake', 'Cheney', 'Airway Heights'],
        industries: ['Healthcare', 'Manufacturing', 'Education', 'Agriculture', 'Technology']
      }
    ]
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    abbreviation: 'WV',
    description: 'West Virginia\'s economy has long relied on coal, natural gas and chemicals, with tourism growing in its mountain areas. Steep terrain and narrow valleys are worth noting when planning deliveries.',
    keyIndustries: ['Mining', 'Natural Gas', 'Chemical', 'Manufacturing', 'Tourism'],
    cities: [
      {
        name: 'Charleston',
        slug: 'charleston-wv',
        description: 'Charleston is West Virginia\'s capital in the Kanawha Valley, where chemical plants have long operated, along with natural gas and coal-related business.',
        serviceAreas: ['Downtown Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'],
        industries: ['Chemical', 'Government', 'Healthcare', 'Energy', 'Manufacturing']
      }
    ]
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    abbreviation: 'WI',
    description: 'Wisconsin is known for dairy and cheese, paper mills, machinery manufacturing and brewing, with ports on Lake Michigan and Lake Superior.',
    keyIndustries: ['Manufacturing', 'Agriculture', 'Food Processing', 'Paper Products', 'Healthcare'],
    cities: [
      {
        name: 'Milwaukee',
        slug: 'milwaukee',
        description: 'Milwaukee on Lake Michigan is known for brewing, machinery, motorcycles and industrial controls, with a working harbor.',
        serviceAreas: ['Downtown Milwaukee', 'Waukesha', 'West Allis', 'Wauwatosa', 'Brookfield'],
        industries: ['Manufacturing', 'Brewing', 'Healthcare', 'Technology', 'Port Operations']
      },
      {
        name: 'Madison',
        slug: 'madison',
        description: 'Madison is Wisconsin\'s capital, with a state university, medical software and biotech, surrounded by dairy country.',
        serviceAreas: ['Downtown Madison', 'Sun Prairie', 'Middleton', 'Fitchburg', 'Verona'],
        industries: ['Government', 'Education', 'Technology', 'Healthcare', 'Biotechnology']
      }
    ]
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    abbreviation: 'WY',
    description: 'Wyoming\'s economy is built on coal, natural gas, trona and other minerals, plus cattle ranching and tourism around Yellowstone and Grand Teton. It has few large towns, so freight distance matters for a pallet order.',
    keyIndustries: ['Energy', 'Mining', 'Tourism', 'Agriculture', 'Manufacturing'],
    cities: [
      {
        name: 'Cheyenne',
        slug: 'cheyenne',
        description: 'Cheyenne is Wyoming\'s capital, where I-25 meets I-80, with a rail yard, an Air Force base and data centers.',
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
