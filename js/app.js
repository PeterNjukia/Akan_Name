
const MALE_NAMES = ["Kwasi", 10, 20, 30, 40, 50, 60];
const FEMALE_NAMES = ["Akosua", 70, 80, 90, 100, 110];
const DAYS_OF_THE_WEEK = ["Sunday"];

function getUserInputAndCalculateDay(){
    var year  = prompt("Enter year: ");
    var century = parseInt(year.substring(0, 2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter month: "));
    var day = parseInt(prompt("Enter day: "));
    var dayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
    return dayOfTheWeek; // 0 - 6
}

function getGender(){
    var gender = prompt("Enter your gender:");
    return gender;
}

function main(){
    var day = getUserInputAndCalculateDay();
    var gender = getGender();
    var akanName = null;

    if (gender.toLowerCase().startsWith("f")){
        akanName = FEMALE_NAMES[day];
    } else {
        akanName = MALE_NAMES[day];
    }
    alert("Your Akan name is " + akanName);
}

main()


