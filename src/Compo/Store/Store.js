import React, { createContext, useState } from 'react'

// create a Store
export const Store = createContext()

// create a Components
const DataCompo = (props) => {
  const [data,setData] = useState([

    // bollywood data 

    {
      id: 1,
      image : 'https://lehren.com/wp-content/uploads/2023/10/leo-trailer-cast-release-date-all-you-need-to-know.jpg',
      heading : 'LEO',
      catagory : 'bollywood',
      description : 'Leo (also marketed as Leo: Bloody Sweet) is a 2023 Indian Tamil-language action thriller film directed by Lokesh Kanagaraj and produced by Seven Screen Studio. The film stars Vijay in the titular role, alongside Sanjay Dutt, Arjun Sarja, Trisha, Gautham Vasudev Menon, Mysskin, Madonna Sebastian, George Maryan, Mansoor Ali Khan, Priya Anand and Mathew Thomas. It is the third installment in the Lokesh Cinematic Universe and is inspired by A History of Violence (2005), an adaptation of the graphic novel of the same name. The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who suspect him to be Antonys estranged son, Leo.'
    },
    {
      id : 2,
      image : 'https://resizing.flixster.com/jrlUfiu7cKhfn6vpqqsmzNVR9nM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU2ZDU2MDQ1LTYzZmUtNDA4Yy1hMzNhLTQxMWI0NzE0ZjEwOC5qcGc=',
      heading : 'NAGESWARA RAO',
      catagory : 'bollywood',
      description : "During the 1970s, Tiger Nageswara Rao is a thief who dominates the realm of terror in Stuartpuram and also masterminds a series of daring heists, where his ingenious methods of outwitting the cops become the stuff of local legend. The rest of the story revolves around Tiger's thrilling escapades and captivating cat-and-mouse game between him and the cops."
    },
    {
      id : 3,
      image : 'https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg',
      heading : 'JAWAN',
      catagory : 'bollywood',
      description : "Jawan (/dʒʌwɑːn/ transl. Soldier) is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee in his Hindi film debut.[4] It is produced by Gauri Khan and Gaurav Verma under Red Chillies Entertainment. The film stars Shah Rukh Khan in a dual role as father and son who team up to rectify corruption in society. Nayanthara, Vijay Sethupathi, Deepika Padukone (billed as a special appearance), Priyamani and Sanya Malhotra appear in supporting roles."
    },
    {
      id : 4,
      image : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvj-ZPFM9lN1DdAX1UHdFl43dcOUkN3ql7l_9GJvGCW1e8Cr9p',
      heading : 'OMG',
      catagory : 'bollywood',
      description : "Kanti Sharan Mudgal (Pankaj Tripathi), a staunch devotee of Lord Shiva, owns a shop outside the city's prominent Mahakaal temple. One day, he is called to the hospital and told that his son Vivek (Aarush Varma) was up all night masturbating continuously until he fainted, and consumed multiple Viagra tablets. Vivek's friend explains that an insecure Vivek was bullied about the size of his penis and was told that masturbating will increase it. The biology teacher at school refused to answer Vivek's questions, which led him to shady people and drugs and eventually to the hospital."
    },
    {
      id: 5,
      image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLZDBHPEaovdZZuiARkbAdhBH4Pu3DzbJujt7x4hT1i5BI9trr',
      heading : 'BIGIL',
      catagory : 'bollywood',
      description : "Bigil (transl. Whistle) is a 2019 Indian Tamil-language sports action drama film directed by Atlee and produced by Kalpathi S. Aghoram under the banner AGS Entertainment.[4][5] The film stars Vijay in the title role and dual roles as a father and son, while Nayanthara, Jackie Shroff, Vivek and Kathir appear in other prominent roles.[6] In the film, Michael Rayyapan alias Bigil is a footballer-turned-gangster who decides to coach a women's football team when their coach gets attacked.",
    },
    // {
    //   id : 10,
    //   image : 'https://m.media-amazon.com/images/M/MV5BMzA2ZTgxNzgtYjM3Ni00NTI1LWJiMjAtMWViNWUzNzIwYTgwXkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_.jpg',
    //   heading : 'JIGAR THANDA',
    //   catagory : 'bollywood',
    //   description : "Jigarthanda DoubleX (also known as Jigarthanda 2) is a 2023 Indian Tamil-language Western action comedy film directed by Karthik Subbaraj and jointly produced by him, Kaarthekeyen Santhanam, S. Kathiresan and Alankar Pandian under Stone Bench Films, Five Star Creations and Invenio Origin. The film is a spiritual successor and prequel to Jigarthanda (2014) and stars Raghava Lawrence, S. J. Suryah and Nimisha Sajayan. Set in the 1970s, it revolves around an upcoming cop going undercover as a filmmaker, trying to kill a gangster by collaborating to make a film."
    // },
    {
      id : 6,
      image : 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/9/2023_9$largeimg_843682942.jpg',
      heading : 'MISSION RANIGANJ',
      catagory : 'bollywood',
      description : "Mission Raniganj: The Great Bharat Rescue is a 2023 Indian Hindi-language disaster thriller film[4] directed by Tinu Suresh Desai and produced by Pooja Entertainment.[5][6] Based on the Raniganj Coalfields collapse of 1989 in West Bengal, the film stars Akshay Kumar and Parineeti Chopra.[7][8] The film is based on Jaswant Singh Gill, a brave and diligent mining engineer from IIT Dhanbad who rescued 65 trapped miners at the Raniganj Coalfields in 1989.[9]"
    },
    {
      id : 7,
      image : 'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg',
      catagory : 'bollywood',
      heading : 'ANIMAL',
      description : 'Animal is a 2023 Indian Hindi-language action thriller film[5] directed and edited by Sandeep Reddy Vanga, who also co-wrote the screenplay with Pranay Reddy Vanga and Saurabh Gupta. The film is produced by Bhushan Kumar, Pranay Reddy Vanga, Krishan Kumar and Murad Khetani under T-Series Films, Bhadrakali Pictures and Cine1 Studios. The film stars Ranbir Kapoor, Anil Kapoor, Bobby Deol, Rashmika Mandanna, and Tripti Dimri. In the film, Ranvijay "Vijay" Singh learns about an assassination attempt on his father and sets out to exact revenge.'
    },
    {
      id : 8,
      image : 'https://assets.gadgets360cdn.com/pricee/assets/product/202203/Agent-poster_1648056277.jpg',
      catagory : 'bollywood',
      heading : 'AGENT',
      description : "Agent is an 2023 Indian Telugu-language action spy film directed by Surender Reddy and written by Vakkantham Vamsi. It stars Akhil Akkineni, Mammootty, Dino Morea, Sakshi Vaidya and Vikramjeet Virk. The film marks the debut of Vaidya and Morea in Telugu cinema.[5]The film was announced in September 2020. Filming took place in Hyderabad, Budapest, Visakhapatnam and Manali. The release was deferred multiple times due to the COVID-19 pandemic and production delays."
    },

    // hollywood data 

    {
      id : 9,
      image : 'https://m.media-amazon.com/images/M/MV5BMTJhYjI1N2ItM2E4MC00ZmYzLTk2YzYtNTE5YTM1MDU0NjRiXkEyXkFqcGdeQXVyMTMxNjYyMTgw._V1_.jpg',
      heading : 'HEART OF STONE',
      catagory : 'hollywood',
      description : 'Heart of Stone is a 2023 American spy action thriller film directed by Tom Harper from a screenplay by Greg Rucka and Allison Schroeder and a story by Rucka. The film stars Gal Gadot, Jamie Dornan, Alia Bhatt, Sophie Okonedo, and Matthias Schweighöfer. Its plot follows an international intelligence operative who must embark on a dangerous mission to protect a mysterious artificial intelligence system known as "The Heart". She is tasked by the peacekeeping operation known as Charter to keep the object safe from falling into enemy hands.'
    },
    {
      id : 10,
      image : 'https://preview.redd.it/guys-here-are-my-custom-movie-posters-captain-america-4-v0-0rmg0htxiuqa1.jpg?width=1080&crop=smart&auto=webp&s=699aaf5dc89b76ec0373bc447266b1c9af81dd58',
      heading : 'IRON MAN 4',
      catagory : 'hollywood',
      description : "After his great sacrifice in Avengers: Endgame, Tony Stark's comeback to the Marvel Cinematic Universe is imagined in a new Iron Man 4 fan trailer. While the MCU has continued to add new superheroes into the popular franchise, many are still hoping for Iron Man to somehow return in the future. While Iron Man died in Phase 3, with his demise wrapping up The Infinity Saga, characters aren't always gone for good in the MCU, as there are always numerous ways for deceased heroes or villains to re-emerge.Even though Iron Man had his own trilogy, the MCU audience always made it clear that they would be more than open to seeing Iron Man 4 happen. Presented as a proof-of-concept if Marvel Studios ever pursued a sequel for the MCU timeline, Screen Culture recently released an Iron Man 4 fan trailer for Robert Downey Jr.'s fallen hero"
    },
    
    // {
    //   id: 12,
    //   image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuSWDtsDY4go6CDuBvrkEAfnmGK8EVlPtl6CvXExxA5UluZS0',
    //   catagory : 'hollywood',
    //   heading : 'HYPNOTIC',
    //   description : 'Hypnotic is a 2023 American mystery action thriller film directed by Robert Rodriguez, who co-wrote the screenplay with Max Borenstein. The film stars Ben Affleck, Alice Braga, J. D. Pardo, Hala Finley, Dayo Okeniyi, Jeff Fahey, Jackie Earle Haley and William Fichtner. Rodriguez also produced, co-shot, and edited the film, while his sons Rebel Rodriguez and Racer Max served as composer and producer, respectively.',
    // },
    {
      id: 11,
      image : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYyaCMGIDqOrnfFiXD5Wj3--gOX6aYjvtE-DKc3ym6Wyr_UQqH',
      catagory : 'hollywood',
      heading : 'ANTMAN-WASP',
      description : "Ant-Man and the Wasp: Quantumania is a 2023 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Ant-Man (2015) and Ant-Man and the Wasp (2018), and the 31st film in the Marvel Cinematic Universe (MCU). It was directed by Peyton Reed, written by Jeff Loveness, and stars Paul Rudd as Scott Lang and Evangeline Lilly as Hope van Dyne, alongside Jonathan Majors, Kathryn Newton, David Dastmalchian, Katy O'Brian, William Jackson Harper, Bill Murray, Michelle Pfeiffer, Corey Stoll, and Michael Douglas. In the film, Lang, Van Dyne, and their family are accidentally transported to the Quantum Realm and face off against Kang the Conqueror (Majors).",
    },
    {
      id: 12,
      image : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFR6mH9YM72sb456o7jrEcSDP5vLJ8Isst6HasyWRWInFnFajP',
      catagory : 'hollywood',
      heading : 'THE MARVELS',
      description : 'The Marvels is a 2023 American superhero film based on Marvel Comics. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to the film Captain Marvel (2019), a continuation of the television miniseries Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film was directed by Nia DaCosta, who co-wrote the screenplay with Megan McDonnell and Elissa Karasik. It stars Brie Larson as Carol Danvers / Captain Marvel, Teyonah Parris as Monica Rambeau, and Iman Vellani as Kamala Khan / Ms. Marvel, alongside Zawe Ashton, Gary Lewis, Park Seo-joon, Zenobia Shroff, Mohan Kapur, Saagar Shaikh, and Samuel L. Jackson. In the film, Danvers, Rambeau, and Khan team up as "the Marvels" after they begin swapping places with each other every time they use their powers.',
    },
    {
      id: 13,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k5W_6TMcJOjhLn1zu23IX-SN15_d3hkjCTLIaWPs0QW2DhxU',
      catagory : 'hollywood',
      heading : 'BLUE-BEETLE',
      description : 'Blue Beetle is a 2023 American superhero film based on the DC character Jaime Reyes / Blue Beetle. Produced by DC Studios and The Safran Company, and distributed by Warner Bros. Pictures, it is the 14th installment of the DC Extended Universe (DCEU). The film was directed by Ángel Manuel Soto and written by Gareth Dunnet-Alcocer, and stars Xolo Maridueña as Jaime Reyes / Blue Beetle alongside Adriana Barraza, Damián Alcázar, Raoul Max Trujillo, Susan Sarandon, and George Lopez. In the film, recent graduate Jaime Reyes is bestowed with an armor that grants him superpowers after being accidentally chosen by an ancient alien relic known as the Scarab.',
    },
    {
      id: 14,
      image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGD0SFM5MwzWdQtgA5ssjVmHofb2ajsLcFR0q3pWBNLwf90D_a',
      catagory : 'hollywood',
      heading : 'AQUAMAN',
      description : 'Aquaman is a 2018 American superhero film based on the DC character of the same name. Co-produced and distributed by Warner Bros. Pictures, it is the sixth film in the DC Extended Universe (DCEU). The film was directed by James Wan from a screenplay by David Leslie Johnson-McGoldrick and Will Beall. It stars Jason Momoa as Arthur Curry / Aquaman, who sets out to lead the underwater kingdom of Atlantis and stop his half-brother, King Orm (Patrick Wilson) from uniting the seven underwater kingdoms to destroy the surface world. Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, and Nicole Kidman appear in supporting roles.',
    },
    {
      id : 15,
      image : 'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
      catagory : 'hollywood',
      heading : 'SPIDER MAN',
      description : "Spider-Man: Across the Spider-Verse is a 2023 American animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Into the Spider-Verse (2018), set in a shared multiverse of alternate universes called the Spider-Verse. The film is directed by Joaquim Dos Santos, Kemp Powers and Justin K. Thompson from a screenplay by Phil Lord, Christopher Miller who both also produce, and David Callaham. Shameik Moore voices Miles, starring alongside Hailee Steinfeld, Brian Tyree Henry, Lauren Vélez, Jake Johnson, Jason Schwartzman, Issa Rae, Karan Soni, Shea Whigham, Greta Lee, Daniel Kaluuya, Mahershala Ali and Oscar Isaac. In the film, Miles goes on an adventure with Gwen Stacy / Spider-Woman across the multiverse where he meets a team of Spider-People known as the Spider-Society, led by Miguel O'Hara / Spider-Man 2099, but comes into conflict with them over handling a new threat in the form of the Spot."
    },
    // {
    //   id : 38,
    //   image : 'https://upload.wikimedia.org/wikipedia/en/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg',
    //   catagory : 'hollywood',
    //   heading : 'INDIAN JONES AND THE DIAL OF DESTINY',
    //   description : "Indiana Jones and the Dial of Destiny is a 2023 American action adventure film directed by James Mangold, who co-wrote it with David Koepp and the writing team of Jez and John-Henry Butterworth. It is the fifth and final installment in the Indiana Jones film series and the sequel to Indiana Jones and the Kingdom of the Crystal Skull (2008). It stars Harrison Ford, John Rhys-Davies, and Karen Allen reprising their roles as Indiana Jones, Sallah, and Marion Ravenwood, respectively, while new cast members include Phoebe Waller-Bridge, Antonio Banderas, Toby Jones, Boyd Holbrook, Ethann Isidore, and Mads Mikkelsen. Set in 1969, the film follows Indy and his estranged goddaughter, Helena, who are trying to locate a powerful artifact before Jürgen Voller, a Nazi-turned-NASA scientist, who plans to use it to alter the outcome of World War II."
    // },
    // {
    //   id : 39,
    //   image : 'https://upload.wikimedia.org/wikipedia/en/c/ca/Meg_2-_The_Trench_film_cover.jpg',
    //   catagory : 'hollywood',
    //   heading : 'MEG 2',
    //   description : 'Meg 2: The Trench (titled Shark 2 in some territories[2]) is a 2023 science fiction action film directed by Ben Wheatley from a screenplay by Jon Hoeber, Erich Hoeber, and Dean Georgaris, based on the 1999 novel The Trench by Steve Alten. It serves as the sequel to The Meg (2018). The film stars Jason Statham, Wu Jing, Sophia Cai, Page Kennedy, Sergio Peris-Mencheta, Skyler Samuels and Cliff Curtis. Like the previous film, it follows a group of scientists who must outrun and outswim the titular megalodons when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.'
    // },
    {
      id : 16,
      image : 'https://upload.wikimedia.org/wikipedia/en/d/d8/Knights_of_the_Zodiac_poster.jpg',
      catagory : 'hollywood',
      heading : 'KNIGHT OF THE ZODIAC',
      description : "Knights of the Zodiac (Japanese: 聖闘士星矢 The Beginning, Hepburn: Seinto Seiya Za Biginingu), is a 2023 fantasy action film directed by Tomek Bagiński from a screenplay by Josh Campbell, Matt Stuecken, and Kiel Murray, based on the manga Saint Seiya by Masami Kurumada. The film stars Mackenyu, Famke Janssen, Madison Iseman, Diego Tinoco, Mark Dacascos, Nick Stahl, and Sean Bean.Knights of the Zodiac was released in Japan on April 28, 2023, and in the United States on May 12. The film has received mostly negative reviews from critics and grossed $7 million, becoming a box-office bomb.[3]"
    },

    // fitness data 
    
    {
      id : 17,
      image : 'https://www.mensjournal.com/.image/t_share/MTk2MTM3Mjg3NjkxNjc1MTQx/man-exercising-in-gym.jpg',
      heading : 'EXERCISE',
      catagory : 'fitness',
      description : "Want to feel better, have more energy and even add years to your life? Just exercThe health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, no matter their age, sex or physical ability.Need more convincing to get moving? Check out these seven ways that exercise can lead to a happier, healthier you.1. Exercise controls weExercise can help prevent excess weight gain or help you keep off lost weight. When you take part in physical activity, you burn calories. The more intense the activity, the more calories you burn.Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Any amount of activity is better than none. To gain the benefits of exercise, just get more active throughout your day. For example, take the stairs instead of the elevator or rev up your household chores. Consistency is key."
    },
    {
      id: 18,
      image : 'https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_1280.jpg',
      catagory : 'fitness',
      heading : 'CYCLING',
      description : "To be fit and healthy you need to be physically active. Regular physical activity can help protect you from serious diseases such as obesity, heart disease, cancer, mental illness, diabetes and arthritis. Riding your bicycle regularly is one of the best ways to reduce your risk of health problems associated with a sedentary lifestyle.Cycling is a healthy, low-impact exercise that can be enjoyed by people of all ages, from young children to older adults. It is also fun, cheap and good for the environment.Riding to work or the shops is one of the most time-efficient ways to combine regular exercise with your everyday routine. An estimated one billion people ride bicycles every day – for transport, recreation and sport.",
    },
    {
      id: 19,
      image : 'https://as1.ftcdn.net/v2/jpg/06/52/92/86/1000_F_652928671_wVsY8vrqc6fPyJ2LeF0LU014FaHKaNkN.jpg',
      catagory : 'fitness',
      heading : 'BODY WEIGHT',
      description : "It is entirely possible to build muscle without weights with several studies supporting the efficacy of bodyweight exercises. Bodyweight exercises are a form of resistance training, therefore they can stimulate the muscles to adapt, get strong and grow. Muscle growth 'can occur independent of an external load', research published in Physiology & Behaviour concluded, as long as you perform bodyweight exercises through their full range of motion.A study published in the Journal of Exercise Science & Fitness investigated the effect of press-up training with a similar load of to 40% of 1- rep max bench press on muscle hypertrophy and strength gain in 18 male participants. After an 8 week training period, press-up exercise with similar load to bench press were found to be comparably effective for muscle and strength gain. So if the bench is busy and you've found yourself at a loose end, hitting the floor for bodyweight exercises could be just as effective.",
    },
    {
      id: 20,
      image : 'https://media.istockphoto.com/id/497283698/photo/blue-yoga-background.jpg?s=612x612&w=0&k=20&c=84XpPQWrvjFASnhsgCBnAvM9xGH-ND1PNRb_vvnCD6Y=',
      catagory : 'fitness',
      heading : 'BETTER BALANCE',
      description : "Discover how you can prevent falls by improving your balance and mobility. Better Balance: Simple exercises to improve stability and prevent falls gives you step-by-step instructions for easy, effective workouts that will improve posture, increase muscle strength and speed, sharpen reflexes, expand flexibility, and firm your core. You'll also get tips for fall-proofing your home.",
    },
    {
      id: 21,
      image : 'https://images.healthonics.healthcare/wp-content/uploads/2019/03/Infographic_BENEFITS-OF-REGULAR-WALKING.webp',
      catagory : 'fitness',
      heading : 'WALKING',
      description : 'The simple activity of walking has so many powerful health benefits. Done correctly, it can be the key to losing weight, lowering blood pressure and cholesterol, and boosting your memory, as well as reducing your risk for heart disease, diabetes, cancer and more. Walking for Health, created by the experts at Harvard Medical School, takes you step-by-step from why walking may be the most perfect exercise, to how to get started on a walking program, to specific walking workouts. It even has a special section on walking for weight loss.',
    },
    {
      id: 22,
      image : 'https://cdn.shopify.com/s/files/1/0268/0818/9012/files/RFST-RKST-10200_media-10_600x600.jpg?v=1632276070',
      catagory : 'fitness',
      heading : 'BARBELL SQUAT',
      description : 'It wouldn’t be a leg workout guide without squats. The barbell back squat will elevate your squat game by strengthening not only the quadriceps, hamstrings and glutes but also the ligaments around the knees and hips. This compound exercise uses multiple muscles to perform a full body move to build strength. The best and safest way to perform a Barbell Back Squat is with a squat stand to easily secure the bar as you move it on and off your shoulders.',
    },
    {
      id: 23,
      image : 'https://cdn.tinybuddha.com/wp-content/uploads/2013/07/Meditating-1.jpg',
      catagory : 'fitness',
      heading : 'MEDITAION',
      description : "We know we should meditate—it has so many mental, emotional, and physical benefits, and who couldn’t use a bit of slowing down in their busy life? But when we actually find that bit of time to ourselves that could be used for meditation, we instead turn on the TV, reach for the iPad, or mindlessly page through a magazine.When I first became interested in establishing a meditation and mindfulness practice, I approached it intellectually: I read a lot of books, downloaded apps for meditation, and even considered taking a class at a local Zen meditation center.The more I learned about it, the more I knew I had to incorporate these practices into my life. So I read even more, and I did so much reading that I didn’t actually meditate!",
    },
    {
      id : 24,
      image : 'https://www.muscleandfitness.com/wp-content/uploads/2023/06/Man-exercising-with-a-rope-climbing-technique.jpg?w=1109&h=614&crop=1&quality=86&strip=all',
      catagory : 'fitness',
      heading : 'CLIMB',
      description : "Supine to standing rope climb – Hang a rope from a pull up bar and lie on your back on the ground, straddling the rope. Climb up the rope, using the feet to come to a standing position. Then climb down the rope and return to a supine position.Rope climbing works most of your muscle groups, including your grip strength, biceps, forearms, lats and lower back (entire back), chest, and core. If you are using your legs too, all of your leg muscles are being activated as well."
    },

    // technology data 

    {
      id : 25,
      image : 'https://www.niso.com.tr/wp-content/uploads/2022/03/831125.jpg',
      heading : 'CLOUD COMPUTING',
      catagory : 'technology',
      description : 'Cloud computing is the on-demand availability of computing resources (such as storage and infrastructure), as services over the internet. It eliminates the need for individuals and businesses to self-manage physical resources themselves, and only pay for what they use.'
    },
    {
      id: 26,
      image : 'https://www.neebal.com/hs-fs/hubfs/Generative%20AI%20Applications-Infographic.jpg?width=1920&height=1080&name=Generative%20AI%20Applications-Infographic.jpg',
      catagory : 'technology',
      heading : 'GENERATIVE AI',
      description : 'Generative AI, a cutting-edge technology, has revolutionized various industries by enabling machines to create content that resembles human-generated work. It encompasses a wide range of applications, from text generation to image synthesis and even music composition. After mastering generative AI, individuals can pursue exciting job roles in fields such as artificial intelligence research, data science, and creative industries. The ever-expanding applications of generative AI promise a bright future for those who master this technology, offering opportunities to shape how we interact and create content in the digital age.',
    },
    {
      id: 27,
      image : 'https://qph.cf2.quoracdn.net/main-qimg-fb7426ecfb9e9fd0964d8e7a1f10cd06-lq',
      catagory : 'technology',
      heading : 'COMPUTING POWER',
      description : 'Computing power has already established its place in the digital era, with almost every device and appliance being computerized. And it’s here for even more as data science experts have predicted that the computing infrastructure we are building right now will only evolve for the better in the coming years. At the same time, we have 5G already; gear up for an era of 6G with more power in our hands and devices surrounding us. Even better, computing power is generating more tech jobs in the industry but would require specialized qualifications for candidates to acquire.From data science to robotics and IT management, this field will power the largest percentage of employment in every country. The more computing our devices will need, the more technicians, IT teams, relationship managers, and the customer care economy will flourish. One essential branch under this field that you can learn today is RPA, i.e. Robotic Process Automation.',
    },
    {
      id: 28,
      image : 'https://images.squarespace-cdn.com/content/v1/5ecf7c4fe2804e55257d5bcc/1655741075862-30J5FF4U812UD46ZHBZP/smart+home+-+pic+2.jpg',
      catagory : 'technology',
      heading : 'SMART (er) DEVICES',
      description : 'Artificial intelligence has played an essential role in making our world smarter and smoother. It is not just simulating humans but going the extra mile to make our lives hassle-free and simpler. These smarter devices are here to stay in 2024 and even further, as data scientists are working on AI home robots, appliances, work devices, wearables, and so much more! Almost every job needs smart software applications to make our work life more manageable. Smarter devices are another addition to the IT industry that is of high requirement and demand as more companies transform into digital spaces. Almost every higher-level job requires good IT and automation proficiency to thrive.',
    },
    {
      id: 29,
      image : 'https://i0.wp.com/jeama.com/wp-content/uploads/2019/12/qtq80-7ihrCn.jpeg?fit=830%2C514&ssl=1',
      catagory : 'technology',
      heading : 'DATAFICATION',
      description : "Datafication is simply transforming everything in our lives into devices or software powered by data. So, in short, Datafication is the modification of human chores and tasks into data-driven technology. From our smartphones, industrial machines, and office applications to AI-powered appliances and everything else, data is here to stay for longer than we can ever remember! So, to keep our data stored correctly and securely and safely, it has become an in-demand specialization in our economy. Datafication leads to a higher need for IT professionals, data scientists, engineers, technicians, managers, and so much more. Even more useful is that anyone with a sound knowledge of technology can do a certification in data-related specializations to find a job in this space. Data jobs are more about skills than big-level qualifications.",
    },
    {
      id: 30,
      image : 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=',
      catagory : 'technology',
      heading : 'ARTIFICIAL INTELLIGENCE',
      description : "Artificial Intelligence, or AI, has already received a lot of buzz in the past decade. Still, it continues to be one of the new technology trends because of its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more.Other than that, AI will be used further to analyze interactions to determine underlying connections and insights, to help predict demand for services like hospitals enabling authorities to make better decisions about resource utilization, and to detect the changing patterns of customer behaviour by analyzing data in near real-time, driving revenues and enhancing personalized experiences. With AI spreading its wings across sectors, new jobs will be created in development, programming, testing, support and maintenance, to name a few. On the other hand AI also offers some of the highest salaries today!Machine Learning the subset of AI, is also being deployed in all kinds of industries, creating a huge demand for skilled professionals. Forrester predicts AI, machine learning, and automation will create 9 percent of new U.S. jobs by 2025, jobs including robot monitoring professionals, data scientists, automation specialists, and content curators, making it another new technology trend you must keep in mind too!",
    },
    // {
    //   id: 33,
    //   image : 'https://onaudience.com/wp-content/uploads/2023/11/data-tech-diagram-1024x974.png',
    //   catagory : 'technology',
    //   heading : 'DATA TECH',
    //   description : "Data technologies are used to manage data sets that are growing all over the world. Year by year humans and machines generates loads of data. To control it and make profits from data, companies need adequate technologies.DataTech sector helps to manage big data sets, build solutions for data management and integrate data from many sources, such as online (websites, landing pages, mobile apps) and offline (surveys). Collected information that is stored in one place is extremely useful in discovering business insights or analyzing behaviour of humans or machines.Let’s take a look at numbers. Global amount of generated data will reach 163 zetabytes in 2025. According to Forbes, we produce over 2,5 quintillion of bytes every day. It determines growing spendings on technologies that help control data assets.",
    // },

    // food data 

    {
      id : 31,
      image : 'https://cdn.pixabay.com/photo/2021/04/14/17/45/avocado-6179050_640.jpg',
      heading : 'AVOCADO',
      catagory : 'food',
      description : "You'll get nearly 20 percent of your daily dose of fiber in one 1/2 cup serving of avocado, plus cholesterol-lowering monounsaturated fats.1 Try this: For a side dish, halve an avocado, drizzle with soy sauce and fresh lime juice, and sprinkle with toasted sesame seeds. Or try avocado toast.."
    },
    {
      id: 32,
      image : 'https://www.shutterstock.com/image-photo/balanced-diet-healthy-food-on-600nw-590825882.jpg',
      catagory : 'food',
      heading : 'BALANCED DIET',
      description : 'Intake of food and eating habits play a major and prime role in the way we live our life and with what kind of lifestyle-healthy or unhealthy. A balanced diet consists of various constituents of food in accurate and appropriate quantity and quality according to the requirement of individual. It is easily digestible and contains appropriate ratio between proteins, fats and carbohydrates that is 1:1:4 for overall development of body in the fit proportion. The diet may vary from person to person according to the body requirements as per consultation from a dietician or family doctor.',
    },
    {
      id: 33,
      image : 'https://m.economictimes.com/thumb/height-450,width-600,imgsize-73862,msid-102281194/strawberries_istock.jpg',
      catagory : 'food',
      heading : 'STRAWBERRY',
      description : "A strawberry is a short plant in the wild strawberry genus of the rose family. It is a widely grown hybrid species of the genus Fragaria. The name is used for its very common sweet edible 'fruit' and for flavors that taste like it.The real fruit of the plant are the tiny 'seeds' around the 'fruit'. The fruit is actually a sweet swelling of the plant's stem around the real fruit, which people call the pips.The plant grown today is a mix of two other species of wild strawberries. It was first grown in the 1750s.",
    },
    {
      id: 34,
      image : 'https://c.ndtvimg.com/2019-04/mhss9ehg_junk-food_625x300_05_April_19.jpg',
      catagory : 'food',
      heading : 'AVOID FATTY FOOD',
      description : "Fats are, a maximum contributors to number of calories. These extra number more than the required number, tends to accumulate in the body, so better to avoid it, the more you can, the more are the Chances of you remaining fit.Avoid overeating: This means that consuming right amount of food strictly as per needs of the body. The more food consumed, the more calories consumed beyond requirements hence accumulation, thus increasing the chances of obesity and lifestyle diseases. Better consume within right amount!!",
    },
    {
      id: 35,
      image : 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      catagory : 'food',
      heading : 'CHICKEN TAMOTO SALAD',
      description : "Beautiful and delicious salads don’t have to consist of dozens of ingredients. By incorporating quality over quantity you can create a beautiful and mouth-watering Chicken Tomato Salad!  As we approach the new year, most people start thinking about their waistlines too.  The best part about eating a protein-packed salad like this is that it will fill you up, and make you feel good about your choices, without sacrificing any of the flavors that you love.  This juicy chicken salad is a staple you can turn to when those holiday cravings start to creep up again!",
    },
    
    
    
    // {
    //   id : 36,
    //   image : 'https://upload.wikimedia.org/wikipedia/en/5/50/Chatrapathi_film_poster.jpg',
    //   catagory : 'bollywood',
    //   heading : 'CHATRAPATHI',
    //   description : "Chatrapathi is a 2023 Indian Hindi-language action film directed by V. V. Vinayak and produced by Jayantilal Gada of Pen India Limited.[2] It is a remake of the 2005 Telugu film of the same name.[3] The film stars Bellamkonda Sreenivas in his Hindi film debut playing the titular role[4][5] with Nushrat Bharucha, Bhagyashree, Sharad Kelkar, Freddy Daruwala, Karan Singh Chhabra, Rajendra Gupta and Rajesh Sharma play supporting roles.[1][2]Chatrapathi was released on 12 May 2023.[1]"
    // },
    
    {
      id : 36,
      image : 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      catagory : 'food',
      heading : 'PANEER',
      description : "Paneer (pronounced [/pəˈniːr/]), also known as ponir (pronounced [po̯ni̯r]), is a fresh acid-set cheese common in the cuisine of the Indian subcontinent made from full-fat buffalo milk or cow milk.[1] It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice."
    },
    {
      id : 37,
      image : 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzaHJvb20lMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D',
      catagory : 'food',
      heading : 'MASHROOM',
      description : "A mushroom is a fleshy, spore-bearing fruiting body of a fungus. Mushrooms are part of the kingdom Fungi, which includes mold, yeasts, and rusts. There are over 144,000 known species of fungi, and some mushrooms are edible and safe to eat, while others can be harmful."
    },
    // {
    //   id : 43,
    //   image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamuKs9mVBIQq-jEmtKK5qqTAEY4UQVinBRB5tzetGhYi6gYhB',
    //   catagory : 'food',
    //   heading : 'CULLYFLOWER',
    //   description : 'Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae (or mustard) family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh is sometimes called "curd" (with a similar appearance to cheese curd).[1] The cauliflower head is composed of a white inflorescence meristem. Cauliflower heads resemble those in broccoli, which differs in having flower buds as the edible portion. Brassica oleracea also includes broccoli, Brussels sprouts, cabbage, collard greens, kale, and kohlrabi, collectively called "cole" crops,[2] though they are of different cultivar groups.'
    // },
    {
      id : 38,
      image : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRar9F5z4DLYoMjSDUrWbItAauzU6sjcNMdbnhHhgbmxoF13OUE',
      catagory : 'food',
      heading : 'ALMOND',
      description : "The fruit of the almond is a drupe, consisting of an outer hull and a hard shell with the seed, which is not a true nut. Shelling almonds refers to removing the shell to reveal the seed. Almonds are sold shelled or unshelled. Blanched almonds are shelled almonds that have been treated with hot water to soften the seedcoat, which is then removed to reveal the white embryo. Once almonds are cleaned and processed, they can be stored over time. Almonds are used in many cuisines, often featuring prominently in desserts, such as marzipan."
    },
    {
      id : 39,
      image : 'https://miro.medium.com/v2/resize:fit:624/1*_Z2W8urXttbKVBaryY9PfQ.png',
      catagory : 'technology',
      heading : 'REACT',
      description : "React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by using a component-based approach.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug."
    },
    // {
    //   id : 46,
    //   image : 'https://miro.medium.com/v2/resize:fit:679/1*m2M7BVJ5XC96hpl_lgKIkg.gif',
    //   catagory : 'technology',
    //   heading : 'MONGODB',
    //   description : "MongoDB is a tool for managing and storing document-oriented information. It's a NoSQL database that's considered schemaless because it doesn't require a rigid, pre-defined schema. This means that data can be placed into a NoSQL database without a predefined schema, and the data model and formats can be changed without disrupting applications. MongoDB is used for high-volume data storage, helping organizations store large amounts of data while still performing rapidly. It's widely used for storing product information and details by finance and e-commerce companies. MongoDB can also be used to store and model machine-generated data."
    // },
    {
      id : 40,
      image : 'https://yt3.googleusercontent.com/7Qy-xiYrM2DHUEVFTBkok5ei6n_qEnH9XRwBECZnsl_E02VxrLDYcU7svibdYL1YYs9sZKe6KA=s900-c-k-c0x00ffffff-no-rj',
      catagory : 'technology',
      heading : 'CHROME',
      description : "Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, built with free software components from Apple WebKit and Mozilla Firefox.[16] Versions were later released for Linux, macOS, iOS, and also for Android, where it is the default browser.[17] The browser is also the main component of ChromeOS, where it serves as the platform for web applications."
    },
    


      // latest top post

    {
      id : 52,
      image : 'https://m.media-amazon.com/images/M/MV5BYWYwMWU2N2QtMjExOC00OWY1LTllYzEtYWZjYzZlY2IwMzVhXkEyXkFqcGdeQXVyNjE0ODgwMDA@._V1_.jpg',
      catagory : 'bollywoodt',
      heading : 'SALAAR',
      description : "Salaar: Part 1 – Ceasefire is a 2023 Indian Telugu-language action film written and directed by Prashanth Neel and produced by Vijay Kiragandur.[4] The film features Prabhas and Prithviraj Sukumaran in the lead roles, along with an ensemble supporting cast that includes Shruti Haasan, Jagapathi Babu, Bobby Simha, Tinnu Anand, Easwari Rao, Sriya Reddy and Ramachandra Raju. The film's initial story was pitched from Neel's debut film Ugramm and is the maiden part of a two-part film. The film follows Devaratha 'Deva' who helps his childhood friend Vardharaja 'Vardha' become the undisputed successor of Khansar after Vardha's father Raja Mannar's ministers and advisors plan a coup d'état to kill them by hiring armies to attack Vardha and Khansar.",
      topost : 'firsttop'
    },
    {
      id : 53,
      image : 'https://miro.medium.com/v2/resize:fit:1400/1*-r7A6-fpbV_m-U71Mdk42Q.jpeg',
      catagory : 'fitnesst',
      heading : 'FITNESS WATCH',
      description : 'Smartwatches are the one that knocks out the latest and challenges new inbuilt features. For the upgraded version at a reasonable price. When you are snooping around for a fitness smartwatch you may be puzzled. Because the first thing that will attract your attention is the several options available in the market. It counts on what you are searching forward to. If you want a standard watch that just shows you the time, then you are focusing your selection mostly on style. Nevertheless, if you have to select between a smartwatch or a fitness tracker then you are focused on what extraordinary features you may be provided within health as well as technology-wise. However, if you are a fitness canny then Zest Pro Smartwatch is your solid all-rounder stop. As they are the blend of both a fitness tracker and a smartwatch with incredible characteristics. They offer amazing features, functionality plus attractive build-up at an affordable price.',
      topost : 'firsttop'
    },
    {
      id : 54,
      image : 'https://m.media-amazon.com/images/S/pv-target-images/d5d2a1cc4e103eb34e80386de73460767a91a1fba3562a4f5d0419fbfc09c908.jpg',
      catagory : 'hollywoodt',
      heading : 'THE LAST AIRBENDER',
      description : 'The Last Airbender is a 2010 American action-adventure fantasy film written, co-produced and directed by M. Night Shyamalan, produced by Paramount Pictures, Nickelodeon Movies, Blinding Edge Pictures, and the Kennedy/Marshall Company, and distributed by Paramount.[7][6][1][8] Based on Book One: Water of the Nickelodeon animated television series Avatar: The Last Airbender, the film stars Noah Ringer as Aang, with Dev Patel playing Prince Zuko, Nicola Peltz and Jackson Rathbone as Katara and Sokka.[9] The film tells the story of Aang, a young Avatar who must master all four elements of air, water, fire and earth and restore balance to the world while stopping the Fire Nation from conquering the Water Tribes and the Earth Kingdom.',
      topost : 'firsttop'
    },
    {
      id : 55,
      image : 'https://www.currencytransfer.com/wp-content/uploads/2022/10/robot-3-edit.min_.jpg',
      catagory : 'technologyt',
      heading : 'HUMANOID',
      description : 'A humanoid (/ˈhjuːmənɔɪd/; from English human and -oid "resembling") is a non-human entity with human form or characteristics. By the 20th century, the term came to describe fossils which were morphologically similar, but not identical, to those of the human skeleton.[1]Although this usage was common in the sciences for much of the 20th century, it is now considered rare.[1] More generally, the term can refer to anything with distinctly human characteristics or adaptations, such as possessing opposable anterior forelimb-appendages (i.e. thumbs), visible spectrum-binocular vision (i.e. having two eyes), or biomechanic plantigrade-bipedalism (i.e. the ability to walk on heels and metatarsals in an upright position). Humanoids may also include human-animal hybrids (where each cell has partly human and partly animal genetic contents) and human-animal chimeras (where some cells are human and some cells are animal in origin).[2] Science fiction media frequently present sentient extraterrestrial lifeforms as humanoid as a byproduct of convergent evolution.',
      topost : 'firsttop'
    },
    {
      id : 56,
      image : 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg',
      catagory : 'foodt',
      heading : 'APPLE',
      description : 'Apple, (Malus domestica), domesticated tree and fruit of the rose family (Rosaceae), one of the most widely cultivated tree fruits. Apples are predominantly grown for sale as fresh fruit, though apples are also used commercially for vinegar, juice, jelly, applesauce, and apple butter and are canned as pie stock. A significant portion of the global crop also is used for cider, wine, and brandy. Fresh apples are eaten raw or cooked. There are a variety of ways in which cooked apples are used; frequently, they are used as a pastry filling, apple pie being perhaps the archetypal American dessert. Especially in Europe, fried apples characteristically accompany certain dishes of sausage or pork. Apples provide vitamins A and C, are high in carbohydrates, and are an excellent source of dietary fibre.',
      topost : 'firsttop'
    },


  //  BOLLYWOOD SMALL TOP POST 

    {
      id: 90,
      image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmoZIoFgIkKCledRzZT3q3xy64ZwMfnVXSQUdfp7cSo1suHPye',
      heading : 'PATHAN',
      catagory : 'bollywoodt',
      description : 'Pathaan (pronounced [pəʈʰaːn]) is a 2023 Indian Hindi-language action thriller film co-written and directed by Siddharth Anand and produced by Aditya Chopra under Yash Raj Films. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan in the title role, alongside Deepika Padukone and John Abraham, with Dimple Kapadia and Ashutosh Rana in supporting roles. Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a former RAW agent, who plans to attack India with a deadly virus.'
    },
    {
      id : 91,
      image : 'https://m.media-amazon.com/images/M/MV5BYjI5NjFlMGItMWY1NC00YjY3LTgzMmUtYmY5NjBiZGMyNTc1XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg',
      catagory : 'bollywoodt',
      heading : 'DEVIL',
      description : 'Devil is a 2023 Indian movie that is also known as Devil: The British Secret Agent. It is about a British spy agent who is on a mission to solve a mystery involving love, betrayal, and deceit. The movie is directed by Abhishek Nama and written by Srikanth Vissa. It is set to be released on December 29, 2023.'
    },
    {
      id : 92,
      image : 'https://m.media-amazon.com/images/M/MV5BYTk3MGEyOWEtMjFjZC00YzZhLWI5ZWQtMjE3NmE1ZGI3M2E3XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg',
      catagory : 'bollywoodt',
      heading : 'THE GREAT INDIAN FAMILY',
      description : 'The Great Indian Family is a 2023 Indian Hindi-language comedy drama film written and directed by Vijay Krishna Acharya and produced by Aditya Chopra under the banner of Yash Raj Films.[4][5] It stars Vicky Kaushal as a religious, Hindu Pandit who is revealed to be Muslim by birth. Manushi Chhillar, Manoj Pahwa, and Kumud Mishra appear in supporting roles.[6][7]Principal photography began on 20 November 2020 and ended on 25 February 2021. It was released theatrically on 22 September 2023.[8]'
    },

    // FITNESS SMALL TOP POST 

    {
      id : 93,
      image : 'https://www.cnet.com/a/img/resize/bfcd7abe74a2ba4123f34d217b5cbad648666ac1/hub/2022/01/06/94140ad3-f139-4a76-821e-98a5262afb71/lifestyle-lumen-jpg.png?auto=webp&fit=crop&height=360&width=640',
      catagory : 'fitnesst',
      heading : 'LUMEN',
      description : "This tool is all about teaching you how to meet your wellness goals. I found the Lumen difficult to use at first because I couldn't breathe correctly (I was always winded), but once I got used to it, it was smooth sailing. When using Lumen, you breathe into it to identify whether you are burning fat or carbs. From there, you're given a health plan via the Lumen app that you can use to monitor your progress. Even if you're not using it consistently, it does a good job of always telling you where you are on its scale so you can adjust yourself accordingly. I'd liken it to using a Keto stick to know where you are for that diet, just more high-tech."
    },
    {
      id : 94,
      image : 'https://i5.walmartimages.com/asr/11c3ee8f-cf52-4f8e-b7eb-ed7e6bd2ba2f.356d50679c1e9e7212df151874c2eb99.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      catagory : 'fitnesst',
      heading : 'FITNESS MAT',
      description : "If you have bad knees you may be in the habit of adding extra padding to your yoga mats, but why not get a thicker cushioned mat from the start? This mat is 1 inch thick and is still easily rolled up when it's not in use. Best of all, I found this mat surprisingly sweat-resistant regardless of the intensity of my workout. "
    },
    {
      id : 95,
      image : 'https://thegadgetflow.com/wp-content/uploads/2023/01/The-most-innovative-workout-gadgets-to-look-forward-to-in-2023-blog-featured.jpeg',
      catagory : 'fitnesst',
      heading : 'LAUREN WADOWSKY',
      description : 'It’s easy to grow tired of workout machines. But a cool new product or 2 might be all you need to put the zest back into your exercise routine. Luckily, the most innovative workout gadgets of 2023 have the tech to keep things interesting.When you’ve run the gamut of workout machines, it may be time to try a new style of exercise altogether, like the Quell fitness gaming console. It takes you to fantasy worlds where your hero’s strength increases with yours.'
    },


    // FOOD SMALL TOP POST 

    {
      id : 96,
      image : 'https://i.pinimg.com/564x/38/38/c8/3838c8d365f0b2a0320dfbd8fbfab329.jpg',
      catagory : 'foodt',
      heading : 'SPRING ROLLS',
      description : "Spring rolls are rolled appetizers or dim sum commonly found in Chinese and Southeast Asian cuisines. The kind of wrapper, fillings, and cooking technique used, as well as the name, vary considerably depending on the region's culture, though they are generally filled with vegetables."
    },
    {
      id : 97,
      image : 'https://i.pinimg.com/564x/17/bd/ba/17bdba17ac93acd96dc670887e1eefc7.jpg',
      catagory : 'foodt',
      heading : 'WATERMILLION',
      description : 'Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties.Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It may also be consumed as a juice or an ingredient in mixed beverages.'
    },
    {
      id : 98,
      image : 'https://fastandfresh.in/cdn/shop/products/triplecoconutwatertreat_800x.jpg?v=1659516595',
      catagory : 'foodt',
      heading : 'COCONUT',
      description : 'The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos.[1] The term "coconut" (or the archaic "cocoanut")[2] can refer to the whole coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut. The name comes from the old Portuguese word coco, meaning "head" or "skull", after the three indentations on the coconut shell that resemble facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics.The coconut tree provides food, fuel, cosmetics, folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it, form a regular part of the diets of many people in the tropics and subtropics. Coconuts are distinct from other fruits because their endosperm contains a large quantity of clear liquid, called "coconut water" or "coconut juice". Mature, ripe coconuts can be used as edible seeds, or processed for oil and plant milk from the flesh, charcoal from the hard shell, and coir from the fibrous husk. Dried coconut flesh is called copra, and the oil and milk derived from it are commonly used in cooking – frying in particular – as well as in soaps and cosmetics. Sweet coconut sap can be made into drinks or fermented into palm wine or coconut vinegar. The hard shells, fibrous husks and long pinnate leaves can be used as material to make a variety of products for furnishing and decoration.'
    },


    // HOLLYWOOD SMALL POST 

    {
      id : 99,
      image : 'https://m.media-amazon.com/images/M/MV5BNDYwNjhkN2QtNTQwYS00YTJlLThmNWQtMzViZWQzYzUzNWJlXkEyXkFqcGdeQXVyMTMxODQ2MjI4._V1_.jpg',
      catagory : 'hollywoodt',
      heading : 'THE LEGION OF SUPER-HEROES',
      description : 'Legion of Super-Heroes is a 2023 American animated superhero film based on the DC Comics superhero team of the same name, produced by Warner Bros. Animation and distributed by Warner Bros. Home Entertainment. It is the sixth film in the "Tomorrowverse", and the overall 50th installment in the DC Universe Animated Original Movies line. The film follows Kara Zor-El / Supergirl as she trains alongside the members of the Legion of Super-Heroes from the 31st century, and battles the terrorist organization known as the Dark Circle. The film was directed by Jeff Wamester from a script by Josie Campbell while Jim Krieg, Kimberly S. Moreau served as producers, Butch Lukic as supervising producer and Sam Register as executive producer. The film was released on digital and to home video formats on February 7, 2023.'
    },
    {
      id : 100,
      image : 'https://upload.wikimedia.org/wikipedia/en/3/3e/The_Magician%27s_Elephant_poster.jpg',
      catagory : 'hollywoodt',
      heading : 'THE ELEPHANT',
      description : "The Magician's Elephant is a 2023 animated fantasy adventure film directed by Wendy Rogers, written by Martin Hynes and produced by Julia Pistor. Based on the 2009 novel of the same name by Kate DiCamillo, the film features the voices of Noah Jupe, Mandy Patinkin, Natasia Demetriou, Benedict Wong, Miranda Richardson and Aasif Mandvi. Animated by Animal Logic, the film was distributed by Netflix and released on March 17, 2023."
    },
    {
      id : 101,
      image : 'https://upload.wikimedia.org/wikipedia/en/c/c2/MKLegendsCageMatchCoverArt.jpg',
      catagory : 'hollywoodt',
      heading : 'THE MORTAL COMBAT',
      description : "The Magician's Elephant is a 2023 animated fantasy adventure film directed by Wendy Rogers, written by Martin Hynes and produced by Julia Pistor. Based on the 2009 novel of the same name by Kate DiCamillo, the film features the voices of Noah Jupe, Mandy Patinkin, Natasia Demetriou, Benedict Wong, Miranda Richardson and Aasif Mandvi. Animated by Animal Logic, the film was distributed by Netflix and released on March 17, 2023."
    },


    // TECHNOLOGY SMALL POST 


    {
      id : 102,
      image : 'https://imgsrv2.voi.id/KPT8jccAUPvJiHOimoLOoWchBUd6DnYglQfRWEabBB0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zMDUwMC8yMDIxMDIwMzE0MTUtbW9iaWxlLmNyb3BwZWRfMTYxMjMzNjUzMC5qcGc.jpg',
      catagory : 'technologyt',
      heading : 'NEURALINK',
      description : "Elon Musk's brain-chip firm says it has received approval from the US Food and Drugs Administration (FDA) to conduct its first tests on humans.The Neuralink implant company wants to help restore vision and mobility to people by linking brains to computers.It says it does not have immediate plans to start recruiting participants. Mr Musk's previous ambitions to begin tests came to nothing.The FDA said it acknowledged Neuralink's announcement.An earlier bid by Neuralink to win FDA approval was rejected on safety grounds, according to a report in March by the Reuters news agency that cited multiple current and former employees."
    },
    {
      id : 103,
      image : 'https://m.economictimes.com/thumb/msid-98938183,width-1200,height-900,resizemode-4,imgsize-22794/ios-17-update-three-new-features-likely-to-be-added-to-iphones-in-new-update.jpg',
      catagory : 'technologyt',
      heading : 'APPLE',
      description : "Apple Inc. is an American multinational technology company headquartered in Cupertino, California. As of March 2023, Apple is the world's largest company by market capitalization,[6] and with US$394.3 billion the largest technology company by 2022 revenue.[7] As of June 2022, Apple is the fourth-largest personal computer vendor by unit sales; the largest manufacturing company by revenue; and the second-largest mobile phone manufacturer in the world. It is considered one of the Big Five American information technology companies, alongside Alphabet (parent company of Google), Amazon, Meta, and Microsoft."
    },
    {
      id : 104,
      image : 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Windows_11_Desktop.png/300px-Windows_11_Desktop.png',
      catagory : 'technologyt',
      heading : 'WINDOWS',
      description : "Windows 11 is the latest major release of Microsoft's Windows NT operating system, released on October 5, 2021. It succeeded Windows 10 (2015) and is available for free for any Windows 10 devices that meet the new Windows 11 system requirements.Windows 11 features major changes to the Windows shell influenced by the canceled Windows 10X, including a redesigned Start menu, the replacement of its 'live tiles' with a separate 'Widgets' panel on the taskbar, the ability to create tiled sets of windows that can be minimized and restored from the taskbar as a group, and new gaming technologies inherited from Xbox Series X and Series S such as Auto HDR and DirectStorage on compatible hardware. Internet Explorer (IE) has been replaced by the Chromium-based Microsoft Edge as the default web browser, like its predecessor, Windows 10, and Microsoft Teams is integrated into the Windows shell."
    },



    


  ])

  return(
      //  using provider provide data to all components 
    <Store.Provider value = {[data,setData]}>
      {props.children}
    </Store.Provider>
  )
}

export default DataCompo