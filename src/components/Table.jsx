import React from 'react';

const treatments = {
    "Paddy": {
        "Rice Blast": [
          { name: "Tricyclazole", price: "₹450-650", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹500-750", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Carbendazim", price: "₹350-600", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Isoprothiolane", price: "₹550-800", efficiency: "82%", type: "Systemic", dosage: "750ml/ha", interval: "14 days" },
          { name: "Edifenphos", price: "₹400-700", efficiency: "80%", type: "Organophosphate", dosage: "1L/ha", interval: "10 days" }
        ],
        "Sheath Blight": [
          { name: "Hexaconazole", price: "₹500-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Validamycin", price: "₹450-800", efficiency: "80%", type: "Antibiotic", dosage: "2.5L/ha", interval: "10 days" },
          { name: "Propiconazole", price: "₹550-950", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹600-1000", efficiency: "88%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Flutolanil", price: "₹650-1100", efficiency: "90%", type: "Carboxamide", dosage: "750g/ha", interval: "14 days" }
        ],
        "Bacterial Blight": [
          { name: "Streptomycin", price: "₹400-850", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Copper Oxychloride", price: "₹300-700", efficiency: "75%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Kasugamycin", price: "₹500-800", efficiency: "82%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-750", efficiency: "78%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "70%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ],
        "Brown Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Carbendazim", price: "₹450-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "82%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Tungro Virus": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ]
      },
      "Wheat": {
        "Rust": [
          { name: "Tebuconazole", price: "₹450-600", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-750", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-550", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹550-850", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹600-900", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹150-400", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Hexaconazole", price: "₹250-600", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Trifloxystrobin", price: "₹400-800", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹350-650", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Penconazole", price: "₹450-750", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Karnal Bunt": [
          { name: "Tebuconazole", price: "₹500-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Carbendazim", price: "₹450-750", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1000", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹400-700", efficiency: "82%", type: "Systemic", dosage: "750g/ha", interval: "10 days" }
        ],
        "Leaf Blight": [
          { name: "Mancozeb", price: "₹350-750", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹400-850", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Propineb", price: "₹450-900", efficiency: "80%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹500-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Head Blight": [
          { name: "Tebuconazole", price: "₹550-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Prothioconazole", price: "₹600-1000", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Metconazole", price: "₹500-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Carbendazim", price: "₹450-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Fludioxonil", price: "₹650-1100", efficiency: "92%", type: "Phenylpyrrole", dosage: "500g/ha", interval: "14 days" }
        ]
      },
      "Chickpea": {
        "Fusarium Wilt": [
          { name: "Carbendazim", price: "₹200-450", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹300-600", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹400-700", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Ascochyta Blight": [
          { name: "Chlorothalonil", price: "₹300-500", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Mancozeb", price: "₹350-650", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Copper Hydroxide", price: "₹400-750", efficiency: "80%", type: "Protectant", dosage: "2kg/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹500-850", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Botrytis Gray Mold": [
          { name: "Carbendazim", price: "₹350-600", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Iprodione", price: "₹400-750", efficiency: "85%", type: "Dicarboximide", dosage: "1kg/ha", interval: "10 days" },
          { name: "Vinclozolin", price: "₹450-800", efficiency: "82%", type: "Dicarboximide", dosage: "1kg/ha", interval: "10 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Root Rot": [
          { name: "Carbendazim", price: "₹300-550", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Metalaxyl", price: "₹400-750", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" },
          { name: "Fosetyl-Al", price: "₹500-900", efficiency: "80%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" }
        ],
        "Stunt": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ]
      },
      "Tomatoes": {
        "Early Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Difenoconazole", price: "₹500-900", efficiency: "82%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Copper Oxychloride", price: "₹300-600", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" }
        ],
        "Late Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹500-950", efficiency: "83%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Dimethomorph", price: "₹550-1000", efficiency: "82%", type: "Morpholine", dosage: "300g/ha", interval: "14 days" },
          { name: "Cymoxanil", price: "₹480-850", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Fosetyl-Al", price: "₹600-1100", efficiency: "78%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" }
        ],
        "Bacterial Spot": [
          { name: "Streptomycin", price: "₹400-750", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Copper Oxychloride", price: "₹300-600", efficiency: "70%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Kasugamycin", price: "₹500-850", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹550-900", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-450", efficiency: "65%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ],
        "Leaf Curl Virus": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Fusarium Wilt": [
          { name: "Carbendazim", price: "₹350-600", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-750", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹400-650", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ]
      },
      "Chillies": {
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹500-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹550-1000", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ],
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Hexaconazole", price: "₹400-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹500-950", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹550-1000", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Bacterial Spot": [
          { name: "Streptomycin", price: "₹400-800", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Copper Oxychloride", price: "₹300-650", efficiency: "75%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Kasugamycin", price: "₹500-850", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-750", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "70%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ],
        "Leaf Curl": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Fruit Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Captan", price: "₹450-800", efficiency: "80%", type: "Contact", dosage: "2kg/ha", interval: "10 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "82%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ]
      },
      "Sugarcane": {
        "Red Rot": [
          { name: "Carbendazim", price: "₹500-950", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹400-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Trichoderma viride", price: "₹350-700", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹400-750", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Wilt": [
          { name: "Trichoderma viride", price: "₹400-850", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Hexaconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹450-900", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Carbendazim", price: "₹350-700", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Smut": [
          { name: "Thiophanate-methyl", price: "₹450-800", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Carboxin", price: "₹500-900", efficiency: "85%", type: "Systemic", dosage: "1kg/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹550-950", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1000", efficiency: "88%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Leaf Scald": [
          { name: "Streptomycin", price: "₹400-850", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-800", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Copper Oxychloride", price: "₹300-650", efficiency: "70%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Kasugamycin", price: "₹500-850", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "65%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ],
        "Ratoon Stunting": [
          { name: "Streptomycin", price: "₹450-850", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹500-900", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Hot Water Treatment", price: "₹100-300", efficiency: "90%", type: "Physical", dosage: "50°C for 2 hours", interval: "Before planting" },
          { name: "Trichoderma viride", price: "₹350-700", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹400-750", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ]
      },
      "Sunflower": {
        "Sclerotinia Rot": [
          { name: "Propiconazole", price: "₹350-750", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Carbendazim", price: "₹450-900", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Hexaconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "88%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹600-1100", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Alternaria Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Copper Oxychloride", price: "₹450-900", efficiency: "80%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" }
        ],
        "Downy Mildew": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ],
        "Rust": [
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Flutriafol", price: "₹600-1000", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Charcoal Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" }
        ]
      },
      "Sorghum (Jowar)": {
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹500-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Chlorothalonil", price: "₹300-650", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" }
        ],
        "Downy Mildew": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ],
        "Grain Mold": [
          { name: "Propiconazole", price: "₹450-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Carbendazim", price: "₹350-700", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ],
        "Rust": [
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹600-1000", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Ergot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Propiconazole", price: "₹500-950", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹550-1000", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" }
        ]
      },
      "Pigeonpea (Tur)": {
        "Wilt": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Propiconazole", price: "₹450-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Sterility Mosaic": [
          { name: "Imidacloprid", price: "₹300-600", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Acetamiprid", price: "₹350-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹400-750", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Pymetrozine", price: "₹500-850", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹450-800", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Phytophthora Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ],
        "Alternaria Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Stem Canker": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Copper Oxychloride", price: "₹300-600", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" }
        ]
      },
      "Soybean": {
        "Rust": [
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ],
        "Bacterial Blight": [
          { name: "Copper Oxychloride", price: "₹400-850", efficiency: "75%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Streptomycin", price: "₹300-700", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Kasugamycin", price: "₹500-800", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-750", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "70%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ],
        "Charcoal Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Pod Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Mosaic Virus": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ]
      },
      "Cotton": {
        "Boll Rot": [
          { name: "Carbendazim", price: "₹450-900", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Captan", price: "₹500-950", efficiency: "80%", type: "Contact", dosage: "2kg/ha", interval: "10 days" },
          { name: "Thiophanate-methyl", price: "₹550-1000", efficiency: "82%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Azoxystrobin", price: "₹600-1100", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Root Rot": [
          { name: "Trichoderma viride", price: "₹500-950", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Carbendazim", price: "₹400-800", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Metalaxyl", price: "₹600-1100", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" }
        ],
        "Leaf Curl": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Alternaria Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Bacterial Blight": [
          { name: "Streptomycin", price: "₹400-850", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Copper Oxychloride", price: "₹300-650", efficiency: "75%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Kasugamycin", price: "₹500-850", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-750", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "70%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ]
      },
      "Rabi Crop": {
        "Leaf Rust": [
          { name: "Tebuconazole", price: "₹500-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹450-750", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Propiconazole", price: "₹550-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹600-1000", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹650-1100", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Smut": [
          { name: "Carboxin", price: "₹500-900", efficiency: "85%", type: "Systemic", dosage: "1kg/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹450-800", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ],
        "Ergot": [
          { name: "Carbendazim", price: "₹450-900", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹550-1000", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹600-1100", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-900", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" }
        ],
        "Loose Smut": [
          { name: "Carboxin", price: "₹500-950", efficiency: "85%", type: "Systemic", dosage: "1kg/ha", interval: "14 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiram", price: "₹450-850", efficiency: "80%", type: "Protectant", dosage: "2kg/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹400-800", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ]
      },
      "Linseed": {
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Rust": [
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹600-1000", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Wilt": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Alternaria Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ]
      },
      "Green gram": {
        "Yellow Mosaic": [
          { name: "Imidacloprid", price: "₹300-600", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹350-700", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-750", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹500-850", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹450-800", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Cercospora": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Bacterial Spot": [
          { name: "Streptomycin", price: "₹400-850", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Copper Oxychloride", price: "₹300-650", efficiency: "75%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Kasugamycin", price: "₹500-850", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-750", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "70%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ]
      },
      "Black gram": {
        "Root Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹450-900", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Leaf Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Mosaic": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ]
      },
      "Notable Crop": {
        "Late Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹500-950", efficiency: "83%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Dimethomorph", price: "₹550-1000", efficiency: "82%", type: "Morpholine", dosage: "300g/ha", interval: "14 days" },
          { name: "Cymoxanil", price: "₹480-850", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" },
          { name: "Fosetyl-Al", price: "₹600-1100", efficiency: "78%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" }
        ],
        "Early Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Difenoconazole", price: "₹500-900", efficiency: "82%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Copper Oxychloride", price: "₹300-600", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" }
        ],
        "Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ],
        "Wilt": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Captan", price: "₹500-950", efficiency: "80%", type: "Contact", dosage: "2kg/ha", interval: "10 days" },
          { name: "Thiophanate-methyl", price: "₹550-1000", efficiency: "82%", type: "Systemic", dosage: "750g/ha", interval: "10 days" }
        ]
      },
      "Orange": {
        "Citrus Canker": [
          { name: "Copper Oxychloride", price: "₹400-850", efficiency: "75%", type: "Bactericide", dosage: "3kg/ha", interval: "10 days" },
          { name: "Streptomycin", price: "₹300-700", efficiency: "80%", type: "Antibiotic", dosage: "500g/ha", interval: "7 days" },
          { name: "Kasugamycin", price: "₹500-850", efficiency: "78%", type: "Antibiotic", dosage: "2% solution", interval: "7 days" },
          { name: "Oxytetracycline", price: "₹450-750", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Bordeaux Mixture", price: "₹250-500", efficiency: "70%", type: "Copper-based", dosage: "10% solution", interval: "7 days" }
        ],
        "Greening": [
          { name: "Tetracycline", price: "₹500-900", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Oxytetracycline", price: "₹450-800", efficiency: "75%", type: "Antibiotic", dosage: "500g/ha", interval: "10 days" },
          { name: "Imidacloprid", price: "₹400-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-850", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹450-800", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" }
        ],
        "Melanose": [
          { name: "Copper Oxychloride", price: "₹350-700", efficiency: "75%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" },
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Scab": [
          { name: "Copper Oxychloride", price: "₹400-850", efficiency: "75%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ]
      },
      "Traditional Crop": {
        "Rust": [
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹400-750", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Propiconazole", price: "₹500-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹600-1000", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Smut": [
          { name: "Carboxin", price: "₹500-900", efficiency: "85%", type: "Systemic", dosage: "1kg/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹450-800", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" }
        ],
        "Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ],
        "Wilt": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ]
      },
      "Groundnut": {
        "Tikka Disease": [
          { name: "Chlorothalonil", price: "₹400-850", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Carbendazim", price: "₹450-900", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Stem Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Rust": [
          { name: "Tebuconazole", price: "₹450-800", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-850", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹550-900", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Flutriafol", price: "₹600-1000", efficiency: "90%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Leaf Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ]
      },
      "Moong (Green Gram)": {
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Cercospora": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ],
        "Yellow Mosaic": [
          { name: "Imidacloprid", price: "₹300-600", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹350-700", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-750", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹500-850", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹450-800", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Leaf Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ]
      },
      "Urd (Black Gram)": {
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Azoxystrobin", price: "₹500-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Chlorothalonil", price: "₹300-650", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" }
        ],
        "Powdery Mildew": [
          { name: "Sulphur", price: "₹350-800", efficiency: "70%", type: "Protectant", dosage: "3kg/ha", interval: "7 days" },
          { name: "Trifloxystrobin", price: "₹500-950", efficiency: "88%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Hexaconazole", price: "₹450-850", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Dinocap", price: "₹550-1000", efficiency: "80%", type: "Contact", dosage: "1L/ha", interval: "10 days" },
          { name: "Myclobutanil", price: "₹600-1100", efficiency: "86%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Leaf Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Mosaic": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Yellow Mosaic": [
          { name: "Imidacloprid", price: "₹300-600", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹350-700", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-750", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹500-850", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹450-800", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ]
      },
      "Sesamum": {
        "Phyllody": [
          { name: "Imidacloprid", price: "₹300-600", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Acetamiprid", price: "₹350-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹400-750", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Pymetrozine", price: "₹500-850", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹450-800", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Stem Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Blight": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ],
        "Leaf Spot": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Wilt": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ]
      },
      "Bananas": {
        "Panama Disease": [
          { name: "Carbendazim", price: "₹500-900", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Trichoderma viride", price: "₹450-850", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹400-800", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹550-1000", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Sigatoka": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Bunchy Top": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Mosaic": [
          { name: "Imidacloprid", price: "₹450-750", efficiency: "70%", type: "Insecticide", dosage: "150ml/ha", interval: "10 days" },
          { name: "Thiamethoxam", price: "₹500-800", efficiency: "75%", type: "Neonicotinoid", dosage: "100g/ha", interval: "14 days" },
          { name: "Acetamiprid", price: "₹400-700", efficiency: "72%", type: "Neonicotinoid", dosage: "150g/ha", interval: "10 days" },
          { name: "Pymetrozine", price: "₹600-950", efficiency: "78%", type: "Anti-feeding", dosage: "250g/ha", interval: "14 days" },
          { name: "Spinosad", price: "₹550-850", efficiency: "76%", type: "Biological", dosage: "300ml/ha", interval: "10 days" }
        ],
        "Anthracnose": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ]
      },
      "Onions": {
        "Purple Blotch": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹600-1100", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Stemphylium Blight": [
          { name: "Mancozeb", price: "₹400-850", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹350-700", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-950", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" },
          { name: "Propiconazole", price: "₹500-900", efficiency: "87%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" }
        ],
        "Downy Mildew": [
          { name: "Metalaxyl", price: "₹450-850", efficiency: "85%", type: "Systemic", dosage: "500g/ha", interval: "14 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Fosetyl-Al", price: "₹500-950", efficiency: "88%", type: "Phosphonate", dosage: "2.5kg/ha", interval: "14 days" },
          { name: "Propamocarb", price: "₹550-1000", efficiency: "87%", type: "Carbamate", dosage: "2L/ha", interval: "10 days" },
          { name: "Cymoxanil", price: "₹400-800", efficiency: "80%", type: "Systemic", dosage: "500g/ha", interval: "10 days" }
        ],
        "Basal Rot": [
          { name: "Carbendazim", price: "₹400-850", efficiency: "75%", type: "Systemic", dosage: "500g/ha", interval: "7 days" },
          { name: "Tebuconazole", price: "₹450-900", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Thiophanate-methyl", price: "₹500-850", efficiency: "80%", type: "Systemic", dosage: "750g/ha", interval: "10 days" },
          { name: "Trichoderma viride", price: "₹250-450", efficiency: "65%", type: "Biocontrol", dosage: "2.5kg/ha", interval: "15 days" },
          { name: "Pseudomonas fluorescens", price: "₹300-550", efficiency: "70%", type: "Biocontrol", dosage: "5L/ha", interval: "10 days" }
        ],
        "Smudge": [
          { name: "Copper Oxychloride", price: "₹400-850", efficiency: "75%", type: "Protectant", dosage: "3kg/ha", interval: "10 days" },
          { name: "Mancozeb", price: "₹350-700", efficiency: "75%", type: "Contact", dosage: "2kg/ha", interval: "7 days" },
          { name: "Chlorothalonil", price: "₹450-900", efficiency: "78%", type: "Protectant", dosage: "1kg/ha", interval: "10 days" },
          { name: "Tebuconazole", price: "₹500-950", efficiency: "85%", type: "Triazole", dosage: "500ml/ha", interval: "14 days" },
          { name: "Azoxystrobin", price: "₹550-1000", efficiency: "85%", type: "Strobilurin", dosage: "500g/ha", interval: "14 days" }
        ]
      }
};

const TreatmentTable = ({ crop, disease }) => {
  const currentTreatments = treatments[crop]?.[disease] || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-blue-800 border-b pb-2">
        Recommended Treatments for {crop} - {disease}
      </h3>
  
      {currentTreatments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Medicine</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Dosage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Interval</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Efficiency</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentTreatments.map((treatment, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{treatment.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{treatment.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">₹{treatment.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{treatment.dosage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{treatment.interval}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      parseFloat(treatment.efficiency) > 85
                        ? 'bg-blue-100 text-blue-800'
                        : parseFloat(treatment.efficiency) > 75
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {treatment.efficiency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-yellow-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                No treatment data available for this combination. Please consult with local agricultural experts.
              </p>
            </div>
          </div>
        </div>
      )}
  
      {/* Marquee Info - Replaced with modern animation */}
      <div className="overflow-hidden relative h-8 mt-6 bg-blue-50 rounded shadow-inner">
        <div className="absolute animate-marquee whitespace-nowrap text-sm text-blue-700 font-medium px-4">
          This treatment information is accurate and last updated on 21 April 2025. For the latest local updates, consult nearby agricultural extension offices.
        </div>
      </div>
    </div>
  );
};  

export default TreatmentTable;
