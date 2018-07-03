var env = process.env.NODE_ENV || 'development';
const { spawn } = require('child-process-promise');

(async () => {
    try {
        await spawn('./node_modules/.bin/sequelize', ['db:migrate', `--env=${env}`]);
        console.log('*************************');
        console.log('Migration successful');
        await spawn('./node_modules/.bin/sequelize', ['db:seed:all', `--env=${env}`]);
    } catch (err) {        
        console.log('*************************');
        console.log('Migration failed. Error:', err.message);
        process.exit(1);
    }

    process.exit(0);
})();