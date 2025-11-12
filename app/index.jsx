import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SongCard from '../components/SongCard';
import LineSongCard from '../components/LineSongCard';
import SearchBar from '../components/SearchBar';
import AddButton from '../components/AddButton';
import Switcher from '../components/Switcher';

export default function Page() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SongCard
                title="Fish on"
                singer="Till Lindemann"
                imgUrl="https://rammwiki.net/www/w/images/6/6f/Fish_On_cover.png"
                songUrl="https://www.youtube.com/watch?v=QVzjBPjJY7w"
            />
            <SongCard
                title="Wer weiß das schon"
                singer="Till Lindemann"
                imgUrl="https://www.nastylittleman.com/wp-content/uploads/2019/11/Screen-Shot-2019-10-31-at-1.09.54-PM.png"
                songUrl="https://www.youtube.com/watch?v=lZNb0E4vB5Y"
            />

            <LineSongCard
                title="Donaukinder"
                singer="Rammstein"
                imgUrl="https://rammwiki.net/www/w/images/6/6f/Fish_On_cover.png"
                songUrl="https://youtu.be/DGclueDSWD4?si=XBkzQ-Qx5s-fYIfe"
            />
            <LineSongCard
                title="Keine Lust"
                singer="Rammstein"
                imgUrl="https://i.scdn.co/image/ab67616d0000b273952d246fd1eac33a1a2c2603"
                songUrl="https://youtu.be/rmmMZcly25o?si=wytl56vTFb-aH6vS"
            />
            <SearchBar/>
            <AddButton/>
            <Switcher/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f5f5f5',
    },
});
