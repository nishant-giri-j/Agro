const cropInfo = {
    "Paddy": "Paddy (rice) is a staple food for over half the world’s population, typically grown in flooded fields. It thrives in warm, humid climates and needs plenty of water throughout its growth cycle.",
    "Wheat": "Wheat is a globally cultivated cereal grain used for making bread, pasta, and baked goods. It grows best in temperate regions with fertile, well-drained soil and moderate rainfall.",
    "Chickpea": "Chickpea is a protein-rich legume used widely in Indian and Mediterranean cuisines. It is drought-tolerant, improves soil health through nitrogen fixation, and grows well in semi-arid climates.",
    "Tomatoes": "Tomatoes are nutrient-rich fruits commonly used as vegetables in cooking. They prefer warm climates, require ample sunlight, and are grown as annuals in most regions.",
    "Chillies": "Chillies are spicy fruits known for their heat due to capsaicin. They are grown in warm climates, prefer well-drained soil, and are valued for both culinary and medicinal uses.",
    "Sugarcane": "Sugarcane is a tropical grass grown for sugar production. It demands high water and nutrient input and takes 12–18 months to mature before harvest.",
    "Sunflower": "Sunflower is an important oilseed crop grown for edible seeds and oil. These sun-following plants thrive in warm, sunny climates with well-drained soil.",
    "Sorghum (Jowar)": "Sorghum, or Jowar, is a resilient grain ideal for hot, dry regions. It’s a staple for food, fodder, and biofuel, especially where other crops struggle.",
    "Pigeonpea (Tur)": "Pigeonpea is a protein-rich legume used in Indian cuisine. It grows in dry areas, enriches soil by fixing nitrogen, and performs well with minimal water.",
    "Soybean": "Soybean is a nutrient-rich legume used for oil, animal feed, and processed foods. It requires warm temperatures, good moisture, and contributes to soil fertility.",
    "Cotton": "Cotton is a key fiber crop grown for textiles. It needs a long, frost-free season with full sun and moderate rainfall for optimal yield.",
    "Rabi Crop": "Rabi crops are sown in winter and harvested in spring, including wheat, mustard, and peas. They generally rely on irrigation due to dry winter conditions.",
    "Linseed": "Linseed, or flax, is grown for oil and fiber. It prefers cool weather and fertile, moist soil and has been cultivated for centuries.",
    "Green gram": "Green gram (moong) is a short-duration legume used in dals and sprouts. It grows well in warm climates and enhances soil fertility.",
    "Black gram": "Black gram (urad dal) is a high-protein pulse widely used in Indian cooking. It thrives in hot, humid conditions and improves soil health.",
    "Notable Crop": "Notable crops are region-specific varieties known for local importance, adaptability, and cultural relevance, often tailored to unique environments.",
    "Orange": "Oranges are vitamin C-rich citrus fruits grown in warm regions. These evergreen trees need well-drained soil and protection from frost.",
    "Traditional Crop": "Traditional crops are heirloom varieties cultivated over generations, known for cultural value and adaptability to local growing conditions.",
    "Groundnut": "Groundnut (peanut) is a vital oilseed grown in tropical areas. Its pods develop underground, and the plant thrives in light, well-drained soil.",
    "Moong (Green Gram)": "Moong is a quick-growing, drought-tolerant legume used in Asian dishes. It boosts soil nitrogen and is ideal for warm climates.",
    "Urd (Black Gram)": "Urd or black gram is used in various Indian dals and snacks. It grows well in warm, moist regions and enriches soil quality.",
    "Sesamum": "Sesamum is an ancient oilseed crop valued for its flavorful seeds. It’s drought-tolerant and flourishes in hot, dry climates.",
    "Bananas": "Bananas are energy-rich tropical fruits requiring warm, humid weather and deep, fertile soil. Consistent watering ensures high yields.",
    "Onions": "Onions are essential vegetables used globally for flavoring. They grow as annuals in well-drained, fertile soil and need dry conditions during harvest."
  };
  
