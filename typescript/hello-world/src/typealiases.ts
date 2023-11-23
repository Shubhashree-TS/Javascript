




//TO BE CORRECTED






type Employee = {
    readonly id : number;
    name:string;
    retire: (date: Date) => void;
}

let employEE : Employee = {
    id:1,
    name:"sagar",
    retire:(date:Date) => console.log(date)};



