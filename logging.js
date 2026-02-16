const fs = require('fs');
function logMessage(message) {
    const log = `${new Date()} : ${message}\n`;
    fs.appendFile('app.log', log, (err) => {
        if (err) console.log('Log failed');
    });
}
logMessage('Server started');
logMessage('User logged in');