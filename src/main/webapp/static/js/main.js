function spotify() {

//     var clientId = 'cf6ec28afc074e53ad0dfaef2bdf3d8c',
//         clientSecret = '4132495a9701405b91d1a28711ee5de1';
//
// // Create the api object with the credentials
//     var spotifyApi = new SpotifyWebApi({
//         clientId: clientId,
//         clientSecret: clientSecret
//     });
//
// // Retrieve an access token.
//     spotifyApi.clientCredentialsGrant().then(
//         function(data) {
//             console.log('The access token expires in ' + data.body['expires_in']);
//             console.log('The access token is ' + data.body['access_token']);
//
//             // Save the access token so that it's used in future calls
//             spotifyApi.setAccessToken(data.body['access_token']);
//         },
//         function(err) {
//             console.log('Something went wrong when retrieving an access token', err);
//         }
//     );

    // var request = require('request'); // "Request" library

    var client_id = 'client_id'; // Your client id
    var client_secret = 'client_secret'; // Your secret

// your application requests authorization
//     var authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         headers: {
//             'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//         },
//         form: {
//             grant_type: 'client_credentials'
//         },
//         json: true
//     };

    // request.post(authOptions, function(error, response, body) {
    //     if (!error && response.statusCode === 200) {
    //
    //         // use the access token to access the Spotify Web API
    //         var token = body.access_token;
    //         var options = {
    //             url: 'https://api.spotify.com/v1/users/jmperezperez',
    //             headers: {
    //                 'Authorization': 'Bearer ' + token
    //             },
    //             json: true
    //         };
    //         request.get(options, function(error, response, body) {
    //             console.log(body);
    //         });
    //     }
    // });

    fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
            'content-type' : 'application/x-www-form-urlencoded'
        },
        body:
            'grant_type=client_credentials'
        ,
        json: true
    })
        // .then(response => response.json())
        .then(responss => responss.json())
        .then(gggg => testvalami(gggg.access_token));


}

function testvalami(vmi) {
    fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${vmi}`
        }
    })
        .then(response => response.json())
        .then(({beats}) => {
            beats.forEach((beat, index) => {
                console.log(`Beat ${index} starts at ${beat.start}`);
            })
        });

}

spotify();