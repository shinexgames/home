$(document).ready(function() {
    var $element = $('#bubble');
    var phrases = [
        'Hi i am SHINEX BOT',
        'i am a nice helper',
        'I help you to spend time with much fun and enjoy',
        'Remember that all games are free here',
        'And you can choose any you want',
        'Call your friends and enjoy :)',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});



