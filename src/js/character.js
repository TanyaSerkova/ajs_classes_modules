export default class Character {
    constructor(name, type){
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Deamon',
            'Undead',
            'Zombie',
        ];
        if ( name.length < 2 || name.length > 10 || types.includes(type) == false ) {
            throw new Error('Ошибка')
        } 
        this.name = name;
        this.type = type
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }

    levelUp(){
        if (this.health === 0){
            throw new Error('Ошибка')
        }
        this.level++;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;  
    }

    damage(points){
        if ( this.health < 0 ) {
            throw new Error('Ошибка')
        } else {
            this.health -= points * ( 1 - this.defence / 100 );
         }
    }
}
    