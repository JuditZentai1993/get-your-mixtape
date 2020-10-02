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
    let allPlaylists = playlists.playlists.items;
    let playListTitles = "";
    for(let playlist of allPlaylists) {
        let playListTitleButton = `<li type="button" class="playlist-button btn btn-secondary btn-lg" id="${playlist.id}">${playlist.name}</li>`;
        playListTitles += playListTitleButton;
    }
    let playListTitlesBox = document.querySelector(".playlist-titles");
    if (playListTitles.length > 0) {
        playListTitlesBox.innerHTML = playListTitles;
    } else {
        playListTitlesBox.innerHTML = `<p><strong>Sorry, we weren't able to get a playlist related to your nasty word!&#128169;</strong></p>`;
    }
    for (let item of playListTitlesBox.children) {
        item.addEventListener("click", showMediaPlayer);
    }

}

function showMediaPlayer(e) {
    let playListContent = `<iframe src="https://open.spotify.com/embed/playlist/${e.currentTarget.id}"
        width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    let mediaPlayer = document.querySelector(".playlist");
    mediaPlayer.innerHTML = playListContent;

}

addButtonActionToSearch();