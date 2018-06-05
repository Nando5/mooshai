console.log("main.js is working");

// Character constructor
var Character = function (characterTitle, characterAcknowlegde, characterDescription, characterReleaseNotice, characterHero) {
    this.characterTitle = characterTitle;
    this.characterAcknowlegde = characterAcknowlegde;
    this.characterDescription = characterDescription;
    this.characterReleaseNotice = characterReleaseNotice;
    this.characterHero = characterHero;
}

// Create a list of characters
var characters = [
    angryBeavers = new Character("The Angry Beavers",
                              "The Angry Beavers is an American animated television series created by Mitch Schauer for Nickelodeon.",
                              "The series revolves around Daggett and Norbert Beaver, two young beaver brothers who have left their home to become bachelors in the forest near the fictional Wayouttatown, Oregon. Daggett Doofus 'Dag' Beaver: The younger brother of Norbert (by four minutes). Hyperactive and immature, Daggett has a habit of over-emphasized and manic motions as well as a potent penchant for name-calling. He shares with his brother a typical brotherly love-hate relationship, supporting and antagonizing his elder sibling as his mood requires. Norbert Foster 'Norb' Beaver (voiced by Mitchell Whitfield in the pilot, Nick Bakay in the series): Daggett's laid-back older brother. Generally well-spoken and intelligent, Norbert is a highly sarcastic beaver with a habit of performing great feats of impeccable engineering with aplomb and without explanation and often lazy. He is very condescending towards Daggett.",
                              "Coming Soon September 2018",
                              "vinyl-nickelodeon-nick-90s-blind-box-mini-series-11_1000x.jpg"),
    renAndStimpy = new Character("The Ren & Stimpy Show",
                              "The Ren & Stimpy Show is an American animated series created by John Kricfalusi for Nickelodeon.",
                              "The series follows the adventures of title characters Ren, an emotionally unstable chihuahua, and Stimpy, a good-natured, dimwitted cat. The show features a host of supporting characters. Some appear only in one episode, while others recur and occasionally appear in different roles.",
                              "Coming Soon September 2018",
                              "vinyl-nickelodeon-nick-90s-blind-box-mini-series-9_1000x.jpg"),  
    rockosModernLife = new Character("Rocko's Modern Life",
                              "Rocko's Modern Life is an American animated sitcom created by Joe Murray for Nickelodeon.",
                              "The series centers on the surreal life of an anthropomorphic Australian-immigrant wallaby named Rocko as well as his friends: the gluttonous steer Heffer, the neurotic turtle Filburt, and Rocko's faithful dog Spunky. It is set in the fictional town of O-Town.",
                              "Coming Soon September 2018",
                              "vinyl-nickelodeon-nick-90s-blind-box-mini-series-7_1000x.jpg"),
    rugrats = new Character("Rugrats", 
                            "Based on the characters created by N.V Beville for the Nickolodeon network. 2001.", 
                            "He is the leader of the babies, and is dressed in a blue shirt and diapers throughout the series (with the exception of the first episode in which he wears an orange shirt). He is best friends with Chuckie Finster. Tommy is also the bravest and most adventurous of all the babies.", 
                            "Coming Soon September 2018",
                            "vinyl-nickelodeon-nick-90s-blind-box-mini-series-5_2048x.jpg"),
    spongeBob = new Character("SpongeBob SquarePants",
                              "SpongeBob was created and designed by cartoonist and marine biologist Stephen Hillenburg.",
                              "SpongeBob is a good-natured, optimistic, naive, and enthusiastic yellow sea sponge residing in the undersea city of Bikini Bottom alongside an array of other aquatic creatures. He works as a fry cook at a local fast food restaurant, the Krusty Krab, to which he is obsessively attached. At work, SpongeBob answers to Eugene Krabs, a greedy crab who shows SpongeBob favor,alongside his ill-tempered, snobbish next-door neighbor Squidward Tentacles. His hobbies include jellyfishing, practicing karate at an elementary level, and blowing bubbles.",
                              "Coming Soon September 2018",
                              "vinyl-nickelodeon-nick-90s-blind-box-mini-series-6_2048x.jpg"),
    
    
    
    wildThornberrys = new Character("The Wild Thornberrys",
                              "The Wild Thornberrys is an American animated television series that originally aired on Nickelodeon from 1998 to 2004.",
                              "The series focuses around a nomadic family of documentary filmmakers known as the Thornberrys, famous for their televised wildlife studies. It primarily centers on the family's younger daughter Eliza, and her secret gift of being able to communicate with animals,[1] which was bestowed upon her after having rescued a shaman masquerading as a trapped warthog. The gift enabled her to talk to the Thornberrys' pet chimpanzee Darwin. Together, the pair frequently venture through the wilderness, befriending many species of wild animals along the way or realizing moral truths and lessons through either their experiences or a particular animal species's lifestyle, or simply assisting the creatures, by which they become acquainted, in their difficulties.",
                              "Coming Soon September 2018",
                              "vinyl-nickelodeon-nick-90s-blind-box-mini-series-10_1000x.jpg"),
    
    heyArnold = new Character("Hey Arnold!",
                              "Hey Arnold! is a Nicktoon created by Craig Bartlett for Nickelodeon, which ran from 1996 to 2004.",
                              "The show's premise focuses on a fourth grader named Arnold who lives with his grandparents in a large city. Episodes center on his experiences navigating big city life while dealing with the problems he and his friends encounter, including urban legends.",
                              "Coming Soon September 2018")                   
];

var updateCopy = function(id){
    $('.hero-image').empty();
    $('.character-title').empty();
    $('.character-acknowlegde').empty();
    $('.character-description').empty();
    $('.character-release-notice').empty();

    $('.hero-image').append('<img src="assets/img/hero/' + characters[id].characterHero + '">');
    $('.character-title').append(characters[id].characterTitle);
    $('.character-acknowlegde').append(characters[id].characterAcknowlegde);
    $('.character-description').append(characters[id].characterDescription);
    $('.character-release-notice').append(characters[id].characterReleaseNotice); 
};

$(".collection-of-toys img").click(function(){
    // console.log($(this).data("id"));
    updateCopy($(this).data("id"));
});