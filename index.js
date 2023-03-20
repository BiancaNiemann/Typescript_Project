var reviewTotalDisplay = document.querySelector('#reviews');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var recommendedProperties = document.querySelector('#propRecom');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var footer = document.getElementById('footer');
var button = document.querySelector('button');
var isLoggedIn;
var Permission;
(function (Permission) {
    Permission["ADMIN"] = "ADMIN";
    Permission["READ_ONLY"] = "READ_ONLY";
})(Permission || (Permission = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' ' + "Review" + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
function getTopTwoReviews(reviews) {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
}
//import {showReviewTotal , populateUser} from './utils'
var isOpen;
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
var you = {
    firstName: 'Bobby',
    lastName: "Hadz",
    permissions: Permission.ADMIN,
    isReturning: true,
    age: 42,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
var propObj = [{
        image: 'images/colombia-property.jpg',
        title: 'Columbian Shack',
        price: 45,
        location: {
            firstlineAdd: 'Shack 37',
            townCity: 'Bogota',
            postCode: 23843,
            country: 'Columbia',
        },
        contactDetails: [123456789, 'bob@bob.co.za'],
        availToRent: true,
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Cabin Italy',
        price: 30,
        location: {
            firstlineAdd: 'Cabin 52',
            townCity: 'Toskana',
            postCode: 12345,
            country: 'Italy',
        },
        contactDetails: [123456789, 'john@john.com'],
        availToRent: false,
    },
    {
        image: 'images/london-property.jpg',
        title: 'German Castle',
        price: 25,
        location: {
            firstlineAdd: 'Castle 2',
            townCity: 'Fussen',
            postCode: 80064,
            country: 'Germany',
        },
        contactDetails: [123456789, 'meg@meg.com'],
        availToRent: true,
    },
    {
        image: 'images/london-property.jpg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstlineAdd: 'Room 4',
            townCity: 'Malia',
            postCode: 45334,
            country: 'Malasia',
        },
        contactDetails: [+60349822083, 'lee34@gmail.com'],
        availToRent: false,
    }];
isLoggedIn = true;
var authorityStatus;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
propObj.forEach(function (item) {
    console.log(isLoggedIn);
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = item.title;
    var image = document.createElement('img');
    image.setAttribute('src', item.image);
    card.appendChild(image);
    showDetails(isLoggedIn, card, item.price);
    recommendedProperties.appendChild(card);
});
var count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        var topTwo = getTopTwoReviews(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', function () { return addReviews(reviews); });
var currentLocation = ['Germany', '9:15', 8];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + 'deg';
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
var yourMainProperty = new MainProperty('images/london-property.jpg', 'London House', [{
        name: "olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2022'
    }]);
var mainImageContainer = document.querySelector('.main-image');
var image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
