console.log('Welcome to Spotify');
//initialized the variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let songtitle = document.getElementById('songtitle');
let gif = document.getElementById('gif');
let currentDurationElement = document.getElementById('currentDuration');
let totalDurationElement = document.getElementById('totalDuration');

let songs = [
    { songNames: "Saude Baazi", filePath: "mp3/0.mp3", coverPath: "covers/image.jpg", },
    { songNames: "Tum Se Hi", filePath: "mp3/1.mp3", coverPath: "covers/image1.jpg" },
    { songNames: "Phela Pyaar", filePath: "mp3/2.mp3", coverPath: "covers/image2.jpg" },
    { songNames: "Tum Hi Ho", filePath: "mp3/3.mp3", coverPath: "covers/image3.jpg" },
    { songNames: "Kabhii Tumhe", filePath: "mp3/4.mp3", coverPath: "covers/image4.jpg" },
    { songNames: "Hai Rama", filePath: "mp3/5.mp3", coverPath: "covers/image5.jpg" },
    { songNames: "Labon Ko", filePath: "mp3/6.mp3", coverPath: "covers/image6.jpg" },
    { songNames: "Tu Jo Mila", filePath: "mp3/7.mp3", coverPath: "covers/image7.jpg" },
    { songNames: "Jee Le Zara", filePath: "mp3/8.mp3", coverPath: "covers/image8.jpg" },
    { songNames: "Tu Jane Na", filePath: "mp3/9.mp3", coverPath: "covers/image9.jpg" },
    { songNames: "Pehli Nazar Main", filePath: "mp3/10.mp3", coverPath: "covers/image10.jpg" },
    { songNames: "Maahi Ve", filePath: "mp3/11.mp3", coverPath: "covers/image11.jpg" },
    { songNames: "Lover", filePath: "mp3/12mp3", coverPath: "covers/image12.jpg" },
    { songNames: "Tu Mujhe Soch kabhi", filePath: "mp3/13.mp3", coverPath: "covers/image13.jpg" },
    { songNames: "Bol Do Na Zara", filePath: "mp3/14.mp3", coverPath: "covers/image14.jpg" },
    { songNames: "tera Mera Rishta", filePath: "mp3/15.mp3", coverPath: "covers/image15.jpg" },
    { songNames: "Te Amo", filePath: "mp3/16.mp3", coverPath: "covers/image16.jpg" },
    { songNames: "With you", filePath: "mp3/17.mp3", coverPath: "covers/image17.jpg" },
    { songNames: "Galliyan Returns", filePath: "mp3/18.mp3", coverPath: "covers/image18.jpg" },
    { songNames: "Humraah", filePath: "mp3/19.mp3", coverPath: "covers/image19.jpg" },
    { songNames: "I L0ve You ", filePath: "mp3/21.mp3", coverPath: "covers/image20.jpg" },
    { songNames: "Tum Ho", filePath: "mp3/0.mp3", coverPath: "covers/image21.jpg" },
    { songNames: "Mere Liye", filePath: "mp3/22.mp3", coverPath: "covers/image22.jpg" },
    { songNames: "Jab Tak", filePath: "mp3/23.mp3", coverPath: "covers/image23.jpg" },
    { songNames: "Challa", filePath: "mp3/24.mp3", coverPath: "covers/image24.jpg" },
    { songNames: "Saans", filePath: "mp3/25.mp3", coverPath: "covers/image25.jpg" },
    { songNames: "Hamsafar", filePath: "mp3/26.mp3", coverPath: "covers/image26.jpg" },
    { songNames: "Samjhawan", filePath: "mp3/27.mp3", coverPath: "covers/image27.jpg" },
    { songNames: "Ambarsariya", filePath: "mp3/28.mp3", coverPath: "covers/image28.jpg" },
    { songNames: "Dil Diyan Gallan", filePath: "mp3/29.mp3", coverPath: "covers/image29.jpg" },
    { songNames: "Dil Royi Jaye", filePath: "mp3/30.mp3", coverPath: "covers/image30.jpg" },
    { songNames: "Afreen Afreen", filePath: "mp3/31.mp3", coverPath: "covers/image31.jpg" },
    { songNames: "Afreen Afreen", filePath: "mp3/32.mp3", coverPath: "covers/image32.jpg" },
    { songNames: "Aayat", filePath: "mp3/33.mp3", coverPath: "covers/image33.jpg" },
    { songNames: "Shiddat-Title Track", filePath: "mp3/34.mp3", coverPath: "covers/image34.jpg" },
    { songNames: "Jug Jug Jeeve", filePath: "mp3/35.mp3", coverPath: "covers/image35.jpg" },
    { songNames: "Jannatein Kahan", filePath: "mp3/36.mp3", coverPath: "covers/image36.jpg" },
]

//audioElement.play();


//handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100
})


// play for cards and songs
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemsplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })
}

Array.from(document.getElementsByClassName('songItemsplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `mp3/${songIndex}.mp3`;
        songtitle.innerText = songs[songIndex].songNames;//for songs name and artist name in seekbar
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
});

//forward
document.getElementById('forward').addEventListener('click', () => {
    if (songIndex >= 36) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `mp3/${songIndex}.mp3`;
    songtitle.innerText = songs[songIndex].songNames;//for songs name and artist name in seekbar
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

//backward
document.getElementById('backward').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `mp3/${songIndex}.mp3`;
    songtitle.innerText = songs[songIndex].songNames;//for songs name and artist name in seekbar
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

//timer
