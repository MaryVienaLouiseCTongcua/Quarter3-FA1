let isAgreed = confirm("Do you agree to share your personal information with our site?");

if (isAgreed) 

{
    let nickname = "Mary";  
    let heightInches = 62;
    let weightKg = 40;

    let heightFeet = Math.floor(heightInches / 12);
    let remainingInches = heightInches % 12;
    let weightLbs = weightKg * 2.20462;


    let infoMessage = `Name: ${nickname}\nHeight: ${heightFeet}'${remainingInches}"\nWeight: ${weightLbs.toFixed(3)} lbs`;


    console.log(infoMessage); 

} else {

    console.log("User does not wish to share his/her information."); 
}
