const mongoose = require('mongoose');
const { Schema } = mongoose;
const CompaniesSchema = new Schema({

    CIN: {
        type: String,
        required:true
    },
    ALISE: {
        type: String,
        required:true
    },
    COMPANY_NAME: {
        type: String,
        required:true
    },
    DATE_OF_REGISTRATION: {
        type: String,
        required:true
    },
    MONTH_NAME: {
        type: String,
        required:true
    },
    STATE: {
        type: String,
        required:true
    },
    ROC: {
        type: String,
        required:true
    },
    COMPANY_STATUS: {
        type: String,
        required:true
    },
    CATEGORY: {
        type: String,
        required:true
    },
    CLASS: {
        type: String,
        required:true
    },
    COMPANY_TYPE: {
        type: String,
        required:true
    },
    AUTHORIZED_CAPITAL: {
        type: String,
        required:true
    },
    PAIDUP_CAPITAL: {
        type: String,
        required:true
    },

    ACTIVITY_CODE: {
        type: String,
        required:true
    },
    ACTIVITY_DESCRIPTION: {
        type: String,
        required:true
    },
    REGISTERED_OFFICE_ADDRESS: {
        type: String,
        required:true
    },
    EMAIL: {
        type: String,
        required:true
    }


});
module.exports = mongoose.model('com', CompaniesSchema);