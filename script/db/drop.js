var env = process.env.NODE_ENV || 'development';
const { spawn } = require('child-process-promise');

(async () => {
    try {
        await spawn('./node_modules/.bin/sequelize', ['db:drop', `--env=${env}`]);        
        console.log(`${env} db dropped`);
    } catch (err) {        
        console.log('*************************');
        console.log('Undo migration failed. Error:', err.message);
        process.exit(1);
    }

    process.exit(0);
})();