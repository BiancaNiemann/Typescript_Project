// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number

//NOt using utils.js as import not working - will fix later
const reviewTotalDisplay = document.querySelector('#reviews')
const recommendedProperties = document.querySelector('#propRecom')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
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
    loyaltyUser: boolean;
    date: string;
}[] = [
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
]

const you :{
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    firstName: 'Bobby',
    lastName: "Hadz",
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
    contactDetails: string;
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