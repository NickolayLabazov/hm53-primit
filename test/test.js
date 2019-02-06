import { descript } from '../src/function.js';

const hero = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Bowman', () => {
  const expected = '\'\u1F620\'Л(1)\'\u2694\'40\'\u1F6E1e\'10\'\u2764\'50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Swordsman', () => {
  hero.type = 'Swordsman';
  const expected = '\'\u1F6210\'Л(1)\'\u2694\'40\'\u1F6E1e\'10\'\u2764\'50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Magician', () => {
  hero.type = 'Magician';
  const expected = '\'\u1F9D0\'Л(1)\'\u2694\'40\'\u1F6E1e\'10\'\u2764\'50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Daemon', () => {
  hero.type = 'Daemon';
  const expected = '\'\u1F47F\'Л(1)\'\u2694\'40\'\u1F6E1e\'10\'\u2764\'50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Undead', () => {
  hero.type = 'Undead';
  const expected = '\'\u1F480\'Л(1)\'\u2694\'40\'\u1F6E1e\'10\'\u2764\'50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Zombie', () => {
  hero.type = 'Zombie';
  const expected = '\'\u1F9DF\'Л(1)\'\u2694\'40\'\u1F6E1e\'10\'\u2764\'50';
  const received = descript(hero);
  expect(received).toBe(received);
});
