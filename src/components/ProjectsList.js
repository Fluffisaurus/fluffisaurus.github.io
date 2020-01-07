// eslint-disable-next-line
const template = {
    "template" : {
        0 : {
            "abbr": "",
            "name": "",
            "date" : "",
            "tags" : [""],
            "category" : "",
            "link": {
                "repo" : "",
                "host" : "",
            },
            "detail": {
                "short" : { //one to two sentence summary, concise!

                },
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "",
                    "alt" : "",
                    "description" : "",
                },
            },
        },
    },
}

export const projects = {
    "personal": {
        0 : {
            "abbr": "nba-data-viz",
            "name": "NBA Data Visualization",
            "date" : "Aug 2019 - Present",
            "tags" : ["D3", "React", "Python", "Flask", "JS"],
            "category" : "Web App / Tool",
            "link": {
                "repo" : "",
                "host" : "",
            },
            "detail": {
                "short" : "[In Progress] Full-stack data visualization tool - analyze NBA player's stats!",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "fbdv/fbdv-brush.png",
                    "alt" : "NBA Data Viz: Brush Selection",
                    "description" : "User can brush select data - in the future user will be able to further interact with this selection, ie. visualize subset with another graph.",
                },
                1 : {
                    "src" : "fbdv/fbdv-zoom.png",
                    "alt" : "NBA Data Viz: Zoom",
                    "description" : "Zooming at different levels with history being saved. User can undo, redo, and reset.",
                },
                2 : {
                    "src" : "fbdv/fbdv-zoom-1.png",
                    "alt" : "NBA Data Viz: Zoom",
                    "description" : "Zooming further to subset the data seen.",
                },
                3 : {
                    "src" : "fbdv/fbdv-assists.png",
                    "alt" : "NBA Data Viz: Assists - Different Stats",
                    "description" : "Visualize different box score metrics - in future iterations, the user will be able to graph and tabularize all box score data.",
                },
                4 : {
                    "src" : "fbdv/fbdv-tooltip.png",
                    "alt" : "NBA Data Viz: Tooltip",
                    "description" : "Tooltip to show respective data of the point - in the future will include more detail and will be interactable.",
                },
            },
        },
        1 : {
            "abbr": "website",
            "name": "Personal Website",
            "date" : "Mar 2019 - Present",
            "tags" : ["React", "JS", "CSS"],
            "category" : "Single-Page Web Application",
            "link": {
                "repo" : "",
                "host" : "https://fluffisaurus.github.io/pport",
            },
            "detail": {
                "short" : "Single page web app - my online portfolio.",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "website/mobile.jpg",
                    "alt" : "Website: Mobile View",
                    "description" : "Mobile view of my website",
                },
                1 : {
                    "src" : "website/mobile-about.jpg",
                    "alt" : "Website: Mobile - About Page",
                    "description" : "Different hierarchy and layout for mobile view.",
                },
                2 : {
                    "src" : "website/mobile-light.jpg",
                    "alt" : "Website: Mobile - Light Theme",
                    "description" : "Light themed version.",
                },
                3 : {
                    "src" : "website/mobile-light-about.jpg",
                    "alt" : "Website: Mobile - Light Theme About Page",
                    "description" : "Brighter colour palette for outdoor environments.",
                },
                4 : {
                    "src" : "website/mobile-light-projects.jpg",
                    "alt" : "Website: Mobile - Light Theme Projects Page",
                    "description" : "Vertical card layout.",
                },
            },
        },
        2 : {
            "abbr": "foodpick",
            "name": "FoodPick",
            "date" : "Jun 2018 - Mar 2019",
            "tags" : ["React", "Redux", "JS", "NodeJS", "CSS"],
            "category" : "Web and Mobile App",
            "link": {
                "repo" : "https://github.com/kca99/foodpick",
                "host" : "",
            },
            "detail": {
                "short" : "Multiplatform random cuisine picker.",
                "long" : { //two paragraph summary

                }
            },
            "images" : "",
        },
        3 : {
            "abbr": "falling-blocks",
            "name": "Falling Blocks",
            "date" : "Apr 2018 - May 2018",
            "tags" : ["C#", "Unity", "Game Dev"],
            "category" : "Endless Game",
            "link": {
                "repo" : "https://github.com/Fluffisaurus/Falling-Blocks",
                "host" : "",
            },
            "detail": {
                "short" : "Endless 2D game - evade the blocks!",
                "long" : { //two paragraph summary

                }
            },
            "images" : "",
        },
    },
    "academic" : {
        0 : {
            "abbr": "bobbys-breakout",
            "name": "Bobby's Breakout",
            "date" : "Sep 2019 - Dec 2019",
            "tags" : ["Agile", "Game Dev", "NodeJS", "Full Stack", "Heroku", "OOD", "Sys Design"],
            "category" : "Top Down RPG",
            "link" : {
                "repo"  : "https://github.com/abhatthal/Bobby-Breakout",
                "host" : "https://project-276.herokuapp.com/",
            },
            "detail": {
                "short" : "Full stack browser RPG - play as SFU's Dr. Bobby Chan!",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "bobby/bobby-breakout-map.png",
                    "alt" : "Bobby Breakout: Map",
                    "description" : "In-game screenshot of the map - SFU's CS lab blueprint.",
                },
                1 : {
                    "src" : "bobby/bobby-breakout-inventory.png",
                    "alt" : "Bobby Breakout: Inventory",
                    "description" : "Player (Bobby's) inventory of picked up loot - user can swap loadouts and equipped items.",
                },
                2 : {
                    "src" : "bobby/bobby-breakout-fight.png",
                    "alt" : "Bobby Breakout: Fight Scene",
                    "description" : "Pokemon style fight scene!",
                },
                3 : {
                    "src" : "bobby/bobby-breakout-fight-1.png",
                    "alt" : "Bobby Breakout: Fight Scene Player Ability",
                    "description" : "Player using an ability - pokemon style combat dialogue.",
                },
                4 : {
                    "src" : "bobby/bobby-breakout-fight-2.png",
                    "alt" : "Bobby Breakout: Fight Scene Enemy Ability",
                    "description" : "Enemy retaliating with their custom skills.",
                },
                5 : {
                    "src" : "bobby/bobby-breakout-item.png",
                    "alt" : "Bobby Breakout: Funny Items",
                    "description" : "In-game items user can pick up.",
                },
                6 : {
                    "src" : "bobby/bobby-breakout-achievement.png",
                    "alt" : "Bobby Breakout: Achievement",
                    "description" : "Dynamic and persistent achievements screen (stored in database by account session).",
                },
                7 : {
                    "src" : "bobby/bobby-breakout-login.png",
                    "alt" : "Bobby Breakout: Login and Signup",
                    "description" : "Login and signup screen for the user to register.",
                },
            },
        },
        1 : {
            "abbr": "player-performance-projection",
            "name": "Player Performance Projection",
            "date" : "Sep 2019 - Dec 2019",
            "tags" : ["Python", "ML", "ANOVA", "Regression", "Data Science"],
            "category" : "Statistical Analysis",
            "link": {
                "repo" : "https://github.com/Fluffisaurus/player-performance-projection",
                "host" : "https://github.com/Fluffisaurus/player-performance-projection/blob/master/report.md",
            },
            "detail": {
                "short" : "ML algo to analyze Steph Curry's performance stats.",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "ppp/all-3-def-tiers-train-vs-predict.png",
                    "alt" : "Training vs predicted",
                    "description" : "Training points vs Predicted points and Regression Line against three defenisve tiers.",
                },
                1 : {
                    "src" : "ppp/curry-shots-made-by-minutes.png",
                    "alt" : "Steph Curry's shots made by minutes passed in the game",
                    "description" : "Steph Curry's shots made by minutes passed in the game.",
                },
                2 : {
                    "src" : "ppp/plot-nba-def-rating.png",
                    "alt" : "2009-2019 Aggregated Defensive Ratings of all 30 NBA teams",
                    "description" : "2009-2019 Aggregated Defensive Ratings of all 30 NBA teams.",
                },
                3 : {
                    "src" : "ppp/variance-shot-defs.png",
                    "alt" : "Frequency of shots made vs different tiers of deffense",
                    "description" : "Steph's shots made vs different tiers of defense.",
                },
            },
        },
        2 : {
            "abbr": "motion-art",
            "name": "Motion Art",
            "date" : "Sep 2018 - Dec 2018",
            "tags" : ["Java", "Android Studio", "Sensors", "Activity Lifecycle"],
            "category" : "Android App",
            "link": {
                "repo" : "",
                "host" : "",
            },
            "detail": {
                "short" : "Android drawing application.",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "motionart/motionart3.jpg",
                    "alt" : "MotionArt: Home Screen",
                    "description" : "Default screen.",
                },
                1 : {
                    "src" : "motionart/motionart1.jpg",
                    "alt" : "MotionArt: Brush Select ",
                    "description" : "Brush size select interface.",
                },
                2 : {
                    "src" : "motionart/motionart2.jpg",
                    "alt" : "MotionArt: Palette Changer",
                    "description" : "Demo of MotionArt's palette changer.",
                },
                3 : {
                    "src" : "motionart/motionart4.jpg",
                    "alt" : "MotionArt: Edit Artboard Name",
                    "description" : "Renaming the current artboard.",
                },
                4 : {
                    "src" : "motionart/motionart5.jpg",
                    "alt" : "Made with MotionArt app",
                    "description" : "A sample drawing done on the app.",
                },
            },
        },
        3 : {
            "abbr": "kingdom-of-helios",
            "name": "Kingdom of Helios",
            "date" : "Oct 2018 - Dec 2018",
            "tags" : ["Unity", "C#", "Game Dev", "Game Design"],
            "category" : "2D Side-Scrolling Platformer Game",
            "link": {
                "repo" : "https://github.com/Fluffisaurus/kingdom-of-helios",
                "host" : "",
            },
            "detail": {
                "short" : "2D side-scrolling platformer RPG - play as two protagonists.",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "helios/main-screen.png",
                    "alt" : "Helios: Main Screen",
                    "description" : "Start screen.",
                },
                1 : {
                    "src" : "helios/char-x.PNG",
                    "alt" : "Helios: Protagonist",
                    "description" : "Main protagonist with distinct skill set.",
                },
                2 : {
                    "src" : "helios/char-y.PNG",
                    "alt" : "Helios: Protagonist's younger brother",
                    "description" : "Protagonist's younger brother with a different skill set.",
                },
                3 : {
                    "src" : "helios/scene-flow-chart.png",
                    "alt" : "Helios: Scene Flow Chart",
                    "description" : "Game's main scene flow chart.",
                },
                4 : {
                    "src" : "helios/story-map.png",
                    "alt" : "Helios: Story map of the game",
                    "description" : "Game's story map and progression.",
                },
            },
        },
        4 : {
            "abbr": "antlion-td",
            "name": "Antlion Tower Defense",
            "date" : "Oct 2018 - Dec 2018",
            "tags" : ["Unity", "C#", "Pathfinding", "ECS", "Game Dev", "Game Design"],
            "category" : "Tower Defense Game",
            "link": {
                "repo" : "https://github.com/Fluffisaurus/ATD",
                "host" : "",
            },
            "detail": {
                "short" : "Tower Defense game - build an army to fend off invaders!",
                "long" : { //two paragraph summary

                }
            },
            "images" : {
                0 : {
                    "src" : "atd/atd-pathfinding.png",
                    "alt" : "ATD: A* Pathfinding",
                    "description" : "Enemy AI with A* Pathfinding shown by lines and points.",
                },
                1 : {
                    "src" : "atd/atd-start-screen.png",
                    "alt" : "ATD: Start Screen",
                    "description" : "Start screen for the game.",
                },
                2 : {
                    "src" : "atd/atd-story.png",
                    "alt" : "ATD: Story Screen",
                    "description" : "Scrollable story and narrative screen.",
                },
                3 : {
                    "src" : "atd/atd-level-select.png",
                    "alt" : "ATD: Level Select Screen",
                    "description" : "Level select screen.",
                },
                4 : {
                    "src" : "atd/atd-gameplay.png",
                    "alt" : "ATD: Gameplay Screenshot",
                    "description" : "Gameplay screenshot.",
                },
                5 : {
                    "src" : "atd/atd-win-screen.png",
                    "alt" : "ATD: Win Screen",
                    "description" : "Win screen",
                },
                6 : {
                    "src" : "atd/atd-lose-screen.png",
                    "alt" : "ATD: Lose Screen",
                    "description" : "Lose screen",
                },
            },
        },
    },
};
