<style scoped>
@import url("assets/css/home.css");
</style>

<template>
    <div class="homePage">
        <div class="columns">
            <div class="column main-logo">
                <NuxtImg src="/logos/allancoding.png" alt="Logo" format="png" quality="100" />
            </div>
            <div class="column">
                <h1>Hello, my name is <span class="red">Allan</span></h1>
                <h2 class="typing"><span id="typing">&#8203;</span></h2>
                <UIButton :link="'/contact'">Contact Me</UIButton>
                <div class="social">
                    <a href="https://github.com/allancoding">
                        <Icon name="line-md:github" />
                    </a>
                    <a href="mailto:allancoding.dev@gmail.com">
                        <Icon name="line-md:email" />
                    </a>
                    <a href="https://discord.gg/users/893621402496806975">
                        <Icon name="line-md:discord" />
                    </a>
                    <a href="https://www.linkedin.com/in/allancoding/">
                        <Icon name="line-md:linkedin" />
                    </a>
                    <a href="https://twitter.com/allancoding">
                        <Icon name="line-md:twitter-x" />
                    </a>
                    <a href="https://www.youtube.com/@allancoding">
                        <Icon name="line-md:youtube" />
                    </a>
                </div>
            </div>
        </div>
        <div class="page">
            <Content :title="'About'" :button="'My Github'" :buttonLink="'https://github.com/allancoding'">
                <p>I'm a software developer with a passion for coding! I have experience in web, mobile, and
                    desktop development, and I'm always exploring new technologies to enhance my skills. I enjoy
                    building software that makes a meaningful impact. Over the years, I’ve worked in various
                    areas of computer science, continuously improving my expertise.</p>
            </Content>
            <Content :title="'Skills and Experience'" :button="'Portfolio'" :buttonLink="'/portfolio'">
                <p>I have experience with the following technologies:
                    <span class="red">HTML</span>, <span class="red">CSS</span>, <span
                        class="red">JavaScript</span>, <span class="red">Java</span>, <span
                        class="red">Python</span>, <span class="red">PHP</span>, <span class="red">C++</span>,
                    <span class="red">Vue</span>, <span class="red">Nuxt.js</span>, and <span
                        class="red">Node.js</span>.

                    I thrive on challenges and always seek opportunities to learn and grow. To expand my skill
                    set, I’ve worked on many personal projects, exploring different technologies and approaches.
                    I love problem-solving and finding creative solutions to complex challenges.

                    I'm always on the lookout for exciting new projects. You can check out some of my work on my
                    portfolio.<br />
                </p>
            </Content>
            <Content :title="'README.md'">
                <div class="readme">
                    <h3>Hi there 👋</h3>
                    <p><img alt="Typing" src="/v1/typing.svg"></img></p>
                    <p class="badges"><img alt="Badge"
                            src="https://komarev.com/ghpvc/?username=allancoding&color=brightgreen">
                        <img alt="Badge"
                            src="https://img.shields.io/badge/Discord-allancoding-brightgreen/?logo=discord&color=7289DA">
                        <img alt="Badge"
                            src="https://img.shields.io/badge/Editor-VS%20Code-brightgreen/?logo=visualstudiocode&logoColor=blue&color=blue">
                        <img alt="Badge"
                            src="https://img.shields.io/badge/Knows-JavaScript-brightgreen/?logo=javascript&logoColor=warning&color=yellow">
                        <img alt="Badge"
                            src="https://img.shields.io/badge/Knows-HTML-brightgreen/?logo=html5&logoColor=warning&color=orange">
                        <img alt="Badge"
                            src="https://img.shields.io/badge/Knows-JAVA-brightgreen/?logo=java&logoColor=red&color=red">
                        <img alt="Badge"
                            src="https://img.shields.io/badge/Knows-MarkDown-brightgreen?logo=markdown&color=fff">
                        <img alt="Badge"
                            src="https://img.shields.io/github/sponsors/allancoding?label=Sponsors&logo=githubsponsors&style=flat">
                    </p>
                    <img alt="Snake"
                        src="https://raw.githubusercontent.com/allancoding/allancoding/output/github-contribution-grid-snake-dark.svg#gh-dark-mode-only">
                    <p> </p>
                    <p>📫 How to reach me:</p>
                    <ul>
                        <li>Email: <a href="mailto:allancoding.dev@gmail.com">allancoding.dev@gmail.com</a></li>
                        <li>Website: <a href="https://allancoding.dev">allancoding.dev</a></li>
                    </ul>
                    <p>🌱 I’m currently learning:</p>
                    <ul>
                        <li>Rust</li>
                        <li>JAVASCRIPT</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>PHP</li>
                        <li>Bash</li>
                        <li>JAVA</li>
                        <li>Python</li>
                    </ul>
                    <h4>I Am A Full Stack Developer!</h4>
                    <p>🔭 I’m currently working on:</p>
                    <ul>
                        <li><a href="https://github.com/EmulatorJS/EmulatorJS">EmulatorJS</a></li>
                        <li><a href="https://github.com/PrismNet">PrismOS</a></li>
                    </ul>
                    <p>⚡ Fun fact:</p>
                    <ul>
                        <li>I learned to code at 10.</li>
                        <li>This is my first
                            <a
                                href="https://web.archive.org/web/20231225133919/http://live.codechangers.com/aniles/">website</a>
                        </li>
                    </ul>
                    <h4>My Certificates:</h4>
                    <NuxtImg src="/certs/Word-2019.png" alt="word" width="125px" format="webp" quality="100"/>
                    <NuxtImg src="/certs/Excel-2019.png" alt="excel" width="125px" format="webp" quality="100" style="padding-left: 5px;"/>
                    <NuxtImg src="/certs/Powerpoint-2019.png" alt="powerpoint" width="125px" format="webp" quality="100" style="padding-left: 5px;"/>
                    <NuxtImg src="/certs/Microsoft-Office-Specialist-Associate-2019.png" alt="microsoft-office" width="125px" format="webp" quality="100" style="padding-left: 5px;"/>
                    <NuxtImg src="/certs/Testout-Office-Pro.png" alt="testout-office-pro" width="125px" format="webp" quality="100" style="padding-left: 5px;"/>
                    <h4>Status:</h4>
                    <p><img alt="Badge" src="https://discord-readme-badge.vercel.app/api?id=893621402496806975"></p>
                    <p>
                        <img alt="Status"
                            src="https://github-readme-stats-allancoding.vercel.app/api?username=allancoding&count_private=true&border_radius=8&theme=tokyonight&include_all_commits=true">
                    </p>
                    <p>
                        <img alt="Status"
                            src="https://github-readme-stats-allancoding.vercel.app/api/top-langs/?username=allancoding&langs_count=20&layout=compact&theme=tokyonight">
                    </p>
                    <p>
                        <img alt="Status" src="https://allancoding-github-readme-streak-stats.vercel.app/?user=allancoding&theme=tokyonight">
                    </p>
                    <p>
                        <img alt="Trophy" :src="trophySrc">
                    </p>
                    <p style="margin-bottom: 0;"><img alt="Jokes" src="https://readme-jokes.vercel.app/api?theme=tokyonight"></p>
                    <p style="float:left; margin-top: 0;">
                        <a href="https://stackexchange.com/users/18796553">
                            <img src="https://stackexchange.com/users/flair/18796553.png?theme=dark" width="208" alt="profile for Allancoding on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Allancoding on Stack Exchange, a network of free, community-driven Q&amp;A sites">
                        </a>
                    </p>
                </div>
            </Content>
        </div>
    </div>
