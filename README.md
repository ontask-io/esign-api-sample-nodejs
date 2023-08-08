[<img src="https://ontaskio.wpenginepowered.com/wp-content/uploads/2022/09/Logo-Product-Tabs.svg" width="600"/>](https://www.ontask.io/solutions/ontask-api/)

# OnTask eSignature API Node.js Sample

## Requirements

- [Node.js 16.x](https://www.python.org/) or higher

- You will first need to [sign up for an API developer account](https://app.ontask.io/signup?source=eSigApi) with OnTask and retrieve your API key.

- Within the code of `example-email.js` and `example-link.js` in the `root` folder insert the API key  you received after creating your account  in the `apiKey` variable within each page.

- You will need to install use `npm install` to install the projects dependencies.

## Samples

There are two examples included with the package which can be found in the root project folder:

- `example-email.js` - will send the signature request to the email address set in the `emailSigner` variable and then send the completed document to the email address configured in the `emailFinalized` variable.

Update these to your liking and then use `npm run email` to execute the sample.  

- `example-link.js` will return a link for you to provide the signer of the document, and once completed send the completed document to the email address configured in the `emailFinalized` variable.

To run the sample update the variables above and use `npm run link`.

## About OnTask

Building secure, compliant eSignature capabilities into your application takes up valuable time and development resources. Fortunately, we've already done all that hard work for you. With [OnTask API](https://www.ontask.io/solutions/ontask-api/), you can bridge the gaps between systems by integrating our proven eSignature and forms workflow functionality into your software. OnTask is reliable and secure; and takes the guesswork out of compliance by meeting regulations for HIPAA, SOC 2, and more. 

We've got all the documentation samples you need to get up and running within a matter of minutes so you can spend more time working on the innovative features that will make your application a success.

Choose from a library of templates or create your own workflows using flexible conditional logic. OnTask's intuitive, easy-to-navigate interface allows you to start solving problems right away without weeks of tedious onboarding and complex integrations.
