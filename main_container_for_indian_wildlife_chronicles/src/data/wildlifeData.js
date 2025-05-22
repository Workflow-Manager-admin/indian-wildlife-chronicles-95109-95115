/**
 * Sample data for Indian Wildlife Chronicles
 * Contains data for various wildlife species, conservation programs, and featured animals
 */

// Featured wildlife species
export const featuredWildlife = [
  {
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    imageUrl: "https://images.unsplash.com/photo-1615824996195-f780bba7f9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "The Bengal tiger is the most numerous tiger subspecies. Its populations have been estimated at 2,500 in India, making it one of the largest wild tiger populations in the world.",
    habitat: "Tropical rainforests, marshes, and tall grasses",
    foundIn: ["Sundarbans", "Jim Corbett National Park", "Bandhavgarh National Park"],
    conservationStatus: "Endangered"
  },
  {
    name: "Indian Elephant",
    scientificName: "Elephas maximus indicus",
    imageUrl: "https://images.unsplash.com/photo-1581852017103-68ac65544513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "The Indian elephant is one of three recognized subspecies of the Asian elephant. Native to mainland Asia, they are listed as endangered and face threats from habitat loss, fragmentation, and poaching.",
    habitat: "Grasslands, tropical forests, scrublands, and deciduous forests",
    foundIn: ["Nilgiri Biosphere Reserve", "Eastern Himalayas", "Western Ghats"],
    conservationStatus: "Endangered"
  },
  {
    name: "Indian Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    imageUrl: "https://images.unsplash.com/photo-1584452621919-414b4b4a4190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "The Indian rhinoceros, also called the greater one-horned rhinoceros, is native to the Indian subcontinent. The species was once widespread, but has been reduced to small protected areas in northeastern India and Nepal.",
    habitat: "Alluvial flood plains and areas containing tall grasslands",
    foundIn: ["Kaziranga National Park", "Manas National Park", "Dudhwa Tiger Reserve"],
    conservationStatus: "Vulnerable"
  }
];

// Wildlife species list
export const wildlifeSpecies = [
  {
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1615824996195-f780bba7f9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    shortDescription: "India's national animal and one of the most iconic big cats, known for its strength and beauty.",
    conservationStatus: "Endangered"
  },
  {
    name: "Indian Elephant",
    scientificName: "Elephas maximus indicus",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1581852017103-68ac65544513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "A keystone species that plays a crucial role in maintaining the biodiversity of the ecosystem.",
    conservationStatus: "Endangered"
  },
  {
    name: "Indian Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1584452621919-414b4b4a4190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "Distinguished by its single horn and skin that forms armor-like folds, giving it a plated appearance.",
    conservationStatus: "Vulnerable"
  },
  {
    name: "Indian Leopard",
    scientificName: "Panthera pardus fusca",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1590767749894-b09a0ca47534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80",
    shortDescription: "Known for its adaptability and strength, the Indian leopard can be found across various habitats.",
    conservationStatus: "Vulnerable"
  },
  {
    name: "Asiatic Lion",
    scientificName: "Panthera leo persica",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "The only place in the world where Asiatic lions remain in the wild is in the Gir Forest of Gujarat.",
    conservationStatus: "Endangered"
  },
  {
    name: "Indian Peacock",
    scientificName: "Pavo cristatus",
    category: "Bird",
    imageUrl: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "India's national bird known for its iridescent plumage and spectacular courtship display.",
    conservationStatus: "Least Concern"
  },
  {
    name: "Great Indian Bustard",
    scientificName: "Ardeotis nigriceps",
    category: "Bird",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Great_Indian_Bustard_male.jpg/1200px-Great_Indian_Bustard_male.jpg",
    shortDescription: "One of the heaviest flying birds, found in dry grasslands and scrublands.",
    conservationStatus: "Endangered"
  },
  {
    name: "King Cobra",
    scientificName: "Ophiophagus hannah",
    category: "Reptile",
    imageUrl: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shortDescription: "The world's longest venomous snake, capable of delivering enough neurotoxin to kill an elephant.",
    conservationStatus: "Vulnerable"
  }
];

// Conservation programs
export const conservationPrograms = [
  {
    name: "Project Tiger",
    established: 1973,
    iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Project_Tiger_Logo.svg/1200px-Project_Tiger_Logo.svg.png",
    description: "Project Tiger is a tiger conservation program launched in 1973 by the Government of India. It has been one of the most successful conservation initiatives and has helped increase the tiger population significantly.",
    achievements: [
      "Increased tiger population from 1,827 in 1973 to over 3,000 in 2022",
      "Created a network of 53 tiger reserves across India",
      "Developed innovative monitoring techniques including camera traps"
    ]
  },
  {
    name: "Project Elephant",
    established: 1992,
    iconUrl: "https://www.wwfindia.org/about_wwf/critical_regions/satpuda_maikal_landscape/images/elephant.jpg",
    description: "Project Elephant was launched to assist states having free-ranging populations of wild elephants to ensure the long-term survival of identified viable elephant populations.",
    achievements: [
      "Established elephant corridors to reduce human-elephant conflict",
      "Created 32 elephant reserves across 10 elephant states",
      "Developed strategies for mitigating human-elephant conflict"
    ]
  },
  {
    name: "Indian Rhino Vision 2020",
    established: 2005,
    iconUrl: "https://www.worldwildlife.org/species/greater-one-horned-rhino",
    description: "A collaborative effort among various organizations to increase the rhino population in Assam to 3,000 by establishing populations in new areas.",
    achievements: [
      "Successfully translocated rhinos to Manas National Park",
      "Increased security and anti-poaching measures",
      "Raised awareness about rhino conservation"
    ]
  }
];