</template>

<script setup>
const typed = useTypedJs()
const trophySrc = ref('');
const route = useRoute();
const router = useRouter();
const { $setTitle } = useNuxtApp();
$setTitle('');

const updateImageUrl = () => {
    const columns = Math.min(11, Math.floor(window.innerWidth / 130));
    trophySrc.value = `https://github-profile-trophy-allancoding.vercel.app/?username=allancoding&theme=tokyonight&no-frame=true&margin-w=15&margin-h=15&row=11&column=${columns}`;
};

onMounted(() => {
    if (route.fullPath.includes('?portfolio')) {
        router.replace('/portfolio');
    }
    typed('#typing', {
        strings: ["I'm a software developer", 'I love to code!', 'I know: &#8203;', 'I know: <span class="red">HTML</span>', 'I know: <span class="red">CSS</span>', 'I know: <span class="red">JavaScript</span>', 'I know: <span class="red">Java</span>', 'I know: <span class="red">Python</span>', 'I know: <span class="red">PHP</span>', 'I know: <span class="red">C++</span>', 'I know: <span class="red">Vue</span>', 'I know: <span class="red">Nuxt.js</span>', 'I know: <span class="red">Node.js</span>'],
        typeSpeed: 70,
        backSpeed: 50,
        smartBackspace: true,
        cursorChar: '<span id="cursor-red">|</span>',
        loop: true,
        onStringTyped: (arrayPos) => {
            if (document.querySelector('#cursor-red')) {
                if (arrayPos > 1 && arrayPos < 12) {
                    document.querySelector('#cursor-red').classList.add('red');
                } else {
                    document.querySelector('#cursor-red').classList.remove('red');
                }
            }
        },
    })
    updateImageUrl();
    window.addEventListener('resize', updateImageUrl);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateImageUrl);
});
</script>
