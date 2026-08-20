import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, sendContactMessage } from '../src/components/Contact.js';

test('validateContactForm returns null for a complete message', () => {
    const result = validateContactForm({
        name: 'Deepak',
        email: 'deepak@example.com',
        subject: 'Opportunity',
        message: 'I would love to connect.'
    });

    assert.equal(result, null);
});

test('validateContactForm detects missing fields', () => {
    const result = validateContactForm({
        name: 'Deepak',
        email: '',
        subject: 'Opportunity',
        message: 'I would love to connect.'
    });

    assert.equal(result, 'Please fill out all fields before sending.');
});

test('sendContactMessage resolves successfully for valid inputs', async () => {
    const response = await sendContactMessage({
        name: 'Deepak',
        email: 'deepak@example.com',
        subject: 'Opportunity',
        message: 'I would love to connect.'
    });

    assert.deepEqual(response, { success: true });
});
