
function dayofbirth(){

    var year  = prompt("Enter year: ");
    var century = parseInt(year.substring(0, 2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter month: "));
    var day = parseInt(prompt("Enter day: "));
    var dayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
    return dayOfTheWeek; 
}

function getGender(){
    var gender = prompt("Enter your gender:");
    return gender;
}


function main(){
    var day = dayofbirth();
    var gender = getGender();
    // var akanName = null;
    const MaleAkai = {Sunday: "Kwasi", Monday: "Kwadwo",Tuesday: "Kwabena",Wednesday: "Kwaku",Thursday:  "Yaw",Friday: "Kofi",Saturday: "Kwame"};
    const Femalekai = {Sunday: "Akosua",Monday: "Adwoa",Tuesday: "Abenaa",Wednesday: "Akua",Thursday:  "Yaa",Friday: "Afua",Saturday: "Ama"};
    const Boy = Object.values(MaleAkai)[day];
    const Girl = Object.values(Femalekai)[day];

    if (gender=="male"){
            alert(Boy);
    }else {
            alert(Girl);
    };
    
};

// main()


