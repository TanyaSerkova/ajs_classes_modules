import Character from "../character";

test('should check the class Character no name < 2', () => {
  expect(() => new Character('a', 'Zombie')).toThrow(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  expect(() => new Character('Player', 'Man')).toThrow(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  const character = new Character('Player', 'Zombie');
  expect(character.name).toBe('Player');
});

test('should check the class Character no name', () => {
  const character = new Character('Player', 'Zombie');
  expect(character.type).toBe('Zombie');
});

test('should check the class Character no name', () => {
  const character = new Character('Player', 'Magician');
  const result = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('should levelUp the defence', () => {
  const character = new Character('Player', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('should points damage the health', () => {
  const character = new Character('Player', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('should points damage the health', () => {
  const character = new Character('Player', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
  character.damage(1000)
  expect(function() {
    character.damage()
  }).toThrow(new Error("Ошибка"));
});

test('should levelUp the defence', () => {
  const character = new Character('Player', 'Magician');
  character.health = 0;
  expect(function() {
    character.levelUp()
  }).toThrow(new Error("Ошибка"));
});
