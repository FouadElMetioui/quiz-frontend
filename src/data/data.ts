export const getData = () => {
    return {
        quiz: [
            {
                id: 0, title: "Quiz 1", technology: "Java", currentQuestion: 0, score: 0, questions: [
                    {
                        id: 0,
                        question: "Quel est le type de retour de la méthode hashCode() dans la classe Object ?",
                        options: [
                            {id: 0, option: "int", isCorrect: true},
                            {id: 1, option: "long", isCorrect: false},
                            {id: 2, option: "void", isCorrect: false},
                            {id: 3, option: "boolean", isCorrect: false}
                        ]
                    },
                    {
                        id: 1,
                        question: "Quel est le mot-clé utilisé pour hériter d'une classe en Java ?",
                        options: [
                            {id: 0, option: "implements", isCorrect: false},
                            {id: 1, option: "inherits", isCorrect: false},
                            {id: 2, option: "extends", isCorrect: true},
                            {id: 3, option: "derives", isCorrect: false}
                        ]

                    },
                    {
                        id: 2,
                        question: "Laquelle des exceptions suivantes est une checked exception ?",
                        options: [
                            {id: 0, option: "NullPointerException", isCorrect: false},
                            {id: 1, option: "ArrayIndexOutOfBoundsException", isCorrect: false},
                            {id: 2, option: "ClassNotFoundException", isCorrect: true},
                            {id: 3, option: "IllegalArgumentException", isCorrect: false}
                        ]

                    },
                    {
                        id: 3,
                        question: "Quel mot-clé est utilisé pour empêcher l'héritage d'une classe ?",
                        options: [
                            {id: 0, option: "static", isCorrect: false},
                            {id: 1, option: "final", isCorrect: true},
                            {id: 2, option: "abstract", isCorrect: false},
                            {id: 3, option: "protected", isCorrect: false}
                        ]

                    },
                    {
                        id: 4,
                        question: "Laquelle des méthodes suivantes est utilisée pour démarrer un thread en Java ?",
                        options: [
                            {id: 0, option: "start()", isCorrect: true},
                            {id: 1, option: "run()", isCorrect: false},
                            {id: 2, option: "init()", isCorrect: false},
                            {id: 3, option: "begin()", isCorrect: false}
                        ]

                    },
                    {
                        id: 5,
                        question: "Quelle est la portée par défaut des variables d'instance en Java ?",
                        options: [
                            {id: 0, option: "public", isCorrect: false},
                            {id: 1, option: "private", isCorrect: false},
                            {id: 2, option: "protected", isCorrect: false},
                            {id: 3, option: "package-private", isCorrect: true}
                        ]

                    },
                    {
                        id: 6,
                        question: "Quel est le résultat de l'expression 10 / 4 en Java ?",
                        options: [
                            {id: 0, option: "2.5", isCorrect: false},
                            {id: 1, option: "2", isCorrect: true},
                            {id: 2, option: "2.0", isCorrect: false},
                            {id: 3, option: "3", isCorrect: false}
                        ]

                    },
                    {
                        id: 7,
                        question: "Quel package contient les classes de collection telles que ArrayList et HashMap?",
                        options: [
                            {id: 0, option: "java.util", isCorrect: true},
                            {id: 1, option: "java.io", isCorrect: false},
                            {id: 2, option: "java.lang", isCorrect: false},
                            {id: 3, option: "java.net", isCorrect: false}
                        ]

                    },
                    {
                        id: 8,
                        question: "Quelle est la taille d'un type de données int en Java ? ",
                        options: [
                            {id: 0, option: "8 bits", isCorrect: false},
                            {id: 1, option: "16 bits", isCorrect: false},
                            {id: 2, option: "32 bits", isCorrect: true},
                            {id: 3, option: "64 bits", isCorrect: false}
                        ]

                    },
                    {
                        id: 9,
                        question: "Quel mot-clé est utilisé pour déclarer une constante en Java ?",
                        options: [
                            {id: 0, option: "const", isCorrect: false},
                            {id: 1, option: "final", isCorrect: true},
                            {id: 2, option: "static", isCorrect: false},
                            {id: 3, option: "immutable", isCorrect: false}
                        ]

                    }
                ]
            },
            {
                id: 1, title: "Quiz 2", technology: "Python", currentQuestion: 0, score: 0, questions: [
                    {
                        id: 0,
                        question: "Quel est le résultat de l'expression 3 + 2 * 2 en Python ?",
                        options: [
                            {id: 0, option: "10", isCorrect: false},
                            {id: 1, option: "7", isCorrect: true},
                            {id: 2, option: "8", isCorrect: false},
                            {id: 3, option: "12", isCorrect: false}
                        ]
                    },
                    {
                        id: 1,
                        question: "Comment déclare-t-on une liste en Python ? ",
                        options: [
                            {id: 0, option: "my_list = []", isCorrect: true},
                            {id: 1, option: "my_list = {}", isCorrect: false},
                            {id: 2, option: "my_list = ()", isCorrect: false},
                            {id: 3, option: "my_list = <>", isCorrect: false}
                        ]

                    },
                    {
                        id: 2,
                        question: "Quelle est la sortie de la fonction len('Python')",
                        options: [
                            {id: 0, option: "5", isCorrect: false},
                            {id: 1, option: "6", isCorrect: true},
                            {id: 2, option: "7", isCorrect: false},
                            {id: 3, option: "null", isCorrect: false}
                        ]

                    },
                    {
                        id: 3,
                        question: "Quel est le type de la variable x après l'exécution de x = 10 / 3 en Python 3",
                        options: [
                            {id: 0, option: "int", isCorrect: false},
                            {id: 1, option: "float", isCorrect: true},
                            {id: 2, option: "complex", isCorrect: false},
                            {id: 3, option: "decimal", isCorrect: false}
                        ]

                    },
                    {
                        id: 4,
                        question: "Quel est le mot-clé utilisé pour vérifier si un élément appartient à une liste ?",
                        options: [
                            {id: 0, option: "in", isCorrect: true},
                            {id: 1, option: "exists", isCorrect: false},
                            {id: 2, option: "includes", isCorrect: false},
                            {id: 3, option: "has", isCorrect: false}
                        ]

                    },
                    {
                        id: 5,
                        question: "Quelle est la sortie de cette expression : print(type(123))",
                        options: [
                            {id: 0, option: "<type 'int'>", isCorrect: true},
                            {id: 1, option: "<class 'integer'>", isCorrect: false},
                            {id: 2, option: "<class 'int'>", isCorrect: false},
                            {id: 3, option: "<type 'integer'>", isCorrect: false}
                        ]

                    },
                    {
                        id: 6,
                        question: "Comment commente-t-on une seule ligne en Python ?",
                        options: [
                            {id: 0, option: "# Commentaire", isCorrect: false},
                            {id: 1, option: "// Commentaire", isCorrect: true},
                            {id: 2, option: "/* Commentaire */", isCorrect: false},
                            {id: 3, option: "<!-- Commentaire -->", isCorrect: false}
                        ]

                    },
                    {
                        id: 7,
                        question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'une liste en Python ?",
                        options: [
                            {id: 0, option: "append()", isCorrect: true},
                            {id: 1, option: "add()", isCorrect: false},
                            {id: 2, option: "insert()", isCorrect: false},
                            {id: 3, option: "extend()", isCorrect: false}
                        ]

                    },
                    {
                        id: 8,
                        question: "Quel est le résultat de l'expression [1, 2, 3] * 2 en Python ?",
                        options: [
                            {id: 0, option: "[2, 4, 6]", isCorrect: false},
                            {id: 1, option: "[1, 2, 3, 1, 2, 3]", isCorrect: true},
                            {id: 2, option: "[1, 2, 3, 6]", isCorrect: false},
                            {id: 3, option: "[2, 4, 6, 1, 2, 3]", isCorrect: false}
                        ]

                    },
                    {
                        id: 9,
                        question: "Comment déclare-t-on une fonction en Python ?",
                        options: [
                            {id: 0, option: "def function_name():", isCorrect: true},
                            {id: 1, option: "function function_name():", isCorrect: false},
                            {id: 2, option: "func function_name():", isCorrect: false},
                            {id: 3, option: "declare function_name():", isCorrect: false}
                        ]

                    }
                ]
            },
            {
                id: 2, title: "Quiz 3", technology: "Spring", currentQuestion: 0, score: 0, questions: [
                    {
                        id: 0,
                        question: "Quelle annotation permet de marquer une classe comme étant une configuration dans Spring Boot ?",
                        options: [
                            {id: 0, option: "@Configuration", isCorrect: true},
                            {id: 1, option: "@RestController", isCorrect: false},
                            {id: 2, option: "@Component", isCorrect: false},
                            {id: 3, option: "@Service", isCorrect: false}
                        ]
                    },
                    {
                        id: 1,
                        question: "Quelle est la méthode utilisée pour démarrer une application Spring Boot ?",
                        options: [
                            {id: 0, option: "SpringApplication.run()", isCorrect: true},
                            {id: 1, option: "SpringApplication.start()", isCorrect: false},
                            {id: 2, option: "ApplicationContext.run()", isCorrect: false},
                            {id: 3, option: "Application.run()", isCorrect: false}
                        ]

                    },
                    {
                        id: 2,
                        question: "Quel outil est utilisé pour le suivi des versions et des migrations de base de données dans Spring Boot ?",
                        options: [
                            {id: 0, option: "Jenkins", isCorrect: false},
                            {id: 1, option: "Liquibase", isCorrect: false},
                            {id: 2, option: "Hibernate", isCorrect: false},
                            {id: 3, option: "Flyway", isCorrect: true}
                        ]

                    },
                    {
                        id: 3,
                        question: "Quel fichier contient les propriétés de configuration de l'application Spring Boot ?",
                        options: [
                            {id: 0, option: "config.xml", isCorrect: false},
                            {id: 1, option: "application.properties", isCorrect: true},
                            {id: 2, option: "settings.xml", isCorrect: false},
                            {id: 3, option: "bootstrap.yaml", isCorrect: false}
                        ]

                    },
                    {
                        id: 4,
                        question: "Quelle annotation est utilisée pour spécifier qu'une méthode doit être exécutée après l'initialisation des beans Spring ?",
                        options: [
                            {id: 0, option: "@Bean", isCorrect: false},
                            {id: 1, option: "@PreDestroy", isCorrect: false},
                            {id: 2, option: "@PostConstruct", isCorrect: true},
                            {id: 3, option: "@Init", isCorrect: false}
                        ]

                    },
                    {
                        id: 5,
                        question: "Quelle annotation est utilisée pour indiquer qu'une classe est un contrôleur REST dans Spring Boot ?",
                        options: [
                            {id: 0, option: "@Controller", isCorrect: false},
                            {id: 1, option: "@RestController", isCorrect: true},
                            {id: 2, option: "@Service", isCorrect: false},
                            {id: 3, option: "@Repository", isCorrect: false}
                        ]

                    },
                    {
                        id: 6,
                        question: "Quelle annotation est utilisée pour injecter des dépendances dans Spring Boot ?",
                        options: [
                            {id: 0, option: "@Inject", isCorrect: false},
                            {id: 1, option: "@Component", isCorrect: false},
                            {id: 2, option: "@Autowired", isCorrect: true},
                            {id: 3, option: "@Resource", isCorrect: false}
                        ]

                    },
                    {
                        id: 7,
                        question: "Quelle méthode est appelée par défaut pour démarrer un CommandLineRunner dans Spring Boot ?",
                        options: [
                            {id: 0, option: "start()", isCorrect: false},
                            {id: 1, option: "init()", isCorrect: false},
                            {id: 2, option: "run()", isCorrect: true},
                            {id: 3, option: "execute()", isCorrect: false}
                        ]

                    },
                    {
                        id: 8,
                        question: "Quelle annotation permet de gérer les transactions dans Spring Boot ?",
                        options: [
                            {id: 0, option: "@Transactional", isCorrect: true},
                            {id: 1, option: "@Persistence", isCorrect: false},
                            {id: 2, option: "@Repository", isCorrect: false},
                            {id: 3, option: "@Data", isCorrect: false}
                        ]

                    },
                    {
                        id: 9,
                        question: "Quel est l'objectif principal du mécanisme de profil Spring (@Profile) ?",
                        options: [
                            {id: 0, option: "Pour sécuriser les services Web", isCorrect: false},
                            {
                                id: 1,
                                option: "Pour activer des configurations spécifiques selon l'environnement",
                                isCorrect: true
                            },
                            {id: 2, option: "Pour mettre en cache les données", isCorrect: false},
                            {id: 3, option: "Pour surveiller les applications", isCorrect: false}
                        ]

                    }
                ]
            },
            {
                id: 3, title: "Quiz 4", technology: "Javascript", currentQuestion: 0, score: 0, questions: [
                    {
                        id: 0,
                        question: "Comment peut-on déclarer une variable en JavaScript ?",
                        options: [
                            {id: 0, option: "var, let, const", isCorrect: true},
                            {id: 1, option: "int, float, double", isCorrect: false},
                            {id: 2, option: "dim, var, constant", isCorrect: false},
                            {id: 3, option: "static, public, private", isCorrect: false}
                        ]
                    },
                    {
                        id: 1,
                        question: "Quelle est la sortie de l'expression suivante : typeof null ?",
                        options: [
                            {id: 0, option: "null", isCorrect: false},
                            {id: 1, option: "undefined", isCorrect: true},
                            {id: 2, option: "object", isCorrect: false},
                            {id: 3, option: "boolean", isCorrect: false}
                        ]

                    },
                    {
                        id: 2,
                        question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript ?",
                        options: [
                            {id: 0, option: "insert()", isCorrect: true},
                            {id: 1, option: "add()", isCorrect: false},
                            {id: 2, option: "append()", isCorrect: false},
                            {id: 3, option: "push()", isCorrect: false}
                        ]

                    },
                    {
                        id: 3,
                        question: "Quel est le comportement du mot-clé let dans une boucle par rapport à var ?",
                        options: [
                            {id: 0, option: "let a une portée de bloc, var a une portée de fonction", isCorrect: true},
                            {id: 1, option: "let a une portée globale, var a une portée de bloc", isCorrect: false},
                            {id: 2, option: "let crée des variables globales, var crée des variables locales", isCorrect: false},
                            {id: 3, option: "Il n'y a aucune différence entre les deux", isCorrect: false}
                        ]

                    },
                    {
                        id: 4,
                        question: "Que fait l'opérateur === en JavaScript ?",
                        options: [
                            {id: 0, option: "Il compare les valeurs sans vérifier le type", isCorrect: false},
                            {id: 1, option: "Il compare les valeurs et les types", isCorrect: true},
                            {id: 2, option: "Il compare les objets uniquement", isCorrect: false},
                            {id: 3, option: "Il ne compare que les types", isCorrect: false}
                        ]

                    },
                    {
                        id: 5,
                        question: "Quelle est la sortie de l'instruction suivante : console.log(0.1 + 0.2 === 0.3); ?",
                        options: [
                            {id: 0, option: "true", isCorrect: false},
                            {id: 1, option: "false", isCorrect: true},
                            {id: 2, option: "undefined", isCorrect: false},
                            {id: 3, option: "NaN", isCorrect: false}
                        ]

                    },
                    {
                        id: 6,
                        question: "Qu'est-ce qu'une 'closure' en JavaScript ?",
                        options: [
                            {id: 0, option: "Une fonction qui retourne une valeur", isCorrect: false},
                            {
                                id: 1,
                                option: "Une fonction qui accède à des variables à l'extérieur de son corps après avoir été retournée",
                                isCorrect: true
                            },
                            {id: 2, option: "Une méthode d'une classe", isCorrect: false},
                            {id: 3, option: "Un constructeur d'objet", isCorrect: false}
                        ]

                    },
                    {
                        id: 7,
                        question: "Quelle est la valeur de x après l'exécution du code suivant ? " +
                            "   let x = [1, 2, 3].map(n => n * 2);",
                        options: [
                            {id: 0, option: "[2, 3, 4]", isCorrect: false},
                            {id: 1, option: "[2, 4, 6]", isCorrect: true},
                            {id: 2, option: "[2, 4, 6]", isCorrect: false},
                            {id: 3, option: "[1, 2, 3]", isCorrect: false}
                        ]

                    },
                    {
                        id: 8,
                        question: "Quelle méthode JSON est utilisée pour transformer un objet JavaScript en chaîne de caractères JSON ?",
                        options: [
                            {id: 0, option: "JSON.stringify()", isCorrect: true},
                            {id: 1, option: "JSON.parse()", isCorrect: false},
                            {id: 2, option: "toJSON()", isCorrect: false},
                            {id: 3, option: "convertJSON()", isCorrect: false}
                        ]

                    },
                    {
                        id: 9,
                        question: "Quelle est la sortie du code suivant ?" +
                            " console.log(typeof NaN);",
                        options: [

                            {id: 0, option: "NaN", isCorrect: false},
                            {id: 1, option: "undefined", isCorrect: false},
                            {id: 2, option: "number", isCorrect: true},
                            {id: 3, option: "string", isCorrect: false}
                        ]

                    }
                ]
            }
        ]
    }
}