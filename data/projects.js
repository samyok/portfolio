const projectSections = [
    {
        title: "Current Projects",
        data: [
            {
                tags: ['nextjs', 'typescript', 'mongodb', 'chakra-ui', 'sass'],
                bgImage: 'https://cdn.samyok.us/img/DDI.png',
                description: `I was the sole develeper for most of the camp, having coded the custom landing page, classroom, and tournament/judging platform for 2021. I also managed advertising and analytics using Umami and set up Zoho Mail. 
                
                I'm excited to be the camp director for the (hopefully) in-person DDI 2022!`,
                title: "Dakota Debate Institute",
                subtext: "Jul 2021 - Present",
                buttons: [
                    {
                        href: "https://dakotadebate.org",
                        type: "link",
                        text: "dakotadebate.org",
                    },
                    {
                        href: "https://github.com/samyok/dakotadebate",
                        type: "github",
                    },
                    {
                        href: "https://github.com/samyok/dakotadebate-classroom",
                        type: "github",
                        text: "Classroom Github"
                    },
                ]
            },
            {
                tags: ['php', 'mysql', 'phpbb', 'express', 'less'],
                bgImage: 'https://cdn.samyok.us/img/gallery.png',
                description: `I'm currently working on a custom phpBB3 gallery to be deployed on scioly.org/gallery. Currently, the gallery hosts 4k images and videos on a nodejs bucket server that generates thumbnails and low-res images for slow networks. 
                
                Scioly.org is the largest student center for Science Olympiad students. Having been around for 22 years, the website provides guidance for the more than 54,000 registered users. Try the actively-developed gallery beta below!`,
                title: "Scioly.org",
                subtext: "Sept 2019 - Present",
                buttons: [
                    {
                        href: "https://scioly.gallery",
                        type: "link",
                        text: "scioly.gallery (beta)",
                    },
                    {
                        href: "https://github.com/samyok/scioly-gallery-docker",
                        type: "github",
                    },
                ]
            },
            {
                tags: ['nextjs', 'chakra-ui', 'LaTeX'],
                bgImage: '/og_image_index.png',
                description: `I designed and developed this webiste over the past couple months as a general index to all the various projects I work on. My resume is written in LaTeX using a template I wrote. 
                
                Recently, I've added automatic open graph image generation and caching so that the preview is always the most updated version of the website! Feel free to check out the portfolio, though.`,
                title: "Portfolio",
                subtext: "Jul 2021 - Present",
                buttons: [
                    {
                        href: "https://github.com/samyok/portfolio",
                        type: "github",
                    },
                ]
            },
        ]
    },
    {
        title: "Cool Projects",
        details: "My favorite projects that are here because they're cool 😎",
        data: [{
            tags: ['css', 'socket.io', 'react', 'express', 'hackathon'],
            bgImage: 'https://raw.githubusercontent.com/samyok/cine.stream/main/gallery.jpg',
            description: `For a hackathon, my sister and I created a 3D watch together space without three.js or the like -- just pure CSS transforms. This was intentional; we wanted to give ourselves the challenge of creating a pure-css 3D environment.  
            
            We ended up winning first place and $600 at SonomaHacks. Lots of info is on our DevPost; check it out!`,
            title: "cine.stream",
            subtext: "Apr 2021",
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
            description: `Designed, programmed, and published iOS and Android app for Brookings High School students for fast and reliable emergency alerts. 2000+ downloads over the last year (BHS has ~800 students). The Brookings School District was in talks to purchase the app for every school in the district, but those talks got cancelled due to COVID. 
                
                Coded in React Native with Node/Express/MongoDB/Firestore backend.`,
            title: "Bobcat Notify",
            subtext: "Nov 2019 - Jan 2021",
            buttons: [
                {
                    href: "https://notify.samyok.us",
                    type: "link",
                    text: "notify.samyok.us",
                },
            ]
        }, {
            tags: ['tensorflow', 'react', 'socket.io', 'express', 'three.js', 'hackathon'],
            title: "SongSmash",
            subtext: "Apr 2021",
            bgImage: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/493/648/datas/gallery.jpg",
            description: `Use your webcam to smash your favorite songs! Play any beat saber map with a webcam, powered by Tensorflow and ThreeJS!
                
                All of the 3D animations in-game were done with three.js. The UI was built with React and node.js. Models of the boxes and hands were made in Blender. ParticlesJS was used to make the particle effects in the background, and PoseNet was used to track the player's pose on the webcam.
                
                We made this for a Los Altos Hacks 2021 and didn't win anything, although it was a super fun project :)`,
            buttons: [
                {
                    href: "https://devpost.com/software/songsma-sh-tagline",
                    type: "devpost",
                },
                {
                    href: "https://github.com/samyok/songsma.sh",
                    type: "github",
                },
            ]
        }, {
            tags: ["hackathon", "react-native", "nodejs"],
            title: "devJS",
            subtext: "Jul 2021",
            bgImage: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/610/222/datas/gallery.jpg",
            description: `devJS provides a internet-free code editor and interpreter to developers with a bundled NodeJS binary.

devJS runs a compiled version of NodeJS ChakraCore on iOS and uses Termux on Android. We used React Native to build the "front-end" of our application, which includes defining transitions between screens using the StackNavigator.`,
            buttons: [{
                type: "devpost",
                href: "https://devpost.com/software/devjs-4v5okm"
            }, {
                type: "github",
                href: "https://github.com/samyok/devjs"
            }]
        }]
    },
    {
        title: "Projects",
        collapsible: true,
        data: [


            {
                tags: ['open-source'],
                title: "Google Code In",
                subtext: "Winter 2019-2020",
                description: `
                Google Code In is an initiative that allowed students to complete tasks for open source organizations. I participated with SugarLabs, an organization that maintains the Sugar OS on the >3 million One Laptop Per Child laptops in underdeveloped areas. 

                First year: worked on MusicBlocks and SugarLabs website, fixing bugs.
                
                Second year: worked on MusicBlocks; expanded export and import functionality to more file types; proposed and created a Git-based version history system for blocky-code; tested and experimented with the viability of refactoring entire codebase into a Model-View-Controller design. 
`,
                buttons: [{
                    href: "https://github.com/sugarlabs/musicblocks",
                    type: "github"
                }]
            },
            // {
            //     tags: ["js", "express"],
            //     title: "SnowMap",
            //     subtext: "Feb 2020",
            //     description: `During a snowstorm, many people look at this website to "figure out" the chances that school closes the next day. It scrapes KSFY News for current cancellations and plots them on the website using the Google Maps API, so it only works for the eastern South Dakota region.
            //
            //     The demo only works during inclement weather, as it is just a Google Map if no schools have cancelled school for tomorrow.`,
            //     buttons: [
            //         {
            //             href: 'https://map.samyok.us/',
            //             type: "link",
            //             text: "map.samyok.us"
            //         },
            //         {
            //             href: "https://github.com/samyok/snowmap",
            //             type: "github"
            //         },
            //     ]
            // },

            {
                tags: ['open-source', 'nodejs'],
                title: "typpo/textbelt",
                subtext: "Mar 2019",
                description: `Contributing to this was one of my first forays into open source, I refactored the transporter from mutt to nodemailer.`,
                buttons: [
                    {
                        href: "https://github.com/typpo/textbelt",
                        type: "github",
                    },
                ]
            },

            {
                tags: ["react", "material-ui"],
                title: "BHS Science Olympiad",
                subtext: "2019-2020",
                description: `Simple create-react-app with Material UI to create a 'dashboard' for the BHS SciOly team I captained for 3 years.`,
                buttons: [
                    {
                        href: "https://www.scienceolympiad.club",
                        type: "link",
                        text: "www.scienceolympiad.club"
                    },
                    {
                        href: "https://github.com/samyok/sci-oly-2020",
                        type: "github"
                    }
                ]
            },

            {
                tags: ['firebase', 'nodejs', 'hackathon'],
                title: "slideforthe.world",
                subtext: "Feb 2019",
                description: `I made most of this in a 12 hour sprint to win first place at SDSU's Programming Design Contest!
                
                It was a competitive multiplayer version of the picture puzzle gadget from Windows 7, but most of the files corrupted and the source is no longer available 😔`,
                buttons: [
                    {
                        type: "github",
                        href: "https://github.com/samyok/slideforthe.world",
                    }
                ]
            },

            {
                tags: ["js", "express"],
                title: "Scioly Chrome Extension",
                subtext: "Sept 2019",
                description: `My first chrome extension and my first project for Scioly.org. 
                
                I've since added (or helped add) all of the features, except for infinite scrolling, to the main scioly.org website.`,
                buttons: [
                    {
                        href: 'https://chrome.google.com/webstore/detail/better-scioly-forums/imlehajmaemolcpgbkjcenmphfbljiei?hl=en',
                        type: "link",
                        text: "Chrome Extension"
                    },
                    {
                        href: "https://github.com/samyok/scioly-chrome",
                        type: "github"
                    },
                ]
            },
            {
                tags: ['chakra-ui', 'nextjs'],
                title: "Superfight",
                subtext: "Aug 2021",
                description: `I made this as a small playtest for NextJS and Chakra UI. 
                
                It was used as an activity for Dakota Debate Institute. The rules are simple: the players pick a card each and then argue over who would win in a battle to the death.`,
                buttons: [
                    {
                        href: "https://superfight.samyok.us",
                        text: "superfight.samyok.us",
                        type: "link"
                    },
                    {
                        href: "https://github.com/samyok/dakotadebate",
                        type: "github",
                    },
                ]
            },
            {
                tags: ["js", "webrtc"],
                title: "Webshare",
                subtext: "Apr 2020",
                description: `A bare-bones screensharing application that I made to test out WebRTC during our first two week quarentine.`,
                buttons: [
                    {
                        href: "https://github.com/samyok/webshare",
                        type: "github"
                    }
                ]
            },


            {
                tags: ["react", "sass", "mongodb", "express"],
                title: "BHS Prom Tickets",
                subtext: "Mar - Apr 2021",
                description: `A MERN-stack application that was the sole ticket and meal management platform for Brookings High School's 2021 Prom.
                
                Used to great success managing tickets, meals, and seating. Managed authenticatication so students could verify their eligibility to purchase tickets.`,
                buttons: []
            },
        ]
    }
]

export default projectSections;