const diseaseInfo = {
    // Paddy Diseases
    "Paddy": {
    "Rice Blast": {
        description: "Rice blast is a devastating fungal disease caused by Magnaporthe oryzae, characterized by diamond-shaped lesions with gray centers and brown margins on leaves. The disease spreads rapidly in warm (25-28°C), humid conditions and can cause yield losses up to 100% in severe cases. Spores are dispersed by wind and rain splash, infecting plants through natural openings or wounds.",
        image: "https://www.google.com/search?q=rice+blast+disease&tbm=isch",
        causes: "Fungus Magnaporthe oryzae",
        symptoms: "Diamond-shaped lesions on leaves, collar rot on stems, panicle blast on grains",
        prevention: "Use resistant varieties, avoid excess nitrogen, practice field sanitation"
    },
    "Sheath Blight": {
        description: "Sheath blight, caused by Rhizoctonia solani, is a destructive fungal disease affecting rice plants. Symptoms include oval or irregular lesions on leaf sheaths that later spread to stems. The disease thrives in high humidity (85-100%) and temperatures around 28-32°C, commonly appearing in densely planted fields with excessive nitrogen fertilization.",
        image: "https://www.google.com/search?q=sheath+blight+disease&tbm=isch",
        causes: "Fungus Rhizoctonia solani",
        symptoms: "Oval lesions on sheaths, rotting of stems, white fungal growth",
        prevention: "Avoid dense planting, manage nitrogen levels, use biocontrol agents"
    },
    "Bacterial Blight": {
        description: "Bacterial blight (Xanthomonas oryzae pv. oryzae) causes yellow-white lesions along leaf margins that later turn grayish-white. The bacteria enter through hydathodes or wounds and spread through rain splash or irrigation water. Warm temperatures (25-30°C) with high humidity and wind-driven rain favor disease development, potentially causing 20-50% yield loss.",
        image: "https://www.google.com/search?q=bacterial+blight+disease&tbm=isch",
        causes: "Bacterium Xanthomonas oryzae",
        symptoms: "Yellow-white streaks on leaves, wilting, drying of leaves",
        prevention: "Use disease-free seeds, avoid wounding plants, apply copper-based bactericides"
    },
    "Brown Spot": {
        description: "Brown spot, caused by Cochliobolus miyabeanus, appears as small, circular brown spots on leaves and grains. The disease is more severe in nutrient-deficient soils, particularly when silicon is lacking. It thrives in warm (20-30°C), humid conditions and can reduce yields by 5-45%, affecting grain quality.",
        image: "https://www.google.com/search?q=brown+spot+disease&tbm=isch",
        causes: "Fungus Cochliobolus miyabeanus",
        symptoms: "Small circular brown spots on leaves and grains",
        prevention: "Maintain proper nutrition, use resistant varieties, practice crop rotation"
    },
    "Tungro Virus": {
        description: "Tungro is a viral disease transmitted by green leafhoppers, causing stunting, yellow-orange leaf discoloration and reduced tillering. The disease complex involves two viruses (RTBV and RTSV) and is most damaging during early growth stages. Tungro outbreaks often follow leafhopper population surges, potentially causing complete crop failure.",
        image: "https://www.google.com/search?q=tungro+virus+disease&tbm=isch",
        causes: "Rice tungro bacilliform virus (RTBV) and Rice tungro spherical virus (RTSV)",
        symptoms: "Stunted growth, yellow-orange leaves, reduced tillering",
        prevention: "Control leafhoppers, use resistant varieties, practice synchronous planting"
    },

    },
    // Wheat Diseases
    "Wheat": {
    "Rust": {
        description: "Wheat rust appears as reddish-brown powdery pustules on leaves and stems, caused by Puccinia species. The disease spreads via wind-dispersed spores over long distances, favored by cool temperatures (15-22°C) and high humidity. Rust can reduce yields by 10-70% and requires timely fungicide application for control.",
        image: "https://www.google.com/search?q=wheat+rust+disease&tbm=isch",
        causes: "Fungi Puccinia triticina (leaf rust), Puccinia graminis (stem rust), Puccinia striiformis (stripe rust)",
        symptoms: "Reddish-brown pustules on leaves and stems",
        prevention: "Plant resistant varieties, apply fungicides, avoid late nitrogen applications"
    },
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal growth on wheat leaves, reducing photosynthesis. Caused by Blumeria graminis, it thrives in moderate temperatures (15-22°C) with high humidity but no free water. Dense plantings with poor air circulation favor disease spread, potentially reducing yields by 10-40% if untreated.",
        image: "https://www.google.com/search?q=powdery+mildew+wheat&tbm=isch",
        causes: "Fungus Blumeria graminis",
        symptoms: "White powdery patches on leaves, stems and heads",
        prevention: "Plant resistant varieties, avoid dense planting, apply sulfur-based fungicides"
    },
    "Karnal Bunt": {
        description: "Karnal bunt (Tilletia indica) affects wheat grains, causing partial conversion to black powdery spore masses with a fishy odor. The fungus spreads through contaminated seeds or soil and favors cool, humid conditions during flowering. While yield loss is minimal (1-2%), the disease causes significant economic impact due to quarantine restrictions.",
        image: "https://www.google.com/search?q=karnal+bunt+disease&tbm=isch",
        causes: "Fungus Tilletia indica",
        symptoms: "Black powdery spore masses in grains, fishy odor",
        prevention: "Use certified disease-free seeds, avoid late sowing, practice crop rotation"
    },
    "Leaf Blight": {
        description: "Leaf blight in wheat appears as elliptical, light brown lesions with yellow halos, caused by Bipolaris sorokiniana. The disease thrives in warm (20-30°C), humid conditions and can cause significant yield reduction (10-30%) by damaging photosynthetic tissue. Infected seeds and crop debris serve as primary inoculum sources.",
        image: "https://www.google.com/search?q=leaf+blight+wheat&tbm=isch",
        causes: "Fungus Bipolaris sorokiniana",
        symptoms: "Elliptical brown lesions with yellow halos on leaves",
        prevention: "Use disease-free seeds, practice crop rotation, apply fungicides"
    },
    "Head Blight": {
        description: "Fusarium head blight (scab) affects wheat spikes, causing bleached spikelets and shriveled grains. Caused by Fusarium species, the disease produces mycotoxins harmful to humans and animals. Warm, wet weather during flowering favors infection, potentially causing 10-50% yield loss and significant quality reduction.",
        image: "https://www.google.com/search?q=head+blight+wheat&tbm=isch",
        causes: "Fungi Fusarium graminearum and other Fusarium species",
        symptoms: "Bleached spikelets, shriveled grains, pinkish mold on heads",
        prevention: "Plant resistant varieties, avoid planting after corn, apply fungicides at flowering"
    },

    },
    // Chickpea Diseases
    "Chickpea": {
    "Fusarium Wilt": {
        description: "Fusarium wilt is a soil-borne fungal disease causing yellowing and wilting of plants. The fungus can persist in soil for many years, infecting through roots and blocking vascular tissues. It thrives in warm soil temperatures (25-30°C) and affects many crops including tomatoes, bananas, and legumes.",
        image: "https://www.google.com/search?q=fusarium+wilt+disease&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. ciceris",
        symptoms: "Yellowing and wilting of plants, brown discoloration of vascular tissue",
        prevention: "Use resistant varieties, practice long crop rotations, solarize soil"
    },
    "Ascochyta Blight": {
        description: "Ascochyta blight is a destructive fungal disease of chickpeas causing lesions on leaves, stems and pods. The disease spreads rapidly during cool, wet weather and can cause complete yield loss in severe cases. Spores are spread by rain splash and wind.",
        image: "https://www.google.com/search?q=ascochyta+blight+chickpea&tbm=isch",
        causes: "Fungus Ascochyta rabiei",
        symptoms: "Circular brown lesions with dark margins on leaves, stems and pods",
        prevention: "Use disease-free seeds, apply fungicides, practice crop rotation"
    },
    "Botrytis Gray Mold": {
        description: "Botrytis gray mold is a fungal disease that affects chickpea plants during flowering and podding stages. It thrives in cool, humid conditions and can cause significant yield losses by infecting flowers and developing pods.",
        image: "https://www.google.com/search?q=botrytis+gray+mold+chickpea&tbm=isch",
        causes: "Fungus Botrytis cinerea",
        symptoms: "Gray fuzzy mold on flowers and pods, rotting of affected tissues",
        prevention: "Avoid dense planting, improve air circulation, apply fungicides during flowering"
    },
    "Root Rot": {
        description: "Root rot in chickpeas is caused by several soil-borne pathogens that attack the root system. The disease is more severe in waterlogged or poorly drained soils and can cause significant stand reduction and yield loss.",
        image: "https://www.google.com/search?q=chickpea+root+rot&tbm=isch",
        causes: "Fungi Rhizoctonia solani, Fusarium spp. and Pythium spp.",
        symptoms: "Root discoloration and decay, wilting plants, stunted growth",
        prevention: "Improve soil drainage, use resistant varieties, practice crop rotation"
    },
    "Stunt": {
        description: "Stunt is a viral disease of chickpeas transmitted by leafhoppers. Infected plants show severe stunting, yellowing and reduced pod formation. The disease can cause significant yield losses in affected fields.",
        image: "https://www.google.com/search?q=chickpea+stunt+disease&tbm=isch",
        causes: "Chickpea stunt virus",
        symptoms: "Severe stunting, yellowing of leaves, reduced pod formation",
        prevention: "Control leafhopper vectors, use resistant varieties, remove infected plants"
    },

    },
    // Tomato Diseases
    "Tomatoes": {
    "Early Blight": {
        description: "Early blight is a fungal disease of tomatoes causing concentric rings on older leaves that eventually yellow and drop. The disease reduces fruit production and quality, thriving in warm, humid weather with alternating wet/dry periods.",
        image: "https://www.google.com/search?q=tomato+early+blight&tbm=isch",
        causes: "Fungus Alternaria solani",
        symptoms: "Concentric rings on leaves, stem cankers, fruit lesions",
        prevention: "Remove infected debris, space plants properly, apply copper-based fungicides"
    },
    "Late Blight": {
        description: "Late blight is a devastating disease of tomatoes causing rapid destruction of foliage and fruit. The water mold thrives in cool, wet conditions and spreads quickly through airborne spores. Famous for causing the Irish Potato Famine.",
        image: "https://www.google.com/search?q=tomato+late+blight&tbm=isch",
        causes: "Oomycete Phytophthora infestans",
        symptoms: "Water-soaked lesions, white mold growth, rapid wilting",
        prevention: "Apply protectant fungicides, improve air circulation, remove volunteers"
    },
    "Bacterial Spot": {
        description: "Bacterial spot causes small, dark lesions on tomato leaves, stems and fruit. The disease reduces marketability and spreads through rain splash and contaminated tools. Warm, wet weather favors disease development.",
        image: "https://www.google.com/search?q=tomato+bacterial+spot&tbm=isch",
        causes: "Bacterium Xanthomonas vesicatoria",
        symptoms: "Small dark spots with yellow halos on leaves and fruit",
        prevention: "Use disease-free transplants, avoid overhead irrigation, apply copper sprays"
    },
    "Leaf Curl Virus": {
        description: "Tomato leaf curl virus causes upward curling, yellowing and stunting of leaves. Transmitted by whiteflies, the disease significantly reduces fruit production and quality. Infected plants cannot be cured.",
        image: "https://www.google.com/search?q=tomato+leaf+curl+virus&tbm=isch",
        causes: "Tomato leaf curl virus",
        symptoms: "Upward leaf curling, yellowing, stunted growth",
        prevention: "Control whiteflies, use resistant varieties, remove infected plants"
    },
    "Fusarium Wilt": {
        description: "Fusarium wilt is a soil-borne disease causing one-sided wilting and death of tomato plants. The fungus blocks vascular tissues and persists in soil for years. Warm soil temperatures favor disease development.",
        image: "https://www.google.com/search?q=tomato+fusarium+wilt&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. lycopersici",
        symptoms: "Yellowing and wilting on one side of plant, brown vascular tissue",
        prevention: "Plant resistant varieties, solarize soil, practice long crop rotations"
    },

    },
    // Chillies Diseases
    "Chillies": {
    "Anthracnose": {
        description: "Anthracnose is a fungal disease causing sunken, dark lesions on chilli fruits. The disease spreads rapidly during warm, wet periods and can cause significant post-harvest losses. Infected fruits become unmarketable.",
        image: "https://www.google.com/search?q=chilli+anthracnose&tbm=isch",
        causes: "Fungi Colletotrichum capsici and C. acutatum",
        symptoms: "Sunken circular lesions with black margins on fruits",
        prevention: "Use disease-free seeds, avoid overhead irrigation, apply fungicides"
    },
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal growth on chilli leaves, reducing photosynthesis. Unlike many diseases, it thrives in dry conditions with high humidity but no free water. Severe infections can defoliate plants.",
        image: "https://www.google.com/search?q=chilli+powdery+mildew&tbm=isch",
        causes: "Fungus Leveillula taurica",
        symptoms: "White powdery patches on leaf undersides, yellowing of upper surfaces",
        prevention: "Improve air circulation, apply sulfur-based fungicides, avoid dense planting"
    },
    "Bacterial Spot": {
        description: "Bacterial spot causes angular lesions on chilli leaves and raised scabs on fruits. The disease spreads through contaminated seeds, transplants and splashing water. Warm, wet weather favors disease development.",
        image: "https://www.google.com/search?q=chilli+bacterial+spot&tbm=isch",
        causes: "Bacterium Xanthomonas vesicatoria",
        symptoms: "Angular water-soaked spots on leaves, raised scabs on fruits",
        prevention: "Use disease-free seeds, avoid overhead irrigation, apply copper sprays"
    },
    "Leaf Curl": {
        description: "Chilli leaf curl virus causes upward curling, yellowing and distortion of leaves. Transmitted by whiteflies, the disease stunts plant growth and reduces fruit yield. Infected plants cannot be cured.",
        image: "https://www.google.com/search?q=chilli+leaf+curl+virus&tbm=isch",
        causes: "Chilli leaf curl virus",
        symptoms: "Upward curling and distortion of leaves, stunted growth",
        prevention: "Control whiteflies, use resistant varieties, remove infected plants"
    },
    "Fruit Rot": {
        description: "Fruit rot in chillies is caused by several fungi that infect mature fruits, especially after rainfall. The disease causes significant post-harvest losses if proper drying and storage aren't maintained.",
        image: "https://www.google.com/search?q=chilli+fruit+rot&tbm=isch",
        causes: "Fungi Colletotrichum spp., Alternaria spp., and others",
        symptoms: "Soft rotting of fruits, often starting at the blossom end",
        prevention: "Avoid wounding fruits, practice proper drying, apply fungicides before harvest"
    },

    },
    // Sugarcane Diseases
    "Sugarcane": {
    "Red Rot": {
        description: "Red rot is a destructive fungal disease of sugarcane causing reddening of internal tissues and stalk rot. The pathogen spreads through infected setts and survives in crop residues for years. Severe infections can cause complete yield loss.",
        image: "https://www.google.com/search?q=sugarcane+red+rot&tbm=isch",
        causes: "Fungus Colletotrichum falcatum",
        symptoms: "Reddening of internal tissues with white patches, stalk rot",
        prevention: "Use disease-free setts, practice crop rotation, remove infected plants"
    },
    "Wilt Disease": {
        description: "Sugarcane wilt is a soil-borne disease causing yellowing, stunting and eventual death of plants. The fungus blocks vascular tissues and persists in soil for long periods. The disease is more severe in ratoon crops.",
        image: "https://www.google.com/search?q=sugarcane+wilt&tbm=isch",
        causes: "Fungus Fusarium sacchari",
        symptoms: "Yellowing of leaves, stunted growth, red discoloration of vascular tissue",
        prevention: "Use resistant varieties, practice crop rotation, avoid ratooning in infected fields"
    },
    "Smut": {
        description: "Sugarcane smut produces black whip-like structures instead of normal shoots. The disease reduces cane yield and quality, with spores spreading through wind or contaminated equipment. Some varieties show resistance.",
        image: "https://www.google.com/search?q=sugarcane+smut&tbm=isch",
        causes: "Fungus Sporisorium scitamineum",
        symptoms: "Black whip-like structures emerging from shoots",
        prevention: "Use disease-free setts, plant resistant varieties, rogue infected plants"
    },
    "Leaf Scald": {
        description: "Leaf scald is a bacterial disease of sugarcane causing white pencil-line streaks on leaves. The disease has both chronic and acute phases, with the acute phase causing rapid wilting and death of plants.",
        image: "https://www.google.com/search?q=sugarcane+leaf+scald&tbm=isch",
        causes: "Bacterium Xanthomonas albilineans",
        symptoms: "White pencil-line streaks on leaves, wilting, plant death",
        prevention: "Use disease-free setts, rogue infected plants, avoid mechanical transmission"
    },
    "Ratoon Stunting": {
        description: "Ratoon stunting is a bacterial disease causing stunted growth in ratoon crops. The pathogen spreads through infected setts and contaminated harvesting equipment. Hot water treatment of setts can control the disease.",
        image: "https://www.google.com/search?q=sugarcane+ratoon+stunting&tbm=isch",
        causes: "Bacterium Leifsonia xyli subsp. xyli",
        symptoms: "Stunted growth, shortened internodes, reduced tillering",
        prevention: "Use disease-free setts, practice hot water treatment, disinfect equipment"
    },

    },
    // Sunflower Diseases
    "Sunflower": {
    "Sclerotinia Rot": {
        description: "Sclerotinia rot is a destructive fungal disease of sunflower causing stem rot and head mold. The pathogen produces hard black survival structures (sclerotia) that persist in soil for years. The disease can cause complete yield loss.",
        image: "https://www.google.com/search?q=sunflower+sclerotinia+rot&tbm=isch",
        causes: "Fungus Sclerotinia sclerotiorum",
        symptoms: "Water-soaked lesions on stems, white mold growth, lodging of plants",
        prevention: "Practice long crop rotations, improve field drainage, avoid dense planting"
    },
    "Alternaria Spot": {
        description: "Alternaria leaf spot causes dark brown lesions on sunflower leaves, reducing photosynthetic area. The disease spreads rapidly during warm, humid weather and can defoliate plants under severe infection.",
        image: "https://www.google.com/search?q=sunflower+alternaria+leaf+spot&tbm=isch",
        causes: "Fungi Alternaria helianthi and A. zinniae",
        symptoms: "Dark brown circular spots with concentric rings on leaves",
        prevention: "Use resistant varieties, practice crop rotation, apply fungicides"
    },
    "Downy Mildew": {
        description: "Downy mildew is an oomycete disease causing yellow angular spots on sunflower leaves with white fungal growth underneath. Systemically infected plants show stunted growth and may fail to produce heads.",
        image: "https://www.google.com/search?q=sunflower+downy+mildew&tbm=isch",
        causes: "Oomycete Plasmopara halstedii",
        symptoms: "Yellow angular spots on leaves, white mold on undersides, stunted growth",
        prevention: "Use resistant varieties, treat seeds with fungicides, practice crop rotation"
    },
    "Rust": {
        description: "Sunflower rust produces reddish-brown pustules on leaves that reduce photosynthetic efficiency. The disease can cause significant yield loss if it develops early in the season and conditions remain favorable.",
        image: "https://www.google.com/search?q=sunflower+rust&tbm=isch",
        causes: "Fungus Puccinia helianthi",
        symptoms: "Reddish-brown pustules on leaves, premature defoliation",
        prevention: "Plant resistant varieties, apply fungicides, remove volunteer plants"
    },
    "Charcoal Rot": {
        description: "Charcoal rot is a soil-borne fungal disease that causes premature drying and death of sunflower plants during drought stress. The pathogen produces black microsclerotia in stem tissues.",
        image: "https://www.google.com/search?q=sunflower+charcoal+rot&tbm=isch",
        causes: "Fungus Macrophomina phaseolina",
        symptoms: "Premature drying, black microsclerotia in stem tissues, lodging",
        prevention: "Maintain plant vigor, irrigate during drought, practice crop rotation"
    },

    },
    // Sorghum (Jowar) Diseases
    "Sorghum (Jowar)": {
    "Anthracnose": {
        description: "Anthracnose is a fungal disease of sorghum causing red lesions on leaves and stalk rot. The disease can kill plants under favorable conditions and reduces both grain and forage quality.",
        image: "https://www.google.com/search?q=sorghum+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum graminicola",
        symptoms: "Red lesions on leaves, stalk rot, plant death",
        prevention: "Plant resistant varieties, practice crop rotation, remove crop residues"
    },
    "Downy Mildew": {
        description: "Downy mildew causes chlorotic streaks and downy growth on sorghum leaves. Systemically infected plants show stunted growth and may produce no grain. The pathogen survives in soil and seeds.",
        image: "https://www.google.com/search?q=sorghum+downy+mildew&tbm=isch",
        causes: "Oomycete Peronosclerospora sorghi",
        symptoms: "Chlorotic streaks on leaves, white downy growth, stunted plants",
        prevention: "Use disease-free seeds, plant resistant varieties, practice crop rotation"
    },
    "Grain Mold": {
        description: "Grain mold is a complex of fungi that discolor and degrade sorghum grain quality. The disease develops when wet weather occurs during grain filling and maturation stages.",
        image: "https://www.google.com/search?q=sorghum+grain+mold&tbm=isch",
        causes: "Fungi Fusarium, Curvularia, Alternaria and others",
        symptoms: "Discolored grains, fungal growth on seed surface",
        prevention: "Plant resistant varieties, time planting to avoid wet weather at harvest"
    },
    "Rust": {
        description: "Sorghum rust produces orange pustules on leaves that reduce photosynthetic efficiency. While rarely causing significant yield loss, severe infections can weaken plants and reduce grain fill.",
        image: "https://www.google.com/search?q=sorghum+rust&tbm=isch",
        causes: "Fungus Puccinia purpurea",
        symptoms: "Orange pustules on leaves, premature defoliation",
        prevention: "Plant resistant varieties, apply fungicides if necessary"
    },
    "Ergot": {
        description: "Ergot is a fungal disease of sorghum that replaces grains with dark sclerotia containing toxic alkaloids. The disease is dangerous to livestock and reduces grain yield and quality.",
        image: "https://www.google.com/search?q=sorghum+ergot&tbm=isch",
        causes: "Fungus Claviceps africana",
        symptoms: "Dark sclerotia protruding from florets, honeydew secretion",
        prevention: "Plant resistant varieties, control flowering time, rogue infected heads"
    },

    },
    // Pigeonpea (Tur) Diseases
    "Pigeonpea (Tur)": {
    "Wilt": {
        description: "Fusarium wilt is a soil-borne disease of pigeonpea causing sudden wilting and death of plants. The fungus persists in soil for many years and is more severe in light soils.",
        image: "https://www.google.com/search?q=pigeonpea+wilt&tbm=isch",
        causes: "Fungus Fusarium udum",
        symptoms: "Sudden wilting, yellowing of leaves, vascular browning",
        prevention: "Plant resistant varieties, practice long crop rotations, improve soil health"
    },
    "Sterility Mosaic": {
        description: "Sterility mosaic is a viral disease of pigeonpea transmitted by mites. Infected plants show bushy growth and flower abortion without pod formation, leading to complete yield loss.",
        image: "https://www.google.com/search?q=pigeonpea+sterility+mosaic&tbm=isch",
        causes: "Pigeonpea sterility mosaic virus",
        symptoms: "Bushy growth, small leaves, flower abortion",
        prevention: "Control mite vectors, plant resistant varieties, rogue infected plants"
    },
    "Phytophthora Blight": {
        description: "Phytophthora blight is a water mold disease causing stem cankers and root rot in pigeonpea. The disease develops during periods of excessive soil moisture and can kill plants rapidly.",
        image: "https://www.google.com/search?q=pigeonpea+phytophthora+blight&tbm=isch",
        causes: "Oomycete Phytophthora drechsleri",
        symptoms: "Water-soaked stem lesions, root rot, plant collapse",
        prevention: "Improve field drainage, avoid waterlogging, practice crop rotation"
    },
    "Alternaria Blight": {
        description: "Alternaria blight causes target-like lesions on pigeonpea leaves and stems. The disease defoliates plants prematurely under warm, humid conditions with prolonged leaf wetness.",
        image: "https://www.google.com/search?q=pigeonpea+alternaria+blight&tbm=isch",
        causes: "Fungus Alternaria alternata",
        symptoms: "Circular brown lesions with concentric rings on leaves",
        prevention: "Improve air circulation, apply fungicides, remove crop debris"
    },
    "Stem Canker": {
        description: "Stem canker is a fungal disease causing sunken lesions on pigeonpea stems that girdle and kill branches. The disease spreads through rain splash and survives in infected crop residues.",
        image: "https://www.google.com/search?q=pigeonpea+stem+canker&tbm=isch",
        causes: "Fungus Macrophomina phaseolina",
        symptoms: "Sunken stem lesions, branch dieback, plant death",
        prevention: "Avoid plant stress, practice crop rotation, remove infected plants"
    },

    },
    // Soybean Diseases
    "Soybean": {
    "Rust": {
        description: "Soybean rust is a devastating fungal disease that can cause complete defoliation under favorable conditions. The disease spreads rapidly via wind-dispersed spores and requires specific management strategies.",
        image: "https://www.google.com/search?q=soybean+rust&tbm=isch",
        causes: "Fungus Phakopsora pachyrhizi",
        symptoms: "Small raised pustules on leaf undersides, yellow spots on upper surfaces",
        prevention: "Plant early-maturing varieties, apply fungicides, monitor fields regularly"
    },
    "Bacterial Blight": {
        description: "Bacterial blight causes angular water-soaked spots on soybean leaves that later turn necrotic. The disease spreads through rain splash and is more severe during cool, wet weather.",
        image: "https://www.google.com/search?q=soybean+bacterial+blight&tbm=isch",
        causes: "Bacterium Pseudomonas savastanoi pv. glycinea",
        symptoms: "Angular water-soaked spots with yellow halos on leaves",
        prevention: "Use disease-free seeds, avoid overhead irrigation, practice crop rotation"
    },
    "Charcoal Rot": {
        description: "Charcoal rot is a soil-borne fungal disease causing premature death of soybean plants during drought stress. The pathogen produces black microsclerotia in root and stem tissues.",
        image: "https://www.google.com/search?q=soybean+charcoal+rot&tbm=isch",
        causes: "Fungus Macrophomina phaseolina",
        symptoms: "Premature yellowing, black microsclerotia in stem tissues",
        prevention: "Maintain plant vigor, irrigate during drought, practice crop rotation"
    },
    "Pod Blight": {
        description: "Pod blight is caused by several fungi that infect soybean pods, reducing seed quality and yield. The disease develops when wet weather occurs during pod fill and maturation.",
        image: "https://www.google.com/search?q=soybean+pod+blight&tbm=isch",
        causes: "Fungi Colletotrichum truncatum, Phomopsis spp., and others",
        symptoms: "Discolored pods, shriveled seeds, fungal growth on pods",
        prevention: "Plant resistant varieties, time planting to avoid wet weather at harvest"
    },
    "Mosaic Virus": {
        description: "Soybean mosaic virus causes mottling, leaf distortion and stunting of plants. The virus is seed-borne and also transmitted by aphids, reducing both yield and seed quality.",
        image: "https://www.google.com/search?q=soybean+mosaic+virus&tbm=isch",
        causes: "Soybean mosaic virus",
        symptoms: "Mottled leaves, leaf distortion, stunted growth",
        prevention: "Use virus-free seeds, control aphid vectors, rogue infected plants"
    },

    },
    // Cotton Diseases
    "Cotton": {
    "Boll Rot": {
        description: "Boll rot is caused by several fungi that infect cotton bolls, reducing fiber quality and yield. The disease develops when prolonged wet conditions occur during boll development.",
        image: "https://www.google.com/search?q=cotton+boll+rot&tbm=isch",
        causes: "Fungi Fusarium spp., Aspergillus spp., and others",
        symptoms: "Discolored bolls, fungal growth inside bolls, poor fiber development",
        prevention: "Avoid excessive nitrogen, improve air circulation, apply fungicides"
    },
    "Root Rot": {
        description: "Root rot is a soil-borne disease causing decay of cotton root systems. The disease is more severe in waterlogged or compacted soils and can cause significant stand reduction.",
        image: "https://www.google.com/search?q=cotton+root+rot&tbm=isch",
        causes: "Fungus Phymatotrichopsis omnivora",
        symptoms: "Root discoloration and decay, wilting plants, plant death",
        prevention: "Improve soil drainage, practice crop rotation, use resistant varieties"
    },
    "Leaf Curl": {
        description: "Cotton leaf curl virus causes upward curling, thickening and yellowing of leaves. Transmitted by whiteflies, the disease stunts plant growth and reduces boll production significantly.",
        image: "https://www.google.com/search?q=cotton+leaf+curl+virus&tbm=isch",
        causes: "Cotton leaf curl virus",
        symptoms: "Upward leaf curling, leaf thickening, yellowing",
        prevention: "Control whiteflies, plant resistant varieties, rogue infected plants"
    },
    "Alternaria Blight": {
        description: "Alternaria blight causes circular brown spots on cotton leaves that can lead to defoliation. The disease spreads rapidly during warm, humid weather with prolonged leaf wetness.",
        image: "https://www.google.com/search?q=cotton+alternaria+blight&tbm=isch",
        causes: "Fungus Alternaria macrospora",
        symptoms: "Circular brown spots with concentric rings on leaves",
        prevention: "Improve air circulation, apply fungicides, remove crop debris"
    },
    "Bacterial Blight": {
        description: "Bacterial blight causes angular water-soaked spots on cotton leaves and blackening of veins. The disease spreads through contaminated seeds, crop debris and splashing water.",
        image: "https://www.google.com/search?q=cotton+bacterial+blight&tbm=isch",
        causes: "Bacterium Xanthomonas citri pv. malvacearum",
        symptoms: "Angular water-soaked spots, blackening of veins, boll rot",
        prevention: "Use disease-free seeds, practice crop rotation, apply copper sprays"
    },

    },
    // Rabi Crop Diseases
    "Rabi Crop": {

    "Leaf Rust": {
    description: "Leaf rust is a fungal disease affecting wheat and other rabi crops, characterized by orange-brown pustules on leaves. It spreads rapidly in cool, humid conditions (15-22°C) and can cause yield losses up to 30%.",
    image: "https://www.google.com/search?q=wheat+leaf+rust&tbm=isch",
    causes: "Fungus Puccinia triticina",
    symptoms: "Orange-brown pustules, premature leaf death",
    prevention: "Use resistant varieties, apply fungicides at tillering stage"
    },
    "Powdery Mildew": {
        description: "Powdery mildew appears as white fungal growth on leaves and stems of rabi crops. It thrives in moderate temperatures (15-21°C) with high humidity but no rain.",
        image: "https://www.google.com/search?q=wheat+powdery+mildew&tbm=isch",
        causes: "Fungus Blumeria graminis",
        symptoms: "White powdery patches, yellowing leaves",
        prevention: "Avoid dense planting, use sulfur-based fungicides"
    },
    "Smut": {
        description: "Smut diseases replace grain kernels with black powdery spore masses. Common in wheat and barley, it causes both yield loss and quality reduction.",
        image: "https://www.google.com/search?q=wheat+smut&tbm=isch",
        causes: "Fungi Ustilago spp.",
        symptoms: "Black powdery spore masses replacing grains",
        prevention: "Use treated seeds, crop rotation, resistant varieties"
    },
    "Ergot": {
        description: "Ergot is a fungal disease that produces dark purple sclerotia in place of grains. These contain toxic alkaloids harmful to humans and animals.",
        image: "https://www.google.com/search?q=wheat+ergot&tbm=isch",
        causes: "Fungus Claviceps purpurea",
        symptoms: "Purple-black sclerotia protruding from florets",
        prevention: "Deep plowing, use clean seeds, early planting"
    },
    "Loose Smut": {
        description: "Loose smut destroys wheat and barley heads, replacing them with black spore masses that disperse easily in wind.",
        image: "https://www.google.com/search?q=loose+smut&tbm=isch",
        causes: "Fungus Ustilago nuda",
        symptoms: "Black powdery masses replacing entire heads",
        prevention: "Hot water seed treatment, systemic fungicides"
    },

    },
    //Linseed Diseases
    "Linseed": {
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal patches on linseed leaves and stems, reducing photosynthesis and seed yield.",
        image: "https://www.google.com/search?q=linseed+powdery+mildew&tbm=isch",
        causes: "Fungus Oidium lini",
        symptoms: "White powdery growth, stunted plants",
        prevention: "Avoid excess nitrogen, use sulfur dust"
    },
    "Rust": {
        description: "Linseed rust produces orange-brown pustules on leaves and stems, causing premature defoliation and yield loss.",
        image: "https://www.google.com/search?q=linseed+rust&tbm=isch",
        causes: "Fungus Melampsora lini",
        symptoms: "Orange pustules, leaf yellowing",
        prevention: "Crop rotation, resistant varieties"
    },
    "Wilt": {
        description: "Fusarium wilt causes sudden wilting and death of linseed plants, especially in waterlogged soils.",
        image: "https://www.google.com/search?q=linseed+wilt&tbm=isch",
        causes: "Fungus Fusarium oxysporum",
        symptoms: "Yellowing, wilting, vascular browning",
        prevention: "Well-drained soils, seed treatment"
    },
    "Alternaria Blight": {
        description: "Alternaria causes dark brown spots on linseed leaves and capsules, reducing both yield and oil quality.",
        image: "https://www.google.com/search?q=linseed+alternaria&tbm=isch",
        causes: "Fungus Alternaria linicola",
        symptoms: "Brown necrotic spots, premature capsule opening",
        prevention: "Avoid overhead irrigation, fungicide sprays"
    },
    "Blight": {
        description: "Blight causes rapid browning and death of linseed foliage, particularly in cool, wet conditions.",
        image: "https://www.google.com/search?q=linseed+blight&tbm=isch",
        causes: "Fungus Septoria linicola",
        symptoms: "Brown lesions with yellow halos, defoliation",
        prevention: "Field sanitation, balanced fertilization"
    },

    },
    // Green Gram Diseases
    "Green gram": {
    "Yellow Mosaic": {
        description: "Yellow mosaic virus causes bright yellow patches on leaves and stunted growth, transmitted by whiteflies.",
        image: "https://www.google.com/search?q=green+gram+yellow+mosaic&tbm=isch",
        causes: "Mungbean yellow mosaic virus",
        symptoms: "Yellow mosaic pattern, stunted plants",
        prevention: "Whitefly control, resistant varieties"
    },
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal growth on green gram leaves, reducing photosynthesis and pod formation.",
        image: "https://www.google.com/search?q=green+gram+powdery+mildew&tbm=isch",
        causes: "Fungus Erysiphe polygoni",
        symptoms: "White powdery patches, leaf curling",
        prevention: "Proper spacing, neem oil sprays"
    },
    "Cercospora": {
        description: "Cercospora leaf spot causes circular brown spots with yellow halos on green gram leaves, leading to defoliation.",
        image: "https://www.google.com/search?q=green+gram+cercospora&tbm=isch",
        causes: "Fungus Cercospora canescens",
        symptoms: "Brown spots with yellow halos",
        prevention: "Crop rotation, fungicide sprays"
    },
    "Anthracnose": {
        description: "Anthracnose causes sunken black lesions on green gram stems, leaves and pods, especially in humid conditions.",
        image: "https://www.google.com/search?q=green+gram+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum truncatum",
        symptoms: "Black sunken lesions, pod rot",
        prevention: "Seed treatment, field sanitation"
    },
    "Bacterial Spot": {
        description: "Bacterial spot creates water-soaked lesions on green gram leaves that later turn necrotic, spreading through rain splash.",
        image: "https://www.google.com/search?q=green+gram+bacterial+spot&tbm=isch",
        causes: "Bacterium Xanthomonas axonopodis",
        symptoms: "Water-soaked angular spots",
        prevention: "Copper sprays, avoid overhead irrigation"
    },

    },
    // Black Gram Diseases
    "Black gram": {
    "Root Rot": {
        description: "Root rot causes blackening and decay of black gram roots, leading to wilting and plant death, especially in waterlogged soils.",
        image: "https://www.google.com/search?q=black+gram+root+rot&tbm=isch",
        causes: "Fungus Rhizoctonia solani",
        symptoms: "Blackened roots, wilting plants",
        prevention: "Well-drained soils, biocontrol agents"
    },
    "Anthracnose": {
        description: "Anthracnose causes dark sunken lesions on black gram leaves, stems and pods, reducing yield significantly.",
        image: "https://www.google.com/search?q=black+gram+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum lindemuthianum",
        symptoms: "Dark sunken lesions with pink spore masses",
        prevention: "Resistant varieties, seed treatment"
    },
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal growth on black gram leaves, reducing photosynthesis and pod filling.",
        image: "https://www.google.com/search?q=black+gram+powdery+mildew&tbm=isch",
        causes: "Fungus Erysiphe polygoni",
        symptoms: "White powdery patches, stunted growth",
        prevention: "Neem oil sprays, proper spacing"
    },
    "Leaf Spot": {
        description: "Leaf spot causes circular brown lesions on black gram leaves, leading to premature defoliation.",
        image: "https://www.google.com/search?q=black+gram+leaf+spot&tbm=isch",
        causes: "Fungus Cercospora canescens",
        symptoms: "Circular brown spots with yellow halos",
        prevention: "Fungicide sprays, crop rotation"
    },
    "Mosaic": {
        description: "Mosaic virus causes yellow mottling and distortion of black gram leaves, transmitted by aphids.",
        image: "https://www.google.com/search?q=black+gram+mosaic&tbm=isch",
        causes: "Blackgram mosaic virus",
        symptoms: "Yellow mosaic pattern, leaf curling",
        prevention: "Aphid control, resistant varieties"
    },

    },
    //Notable Crop
    "Notable Crop": {
    "Late Blight": {
    description: "Late blight affects the leaves and stems, causing water-soaked lesions that rapidly turn brown and spread in cool, moist weather. It can destroy entire fields quickly.",
    image: "https://www.google.com/search?q=late+blight+in+crops&tbm=isch",
    causes: "Fungus Phytophthora infestans",
    symptoms: "Brown-black leaf spots with yellow edges",
    prevention: "Use resistant varieties, apply fungicides regularly"
    },
    "Early Blight": {
        description: "Early blight causes dark concentric rings on older leaves, weakening the plant and reducing yield. It thrives in warm, humid conditions and affects many vegetable crops.",
        image: "https://www.google.com/search?q=early+blight+in+crops&tbm=isch",
        causes: "Fungus Alternaria solani",
        symptoms: "Target-like spots on older leaves",
        prevention: "Crop rotation, copper-based fungicides"
    },
    "Blight": {
        description: "Blight generally refers to the quick browning and death of plant parts. It can spread fast under humid conditions and greatly impact plant health and productivity.",
        image: "https://www.google.com/search?q=blight+disease+in+plants&tbm=isch",
        causes: "Various fungi and bacteria",
        symptoms: "Dry, brown, dead patches on foliage",
        prevention: "Sanitation, fungicide sprays"
    },
    "Wilt": {
        description: "Wilt diseases cause plants to suddenly droop and collapse due to blockage of water flow in stems. It’s often soil-borne and hard to eliminate once established.",
        image: "https://www.google.com/search?q=wilt+disease+in+plants&tbm=isch",
        causes: "Fungi like Fusarium or Verticillium",
        symptoms: "Sudden leaf drooping and yellowing",
        prevention: "Crop rotation, soil solarization"
    },
    "Rot": {
        description: "Rot affects roots, stems, or fruits, causing decay and foul smell. It usually occurs in waterlogged or poorly drained conditions, especially during rainy seasons.",
        image: "https://www.google.com/search?q=rot+disease+in+crops&tbm=isch",
        causes: "Bacteria or fungi like Pythium, Rhizoctonia",
        symptoms: "Soft, mushy, discolored plant parts",
        prevention: "Improve drainage, avoid excess irrigation"
    },

    },
    // Orange
    "Orange": {

"Citrus Canker": {
    description: "Citrus canker is a bacterial disease that causes lesions on leaves, stems, and fruit, reducing market value and making the fruit more prone to falling early.",
    image: "https://www.google.com/search?q=citrus+canker&tbm=isch",
    causes: "Bacterium Xanthomonas citri",
    symptoms: "Brown, corky lesions with yellow halos",
    prevention: "Copper sprays, removal of infected trees"
    },
    "Greening": {
        description: "Citrus greening, also called Huanglongbing, is a serious disease that causes yellowing of shoots, small fruits, and eventual tree death. It is spread by psyllid insects.",
        image: "https://www.google.com/search?q=citrus+greening&tbm=isch",
        causes: "Bacterium Candidatus Liberibacter",
        symptoms: "Yellow mottling, misshapen fruits",
        prevention: "Control psyllids, plant certified disease-free trees"
    },
    "Melanose": {
        description: "Melanose appears as small, raised dark spots on fruit and leaves. Though it doesn’t harm the fruit inside, it reduces the visual and market value of oranges.",
        image: "https://www.google.com/search?q=orange+melanose&tbm=isch",
        causes: "Fungus Diaporthe citri",
        symptoms: "Tiny brown scabs or raised dots",
        prevention: "Remove dead twigs, spray copper fungicides"
    },
    "Scab": {
        description: "Scab results in rough, corky, raised lesions on fruit and leaves, affecting young tissues the most. It can cause fruit to drop prematurely.",
        image: "https://www.google.com/search?q=orange+scab+disease&tbm=isch",
        causes: "Fungus Elsinoë fawcettii",
        symptoms: "Warty growths on fruit and leaves",
        prevention: "Prune affected parts, use fungicides"
    },
    "Anthracnose": {
        description: "Anthracnose in oranges causes dieback of twigs and fruit rot. Dark sunken spots may appear on mature fruit and infected twigs can dry up.",
        image: "https://www.google.com/search?q=orange+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum gloeosporioides",
        symptoms: "Dark spots on fruits and twigs",
        prevention: "Prune and destroy infected parts, apply fungicides"
    },

    },
    //  Traditional Crop
    "Traditional Crop": {
    "Rust": {
    description: "Rust diseases create rust-colored pustules on the undersides of leaves, hindering photosynthesis and plant growth, especially during humid weather.",
    image: "https://www.google.com/search?q=plant+rust+disease&tbm=isch",
    causes: "Fungus Puccinia spp.",
    symptoms: "Rust-colored powder on leaves",
    prevention: "Remove infected leaves, apply fungicide"
    },
    "Smut": {
        description: "Smut affects cereals and grasses by replacing grain with black powdery masses. It greatly reduces yield and spreads through infected seeds.",
        image: "https://www.google.com/search?q=smut+disease+in+plants&tbm=isch",
        causes: "Fungus Ustilago spp.",
        symptoms: "Black sooty growth in flowers or grains",
        prevention: "Use disease-free seeds, seed treatment"
    },
    "Blight": {
        description: "Blight leads to browning, drying, and rotting of plant parts. It is often fast-spreading and appears under prolonged moisture or rain.",
        image: "https://www.google.com/search?q=blight+disease+in+crops&tbm=isch",
        causes: "Various fungi or bacteria",
        symptoms: "Leaf and stem browning and wilting",
        prevention: "Clean fields, apply fungicides"
    },
    "Wilt": {
        description: "Wilt makes the plant droop, usually starting from the lower leaves and progressing upward. It often affects roots and stem vascular tissues.",
        image: "https://www.google.com/search?q=wilt+disease+in+traditional+crop&tbm=isch",
        causes: "Soil fungi like Fusarium or Verticillium",
        symptoms: "Leaves drooping, turning yellow and dry",
        prevention: "Use resistant varieties, treat soil"
    },
    "Mildew": {
        description: "Mildew appears as white or grey patches on leaves and stems, commonly in cool and humid weather, and it hampers plant growth and yield.",
        image: "https://www.google.com/search?q=mildew+disease+in+plants&tbm=isch",
        causes: "Fungi like Erysiphe or Peronospora spp.",
        symptoms: "White or grey moldy layer on leaves",
        prevention: "Ensure air flow, spray neem or sulfur"
    },

    },
    // Groundnut
    "Groundnut": {
    "Tikka Disease": {
    description: "Tikka disease causes brown circular spots with yellow halos on groundnut leaves, leading to early leaf fall and reduced pod formation. It is one of the most common foliar diseases.",
    image: "https://www.google.com/search?q=groundnut+tikka+disease&tbm=isch",
    causes: "Fungi Cercospora arachidicola and Cercosporidium personatum",
    symptoms: "Brown spots with yellow borders, defoliation",
    prevention: "Fungicide sprays, crop rotation, resistant varieties"
    },
    "Stem Rot": {
        description: "Stem rot in groundnut leads to rotting at the base of the stem and plant collapse. White fungal growth and sclerotia can be seen near soil line.",
        image: "https://www.google.com/search?q=groundnut+stem+rot&tbm=isch",
        causes: "Fungus Sclerotium rolfsii",
        symptoms: "Basal rot, white mycelium, plant lodging",
        prevention: "Use well-drained soil, treat seeds with fungicides"
    },
    "Rust": {
        description: "Rust appears as reddish-brown pustules on the underside of groundnut leaves. It spreads rapidly, reducing photosynthesis and yield especially in humid weather.",
        image: "https://www.google.com/search?q=groundnut+rust&tbm=isch",
        causes: "Fungus Puccinia arachidis",
        symptoms: "Rust-colored pustules under leaves",
        prevention: "Apply mancozeb or chlorothalonil sprays"
    },
    "Leaf Spot": {
        description: "Leaf spot affects groundnut leaves with dark lesions that expand and coalesce. Severe infection leads to leaf drop and poor plant vigor.",
        image: "https://www.google.com/search?q=groundnut+leaf+spot&tbm=isch",
        causes: "Fungi Cercospora and Alternaria species",
        symptoms: "Dark spots on leaves, defoliation",
        prevention: "Fungicide sprays, avoid overhead irrigation"
    },
    "Blight": {
        description: "Blight in groundnut causes irregular brown patches on leaves and stems. It may progress to rotting and drying of plant tissues if not managed early.",
        image: "https://www.google.com/search?q=groundnut+blight&tbm=isch",
        causes: "Fungus Alternaria alternata",
        symptoms: "Brown lesions, leaf drying, stem blight",
        prevention: "Seed treatment, timely fungicide application"
    },

    },
    // Moong (Green Gram)
    "Moong (Green Gram)": {
    "Powdery Mildew": {
    description: "Powdery mildew forms a white powdery coating on moong leaves and stems. It blocks sunlight, reduces photosynthesis, and weakens the plant during flowering and pod development stages.",
    image: "https://www.google.com/search?q=moong+powdery+mildew&tbm=isch",
    causes: "Fungus Erysiphe polygoni",
    symptoms: "White powdery patches on leaves",
    prevention: "Neem oil or sulfur-based fungicide sprays"
    },
    "Cercospora": {
        description: "Cercospora leaf spot causes brownish-purple spots that merge and dry the leaves prematurely. It spreads rapidly in moist weather and reduces yield significantly.",
        image: "https://www.google.com/search?q=moong+cercospora&tbm=isch",
        causes: "Fungus Cercospora cruenta",
        symptoms: "Small purple spots on leaves",
        prevention: "Resistant varieties, crop sanitation, fungicides"
    },
    "Anthracnose": {
        description: "Anthracnose causes dark sunken spots on moong stems, leaves, and pods. It affects seed development and can lead to plant wilting in severe cases.",
        image: "https://www.google.com/search?q=moong+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum lindemuthianum",
        symptoms: "Dark lesions with pinkish spores",
        prevention: "Seed treatment, remove infected debris"
    },
    "Yellow Mosaic": {
        description: "Yellow Mosaic causes patchy yellowing and curling of moong leaves. The virus is transmitted by whiteflies and leads to stunted plant growth and poor yield.",
        image: "https://www.google.com/search?q=moong+yellow+mosaic&tbm=isch",
        causes: "Mungbean yellow mosaic virus (MYMV)",
        symptoms: "Yellow patches, leaf distortion",
        prevention: "Control whiteflies, grow resistant varieties"
    },
    "Leaf Spot": {
        description: "Leaf spot disease in moong leads to brownish lesions with yellow halos. Infected leaves dry up quickly, especially during humid conditions.",
        image: "https://www.google.com/search?q=moong+leaf+spot&tbm=isch",
        causes: "Fungus Cercospora canescens",
        symptoms: "Brown spots with yellow edges",
        prevention: "Spray mancozeb, use clean seeds"
    },

    },
    // Urd (Black Gram)
    "Urd (Black Gram)": {
    "Anthracnose": {
    description: "Anthracnose forms dark lesions on black gram stems, pods, and leaves. It is a common fungal disease that can lead to significant yield loss if not controlled early.",
    image: "https://www.google.com/search?q=black+gram+anthracnose&tbm=isch",
    causes: "Fungus Colletotrichum lindemuthianum",
    symptoms: "Dark spots with pinkish centers",
    prevention: "Use disease-free seeds, apply fungicides"
    },
    "Powdery Mildew": {
        description: "Powdery mildew appears as white powdery patches on leaves and stems. It weakens the plant, reduces pod formation, and spreads easily in dry, warm climates.",
        image: "https://www.google.com/search?q=black+gram+powdery+mildew&tbm=isch",
        causes: "Fungus Erysiphe polygoni",
        symptoms: "White growth on leaves, stunted plant",
        prevention: "Apply neem oil or sulfur fungicide"
    },
    "Leaf Spot": {
        description: "Leaf spot disease creates brown to black spots on the leaves of black gram. It causes early leaf fall and reduced photosynthesis if not managed timely.",
        image: "https://www.google.com/search?q=black+gram+leaf+spot&tbm=isch",
        causes: "Fungus Cercospora canescens",
        symptoms: "Brown circular spots with yellow margins",
        prevention: "Use fungicides and rotate crops"
    },
    "Mosaic": {
        description: "Mosaic virus causes mottled yellow patterns and crinkling of black gram leaves. It is transmitted by insects like aphids and whiteflies and stunts plant growth.",
        image: "https://www.google.com/search?q=black+gram+mosaic&tbm=isch",
        causes: "Blackgram mosaic virus",
        symptoms: "Yellow patches, curling, poor growth",
        prevention: "Control vectors, use resistant seeds"
    },
    "Yellow Mosaic": {
        description: "Yellow Mosaic leads to patchy yellowing and twisting of leaves. It severely affects yield by reducing photosynthesis. It is transmitted by whiteflies.",
        image: "https://www.google.com/search?q=black+gram+yellow+mosaic&tbm=isch",
        causes: "Mungbean yellow mosaic virus (MYMV)",
        symptoms: "Yellow patterns, deformed leaves",
        prevention: "Whitefly control, grow resistant varieties"
    },

    },
    // Sesamum
    "Sesamum": {
    "Phyllody": {
    description: "Phyllody transforms sesame flowers into leafy structures, preventing seed formation. It is caused by phytoplasma and spread by leafhoppers. Infected plants remain sterile and yield is lost.",
    image: "https://www.google.com/search?q=sesamum+phyllody&tbm=isch",
    causes: "Phytoplasma spread by jassids/leafhoppers",
    symptoms: "Green leafy flowers, no seed formation",
    prevention: "Control leafhoppers, remove infected plants"
    },
    "Stem Rot": {
        description: "Stem rot in sesame causes the stem base to rot, leading to plant collapse. It thrives in poorly drained soil and humid weather conditions.",
        image: "https://www.google.com/search?q=sesamum+stem+rot&tbm=isch",
        causes: "Fungus Sclerotium rolfsii",
        symptoms: "Soft rot at stem base, white fungal growth",
        prevention: "Good drainage, soil treatment with fungicides"
    },
    "Blight": {
        description: "Sesame blight leads to brown leaf lesions that merge and dry out the leaves. It weakens the plant and can significantly reduce seed production if not treated.",
        image: "https://www.google.com/search?q=sesamum+blight&tbm=isch",
        causes: "Fungus Alternaria sesami",
        symptoms: "Dark brown spots with yellow halos on leaves",
        prevention: "Spray mancozeb or copper fungicide"
    },
    "Leaf Spot": {
        description: "Leaf spot in sesame appears as circular or irregular dark spots that expand and cause premature leaf drop. It spreads quickly during warm and wet weather.",
        image: "https://www.google.com/search?q=sesamum+leaf+spot&tbm=isch",
        causes: "Fungus Cercospora sesami",
        symptoms: "Dark circular spots, early leaf fall",
        prevention: "Use disease-free seeds, spray fungicides"
    },
    "Wilt": {
        description: "Wilt in sesame causes sudden yellowing and wilting of the entire plant. It starts from the lower leaves and is often caused by soil-borne pathogens in warm climates.",
        image: "https://www.google.com/search?q=sesamum+wilt&tbm=isch",
        causes: "Fungus Fusarium oxysporum",
        symptoms: "Leaf yellowing, drooping, and plant death",
        prevention: "Crop rotation, resistant varieties, soil drenching"
    },


    },
    // Banana Diseases
    "Bananas": {
    "Panama Disease": {
        description: "Panama disease (Fusarium wilt) is a soil-borne fungal disease threatening global banana production. The tropical race 4 (TR4) strain affects Cavendish bananas and persists in soil for decades. There is no cure for infected plants.",
        image: "https://www.google.com/search?q=banana+panama+disease&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. cubense",
        symptoms: "Yellowing leaves, splitting of pseudostem, vascular discoloration",
                prevention: "Use disease-free plants, prevent soil movement, plant resistant cultivars"
    },
    "Sigatoka": {
        description: "Sigatoka is a leaf spot disease that reduces banana photosynthetic area and fruit yield. The disease spreads rapidly during periods of high humidity and rainfall, requiring frequent fungicide applications.",
        image: "https://www.google.com/search?q=banana+sigatoka&tbm=isch",
        causes: "Fungi Mycosphaerella fijiensis (Black Sigatoka) and M. musicola (Yellow Sigatoka)",
        symptoms: "Streaks on leaves progressing to large necrotic spots",
        prevention: "Improve air circulation, apply fungicides, remove infected leaves"
    },
    "Bunchy Top": {
        description: "Bunchy top is a viral disease causing stunted growth with leaves bunching at the top of banana plants. Transmitted by aphids, the disease prevents normal fruit production and requires complete plant removal.",
        image: "https://www.google.com/search?q=banana+bunchy+top&tbm=isch",
        causes: "Banana bunchy top virus",
        symptoms: "Stunted growth, narrow upright leaves, dark green streaks",
        prevention: "Control aphid vectors, use virus-free plants, rogue infected plants"
    },
    "Mosaic": {
        description: "Banana mosaic viruses cause chlorotic streaks and mottling on leaves. Several viruses cause mosaic symptoms, all reducing plant vigor and fruit production. Some are transmitted by aphids or through infected planting material.",
        image: "https://www.google.com/search?q=banana+mosaic+virus&tbm=isch",
        causes: "Cucumber mosaic virus, Banana streak virus, and others",
        symptoms: "Chlorotic streaks, mottling, leaf distortion",
        prevention: "Use virus-free plants, control insect vectors, rogue infected plants"
    },
    "Anthracnose": {
        description: "Anthracnose causes dark sunken lesions on banana fruits that expand during ripening and transport. The disease is a significant cause of post-harvest losses and requires proper fruit handling and fungicide treatments.",
        image: "https://www.google.com/search?q=banana+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum musae",
        symptoms: "Sunken black lesions on fruits, especially on ripening bananas",
        prevention: "Proper fruit handling, post-harvest fungicide dips, field sanitation"
    },

    },
    // Onion Diseases
    "Onions": {
    "Purple Blotch": {
        description: "Purple blotch is a fungal disease causing purple-tinged oval lesions with concentric rings on onion leaves. The disease leads to leaf dieback and reduces bulb size and quality significantly.",
        image: "https://www.google.com/search?q=onion+purple+blotch&tbm=isch",
        causes: "Fungus Alternaria porri",
        symptoms: "Purple-tinged oval lesions with concentric rings",
        prevention: "Practice crop rotation, apply fungicides, improve air circulation"
    },
    "Stemphylium Blight": {
        description: "Stemphylium blight causes small yellow lesions that turn brown and coalesce, defoliating onion plants. The disease spreads rapidly during periods of alternating wet and dry conditions.",
        image: "https://www.google.com/search?q=onion+stemphylium+blight&tbm=isch",
        causes: "Fungus Stemphylium vesicarium",
        symptoms: "Small yellow lesions turning brown, leaf dieback",
        prevention: "Avoid overhead irrigation, apply fungicides, practice crop rotation"
    },
    "Downy Mildew": {
        description: "Downy mildew causes pale oval lesions with purple fungal growth on onion leaves during humid conditions. The pathogen survives in bulbs and spreads via wind-dispersed spores between fields.",
        image: "https://www.google.com/search?q=onion+downy+mildew&tbm=isch",
        causes: "Oomycete Peronospora destructor",
        symptoms: "Pale oval lesions, purple mold growth, leaf collapse",
        prevention: "Plant resistant varieties, avoid overcrowding, apply fungicides"
    },
    "Basal Rot": {
        description: "Basal rot is a soil-borne fungal disease causing bulb rot starting at the base during storage. The pathogen infects through roots in the field but symptoms often appear post-harvest.",
        image: "https://www.google.com/search?q=onion+basal+rot&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. cepae",
        symptoms: "Soft rot starting at bulb base, white to pink fungal growth",
        prevention: "Practice long crop rotations, proper curing before storage"
    },
    "Smudge": {
        description: "Smudge is a fungal disease causing dark green to black lesions on outer onion bulb scales. The disease reduces marketability but doesn't affect inner scales. The pathogen survives in soil.",
        image: "https://www.google.com/search?q=onion+smudge&tbm=isch",
        causes: "Fungus Colletotrichum circinans",
        symptoms: "Dark green to black lesions on outer scales",
        prevention: "Plant resistant varieties, proper curing, avoid wounding bulbs"
    }
    },
};



