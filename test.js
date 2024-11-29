//first task - დაბეჭდეთ რიცხვები 2 დან 8 მდე
for (let index=2; index<8; index++) {
    console.log(index);
    
};



//second task 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for (let index = 5; index <= 35; index = index + 4) {
    console.log(index);
    
};


//third task დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
namravli=1
for (let index = 3; index < 8; index++) {
    namravli=index*namravli
    console.log(namravli);
    
};


//fourth task გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
let person={
    firstName: "Gvantsa",
    lastName: "Kintsurashvili",
    age: 25,
};
console.log(person.firstName, person.lastName);



//fifth task დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
for (propertyKey in person) {
    console.log(person[propertyKey])  
}


//sixth task დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
let fruits=["Apple", "Banana", "Orange"];
console.log(fruits);

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}


//seventh task დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log(fruits);




//eigth task დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let sum=0
for (let index = 1; index < 34; index++) {
    sum=sum + index
    console.log(sum, index)
    
}
