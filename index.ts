// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number

//NOt using utils.js as import not working - will fix later
const reviewTotalDisplay = document.querySelector('#reviews')
const recommendedProperties = document.querySelector('#propRecom')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const footer = document.getElementById('footer')

enum Permission {
    ADMIN = "ADMIN",
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser  {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}


function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

//import {showReviewTotal , populateUser} from './utils'
let isOpen: boolean

const reviews :{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[] = [
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
        date: '27-03-2021'
    },
]

const you = {
    firstName: 'Bobby',
    lastName: "Hadz",
    permissions: Permission.ADMIN,
    isReturning: true,
    age: 42,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const propObj :{
    image: string;
    title: string;
    price: number;
    location: {
        firstlineAdd: string;
        townCity: string;
        postCode: number;
        country: string;
    };
    contactDetails: [number, string];
    availToRent: boolean;
}[] = [{
    image: 'images/colombia-property.jpg',
    title: 'Columbian Shack',
    price: 42,
    location: {
        firstlineAdd: 'Shack 37',
        townCity: 'Bogota',
        postCode: 23843,
        country: 'Columbia',
    },
    contactDetails: [ 123456789,'bob@bob.co.za'],
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
    contactDetails: [123456789, 'john@john.com'],
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
    contactDetails: [123456789, 'meg@meg.com'],
    availToRent: true,
}]

 propObj.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = item.title
    const image = document.createElement('img')
    image.setAttribute('src', item.image)
    card.appendChild(image)
    recommendedProperties.appendChild(card)
})

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

let currentLocation: [string, string, number]= ['Germany', '9:15', 8]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + 'deg'

console.log(currentLocation[0])