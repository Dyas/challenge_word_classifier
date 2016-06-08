module.exports = {};
(function () {
    var lookup = [
        ["t", "o", "a", "w", "b", "c", "d", "s", "f", "m", "r", "h", "i", "y", "e", "g", "l", "n", "o", "u", "j", "k"],
        ["h", "o", "e", "i", "a", "u", "n", "r", "t"],
        ["e", "s", "a", "r", "n", "i", "u"],
        ["e", "s", "t", "d", "n", "r", "y", "f", "l", "o", "g", "h", "a", "k", "m", "p", "u", "w"]
    ];
    var bi = ["th", "he", "an", "in", "er", "on", "re", "ed", "nd", "ha", "at", "en", "es", "of", "nt", "ea", "ti", "to", "io", "le", "is", "ou", "ar", "as", "de", "rt", "ve", "ae"];
    var tern = ["the", "and", "tha", "ent", "ion", "tio", "for", "nde", "has", "nce", "tis", "oft", "men"];
    var doubl = ["ss", "ee", "tt", "ff", "ll", "pp", "mm", "oo", "cc"];
    var next_e = ["r", "s", "n", "d"];
    var next_p = ["e", "a", "o", "i", "l", "h"];
    var one = ['a', 'i', 'o'];
    var two = ["ac", "ad", "ag", "ah", "al", "am", "an", "ar", "as", "at", "au", "av", "ay", "ba", "be", "bi", "bk", "br", "by", "ca", "cd", "cf", "ci", "cl", "cm", "co", "cr", "cs", "cu", "db", "di", "do", "dr", "ed", "eh", "em", "er", "es", "eu", "ex", "fa", "fe", "fm", "fr", "ga", "gd", "ge", "go", "gs", "ha", "he", "hf", "hg", "hi", "ho", "hz", "id", "if", "in", "io", "ir", "is", "it", "jo", "jr", "kc", "kr", "ks", "kw", "la", "le", "li", "ln", "lo", "lr", "ls", "lt", "lu", "ma", "mb", "md", "me", "mg", "mi", "mn", "mo", "mr", "ms", "mt", "mu", "my", "na", "nb", "nd", "ne", "ni", "no", "np", "nu", "ob", "of", "oh", "ok", "on", "or", "os", "ow", "ox", "oz", "pa", "pb", "pd", "ph", "pi", "pl", "pm", "po", "pt", "pu", "ra", "rb", "rd", "re", "rh", "rn", "rs", "ru", "rx", "sb", "sc", "se", "sh", "si", "sm", "sn", "so", "sq", "sr", "st", "ta", "tb", "tc", "th", "ti", "tl", "tm", "to", "ts", "ty", "uh", "um", "up", "ur", "us", "va", "vs", "we", "wm", "wu", "xe", "yb", "ye", "yo", "zn", "zr"];
    var three = ["abe", "ace", "act", "ada", "add", "ado", "ads", "adz", "aft", "age", "ago", "aha", "aid", "ail", "aim", "air", "ala", "alb", "ale", "ali", "all", "amp", "amy", "ana", "and", "ani", "ann", "ant", "any", "aol", "ape", "apr", "apt", "ara", "arc", "are", "ark", "arm", "art", "ash", "ask", "asp", "ate", "ats", "aug", "auk", "ava", "ave", "awe", "awl", "axe", "aye", "baa", "bad", "bag", "bah", "ban", "bar", "bat", "bay", "bed", "bee", "beg", "ben", "bet", "bib", "bic", "bid", "big", "bin", "bit", "blu", "bmw", "boa", "bob", "bog", "boo", "bop", "bow", "box", "boy", "bra", "brr", "btu", "bud", "bug", "bum", "bun", "bur", "bus", "but", "buy", "bye", "cab", "cad", "cal", "cam", "can", "cap", "car", "cat", "caw", "che", "chi", "cid", "cob", "cod", "cog", "col", "com", "con", "coo", "cop", "cot", "cow", "cox", "coy", "cry", "cub", "cud", "cue", "cup", "cur", "cut", "dab", "dad", "dam", "dan", "day", "deb", "dec", "dee", "del", "dem", "den", "dew", "did", "die", "dig", "dim", "din", "dip", "dis", "dix", "doc", "doe", "dog", "don", "dos", "dot", "dow", "dry", "dub", "dud", "due", "dug", "duh", "dun", "duo", "dye", "ear", "eat", "ebb", "eco", "eel", "egg", "ego", "eke", "elf", "eli", "elk", "ell", "elm", "ems", "emu", "end", "eng", "eon", "era", "ere", "erg", "err", "esq", "eta", "eva", "eve", "ewe", "eye", "fad", "fag", "fan", "far", "fat", "fax", "fay", "fdr", "feb", "fed", "fee", "fen", "fer", "few", "fey", "fez", "fib", "fie", "fig", "fin", "fir", "fit", "fix", "fla", "flo", "flu", "fly", "fob", "foe", "fog", "fop", "for", "fox", "fri", "fro", "fry", "fun", "fur", "gab", "gad", "gag", "gal", "gap", "gas", "gay", "gee", "gel", "gem", "gen", "geo", "ger", "get", "gig", "gil", "gin", "gnu", "goa", "gob", "god", "gog", "goo", "got", "gte", "gum", "gun", "gus", "gut", "guy", "gym", "gyp", "had", "hag", "hah", "hal", "ham", "han", "has", "hat", "haw", "hay", "hem", "hen", "hep", "her", "hes", "hew", "hex", "hey", "hid", "hie", "him", "hip", "his", "hit", "hob", "hod", "hoe", "hog", "hon", "hop", "hos", "hot", "how", "hub", "hue", "hug", "huh", "hui", "hum", "hun", "hus", "hut", "ian", "ibm", "ibo", "ice", "icy", "ida", "ids", "ifs", "ike", "ila", "ilk", "ill", "imp", "ina", "inc", "ind", "ing", "ink", "inn", "ins", "ion", "ira", "ire", "irk", "ism", "ito", "its", "iva", "ivy", "jab", "jag", "jam", "jan", "jar", "jaw", "jay", "jed", "jet", "jew", "jfk", "jib", "jig", "jim", "job", "joe", "jog", "jon", "jot", "joy", "jug", "jul", "jun", "jut", "kay", "keg", "ken", "key", "kfc", "khz", "kid", "kim", "kin", "kip", "kit", "lab", "lad", "lag", "lam", "lao", "lap", "law", "lax", "lay", "lbj", "lea", "led", "lee", "leg", "lei", "len", "leo", "les", "let", "lew", "lib", "lid", "lie", "lin", "lip", "lit", "liz", "lob", "log", "lon", "lop", "lot", "lou", "low", "lox", "ltd", "lug", "luz", "lye", "lyx", "mac", "mad", "mae", "mai", "maj", "man", "mao", "map", "mar", "mas", "mat", "maw", "max", "may", "mci", "meg", "mel", "men", "mes", "met", "mew", "mgm", "mhz", "mia", "mid", "mig", "mil", "min", "mir", "mit", "mix", "mob", "mod", "moe", "mom", "mon", "moo", "mop", "mow", "mrs", "mud", "mug", "mum", "mys", "nab", "nag", "nam", "nan", "nap", "nat", "nay", "ned", "née", "net", "nev", "new", "nib", "nil", "nip", "nit", "nix", "nod", "noe", "noh", "non", "nor", "not", "nov", "now", "nth", "nub", "nun", "nut", "oaf", "oak", "oar", "oat", "oct", "odd", "ode", "off", "oft", "ohm", "oho", "ohs", "oil", "oks", "ola", "old", "one", "ono", "opt", "ora", "orb", "ore", "orr", "our", "out", "ova", "owe", "owl", "own", "pad", "pal", "pam", "pan", "pap", "par", "pas", "pat", "paw", "pay", "pea", "pee", "peg", "pei", "pen", "pep", "per", "pet", "pew", "phd", "pie", "pig", "pin", "pip", "pis", "pit", "ply", "pod", "poe", "poi", "pol", "pop", "pot", "pox", "pro", "pry", "pub", "pug", "pun", "pup", "pus", "put", "pym", "pyx", "qom", "qua", "rae", "rag", "ram", "ran", "rap", "rat", "raw", "ray", "rca", "red", "ref", "rep", "rev", "rex", "rho", "rib", "rid", "rig", "rim", "rio", "rip", "rob", "rod", "roe", "ron", "rot", "row", "roy", "rte", "rub", "rue", "rug", "rum", "run", "rut", "rye", "sac", "sad", "sag", "sal", "sam", "san", "sap", "sat", "saw", "sax", "say", "sea", "sec", "see", "sen", "set", "sew", "sex", "sgt", "she", "shy", "sic", "sid", "sin", "sip", "sir", "sis", "sit", "six", "ski", "sky", "sly", "sob", "sod", "sol", "son", "sop", "sos", "sot", "sow", "sox", "soy", "spa", "spy", "stu", "sty", "sub", "sue", "sui", "sum", "sun", "sup", "tab", "tad", "tag", "tam", "tan", "tao", "tap", "tar", "tat", "tax", "tea", "ted", "tee", "ten", "tet", "tex", "the", "tho", "thy", "tia", "tic", "tie", "tim", "tin", "tip", "tit", "tod", "toe", "tog", "tom", "ton", "too", "top", "tor", "tot", "tow", "toy", "try", "tub", "tug", "tun", "tut", "tux", "twa", "two", "ubs", "ufa", "ugh", "ump", "ups", "urn", "use", "ute", "uzi", "val", "van", "vat", "vet", "vex", "via", "vic", "vie", "vim", "vow", "wac", "wad", "wag", "wan", "war", "was", "wax", "way", "web", "wed", "wee", "wei", "wen", "wet", "who", "why", "wig", "wii", "win", "wis", "wit", "wiz", "woe", "wok", "won", "woo", "wot", "wow", "wry", "wyo", "yak", "yam", "yap", "yaw", "yea", "yen", "yep", "yes", "yet", "yew", "yip", "yon", "you", "yuk", "yum", "yup", "zap", "zed", "zen", "zip", "zit", "zoe", "zoo"];
    var four = ["quad", "that", "with", "have", "this", "will", "your", "from", "they", "know", "want", "been", "good", "much", "some", "time", "very", "when", "come", "here", "just", "like", "long", "make", "many", "more", "only", "over", "such", "take", "than", "them", "well", "were"];
    var common = ["the", "of", "and", "to", "in", "a", "is", "that", "be", "it", "by", "are", "for", "was", "as", "he", "with", "on", "his", "at", "which", "but", "from", "has", "this", "will", "one", "have", "not", "were", "or", "all", "their", "an", "I", "there", "been", "many", "more", "so", "when", "had", "may", "today", "who", "would", "time", "we", "about", "after", "dollars", "if", "my", "other", "some", "them", "being", "its", "no", "only", "over", "very", "you", "into", "most", "than", "they", "day", "even", "made", "out", "first", "great", "must", "these", "can", "days", "every", "found", "general", "her", "here", "last", "new", "now", "people", "public", "said", "since", "still", "such", "through", "under", "up", "war", "well", "where", "while", "years", "before", "between", "country", "debts", "good", "him", "interest", "large", "like", "make", "our", "take", "upon", "what"];
    var beg = ["ab", "a", "abs", "au", "abac", "ac", "acm", "acr", "academ", "acanth", "acar", "acer", "acri", "acet", "acid", "actin", "acu", "acut", "ad", "af", "ag", "al", "am", "an", "ap", "ar", "as", "at", "aden", "adip", "aer", "aesth", "aether", "ether", "aev", "ev", "act", "agap", "agri", "agro", "ailur", "alac", "alb", "alcyon", "ale", "alg", "ali", "alter", "all", "allel", "alph", "alphit", "alt", "amat", "amic", "amath", "ambi", "amb", "ambo", "ambly", "ambul", "amm", "amn", "amph", "amphi", "ampl", "amygdal", "ana", "andr", "anem", "anim", "ann", "ant", "anti", "ante", "anth", "anthrac", "anthrop", "apo", "aper", "aphrod", "aqu", "ara", "arachn", "arbit", "arcan", "arch", "arche", "archi", "archae", "arct", "ard", "ardu", "aret", "argent", "arid", "arist", "arithm", "arsen", "art", "arthr", "arti", "asc", "asin", "asper", "aspr", "aster", "astr", "asthen", "ather", "athl", "aud", "audac", "aug", "auct", "aul", "aur", "auri", "aus", "aut", "auto", "aux", "av", "avi", "axi", "axon", "ba", "bac", "bal", "bel", "bol", "bapt", "bar", "bas", "bath", "be", "beat", "bell", "belli", "ben", "bi", "bin", "bis", "bib", "bibl", "bio", "blast", "blenn", "bomb", "bon", "bore", "botan", "bov", "bu", "brachi", "brachio", "brachion", "brachioni", "brachy", "brady", "bradys", "branchi", "brev", "bromat", "bromato", "broma", "bromo", "brom", "bronch", "bront", "brot", "bucc", "bulb", "bull", "burs", "butyr", "byss", "cac", "kak", "cad", "cas", "caes", "cal", "call", "calc", "cale", "cle", "calv", "calum", "calyp", "camer", "camisi", "camp", "can", "cant", "cand", "cend", "cap", "capt", "capit", "capr", "caps", "carbon", "carcer", "carcin", "cardi", "cardin", "carn", "carp", "cast", "cata", "cat", "caten", "cathar", "caud", "caus", "caust", "caut", "cav", "ced", "cess", "cel", "celer", "cen", "caen", "coen", "cens", "cent", "centen", "centesim", "centr", "centri", "cephal", "ceram", "cerat", "cern", "cer", "cervic", "ceter", "chir", "chelon", "chlor", "chondr", "chore", "chord", "chrom", "chron", "chrys", "cili", "ciner", "cing", "cinct", "circ", "circum", "cirr", "cit", "civ", "clad", "clam", "clar", "clast", "claud", "claus", "clav", "cleist", "cleithr", "clement", "clin", "cochl", "coel", "col", "cult", "coll", "color", "com", "con", "co", "cor", "condi", "contra", "copi", "copr", "copul", "cord", "corac", "cori", "corn", "coron", "corpor", "cortic", "cosm", "cosmet", "cost", "cotyl", "crani", "crass", "crea", "cred", "crepid", "cresc", "cribr", "cric", "crisp", "crist", "crit", "crisi", "cross", "cruc", "crur", "crypt", "cten", "cub", "culin", "culp", "cune", "cur", "curr", "curs", "curv", "cuspid", "cut", "cyan", "cycl", "cylind", "cyn", "cyst", "cyt", "dacry", "dactyl", "dam", "damn", "de", "deb", "dec", "decim", "decor", "del", "delt", "dem", "dom", "den", "dendr", "dens", "dent", "der", "despot", "deuter", "dexi", "dexter", "di", "dia", "diacosi", "dic", "dict", "dida", "digit", "din", "dipl", "doc", "doct", "dodec", "dog", "dox", "dol", "domin", "domit", "don", "dorm", "dors", "dra", "drach", "dram", "drom", "dros", "dry", "du", "dub", "duc", "duct", "dulc", "dur", "dy", "dyna", "dys", "ec", "ecclesi", "eco", "ecto", "ed", "es", "eg", "ego", "eiren", "electr", "elem", "alm", "em", "empt", "eme", "emul", "en", "enanti", "encephal", "endo", "engy", "ennea", "ens", "eo", "eos", "ep", "epi", "equ", "ere", "erg", "org", "urg", "erot", "err", "erythr", "eso", "eth", "ethm", "ethn", "etym", "eu", "eur", "ex", "e", "ef", "exo", "extra", "extrem", "fa", "fat", "fab", "fac", "fact", "falc", "fall", "fallac", "fals", "famili", "fasc", "fatu", "feder", "fel", "felic", "fell", "femin", "femor", "fend", "fens", "fenestr", "fer", "ferv", "feroc", "ferr", "fet", "fic", "fid", "fis", "fig", "fing", "fict", "fil", "fili", "fin", "find", "fiss", "firm", "fistul", "fix", "fl", "fla", "flacc", "flav", "flect", "flex", "flig", "flict", "flor", "flu", "fluv", "flux", "foc", "fod", "foss", "foen", "foli", "font", "for", "form", "formic", "fornic", "fort", "fove", "frag", "frang", "fract", "frater", "fratr", "fric", "frict", "frig", "front", "fruct", "frug", "fug", "fugit", "fum", "fund", "fus", "fulmin", "fung", "funct", "fur", "furt", "furc", "fusc", "galact", "gam", "gamb", "gamm", "gar", "gargal", "gargar", "gastr", "ge", "geo", "geiton", "gel", "gen", "gon", "gephyr", "ger", "gest", "geran", "germ", "geu", "glabr", "glaci", "gladi", "glauc", "glia", "glob", "glori", "gloss", "glot", "glut", "glutin", "glyc", "glyph", "gnath", "gno", "gnosc", "grad", "gred", "gress", "gramm", "gran", "grand", "graph", "grat", "grav", "greg", "gryp", "gubern", "gust", "gutt", "guttur", "gymn", "gyn", "gynaec", "gyr", "gyrin", "hab", "habit", "hadr", "haem", "hem", "hal", "hapl", "haur", "haust", "hedo", "heli", "hemer", "hemi", "hemo", "hen", "hendec", "hept", "her", "heir", "here", "hes", "herald", "herb", "heres", "heret", "herp", "heter", "heur", "hex", "hi", "hibern", "hiem", "hier", "hipp", "hirsut", "hispid", "histri", "hod", "hol", "hom", "homal", "home", "homin", "honor", "hor", "horm", "hort", "hospit", "host", "hum", "hyal", "hybr", "hydn", "hydr", "hygr", "hymen", "hyo", "hyp", "hyper", "hyph", "hypn", "hyps", "hys", "hyster", "iatr", "ichthy, ich-", "icos", "id", "ide", "idi", "ign", "imagin", "in", "il", "im", "ir", "inan", "infra", "insul", "inter", "intra", "irasc", "irat", "irid", "is, iso-", "ischi", "iter", "itiner", "jac", "janu", "joc", "judic", "jug", "jung", "junct", "junior", "jus", "jur", "juv", "jut", "juven", "juxta", "kil", "kilo", "kine", "cine", "klept", "kudo", "lab", "laps", "labi", "labor", "lacer", "lacrim", "lact", "lamin", "lamp", "lapid", "larg", "larv", "lat", "later", "laud", "laus", "lav", "lax", "lecith", "led", "les", "leg", "lect", "lei", "lekan", "leni", "leon", "lep", "lepsi", "leuc", "leuk", "lev", "liber", "libr", "lig", "limac", "limpa", "line", "lingu", "linqu", "lict", "lip", "liqu", "lit", "liter", "lith", "loc", "log", "long", "loqu", "locut", "luc", "lud", "lus", "lumin", "lu", "luv", "lut", "lun", "ly", "lysi", "lyt", "macer", "macr", "magn", "magnet", "maj", "mal", "mamm", "man", "mant", "manu", "mand", "mar", "mascul", "mater", "matr", "maxim", "mechan", "medi", "meg", "megal", "mei", "melan", "melior", "meliss", "mell", "memor", "men", "mening", "mend", "menstru", "mensur", "ment", "mer", "merc", "merg", "mers", "mes", "met", "meta", "meter", "metr", "mic", "micr", "migr", "milit", "mill", "millen", "mim", "min", "mina", "minth", "mir", "mis", "misc", "mixt", "miser", "mit", "miss", "mn", "mne", "mod", "mol", "moll", "mon", "monil", "monstra", "mont", "mor", "mora", "mord", "morph", "mort", "mov", "mot", "mulg", "muls", "multi", "mund", "mur", "mus", "musc", "mut", "my", "mycet", "mydr", "myl", "myri", "myrmec", "myth", "myx", "myz", "nar", "narc", "narr", "nas", "nasc", "nat", "naut", "nav", "ne", "neo", "neb", "nub", "necr", "nect", "nex", "neg", "nemat", "nemor", "nephr", "nerv", "nes", "neur", "nict", "nigr", "nihil", "noc", "noct", "nod", "nom", "nomad", "nomen", "nomin", "non", "nonagen", "nonagesim", "not", "noth", "nov", "noven", "novendec", "nox", "nu", "nupt", "nuc", "nuch", "nud", "null", "numer", "nunci", "nutri", "nyct", "ob", "o", "oc", "of", "og", "op", "os", "obel", "obol", "ocean", "ochl", "oct", "octav", "octogen", "octogesim", "octon", "ocul", "od", "odi", "odont", "odor", "odyn", "oec", "oed", "oen", "oesophag", "oestr", "ogdo", "ole", "olecran", "olig", "oliv", "om", "omas", "ombr", "oment", "omin", "ommat", "omni", "omphal", "on", "onc", "oneir", "oner", "oni", "onomat", "ont", "onych", "oo", "opac", "oper", "ophi", "ophthalm", "opisth", "ops", "opt", "opsi", "opson", "optim", "or", "ora", "orb", "orch", "orches", "ordin", "oreg", "organ", "ori", "ort", "orn", "ornith", "orphan", "orth", "oryz", "oscill", "osm", "oss", "oste", "osti", "ostrac", "ostre", "ot", "ov", "ovi", "oxy", "oz", "pac", "pach", "pact", "pae", "paed", "ped", "pagin", "pal", "palae", "pale", "palin", "palim", "pall", "palli", "palm", "palp", "palustr", "pan", "pam", "pand", "pans", "par", "para", "parc", "pars", "pariet", "part", "parthen", "parv", "pasc", "past", "pass", "passer", "pat", "path", "pater", "patr", "pati", "pauc", "pav", "pecc", "pect", "pector", "pecu", "pejor", "pel", "pelag", "pelarg", "pell", "puls", "pemp", "pomp", "pen", "poen", "puni", "pend", "pens", "penia", "penn", "pinn", "pent", "pentacosi", "pentecont", "pentecost", "peper", "pepon", "pept", "per", "peran", "perdic", "peri", "persic", "pessim", "pet", "petr", "phae", "phe", "phag", "phalang", "phalar", "pharmac", "phan", "phen", "pheb", "phob", "pher", "phor", "pheug", "phyg", "phil", "phim", "phleb", "phleg", "phlog", "phloe", "phon", "phos", "phot", "phrag", "phren", "phron", "phryn", "phtheg", "phyc", "phyl", "phyll", "phys", "physi", "physalid", "phyt", "pi", "pic", "piez", "pil", "pin", "ping", "pict", "pingu", "pir", "pisc", "pis", "pithec", "plac", "plea", "plag", "plan", "plang", "planct", "plas", "plat", "plaud", "plaus", "ple", "plet", "pleb", "plec", "ploc", "plect", "plex", "pleg", "plen", "plesi", "pleth", "pleur", "plic", "plinth", "plor", "plu", "plum", "plumb", "plur", "plus", "plurim", "plut", "pne", "pnig", "pnict", "po", "pod", "pogon", "poie", "poe", "pol", "pole", "polem", "poli", "poll", "pollic", "pollin", "poly", "pomph", "pon", "posit", "ponder", "pont", "popul", "por", "porc", "porn", "porphyr", "port", "portion", "post", "pot", "potam", "prag", "pras", "prat", "prav", "pre", "prec", "pred", "prehend", "prend", "prehens", "prem", "press", "presby", "preter", "preti", "pri", "priap", "prim", "prior", "prism", "priv", "pro", "prob", "proct", "prodig", "propri", "pros", "prosop", "prot", "proter", "proxim", "prun", "psa", "psall", "psamath", "psamm", "pseph", "pseud", "psil", "psithyr", "psittac", "psoph", "psor", "psych", "psychr", "pter", "pterid", "pto", "ptoch", "pty", "ptych", "pub", "public", "pude", "pug", "pugn", "pulchr", "pulmon", "pulver", "pung", "punct", "pup", "pur", "purg", "purpur", "put", "py", "pyel", "pyg", "pyl", "pyr", "pyramid", "pyrrh", "quadr", "quadragen", "quadragesim", "quart", "quasi", "quatern", "quati", "quass", "quer", "quesit", "qui", "quin", "quindecim", "quinden", "quinque", "quint", "quot", "rad", "ras", "radi", "radic", "ram", "ran", "ranc", "rap", "raph", "rar", "rauc", "re", "red", "rect", "reg", "rex", "regul", "rem", "ren", "rep", "rept", "resid", "ret", "retro", "rhabd", "rhach", "rach", "rhag", "rheg", "rhe", "rhetin", "rhig", "rhin", "rhiz", "rho", "rhod", "rhomb", "rhynch", "rid", "ris", "robor", "rod", "ros", "rog", "rostr", "rot", "ruber", "rubr", "rudi", "rug", "rumin", "rump", "rupt", "rur", "sacc", "sacchar", "sacr", "sagac", "sagitt", "sal", "sali", "salt", "salic", "salping", "salu", "salv", "san", "sanc", "sanguin", "sapi", "sapon", "sapphir", "sapr", "sarc", "sati", "saur", "sax", "scab", "scal", "scalen", "scand", "scans", "scandal", "scap", "scaph", "scat", "sced", "scel", "scen", "scept", "scop", "schem", "schid", "sci", "scind", "sciss", "scler", "scolec", "scoli", "scombr", "scot", "scrib", "script", "scrupl", "sculp", "scut", "scyph", "se", "sed", "seb", "sec", "sect", "seg", "sess", "sedec", "seget", "sei", "selen", "sell", "sema", "semi", "semin", "sen", "senti", "sens", "sept", "septen", "septim", "septuagen", "septuagesim", "septuagint", "sequ", "secut", "ser", "serp", "serr", "serv", "sesqui", "set", "sever", "sex", "sexagen", "sexagesim", "sext", "sibil", "sicc", "sicy", "sider", "sigm", "sign", "sil", "silv", "simi", "simil", "simul", "sinap", "singul", "sinistr", "sinu", "sinus", "siop", "siph", "sist", "sit", "siz", "smaragd", "smil", "soci", "sol", "sole", "solen", "solv", "solut", "soma", "somn", "somni", "son", "soph", "sopor", "sorb", "sorpt", "sord", "soror", "spa", "spad", "spars", "spath", "spati", "spec", "spect", "speir", "spor", "spele", "spelyng", "spend", "spond", "sper", "sperm", "sphal", "sphen", "spher", "sphing", "sphinct", "sphondyl", "sphrag", "sphyg", "spic", "spin", "spir", "splen", "spons", "spondyl", "spu", "sput", "squal", "squam", "squarros", "st", "stagn", "stala", "stann", "staphyl", "stasi", "statu", "steat", "steg", "stell", "stol", "sten", "stere", "stern", "strat", "steth", "sthen", "stich", "stig", "still", "stimul", "stin", "stingu", "stinct", "stoch", "stom", "stor", "streper", "streph", "stroph", "strob", "stromb", "strept", "strig", "strigos", "string", "strict", "stru", "struct", "stud", "stup", "styg", "styl", "su", "sut", "suad", "suas", "suav", "sub", "suf", "sug", "sup", "sus", "subter", "sucr", "sud", "sui", "sulc", "sum", "sumpt", "super", "supin", "supra", "surd", "surg", "sybar", "syc", "syn", "sy", "syg", "syl", "sym", "sys", "syring", "tac", "tach", "taeni", "tag", "tal", "tang", "tact", "tapet", "tarac", "tard", "tars", "taur", "tec", "toc", "techn", "tecn", "teg", "tect", "tele", "temn", "tom", "tempor", "ten", "tent", "tend", "tens", "tenu", "tep", "ter", "trit", "tere", "teret", "terg", "ters", "termin", "tern", "terr", "terti", "test", "tetart", "tetr", "teuch", "tex", "text", "thalam", "thalass", "than", "the", "thus", "thea", "thel", "theori", "ther", "therap", "therm", "thig", "thorac", "thym", "thyr", "thyre", "tim", "ting", "tinct", "ton", "top", "torn", "torpe", "torqu", "tort", "tot", "tox", "trab", "trach", "trag", "trah", "tract", "trans", "tra", "tran", "trapez", "traum", "trecent", "tredec", "treiskaidek", "trem", "trema", "trepid", "tri", "trib", "tribu", "tricen", "tricesim", "trigesim", "trich", "trin", "tritic", "troch", "trop", "troph", "truc", "trud", "trus", "trunc", "tryp", "tum", "turb", "tuss", "tympan", "typ", "typh", "tyrann", "uber", "uligin", "ul", "ultim", "ultra", "umbilic", "umbr", "un", "unc", "unci", "und", "undecim", "unden", "ungu", "ur", "uran", "urb", "urs", "ut", "us", "uv", "uxor", "vac", "vacc", "vacil", "vad", "vas", "vag", "val", "van", "vap", "vari", "varic", "veh", "vect", "vel", "vell", "vuls", "veloc", "ven", "vent", "vend", "vener", "ventr", "ver", "verb", "verber", "verm", "vern", "vers", "vert", "vesic", "vesper", "vest", "vestig", "vet", "veter", "vi", "vic", "vicen", "vigen", "vicesim", "vigesim", "vid", "vis", "vigil", "vil", "vill", "vin", "vinc", "vict", "vir", "visc", "viscer", "vit", "vitell", "viti", "vitr", "viv", "voc", "vol", "volv", "volut", "vom", "vor", "vorac", "vov", "vot", "vulg", "vulner", "vulp", "xanth", "xe", "xei", "xi", "xen", "xer", "xiph", "xyl", "ze", "zel", "zephyr", "zet", "zete", "zizyph", "zo", "zon", "zyg", "zym"];
    var end = ["cracy", "crat", "cry", "logy", "oid", "oma", "onym", "phile"];
    var mid = ["athroid", "ig", "egri", "imic", "enn", "cid", "cis", "cin", "cent", "cip", "cept", "cipit", "cus", "clud", "clus", "iqu", "fect", "fic", "fring", "gnit", "hib", "hibit", "hel", "ject", "over", "plod", "plos", "prim", "cuti", "cuss", "quir", "quisit", "rig", "secr", "sili", "sipi", "scend", "scens", "sid", "spers", "spic", "stitu", "tic", "tin"];
    var unkn = ["ac", "ad", "af", "ag", "al", "an", "ap", "ar", "a", "as", "at", "caed", "il", "im", "in", "ir", "mania"];
    var begmed = ["abdomin", "acanth", "acous", "acr", "adip", "adren", "aer", "aesthesio", "alb", "alge", "algo", "all", "ambi", "amni", "amph", "amylo", "ana", "andr", "angi", "aniso", "ankyl", "ancyl", "ante", "anti", "apo", "arch", "arsen", "arteri", "arthr", "articul", "atel", "ather", "atri", "aur", "aut", "aux", "axill", "azo", "bacteri", "balano", "bas", "bio", "blast", "blephar", "brachi", "brachy", "brady", "bronch", "bucc", "burs", "capill", "capit", "carcin", "cardi", "carp", "cata", "cephal", "cerat", "cerebell", "cerebr", "cervic", "cheil", "chem", "chlor", "chol", "cholecyst", "chondro", "chrom", "cili", "circum", "cis", "clostr", "colp", "com", "cor", "cor", "cord", "cornu", "coron", "cost", "cox", "crani", "cry", "cutane", "cyan", "cycl", "cyph", "cyt", "dacry", "dent", "dextr", "di", "dia", "dif", "digit", "diplo", "dis", "dromo", "duodeno", "dynam", "dys", "ect", "encephal", "endo", "eosin", "enter", "epi", "episi", "erythr", "esthesio", "ex", "exo", "extra", "faci", "fibr", "filli", "fore", "front", "galact", "gastr", "genu", "gingiv", "glauc", "gloss", "glott", "gluco", "glyc", "gnath", "gon", "gyno", "gynaeco", "gynae", "gyneco", "halluc", "hemaorhemo", "hemangiorhemangio", "hemi", "heter", "hidr", "home", "hom", "humer", "hydr", "hyper", "hyp", "hyster", "iatr", "idio", "ileo", "infra", "inter", "intra", "ipsi", "irid", "isch", "ischio", "iso", "kal", "karyo", "kerat", "koil", "kyph", "labi", "lacrim", "lapar", "laryng", "latero", "lei", "lept", "lip", "lith", "log", "lymph", "macr", "mamm", "mammill", "manu", "mast", "melan", "mening", "men", "mero", "mes", "meta", "metr", "micro", "milli", "mon", "morph", "muscul", "myc", "myel", "myl", "myri", "myring", "myx", "narc", "nas", "necr", "neo", "nephr", "nerv", "noci", "normo", "ocul", "odont", "odyn", "olig", "omphal", "onco", "onych", "oophor", "ophthalm", "optic", "orth", "osse", "ossi", "ovari", "oxo", "oxy", "pachy", "palpebr", "papill", "papul", "para", "parvo", "path", "pauci", "pector", "peo", "per", "peri", "phaco", "phagist", "phallo", "pharmaco", "pharyng", "phleb", "phon", "phos", "phot", "phot", "phyt", "piri", "pleio", "pleur", "pne", "pneum", "polio", "poly", "por", "porphyr", "post", "pre", "presby", "prim", "pro", "proct", "prosop", "prot", "pseud", "pterygo", "psor", "pyel", "pykno", "pyr", "quadr", "radi", "radic", "rect", "ren", "reticul", "retro", "rhabd", "rhachi", "rhin", "rhod", "rubr", "salping", "sarco", "schist", "schiz", "scler", "scoli", "scoto", "semi", "sial", "sigmoid", "sinistr", "sinus", "sito", "spasmo", "splen", "spondyl", "squamos", "sten", "steth", "stheno", "stomat", "sub", "super", "supra", "syl", "sys", "sym", "tachy", "terato", "tetan", "thec", "thel", "thely", "therap", "therm", "thromb", "thyr", "thym", "toco", "ton", "top", "tort", "trache", "trachel", "trans", "tri", "tympan", "ultra", "umbilic", "ungui", "ur", "uric", "urin", "uter", "vagin", "varic", "vas", "vasculo", "ven", "ventr", "ventricul", "vesic", "viscer", "xanth", "xen", "xer", "xiph", "zym"];
    var endmed = ["ac", "acal", "acusis", "ad", "aemia", "al", "algia", "ary", "ase", "asthenia", "ation", "cele", "centesis", "clast", "contra", "cyte", "desis", "dipsia", "dynia", "eal", "ectomy", "emesis", "emia", "foramen", "form", "fossa", "gen", "genic", "geusia", "gnosis", "gram", "gramme", "graph", "graphy", "gyny", "hepat", "iasis", "iatry", "ic", "icle", "ics", "ism", "ismus", "ist", "ite", "itis", "ium", "juxta(iuxta)", "logist", "logy", "lysis", "malacia", "melos", "meter", "metry", "oid", "ole", "oma", "omata", "one", "opsy", "or", "osis", "ous", "paresis", "pathy", "penia", "pepsia", "pexy", "phagy", "phil", "phobia", "plasia", "plasty", "plegia", "plexy", "poiesis", "ptosis", "ptysis", "rrhage", "rrhagia", "rrhaphy", "rrhea", "rrhexis", "rrhoea", "rupt", "sclerosis", "scope", "scopy", "spadias", "stalsis", "stasis", "staxis", "stenosis", "stom", "stomy", "tic", "tome", "tomy", "tony", "tripsy", "trophy", "version", "y", "Digestion", "Disease", "Eating", "abdomen", "aorta", "arm", "armpit", "artery", "back", "bigtoe", "bladder", "blood", "bloodclot", "bloodvessel", "body", "bone", "brain", "breast", "chest", "cheek", "ear", "eye", "eyelid", "face", "fallopiantubes", "finger", "forehead", "gallbladder", "genitals", "gland", "glans", "gums", "hair", "hand", "head", "heart", "horn", "intestine", "jaw", "kidney", "knee", "lip", "liver", "lungs", "mind", "mouth", "muscle", "nail", "navel", "neck", "nerve", "nose", "ovary", "pelvis", "penis", "pupil(oftheeye)", "rib", "ribcage", "shoulder", "sinus", "skin", "skull", "stomach", "testis", "throat(upperthroatcavity)", "throat", "thumb", "tooth", "tongue", "toe", "tumour", "ureter", "urethra", "uterinetubes", "uterus", "vagina", "vein", "vulva", "womb", "wrist", "black", "blue", "green", "purple", "red", "red-orange", "white", "yellow", "big", "biggest", "cold", "dead", "equal", "false", "flat", "great", "hard", "heavy", "hollow", "huge", "irregular", "large;extremelylarge", "largest", "long", "narrow", "new", "old", "sharp", "short", "small", "smallest", "slow", "fast", "soft", "straight", "thick", "around", "left", "middle", "right", "surrounding", "double", "equal", "few", "half", "twice", "ions", "ion"];
    var midmed = ["dactyl", "phago"];
    function foreach(o, c) {
        var _max = 0;
        var _o = JSON.parse(JSON.stringify(o));
        for (var e in _o) {
            if (!_o.hasOwnProperty(e))
                continue;
            if (c(e, o[e]) == false)
                return false;
        }
        return true;
    }
    function _test(word, size) {
        var prob = 0;
        var expected = (51 / size);
        if (size > 23) {
            return false;
        } else if (size == 1) {
            return (one.indexOf(word) >= 0);
        } else {
            if (common.indexOf(word) >= 0)
                return true;
            if (size == 2) {
                return (two.indexOf(word) >= 0);
            } else if (size == 3) {
                return (three.indexOf(word) >= 0);
            } else if (size == 4 && four.indexOf(word) >= 0) {
                return true;
            }
            if (size > 3) {
                var match = 1;
                if (lookup[0].indexOf(word[0]) >= 0) {
                    prob += 4 / size;
                    match++;
                }
                if (lookup[1].indexOf(word[1]) >= 0 && match > 1) {
                    prob += 4 / size;
                    match++;
                }
                if (lookup[2].indexOf(word[2]) >= 0 && match > 1) {
                    prob += 4 / size;
                    match++;
                }
                if (lookup[3].indexOf(word[size - 1]) >= 0) {
                    prob += (match * 8 / size);
                }
                pos = 0;
                var temp = word.substring(pos, size);
                while ((pos = temp.indexOf('e')) >= 0) {
                    pos++;
                    var elem = word[pos];
                    if (next_e[0] == elem || next_e[1] == elem || next_e[2] == elem || next_e[3] == elem)
                        prob += (12 / size);
                    temp = temp.substring(pos, size);
                }
                pos = 0;
                var temp = word.substring(pos, size);
                while ((pos = temp.indexOf('p')) >= 0) {
                    pos++;
                    var elem = word[pos];
                    if (next_p.indexOf(elem) >= 0)
                        prob += (10 / size);
                    temp = temp.substring(pos, size);
                }
                foreach(doubl, function (k, e) {
                    var i = word.indexOf(e[0]);
                    if (i >= 0 && word[i + 1] == e[1]) {
                        prob += (3 / size);
                        if (e[0] == 'l' && word[i + 2] == 'y')
                            prob += (3 / size);
                        if (e[0] == 'c' && word[i + 2] == 'h')
                            prob += (3 / size);
                    }
                    return true;
                });
                foreach(bi, function (k, e) {
                    var i = word.indexOf(e[0]);
                    if (i >= 0 && word[i + 1] == e[1]) {
                        prob += (2 / size);
                    }
                    return true;
                });
                foreach(tern, function (k, e) {
                    var i = word.indexOf(e[0]);
                    if (i >= 0 && word[i + 1] == e[1] && word[i + 2] == e[2]) {
                        if (e == 'ion' && word.indexOf("tion"))
                            prob += (1 / size);
                        prob += (e.length / size);
                    }
                    return true;
                });
                foreach(beg, function (k, e) {
                    if (e.length >= size)
                        return true;
                    if (word.indexOf(e) == 0) {
                        prob += (e.length / size);
                        return false;
                    }
                    return true;
                });
                var comp = 0;
                foreach(end, function (k, e) {
                    if (e.length >= size)
                        return true;
                    var temp = size - e.length;
                    if (word.indexOf(e) == temp) {
                        prob += (e.length / size);
                        comp++;
                    }
                    return true;
                });
                if (comp > 2 && size > 4) {
                    return false;
                }
                foreach(mid, function (k, e) {
                    if (e.length >= size)
                        return true;
                    var temp = word.indexOf(e);
                    if (temp > 0 && temp < size - 1) {
                        prob += (e.length / size);
                    }
                    return true;
                });
                foreach(unkn, function (k, e) {
                    if (e.length >= size)
                        return true;
                    var temp = word.indexOf(e);
                    if (temp >= 0) {
                        prob += (e.length / size);
                    }
                    return true;
                });
                foreach(begmed, function (k, e) {
                    if (e.length >= size)
                        return true;
                    if (word.indexOf(e) == 0) {
                        prob += (e.length / size);
                        medic = true;
                        return false;
                    }
                    return true;
                });
                foreach(endmed, function (k, e) {
                    if (e.length >= size)
                        return true;
                    var temp = size - e.length;
                    if (word.indexOf(e) == temp) {
                        prob += (e.length / size);
                        return false;
                    }
                    return true;
                });
                pos = 0;
                foreach(midmed, function (k, e) {
                    if (e.length >= size)
                        return true;
                    var temp = word.indexOf(e);
                    if (temp > 0 && temp < size - 1) {
                        prob += (e.length / size);
                        if (++pos > 3)
                            return false;
                    }
                    return true;
                });
            }
        }
        prob = prob * 100 / expected;
        return (prob > 50);
    }

    module.exports.init = function (data) {};
    module.exports.test = function (word) {
        var ap = word.indexOf("'");
        if (ap >= 0 && ap < word.length - 2) {
            return false;
        }
        if (ap > 0)
            word = word.substring(0, ap);
        var ret = _test(word.toLowerCase(), word.length);
        return ret;
    };
})();
