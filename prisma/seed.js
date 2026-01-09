import { prisma } from "../src/config/db.js";

const userID = "cmk5mm9r10000rcvq3w47qatv";
const sampleMovies = [
  {
    title: "The Silent Code",
    overviews: "A hacker uncovers a global surveillance conspiracy.",
    releaseYear: "2020",
    genres: ["Thriller", "Tech"],
    runTime: 118,
    posterURL: "https://example.com/posters/silent-code.jpg",
    createdBy: userID,
  },
  {
    title: "Midnight Streets",
    overviews: "A detective battles crime in a city that never sleeps.",
    releaseYear: "2021",
    genres: ["Crime", "Drama"],
    runTime: 124,
    posterURL: "https://example.com/posters/midnight-streets.jpg",
    createdBy: userID,
  },
  {
    title: "Beyond the Stars",
    overviews: "Humanity’s first interstellar mission faces the unknown.",
    releaseYear: "2019",
    genres: ["Sci-Fi", "Adventure"],
    runTime: 136,
    posterURL: "https://example.com/posters/beyond-stars.jpg",
    createdBy: userID,
  },
  {
    title: "Broken Promises",
    overviews: "A family struggles with betrayal and forgiveness.",
    releaseYear: "2018",
    genres: ["Drama"],
    runTime: 110,
    posterURL: "https://example.com/posters/broken-promises.jpg",
    createdBy: userID,
  },
  {
    title: "Code Red",
    overviews: "A cyber attack threatens to shut down an entire nation.",
    releaseYear: "2022",
    genres: ["Action", "Thriller"],
    runTime: 122,
    posterURL: "https://example.com/posters/code-red.jpg",
    createdBy: userID,
  },
  {
    title: "Last Horizon",
    overviews: "Survivors fight to rebuild after a global disaster.",
    releaseYear: "2020",
    genres: ["Drama", "Sci-Fi"],
    runTime: 130,
    posterURL: null,
    createdBy: userID,
  },
  {
    title: "Hidden Truth",
    overviews: "A journalist exposes secrets buried for decades.",
    releaseYear: "2017",
    genres: ["Mystery", "Drama"],
    runTime: 115,
    posterURL: "https://example.com/posters/hidden-truth.jpg",
    createdBy: userID,
  },
  {
    title: "Neon City",
    overviews: "Life and love collide in a futuristic metropolis.",
    releaseYear: "2023",
    genres: ["Romance", "Sci-Fi"],
    runTime: 119,
    posterURL: "https://example.com/posters/neon-city.jpg",
    createdBy: userID,
  },
  {
    title: "The Final Match",
    overviews: "An underdog team fights for championship glory.",
    releaseYear: "2016",
    genres: ["Sports", "Drama"],
    runTime: 108,
    posterURL: null,
    createdBy: userID,
  },
  {
    title: "Echoes of War",
    overviews: "Soldiers face the emotional cost of conflict.",
    releaseYear: "2015",
    genres: ["War", "Drama"],
    runTime: 140,
    posterURL: "https://example.com/posters/echoes-war.jpg",
    createdBy: userID,
  },
  {
    title: "Parallel Lives",
    overviews: "Two strangers discover their lives are mysteriously linked.",
    releaseYear: "2021",
    genres: ["Fantasy", "Drama"],
    runTime: 121,
    posterURL: "https://example.com/posters/parallel-lives.jpg",
    createdBy: userID,
  },
  {
    title: "Dark Waters",
    overviews: "A coastal town hides a terrifying secret.",
    releaseYear: "2019",
    genres: ["Horror", "Mystery"],
    runTime: 102,
    posterURL: null,
    createdBy: userID,
  },
  {
    title: "Rise of Legends",
    overviews: "Heroes unite to stop an ancient evil.",
    releaseYear: "2022",
    genres: ["Fantasy", "Action"],
    runTime: 145,
    posterURL: "https://example.com/posters/rise-legends.jpg",
    createdBy: userID,
  },
  {
    title: "Fragments",
    overviews: "A man pieces together memories after a tragic accident.",
    releaseYear: "2018",
    genres: ["Psychological", "Drama"],
    runTime: 112,
    posterURL: "https://example.com/posters/fragments.jpg",
    createdBy: userID,
  },
  {
    title: "Urban Pulse",
    overviews: "Stories of ambition, love, and loss in the big city.",
    releaseYear: "2020",
    genres: ["Drama"],
    runTime: 109,
    posterURL: null,
    createdBy: userID,
  },
  {
    title: "The Last Signal",
    overviews: "A mysterious broadcast warns of an impending catastrophe.",
    releaseYear: "2021",
    genres: ["Sci-Fi", "Thriller"],
    runTime: 117,
    posterURL: "https://example.com/posters/last-signal.jpg",
    createdBy: userID,
  },
  {
    title: "Chasing Shadows",
    overviews: "A cop hunts a criminal who leaves no trace behind.",
    releaseYear: "2017",
    genres: ["Crime", "Thriller"],
    runTime: 113,
    posterURL: "https://example.com/posters/chasing-shadows.jpg",
    createdBy: userID,
  },
  {
    title: "Golden Days",
    overviews: "Friends reunite to relive their youth and mend old wounds.",
    releaseYear: "2014",
    genres: ["Drama", "Comedy"],
    runTime: 105,
    posterURL: null,
    createdBy: userID,
  },
  {
    title: "Stormbreaker",
    overviews: "A rescue team races against nature’s fury.",
    releaseYear: "2023",
    genres: ["Action", "Adventure"],
    runTime: 128,
    posterURL: "https://example.com/posters/stormbreaker.jpg",
    createdBy: userID,
  },
  {
    title: "After the Silence",
    overviews: "A world adapts after sound becomes deadly.",
    releaseYear: "2022",
    genres: ["Horror", "Sci-Fi"],
    runTime: 116,
    posterURL: "https://example.com/posters/after-silence.jpg",
    createdBy: userID,
  },
];

const seedMovies = async () => {
  for (const movie of sampleMovies) {
    console.log('checking movie ', movie)
    await prisma.movie.create({
      data: movie,
    });
    console.log("movie creaeted: ", movie.title);
  }
};

seedMovies()
  .then(() => console.log("successfully seeded"))
  .catch((error) => {
    console.log("error seeding movies : ", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
