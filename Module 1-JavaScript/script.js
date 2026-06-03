  <script>

        /* Exercise 5 */
        function submitForm() {
            document.getElementById("result").value =
            "Registration Submitted Successfully!";
        }

        /* Exercise 6 */
        function validatePhone() {
            let phone = document.getElementById("phone").value;

            if(phone.length != 10){
                alert("Enter a valid 10 digit phone number");
            }
        }

        function showFee() {
            let event = document.getElementById("eventType").value;
            let fee = "";

            if(event=="Music")
                fee="₹200";
            else if(event=="Sports")
                fee="₹300";
            else if(event=="Workshop")
                fee="₹500";
            else
                fee="₹0";

            document.getElementById("fee").innerHTML =
            "Event Fee : " + fee;
        }

        function confirmRegistration(){
            alert("Thank you for registering!");
        }

        function enlargeImage(img){
            img.style.width="350px";
            img.style.height="220px";
        }

        function countChars(){
            let count =
            document.getElementById("feedback").value.length;

            document.getElementById("charCount").innerHTML =
            "Characters : " + count;
        }

        /* Exercise 7 */
        function videoReady(){
            document.getElementById("videoMsg").innerHTML =
            "Video Ready To Play";
        }

        window.onbeforeunload = function(){
            return "Form is not completed. Leave page?";
        }

        /* Exercise 8 */
        function savePreference(){
            let value =
            document.getElementById("eventType").value;

            localStorage.setItem("preferredEvent", value);
        }

        function loadPreference(){
            let saved =
            localStorage.getItem("preferredEvent");

            if(saved){
                document.getElementById("eventType").value = saved;
            }
        }

        function clearPreferences(){
            localStorage.clear();
            sessionStorage.clear();
            alert("Preferences Cleared");
        }

        /* Exercise 9 */
        function findLocation(){

            let options = {
                enableHighAccuracy:true,
                timeout:5000
            };

            navigator.geolocation.getCurrentPosition(
                success,
                error,
                options
            );
        }

        function success(position){
            document.getElementById("location").innerHTML =
            "Latitude : " + position.coords.latitude +
            "<br>Longitude : " + position.coords.longitude;
        }

        function error(err){
            document.getElementById("location").innerHTML =
            "Error : " + err.message;
        }

    
/* ================= EXERCISES 1-12 ================= */

/* Exercise 1 */
console.log("Welcome to the Community Portal");
window.addEventListener("load", () => {
    alert("Community Portal Loaded Successfully!");
});

/* Exercise 2 */
const eventName = "Community Music Fest";
const eventDate = "2026-06-15";
let availableSeats = 50;
console.log(`Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`);

/* Exercise 3 */
const eventsList = [
    {name:"Music Fest", seats:20, upcoming:true, category:"Music"},
    {name:"Sports Meet", seats:0, upcoming:true, category:"Sports"},
    {name:"Old Workshop", seats:10, upcoming:false, category:"Workshop"}
];

eventsList.forEach(ev => {
    if(ev.upcoming && ev.seats > 0){
        console.log("Available Event:", ev.name);
    }
});

function safeRegister(eventObj){
    try{
        if(eventObj.seats <= 0) throw new Error("No seats available");
        eventObj.seats--;
        console.log(`${eventObj.name} registered successfully`);
    }catch(err){
        console.error(err.message);
    }
}

/* Exercise 4 */
function addEvent(event){
    eventsList.push(event);
}

function registerUser(eventObj){
    safeRegister(eventObj);
}

function filterEventsByCategory(category, callback){
    const result = eventsList.filter(e => e.category === category);
    callback(result);
}

function registrationCounter(){
    let total = 0;
    return function(){
        total++;
        return total;
    };
}
const musicRegistrations = registrationCounter();

/* Exercise 5 */
class CommunityEvent{
    constructor(name, category, seats){
        this.name = name;
        this.category = category;
        this.seats = seats;
    }
}
CommunityEvent.prototype.checkAvailability = function(){
    return this.seats > 0;
};

const sampleEvent = new CommunityEvent("Baking Workshop","Workshop",25);
Object.entries(sampleEvent).forEach(([k,v]) => console.log(k,v));

/* Exercise 6 */
addEvent({name:"Live Concert", category:"Music", seats:40, upcoming:true});
const musicEvents = eventsList.filter(e => e.category === "Music");
const displayCards = eventsList.map(e => `Workshop on ${e.name}`);

/* Exercise 7 */
function renderEvents(){
    const container = document.querySelector("#eventCards");
    if(!container) return;

    container.innerHTML = "";
    eventsList.forEach((event,index)=>{
        const card = document.createElement("div");
        card.innerHTML = `
            <h4>${event.name}</h4>
            <p>Category: ${event.category}</p>
            <p>Seats: <span id="seat-${index}">${event.seats}</span></p>
            <button onclick="handleRegister(${index})">Register</button>
        `;
        container.appendChild(card);
    });
}

/* Exercise 8 */
function handleRegister(index){
    registerUser(eventsList[index]);
    renderEvents();
}

document.addEventListener("DOMContentLoaded",()=>{
    const categoryFilter = document.querySelector("#categoryFilter");
    if(categoryFilter){
        categoryFilter.onchange = function(){
            filterEventsByCategory(this.value, data => console.log(data));
        };
    }

    const searchBox = document.querySelector("#searchBox");
    if(searchBox){
        searchBox.addEventListener("keydown", () => {
            console.log("Searching:", searchBox.value);
        });
    }
});

/* Exercise 9 */
function fetchEventsPromise(){
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .catch(err => console.error(err));
}

async function fetchEventsAsync(){
    try{
        const spinner = document.getElementById("loadingSpinner");
        if(spinner) spinner.style.display = "block";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);

        if(spinner) spinner.style.display = "none";
    }catch(err){
        console.error(err);
    }
}

/* Exercise 10 */
function displayEventDetails({name="Unknown", category="General", seats=0} = {}){
    console.log(name, category, seats);
}
const clonedEvents = [...eventsList];

/* Exercise 11 */
function handleFormSubmit(event){
    event.preventDefault();

    const form = event.target;
    const name = form.elements["userName"]?.value || "";
    const email = form.elements["userEmail"]?.value || "";
    const selectedEvent = form.elements["selectedEvent"]?.value || "";

    const errorBox = document.getElementById("formErrors");
    if(errorBox) errorBox.innerHTML = "";

    let errors = [];
    if(!name.trim()) errors.push("Name is required");
    if(!email.includes("@")) errors.push("Valid email required");

    if(errorBox && errors.length){
        errorBox.innerHTML = errors.join("<br>");
        return;
    }


        console.log("Form submission started");
        console.log("Name:", name);
    console.log("Email:", email);
    console.log("Selected Event:", selectedEvent);



    submitRegistration({name,email,selectedEvent});
}

/* Exercise 12 */
function submitRegistration(userData){

    console.log("Sending registration data:", userData);

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Registration Successful");
        })
        .catch(error => {
            console.error("Registration Error:", error);
        });

    },2000);
}


/* ================= EXERCISE 14 ================= */
$(document).ready(function(){

    $('#registerBtn').click(function(){
        console.log('jQuery Register Button Clicked');
    });

    $('#hideEvents').click(function(){
        $('#eventsContainer').fadeOut(1000);
    });

    $('#showEvents').click(function(){
        $('#eventsContainer').fadeIn(1000);
    });

});

</script>