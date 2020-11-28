import IncomeTaxRules from "../assets/Bitmap.png";
import CentralExcise from "../assets/vol2L.png";
import GST from "../assets/book1.png";
import mountains from "../assets/image3.png";

export const tags = [
  { id: "recommended", name: "Recommended for you" },
  { id: "new_release", name: "New Releases" },
];

export const booksListing = [
  {
    id: "1",
    title: "Income Tax Rules with Master Guide To Income Tax Rules",
    authors: ["Aditya Gadge", "Biharilal Deora"],
    image: IncomeTaxRules,
    price: 345,
    rating: 4,
    special: "Best Seller",
    tags: ["recommended", "new_release"],
  },
  {
    id: "2",
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    authors: ["Amitabha Mukherjee"],
    image: CentralExcise,
    price: 1799,
    rating: 4,
    special: null,
    tags: ["recommended", "new_release"],
  },
  {
    id: "3",
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    authors: ["S. N. Bidani", "P. K. Mitra"],
    image: GST,
    price: 1200,
    rating: 2,
    special: "Limited Edition",
    tags: ["recommended", "new_release"],
  },
  {
    id: "4",
    title: "Income Tax Rules with Master Guide To Income Tax Rules",
    authors: ["Aditya Gadge", "Biharilal Deora"],
    image: IncomeTaxRules,
    price: 345,
    rating: 4,
    special: "Best Seller",
    tags: ["recommended", "new_release"],
  },
  {
    id: "5",
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    authors: ["Amitabha Mukherjee"],
    image: CentralExcise,
    price: 1799,
    rating: 4,
    special: null,
    tags: ["recommended", "new_release"],
  },
  {
    id: "6",
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    authors: ["S. N. Bidani", "P. K. Mitra"],
    image: GST,
    price: 1200,
    rating: 2,
    special: "Limited Edition",
    tags: ["recommended", "new_release"],
  },
];

export const carouselItems = [
  {
    id: 1,
    image: mountains,
    heading: "Subscription 2020",
    subHeading: "Boost your Practice",
    desc: "An all encompassing, authentic and update platform",
  },
  {
    id: 2,
    image: mountains,
    heading: "Subscription 2019",
    subHeading: "Boost your Practice",
    desc: "An all encompassing, authentic and update platform",
  },
];
