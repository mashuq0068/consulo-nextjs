export interface ProductVariety {
  name: string;
  image?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductCategory {
  name: string;
  description?: string;
  varieties: ProductVariety[];
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  specs: ProductSpec[];
  categories: ProductCategory[];
  packagingNote?: string;
  privateLabelAvailable?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    slug: "rice",
    title: "Rice",
    tagline: "Premium Basmati & Non-Basmati Rice for Global Markets",
    heroImage:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/11/a7/fc/ce/f2/v1_E10/E106DWNW.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=1767d090669db2e83243f6360977099281c760ece61ee6c5a66153ee7291fe25",
    description:
      "We are engaged in the supply and export of a wide range of Basmati and Non-Basmati rice varieties. Our rice is processed using modern milling and sorting facilities to ensure consistent quality, high purity, and excellent cooking results. We offer bulk supply, export packaging, and private labelling as per customer requirements.",
    specs: [
      { label: "Purity", value: "95% – 98%" },
      { label: "Moisture", value: "12% – 14% Max" },
      { label: "Broken", value: "As per requirement (5%, 10%, 25%, 100%)" },
      { label: "Sortex Cleaned", value: "Yes" },
      { label: "Well Milled & Graded", value: "Yes" },
      {
        label: "Packaging",
        value: "5kg, 10kg, 25kg, 50kg PP Bags / Jute Bags",
      },
      { label: "Private Labelling", value: "Available" },
    ],
    categories: [
      {
        name: "Non-Basmati Rice",
        description:
          "We supply various Non-Basmati rice varieties suitable for daily consumption, bulk supply programs, food processing, and export markets, especially in Africa, Asia, and the Middle East. These varieties are known for their good cooking quality, affordability, and high demand in bulk markets.",
        varieties: [
          {
            name: "IR64 Parboiled Rice",
            image:
              "/img/products/rice/ir64-parboiled.jpeg",
          },
          {
            name: "IR64 Raw Rice",
            image:
              "/img/products/rice/ir64-raw.jpeg",
          },
          {
            name: "100% Broken White Rice",
            image:
              "/img/products/rice/white-rice.jpeg",
          },
          {
            name: "IR8 Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c1/b9/18/de/39/v1_E10/E10QZPI.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=b4a9e206178e76322f913504ac8a491282b6a843a11eb8523a3568a821d45bbe",
          },
          {
            name: "PR11 Rice Sella/Steam/Golden",
            image:
              "/img/products/rice/pr11-golden.jpeg",
          },
          {
            name: "Sona Masoori Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/9a/87/70/1a/f6/v1_E10/E101DCVJ.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=1c327facb46fdbf1678fa3b8d24c034abdc08fd867e37816b27581b8c6c80fbd",
          },
          {
            name: "Swarna Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/1b/15/31/c2/25/v1_E10/E104RW6Q.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=0a2c7f2cc65204dc6a8c28b9e89464824431049483ab2c3d369ec99e0fd595a0",
          },
        ],
      },
      {
        name: "Basmati Rice",
        description:
          "We offer premium Basmati rice varieties known for their long grain, rich aroma, and excellent cooking quality. Our basmati rice is suitable for retail packaging, hotels, restaurants, and international markets. We provide bulk supply, customised packaging, and private labelling for international buyers.",
        varieties: [
          {
            name: "1121 Basmati Rice (Steam / Golden / Sella)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d6/6e/8d/10/8c/v1_E10/E108OV4W.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=2a8bcfa1f6e3953977deaf9aa88d65946fa518df52742c706246829d551d75b1",
          },
          {
            name: "1509 Basmati Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/70/fb/ed/cc/e6/v1_E10/E104TUR5.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=70c50ff76a7427bd105cebef987fd1e31fcfaa526d3d95e2d6731d6f72ed77d8",
          },
          {
            name: "Pusa Basmati Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/bf/c8/10/53/7e/v1_E10/E10H84YQ.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=4ca2332508ccc9d19330122609a14afb3ee9cb8e1d4b3f28db7b93848b808d5a",
          },
          {
            name: "Sugandha Basmati Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/31/fa/64/58/6b/v1_E10/E10HYPWJ.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=4c314bd9465de0270ef3f1ae71509bb07c9753e8cb58b185d079bc3236382a0e",
          },
          {
            name: "Sharbati Basmati Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/8c/bf/ae/c2/d4/v1_E10/E10I373O.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=7873f38b921a9f77df5e91df6f22410a790bdf2ec3a8cad8c2cae407f24ab014",
          },
        ],
      },
      {
        name: "Exotic Rice",
        description:
          "We also offer speciality and Exotic rice varieties known for their unique taste, aroma, and regional importance. These rice varieties are popular in premium and speciality food markets. These speciality rice varieties are supplied in bulk and retail packaging for niche markets and speciality food distributors.",
        varieties: [
          {
            name: "Matta Rice (Kerala Red Rice)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/fd/6e/6b/46/56/v1_E10/E10AEZ46.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=3a9a454fc19a97ef5f6473e71ef45457e9562f024fa65f917d26677025b72d9b",
          },
          {
            name: "Gobindobhog Rice",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c1/b9/18/de/39/v1_E10/E10QZPI.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=d07c205afb38c69636435b97bf17549d09acdfd8484a7ec41449e80badb460d8",
          },
          {
            name: "Joha Rice (Assam Aromatic Rice)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/65/6b/d5/05/28/v1_E10/E10GJOSH.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=4d7d9279ab0127a6ae8e5dee871d4501d223c4854071718d418c31e0163e4b6e",
          },
          {
            name: "Kala Namak Rice (Black Aromatic Rice)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/86/eb/f6/bb/b7/v1_E10/E101O4S8.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=6dccff57482e2d47838a324e2ba17ef4f52c47b4567df5c70f83042081bcc6b7",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "wheat",
    title: "Wheat",
    tagline: "Premium Quality Wheat for Flour Mills & Food Processors",
    heroImage:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f1/b0/6d/37/1b/v1_E10/E10B14Z4.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=13b4c47a6f50af5d68e3906470d86da66cce2bf557838a75e08cf2b8ef5590b1",
    description:
      "We supply quality wheat suitable for flour mills, food processing companies, and bulk grain buyers. Our wheat is available in bulk quantities with proper cleaning, grading, and export packaging.",
    specs: [
      { label: "Moisture", value: "12% Max" },
      { label: "Foreign Matter", value: "1% Max" },
      { label: "Damaged Grain", value: "2% Max" },
      { label: "Protein", value: "As per variety" },
      { label: "Packaging", value: "25kg / 50kg Bags or Bulk" },
      { label: "Cleaned & Machine Sorted", value: "Yes" },
    ],
    categories: [
      {
        name: "Wheat Varieties",
        description:
          "Our wheat is available in bulk quantities with proper cleaning, grading, and export packaging. Suitable for flour mills, food processing companies, and bulk grain buyers worldwide.",
        varieties: [
          {
            name: "Durum Wheat",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/a7/b7/82/ec/5e/v1_E10/E104RLFR.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=b9188d09543b45851a7ce4b8af3dcb48fdf9dbbe059029ac6004a2c45945fbcc",
          },
          {
            name: "Feed Wheat",
            image:
              "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "sugar",
    title: "Sugar",
    tagline: "Export-Quality Refined Sugar for Global Trade",
    heroImage:
      "/img/service/sugar.jpeg",
    description:
      "We offer refined sugar suitable for food processing, beverages, and household consumption with export-quality packaging. We supply sugar in bulk quantities for international buyers and distributors.",
    specs: [
      { label: "ICUMSA", value: "45 / 100" },
      { label: "Polarisation", value: "99.8% Min" },
      { label: "Moisture", value: "0.04% Max" },
      { label: "Ash Content", value: "0.04% Max" },
      { label: "Packaging", value: "25kg / 50kg Bags" },
      { label: "Type", value: "Fine Crystal White Sugar" },
    ],
    categories: [
      {
        name: "Sugar Products",
        description:
          "Our sugar is sourced from reliable producers and complies with international standards. Suitable for food processing industries, beverage manufacturers, and household consumption markets worldwide.",
        varieties: [
          {
            name: "ICUMSA 45 Sugar (Refined White Sugar)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c5/e1/9e/c4/bf/v1_E10/E10HX2HU.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=99a332e5422c4c9409835c73b44674e2711d56f0caf222a3e7972d3202605acb",
          },
          {
            name: "ICUMSA 100 Sugar",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/7b/36/0e/67/b1/v1_E10/E108MS9T.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=e66436015689a373a8dbb9433c4f2e65b5a09b88fbb7c208fc931b576b24e0ad",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "spices",
    title: "Spices",
    tagline: "High-Quality Natural Spices with Authentic Flavour & Aroma",
    heroImage:
      "/img/service/spices.jpeg",
    description:
      "We supply high-quality spices sourced from reliable producers and processed to maintain colour, flavour, and freshness. Suitable for spice traders, food processors, and export markets.",
    specs: [
      { label: "Cleaned", value: "Machine Cleaned" },
      { label: "Colour", value: "Natural Colour" },
      { label: "Pungency", value: "High Pungency" },
      { label: "Moisture", value: "Low Moisture" },
      { label: "Drying", value: "Properly Dried" },
      { label: "Packaging", value: "Export Packaging Available" },
    ],
    categories: [
      {
        name: "Spice Products",
        description:
          "Our spices are sourced from prime growing regions and processed with modern machinery to retain their natural colour, flavour, and freshness. Ideal for spice traders, food processors, and international export markets.",
        varieties: [
          {
            name: "Red Chilli (Whole)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/fe/10/20/aa/5d/v1_E10/E104R93Q.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=fb0031a038f282c1afa9bd8985cf527d8cac5d247235fdf4c5a7d2959dd59d51",
          },
          {
            name: "Red Chilli Powder",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/ca/50/a2/e5/73/v1_E10/E107QWYX.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=8f55841c64d358d7e5684d33e5163833b5d8251d97a8a8ea8de575a14b5cebfb",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "pulses",
    title: "Pulses",
    tagline: "Premium Lentils & Legumes for Global Food Markets",
    heroImage:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/e6304ca4-b9cc-4b4c-9851-23054c9f6374/68ab5f31-79f0-4f85-b1bf-4d7c2a3cd547.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=0e02e371c58f9bd1b7c4e3e25547a0bb95cc5ccdf31e145380b389920e400ace",
    description:
      "We offer a variety of pulses and lentils widely used for household consumption, food processing, and international trade. We supply pulses in bulk and retail packaging as per buyer requirements.",
    specs: [
      { label: "Sortex Cleaned", value: "Yes" },
      { label: "Moisture", value: "12% Max" },
      { label: "Foreign Matter", value: "1% Max" },
      { label: "Grading", value: "Uniform Size Grading" },
      { label: "Packaging", value: "25kg / 50kg Bags" },
    ],
    categories: [
      {
        name: "Pulse Varieties",
        description:
          "Our pulses are sourced from prime agricultural regions, thoroughly cleaned and graded to ensure uniform size and high purity. Suitable for household consumption, food processing industries, and international trade.",
        varieties: [
          {
            name: "Chickpeas (Kabuli & Desi)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d2/5d/87/4f/72/v1_E10/E105ONO1.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=9b4a05d9fa011381b419a299e5b0f47a2e6605c63b6784765b8d801cb73cb9a3",
          },
          {
            name: "Green Gram (Moong)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/e9/c3/94/2a/81/v1_E10/E106VP87.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=11788a7f497c24a3aa72ea1a147104e082ddbfde93222f7e59708e4622bda8cf",
          },
          {
            name: "Black Gram (Urad)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/b4/12/d0/60/c0/v1_E10/E104NX0H.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=25a0e62ec321443e47ca8b14e26465c912e5076bccf2fa2a2a0d0f3bfeb3e338",
          },
          {
            name: "Pigeon Pea (Toor / Arhar)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f9/2b/dc/8f/49/v1_E10/E10GJOT4.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=719aa6b0c8c27ee2ff952ad1466caa758e8b97473d702d6d808951584f83441f",
          },
          {
            name: "Red Lentils (Masoor)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/ea/12/da/96/f1/v1_E11/E1142958.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=c235077f7d89897d573018a920f8e8e200e52b7ceadbcc5617eeb5a85b1a9290",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "animal-feeds",
    title: "Animal Feeds",
    tagline: "Quality Raw Materials for Cattle, Poultry & Aqua Feed Industries",
    heroImage:
      "/img/service/animal-feed.jpeg",
    description:
      "We supply raw materials for animal feed, suitable for the cattle, poultry, and aqua feed industries, with bulk supply capability. These products are supplied in bulk quantities with reliable shipment schedules for feed manufacturers and traders.",
    specs: [
      { label: "Protein Content", value: "High Protein" },
      { label: "Moisture", value: "Low Moisture" },
      { label: "Drying", value: "Properly Dried" },
      { label: "Suitability", value: "Feed Manufacturing" },
      { label: "Packaging", value: "Bulk Packaging / Jumbo Bags" },
      { label: "Supply", value: "Consistent Supply" },
    ],
    categories: [
      {
        name: "Animal Feed Products",
        description:
          "Our animal feed raw materials are sourced from reputable producers and meet quality standards for cattle, poultry, and aquaculture industries. We maintain consistent supply schedules to support feed manufacturers and traders.",
        varieties: [
          {
            name: "Corn DDGS (Distillers Dried Grains with Solubles)",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/87/13/a3/24/24/v1_E10/E104N79F.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=a9ebca973ba787c823b0704ed5912d04c6a811160fd3c43342e2d09ebbc93353",
          },
          {
            name: "Soybean Meal",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/a5/df/bd/12/8c/v1_E10/E10M3T6.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=fc762745313882dce139be988324c3989e9cddb2d0b821d7db7d445a89d3d0d4",
          },
          {
            name: "Rice DDGS",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d8/3b/ee/81/24/v1_E10/E101A71P.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=26d191be442d6e16ebbb4a63e801f10a48ab481b6a237db48475c42f208ab289",
          },
          {
            name: "Mustard Meal",
            image:
              "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/68/58/44/7b/77/v1_E10/E108TPB3.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=8962223931ea0b20428dca3e619269b7dbb10b740dd7a065efa61c9f14bd9c2a",
          },
        ],
      },
    ],
  },
];

export default products;
