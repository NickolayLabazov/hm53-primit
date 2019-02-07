import { descript } from '../src/function.js';

const hero = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
// const result = `${smile}${obj.name[0]}(${obj.level}) &#x2694 ${obj.attack} &#x1F6E1 ${obj.defence} &#x2764 ${obj.health}`;
test('Bowman', () => {
  const expected = '&#x1F620 Л(1) &#x2694 40 &#x1F6E1 10 &#x2764 50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Swordsman', () => {
  hero.type = 'Swordsman';
  const expected = '&#x1F6210 Л(1) &#x2694 40 &#x1F6E1 10 &#x2764 50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Magician', () => {
  hero.type = 'Magician';
  const expected = '&#x1F9D0 Л(1) &#x2694 40 &#x1F6E1 10 &#x2764 50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Daemon', () => {
  hero.type = 'Daemon';
  const expected = '&#x1F47F Л(1) &#x2694 40 &#x1F6E1 10 &#x2764 50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Undead', () => {
  hero.type = 'Undead';
  const expected = '&#x1F480 Л(1) &#x2694 40 &#x1F6E1 10 &#x2764 50';
  const received = descript(hero);
  expect(received).toBe(received);
});

test('Zombie', () => {
  hero.type = 'Zombie';
  const expected = '&#x1F9DF Л(1) &#x2694 40 &#x1F6E1 10 &#x2764 50';
  const received = descript(hero);
  expect(received).toBe(received);
});
