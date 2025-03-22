<style scoped>
@import url("assets/css/portfolio.css");
</style>

<template>
    <div class="page">
        <h1>Portfolio</h1>
        <Content title="Projects" subText="Here are some of my projects:">
            <div class="card-grid">
                <Card
                    v-for="project in projects.projects"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
        <Content title="Certificates" subText="Here are my curent IT certifications:">
            <div class="card-grid">
                <Card
                    v-for="project in projects.certs"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
        <Content title="Java Projects">
            <div class="card-grid">
                <Card
                    v-for="project in projects.java"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
        <Content title="Web Projects">
            <div class="card-grid">
                <Card
                    v-for="project in projects.websites"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
        <Content title="Organizations" subText="Organizations I am a part of:">
            <div class="card-grid">
                <Card
                    v-for="project in projects.orgs"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
        <Content title="Microbit Projects">
            <div class="card-grid">
                <Card
                    v-for="project in projects.microbits"
                    :key="project.id"
                    :title="project.title"
                    :image="project.image"
                    :discription="project.discription"
                    :buttons="project.buttons"
                />
            </div>
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Portfolio');

const projects = {
    projects: [
        {
            id: 1,
            title: 'EmulatorJS Project',
            image: '/projects/emulatorjs.png',
            discription: 'EmulatorJS runs RetroArch compiled to webassembly, optimized for running in the web browser.',
            buttons: [
                {
                    text: 'Website',
                    link: 'https://emulatorjs.org',
                    target: '_blank'
                },    
                {
                    text: 'Github',
                    link: 'https://github.com/EmulatorJS/EmulatorJS',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Flashplayer',
            image: '/projects/flashplayer.png',
            discription: 'A flashplayer that works with a bowser using flash version 32 the last update before it was discontinued.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/flashplayer',
                    target: '_blank'
                }
            ]
        },
        {
            id: 3,
            title: 'Gospel Library Watch',
            image: '/projects/GospelLibrary.png',
            discription: 'A Gospel Library WearOS App that allows you to read the scriptures on your watch.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/Gospel-Library-Watch',
                    target: '_blank'
                }
            ]
        },
        {
            id: 4,
            title: 'Ruffle',
            image: '/projects/ruffle.png',
            discription: 'An open source Flash Player emulator written in Rust.',
            buttons: [
                {
                    text: 'Website',
                    link: 'https://ruffle.rs',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/ruffle-rs/ruffle',
                    target: '_blank'
                }
            ]
        },
        {
            id: 5,
            title: 'PrismOS',
            image: '/projects/penguin.png',
            discription: 'A linux distro that has full compatibility with Windows applications.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/PrismNet',
                    target: '_blank'
                }
            ]
        },
        {
            id: 6,
            title: 'Localstorage Sync',
            image: '/projects/localstorage-sync.png',
            discription: 'Chrome Extension to sync local storage and session storage data from one computer to another!',
            buttons: [
                {
                    text: 'Install',
                    link: 'https://chromewebstore.google.com/detail/localstorage-sync/nlgkphpdbpmpdngngdafeggajlblhhko',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/localstorage-sync',
                    target: '_blank'
                }
            ]
        },
        {
            id: 7,
            title: 'Kill Net',
            image: '/projects/kill-net.png',
            discription: 'A script to overwhelm/flood the connected network with traffic using zmap, effectively killing it.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/kill-net',
                    target: '_blank'
                }
            ]
        },
        {
            id: 8,
            title: 'Audible To mp3',
            image: '/projects/audibletomp3.png',
            discription: 'A Bash script to convert Audible aax files to mp3 files.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/audibletomp3',
                    target: '_blank'
                }
            ]
        }
    ],
    certs: [
        {
            id: 1,
            title: 'Microsoft Word',
            image: '/projects/Word-2019.png',
            discription: 'Microsoft Office Specialist: Word Associate',
            buttons: [
                {
                    text: 'View',
                    link: 'https://www.credly.com/badges/731128fe-9f6f-4890-8fea-4f5c2104fb03',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Microsoft Excel',
            image: '/projects/Excel-2019.png',
            discription: 'Microsoft Office Specialist: Excel Associate',
            buttons: [
                {
                    text: 'View',
                    link: 'https://www.credly.com/badges/99501786-1ace-4882-93d4-d7c492865480',
                    target: '_blank'
                }
            ]
        },
        {
            id: 3,
            title: 'Microsoft Powerpoint',
            image: '/projects/Powerpoint-2019.png',
            discription: 'Microsoft Office Specialist: Powerpoint Associate',
            buttons: [
                {
                    text: 'View',
                    link: 'https://www.credly.com/badges/fe6b5e6f-b09d-4d8b-b39b-9507773f6c72',
                    target: '_blank'
                }
            ]
        },
        {
            id: 4,
            title: 'Microsoft Office',
            image: '/projects/Microsoft-Office-Specialist-Associate-2019.png',
            discription: 'Microsoft Office Specialist: Associate',
            buttons: [
                {
                    text: 'View',
                    link: 'https://www.credly.com/badges/870cda15-7057-4f1d-98a9-d65a0f1d7f78',
                    target: '_blank'
                }
            ]
        },
        {
            id: 5,
            title: 'TestOut Office Pro',
            image: '/projects/Testout-Office-Pro.png',
            discription: 'TestOut Pro Certification',
            buttons: [
                {
                    text: 'View',
                    link: 'https://certification.testout.com/verifycert/6-2C6-VWNM3H',
                    target: '_blank'
                }
            ]
        }
    ],
    java: [
        {
            id: 1,
            title: 'Ascii Games',
            image: '/projects/AsciiGames.png',
            discription: 'A game manager for all your java ascii games. It is super easy to add games to the manager.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/AsciiGames',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Ascii Battleship',
            image: '/projects/ascii-battleship.png',
            discription: 'A ascii battleship game built in Java that can be played in the terminal.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/ascii-battleship',
                    target: '_blank'
                }
            ]
        }
    ],
    websites: [
        {
            id: 1,
            title: 'EmulatorJS Docs',
            image: '/projects/emulatorjs.org.png',
            discription: 'The official website for the EmulatorJS project.',
            buttons: [
                {
                    text: 'Docs',
                    link: 'https://emulatorjs.org',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/EmulatorJS/emulatorjs.org',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Allan Coding',
            image: '/projects/allancoding.dev.png',
            discription: 'My personal portfolio website.',
            buttons: [
                {
                    text: "You're here",
                    link: '/'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/allancoding.dev',
                    target: '_blank'
                }
            ]
        },
        {
            id: 3,
            title: 'Board To Foot Calculator',
            image: '/projects/bfoot-calc.allancoding.dev.png',
            discription: 'A Board Foot Calculator for woods projects to generate prices.',
            buttons: [
                {
                    text: 'Open',
                    link: 'https://bfoot-calc.allancoding.dev',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/bfoot-calc',
                    target: '_blank'
                }
            ]
        },
        {
            id: 4,
            title: 'EmulatorJS Demo',
            image: '/projects/demo.emulatorjs.org.png',
            discription: 'The demo page for EmulatorJS.',
            buttons: [
                {
                    text: 'Try Demo',
                    link: 'https://demo.emulatorjs.org',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/EmulatorJS/demo',
                    target: '_blank'
                }
            ]
        },
        {
            id: 5,
            title: 'Chrome Racer',
            image: '/projects/racer.allancoding.dev.png',
            discription: 'Reverse engineered Chrome Experiment RACER.',
            buttons: [
                {
                    text: 'Play',
                    link: 'https://racer.allancoding.dev/',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/racer',
                    target: '_blank'
                }
            ]
        },
        {
            id: 6,
            title: 'Minecraft',
            image: '/projects/allancoding-minecraft.netlify.app.png',
            discription: 'Minecraft versions ported to the web.',
            buttons: [
                {
                    text: 'Play',
                    link: 'https://mc.allancoding.dev',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/Minecraft',
                    target: '_blank'
                }
            ]
        },
        {
            id: 7,
            title: 'Old Website<span class="warning">Outdated</span>',
            image: '/projects/allancoding.dev.v1.png',
            discription: 'My very old website made in 2019.',
            buttons: [
                {
                    text: 'View',
                    link: 'https://allancoding.dev/v1/',
                    target: '_self'
                }
            ]
        },
        {
            id: 8,
            title: 'Perfect Paradox 8400 Website<span class="warning" title="Work In Progress">WIP</span>',
            image: '/projects/perfectparadox8400.website.png',
            discription: 'FTC Team Perfect Paradox 8400 website for outreach and information.',
            buttons: [
                {
                    text: 'View',
                    link: 'https://perfectparadox8400.github.io/',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/perfectparadox8400/perfectparadox8400.github.io',
                    target: '_blank'
                }
            ]
        },
        {
            id: 9,
            title: 'PrismOS Website<span class="warning">Private</span>',
            image: '/projects/prism.net.png',
            discription: 'The website for a linux distro that has full compatibility with Windows applications.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/prismnet/website',
                    target: '_blank'
                }
            ]
        },
        {
            id: 10,
            title: 'EmulatorJS Maker<span class="warning">Archived</span>',
            image: '/projects/emulatorjs-maker.png',
            discription: 'A EmulatorJS wraper to emulate games on your browser.',
            buttons: [
                {
                    text: 'Try It',
                    link: 'https://allancoding.github.io/emulatorjs-maker/',
                    target: '_blank'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/emulatorjs-maker',
                    target: '_blank'
                }
            ]
        }
    ],
    orgs: [
        {
            id: 1,
            title: 'EmulatorJS',
            image: '/projects/emulatorjs.png',
            discription: 'The home of the EmulatorJS project.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/EmulatorJS',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Perfect Paradox Team 8400',
            image: '/projects/perfectparadox8400.png',
            discription: 'A FIRST FTC Team.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/perfectparadox8400',
                    target: '_blank'
                }
            ]
        },
        {
            id: 3,
            title: 'PrismOS',
            image: '/projects/penguin.png',
            discription: 'A cool linux distro.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/PrismNet',
                    target: '_blank'
                }
            ]
        },
        {
            id: 4,
            title: 'Discerna',
            image: '/projects/discerna.png',
            discription: 'An organization focusing on better education tools.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/discerna',
                    target: '_blank'
                }
            ]
        }
    ],
    microbits: [
        {
            id: 1,
            title: 'The Game Board',
            image: '/projects/the-game-board.png',
            discription: 'Multiple games put into one file for the microbit.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/the-game-board',
                    target: '_blank'
                }
            ]
        },
        {
            id: 2,
            title: 'Rock Paper Scissors',
            image: '/projects/rock-paper-scissors.png',
            discription: 'You can play rock paper scissors with 2 microbits.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/rock-paper-scissors',
                    target: '_blank'
                }
            ]
        },
        {
            id: 3,
            title: 'Remote Control Car',
            image: '/projects/remote-control-car.png',
            discription: 'A microbit remote control car and controller.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/remote-control-car',
                    target: '_blank'
                }
            ]
        },
        {
            id: 4,
            title: 'Calculator',
            image: '/projects/calculator.png',
            discription: 'A simple calculator for the microbit.',
            buttons: [
                {
                    text: 'Github',
                    link: 'https://github.com/allancoding/calculator',
                    target: '_blank'
                }
            ]
        }
    ],
};
</script>