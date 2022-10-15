const mongoose = require('mongoose');
// const { title } = require('process');
mongoose.connect('mongodb+srv://<password>@webapp.pv3dtok.mongodb.net/loanApplication', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const loanDataSchema = new mongoose.Schema({
    Id: String, // String is shorthand for {type: String}
    customerName: String,
    phoneNumber: Number,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: Number,
    description: String,
    // createdDate: {
    //     type: Date,
    //     default: Date.now
    // },
    // insertedDate: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Movie = mongoose.model('Loans', loanDataSchema);
Loan.insertMany([{
        Id: 'salone', // String is shorthand for {type: String}
        customerName: 'Abdulrahman Kabia',
        phoneNumber: 7026785467,
        address: 'Sterling, Va',
        loanAmount: 20000,
        interest: 7.4,
        loanTermYears: 8,
        loanType: 10,
        description: 'Personal Loan',
        // createdDate: {
        //     type: (2002, 11, 27),
        //     default: Date.now
        // },
        // insertedDate: {
        //     type: (2002, 11, 27),
        //     default: Date.now
        // }
    },
    {
        Id: 'togo', // String is shorthand for {type: String}
        customerName: 'Halley',
        phoneNumber: 5716785467,
        address: 'Sterling, Va',
        loanAmount: 50000,
        interest: 5,
        loanTermYears: 6,
        loanType: 7,
        description: 'Car Loan',
        // createdDate: {
        //     type: (1960, 11, 27),
        //     default: Date.now
        // },
        // insertedDate: {
        //     type: (1960, 10, 10),
        //     default: Date.now
        // }
    }
])