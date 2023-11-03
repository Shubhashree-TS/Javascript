//class tea 
class eveningSnack{
    constructor(){
        this.beverages = "Tea" ;
        this.sweet = "less";
    }
    bake(){
        console.log(`Our evening snack is ${this.beverages} with ${this.sweet} sugar`);
    }

}
const ourEve = new eveningSnack();
ourEve.bake();


//class by passing the values
class food {
    constructor(breakfast, lunch, dinner){
        this.morning = breakfast;
        this.afternoon = lunch;
        this.night = dinner;
        this.mainIngredients = [];
    }

    getMainIngredients(){
        return this.mainIngredients;
    }
    setIngredients(ingredients){
        this.mainIngredients.push(ingredients);
    }
    //getter and setter
    get dinner(){
    return this.night;
    }
    set dinner(dinner){
        this.night = dinner;
    }
    //another method for changing the values
    getMorning(){
        return this.morning;
    }
    setMorning(breakfast){
        this.morning = breakfast;
    }

    wholeDayMenu(){
        console.log(`I had ${this.morning} at morning, ${this.afternoon} at afternoon and ${this.night} at night`);
    }
}
const shubhasFood = new food("Dosa","Roti-Curry","Pulav");
shubhasFood.wholeDayMenu();
//changing the values
shubhasFood.dinner = "Dal-rice";
shubhasFood.wholeDayMenu();
//changing the values
shubhasFood.setMorning("Rava idli");
console.log(shubhasFood.getMorning());
shubhasFood.wholeDayMenu();
//adding elements to an array
shubhasFood.setIngredients("vegetables");
shubhasFood.setIngredients("rice");
shubhasFood.setIngredients("Dal");
console.log(shubhasFood.getMainIngredients());

//////////////////////////
class Pizza {
    constructor(pizzaSize,){
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize,slices){
        super(pizzaSize);
        this.type = "Bitter";
        this.slices = slices;
    }
    slice(){
        console.log(`our ${pizzaSize} size ${this.type} Pizza is having ${slices} slices`)
    }
}

const mySpecial = new SpecialtyPizza("medium",10) ;
console.log(mySpecial.slice());
//////////////////////////////////////
