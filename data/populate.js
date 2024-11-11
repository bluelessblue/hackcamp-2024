import pg from "pg";

const { Client } = pg;

const categories = [
    {
        id: "6a0d4796-f20d-4208-8ec0-0384f3307f25",
        type: "bookstore",
    },
    {
        id: "d6c37272-ae6d-4909-a4e1-83faa4fa7540",
        type: "cafe",
    },
    {
        id: "74d08ed2-3210-423e-bc5d-bbf973b1d1da",
        type: "craft supply",
    },
    {
        id: "d2d8e738-6540-4dd8-9b23-3c1e288c97ff",
        type: "grocery store",
    },
    {
        id: "ba4aa560-db71-4c70-9b4e-d254476d1807",
        type: "music store",
    },
    {
        id: "d2b5812c-3a3d-440d-bbc8-f306babe2183",
        type: "restaurant",
    },
    {
        id: "8b53116a-0c29-4b8c-9cd4-f3a449ea3d61",
        type: "sports shop",
    },
];

const businesses = [
    {
        name: "Breka Bakery & Cafe",
        description:
            "High-quality and reasonably priced breads, donuts, pastries, sandwiches, cakes, cookies and more can now be found – 24 hours a day, 7 days a week, 365 days a year – at each of our 8 locations on Fraser Street, Bute Street, Davie Street, West 4th Avenue, Denman Street, Main Street, West Hastings Street and East Hastings Street.",
        is_open: false,
        category: "cafe",
        address: "3750 W 4th Ave, Vancouver, BC V6R 1P3",
        rating: 4.4,
        latitude: 49.2856543,
        longitude: -123.114727,
    },
    {
        name: "Burgoo Bistro",
        description:
            '"Burgoo came to life because we believe everyone needs a little comfort and a place to enjoy some great comfort food. No matter what the season is, a tiny bit of comfort can go a long way to making someone’s day more satisfying.\n\nWe felt that creating an old-world, countryside ambience in our locations—through earth tones, natural finishes and materials—would harken back to a simpler time. We hope we’ve achieved that in some small way and trust that all those who come here experience Burgoo’s essence."',
        is_open: false,
        category: "restaurant",
        address: "4434 W 10th Ave, Vancouver, BC V6R 1H9",
        rating: 4.3,
        latitude: 49.3106064,
        longitude: -123.0802697,
    },
    {
        name: "Ginger & Chili restaurant",
        description:
            "Informal, bi-level Chinese eatery with a menu of standard entrees, plus hot pot & seafood.",
        is_open: true,
        category: "restaurant",
        address: "4409 W 10th Ave, Vancouver, BC V6R 2H8",
        rating: 4,
        latitude: 49.2639217,
        longitude: -123.206365,
    },
    {
        name: "Grounds For Coffee",
        description:
            "Our cafe is not the only place where community happens – though it is certainly a place where moments are created, and we aim to welcome customers with a smile. Our sense of community extends beyond borders, to the locations that sell our products across B.C. and Alberta, and to the places across the globe where we ethically source organic coffee beans.",
        is_open: false,
        category: "cafe",
        address: "2565 Alma St, Vancouver, BC V6R 3R8",
        rating: 4.6,
        latitude: 49.263884,
        longitude: -123.1861943,
    },
    {
        name: "Rufus Guitar Shop",
        description:
            "Since 1972, Rufus Guitar Shop has been catering to musicians from all walks of life. Be it sales, lessons or repairs. The deep tradition of customer service established long ago still stands strong today. We are a shop owned and run by musicians for musicians. We love all aspects of music just as much as you. We are passionate about sharing our knowledge, expertise and joy with every single person that walks through our doors.",
        is_open: false,
        category: "music store",
        address: "2621 Alma St, Vancouver, BC V6R 3S4",
        rating: 4.8,
        latitude: 49.2632351,
        longitude: -123.1861061,
    },
    {
        name: "Urban Yarns",
        description:
            "Canadian yarn store for all knitting and crochet needs including yarn, notions, needles, bags, books and patterns.",
        is_open: false,
        category: "craft supply",
        address: "4437 W 10th Ave, Vancouver, BC V6R 2H8",
        rating: 4.5,
        latitude: 49.2639223,
        longitude: -123.2071569,
    },
    {
        name: "West Point Cycles",
        description:
            "West Point Cycles is British Columbia's oldest bicycle retailer, first opening the doors on their West 10th. Ave. location in 1930. Starting out as a bicycle and lawnmower shop, West Point has evolved over the years to become the industry leader in customer service and satisfaction. As a major force in the birth to the mountain bike scene in Vancouver, it was the birthplace and original home of Rocky Mountain bicycles as well as many of the most well know brands in the local bicycle industry. Having matured into a comfortable and safe retail environment for every cyclist, we'd like to welcome you to come by and visit. Let any one of the friendly and knowledgable staff answer your questions and help guide you, whatever your cycling need.",
        is_open: false,
        category: "sports shop",
        address: "3771 W 10th Ave, Vancouver, BC V6R 2G5",
        rating: 4.3,
        latitude: 49.2637697,
        longitude: -123.1872233,
    },
    {
        name: "Bangkok City Cafe",
        description: "Thai",
        is_open: true,
        category: "restaurant",
        address: "2953 4th Ave W, Vancouver, BC V6K 1R3",
        rating: 4.5,
        latitude: 49.2685203,
        longitude: -123.1706945,
    },
    {
        name: "East Is East",
        description:
            "Diverse Eastern menu ranging from Afghan to Tibetan flavours in eatery with warm, rustic interior.",
        is_open: true,
        category: "restaurant",
        address: "3035 W Broadway, Vancouver, BC V6K 2G9",
        rating: 4.7,
        latitude: 49.2642766,
        longitude: -123.1727212,
    },
    {
        name: "Gold Train Express",
        description: "Asian, Vietnamese, Soups",
        is_open: true,
        category: "restaurant",
        address: "4530 W 10th Ave, Vancouver, BC V6R 2J1",
        rating: 2.5,
        latitude: 49.2333359,
        longitude: -123.034702,
    },
    {
        name: "Mr.Red Cafe Vegetarian Cuisine",
        description:
            "Traditional Vietnamese cooking is presented in a relaxed setting with red-painted walls.",
        is_open: true,
        category: "restaurant",
        address: "2680 W Broadway, Vancouver, BC V6K 2G3",
        rating: 4.3,
        latitude: 49.2639093,
        longitude: -123.1657872,
    },
    {
        name: "Nuba in Kitsilano",
        description:
            "Popular Lebanese eatery & juice bar with bright decor, plus many vegetarian & vegan options.",
        is_open: true,
        category: "grocery store",
        address: "3116 W Broadway, Vancouver, BC V6K 2G9",
        rating: 4.2,
        latitude: 49.2640299,
        longitude: -123.1745214,
    },
    {
        name: "Persia Foods",
        description: "Persian grocery store",
        is_open: true,
        category: "restaurant",
        address: "2827 W Broadway, Vancouver, BC V6K 2G6",
        rating: 4.2,
        latitude: 49.2642278,
        longitude: -123.169179,
    },
    {
        name: "Tandoori Fusion Indian Cuisine LTD.",
        description:
            "Indian cuisine from multiple regions is served in this bright, simple restaurant, with delivery.",
        is_open: true,
        category: "restaurant",
        address: "2872 W Broadway, Vancouver, BC V6K 2G7",
        rating: 4.3,
        latitude: 49.2639522,
        longitude: -123.169522,
    },
    {
        name: "Thai Basil restaurant",
        description: "Thai",
        is_open: true,
        category: "restaurant",
        address: "3271 W Broadway, Vancouver, BC V6K 2H5",
        rating: 4.2,
        latitude: 49.2724816,
        longitude: -123.1545482,
    },
    {
        name: "Unchai restaurant",
        description:
            "Traditional Thai noodle soups, curries & stir-fries plated in a down-to-earth environment.",
        is_open: true,
        category: "restaurant",
        address: "2351 Burrard St, Vancouver, BC V6J 3J2",
        rating: 4.6,
        latitude: 49.2650193,
        longitude: -123.145884,
    },
];

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "source_local",
    user: "postgres",
    password: "postgres",
});

await client.connect();

const populate_business = async (
    name,
    description,
    bipoc_owner,
    address,
    rating,
    categoryid,
    latitude,
    longitude
) => {
    try {
        await client.query(
            'INSERT INTO "Businesses" ("Id", "BusinessName", "Description", "BIPOCOwner", "Address", "Rating", "CategoryId", "Latitude", "Longitude") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [
                crypto.randomUUID(),
                name,
                description,
                bipoc_owner,
                address,
                rating,
                categoryid,
                latitude,
                longitude,
            ]
        );
    } catch (error) {
        console.error("Error executing query:", error);
    }
};

let count = 0;

for (const business of businesses) {
    const {
        name,
        description,
        is_open,
        category,
        address,
        rating,
        latitude,
        longitude,
    } = business;

    const category1 = categories.find((c) => c.type == category);

    await populate_business(
        name,
        description,
        is_open,
        address,
        rating,
        category1.id,
        latitude,
        longitude
    );
}

await client.end();
