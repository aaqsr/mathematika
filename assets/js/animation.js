// for the subscribe wala quote scroller

let quoteTyper = new TypeIt("#typedQuotes", {
    html: true,
    speed: 40,
    loop: true,
    loopDelay: 1000,
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

var p = 3000;

for (const str of content) {
    quoteTyper
        .type(str)
        .pause(p)
        .delete(0 - str.length)
        .pause(100);
}

quoteTyper.go();


// for the about us quote

new TypeIt("#aboutUsQuote", {
    html: true,
    strings: '"Would you teach an artist <span class="emph">how to paint</span> without letting them <span class="emph">pick up the brush?</span>"',
    speed: 50,
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
    .type("'I'm not good at maths, I can't join' is one of the <span class=\"emph2\">greatest misconceptions</span> about mathematika.<br />Anyone can join.")
    .pause(700)
    .delete(-16)
    .pause(500)
    .type("<span class=\"emph2\" style=\"text-decoration:underline\">Anyone can join.</span>")
    .move(16)
    .go();

// for digits of pi

new TypeIt('#piDigits', {
    html: true,
    strings: '3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 8214808651 3282306647 0938446095 5058223172 5359408128 4811174502 8410270193 8521105559 6446229489 5493038196 4428810975 6659334461 2847564823 3786783165 2712019091 4564856692 3460348610 4543266482 1339360726 0249141273 7245870066 0631558817 4881520920 9628292540 9171536436 7892590360 0113305305 4882046652 1384146951 9415116094 3305727036 5759591953 0921861173 8193261179 3105118548 0744623799 6274956735 1885752724 8912279381 8301194912 9833673362 4406566430 8602139494 6395224737 1907021798 6094370277 0539217176 2931767523 8467481846 7669405132 0005681271 4526356082 7785771342 7577896091 7363717872 1468440901 2249534301 4654958537 1050792279 6892589235 4201995611 2129021960 8640344181 5981362977 4771309960 5187072113 4999999837 2978049951 0597317328 1609631859 5024459455 3469083026 4252230825 3344685035 2619311881 7101000313 7838752886 5875332083 8142061717 7669147303 5982534904 2875546873 1159562863 8823537875 9375195778 1857780532 1712268066 1300192787 6611195909 2164201989',
    speed: 50,
    cursorChar: '<span style="color: lime">|</span>',
    waitUntilVisible: true,
}).go();