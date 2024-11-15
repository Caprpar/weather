/* 
functions recieve string as argument
function updates innertext of 'location-name'
*/

function displayName(locationString) {
    // Get the element
    let locationElement = document.getElementById("location-name");
    
    // Update its innerText
    locationElement.innerText = locationString;

    // Return the updated text, if needed
    return locationElement.innerText;
}

/*
Function Call
displayName('Morintropolis');
*/
