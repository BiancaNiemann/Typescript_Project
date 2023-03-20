
const reviewTotalDisplay = document.querySelector('#reviews')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const recommendedProperties = document.querySelector('#propRecom')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const footer = document.getElementById('footer')
const button = document.querySelector('button')

let isLoggedIn: boolean

enum Permission {
    ADMIN = "ADMIN",
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser  {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}

interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstlineAdd: string;
        townCity: string;
        postCode: number | string;
        country: Country;
    };
    contactDetails: [number, string];
    availToRent: boolean;
}

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML =  value.toString() + ' ' + "Review" + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}


function makeMultiple(value: number) :string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}

//import {showReviewTotal , populateUser} from './utils'
let isOpen: boolean

const reviews :Review[] = [
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
]

const you = {
    firstName: 'Bobby',
    lastName: "Hadz",
    permissions: Permission.ADMIN,
    isReturning: true,
    age: 42,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

type Price = 45 | 30 | 25 | 35
type Country = 'Columbia' | 'Italy' | 'Germany' | 'Malasia'


const propObj :Property[] = [{
    image: 'images/colombia-property.jpg',
    title: 'Columbian Shack',
    price: 45,
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
}]

isLoggedIn = true
let authorityStatus : any

function showDetails(authorityStatus: boolean | Permission , element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }

 showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

 propObj.forEach(item => {
    console.log(isLoggedIn)
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = item.title
    const image = document.createElement('img')
    image.setAttribute('src', item.image)
    card.appendChild(image)
    showDetails(isLoggedIn, card, item.price )
    recommendedProperties.appendChild(card)
})

let count = 0
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number]= ['Germany', '9:15', 8]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + 'deg'

class MainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor(src : string, title : string, reviews: Review[]){
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}

let yourMainProperty = new MainProperty(
    'images/london-property.jpg', 
    'London House' , 
    [{
        name: "olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2022'
}])

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)