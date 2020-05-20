
let json = `
{
  "genesis": {
    "abbrev": "gn",
    "name": "Genesis"
  },
  "exodus": {
    "abbrev": "ex",
    "name": "Exodus"
  },
  "leviticus": {
    "abbrev": "lv",
    "name": "Leviticus"
  },
  "numbers": {
    "abbrev": "nm",
    "name": "Numbers"
  },
  "deuteronomy": {
    "abbrev": "dt",
    "name": "Deuteronomy"
  },
  "joshua": {
    "abbrev": "js",
    "name": "Joshua"
  },
  "judges": {
    "abbrev": "jud",
    "name": "Judges"
  },
  "ruth": {
    "abbrev": "rt",
    "name": "Ruth"
  },
  "i_samuel": {
    "abbrev": "1sm",
    "name": "1 Samuel"
  },
  "ii_samuel": {
    "abbrev": "2sm",
    "name": "2 Samuel"
  },
  "i_kings": {
    "abbrev": "1kgs",
    "name": "1 Kings"
  },
  "ii_kings": {
    "abbrev": "2kgs",
    "name": "2 Kings"
  },
  "i_chronicles": {
    "abbrev": "1ch",
    "name": "1 Chronicles"
  },
  "ii_chronicles": {
    "abbrev": "2ch",
    "name": "2 Chronicles"
  },
  "ezra": {
    "abbrev": "ezr",
    "name": "Ezra"
  },
  "nehemiah": {
    "abbrev": "ne",
    "name": "Nehemiah"
  },
  "esther": {
    "abbrev": "et",
    "name": "Esther"
  },
  "job": {
    "abbrev": "job",
    "name": "Job"
  },
  "psalms": {
    "abbrev": "ps",
    "name": "Psalms"
  },
  "proverbs": {
    "abbrev": "prv",
    "name": "Proverbs"
  },
  "ecclesiastes": {
    "abbrev": "ec",
    "name": "Ecclesiastes"
  },
  "song_of_solomon": {
    "abbrev": "so",
    "name": "Song of Solomon"
  },
  "isaiah": {
    "abbrev": "is",
    "name": "Isaiah"
  },
  "jeremiah": {
    "abbrev": "jr",
    "name": "Jeremiah"
  },
  "lamentations": {
    "abbrev": "lm",
    "name": "Lamentations"
  },
  "ezekiel": {
    "abbrev": "ez",
    "name": "Ezekiel"
  },
  "daniel": {
    "abbrev": "dn",
    "name": "Daniel"
  },
  "hosea": {
    "abbrev": "ho",
    "name": "Hosea"
  },
  "joel": {
    "abbrev": "jl",
    "name": "Joel"
  },
  "amos": {
    "abbrev": "am",
    "name": "Amos"
  },
  "obadiah": {
    "abbrev": "ob",
    "name": "Obadiah"
  },
  "jonah": {
    "abbrev": "jn",
    "name": "Jonah"
  },
  "micah": {
    "abbrev": "mi",
    "name": "Micah"
  },
  "nahum": {
    "abbrev": "na",
    "name": "Nahum"
  },
  "habakkuk": {
    "abbrev": "hk",
    "name": "Habakkuk"
  },
  "zephaniah": {
    "abbrev": "zp",
    "name": "Zephaniah"
  },
  "haggai": {
    "abbrev": "hg",
    "name": "Haggai"
  },
  "zechariah": {
    "abbrev": "zc",
    "name": "Zechariah"
  },
  "malachi": {
    "abbrev": "ml",
    "name": "Malachi"
  },
  "matthew": {
    "abbrev": "mt",
    "name": "Matthew"
  },
  "mark": {
    "abbrev": "mk",
    "name": "Mark"
  },
  "luke": {
    "abbrev": "lk",
    "name": "Luke"
  },
  "john": {
    "abbrev": "jo",
    "name": "John"
  },
  "acts": {
    "abbrev": "act",
    "name": "Acts"
  },
  "romans": {
    "abbrev": "rm",
    "name": "Romans"
  },
  "i_corinthians": {
    "abbrev": "1co",
    "name": "1 Corinthians"
  },
  "ii_corinthians": {
    "abbrev": "2co",
    "name": "2 Corinthians"
  },
  "galatians": {
    "abbrev": "gl",
    "name": "Galatians"
  },
  "ephesians": {
    "abbrev": "eph",
    "name": "Ephesians"
  },
  "philippians": {
    "abbrev": "ph",
    "name": "Philippians"
  },
  "colossians": {
    "abbrev": "cl",
    "name": "Colossians"
  },
  "i_thessalonians": {
    "abbrev": "1ts",
    "name": "1 Thessalonians"
  },
  "ii_thessalonians": {
    "abbrev": "2ts",
    "name": "2 Thessalonians"
  },
  "i_timothy": {
    "abbrev": "1tm",
    "name": "1 Timothy"
  },
  "ii_timothy": {
    "abbrev": "2tm",
    "name": "2 Timothy"
  },
  "titus": {
    "abbrev": "tt",
    "name": "Titus"
  },
  "philemon": {
    "abbrev": "phm",
    "name": "Philemon"
  },
  "hebrews": {
    "abbrev": "hb",
    "name": "Hebrews"
  },
  "james": {
    "abbrev": "jm",
    "name": "James"
  },
  "i_peter": {
    "abbrev": "1pe",
    "name": "1 Peter"
  },
  "ii_peter": {
    "abbrev": "2pe",
    "name": "2 Peter"
  },
  "i_john": {
    "abbrev": "1jo",
    "name": "1 John"
  },
  "ii_john": {
    "abbrev": "2jo",
    "name": "2 John"
  },
  "iii_john": {
    "abbrev": "3jo",
    "name": "3 John"
  },
  "jude": {
    "abbrev": "jd",
    "name": "Jude"
  },
  "revelation": {
    "abbrev": "re",
    "name": "Revelation"
  }
}
`;
let parsed = JSON.parse(json);
module.exports = parsed;
