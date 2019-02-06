export const descript = (obj) => {
  let smile = 0;
  switch (obj.type) {
    case 'Bowman':
      smile = '\u1F620';
      break;

    case 'Swordsman':
      smile = '\u1F6210';
      break;

    case 'Magician':
      smile = '\u1F9D0';
      break;

    case 'Daemon':
      smile = '\u1F47F';
      break;

    case 'Undead':
      smile = '\u1F480';
      break;

    case 'Zombie':
      smile = '\u1F9DF';
      break;
  }
  const result = `${smile}${obj.name[0]}(${obj.level})${'\u2694'}${obj.attack}${'\u1F6E1e'}${obj.defence}${'\u2764'}${obj.health}`;
  return result;
};
