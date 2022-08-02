
// Get your free API Key at: https://www.ontask.io/solutions/ontask-api/
// Full OnTask API Documentation: https://docs.ontask.io/#overview
const fs = require('fs');
const fetch = require('node-fetch');

const ontaskUrl = 'https://app.ontask.io/api/v2';
const apiKey = 'INSERT-API-KEY';
const emailSigner = 'signer@example.com'
const emailFinalized = "completed@example.com";

// Upload the file and get a documentid to pass to create a signature endpoint
// https://docs.ontask.io/#upload
const uploadSampleDocument = async () => {

    const readStream = fs.createReadStream('./sample-files/sample.pdf');

    const response = await fetch(`${ontaskUrl}/documents`, {
        method: 'POST',
        headers: {
            'Authorization': apiKey,
            'Content-Type': 'application/pdf'
        },
        body: readStream
    });

    const { documentId } = await response.json();
    return documentId;
}

// Call /signature endpoint to start signature process
// https://docs.ontask.io/#signature-api
const startSignature = async (documentId) => {

    const requestBody = JSON.stringify({
        documents: [ { documentId: documentId } ],
        testMode: true,
        signers: [
            {
                label: 'John Smith',
                contactMethod: [
                    {
                        type: 'email',
                        email: emailSigner
                    }
                ]
            }
        ],
        onSignaturesFinalized: [
            {
                type: 'email',
                email: emailFinalized
            }
        ]
    });

    const response = await fetch(`${ontaskUrl}/signatures`, {
        method: 'POST',
        headers: {
            'Authorization': apiKey,
            'Content-Type': 'application/json'
        },
        body: requestBody
    });

    const signatureResponse = await response.json();
    return signatureResponse;
}

(async () => {
    console.log('\n##### Example Starting #####')

    const documentId = await uploadSampleDocument();
    console.log(`\nUploaded sample file and received a documentId of ${documentId}`)

    const response = await startSignature(documentId);
    console.log(`\nSignature request sent, please check email at: ${emailSigner}`)
    console.log(`Once signed the final document will be sent to: ${emailFinalized}\n`)

    console.log('##### Example Complete #####\n')
})();
