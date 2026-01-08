export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  image: string;
  puppyName: string;
  text: string;
}

export interface TestimonialPreview {
  initials: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  timeAgo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Thando M.',
    location: 'Johannesburg',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1605638868237-0660a05a135b?w=200&h=200&fit=crop',
    puppyName: 'Milo',
    text: "We got our little Milo from Montessa Kennel and he has been the greatest addition to our family! The team was so helpful throughout the entire process and even checked in on us weeks after bringing him home."
  },
  {
    name: 'Pieter & Annika',
    location: 'Cape Town',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1596116082596-7a0da930b9aa?w=200&h=200&fit=crop',
    puppyName: 'Buddy',
    text: 'Buddy has brought so much joy into our lives! He came to us healthy, happy, and already started on potty training. The communication was excellent and we felt supported every step of the way.'
  },
  {
    name: 'Lerato N.',
    location: 'Pretoria',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1635703705694-0da1f3b2f724?w=200&h=200&fit=crop',
    puppyName: 'Sophie',
    text: "This was our first time getting a puppy and Montessa Kennel made it such a wonderful experience. Sophie is everything we dreamed of and more. Highly recommend to anyone looking for their perfect puppy!"
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'TM',
    name: 'Thabo Molefe',
    rating: 5,
    text: "We absolutely love our little Bella from Montessa Kennel! She came to us healthy, well-socialized, and full of personality. The team was so helpful throughout the entire process.",
    location: 'Johannesburg',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'PV',
    name: 'Pieter van der Berg',
    rating: 5,
    text: "Best decision we ever made! Our puppy Duke has brought so much joy to our family. Montessa Kennel provided excellent care and the health guarantee gave us peace of mind.",
    location: 'Durban',
    timeAgo: '1 month ago'
  },
  {
    initials: 'NZ',
    name: 'Nomvula Zulu',
    rating: 5,
    text: 'Cooper is the sweetest puppy! He was already potty trained and knew basic commands. You can tell these puppies are raised with love and attention.',
    location: 'Cape Town',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'JB',
    name: 'Johan Botha',
    rating: 5,
    text: "From the first phone call to bringing Rosie home, the experience was fantastic. They answered all our questions and even followed up to check on her. Highly recommend!",
    location: 'Pretoria',
    timeAgo: '1 month ago'
  },
  {
    initials: 'LN',
    name: 'Lindiwe Nkosi',
    rating: 5,
    text: "Our puppy Teddy is everything we hoped for and more. Beautiful coat, wonderful temperament, and so smart! Montessa Kennel truly cares about their puppies.",
    location: 'Bloemfontein',
    timeAgo: '2 months ago'
  },
  {
    initials: 'WP',
    name: 'Willem Pretorius',
    rating: 5,
    text: 'We drove 4 hours to pick up our puppy and it was worth every kilometer! The facility was clean, the puppies were happy, and our little Oscar has been the perfect addition to our home.',
    location: 'Port Elizabeth',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'SM',
    name: 'Sibongile Mthembu',
    rating: 5,
    text: "This was our second puppy from Montessa Kennel and the experience was just as wonderful as the first time. Daisy and her sister are best friends now!",
    location: 'East London',
    timeAgo: '3 months ago'
  },
  {
    initials: 'HS',
    name: 'Hendrik Steyn',
    rating: 5,
    text: 'The puppy starter kit they provided was so helpful for first-time puppy owners like us. Ginger settled into our home right away. Thank you for our beautiful girl!',
    location: 'Nelspruit',
    timeAgo: '2 months ago'
  },
  {
    initials: 'ZD',
    name: 'Zodwa Dlamini',
    rating: 5,
    text: "I was nervous about getting a puppy during the holidays, but Montessa Kennel made it magical. Our Luna is healthy, happy, and the star of our family!",
    location: 'Polokwane',
    timeAgo: '1 month ago'
  },
  {
    initials: 'MJ',
    name: 'Marelize Jansen',
    rating: 5,
    text: "Montessa Kennel exceeded all our expectations. Our puppy Rex is so well-behaved and loving. The whole family is in love with him!",
    location: 'Stellenbosch',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'BM',
    name: 'Bongani Mahlangu',
    rating: 5,
    text: "We searched for months for the right breeder and Montessa Kennel was the perfect choice. Our puppy Max is healthy, playful, and has the best temperament.",
    location: 'Sandton',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'AC',
    name: 'Annemarie Coetzee',
    rating: 5,
    text: "From the moment we contacted them, we knew we were in good hands. Our little Coco has brought so much happiness to our home. Highly professional service!",
    location: 'Centurion',
    timeAgo: '1 month ago'
  },
  {
    initials: 'TK',
    name: 'Tshepiso Khumalo',
    rating: 5,
    text: "The puppies are raised with so much love and care. Our Simba was already socialized and comfortable around people from day one. Amazing experience!",
    location: 'Soweto',
    timeAgo: '5 weeks ago'
  },
  {
    initials: 'FD',
    name: 'Francois du Plessis',
    rating: 5,
    text: "We've had our puppy Bruno for 3 months now and he's the best! Montessa Kennel provided all the support we needed. Will definitely recommend to friends.",
    location: 'Paarl',
    timeAgo: '3 months ago'
  },
  {
    initials: 'PN',
    name: 'Palesa Ndaba',
    rating: 5,
    text: "Getting our puppy Zara from Montessa Kennel was the highlight of our year. She's perfectly healthy and has the sweetest personality. Thank you!",
    location: 'Midrand',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'GV',
    name: 'Gerhard Venter',
    rating: 5,
    text: "Excellent breeder! Our puppy came with all vaccinations up to date and proper documentation. The follow-up care has been outstanding.",
    location: 'Krugersdorp',
    timeAgo: '2 months ago'
  },
  {
    initials: 'MN',
    name: 'Mpho Nkomo',
    rating: 5,
    text: "We couldn't be happier with our decision to get our puppy from Montessa Kennel. Rocky has settled in perfectly and loves playing with our kids.",
    location: 'Roodepoort',
    timeAgo: '1 month ago'
  },
  {
    initials: 'EL',
    name: 'Elana Lombard',
    rating: 5,
    text: "What a wonderful experience! The team at Montessa Kennel genuinely cares about matching the right puppy with the right family. Our Bella is proof of that.",
    location: 'Benoni',
    timeAgo: '4 weeks ago'
  },
  {
    initials: 'SK',
    name: 'Siyabonga Kubheka',
    rating: 5,
    text: "Professional, caring, and trustworthy. That's how I'd describe Montessa Kennel. Our puppy Ace is everything we wanted and more!",
    location: 'Umhlanga',
    timeAgo: '2 weeks ago'
  }
];
