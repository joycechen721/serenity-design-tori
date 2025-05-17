
// Color palette data
export const colorPalettes = [
  { id: "c1", name: "Soft Blue", value: "#E1EFFF" },
  { id: "c2", name: "Gentle Sage", value: "#D1E8D5" },
  { id: "c3", name: "Warm Beige", value: "#E8DDD1" },
  { id: "c4", name: "Dusty Rose", value: "#F9E5E2" },
  { id: "c5", name: "Lavender", value: "#E5DEFF" },
  { id: "c6", name: "Soft Peach", value: "#FDE1D3" },
  { id: "c7", name: "Light Mint", value: "#D6EFE1" },
  { id: "c8", name: "Pale Yellow", value: "#FEF7CD" },
  { id: "c9", name: "Muted Coral", value: "#F5D0CA" },
  { id: "c10", name: "Soft Gray", value: "#F1F0FB" },
  { id: "c11", name: "Terracotta", value: "#D5A79C" },
  { id: "c12", name: "Forest Green", value: "#5E7B5E" },
];

// Interior style data
export const interiorStyles = [
  {
    id: "style1",
    name: "Cozy Minimal",
    description: "Clean lines with warm textures and minimal clutter",
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa76?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "style2",
    name: "Warm Traditional",
    description: "Classic comfort with familiar patterns and warm colors",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "style3",
    name: "Natural Modern",
    description: "Contemporary style with natural materials and plants",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "style4",
    name: "Vibrant Global",
    description: "Rich colors and patterns from cultures around the world",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop"
  }
];

// Texture data
export const textures = [
  {
    id: "texture1",
    name: "Soft Knits & Wool",
    description: "Gentle, warm fabrics that provide comfort and security",
    image: "https://images.unsplash.com/photo-1584952811565-c4c4031805f8?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "texture2",
    name: "Smooth Cotton",
    description: "Lightweight, breathable fabrics that feel clean and fresh",
    image: "https://images.unsplash.com/photo-1595515106864-077d45f171ee?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "texture3",
    name: "Natural Wood",
    description: "Grounding material that connects to nature and adds warmth",
    image: "https://images.unsplash.com/photo-1504347538039-a53f6ce7f434?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "texture4",
    name: "Plush Velvet",
    description: "Rich, soft texture that creates a sense of luxury",
    image: "https://images.unsplash.com/photo-1629113159439-ed8c3278ca88?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "texture5",
    name: "Sleek Metal",
    description: "Modern, cool surfaces that add structure and contrast",
    image: "https://images.unsplash.com/photo-1585488686385-ae2f2c86d0fc?q=80&w=400&auto=format&fit=crop"
  }
];

// Lighting options
export const lightingOptions = [
  {
    id: "light1",
    name: "Warm, Soft Lighting",
    description: "Gentle amber lights that create a cozy atmosphere",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "light2",
    name: "Natural Daylight",
    description: "Bright, clear light that helps maintain energy and focus",
    image: "https://images.unsplash.com/photo-1489171078254-677cce8324b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "light3", 
    name: "Adjustable Lighting",
    description: "Flexible options to change brightness and warmth as needed",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop"
  }
];

// Sensory preferences options
export const sensoryOptions = {
  sound: [
    { id: "sound1", label: "Quiet spaces with minimal noise" },
    { id: "sound2", label: "Gentle background sounds (fan, white noise)" },
    { id: "sound3", label: "Soft music or nature sounds" },
    { id: "sound4", label: "I don't have strong preferences about sound" }
  ],
  scent: [
    { id: "scent1", label: "No strong scents or fragrances" },
    { id: "scent2", label: "Natural, clean scents (cotton, linen)" },
    { id: "scent3", label: "Herbal or plant-based scents" },
    { id: "scent4", label: "I don't have strong preferences about scent" }
  ]
};

// Safety and comfort questions
export const safetyQuestions = [
  {
    id: "safety1",
    question: "Are there specific things that would help you feel safer in your space?",
    type: "multiselect",
    options: [
      { id: "safety1_1", label: "Clear sightlines to doors and windows" },
      { id: "safety1_2", label: "Multiple light sources I can control" },
      { id: "safety1_3", label: "Privacy from outside views" },
      { id: "safety1_4", label: "Space that's not too open or too enclosed" },
      { id: "safety1_5", label: "Other (please describe)" }
    ]
  },
  {
    id: "safety2",
    question: "Are there environmental elements that might trigger discomfort?",
    type: "multiselect",
    options: [
      { id: "safety2_1", label: "Bright, fluorescent lighting" },
      { id: "safety2_2", label: "Loud, sudden noises" },
      { id: "safety2_3", label: "Certain smells or fragrances" },
      { id: "safety2_4", label: "Crowded or cluttered spaces" },
      { id: "safety2_5", label: "Other (please describe)" }
    ]
  }
];

// Cultural considerations
export const culturalQuestions = [
  {
    id: "cultural1",
    question: "Are there specific cultural elements you'd like to incorporate into your space?",
    type: "text",
    placeholder: "Please share anything that would make your space feel more like home."
  },
  {
    id: "cultural2",
    question: "Are there specific activities or practices you need space for?",
    type: "multiselect",
    options: [
      { id: "cultural2_1", label: "Prayer or meditation" },
      { id: "cultural2_2", label: "Family gatherings" },
      { id: "cultural2_3", label: "Cooking traditional foods" },
      { id: "cultural2_4", label: "Art or creative expression" },
      { id: "cultural2_5", label: "Other (please describe)" }
    ]
  }
];
