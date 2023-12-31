// Преди да влязат в тъмната стаичка всички гласоподаватели получават карта с номер, който съдържа 6 цифри. Но верни на принципа всички балами (гласуващи) са равни, но някои са по-равни от другите, някои гласуващи получават карти съдържащи различно количество цифри.

// Задача 1
// На терминала клиентът трябва да въведе серийния номер на своята карта. Това е цяло число, което има скрито значение. (Внимание: Това число си го измисляте вие и не го получавате от никъде. Просто, за да е по-интересна историята си представете, че са ви го дали преди да го въведете).

// Ако номерът съдържа повече от 2 цифри - гражданинът е от тип POOR            99 най малкото двуцифрено число
// Ако клиентският номер съдържа повече от 6 цифри, то гласуващият е RICH       999 999 най малкото 6-цифрено число
// Ако съдържа 6 цифри, то значи е NORMAL                                       100 000 - 999 999 - 6-цифрени числа

const POOR_VOTER_COEFFICIENT     = 99;
const NORMAL_VOTER_COEFFICIENT   = 100000;
const RICH_VOTER_COEFFICIENT     = 999999;

const voterCardSerialNumber = prompt("Моля, въведете серийния номер на Вашата идентификационна карта:");


//Вариант 1: с ELSE
// const voterIsNormal   = (voterCardSerialNumber >= NORMAL_VOTER_COEFFICIENT) && (voterCardSerialNumber <= RICH_VOTER_COEFFICIENT);
// const voterIsRich     = voterCardSerialNumber > RICH_VOTER_COEFFICIENT;
// const voterIsPoor     = (voterCardSerialNumber > POOR_VOTER_COEFFICIENT) && (voterCardSerialNumber < NORMAL_VOTER_COEFFICIENT);

// if(voterIsNormal) {
//     console.log("Има за нас, има и за вас");
// }
// else if(voterIsRich) {
//     console.log("Радваме се, че нормални хора вече гласуват");
// }
// else if(voterIsPoor) {
//     console.log("Хайде по-бързо и да те няма");
// }

//Вариант 2:

const voterIsNormal   = (voterCardSerialNumber >= NORMAL_VOTER_COEFFICIENT) && (voterCardSerialNumber <= RICH_VOTER_COEFFICIENT);
const voterIsRich     = voterCardSerialNumber > RICH_VOTER_COEFFICIENT;
const voterIsPoor     = (voterCardSerialNumber > POOR_VOTER_COEFFICIENT) && (!voterIsNormal) && (!voterIsRich);

if(voterIsNormal) {
    console.log("Има за нас, има и за вас");
}
 if(voterIsRich) {
    console.log("Радваме се, че нормални хора вече гласуват");
}
 if(voterIsPoor) {
    console.log("Хайде по-бързо и да те няма");
}



// Задача 2
// След въвеждане на номера системата трябва да изведе съобщение в зависимост от типа на гласоподавателя. Съобщението можете да видите в таблицата.

// Тип гласоподавател	    Окуражаващо съобщение
// POOR	                    Хайде по-бързо и да те няма
// RICH	                    Има за нас, има и за вас
// NORMAL	                Радваме се, че нормални хора вече гласуват




// Задача 3
// Всички гласували, чиито номера завършват на четно число, са VIP гласували, а останалите са обикновени такива.

// Пример: 105468 е четно число и клиентът е VIP
// Пример: 115485 е нечетно число и клиентът няма специални правомощия

const isVoterVIP = (voterCardSerialNumber%2 == 0);
if(isVoterVIP) {
    console.log("Гласоподавателят е VIP.");
}



// Задача 4
// Ако предпоследната цифра на номера на гласувалия е число по-голямо от 3, то веднага след успешно гласуване той трябва да бъде попитан, дали укрива данъци:

// ако отговорът е положителен - изведете съобщението “Браво моето момче”
// в противен случай изведете съобщението “Будала”

const LastDigitVoterCardSerialNumber = parseInt((voterCardSerialNumber%100)/10);

// if(LastDigitVoterCardSerialNumber > 3) {
//     var doYouHideTaxes = prompt(`Укриваш ли данъци? Отговори с "Да" или "Не"`);
// if(doYouHideTaxes == "Да") {
//     console.log("Браво, моето момче");
// }
// if(doYouHideTaxes == "Не") {
//     console.log("Будала");
// }
// else {
//     console.log("Невалиден отговор.");
// }
// }

