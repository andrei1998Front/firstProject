"use strict";

let numberOfFilms;


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?").trim();

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?").trim();
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let film = prompt('Один из последних просмотренных фильмов?').trim(),
            rate = prompt('На сколько оцените его?').trim();
    
        if (!film || !rate || film.length > 50) {
            i--;
            continue;
        } 
    
        personalMovieDB.movies[film] = rate;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!')
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) console.log(personalMovieDB);
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push( prompt(`Ваш любимый жанр под номером ${i}`).trim() );
    }
}

writeYourGenres();
    
