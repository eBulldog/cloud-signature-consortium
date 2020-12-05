import mongoose, {Schema,Document} from 'mongoose';

export interface ICredential extends Document{
    credentialID: { type: String, unique: true },
    description: String,
    key: {
        status: String,
        algo: [String],
        len: Number,
        curve: String
    },
    cert: {
        status: String,
        certificates: [String],
        issuerDN: String,
        serialNumber: String,
        subjectDN: String,
        validFrom: Date,
        validTo: Date
    },
    authMode: String,
    SCAL: String,
    PIN: {
        presence: Boolean,
        format: String,
        label: String,
        description: String
    },
    OTP: {
        presence: Boolean,
        types: String,
        format: String,
        label: String,
        description: String,
        ID: String,
        provider: String
    },
    multisign: Number,
    lang: String
};

const credentialSchema:Schema = new Schema({
    credentialID: { type: String, unique: true },
    description: String,
    key: {
        status: String,
        algo: [String],
        len: Number,
        curve: String
    },
    cert: {
        status: String,
        certificates: [String],
        issuerDN: String,
        serialNumber: String,
        subjectDN: String,
        validFrom: Date,
        validTo: Date
    },
    authMode: String,
    SCAL: String,
    PIN: {
        presence: Boolean,
        format: String,
        label: String,
        description: String
    },
    OTP: {
        presence: Boolean,
        types: String,
        format: String,
        label: String,
        description: String,
        ID: String,
        provider: String
    },
    multisign: Number,
    lang: String
});

const Credential = mongoose.model<ICredential>('credentials', credentialSchema);

export default Credential;