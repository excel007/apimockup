
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  // Generate 100 tech company data entries
  const techCompanies = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name() + ' ' + faker.helpers.arrayElement(['Tech', 'Software', 'Systems', 'Digital', 'Labs', 'Solutions', 'AI', 'Cloud']),
    industry: faker.helpers.arrayElement([
      'Software Development',
      'Cloud Computing',
      'Artificial Intelligence',
      'Cybersecurity',
      'E-commerce',
      'FinTech',
      'Health Tech',
      'EdTech',
      'IoT',
      'DevOps',
      'Data Analytics',
      'Mobile Apps'
    ]),
    foundedYear: faker.date.between({ from: '1990-01-01', to: '2024-01-01' }).getFullYear(),
    ceo: faker.person.fullName(),
    founder: faker.person.fullName(),
    headquarters: {
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country()
    },
    employees: faker.number.int({ min: 10, max: 50000 }),
    revenue: faker.finance.amount({ min: 1000000, max: 10000000000, dec: 0 }),
    stockTicker: faker.helpers.arrayElement([
      faker.string.alpha({ length: { min: 3, max: 4 }, casing: 'upper' }),
      null
    ]),
    website: faker.internet.url(),
    email: faker.internet.email(),
    description: faker.company.catchPhrase() + '. ' + faker.lorem.sentence(),
    products: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
      faker.commerce.productName()
    ),
    technologies: Array.from({ length: faker.number.int({ min: 3, max: 8 }) }, () =>
      faker.helpers.arrayElement([
        'React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'Google Cloud',
        'Docker', 'Kubernetes', 'TensorFlow', 'MongoDB', 'PostgreSQL',
        'TypeScript', 'Go', 'Rust', 'GraphQL', 'Redis', 'Kafka'
      ])
    ),
    companySize: faker.helpers.arrayElement(['Startup', 'SMB', 'Mid-Market', 'Enterprise']),
    funding: faker.helpers.arrayElement(['Bootstrapped', 'Series A', 'Series B', 'Series C', 'Public', 'Acquired']),
    rating: faker.number.float({ min: 3.0, max: 5.0, fractionDigits: 1 }),
    image: faker.image.urlLoremFlickr({ category: 'business' })
  }));

  return NextResponse.json(techCompanies);
}
