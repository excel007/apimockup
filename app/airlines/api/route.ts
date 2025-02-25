
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  // สร้างข้อมูลสายพันธ์สุนัข 100 ชุด
  const dogs = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    name: faker.animal.dog(),
    species: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 20 }),
    color: faker.color.human(),
    weight: faker.number.float({ min: 1, max: 100, fractionDigits: 1 }),
    habitat: faker.location.city(),
    diet: faker.lorem.word(),
    owner: faker.person.fullName(),
    about:faker.lorem.paragraphs(),
    image: faker.image.urlLoremFlickr({ category: 'animals' })
  }));

  return NextResponse.json(dogs);
}
