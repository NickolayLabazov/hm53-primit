export default function descript(obj) {
  const smileBowman = (obj.type === 'Bowman') && String.fromCodePoint(0x1F620);
  const smileSwordsman = (obj.type === 'Swordsman') && String.fromCodePoint(0x1F621);
  const smileMagician = (obj.type === 'Magician') && String.fromCodePoint(0x1F9D0);
  const smileDaemon = (obj.type === 'Daemon') && String.fromCodePoint(0x1F47F);
  const smileUndead = (obj.type === 'Undead') && String.fromCodePoint(0x1F480);
  const smileZombie = (obj.type === 'Zombie') && String.fromCodePoint(0x1F9DF);
  const typeSmile = smileBowman || smileSwordsman || smileMagician || smileDaemon || smileUndead || smileZombie;
  const smileAtack = String.fromCodePoint(0x2694);
  const smileDefence = String.fromCodePoint(0x1F6E1);
  const smileHealth = String.fromCodePoint(0x2764);
  const result = `${typeSmile}${obj.name[0]}(${obj.level}) ${smileAtack} ${obj.attack} ${smileDefence} ${obj.defence} ${smileHealth} ${obj.health}`;
  return result;
}
