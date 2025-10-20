import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const professionData = [
    {
      name: "Data Analyst",
      description:
        "As a Data Analyst, you'll uncover patterns and insights hidden in raw information. You'll clean, organize, and interpret data to help businesses make smarter decisions. This role suits someone who enjoys problem-solving, spotting trends, and turning numbers into stories that guide real-world actions.",
    },
    {
      name: "Software Developer",
      description:
        "A Software Developer designs and builds the applications we use every day, from mobile apps to large-scale systems. You'll translate ideas into working code, solve technical challenges, and continuously learn new tools. This profession is perfect if you enjoy logical thinking, creativity, and seeing your solutions come to life.",
    },
    {
      name: "UI/UX Designer",
      description:
        "As a UI/UX Designer, your focus is on creating digital experiences that feel intuitive and enjoyable. You'll combine creativity with empathy, shaping how people interact with apps and websites. This path is ideal if you love design, aesthetics, and making technology more human-friendly.",
    },
    {
      name: "Project Manager",
      description:
        "A Project Manager brings people together to achieve goals on time and within scope. You'll plan, coordinate, and communicate across teams, ensuring that everyone is aligned and motivated. This role is a great fit if you're organized, proactive, and enjoy leading others toward success.",
    },
    {
      name: "Cybersecurity Specialist",
      description:
        "A Cybersecurity Specialist protects systems and networks from digital threats. You'll monitor vulnerabilities, respond to incidents, and design defenses against hackers. This role is ideal if you're detail-oriented, enjoy puzzles, and want to safeguard people and organizations in the digital world.",
    },
    {
      name: "DevOps Engineer",
      description:
        "As a DevOps Engineer, you'll bridge the gap between development and operations. You'll automate workflows, manage infrastructure, and ensure that software runs smoothly from code to production. This career is perfect if you like efficiency, problem-solving, and working behind the scenes to keep systems reliable.",
    },
  ];

  const questionData = [
    {
      text: "Favorite sci-fi movie genre?",
      order: 1,
      options: [
        {
          text: "Time travel paradoxes",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 2 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Alien invasion epics",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Cyberpunk dystopian vibes",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Space opera sagas",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 3 },
            { professionId: 6, score: 2 },
          ],
        },
      ],
    },
    {
      text: "Pick a superhero power?",
      order: 2,
      options: [
        {
          text: "Superhuman intellect",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 2 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Shape-shifting adaptability",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 2 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 3 },
          ],
        },
        {
          text: "Telepathic intuition",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Invisibility stealth",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Choose a gaming style?",
      order: 3,
      options: [
        {
          text: "Puzzle-solving adventures",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 0 },
          ],
        },
        {
          text: "Open-world exploration",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Immersive story-driven campaigns",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Competitive team strategies",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Choose a sci-fi companion?",
      order: 4,
      options: [
        {
          text: "Witty AI sidekick",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Loyal robot mechanic",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Empathic alien guide",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Strategic rebel leader",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Which Pokémon type is most favorable?",
      order: 5,
      options: [
        {
          text: "Psychic mind-benders",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 2 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Electric high-voltage",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Ghost mysterious vibes",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Dragon epic power",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 3 },
            { professionId: 6, score: 2 },
          ],
        },
      ],
    },
    {
      text: "Preferred type of fantasy setting?",
      order: 6,
      options: [
        {
          text: "High magic",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 2 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Cyberpunk dystopia",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 2 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 3 },
          ],
        },
        {
          text: "Urban fantasy",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Post-apocalyptic",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Best accessory for coding sessions?",
      order: 7,
      options: [
        {
          text: "Mechanical keys",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 2 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "RGB lighting",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Noise canceling",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Big monitor",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Best time for a spontaneous plan?",
      order: 8,
      options: [
        {
          text: "Afternoon",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 0 },
          ],
        },
        {
          text: "Midnight",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Tomorrow soon",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Right now",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Preferred vacation destination type?",
      order: 9,
      options: [
        {
          text: "Beach resort",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 2 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "City explore",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Mountain hike",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Cabin chill",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Best atmospheric weather setting?",
      order: 10,
      options: [
        {
          text: "Sunny warm",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 2 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Cloudy cool",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 2 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 3 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Rainy cozy",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Snow fall",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "If you could only keep one gadget from the following four options, which would you choose?",
      order: 11,
      options: [
        {
          text: "Smartphone",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Laptop",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Smartwatch",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Tablet",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Preferred method of urban transit?",
      order: 12,
      options: [
        {
          text: "Electric scooter",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 2 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Subway train",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 2 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 3 },
          ],
        },
        {
          text: "Ride share",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Bike ride",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Go-to food for late nights?",
      order: 13,
      options: [
        {
          text: "Ramen noodles",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 0 },
          ],
        },
        {
          text: "Pizza slice",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 3 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 2 },
          ],
        },
        {
          text: "Tacos fresh",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Takeout sushi",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Most engaging aesthetic era?",
      order: 14,
      options: [
        {
          text: "Frutiger Aero",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Flat design",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 2 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 3 },
          ],
        },
        {
          text: "Memphis style",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Y2K shine",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
    {
      text: "Preferred digital font style?",
      order: 15,
      options: [
        {
          text: "Serif classic",
          order: 1,
          professionEffects: [
            { professionId: 1, score: 3 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 2 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Sans clean",
          order: 2,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 2 },
            { professionId: 3, score: 0 },
            { professionId: 4, score: 0 },
            { professionId: 5, score: 1 },
            { professionId: 6, score: 3 },
          ],
        },
        {
          text: "Monospace retro",
          order: 3,
          professionEffects: [
            { professionId: 1, score: 0 },
            { professionId: 2, score: 1 },
            { professionId: 3, score: 3 },
            { professionId: 4, score: 1 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
        {
          text: "Pixel blocky",
          order: 4,
          professionEffects: [
            { professionId: 1, score: 1 },
            { professionId: 2, score: 0 },
            { professionId: 3, score: 1 },
            { professionId: 4, score: 3 },
            { professionId: 5, score: 0 },
            { professionId: 6, score: 1 },
          ],
        },
      ],
    },
  ];

  for (const profession of professionData) {
    await prisma.profession.create({
      data: {
        name: profession.name,
        description: profession.description,
      },
    });
  }

  const questions = await prisma.question.createManyAndReturn({
    data: questionData.map((q) => ({
      text: q.text,
      order: q.order,
    })),
  });

  for (const [questionIndex, question] of questions.entries()) {
    const optionsData = questionData[questionIndex].options;
    for (const option of optionsData) {
      await prisma.option.create({
        data: {
          text: option.text,
          order: option.order,
          questionId: question.id,
          professionEffects: {
            create: option.professionEffects.map((effect) => ({
              professionId: effect.professionId,
              score: effect.score,
            })),
          },
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
