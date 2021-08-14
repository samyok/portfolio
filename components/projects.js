const projectSections = [
    {
        title: "Current Projects",
        data: [
            {
                tags: ['php', 'mysql', 'phpbb', 'express'],
                bgImage: 'https://cdn.samyok.us/img/gallery.png',
                description: `I've been volunteer staff on Scioly.org since fall of 2020. Scioly.org is the largest student center for Science Olympiad students. In its 22 year history, the website has provided guidance for the more than 54k registered users. 
                
                I'm currently working on a custom phpBB3 gallery to be deployed on scioly.org/gallery. Currently, the gallery hosts 4k images and videos on a nodejs bucket server that generates thumbnails and low-res images for slow networks. Try the actively-developed beta below!`,
                title: "Scioly.org",
                buttons: [
                    {
                        href: "https://scioly.gallery",
                        type: "link",
                        text: "scioly.gallery (beta)",
                    },
                    {
                        href: "https://github.com/samyok/dakotadebate",
                        type: "github",
                    },
                ]
            },{
                tags: ['nextjs', 'typescript', 'mongodb', 'chakra-ui'],
                bgImage: 'https://cdn.samyok.us/img/DDI.png',
                description: `Dakota Debate Institute is South Dakota's first free debate camp, designed to be as accessible as possible. In 2021, we had more than 60 students, 14 staff, and a week of online content.  
                I was the sole develeper for most of the camp, having coded the custom landing page, classroom, and tournament/judging platform for 2021. I also managed advertising and analytics using Umami and set up Zoho Mail. 
                
                I'm excited to be the camp director for the (hopefully) in-person DDI 2022!`,
                title: "Dakota Debate Institute",
                buttons: [
                    {
                        href: "https://dakotadebate.org",
                        type: "link",
                        text: "dakotadebate.org",
                    },
                    {
                        href: "https://classroom.dakotadebate.org",
                        type: "link",
                        text: "Classroom",
                    },
                    {
                        href: "https://github.com/samyok/dakotadebate",
                        type: "github",
                    },
                ]
            },
        ]
    },
    {
        title: "Cool Projects",
        details: "Projects that would otherwise be archived but are here because they're cool 😎",
        data: [{
            tags: ['css', 'socket.io', 'react', 'express', 'hackathon'],
            bgImage: 'https://raw.githubusercontent.com/samyok/cine.stream/main/gallery.jpg',
            description: `watch together. in 3D. online.
            
            For a hackathon, my sister and I created a 3D movie watch together space without three.js or the like -- just pure CSS transforms. This was intentional; we wanted to give ourselves the challenge of creating a pure-css 3D environment.  
            
            We ended up winning first place and $600 at SonomaHacks. Lots of info is on our DevPost; check it out!`,
            title: "cine.stream",
            buttons: [
                {
                    href: "https://cine.stream",
                    type: "link",
                    text: "cine.stream",
                },
                {
                    href: "https://github.com/samyok/cine.stream",
                    type: "github",
                },
                {
                    href: "https://devpost.com/software/cine-stream-7x3gtj",
                    type: "devpost"
                }
            ]
        }, {
            tags: ['react-native', 'express', 'firebase'],
            bgImage: 'https://notify.samyok.us/img/phone1.png',
            description: `Designed, programmed, and published iOS and Android app for Brookings High School students for fast and reliable emergency alerts. 1800+ downloads over the last year (BHS has ~800 students). The Brookings School District was in talks to purchase the app for every school in the district, but those talks got cancelled due to COVID. 
                
                Coded in React Native with Node/Express/MongoDB/Firestore backend.`,
            title: "Bobcat Notify",
            buttons: [
                {
                    href: "https://notify.samyok.us",
                    type: "link",
                    text: "notify.samyok.us",
                },
                {
                    href: "https://github.com/samyok/dakotadebate",
                    type: "github",
                },
            ]
        }]
    },
    {
        title: "Archived Projects",
        collapsible: true,
        data: [
            {
                tags: ['tensorflow', 'react', 'socket.io', 'express', 'three.js', 'hackathon'],
                bgImage: 'https://placekitten.com/300/300',
                title: "SongSmash",
                description: `Designed, programmed, and published iOS and Android app for Brookings High School students for fast and reliable emergency alerts. 1800+ downloads over the last year (BHS has ~800 students). The Brookings School District was in talks to purchase the app for every school in the district, but those talks got cancelled due to COVID. 
                
                Coded in React Native with Node/Express/MongoDB/Firestore backend.`,
                buttons: [
                    {
                        href: "https://devpost.com/software/songsma-sh-tagline",
                        type: "devpost",
                    },
                    {
                        href: "https://github.com/samyok/dakotadebate",
                        type: "github",
                    },
                ]
            }
        ]
    }
]

export default projectSections;
