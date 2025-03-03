export function getMusicTitlesByYear(tracks) {
    if(!Array.isArray(tracks)) {
        throw new Error("Input data should be an array of music track objects.");
    }

    let titleByYear = {};
    
    tracks.forEach(track => {
        if(!track.title) {
            //throw new Error("Error: Invalid input. The 'title' property is missing for one or more tracks");
            return;
        }
        if(!track.artist) {
            //throw new Error("Error: Invalid input. The 'artist' property is missing for one or more tracks");
            return;
        }
        if(typeof track.year !== 'number') {
            //throw new Error("Error: Invalid input. The year is has a wrong format for one or more tracks.")
            return;
        }

        if(isNaN(track.year) || track.year <= 0) {
            //throw new Error(`Invalid year value: ${track.year}. Year must be a positive number.`);
            return;
        }

        if(!titleByYear[track.year]){
            titleByYear[track.year] = [];
        }
        titleByYear[track.year].push(track.title);
    });

    const titleByYearSorted = Object.keys(titleByYear)
    .sort((a, b) => a - b)  
    .reduce((outputArray, year) => {
        outputArray[year] = titleByYear[year].sort(); 
        return outputArray;
    }, {});

return titleByYearSorted;
} 
