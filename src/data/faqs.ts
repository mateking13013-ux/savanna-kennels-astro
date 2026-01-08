export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Is a puppy a good breed?',
    answer: 'puppys are affectionate and playful dogs that require training and care.'
  },
  {
    question: 'Is a puppy Puppy good for beginners?',
    answer: 'Yes puppys are great dogs for first time dog owners. They are affectionate and easy to get along with.'
  },
  {
    question: 'Do puppys make good family pets?',
    answer: 'Not only are puppys amazing companions but they are also great family pets. They tend to get along with other pets and good with kids.'
  },
  {
    question: 'Do our puppies smell bad?',
    answer: 'With proper grooming and care, your puppy will not have a foul smell. You should consider taking your dog to a professional groomer from time to time. Also, prioritize using the best products like dog shampoos.'
  },
  {
    question: 'What not to do with puppys?',
    answer: 'puppys should not be made to jump very high. They can easily damage their backs due to their skeletal structure.'
  }
];

export interface Expense {
  item: string;
  cost: string;
}

export const expenses: Expense[] = [
  { item: 'Food', cost: '$50 – $100' },
  { item: 'Treats', cost: '$10 – $20' },
  { item: 'Veterinary Care', cost: '$20 – $50' },
  { item: 'Pet Insurance', cost: '$30 – $60' },
  { item: 'Grooming', cost: '$30 – $60' },
  { item: 'Training Classes', cost: '$50 – $100' },
  { item: 'Toys', cost: '$10 – $20' },
  { item: 'Supplies (bed, leash, etc.)', cost: '$10 – $15' },
  { item: 'Miscellaneous', cost: '$10 – $20' }
];

export interface ExpenseNote {
  label: string;
  text: string;
}

export const expenseNotes: ExpenseNote[] = [
  { label: 'Food', text: 'The cost can vary based on the brand and dietary needs.' },
  { label: 'Veterinary Care', text: 'This includes routine check-ups, vaccinations, and preventative care.' },
  { label: 'Pet Insurance', text: 'Costs can vary based on coverage and provider.' },
  { label: 'Training Classes', text: 'Group classes may be less expensive than private sessions.' },
  { label: 'Grooming', text: 'Costs depend on coat type and grooming frequency.' }
];
