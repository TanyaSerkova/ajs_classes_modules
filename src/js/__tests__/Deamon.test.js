import Character from "../Deamon";

test('should check the class Deamon', () => {
  const character = new Character('Player', 'Deamon');
  const result = {
    name: 'Player',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(result);
})