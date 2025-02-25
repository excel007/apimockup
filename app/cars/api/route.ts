
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  const airlines = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    airline: faker.company.name(),
    flightNumber: faker.string.alphanumeric(6).toUpperCase(),
    departure: faker.location.city(),
    destination: faker.location.city(),
    departureTime: faker.date.future().toISOString(),
    arrivalTime: faker.date.future({ years: 1 }).toISOString(),
    aircraft: faker.vehicle.vehicle(),
    ticketPrice: faker.finance.amount({ min: 100, max: 5000, dec: 0 }),

  }));

  return NextResponse.json(airlines);
}
