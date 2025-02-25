
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  // สร้างข้อมูลสายพันธ์สุนัข 100 ชุด
  const restaurants = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number(),
    cuisine: faker.word.noun(),
    rating: faker.finance.amount({ min: 1, max: 5, dec: 0 }),
    image: faker.image.avatar(),
  }));

  return NextResponse.json(restaurants);
}
