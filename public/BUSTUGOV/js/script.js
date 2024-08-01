
// Header

let header =
    `
    <div id = 'navbar'>

    <a href = '#'>
        <div id = 'mast'>
            <img src = 'assets/busg.jpg' alt = 'logo'>
        </div>
    </a>

    <div id = 'nav'>
        <a href = '#'>
            <h2 class = 'navbtn'>
                Home
            </h2>
        </a>
        <a href = '#about'>
            <h2 class = 'navbtn'>
                About Us
            </h2>
        </a>
        <a href = '#upcoming'>
            <h2 class = 'navbtn'>
                Upcoming Events
            </h2>
        </a>
        <a href = '#archive'>
            <h2 class = 'navbtn'>
                Past Events
            </h2>
        </a>
        <a href = '#contact'>
            <h2 class = 'navbtn'>
                Contact
            </h2>
        </a>
    </div>

    <div id = 'bars'>
        <div class = 'bar one'>
        </div>
        <div class = 'bar two'>
        </div>
    </div>
</div>

`
document.body.innerHTML = header + document.body.innerHTML


// Events

for (let i = 0; i < Events.length; i++){
    let e = Events[i]


    let div =
    `
    <div class = 'event'>
        <img src = 'assets/${e.img}' alt = 'poster'>
        <div class = ''>
       
        </div>
    </div>
    `

    if (e.upcoming) {
        Id('upcoming').innerHTML += div
    } else {
        Id('past').innerHTML += div
    }
}

for (let i = 0; i < Class('event').length; i++) {

    let e = Class('event')[i]

    e.onclick = () => {
        Id('expanded').src = 'assets/' + Events[i].img
        Id('overlay').classList.add('active')
    }
}

// Overlay

Id('overlay').onclick = () => {
    Id('overlay').classList.remove('active')
}


// Mobile Navigation

const bars = Id('bars'),
    nav = Id('nav')


bars.onclick = () => {
    bars.classList.toggle('active')
    nav.classList.toggle('active')
}

for (let i = 0; i < Class('navbtn').length; i++){
    let navbtn = Class('navbtn')[i]
    navbtn.onclick = () => {
        bars.classList.toggle('active')
    nav.classList.toggle('active')
    }
}

    var userFeed = new Instafeed({
                get: 'user',
                target: "instafeed-container",
                resolution: 'low_resolution',
                template:	'<div class=" events flex><div ><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a><p>{{caption}}</p> </div></div>'
                /*'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'*/,
                accessToken: 'IGQVJWci1McEdaTEMtWjlib0xQTW02YUtXSFlPM0RrQWZASS3RYRnVISlFZAcFZAXWGdydnhlanplM2EtMmxhckNxVW5KREkwZATBDLWJleDZAKUy1MamhfM1o0RFF3X183dFItMjc0ME4zNEU3SjZAoV0x5ZAAZDZD',
            });
userFeed.run();