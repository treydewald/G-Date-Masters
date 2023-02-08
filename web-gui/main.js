/******** FUNCTION TO INITIALIZE THE FIRESTORE *********/
// Initialize Cloud Firestore through Firebase

//Use this Firestore for testing
console.log("Initialize the app:");
firebase.initializeApp({
    apiKey: "AIzaSyDyoHjhTZApEUrcQ_ToZ64i0hRlKob6w9Q",
    authDomain: "web-gui-e04cc.firebaseapp.com",
    projectId: "web-gui-e04cc"
});
  
var db = firebase.firestore();


//For GDate Use this FireStore
/*
console.log("Initialize the app:");
firebase.initializeApp({
    apiKey: "AIzaSyAdfXSsBHyOciqzlLnKuBdbTxRMg1IgVjQ",
    authDomain: "g-date-e9b3a.firebaseapp.com",
    projectId: "g-date-e9b3a",
});
  
var db = firebase.firestore();
*/

/******** FUNCTION TO ADD NEW USER DATA *********/
//This set of functions is to add a new user data to the firestore

//createUser() is used to add a user to the firebase application
function createUser() {
    //Need to figure out how to add a new user to the firebase application. This method should call 
    addToFireStore();
}

function addToFireStore() {
    var x = document.getElementById("formUpdateUserData");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "\n";
    }
    console.log('FormResults:\n' + text);
    console.log('Validating form to submit to addUserData...');
    
    if(isValidNumber(0, x.elements[7].value) && isValidNumber(1, x.elements[8].value)) {
        addUserData(x.elements[0].value, x.elements[4].value, x.elements[2].value, x.elements[1].value, x.elements[6].value, x.elements[3].value, x.elements[7].value, x.elements[8].value, x.elements[5].value, x.elements[9].value, x.elements[10].value,x.elements[11].value);
        resetForm();
    }
    else {
        alert("Invalid Latitude or Longitude Input...")
    }
}

function addUserData(aI, eM, fN, ID, isOn, lN, lLat, lLong, phoneNum, ppURL, pushT, uRole) {
    console.log("Adding user data for nonexistant user")

    db.collection("users").add({
        appIdentifier: aI,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        email: eM,
        firstName: fN,
        id: ID,
        isOnline: returnBoolean(isOn),
        lastName: lN,
        lastOnlineTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
        location: {latitude: parseFloat(lLat), longitude: parseFloat(lLong)},
        phone: phoneNum,
        profilePictureURL: ppURL,
        pushToken: pushT,
        role: uRole,
        signUpLocation: {latitude: parseFloat(lLat), longitude: parseFloat(lLong)},
        userID: ID
    })
}

function returnBoolean(toBeBoolean) {
    return (toBeBoolean >= 1);
}

//isLatOrLong 0=Lat 1=Long latOrLong is the value
function isValidNumber(isLatOrLong, latOrLong) {
    if(!isNaN(latOrLong)){
        latOrLong = parseFloat(latOrLong);
        if (isLatOrLong == 0){
            return (latOrLong <= 90 && latOrLong >= -90);
        }
        if (isLatOrLong == 1){
            return (latOrLong <= 180 && latOrLong >= -180);
        }
    }
    return false;
}

function resetForm() {
    document.getElementById("formUpdateUserData").reset();
}

/******** FUNCTION TO VIEW ALL BOTS IN A TABLE *********/
//This set of functions is to view all bots in a table

function getSData() {
    var results = [];

    db.collection("users").where("role", "==", "bot")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //Comments functions for testing
                //console.log(doc.id, " => ", doc.data());
                //console.log(doc.id);
                results.push(doc.data());
            });
            console.log('done');
            createTable(results);
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
    });
}

function createTable(tableItems) {
    console.log('Items: ' + tableItems);
    
    //Display the table
    var rTable = document.getElementById("r-table");
    if (rTable.style.display !== "block") {
        rTable.style.display = "block";
    }
    
    //Reset the table before loading it again
    var tableRows = document.getElementsByTagName("tr");
    var tableHead = tableRows[0];
    var table = document.getElementById("resultsTable");
    table.innerHTML = "<tr>" + tableHead.innerHTML + "</tr";

    //Add the rows for eache element found in the firestore
    tableItems.forEach(function(item, index){
        //console.log(item.firstName + ' ' + index);

        //Create the table rows.
        var table = document.getElementById("resultsTable");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        cell1.innerHTML = item.appIdentifier;
        cell2.innerHTML = item.id;
        cell3.innerHTML = item.firstName;
        cell4.innerHTML = item.lastName;
        cell5.innerHTML = item.email;
        cell6.innerHTML = item.phone;
        cell7.innerHTML = item.isOnline;
        cell8.innerHTML = item.pushToken;
        cell9.innerHTML = item.role;
    });

    //console.log(tableItems[0]);
    //console.log(tableItems[0].firstName);
}



/******** FUNCTION USED FOR REVERANCE AND NOT USEFUL *********/
//This set of functions is to view all bots in a table

function addUser() {
    console.log("Create two documents for uses:");

    //Adds Regular user
    db.collection("users").add({
        first: "A",
        last: "B",
        born: 2001,
        bot: false
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    // Add a second User that is a bot
    db.collection("users").add({
        first: "B",
        last: "C",
        born: 2000,
        bot: true
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

/******** THIS IS THE FUNCTION TO GET DATA *********/
// Limited just gets simple. NOt very useful

function getData () {
    console.log("Get the simple data not useful:");

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}

/******** THIS IS THE FUNCTION TO GET DATA *********/
//This gets multiple documents from the collection if they 
//have a variable that is searched for.

function OLDgetSData() {
    console.log("Get document if bot is true:");

    db.collection("users").where("role", "==", "bot")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                console.log(doc.id);
                console.log(doc.data().firstName);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}

/******** THIS IS THE FUNCTION TO GET DATA *********/
//Gets all documents from a collection

function getAData() {
console.log("Get all documents in collection users:");

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
}







function defaultFunctionLevel() {
    var x = document.getElementById("formUpdateUserData");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    console.log(text);
    x.elements[0].value = "Test";
    //document.getElementById("demo").innerHTML = text;
}