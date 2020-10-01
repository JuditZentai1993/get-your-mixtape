function addButtonActionToSearch() {
    document.getElementById("search-button").addEventListener('click',getUserInput);
    document.getElementById("search-field").addEventListener("keyup", function (event) {
        if (event.keyCode===13) {
            event.preventDefault();
            document.getElementById("search-button").click();
        }
    })
}

function getUserInput() {
    let userInput = document.getElementById("search-field").value;
    userInput = userInput.replace(" ", "%20");
    authorizationForAccessingSpotifyAPI(userInput);
}

function authorizationForAccessingSpotifyAPI(userInput) {
    var client_id = 'cf6ec28afc074e53ad0dfaef2bdf3d8c'; // Your client id
    var client_secret = '4132495a9701405b91d1a28711ee5de1'; // Your secret

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
        .then(response => response.json())
        .then(result => showPlaylistMatchingKeyword(result.access_token, userInput));

}

function showPlaylistMatchingKeyword(accessToken, keyword) {
    fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=playlist`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(playlists => showPlayLists(playlists));
}

function showPlayLists(playlists) {
    document.querySelector(".playlist").innerHTML = "";
    console.log(playlists);
    let allPlaylists = playlists.playlists.items;
    console.log(allPlaylists);
    let playListTitles = "";
    for(let playlist of allPlaylists) {
        let playListTitleButton = `<li type="button" class="playlist-button btn btn-outline-secondary btn-lg" id="${playlist.id}">${playlist.name}</li>`;
        playListTitles += playListTitleButton;
    }
    let playListTitlesBox = document.querySelector(".playlist-titles");
    playListTitlesBox.innerHTML = playListTitles;
    for (let item of playListTitlesBox.children) {
        item.addEventListener("click", showMediaPlayer);
    }
    // let mediaPlayer = document.querySelector(".playlist");
    // if (mediaPlayer.classList.contains("show-hidden-content")) {
    //     mediaPlayer.classList.replace("show-hidden-content", "hide-content");
    // }

}

function showMediaPlayer(e) {
    let playListContent = `<iframe src="https://open.spotify.com/embed/playlist/${e.currentTarget.id}"
        width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    let mediaPlayer = document.querySelector(".playlist");
    mediaPlayer.innerHTML = playListContent;
    // mediaPlayer.classList.replace("hide-content", "show-hidden-content");

}

// function showPlaylist2(keyword) {
//     fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${keyword}`
//         }
//     })
//         .then(response => response.json())
//         .then(({beats}) => {
//             beats.forEach((beat, index) => {
//                 console.log(`Beat ${index} starts at ${beat.start}`);
//             })
//         });

// }

addButtonActionToSearch();