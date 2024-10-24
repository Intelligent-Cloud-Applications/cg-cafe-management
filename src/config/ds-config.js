export const dsDev = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-2',
        userPoolId: process.env.REACT_APP_DEV_USER_POOL_ID,
        identityPoolId: process.env.REACT_APP_DEV_IDENTITY_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_DEV_CLIENT_ID,
        oauth: {
            responseType: 'token',
        }
    },
    API: {
        endpoints: [
            {
                name: 'main',
                endpoint: 'https://8ul7gmv1vl.execute-api.us-east-2.amazonaws.com/dev',
                region: 'us-east-2',
            }
        ]
    }
}
