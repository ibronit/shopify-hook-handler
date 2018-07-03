var env = process.env.NODE_ENV || 'development';
const { spawn } = require('child-process-promise');

(async () => {
    try {
        await spawn('./node_modules/.bin/sequelize', ['db:create', `--env=${env}`]);
        console.log(`${env} db is ready`);
        await spawn('./node_modules/.bin/sequelize', ['db:migrate', `--env=${env}`]);        
        console.log(`migrations is up to env: ${env}`);
        await spawn('./node_modules/.bin/sequelize', ['db:seed:all', `--env=${env}`]);
        console.log(`seeds inserted to env: ${env}`);
    } catch (err) {        
        console.log('*************************');
        console.log('Migration failed. Error:', err.message);
        process.exit(1);
    }

    process.exit(0);
})();