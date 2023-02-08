/****** THIS IS A WORK IN PROGRESS. IT STILL MUST BE ALTERERED AND REFINED ******/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDyoHjhTZApEUrcQ_ToZ64i0hRlKob6w9Q",
    authDomain: "web-gui-e04cc.firebaseapp.com",
    databaseURL: "https://web-gui-e04cc.firebaseio.com",
    projectId: "web-gui-e04cc",
    storageBucket: "web-gui-e04cc.appspot.com",
    messagingSenderId: "464868654550",
    appId: "1:464868654550:web:782009cd85a1958851f877",
    measurementId: "G-GTR90DTP5X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signUpButton_TouchUpInside()
{

  var userEmail = "test@test.com";
  var userPassword = "123456";
  var userName = "testman";

  window.alert("test1"); // does get called

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
  .then(function(user) {
    var user = firebase.auth().currentUser;
    setUserInfo("", "", userName, userEmail, user.uid)
  })
  .catch(function(error) {
    // no `if (error)` is needed here: if `catch` is called, there was an error
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("There went something wrong : " + errorMessage);
  });
}

//Still need to change this function to work with everything else. 
function setUserInfo(profileImageUrl, profileBannerUrl, username, email, uid)
{
  var userId = firebase.auth().currentUser.uid;
  var ref = firebase.firestore().ref();
  var userRef = ref.child("users").child(userId);

  userRef.set({
    username: username,
    username_lowercase: username.toLowerCase().replace(" ", ""),
    email: email,
    profileImageUrl: profileImageUrl,
    profileBannerUrl: profileBannerUrl
  }, function(error)
  {
    if (error)
    {
      var errorMessage = error.message;

      window.alert("There went something wrong : " + errorMessage);
    }
    else
    {
      window.alert("Account successfully created");
    }
  });
}