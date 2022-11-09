export class song {
    private _artist: string;
    private _name: string;
    constructor(artist: string, name: string) {
        this._artist = artist;
        this._name = name;
    }
    get artist(): string {
        return this._artist;
    }
    get name(): string {
        return this._name;
    }
    getString(): string {
        return this.artist+" - "+this.name;
    }
}

export class playlist {
    private _songs: song[];
    constructor() {
        this._songs=[];
    }
    addSong(song: song) {
        this._songs.push(song);
    }
    addSongs(...songs: song[]) {
        for (let song of songs) {
            this.addSong(song);
        }
    }
    getRandomSong(): song {
        let randIndex = Math.floor(Math.random()*this._songs.length);
        return this._songs[randIndex];
    }
}