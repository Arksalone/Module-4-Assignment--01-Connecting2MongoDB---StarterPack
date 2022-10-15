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
    loanType: String,
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

const Loan = mongoose.model('Loans', loanDataSchema);
Loan.insertMany([{
        // String is shorthand for {type: String}
        Id: '202',
        customerName: 'Abdulrahman Kabia',
        phoneNumber: 7038786534,
        address: 'Sterling Va',
        loanAmount: 370,
        interest: 6,
        loanTermYears: 4,
        loanType: 'Student loans',
        description: 'IFT 458',
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
        // String is shorthand for {type: String}
        Id: '203',
        customerName: 'Wurie Mariama',
        phoneNumber: 57178650037,
        address: 'Herndon Va',
        loanAmount: 400,
        interest: 6,
        loanTermYears: 4,
        loanType: 'Equity loans',
        description: 'IFT 458',
        // createdDate: {
        //     type: (1960, 11, 27),
        //     default: Date.now
        // },
        // insertedDate: {
        //     type: (1960, 10, 10),
        //     default: Date.now
        // }
    },
    {
        Id: '204',
        customerName: 'Mohamed Jalloh',
        phoneNumber: 7034567832,
        address: 'Laurel MD',
        loanAmount: 200,
        interest: 6,
        loanTermYears: 4,
        loanType: 'Mortgage loans',
        description: 'IFT 458'
    },
    {
        Id: '205',
        customerName: 'Halley Kunu',
        phoneNumber: 5718757623,
        address: 'Reston Va',
        loanAmount: 550,
        interest: 6,
        loanTermYears: 4,
        loanType: 'Equity loans',
        description: 'IFT 458',
    },
    {
        Id: '206',
        customerName: 'Mary Boakye',
        phoneNumber: 7034567834,
        address: 'South Riding Va',
        loanAmount: 400,
        interest: 6,
        loanTermYears: 4,
        loanType: 'Student loans',
        description: 'IFT 458'
    }
])