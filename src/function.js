export const descript = (obj) => {
  let smile = 0;
  switch (obj.type) {
    case 'Bowman':
      smile = '&#x1F620';
      break;

    case 'Swordsman':
      smile = '&#x1F621';
      break;

    case 'Magician':
      smile = '&#x1F9D0';
      break;

    case 'Daemon':
      smile = '&#x1F47F';
      break;

    case 'Undead':
      smile = '&#x1F480';
      break;

    case 'Zombie':
      smile = '&#x1F9DF';
      break;
  }
  const result = `${smile}${obj.name[0]}(${obj.level}) &#x2694 ${obj.attack} &#x1F6E1 ${obj.defence} &#x2764 ${obj.health}`;
  return result;
};
