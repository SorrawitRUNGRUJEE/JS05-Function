// const sender = 'Matt';

// function sendTo(from, to) {
//     console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, 'Sarah'); // * => return From Matt to sarah as the variable has been use as parameter and met with the condtion of the function\

// sendTo(null); // ** => return from null to undefiend as null has beed use as parameter and there is no `to` parameter input
// ```

// ```js
const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** return from cc to max as the input for both parameter is valid, so the function work accordingly and 'CC' is the default parameter
sendTo('Ben', 'Jay'); // **** => return from jay to max as  the both input parameter has been accepted
// ```