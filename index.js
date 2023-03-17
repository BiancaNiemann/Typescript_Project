// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
//NOt using utils.js as import not working - will fix later
var reviewTotalDisplay = document.querySelector('#reviews');
var recommendedProperties = document.querySelector('#propRecom');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
//import {showReviewTotal , populateUser} from './utils'
var isOpen;
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
var you = {
    firstName: 'Bobby',
    lastName: "Hadz",
    isReturning: true,
    age: 42,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
var propObj = [{
        image: 'images/colombia-property.jpg',
        title: 'Columbian Shack',
        price: 42,
        location: {
            firstlineAdd: 'Shack 37',
            townCity: 'Bogota',
            postCode: 23843,
            country: 'Columbia',
        },
        contactDetails: 'bob@bob.co.za',
        availToRent: true,
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Cabin Italy',
        price: 56,
        location: {
            firstlineAdd: 'Cabin 52',
            townCity: 'Toskana',
            postCode: 12345,
            country: 'Italy',
        },
        contactDetails: 'john@john.com',
        availToRent: false,
    },
    {
        image: 'images/london-property.jpg',
        title: 'German Castle',
        price: 100,
        location: {
            firstlineAdd: 'Castle 2',
            townCity: 'Fussen',
            postCode: 80064,
            country: 'Germany',
        },
        contactDetails: 'meg@meg.com',
        availToRent: true,
    }];
propObj.forEach(function (item) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = item.title;
    var image = document.createElement('img');
    image.setAttribute('src', item.image);
    card.appendChild(image);
    recommendedProperties.appendChild(card);
});
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
