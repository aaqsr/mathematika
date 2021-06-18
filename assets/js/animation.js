// for the subscribe wala quote scroller

let quoteTyper = new TypeIt("#typedQuotes", {
    html: true,
    speed:  80,
    loop: true,
    loopDelay: 4000,
    cursorChar: '<span style="color: lime">|</span>',
    waitUntilVisible: true,
})

var content = [
    '"Pure Mathematics is, in its way, the <em>Poetry</em> of logical ideas" ~Einstein',
    '"Logic is the foundation of the certainty of all the knowledge we acquire." ~Euler',
    '"The enchanting charms of this <em>sublime science</em> reveal only to those who have the <em>courage</em> to go deeply into it." ~Gauss',
    '"Mathematics is the most beautiful and most powerful creation of the human spirit" ~Banach',
    '"There should be no such thing as boring mathematics." ~Edsger',
    '"If only I had the Theorems! Then I should find the proofs easily enough." ~Riemann',
    '"It is impossible to be a mathematician without being a poet in soul." ~Sofia Kovalevskaya"',
];

var p = 1500;

for(const str of content) {
  quoteTyper
        .type(str)
        .pause(p)
        .delete(0 - str.length);
}

quoteTyper.go();


// for the about us quote

new TypeIt("#aboutUsQuote", {
    html: true,
    strings: '"Would you teach an artist <span class="emph">how to paint</span> without letting them <span class="emph">pick up the brush?</span>"',
    speed: 80,
    cursorChar: '<span style="color: lime">|</span>',
    waitUntilVisible: true,
}).go();

    
// for the subtile of title quote

new TypeIt('#subtitleOfTitle', {
    html: true,
    speed: 50,
    cursorChar: '<span style="color: lime">|</span>',
    waitUntilVisible: true,
})
    .type("'I'm not good at maths, I can't join' is one of the <span class=\"emph2\">greatest misconceptions</span> about mathematika.<br />Anyone can join the society.")
    .pause(700)
    .move(-13)
    .delete(-15)
    .pause(500)
    .type("<span class=\"emph2\">Anyone can join</span>")
    .move(15)
    .go();
