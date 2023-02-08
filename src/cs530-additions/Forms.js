import { placeholder } from 'i18n-js';
import { IMLocalized, setI18nConfig } from '../Core/localization/IMLocalization';

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
const regexForAge = /[0-9]/g;

var Demographics = {
    title: IMLocalized('PUBLIC PROFILE'),
    fields: [
        {
            displayName: IMLocalized('First Name'),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'firstName',
            placeholder: 'Your first name',
        },
        {
            displayName: IMLocalized('Last Name'),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'lastName',
            placeholder: 'Your last name',
        },
        {
            displayName: "Do you consider \nyourslef Hispanic or Latino",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            // value: "No",
            key: "hispanicORLatino"
        },
        {
            displayName: IMLocalized('Age'),
            type: 'text',
            editable: true,
            regex: regexForAge,
            key: 'age',
            placeholder: 'Your age',
        },
        {
            displayName: IMLocalized('Bio'),
            type: 'text',
            editable: true,
            key: 'bio',
            placeholder: 'Your bio',
        },
        {
            displayName: "What are you looking for?",
            type: "text",
            editable: true,
            key: "seeking",
            placeholder: "Long Term, Serious relationship"
        },
        {
            displayName: IMLocalized('School'),
            type: 'text',
            editable: true,
            key: 'school',
            placeholder: 'Your bio',
        },
    ],
}

var race = {
    title: "Are you...",
    fields: [
        {
            displayName: "American Indian or Alaska Native",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "AmericanIndianOrAlaskaNative"
        },
        {
            displayName: "Asian",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "asian"
        },
        {
            displayName: "Black/African American",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "AfericanAmerican"
        },
        {
            displayName: "Native Hawaiin or Other Pacific Islander",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "Native_Hawaiin_or_Other_Pacific_Islander"
        },
        {
            displayName: "White",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "white"
        },
        {
            displayName: "Multiracial",
            type: 'select',
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "Multiracial"
        },
        {
            displayName: "Other",
            type: 'text',
            editable: true,
            key: 'otherRace',
            placeholder: '',
        },
    ]
}

var TIPI = {
    title: "Personality Questions",
    fields: [
        {
            displayName: "Extraverted, enthusiastic",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q1",

        },
        {
            displayName: "Critical, quarrelsome",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q2",

        },
        {
            displayName: "Dependable, self-disciplined",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q3",

        },
        {
            displayName: "Anxious, easily upset",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q4",

        },
        {
            displayName: "Open to new experiences, complex",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q5",

        },
        {
            displayName: "Reserved, quiet",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q6",

        },
        {
            displayName: "Sympathetic, warm",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q7",

        },
        {
            displayName: "Disorganized, careless",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q8",

        },
        {
            displayName: "Calm, emotionally stable",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q9",

        },
        {
            displayName: "Conventional, uncreative",
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "Q10",

        }
    ]
}

var internetAcess = {
    title: "Please indicate in what ways you access the internet",
    fields: [
        {
            displayName: "I have a computer that\ncan connect to the internet at home",
            type: 'select',
            options: ['True', 'False'],
            displayOptions: ['True', 'False'],
            editable: true,
            key: "hasHomeComputer"
        },
        {
            displayName: "I have access to\nthe internet at school",
            type: 'select',
            options: ['True', 'False'],
            displayOptions: ['True', 'False'],
            editable: true,
            key: "accessAtSchool"
        },
        {
            displayName: "I use the internet\nat a friend's home",
            type: 'select',
            options: ['True', 'False'],
            displayOptions: ['True', 'False'],
            editable: true,
            key: "accessFromFriends"
        },
        {
            displayName: "I use the internet at\ninternet cafe's and public libraries",
            type: 'select',
            options: ['True', 'False'],
            displayOptions: ['True', 'False'],
            editable: true,
            key: "hasPublicAccess"
        },
        {
            displayName: "I use the \ninternet at work",
            type: 'select',
            options: ['True', 'False'],
            displayOptions: ['True', 'False'],
            editable: true,
            key: "accessFromWork"
        },
        {
            displayName: "I generally do not\nhave access to the internet",
            type: 'select',
            options: ['True', 'False'],
            displayOptions: ['True', 'False'],
            editable: true,
            key: "noAccess"
        }
    ]
}

var PrivateStuff = {
    title: IMLocalized('PRIVATE DETAILS'),
    fields: [
        {
            displayName: IMLocalized('E-mail Address'),
            type: 'text',
            editable: true,
            key: 'email',
            placeholder: 'Your email address',
        },
        {
            displayName: IMLocalized('Phone Number'),
            type: 'text',
            editable: true,
            regex: regexForPhoneNumber,
            key: 'phone',
            placeholder: 'Your phone number',
        },
    ],
}

var websites = {
    title: "What websites do you frequent?",
    fields: [
        {
            displayName: "",
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'websitesVisted',
            placeholder: 'Facebook, Instagram, TINDER',
        }
    ]
}

var barParties = {
    title: "What bars/parties do you frequent for meeting other guys?",
    fields: [
        {
            displayName: "",
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'barsPartiesVisted',
            placeholder: 'Olive Garden, Chillies, etc..'
        }
    ]
}

