const courses = [
    {   "image":"https://img-a.udemycdn.com/course/240x135/851712_fc61_6.jpg?j1G5KbORIleaVzESOBuNAqYFHs0WdcpE_fTMJxeg07jAlG-0TDN2xWKjIsfnRVQm6l-toK97ykWEZp2Oei23fSEFapVbWZxsv_1rdT7S7c00fGUhnXSOEGuLxk-x",
        "name": "The Complete JavaScript Course 2020: From Zero to Expert!",
        "title": "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
        "price": 129,
      },
      {
      "image":"https://img-a.udemycdn.com/course/240x135/1470810_a8b0.jpg?3Etc2I7dzxR-ZhG0BiMEwGzhf-8rFZNyRxmvQ0FDNcwMzyLH_kJsNyt6zKVfDvuUPfeQaqijoDjZoDw7iLU_cFw3deVu6HuY6iBu66VBiCv2R-dLfp7dzeP6mnM",
      "name": "The Complete JavaScript Course 2020: From Zero to Expert!",
      "title": "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
      "price": 129,
    },
    {
    "image":"https://img-a.udemycdn.com/course/240x135/364426_2991_5.jpg?vMFrcKsq41mZnJ-aCFRpRtwtCQEzDCMX1Br-lOpeZN-WLaCn_v2NicsdB740lfLA5VYNF-9fJOXEAK_Nkxl6yvB_OyRapH4lloRkfPiWAYF3tRQgyqzkRfVutm5U",
    "name": "JavaScript: Understanding the Weird Parts",
    "title": "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
    "price": 20,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/2508942_11d3_2.jpg?S4GGX5NZ-pdV7PWLdbH8NcDx83eg0-hzWsckdkZHomUYM5nWzc8-kd1Iq9Wf7fYWSgsImONbMWn-nyLgarJyf-jv5OwXAO1o-IYWwi-AN9Mu2QtlRo07w4LbAWZDCA",
    "name": "JavaScript - The Complete Guide 2020 (Beginner + Advanced)",
    "title": "Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2020.",
    "price": 10.99,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/1463348_52a4_2.jpg?qRUK-FPmFTu109V0DUZ6q--dvCCsFAoeID1SEzInICK4LYnwP8ztHgAKEy0-XS_bysY44iw8vAfgz2etMvFgzI5KygW1rjH0TAZqO1bPMSdpNZNsbDNCJzh3B1rObg",
    "name": "Modern JavaScript From The Beginning",
    "title": "Learn and build projects with pure JavaScript (No frameworks or libraries)",
    "price": 12.99,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/861624_864d_2.jpg?aHqhYiyGB178ogWE7h53f0WZdcGeiWP8KV48ici4bQY6VcYaVh4OQrd4X8RsNbOfRkOmqoZ2Ge3ibsPl2rs05ad8ZulhlpqFumVzBfMH67KncyC6KFt_3f_wnm5g",
    "name": "ES6 Javascript: The Complete Developer's Guide",
    "title": "ES6 Javascript Development from scratch. Get practice with live examples and learn exactly where to apply ES6 features.",
    "price": 9.99,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/1406344_1d65_3.jpg?qUnmeH1Z7qcjp3xoTcQNPGc0gwAJaK1rv_Xx0Zf5WJ1kVi2vQuekKU1jzfpZ-w7K8jwsLvKYoa1KKg8aDV57K9lKLCS7En3L6EJnJQ0UtsqmfSH6qPBpnAtc0I2ghg",
    "name": "JavaScript Algorithms and Data Structures Masterclass",
    "title": "The Missing Computer Science and Coding Interview Bootcamp",
    "price": 17,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/1743420_0062.jpg?hOymWynehOnV2jGi3k6ia-7edbo1_emdrOA6H0PJy7xHvbt24ASjRMFPtQCuqAYmPHZNKofcdzTkbRgx7oinKm4c1LNzNlDipwe83X4qE8rR4ttukbhc06djiX0",
    "name": "JavaScript Basics for Beginners",
    "title": "JavaScript - Master the Fundamentals in 6 Hours",
    "price": 19.99,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/1639836_a03e_3.jpg?pOygJS1SYxKOWpXY3t7Y6qqkwLtJ47jrg1IOrTEaeKci4CGJn1xbdsbhiinYsGbV-lIwcHVkvfx46Ctx4bNldJzDsTUHZHN2rbF3eDFjqtT4uSu0KpUwvokbdVNvWg",
    "name": "Build Web Apps with Vue JS 2 & Firebase",
    "title": "Learn Vue JS & Firebase by creating & deploying dynamic web apps (including Authentication).",
    "price": 90,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/2088586_2981_3.jpg?CrtqNZiA0Pw4iCTGWauGxPjsTUAN67TLMUFA6lOUwg3F-paOaNP6jr6sqb5kwWYSHlvQMvSUZ8BBnXHX_fnUardZd8WpzdMj8BW9oKN8xfvu81YtNdYv1KagbS0cWQ",
    "name": "Asynchronous JavaScript: Promises, Callbacks, Async Await",
    "title": "Become an expert in Asynchronous JavaScript: Promises, Callbacks, Async Await, Event Loop, etc",
    "price": 120,
  },    {
    "image":"https://img-b.udemycdn.com/course/240x135/2201164_831a.jpg?secure=Bl9Brnid96KOzPkyeQFgXQ%3D%3D%2C1606720802",
    "name": "JavaScript: The Advanced Concepts",
    "title": "Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers",
    "price": 80,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/405818_aa3f_3.jpg?psYVWMWi7N92CkmauIJVDXx4Prx45BzBO_yxiVPBYO1waj8UqQrEb2uuay1fYYGgl_rX1hPxxU5xRHkrc66pS8TsdfPjEmmPeq3sEloNgaqsjrJ8fmmqARuWBqcs",
    "name": "JavaScript Basics for Beginners",
    "title": "JavaScript - Master the Fundamentals in 6 Hours",
    "price": 90,
  },    {
    "image":"https://img-b.udemycdn.com/course/240x135/2201164_831a.jpg?secure=Bl9Brnid96KOzPkyeQFgXQ%3D%3D%2C1606720802",
    "name": "Modern JavaScript (from Novice to Ninja)",
    "title": "Create awesome JavaScript driven web apps with modern JavaScript from the very beginning right through to ninja-level.",
    "price": 15.99,
  },    {
    "image":"https://img-b.udemycdn.com/course/240x135/685550_8ed4.jpg?secure=BJ4xv8wBJ-cKJXEKVkp7JQ%3D%3D%2C1606633606",
    "name": "Accelerated ES6 JavaScript Training",
    "title": "Learn and Use the Future of JavaScript - Today!",
    "price": 0,
  },    {
    "image":"https://img-a.udemycdn.com/course/240x135/860812_f16e_23.jpg?mLoym8294jbuhYnljVMki4etrEPKS_iJVdS-GekC02l0ebjWPJw1TgE-PpvxA2WY_LPkVxJfQd26qonclirytQaCEg1kHJ7K4rRLFCQGXhymy9sUjGVFWMCdvsz6EA",
    "name": "JavaScript Beginner Bootcamp (2020)",
    "title": "JavaScript for Beginners: Projects based learning, whiteboard animations, coding in the browser and quizzes.",
    "price": 60,
  },
]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let r = Math.floor(Math.random()*i);
        [a[i - 1], a[r]] = [a[r], a[i - 1]];
    }
}

shuffle(courses);

export default courses;