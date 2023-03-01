class Superclass {
  public isSuper: boolean
  constructor() {
    this.isSuper = true;
  }
  public sayHello() {
    console.log("Olá Mundo");
  }
}

class Subclass extends Superclass {
  public isSuper: boolean
  constructor() {
    super()
    this.isSuper = false;
  }
}

function myFunc(obj: Superclass) {
  obj.sayHello()
  console.log(obj.isSuper ? 'Super' : 'Sub')
}

const superClass = new Superclass();
const subClass = new Subclass();

myFunc(superClass);
myFunc(subClass);