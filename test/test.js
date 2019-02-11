import descript from '../src/function';

const hero = {
  name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
};

test('Bowman', () => {
  hero.type = 'Bowman';
  const expected = '😠Л(1) ⚔ 40 🛡 10 ❤ 50';
  const received = descript(hero);
  expect(received).toBe(expected);
});

test('Swordsman', () => {
  hero.type = 'Swordsman';
  const expected = '😡Л(1) ⚔ 40 🛡 10 ❤ 50';
  const received = descript(hero);
  expect(received).toBe(expected);
});

test('Magician', () => {
  hero.type = 'Magician';
  const expected = '🧐Л(1) ⚔ 40 🛡 10 ❤ 50';
  const received = descript(hero);
  expect(received).toBe(expected);
});

test('Daemon', () => {
  hero.type = 'Daemon';
  const expected = '👿Л(1) ⚔ 40 🛡 10 ❤ 50';
  const received = descript(hero);
  expect(received).toBe(expected);
});

test('Undead', () => {
  hero.type = 'Undead';
  const expected = '💀Л(1) ⚔ 40 🛡 10 ❤ 50';
  const received = descript(hero);
  expect(received).toBe(expected);
});

test('Zombie', () => {
  hero.type = 'Zombie';
  const expected = '🧟Л(1) ⚔ 40 🛡 10 ❤ 50';
  const received = descript(hero);
  expect(received).toBe(expected);
});
