// Song Filter
// Send Feedback
// Suppose you're working on a music app, and you have an array of objects representing different songs that are available to play on the app.



// Objectives
// You need to write a function that takes in an array of songs and returns a new array that contains only songs of a specific genre, and then you need to retrieve all the songs whose duration is longer than the specified duration.
// Write a function, "filterSongs", which accepts two arguments; an array of all songs and a filter object with the genre and duration constraint. 
// The function should work as follows:
// - Takes the all songs array and the filter object "filters" as arguments.
// - Applies a filter to limit the songs to the given genre only.
// - Then, apply a filter to limit the songs to the given duration and returns the filtered results.

// Function signature:

//     function filterSongs(songs: Array, filters: Array;
// where Song class has the following attributes:



// title: string

// artist: string

// genre: string

// duration: number
// The filter object is the following shape:

//     {
//     genre: string, // desired genre to filter on
//     duration: number // minimum duration required to match
//     }

// question  



function filterSongs(songs, filters) {
    // Use the filter method to apply genre and duration filters
    const filteredSongs = songs.filter((song) => {
      // Check if the song's genre matches the desired genre
      const isGenreMatch = song.genre === filters.genre;
  
      // Check if the song's duration is longer than the minimum required duration
      const isDurationMatch = song.duration > filters.duration;
  
      // Return true if both genre and duration conditions are met
      return isGenreMatch && isDurationMatch;
    });
  
    return filteredSongs;
  }
  
  // Sample songs and filters
  const songs = [
    { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
    { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
    // ... (other songs)
  ];
  
  const filters = { genre: "Rock", duration: 350 };
  
  // Call the function to get filtered songs
  const filteredSongs = filterSongs(songs, filters);
  
  // Output the filtered songs
  console.log(filteredSongs);
  