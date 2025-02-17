//ข้อมูลพนักงาน
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  const employees = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    position: faker.person.jobTitle(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    salary: faker.finance.amount({ min: 5000, max: 99999, dec: 0 }),
    age: faker.number.int({ min: 22, max: 60 }),
    profileImage: faker.image.avatar(),
    information:faker.lorem.paragraphs(),
    startDate: faker.date.past({ years: 10 }).toISOString()
  }));

  return NextResponse.json(employees);
}
