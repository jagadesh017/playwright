/**
 * Cucumber Test Runner for JavaScript/Node.js
 * Runs all feature files with Cucumber and generates HTML reports
 */

const { execFile } = require('child_process');
const path = require('path');

// Configure Cucumber options
const cucumberOptions = [
    'features/FacebookSignup.feature',
    '--require',
    'features/step_definitions/*.js',
    '--format',
    'progress-bar',
    '--format',
    'html:cucumber-report.html',
];

console.log('🎬 Starting Cucumber Test Runner...\n');

// Use execFile without shell for better security
const cucumber = execFile('npx', ['cucumber-js', ...cucumberOptions], {
    cwd: path.join(__dirname, '../..'),
    stdio: 'inherit',
});

// Handle process completion
cucumber.on('close', (code) => {
    console.log('\n✅ Cucumber execution completed!');
    console.log(`📊 Exit code: ${code}`);

    if (code === 0) {
        console.log('✓ All tests passed!');
        console.log('📋 Report: cucumber-report.html');
    } else {
        console.log('✗ Some tests failed!');
    }

    process.exit(code);
});

// Handle errors
cucumber.on('error', (error) => {
    console.error('❌ Error running Cucumber:', error);
    process.exit(1);
});
