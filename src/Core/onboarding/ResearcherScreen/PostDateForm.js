import { placeholder } from 'i18n-js';
import { IMLocalized, setI18nConfig } from '../../localization/IMLocalization';

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
const regexForAge = /[0-9]/g;

var PostDateQuestions = {
    // title: "Impressions after the date",
    fields: [
            {
            displayName: 'How physically attractive do you find your date?',
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "PostDateQ1",
            },
            {
            displayName: 'How attractive do you find his personality?',
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "PostDateQ2",
            },                
            {
            displayName: 'How interested are you in meeting up in person?',
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "POstDateQ3",
            },
    ]};
var PostDateQuestionsFeedback = {
        title: '\n\nWhat other information (good or bad) would you like other G-Daters to know about this potential partner?\n',
        fields: [
                {           
                    displayName: ' ',
                    type: 'text',
                    editable: true,
                    key: 'PostDateQ4',
                    placeholder: 'Enter response here',
    },
]}
var ImpressionsOfMale = {
        title: "Please rate the male on a scale of 1-7. ",
        fields: [
            {
                displayName: '1 - pleasant to 7- unpleasant',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp1",
                },
                {
                displayName: '1 - unlikeable to 7- likeable',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp2",
                },
                {
                displayName: '1 - like you to 7- not at all like you',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp3",
                },
                {
                displayName: '1 - not attractive to 7- unattractive',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp4",
                },
                {
                displayName: '1 - sexually interested in me to 7- not sexually interested in me',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp5",
                },
                {
                displayName: '1 - unfriendly to 7- friendly',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp6",
                },
                {
                displayName: '1 - irresponsible to 7- responsible',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp7",
                },
                {
                displayName: '1 - non aggressive to 7- aggressive',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp8",
                },
                {
                displayName: '1 - quiet to 7- loud',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp9",
                },
                {
                displayName: '1 - unflirtatious to 7- very flirtatious',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp10",
                },
                {
                displayName: '1 - polite to 7- rude',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp11",
                },
                {
                displayName: '1 - unassertive to 7- assertive',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp12",
                },
                {
                displayName: '1 - not funny to 7- funny',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp13",
                },
                {
                displayName: '1 - shy to 7- outgoing',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp14",
                },
                {
                displayName: '1 - timid to 7- confident',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp15",
                },
                {
                displayName: '1 - uninteresting to 7- interesting',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp16",
                },
                {
                displayName: '1 - immature to 7- mature',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp17",
                },
                {
                displayName: '1 - not intelligent to 7- very intelligent',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp18",
                },
                {
                displayName: '1 - untrustworthy to 7- trustworthy',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp19",
                },
                {
                displayName: '1 - insincere to 7- sincere',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp20",
                },
                {
                displayName: '1 - sexually attractive to 7- sexually unattractive',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp21",
                },
                {
                displayName: '1 - not harmful to 7- harmful',
                type: "select",
                options: ["1", "2", "3", "4", "5", "6", "7"],
                displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
                editable: true,
                key: "Imp22",
                },
        ]};
    var ImpressionOfMale2 = {
            title: 'During the interaction, what, if anything, did your date say or do that made you feel comfortable or positive about him or the interaction',
            fields: [
                    {           
                        displayName: ' ',
                        type: 'text',
                        editable: true,
                        key: 'ImpressionsQ2',
                        placeholder: 'Enter response here',
        },
    ]};
    var ImpressionOfMale3 = {
        title: 'During the interaction, what, if anything, did your date say or do that made you feel uncomfortable or positive about him or the interaction',
        fields: [
                {           
                    displayName: ' ',
                    type: 'text',
                    editable: true,
                    key: 'IpressionsQ3',
                    placeholder: 'Enter response here',
    },
]}
export {
    PostDateQuestions,
    PostDateQuestionsFeedback,
    ImpressionsOfMale,
    ImpressionOfMale2,
    ImpressionOfMale3
}