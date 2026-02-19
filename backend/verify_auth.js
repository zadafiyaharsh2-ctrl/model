// using native fetch

const BASE_URL = 'http://localhost:5000/api/auth';

async function testAuth() {
    const testUser = {
        name: 'Test User',
        email: `test${Date.now()}@example.com`,
        password: 'password123'
    };

    console.log('--- Testing Signup ---');
    try {
        const signupRes = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testUser)
        });
        const signupData = await signupRes.json();
        console.log('Response Status:', signupRes.status);
        console.log('Response Data:', signupData);

        if (signupRes.ok && signupData.token) {
            console.log('✅ Signup Successful');
        } else {
            console.log('❌ Signup Failed');
        }

        console.log('\n--- Testing Login ---');
        const loginRes = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: testUser.email,
                password: testUser.password
            })
        });
        const loginData = await loginRes.json();
        console.log('Response Status:', loginRes.status);
        console.log('Response Data:', loginData);

        if (loginRes.ok && loginData.token) {
            console.log('✅ Login Successful');
        } else {
            console.log('❌ Login Failed');
        }

    } catch (error) {
        console.error('Error during test:', error);
    }
}

testAuth();
