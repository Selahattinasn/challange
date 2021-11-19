/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

let namen=prompt("Geben Sie die Name ein: ");

let age=parseInt(prompt("Geben Sie die Alter ein: "));

// Zum Testen
console.log(age);
console.log(typeof age);

// if (age>=0 && age<=5){
//     console.log(namen+" trinkt Milch");
// }
// else if (age>= 6 && age<=12){
//     console.log(namen+" trinkt Saft");
// }
// else if (age>= 13 && age<=17){
//     console.log(namen+" trinkt Cola");
// }
// else  {
//     console.log(namen+" trinkt Wein");
// }




switch (true) {
    case (age>=0 && age<=5):
        console.log(namen+" trinkt Milch");
        break;
    case (age>=6 && age<=12):
        console.log(namen+" trinkt Saft");
        break;
    case (age>=13 && age<=17):
        console.log(namen+" trinkt Cola");
        break;
    default:
        console.log(namen+" trinkt Wein");
        break;
}



