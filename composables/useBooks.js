export const useBooks = () => {
  // Initial books data
  const initialBooks = [
  {
    "_id": "A001",
    "title": "Design Patterns",
    "author": "Robert C. Martin",
    "published_year": 1986,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A002",
    "title": "You Don't Know JS",
    "author": "Robert C. Martin",
    "published_year": 2020,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A003",
    "title": "JavaScript: The Good Parts",
    "author": "Andrew Hunt",
    "published_year": 2016,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A004",
    "title": "The Pragmatic Programmer",
    "author": "Kyle Simpson",
    "published_year": 1996,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A005",
    "title": "Refactoring",
    "author": "Steve McConnell",
    "published_year": 2018,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A006",
    "title": "Design Patterns",
    "author": "Erich Gamma",
    "published_year": 2025,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A007",
    "title": "Head First Design Patterns",
    "author": "Robert C. Martin",
    "published_year": 2014,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A008",
    "title": "Clean Architecture",
    "author": "Robert C. Martin",
    "published_year": 2025,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A009",
    "title": "JavaScript: The Good Parts",
    "author": "Eric Freeman",
    "published_year": 2015,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A010",
    "title": "Clean Architecture",
    "author": "Marijn Haverbeke",
    "published_year": 1984,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A011",
    "title": "Eloquent JavaScript",
    "author": "Erich Gamma",
    "published_year": 1994,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A012",
    "title": "The Pragmatic Programmer",
    "author": "Marijn Haverbeke",
    "published_year": 1987,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A013",
    "title": "Eloquent JavaScript",
    "author": "Andrew Hunt",
    "published_year": 2003,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A014",
    "title": "Code Complete",
    "author": "Kyle Simpson",
    "published_year": 1984,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A015",
    "title": "Refactoring",
    "author": "Eric Freeman",
    "published_year": 1980,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A016",
    "title": "Eloquent JavaScript",
    "author": "Steve McConnell",
    "published_year": 2002,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A017",
    "title": "Head First Design Patterns",
    "author": "Eric Freeman",
    "published_year": 1994,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A018",
    "title": "The Mythical Man-Month",
    "author": "Kyle Simpson",
    "published_year": 1982,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A019",
    "title": "Head First Design Patterns",
    "author": "Martin Fowler",
    "published_year": 1998,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A020",
    "title": "JavaScript: The Good Parts",
    "author": "Andrew Hunt",
    "published_year": 1982,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A021",
    "title": "Code Complete",
    "author": "Steve McConnell",
    "published_year": 2014,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A022",
    "title": "Design Patterns",
    "author": "Robert C. Martin",
    "published_year": 2021,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A023",
    "title": "Design Patterns",
    "author": "Marijn Haverbeke",
    "published_year": 1995,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A024",
    "title": "Eloquent JavaScript",
    "author": "Robert C. Martin",
    "published_year": 1993,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A025",
    "title": "The Mythical Man-Month",
    "author": "Eric Freeman",
    "published_year": 2024,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A026",
    "title": "Clean Architecture",
    "author": "Robert C. Martin",
    "published_year": 1990,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A027",
    "title": "You Don't Know JS",
    "author": "Erich Gamma",
    "published_year": 2002,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A028",
    "title": "You Don't Know JS",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 2010,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A029",
    "title": "Code Complete",
    "author": "Andrew Hunt",
    "published_year": 1999,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A030",
    "title": "Head First Design Patterns",
    "author": "Kyle Simpson",
    "published_year": 2021,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A031",
    "title": "Clean Architecture",
    "author": "Marijn Haverbeke",
    "published_year": 2003,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A032",
    "title": "JavaScript: The Good Parts",
    "author": "Martin Fowler",
    "published_year": 1988,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A033",
    "title": "Head First Design Patterns",
    "author": "Steve McConnell",
    "published_year": 2002,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A034",
    "title": "You Don't Know JS",
    "author": "Marijn Haverbeke",
    "published_year": 1987,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A035",
    "title": "The Mythical Man-Month",
    "author": "Douglas Crockford",
    "published_year": 2004,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A036",
    "title": "Head First Design Patterns",
    "author": "Andrew Hunt",
    "published_year": 2001,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A037",
    "title": "The Mythical Man-Month",
    "author": "Douglas Crockford",
    "published_year": 2024,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A038",
    "title": "Clean Architecture",
    "author": "Kyle Simpson",
    "published_year": 1987,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A039",
    "title": "You Don't Know JS",
    "author": "Douglas Crockford",
    "published_year": 1985,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A040",
    "title": "Code Complete",
    "author": "Andrew Hunt",
    "published_year": 2025,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A041",
    "title": "You Don't Know JS",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 1985,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A042",
    "title": "Clean Architecture",
    "author": "Kyle Simpson",
    "published_year": 1993,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A043",
    "title": "Eloquent JavaScript",
    "author": "Erich Gamma",
    "published_year": 2021,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A044",
    "title": "The Pragmatic Programmer",
    "author": "Kyle Simpson",
    "published_year": 2004,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A045",
    "title": "The Pragmatic Programmer",
    "author": "Andrew Hunt",
    "published_year": 2015,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A046",
    "title": "Eloquent JavaScript",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 2011,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A047",
    "title": "Code Complete",
    "author": "Douglas Crockford",
    "published_year": 2017,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A048",
    "title": "JavaScript: The Good Parts",
    "author": "Martin Fowler",
    "published_year": 1991,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A049",
    "title": "Design Patterns",
    "author": "Douglas Crockford",
    "published_year": 1982,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A050",
    "title": "Clean Architecture",
    "author": "Erich Gamma",
    "published_year": 1981,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A051",
    "title": "Eloquent JavaScript",
    "author": "Erich Gamma",
    "published_year": 1983,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A052",
    "title": "Eloquent JavaScript",
    "author": "Erich Gamma",
    "published_year": 1989,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A053",
    "title": "The Pragmatic Programmer",
    "author": "Marijn Haverbeke",
    "published_year": 2003,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A054",
    "title": "Code Complete",
    "author": "Andrew Hunt",
    "published_year": 1994,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A055",
    "title": "You Don't Know JS",
    "author": "Douglas Crockford",
    "published_year": 1988,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A056",
    "title": "Head First Design Patterns",
    "author": "Kyle Simpson",
    "published_year": 1997,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A057",
    "title": "Head First Design Patterns",
    "author": "Steve McConnell",
    "published_year": 2016,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A058",
    "title": "Clean Architecture",
    "author": "Marijn Haverbeke",
    "published_year": 1984,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A059",
    "title": "Eloquent JavaScript",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 1987,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A060",
    "title": "Clean Architecture",
    "author": "Robert C. Martin",
    "published_year": 1986,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A061",
    "title": "Design Patterns",
    "author": "Douglas Crockford",
    "published_year": 2009,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A062",
    "title": "The Mythical Man-Month",
    "author": "Robert C. Martin",
    "published_year": 2003,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A063",
    "title": "Code Complete",
    "author": "Marijn Haverbeke",
    "published_year": 2017,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A064",
    "title": "Eloquent JavaScript",
    "author": "Eric Freeman",
    "published_year": 2023,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A065",
    "title": "JavaScript: The Good Parts",
    "author": "Steve McConnell",
    "published_year": 2014,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A066",
    "title": "Eloquent JavaScript",
    "author": "Martin Fowler",
    "published_year": 2009,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A067",
    "title": "Refactoring",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 2004,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A068",
    "title": "Clean Architecture",
    "author": "Erich Gamma",
    "published_year": 2015,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A069",
    "title": "Eloquent JavaScript",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 1988,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A070",
    "title": "The Pragmatic Programmer",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 1994,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A071",
    "title": "Head First Design Patterns",
    "author": "Steve McConnell",
    "published_year": 2015,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A072",
    "title": "Refactoring",
    "author": "Eric Freeman",
    "published_year": 2025,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A073",
    "title": "JavaScript: The Good Parts",
    "author": "Marijn Haverbeke",
    "published_year": 2016,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A074",
    "title": "Code Complete",
    "author": "Steve McConnell",
    "published_year": 2005,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A075",
    "title": "Eloquent JavaScript",
    "author": "Erich Gamma",
    "published_year": 2012,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A076",
    "title": "Design Patterns",
    "author": "Steve McConnell",
    "published_year": 1983,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A077",
    "title": "Head First Design Patterns",
    "author": "Marijn Haverbeke",
    "published_year": 1989,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A078",
    "title": "The Pragmatic Programmer",
    "author": "Eric Freeman",
    "published_year": 2005,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A079",
    "title": "Design Patterns",
    "author": "Steve McConnell",
    "published_year": 2020,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A080",
    "title": "Head First Design Patterns",
    "author": "Robert C. Martin",
    "published_year": 2015,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A081",
    "title": "Eloquent JavaScript",
    "author": "Robert C. Martin",
    "published_year": 2010,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A082",
    "title": "Clean Architecture",
    "author": "Kyle Simpson",
    "published_year": 2002,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A083",
    "title": "Design Patterns",
    "author": "Steve McConnell",
    "published_year": 2004,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A084",
    "title": "Clean Architecture",
    "author": "Erich Gamma",
    "published_year": 2016,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A085",
    "title": "Refactoring",
    "author": "Steve McConnell",
    "published_year": 2018,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A086",
    "title": "Design Patterns",
    "author": "Andrew Hunt",
    "published_year": 1980,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A087",
    "title": "The Pragmatic Programmer",
    "author": "Robert C. Martin",
    "published_year": 1999,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A088",
    "title": "Clean Architecture",
    "author": "Erich Gamma",
    "published_year": 2012,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A089",
    "title": "The Mythical Man-Month",
    "author": "Douglas Crockford",
    "published_year": 2012,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A090",
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "published_year": 1989,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A091",
    "title": "Design Patterns",
    "author": "Eric Freeman",
    "published_year": 1998,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A092",
    "title": "Head First Design Patterns",
    "author": "Erich Gamma",
    "published_year": 1991,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A093",
    "title": "Code Complete",
    "author": "Andrew Hunt",
    "published_year": 2017,
    "genre": "Programming",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A094",
    "title": "Code Complete",
    "author": "Martin Fowler",
    "published_year": 2002,
    "genre": "Agile",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A095",
    "title": "The Mythical Man-Month",
    "author": "Douglas Crockford",
    "published_year": 1996,
    "genre": "Software Engineering",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A096",
    "title": "The Mythical Man-Month",
    "author": "Andrew Hunt",
    "published_year": 1999,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A097",
    "title": "JavaScript: The Good Parts",
    "author": "Robert C. Martin",
    "published_year": 2002,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A098",
    "title": "The Pragmatic Programmer",
    "author": "Frederick P. Brooks Jr.",
    "published_year": 1993,
    "genre": "Computer Science",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A099",
    "title": "JavaScript: The Good Parts",
    "author": "Andrew Hunt",
    "published_year": 1982,
    "genre": "Web Development",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  {
    "_id": "A100",
    "title": "The Mythical Man-Month",
    "author": "Douglas Crockford",
    "published_year": 2018,
    "genre": "DevOps",
    "created_at": "2025-06-16T12:00:00Z",
    "updated_at": "2025-06-16T12:00:00Z"
  },
  ]

  const books = ref([...initialBooks])
  const loading = ref(false)
  const error = ref('')

  const simulateLoading = (callback, duration = 800) => {
    loading.value = true
    error.value = ''
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = callback()
          loading.value = false
          resolve(result)
        } catch (err) {
          error.value = 'Something went wrong. Please try again.'
          loading.value = false
          reject(err instanceof Error ? err : new Error(err))
        }
      }, duration)
    })
  }

  const generateId = () => {
    const prefix = 'A'
    const number = String(books.value.length + 1).padStart(3, '0')
    return prefix + number
  }

  const addBook = async (bookData) => {
    return simulateLoading(() => {
      const newBook = {
        _id: generateId(),
        ...bookData,
        published_year: parseInt(bookData.published_year),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      books.value.push(newBook)
    })
  }

  const updateBook = async (bookId, bookData) => {
    return simulateLoading(() => {
      const index = books.value.findIndex(book => book._id === bookId)
      if (index !== -1) {
        books.value[index] = {
          ...books.value[index],
          ...bookData,
          published_year: parseInt(bookData.published_year),
          updated_at: new Date().toISOString()
        }
      }
    })
  }

  const deleteBook = async (bookId) => {
    return simulateLoading(() => {
      books.value = books.value.filter(book => book._id !== bookId)
    }, 500)
  }

  return {
    books: readonly(books),
    loading: readonly(loading),
    error: readonly(error),
    addBook,
    updateBook,
    deleteBook
  }
}