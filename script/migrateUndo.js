var env = process.env.NODE_ENV || 'development';
const { spawn } = require('child-process-promise');

(async () => {
    try {
        await spawn('./node_modules/.bin/sequelize', ['db:migrate:undo', `--env=${env}`]);
        console.log('*************************');
        console.log('Undo migration successful');
    } catch (err) {        
        console.log('*************************');
        console.log('Undo migration failed. Error:', err.message);
        process.exit(1);
    }

    process.exit(0);
})();