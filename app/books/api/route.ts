//ข้อมูลพนักงาน
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
  const books = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    shortdesciption:faker.lorem.paragraphs(),
    publisher: faker.company.name(),
    year: faker.date.past({ years: 50 }).getFullYear(),
    genre: faker.music.genre(),
    pages: faker.number.int({ min: 100, max: 1000 }),
    language: faker.location.country(),
    price: faker.finance.amount({min:50, max:2000, dec:0}),
    coverImage: faker.image.avatarGitHub()
  }));

  return NextResponse.json(books);
}
