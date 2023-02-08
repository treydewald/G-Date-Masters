import { placeholder } from 'i18n-js';
import { IMLocalized, setI18nConfig } from '../../localization/IMLocalization';

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
const regexForAge = /[0-9]/g;

var PreDateQuestions = {
    title: "Please fill out this short form",
    fields: [
            {
            displayName: 'How physically attractive do you find your date?',
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "PreDateQ1",
            },
            {
            displayName: 'How attractive do you find his personality?',
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "PreDateQ2",
            },                
            {
            displayName: 'How interested are you in meeting up in person?',
            type: "select",
            options: ["1", "2", "3", "4", "5", "6", "7"],
            displayOptions: ["1", "2", "3", "4", "5", "6", "7"],
            editable: true,
            key: "PreDateQ3",
            },
    ]}
export {
    PreDateQuestions
}