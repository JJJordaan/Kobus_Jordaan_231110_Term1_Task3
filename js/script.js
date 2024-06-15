let qty = 0;

let Mars ={
    title: "The Classic Mars Experience",
    shuttle: "The Opulence",
    orgPrice: 50000.00,
    quantity: 1,
    discount: 50.0,
    Reviews: 36,
    sku: "SS001",
    tags: ["Mars","Luxury","Sale"],
    date: "16 June- 19 July",
    rating: 4.5,
    price: orgPrice - (orgPrice/100*discount),
    total : quantity * price,
    description: "Embark on a Mars vacation: red deserts, ancient relics, and towering <br> canyons await. Enjoy low-gravity hiking, rover trips to Olympus Mons, and <br> stargazing under Phobos and Deimos. Unforgettable adventures beckon <br> on the rust-colored landscapes of the Red Planet."
}

let Neptune ={
    title: "Neptune's Cosmic Dive",
    shuttle: "The Voyager",
    orgPrice: 45000.00,
    quantity: 1,
    discount: 0.0,
    Reviews: 24,
    sku: "SS405",
    tags: ["Neptune","Commercial","Gourmet Experience"],
    date: "4 April - 28 March",
    rating: 4.0,
    price: orgPrice - (orgPrice/100*discount),
    total : quantity * price,
    description: "Embark on a voyage to Neptune aboard the 'Neptune Voyager.' Witness <br> surreal vistas of swirling clouds and rings. Experience weightlessness and <br> explore frigid oceans. Engage in thrilling spacewalks, observe celestial <br> phenomena, and savor gourmet space cuisine. An unforgettable <br> adventure awaits, blending luxury with cosmic exploration. "
}

let Jupiter ={
    title: "The Giant's Journey",
    shuttle: "The Odyssey",
    orgPrice: 45000.00,
    quantity: 1,
    discount: 0.0,
    Reviews: 48,
    sku: "SS606",
    tags: ["Jupiter","Luxury","Adventure"],
    date: "15 June - 30 July",
    rating: 4.5,
    price: orgPrice - (orgPrice/100*discount),
    total : quantity * price,
    description: "Embark on a Jupiter voyage aboard the 'Jupiter Odyssey.' Witness its <br> majestic storms and swirling atmosphere. Dive into metallic hydrogen <br> oceans. Explore its moons, each a world unto itself. Engage in gravity <br> surfing, comet chasing, and space excursions. Experience cosmic wonder <br> in luxury, blending exploration with adventure."
}

let Saturn ={
    title: "Ring Around Saturn",
    shuttle: "The Explorer",
    orgPrice: 40000.00,
    quantity: 1,
    discount: 0.0,
    Reviews: 16,
    sku: "SS333",
    tags: ["Saturn","Luxury","Adventure"],
    date: "4 April - 28 March",
    rating: 5.0,
    price: orgPrice - (orgPrice/100*discount),
    total : quantity * price,
    description: "Embark on a thrilling voyage to Saturn aboard the 'Saturn Explorer.' <br> Marvel at its iconic rings and turbulent storms. Explore its diverse moons, <br> from icy Enceladus to mysterious Titan, with activities including rover <br> expeditions and cave exploration. Experience the wonders of the cosmos <br> amidst luxurious accommodations, where the thrill of discovery <br> intertwines seamlessly with the excitement of adventure. "
}

let Uranus ={
    title: "Uranus Uncharted",
    shuttle: "The Endeavor",
    orgPrice: 50000.00,
    quantity: 1,
    discount: 0.0,
    Reviews: 12,
    sku: "SS735",
    tags: ["Uranus","Workshop","Adventure"],
    date: "16 June - 19 July",
    rating: 0.0,
    orgPrice: 0.0,
    price: orgPrice - (orgPrice/100*discount),
    total : quantity * price,
    description: "Embark on a cosmic adventure to Uranus with our 'Uranus Unveiled' tour. <br> Explore its icy atmosphere and captivating moons. Experience thrilling <br> zero-gravity excursions, witness mesmerizing auroras, and immerse <br> yourself in celestial photography workshops. With luxury <br> accommodations and expert guides, discover the wonders of Uranus in a <br> journey of a lifetime."
}

let Moon ={
    title: "Moonlight",
    shuttle: "The Voyager",
    orgPrice: 15000.00,
    quantity: 1,
    discount: 0.0,
    Reviews: 43,
    sku: "SS451",
    tags: ["Moon","Commercial","Romantic"],
    date: "5 August - 12 August",
    rating: 4,
    price: orgPrice - (orgPrice/100*discount),
    total : quantity * price,
    description: "Experience the ultimate lunar getaway with our 'Moonlight Meander' <br> package. Depart Earth's atmosphere aboard the 'Celestial Cruiser' for a <br> short but unforgettable journey to the Moon. Enjoy lunar walks, <br> breathtaking views of Earthrise, and stargazing under the moon's serene <br> glow. Immerse yourself in luxury accommodations amidst the tranquility <br> of space."
}




function SearchFun() {

    console.log('Search Function Run')

    let arrPlanets = [
        'Mars',
        'Neptune',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Moon'
    ]

    let sSearchInput = document.getElementById('Search');


    if (sSearchInput) // if search input id exists,
        {
            console.log('ID Found');

            for (let i = 0; i <= arrPlanets.length; i++) { //for loop to look into every array
                if (arrPlanets[i] != sSearchInput.innerHTML) { //if array doesn't match search criteria
                     document.getElementById(arrPlanets[i]).classList.remove; //then remove the item from website
                }
                else {
                    //Show planet in flights
                }
            }
            }            
    else {              // if search input id doesn't exist,

        alert('Error 404, class does not exist')

        }
    
            
}



function funMinus(value, inID) {
    let totalOrders = 0;

    console.log('Value decreaased');

    if (totalOrders >= 1) {
        totalOrders--
    }

    if (value >= 1) {
        if (document.getElementById(inID)) { //if input into inID exists as an ID
            document.getElementById(inID).value = value--; //Increment the input value of that
        }
    }
}

function funPlus(value, inID) {
    let totalOrders = 0;

    if (totalOrders >= 0) {
        totalOrders++
    }

    console.log('Value increased');
    console.log(totalOrders);

    if (value >= 0) {
        if (document.getElementById(inID)) { //if input into inID exists as an ID
            document.getElementById(inID).value = value++; //Increment the input value of that 
        }
    }
}

document.getElementById('cartsModal').innerHTML = totalOrders.value;