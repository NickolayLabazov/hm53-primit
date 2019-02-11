export default function descript(obj) {
  const result = `${(obj.type === 'Bowman') && String.fromCodePoint(0x1F620) || (obj.type === 'Swordsman') && String.fromCodePoint(0x1F621) || (obj.type === 'Magician') && String.fromCodePoint(0x1F9D0) || (obj.type === 'Daemon') && String.fromCodePoint(0x1F47F) || (obj.type === 'Undead') && String.fromCodePoint(0x1F480) || (obj.type === 'Zombie') && String.fromCodePoint(0x1F9DF)}${obj.name[0]}(${obj.level}) ${String.fromCodePoint(0x2694)} ${obj.attack} ${String.fromCodePoint(0x1F6E1)} ${obj.defence} ${String.fromCodePoint(0x2764)} ${obj.health}`;
  return result;
}
