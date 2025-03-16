import Character from "../Bowman";

test('should check the class Bowman', () => {
  const character = new Character('Player', 'Bowman');
  const result = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(result);
})