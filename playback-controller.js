var songID = 0;

function initPlayback(lSongID){
    songID = lSongID;

    fetch('/templates/lyric-timings.template.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var lyrics = [];
        data.lyrics.forEach(lyricObj => {
            lyrics.push(lyricObj.lyric);
        });
        
        var lyricsHTML = "";
        lyrics.forEach(lyric => {
            lyricsHTML += "<h2>" + lyric + "</h2>";
        });
        lyricsHTML += "<p>"+data.credits+"</p>";

        document.getElementById("lyricsText").innerHTML = lyricsHTML;

        document.getElementById("playbackUI").style.display = "block";
        document.getElementById("songSelect").style.display = "none";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}