





//TO BE CORRECTED



let employee : {
    readonly id : number,
    name:string,
    retire: (date: Date) => void
}={
    id:1,
    name:"Bhushan",
    retire: (date:Date) => {console.log(date)}
};

/*console.log(`${employee.name} with id ${employee.id} is retiring on ${employee.
)}`);*/

console.log(employee.retire);//returns date