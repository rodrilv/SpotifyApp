import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie/es6';
import { getSpotifyToken, spotifySearch } from "../API/api";
import { Grid, TextField, FormControl, Select, MenuItem, InputLabel, Button } from "@mui/material"
import { Card } from "../components/Card"
import { ImageList } from "../components/ImageList"
import { Divider } from "@mui/material";
import { CardForArtist } from "../components/CardForArtist"
const cookies = new Cookies();
const altImage = "https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png"

export default function Home() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState({
        type: "...",
        query: null
    });
    const TYPES = ["all", "album", "artist", "track"];
    const token = cookies.get("token");


    const search = async () => {
        const data = await spotifySearch(searchQuery.type, searchQuery.query);
        setData(data);
        console.log(data)
    }

    useEffect(() => {
        if (token) getSpotifyToken();
    }, [token]);


    return (
        <Grid container marginTop={6}>
            <Grid item xs={6}>
                <TextField
                    id="outlined-search"
                    label="Search"
                    variant="outlined"
                    type="search"
                    onChange={(e) => setSearchQuery((current) => ({ ...current, query: e.target.value }))
                    }
                />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={searchQuery.type}
                        label="Age"
                        onChange={(e) => { setSearchQuery((current) => ({ ...current, type: e.target.value })) }}
                    >
                        {TYPES.map((element, idx) => (
                            <MenuItem key={idx} value={element}>{element}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={search}>
                    Search
                </Button>
            </Grid>
            <Grid
                container
                spacing={{ xs: 6, md: 3 }}
                columns={{ xs: 4, sn: 8, md: 12 }}
                padding={10}
            >
                {data?.tracks &&
                    data?.tracks?.items?.map((track, index) => (
                        <Grid item xs={2} md={4} key={index}>
                            <Card
                                name={track.name}
                                artist={track.artists[0].name}
                                image={track.album?.images[0]?.url}
                                url={track?.external_urls?.spotify}
                                audio={track?.preview_url}
                            />
                        </Grid>

                    ))}
            </Grid>
            <Grid
                container
                spacing={{ xs: 6, md: 3 }}
                columns={{ xs: 4, sn: 8, md: 12 }}
                padding={10}
            >
                {data?.artists &&
                    data?.artists?.items?.map((artist, index) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                            <CardForArtist
                                artist={artist.name}
                                image={artist?.images[0]?.url ?? altImage}
                                alt={artist.name}
                            />
                            <Divider />
                        </Grid>
                    ))}
            </Grid>
                {data?.albums &&
                    data?.albums?.items?.map((album, index) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                            <ImageList
                                image={album.images[0]?.url}
                                alt={album.name}
                                album={album.name}
                                artist={album.artists[0]?.name} />
                        </Grid>
                    ))}
        </Grid>




    );
}
//export default Home;
