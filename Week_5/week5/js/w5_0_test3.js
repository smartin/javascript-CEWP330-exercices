const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting() {
    console.log(`Hello said ${this.name} the ${this.breed}.`);
  }
};

const cat2 = {
  name: 'Garfield',
  breed: 'Calico',
  color: 'orange',
  greeting() {
    console.log(`Hello said ${this.name} the ${this.breed}.`);
  }
};