var easeOfTravel = {
    title: "How dificult was it to get here today?",
    fields: [
        {
            displayName: "Very Dificult - Quite Easy",
            type: "select",
            options: ['0', "1", "2", "3", "4"],
            displayOptions: ['0(Very Hard)', "1", "2", "3", "4(Very Easy)"],
            editable: true,
            key: "travelDifficulty",

        }
    ]
}

var employment = {
    title: "What best describes your current status?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['Full-time (40 hours a week)', "Part-Time (<40 hours a week)", "Part-time work & Full-time Student", "Permanent or temporary disabled and NOT working", "Permanent or temporary disabled BUT working off the books", "Unemployed -- Student", "Unemployed -- Other"],
            displayOptions: ['Full-time (40 hours a week)', "Part-Time (<40 hours a week)", "Part-time work & Full-time Student", "Permanent or temporary disabled and NOT working", "Permanent or temporary disabled BUT working off the books", "Unemployed -- Student", "Unemployed -- Other"],
            editable: true,
            key: "employmentStatus",
            value: "Select One..."
        }
    ]
}

var income = {
    title: "What best describes your personal income from last year?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['< $10,000', '$10,000-$19,999', '$20,000-$20,999', '$30,000-$39,999', '$40,000-$49,999', '$50,000-$74,999', "> $75,000"],
            displayOptions: ['< $10,000', '$10,000-$19,999', '$20,000-$20,999', '$30,000-$39,999', '$40,000-$49,999', '$50,000-$74,999', "> $75,000"],
            editable: true,
            key: "incomeStat",
            value: "Select One..."
        }
    ]
}

var parentalClass = {
    title: "What best describes your personal income from last year?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['Rich', 'Upper Middle Class', 'Middle Class', 'Working Class', 'Poor'],
            displayOptions: ['Rich', 'Upper Middle Class', 'Middle Class', 'Working Class', 'Poor'],
            editable: true,
            key: "parentalClass",
            value: "Select One..."
        }
    ]
}

var schooling = {
    title: "What is your highest level of education completed?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['Some High School', 'High School Diploma / GED', 'Some College or Associates Degree', 'Currently Enrolled in college', '4-year College Degree (BA,BS,BFA)', 'Graduate School'],
            displayOptions: ['Some High School', 'High School Diploma / GED', 'Some College or Associates Degree', 'Currently Enrolled in college', '4-year College Degree (BA,BS,BFA)', 'Graduate School'],
            editable: true,
            key: "education",
            value: "Select One..."
        }
    ]
}

var maritalStatus = {
    title: "How do you define your CURRENT relationship status?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['I\'m leagally married', 'I have a partner or a lover', 'I have a boyfriend or girlfriend', 'I\m Single'],
            displayOptions: ['I\'m leagally married', 'I have a partner or a lover', 'I have a boyfriend or girlfriend', 'I\m Single'],
            editable: true,
            key: "maritalStatus",
            value: "Select One..."
        }
    ]
}

var orientation = {
    title: "Which best describes how you identify yourself?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['Gay,Queer, or Homosexual', 'Bisexual', 'Heterosexual/Straight', 'Not Applicable'],
            displayOptions: ['Gay,Queer, or Homosexual', 'Bisexual', 'Heterosexual/Straight', 'Not Applicable'],
            editable: true,
            key: "orientation",
            value: "Select One..."
        }
    ]
}

var ageOfRealizing = {
    title: "At what age did you first realize that you were sexually attracted to men?",
    fields: [
        {
            displayName: "",
            type: 'text',
            editable: true,
            // regex: regexForAge,
            key: 'realizingAge',
            placeholder: 'Start Typing...'
        }
    ]
}
var ageOfOuting = {
    title: "At what age did you first tell any of your friends that you have sex with men?",
    fields: [
        {
            displayName: "",
            type: 'text',
            editable: true,
            // regex: regexForAge,
            key: 'comeOutAge',
            placeholder: 'Start Typing...'
        }
    ]
}
var ageOfOutingFamily = {
    title: "At what age did you first tell anyone in your family that you have sex with men?",
    fields: [
        {
            displayName: "",
            type: 'text',
            editable: true,
            // regex: regexForAge,
            key: 'comeOutAgeFamily',
            placeholder: 'Start Typing...'
        }
    ]
}

var friendsKnow = {
    title: "Do any of your friends know that you have sex with men?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "friendsKnow",
            value: "Select One..."
        }
    ]
}
var familyKnow = {
    title: "Does anyone in your family know that you have sex with men?",
    fields: [
        {
            displayName: "",
            type: "select",
            options: ['Yes', 'No'],
            displayOptions: ['Yes', 'No'],
            editable: true,
            key: "familyKnow",
            value: "Select One..."
        }
    ]
}





export {
    TIPI,
    Demographics,
    PrivateStuff,
    internetAcess,
    race,
    websites,
    barParties,
    easeOfTravel,
    employment,
    income,
    parentalClass,
    schooling,
    maritalStatus,
    orientation,
    ageOfRealizing,
    ageOfOuting,
    ageOfOutingFamily,
    friendsKnow,
    familyKnow

}