// Вариант 2:

const doYouHideTaxes = LastDigitVoterCardSerialNumber > 3;

if(doYouHideTaxes) {
    const questionFlag              = prompt(`Укриваш ли данъци - Отговори с "Да" или "Не"`);
    const doYouHideTaxes     = (questionFlag == 'Да');
    const message                   = doYouHideTaxes ? `Браво моето момче` : `Будала`;
    console.log(message);
}






// Задача 5
// Ако гласуващият е VIP и не укрива данъци, то това означава, че той е със специален SUPER VIP статус и това му дава възможност да получи баничка след като напусне тъмната стая, но само с негово изрично съгласие.

// Ако иска баничка, изведете съобщение - “Не може”
// Ако не иска баничка, изведете съобщение - “Ами, то и без това няма”

const isVoterSuperVIP = isVoterVIP && (doYouHideTaxes == "Не");
// Втори вариант: 
// //const isVoterSuperVIP = isVoterVIP && (doYouHideTaxes == false);
// Трети вариант:
// const isVoterSuperVIP   = isVoterVIP  && !isVoterActualTaxFroud;

// БАНИЧКА: Първи вариант:
if(isVoterSuperVIP) {
    var doYouWantBanichka = prompt(`Искаш ли баничка? Отговори с "Да" или "Не"`)
    if(doYouWantBanichka == "Да") {
        console.log("Не може");
    }
    else if(doYouWantBanichka == "Не") {
        console.log("Ами, то и без това няма");
    }
    else {
        console.log("Невалиден отговор");
    }
}


// БАНИЧКА: Втори вариант:
// if(isVoterSuperVIP) {
//     const flagQuestion = prompt(`Искаш ли баничка? Отговори с "Да" или "Не"`);
//     var doesVoterRefuseExtraBanichka = (flagQuestion != "Y")

//     if(flagQuestion == 'Y') {
//         console.log("Не може");
//     }
//     else {
//         console.log("Ами, то и без това няма");
//     }
// }



// Задача 6
// Терминалът извежда меню с всички партии, за които гласоподавателят може да гласува, като за да се направи избор е необходимо да се селектира номерът на партията. В таблицата са дадени актуалните имена на кандидатите.

// Номер на партия	Наименование
// 1	            Партия за прогресивен канибализъм
// 27	            Замундска вегетарианска партия
// 666	            Синдикат на вуду-трактористите
// 999	            Партия на труда, мотиката и наковалнята
// След като се въведе номерът на партията гласувалият получава съобщение “Вие си поръчахте да ви управлява {ИМЕТО НА ИЗБРАНАТА ПАРТИЯ} ”.

console.log("Партия №1: Партия за прогресивен канибализъм");
console.log("Партия №27: Замундска вегетарианска партия");
console.log("Партия №666: Синдикат на вуду-трактористите");
console.log("Партия №999: Партия на труда, мотиката и наковалнята");

const enterPartyNumber = prompt("Въведи номера на партията, за която искаш да гласуваш:");

if(enterPartyNumber == 1) {
    alert("Вие си поръчахте да ви управлява Партия за прогресивен канибализъм");
}
else if(enterPartyNumber == 27) {
    alert("Вие си поръчахте да ви управлява Замундска вегетарианска партия");
}
else if(enterPartyNumber == 666) {
    alert("Вие си поръчахте да ви управлява Синдикат на вуду-трактористите");
}
else if(enterPartyNumber == 999) {
    alert("Вие си поръчахте да ви управлява Партия на труда, мотиката и наковалнята");
}
else {
    alert("Няма партия с такъв номер.");
}


// Ако гласувалият не иска баничка и има статус NORMAL и е гласувал за партия с бюлетина номер 27, то любезно му напомнете (със съобщение), че животът е жесток и дължи данък от един банан при напускане на тъмната стаичка.

const doesVoterNeedToPayTax = voterIsNormal && (doYouWantBanichka == "Не") && (enterPartyNumber == 27);
if(doesVoterNeedToPayTax) {
    alert("И все пак всеки има право на лош вкус, моля депозирайте такса от един банан на изхода.");
}
