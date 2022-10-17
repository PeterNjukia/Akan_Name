

function GetAkaiDayFromUserInputs(){

    var year  = prompt("Enter year: ");
    var century = parseInt(year.substring(0, 2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter month: "));
    var day = parseInt(prompt("Enter day: "));
    let gender=prompt("Enter Male or Female");
    var dayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
    return dayOfTheWeek; 
}



const MaleAkai = {Sunday: "Kwasi", Monday: "Kwadwo",Tuesday: "Kwabena",Wednesday: "Kwaku",Thursday:  "Yaw",Friday: "Kofi",Saturday: "Kwame"};
const Femalekai = {Sunday: "Akosua",Monday: "Adwoa",Tuesday: "Abenaa",Wednesday: "Akua",Thursday:  "Yaa",Friday: "Afua",Saturday: "Ama"};

const AkaiName = Object.values(MaleAkai)[6];
console.log(AkaiName);

for (i in MaleAkai) {
    if (i==GetAkaiDayFromUserInputs) {
        alert(MaleAkai[keyindex])
    }else{
        alert(Femalekai[keyindex])
    }

}


