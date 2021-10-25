const userID = (token) => {
    const data = {
        endpoint: 'https://api.spotify.com/v1/me',
        atributes: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    }
    return data;
}

const userLists = (token) => {
    const data = {
        endpoint: 'https://api.spotify.com/v1/me/playlists',
        atributes: {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    }
    return data;
}

const createNewList = (name, description, userId, token) => {
    const data = {
        endpoint: `https://api.spotify.com/v1/users/${userId}/playlists`,
        atributes: {
            method: 'POST',
            data: {
                'name': name,
                'description': description,
                'public': false
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    }
    return data;
}

const search = (name, type, token) => {
    const data = {
        endpoint: `https://api.spotify.com/v1/search?q=${name}&type=${type}&market=ES`,
        atributes: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    }
    return data;
}

const playlistTracks = (id, token) => {
    const data = {
        endpoint: `https://api.spotify.com/v1/playlists/${id}/tracks`,
        atributes: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    }
    return data;
}

const addTrackToPlaylist = (playListId, trackUri, token) => {
    const data = {
        endpoint: `https://api.spotify.com/v1/playlists/${playListId}/tracks?uris=${trackUri}`,
        atributes: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    }
    return data;
}

module.exports = {
    userID,
    userLists,
    createNewList,
    search,
    playlistTracks,
    addTrackToPlaylist
}