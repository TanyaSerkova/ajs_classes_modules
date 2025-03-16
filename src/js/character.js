export default class Character {
    constructor(name, type, attack, defence){
        if ( name.length >= 2 && name.length <= 10 ) {
            this.name = name
        } else {
            throw new Error('Ошибка')
        }
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]
        if ( types.includes(type) ) {
            this.type = type
        } else {
            throw new Error('Ошибка') 
        }
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp(){
        if (this.health > 0){
            this.level++;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;  
        } else {
            throw new Error('Нельзя повысить уровень умершего')
        }
    }

    damage(points){
        if ( this.health >= 0 ) {
            this.health -= points * ( 1 - this.defence / 100 );
        } else { throw new Error('Ошибка') }
    }
}
    