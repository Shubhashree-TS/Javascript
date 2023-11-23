let sales = 123456;// ts infer sales as number 
let course : string = "typescript";// course is explicitly defined as string
let is_published = true;// ts infer is_published as boolean

let level ;//level is infered as any but IF I GIVE noImplicitAny as false, this wont get infered
level =1;
level ="a";//but this should be avoided, as this hinders the purpose of ts

function render(document:any){ //here we should specifically annotate the type of document in order to give clarity
    console.log(document);
}

render(200);// outpu: 200
