// WooCommerce API utility for fetching products and categories

const WC_API_URL = 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-json/wc/v3';
const CONSUMER_KEY = 'ck_9f59526df32b4cf788abcbee7770287c3fbf58af';
const CONSUMER_SECRET = 'cs_b15f89346664ba2ae468570db3792c169e91cda0';

function getAuthParams(): string {
  return `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: string | null;
}

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  images: { src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
}

export interface Breed {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: string;
}

export interface Puppy {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  breed: string;
  breedSlug: string;
  description: string;
}

// Generate a unique puppy description based on name and breed
function generatePuppyDescription(name: string, breed: string): string {
  // Extract just the name without gender
  const puppyName = name.replace(/\s*\((Male|Female)\)\s*/i, '').trim();
  const isMale = name.toLowerCase().includes('male') && !name.toLowerCase().includes('female');
  const isFemale = name.toLowerCase().includes('female');

  const pronoun = isFemale ? 'she' : isMale ? 'he' : 'they';
  const possessive = isFemale ? 'her' : isMale ? 'his' : 'their';
  const objectPronoun = isFemale ? 'her' : isMale ? 'him' : 'them';
  const genderWord = isFemale ? 'girl' : isMale ? 'boy' : 'puppy';
  const isAre = isFemale || isMale ? 'is' : 'are';

  // Clean breed name
  const cleanBreed = breed.replace(' Puppies', '').replace(' Dog', '').trim();

  // Create a hash from name for consistent but varied descriptions
  const nameHash = puppyName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const introductions = [
    `Meet ${puppyName}, an absolutely adorable ${cleanBreed} ${genderWord} who ${isAre} ready to bring endless love and joy into your home.`,
    `Say hello to ${puppyName}, a beautiful ${cleanBreed} ${genderWord} with a wonderful personality that will capture your heart from the moment you meet ${objectPronoun}.`,
    `Introducing ${puppyName}, a charming ${cleanBreed} ${genderWord} who ${isAre} looking for ${possessive} forever family to share a lifetime of happiness with.`,
    `${puppyName} is a gorgeous ${cleanBreed} ${genderWord} with an irresistible personality and a heart full of love just waiting to be shared with you.`,
    `Welcome ${puppyName}, a delightful ${cleanBreed} ${genderWord} who ${isAre} eager to become your new best friend and loyal companion for life.`,
  ];

  const personalities = [
    `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} has a playful spirit combined with a gentle, affectionate nature that makes ${objectPronoun} perfect for families of all sizes.`,
    `With ${possessive} sweet temperament and curious nature, ${puppyName} loves exploring new surroundings and making friends wherever ${pronoun} go${isFemale || isMale ? 'es' : ''}.`,
    `${puppyName} ${isAre} incredibly smart and eager to please, making training a breeze while ${possessive} loving personality shines through in everything ${pronoun} do${isFemale || isMale ? 'es' : ''}.`,
    `This little sweetheart has a calm yet playful demeanor, equally happy cuddling on the couch or enjoying an adventure outdoors with ${possessive} family.`,
    `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${isAre} well-socialized, confident, and has the most endearing way of showing ${possessive} affection to everyone ${pronoun} meet${isFemale || isMale ? 's' : ''}.`,
  ];

  const closings = [
    `${puppyName} comes with all vaccinations, health guarantee, and a starter kit to help ${objectPronoun} settle into ${possessive} new home seamlessly.`,
    `Raised with love and care, ${puppyName} ${isAre} vet-checked, healthy, and ready to start ${possessive} new chapter with a loving family like yours.`,
    `Don't miss the chance to welcome ${puppyName} into your life – ${pronoun} ${isAre} ready to fill your days with unconditional love and unforgettable moments.`,
    `${puppyName} ${isAre} waiting to meet you and begin a beautiful journey together. Contact us today to make ${objectPronoun} part of your family.`,
    `This precious ${genderWord} ${isAre} ready to travel to ${possessive} forever home and can't wait to shower you with puppy kisses and endless loyalty.`,
  ];

  const introIndex = nameHash % introductions.length;
  const personalityIndex = (nameHash + 3) % personalities.length;
  const closingIndex = (nameHash + 7) % closings.length;

  return `${introductions[introIndex]} ${personalities[personalityIndex]} ${closings[closingIndex]}`;
}

// Fetch all categories (breeds) with products
export async function getBreeds(): Promise<Breed[]> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products/categories?${getAuthParams()}&per_page=100`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const categories: any[] = await response.json();

    // Filter only categories with products and valid images
    return categories
      .filter((cat) => cat.count > 0 && cat.image?.src)
      .map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.count,
        image: cat.image.src,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return [];
  }
}

// Fetch a single category by slug
export async function getBreedBySlug(slug: string): Promise<Breed | null> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products/categories?${getAuthParams()}&slug=${slug}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch category: ${response.status}`);
    }

    const categories: any[] = await response.json();

    if (categories.length === 0) {
      return null;
    }

    const cat = categories[0];
    return {
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      count: cat.count,
      image: cat.image?.src || '',
    };
  } catch (error) {
    console.error('Error fetching breed:', error);
    return null;
  }
}

// Fetch products by category
export async function getPuppiesByBreed(categoryId: number): Promise<Puppy[]> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products?${getAuthParams()}&category=${categoryId}&per_page=100&status=publish`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products: any[] = await response.json();

    return products.map((product) => {
      const breed = product.categories?.[0]?.name || '';
      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.images?.[0]?.src || '',
        imageAlt: product.images?.[0]?.alt || product.name,
        breed: breed,
        breedSlug: product.categories?.[0]?.slug || '',
        description: generatePuppyDescription(product.name, breed),
      };
    });
  } catch (error) {
    console.error('Error fetching puppies:', error);
    return [];
  }
}

// Get all category slugs for static path generation
export async function getAllBreedSlugs(): Promise<string[]> {
  const breeds = await getBreeds();
  return breeds.map((breed) => breed.slug);
}

// Get a random puppy image from a breed for the breed card
export async function getRandomPuppyImageForBreed(categoryId: number): Promise<string | null> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products?${getAuthParams()}&category=${categoryId}&per_page=10&status=publish`
    );

    if (!response.ok) {
      return null;
    }

    const products: any[] = await response.json();

    if (products.length === 0) {
      return null;
    }

    // Get a random product
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    return randomProduct.images?.[0]?.src || null;
  } catch (error) {
    return null;
  }
}

// Generate SEO-friendly content for each breed
export function getBreedSeoContent(breedName: string): {
  title: string;
  description: string;
  heroSubtitle: string;
  holidayMessage: string;
} {
  const cleanName = breedName.replace(' Puppies', '').replace(' Dog', '');

  return {
    title: `${breedName} For Sale | Find Your Perfect ${cleanName} Companion`,
    description: `Discover our beautiful ${breedName} available for adoption. Health guaranteed, vet checked, and ready for their forever homes. Browse our selection of adorable ${cleanName} puppies today.`,
    heroSubtitle: `Find your perfect ${cleanName} companion from our carefully raised, health-guaranteed puppies`,
    holidayMessage: `Bring home a loving ${cleanName} this season! We prioritize fast, safe delivery within 24 hours. Our ${breedName} come with complete health guarantees, up-to-date vaccinations, and lifetime support. Whether you choose pickup or delivery across South Africa, your new family member will arrive healthy and happy. Reserve your ${cleanName} puppy today and experience the joy of a well-bred companion.`,
  };
}
