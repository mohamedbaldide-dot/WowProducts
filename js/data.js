const allProducts = [
    // ========== الصف الأول ==========
    {
        id: 1,
        title: "Ninja CREAMi Ice Cream Maker & Dessert Machine",
        image: "images/product1.webp",
        discount: "29% off",
        price: "USD 203.61",
        oldPrice: "USD 288.45",
        colourPatterns: "+1 colours/patterns",
        brand: "Ninja",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Ninja-Containers-Programmes-Milkshakes-NC302EU/dp/B0G26N7D9N?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=f663c51fc4855c9de963b36aa3421cf9&ref_=as_li_ss_tl"
    },
    {
        id: 2,
        title: "Philips OneBlade Original 360 Blades Fits All OneBla",
        image: "images/product2.webp",
        discount: "38% off",
        price: "USD 34.60",
        oldPrice: "USD 55.37",
        colourPatterns: "",
        brand: "PHILIPS",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Philips-OneBlade-Original-QP440-50/dp/B0CVXSK4D3?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&linkCode=ll2&tag=wowproducts0f-21&linkId=9de647478faaa08d40d167b4dae382fd&ref_=as_li_ss_tl"
    },
    {
        id: 3,
        title: "De'Longhi Magnifica S ECAM 22.110.B fully automatic c",
        image: "images/product3.webp",
        discount: "33% off",
        price: "USD 310.39",
        oldPrice: "USD 460.39",
        colourPatterns: "",
        brand: "De'Longhi",
        brandLink: "",
        amazonLink: "https://www.amazon.de/DeLonghi-Magnifica-automatic-cappuccino-selection/dp/B00400OMU0?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=b665f1a9e416f9609bf0d80c9fea44fc&ref_=as_li_ss_tl"
    },
    {
        id: 4,
        title: "TOCOL Case for iPhone 12 Magsafe, Full Camera Prot",
        image: "images/product4.webp",
        discount: "15% off",
        price: "USD 9.80",
        oldPrice: "USD 11.53",
        colourPatterns: "+18",
        brand: "TOCOL",
        brandLink: "",
        amazonLink: "https://www.amazon.de/TOCOL-iPhone-12-Scratch-Resistant-Translucent-black/dp/B0D3HLMWW5?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=0c30d3ed6992b487fb9440b7b8a80061&ref_=as_li_ss_tl"
    },
    {
        id: 5,
        title: "dé Mobile Wallbox/Charging Station 11 kW [3-Phase |",
        image: "images/product5.webp",
        discount: "15% off",
        price: "USD 166.69",
        oldPrice: "USD 196.10",
        colourPatterns: "+2 colours/patterns",
        brand: "dé",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Philips-3000-Portable-Steamer-Performance/dp/B0BLM4S8SZ?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=55c72dee960e5d757d2d253901a8bf1d&ref_=as_li_ss_tl"
    },
    {
        id: 6,
        title: "Russell Hobbs SatisFry 27632-56 Hot Air Fryer X",
        image: "images/product6.webp",
        discount: "57% off",
        price: "USD 64.60",
        oldPrice: "USD 150.34",
        colourPatterns: "",
        brand: "Russell Hobbs",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Playstation-DualSense%C2%AE-Wireless-Controller-Galactic-Purple/dp/B09NLJCVGB?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=bd839939c7d4435f219922e677855ce6&ref_=as_li_ss_tl"
    },
    // ========== الصف الثاني ==========
    {
        id: 7,
        title: "TOCOL For iPhone 17 Pro for Tempered Glass 6.3 In",
        image: "images/product7.webp",
        discount: "15% off",
        price: "USD 9.80",
        oldPrice: "USD 11.53",
        colourPatterns: "+1 colours/patterns",
        brand: "TOCOL",
        brandLink: "",
        amazonLink: "https://www.amazon.de/d%C3%A9-Wallbox-Charging-Station-Adjustable-CEE-11kW/dp/B0BX1Z3JJQ?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=9ec246a7ab74978047bfe145ce624329&ref_=as_li_ss_tl"
    },
    {
        id: 8,
        title: "Oral-B iO Ultimate Cleaning Electric Toothbrush Heads",
        image: "images/product8.webp",
        discount: "46% off",
        price: "USD 43.84",
        oldPrice: "USD 80.76",
        colourPatterns: "+1 colours/patterns",
        brand: "Oral-B",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Russell-Hobbs-27632-56-Programmes-TouchScreen/dp/B0DWSLJ7HQ?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=608429c1d6af6f5705023c4fd62867f1&ref_=as_li_ss_tl"
    },
    {
        id: 9,
        title: "Fit-Flip Microfibre Towel, Compact, Ideal as a Sports",
        image: "images/product9.webp",
        discount: "15% off",
        price: "USD 19.60",
        oldPrice: "USD 23.07",
        colourPatterns: "+15",
        brand: "Fit-Flip",
        brandLink: "",
        amazonLink: "https://www.amazon.de/TOCOL-iPhone-Pro-Scratch-Resistant-Anti-Fingerprint/dp/B0GDX71PSK?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=0c7d1af73e732e5535936c7734c1800e&ref_=as_li_ss_tl"
    },
    {
        id: 10,
        title: "dreame H12 Pro FlexReach Wet and Dry Vacuum Clea",
        image: "images/product10.webp",
        discount: "26% off",
        price: "USD 229.62",
        oldPrice: "USD 310.39",
        colourPatterns: "",
        brand: "dreame",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Oral-B-Toothbrush-Attachment-Toothbrushes-Packaging/dp/B0B1DYZNY5?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=862199071f715f905054c1193d1fac71&ref_=as_li_ss_tl"
    },
    {
        id: 11,
        title: "Philips Lumea IPL 9900 Series - IPL Devices Hair Rem",
        image: "images/product11.webp",
        discount: "40% off",
        price: "USD 436.15",
        oldPrice: "USD 726.92",
        colourPatterns: "",
        brand: "PHILIPS",
        brandLink: "",
        amazonLink: "https://www.amazon.de/Fit-Flip-Microfibre-Compact-Quick-Drying-Lightweight/dp/B0CP84RY5G?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=035b02e2e7c617f7f2eb68aaffd5276a&ref_=as_li_ss_tl"
    },
    {
        id: 12,
        title: "Philips AVENT Baby Monitor with Camera Advanced -",
        image: "images/product12.webp",
        discount: "23% off",
        price: "USD 132.68",
        oldPrice: "USD 173.07",
        colourPatterns: "",
        brand: "AVENT",
        brandLink: "",
        amazonLink: "https://www.amazon.de/dreame-FlexReach-Cleaner-Minutes-Cleaning/dp/B0DV5RRL9F?pf_rd_r=5AW5HCZ9M6F138CEZ02Q&pf_rd_p=22bfd244-2857-4615-8708-5ff38d6455b3&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1&linkCode=ll2&tag=wowproducts0f-21&linkId=efbfd15943e66af2c36ae5ba0db3e484&ref_=as_li_ss_tl"
    }
];