const Description = ({ crop, disease }) => {
    return (
      <>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-blue-800 border-b pb-2">About {crop}</h3>
          <p className="text-gray-800 leading-relaxed">{cropInfo[crop]}</p>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-blue-800 border-b pb-2">Disease Information</h3>
          <p className="text-gray-800 mb-4 leading-relaxed">
            {diseaseInfo[crop]?.[disease]?.description || "No specific information available."}
          </p>
          
          {/* Causes Section */}
          {diseaseInfo[crop]?.[disease]?.causes && (
            <div className="mb-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Causes
              </h4>
              <p className="text-gray-800 pl-7">{diseaseInfo[crop]?.[disease].causes}</p>
            </div>
          )}
  
          {/* Symptoms Section */}
          {diseaseInfo[crop]?.[disease]?.symptoms && (
            <div className="mb-6 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Symptoms
              </h4>
              <p className="text-gray-800 pl-7">{diseaseInfo[crop]?.[disease].symptoms}</p>
            </div>
          )}
  
          {/* Prevention Section */}
          {diseaseInfo[crop]?.[disease]?.prevention && (
            <div className="mb-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Prevention & Control
              </h4>
              <p className="text-gray-800 pl-7">{diseaseInfo[crop]?.[disease].prevention}</p>
            </div>
          )}
  
          {diseaseInfo[crop]?.[disease]?.image && (
            <a href={diseaseInfo[crop]?.[disease].image} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              View disease images on Google
            </a>
          )}
        </div>
      </>
    );
  };
  
  export default Description;
  