let typer = new TypeIt("#typedQuotes", {
    html: true,
    speed:  80,
    loop: false,
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
  typer.type(str).pause(p).delete(0 - str.length);
}

typer.go();

