
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  // สร้างข้อมูลสายพันธ์สุนัข 100 ชุด
  const restaurants = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    brand: faker.company.name(),
    model: faker.commerce.productName(),
    processor: faker.commerce.productAdjective() + ' ' + faker.hacker.noun(),
    ram: faker.number.int({ min: 4, max: 64 }) + 'GB',
    storage: faker.number.int({ min: 128, max: 2000 }) + 'GB SSD',
    gpu: faker.commerce.productAdjective() + ' ' + faker.hacker ,
    price: faker.finance.amount({ min: 100, max: 5000, dec: 0 }),
    image: faker.image.avatar(),
  }));

  return NextResponse.json(restaurants);
}
