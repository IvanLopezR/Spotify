const endpoint = 'https://accounts.spotify.com/authorize';
const clientID = process.env.CLIENT_ID;
const redirectURI = 'http://localhost:3000/menu'
const scopes = ["user-read-private","user-read-email","user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state","playlist-modify-private","playlist-modify-public"];

const loginURL = () => {
    return `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&show_dialog=true`;
}

module.exports = {
    loginURL
}