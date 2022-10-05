// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map((e) => e.director);
}

function getAllDirectorsClean(moviesArray) {
    const a = moviesArray.map((e) => e.director);
    return toArray(Set([...a]));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
        (e) => e.director == "Steven Spielberg" && e.genre.includes("Drama")
    ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let ret = 0;

    if (moviesArray.length != 0) {
        a = moviesArray
            .filter((record) => typeof record.score == "number")
            .reduce((sum, record) => sum + record.score, 0);

        ret = a / moviesArray.length;
    }

    return parseFloat(ret.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(
        moviesArray.filter((record) => record.genre.includes("Drama"))
    );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((curr, prev) =>
        prev.year > curr.year
            ? -1
            : prev.year == curr.year
                ? prev.title > curr.title
                    ? -1
                    : 1
                : 1
    );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray]
        .map((e) => e.title)
        .filter((e) => typeof e == "string")
        .sort((curr, prev) => (prev > curr ? -1 : 1))
        .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(
        (e) =>
            (e = {
                ...e,
                duration:
                    e.duration.match(/\d+min/g) != null
                        ? parseInt(e.duration.match(/\d+/g)[0]) * 60 + parseInt(e.duration.match(/\d+/g)[1]) * 1
                        : parseInt(e.duration.match(/\d+/g)[0]) * 60,
            })
    );
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const r = Object.values(
        moviesArray.reduce((scores, e) => {
            scores[e.year] = scores[e.year] || { year: e.year, sum: 0, items: 0, avg: 0, };
            scores[e.year].sum += e.score;
            scores[e.year].items += 1;
            scores[e.year].avg =
                (scores[e.year].sum * 100) / scores[e.year].items / 100;
            return scores;
        }, {})
    ).sort((curr, prev) =>
        prev.avg > curr.avg
            ? 1
            : prev.avg == curr.avg
                ? prev.year > curr.year
                    ? -1
                    : 1
                : -1
    );

    return moviesArray == ""
        ? null
        : `The best year was ${r[0].year} with an average score of ${r[0].avg}`;
}
