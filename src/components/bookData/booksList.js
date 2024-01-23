const bookdata = {
	bookdata: [
		{
			id: 0,
			title: "The subtle art of not giving a f*ck",
			authors: ['by Mark Manson'],
			thumbnailUrl: "data:image/jpeg;base64,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",
			shortDescription: "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
			price: 69,
		},
		{
			id: 1,
			title: "The eight rules of loves",
			authors: ['by Jay Shetty'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/71FI7MAeUcL._AC_UF1000,1000_QL80_.jpg",
			shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			price: 79,
		},
		{
			id: 2,
			title: "The creative act",
			authors: ['by Rick Rubin with Neil Strauss'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/71dUSlTVOwL._AC_UF1000,1000_QL80_.jpg",
			shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
		    price: 93
        },
		{
			id: 3,
			title: "The boy , the mole , the fox and the horse",
			authors: ['by Charlie Mackesy'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/81PdkxXJObL._AC_UF1000,1000_QL80_.jpg",
			shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			price: 69,
		},
		{
			id: 4,
			title: "Harry Potter",
			authors: ['by J.K. Rowling'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg",
			shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			price: 69,
		},
		{
			id: 5,
			title: "The Climate Book: The Facts and the Solutions",
			authors: ['by Greta Thunberg'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/811HZRZ3i8L._AC_UF1000,1000_QL80_.jpg",
			shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			price: 69,
		},
		{
			id: 6,
			title: "Rest Is Resistance: A Manifesto",
			authors: ['by Tricia Hersey'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/81-rWvLyz2L._AC_UF1000,1000_QL80_.jpg",
			shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			price: 69,
		},
		{
			id: 7,
			title: "A New Name",
			authors: ['by Jon Fosse'],
			thumbnailUrl: "https://m.media-amazon.com/images/I/41rTunpcCSL.jpg",
            shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			price: 69,
		},

		{
			id: 8,
			title: 'Unlocking Android',
			isbn: '1933988673',
			pageCount: 416,
			publishedDate: { $date: '2009-04-01T00:00:00.000-0700' },
			thumbnailUrl:
				'https://m.media-amazon.com/images/I/61HpvW+rCRL._AC_UF1000,1000_QL80_.jpg',
			shortDescription:
				"Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
			longDescription:
				"Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
			status: 'PUBLISH',
			authors: ['W. Frank Ableson', 'Charlie Collins', 'Robi Sen'],
			categories: ['Open Source', 'Mobile'],
			price: 99,
			quantity: 1,
		},
		{
			id: 9,
			title: 'Android in Action, Second Edition',
			isbn: '1935182722',
			pageCount: 592,
			publishedDate: { $date: '2011-01-14T00:00:00.000-0800' },
			thumbnailUrl:
				'https://images.manning.com/360/480/resize/book/c/c03e512-9ac6-4803-b133-a8a5040de605/ableson2.png',
			shortDescription:
				"Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
			longDescription:
				"When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
			status: 'PUBLISH',
			authors: ['W. Frank Ableson', 'Robi Sen'],
			categories: ['Java'],
			price: 120,
			quantity: 1,
		},
		{
			id: 10,
			title: 'Specification by Example',
			isbn: '1617290084',
			pageCount: 0,
			publishedDate: { $date: '2011-06-03T00:00:00.000-0700' },
			thumbnailUrl:
				'https://m.media-amazon.com/images/I/413QfW9S6NL.jpg',
            shortDescription:
                "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
			status: 'PUBLISH',
			authors: ['Gojko Adzic'],
			categories: ['Software Engineering'],
			quantity: 1,
			price: 78,
		},
		{
			id: 11,
			title: 'Flex 3 in Action',
			isbn: '1933988746',
			pageCount: 576,
			publishedDate: { $date: '2009-02-02T00:00:00.000-0800' },
			thumbnailUrl:
				'https://images.manning.com/360/480/resize/book/8/79ab8e4-b9f4-46b1-8f8e-ef66553f3f1f/ahmed.png',
			shortDescription:
				"New web applications require engaging user-friendly interfaces   and the cooler," +
                " the better. With Flex 3, web developers at any skill level can create high-quality," +
                " effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex " +
                "removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. " ,
			status: 'PUBLISH',
			authors: ['Tariq Ahmed with Jon Hirschi', 'Faisal Abid'],
			categories: ['Internet'],
			quantity: 1,
			price: 49,
		},
		{
			id: 12,
			title: 'Flex 4 in Action',
			isbn: '1935182420',
			pageCount: 600,
			publishedDate: { $date: '2010-11-15T00:00:00.000-0800' },
			thumbnailUrl:
				'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781935182429/flex-4-in-action-9781935182429_hr.jpg',
			shortDescription:
				'Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You\'ll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It\'s in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you\'ll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 "Halo" versions. Spark components are easier to customize, which makes skinning and theme design much faster  A new "network monitor" allows you to see the data communications between a Flex application and a backend server, which helps when trying to debug applications that are communicating to another system/service  Numerous productivity boosting features that speed up the process of creating applications  A faster compiler to take your human-written source code and convert it into a machine-readable format  Built-in support for unit testing allows you to improve the quality of your software, and reduce the time spent in testing',
			status: 'PUBLISH',
			authors: ['Tariq Ahmed', 'Dan Orlando', 'John C. Bland II', 'Joel Hooks'],
			categories: ['Internet'],
			quantity: 1,
			price: 100,
		},
		{
			id: 13,
			title: 'Collective Intelligence in Action',
			isbn: '1933988312',
			pageCount: 425,
			publishedDate: { $date: '2008-10-01T00:00:00.000-0700' },
			thumbnailUrl:
				'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781933988313/collective-intelligence-in-action-9781933988313_lg.jpg',
			shortDescription:
				"There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.    Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.    This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.    Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.",
			status: 'PUBLISH',
			authors: ['Satnam Alag'],
			categories: ['Internet'],
			quantity: 1,
			price: 157,
		},
		{
			id: 14,
			title: 'Zend Framework in Action',
			isbn: '1933988320',
			pageCount: 432,
			publishedDate: { $date: '2008-12-01T00:00:00.000-0800' },
			thumbnailUrl:
				'https://m.media-amazon.com/images/I/71GITDw-p8L._AC_UF1000,1000_QL80_.jpg',
			shortDescription:
				'Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.',
			longDescription:
				"From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.     For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.    Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.  This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.  ",
			status: 'PUBLISH',
			authors: ['Rob Allen', 'Nick Lo', 'Steven Brown'],
			categories: ['Web Development'],
			quantity: 1,
			price: 69
		},
		{
			id: 15,
			title: 'Flex on Java',
			isbn: '1933988797',
			pageCount: 265,
			publishedDate: { $date: '2010-10-15T00:00:00.000-0700' },
			thumbnailUrl:
				'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Cgvbfs3eL._AC_UF1000,1000_QL80_.jpg',
			shortDescription:
				'   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.',
			longDescription:
				"In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
			status: 'PUBLISH',
			authors: ['Bernerd Allmon', 'Jeremy Anderson'],
			categories: ['Internet'],
			quantity: 1,
			price: 105
		},
		{
			id: 16,
			title: 'Griffon in Action',
			isbn: '1935182234',
			pageCount: 375,
			publishedDate: { $date: '2012-06-04T00:00:00.000-0700' },
			thumbnailUrl:
				'https://images.manning.com/360/480/resize/book/f/2c194a9-e67e-4db5-ac68-4309b6a2cae3/almiray.png',
			shortDescription:
				"Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
			longDescription:
				"Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
			status: 'PUBLISH',
			authors: ['Andres Almiray', 'Danno Ferrin', '', 'James Shingler'],
			categories: ['Java'],
			quantity: 1,
			price: 204
		},
		{
			id: 17,
			title: 'OSGi in Depth',
			isbn: '193518217X',
			pageCount: 325,
			publishedDate: { $date: '2011-12-12T00:00:00.000-0800' },
			thumbnailUrl:
				'https://images.manning.com/360/480/resize/book/9/eb1d051-f45c-43d0-ae11-bb68f0831992/alves.png',
			shortDescription:
				'Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.',
			longDescription:
				"A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.    OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.    This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.    OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.    Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.",
			status: 'PUBLISH',
			authors: ['Alexandre de Castro Alves'],
			categories: ['Java'],
			quantity: 1,
			price: 136
		},
		{
			id: 18,
			title: 'Flexible Rails',
			isbn: '1933988509',
			pageCount: 592,
			publishedDate: { $date: '2008-01-01T00:00:00.000-0800' },
			thumbnailUrl:
				'https://images.manning.com/360/480/resize/book/c/1b13abf-9978-481a-97dd-08870018ff66/armstrong.png',
			shortDescription:
				'Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they\'re an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it\'s an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it "Flex Immersion." You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.',
			status: 'PUBLISH',
			authors: ['Peter Armstrong'],
			categories: ['Web Development'],
			quantity: 1,
			price: 199
		},
		{
			id: 19,
			title: 'Hello! Flex 4',
			isbn: '1933988762',
			pageCount: 258,
			publishedDate: { $date: '2009-11-01T00:00:00.000-0700' },
			thumbnailUrl:
				'https://m.media-amazon.com/images/I/41gJSBaoIwL._AC_UF1000,1000_QL80_.jpg',
			shortDescription:
				"Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
			longDescription:
				"With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.    We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.    You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.",
			status: 'PUBLISH',
			authors: ['Peter Armstrong'],
			categories: ['Internet'],
			quantity: 1,
			price: 88
		},
		


	]
}

module.exports = bookdata
