var songs = [];

function activateSongSelect(){
    fetch('/templates/songindex.template.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            songs = data["songs"];
            createSongTable();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function createSongTable(){
    console.log(songs.length+" songs loaded!");

    songsTableHTML = "<tr><th>Cover Art</th><th>Song</th><th>Artist</th><th>Play</th></tr>";

    for (var i = 0; i < songs.length; i++){
        songsTableHTML += "<tr><td><img width=64px height=64px src='" + songs[i]["coverArtURL"] + "'></td><td>" + songs[i]["title"] + "</td><td>" + songs[i]["artist"] + "</td><td><button onclick='initPlayback(" + i + ")'>Play</button></td></tr>";
    }

    document.getElementById("songsTable").innerHTML = songsTableHTML;

    document.getElementById("songSelect").style.display = "block";
    document.getElementById("initialLoading").style.display = "none";
}