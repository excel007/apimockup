
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  const cars = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    year: faker.date.past({ years: 30 }).getFullYear(),
    color: faker.vehicle.color(),
    price: faker.finance.amount({min:200000, max:5000000, dec:0}),
    fuelType: faker.vehicle.fuel(),
    owner: faker.person.fullName(),
    image: faker.image.url()
  }));

  return NextResponse.json(cars);
}
