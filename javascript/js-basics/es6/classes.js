//classes

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Dog extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Bark bark I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const rex = new Dog('Rex', 'dog', 'black');
rex.sound();