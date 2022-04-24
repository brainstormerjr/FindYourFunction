let horoscopes = {
    LINEAR: {
        "name": "Linear / Straight Line",
        "generalForm": `\\[y=mx+c\\]`,
            "image": "../images/Linear.png",
        "horoscope": `<p class="Subsubtitle">
            Linear graphs are extremely simple: a straight line.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                And so are you! You are a simple person. 
                You think something, you say something about it.
                You want something, you do something to get it.
                A straightforward person. You don't give a shit about the things in your way.
            </p>`
    },
    CIRCLE: {
        "name": "Circle",
        "generalForm": `\\[x^2+y^2=r^2\\]`,
            "image": "../images/Circle.png",
        "horoscope": `<p class="Subsubtitle">
            Circle graphs are constrained to a range of x and y values.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You don't really venture outside your comfort zone.
                After all, why would you? It is nice and cozy inside your bubble. Going outside would be a nightmare.
            </p>`
    },
    QUADRATIC: {
        "name": "Parabola / Quadratic",
        "generalForm": `\\[y=ax^2+bx+c\\]`,
            "image": "../images/Quadratic.png",
        "horoscope": `<p class="Subsubtitle">
            Parabolas start off decreasing, and only have one turning point (for values of a larger than zero)
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                Your life may be pretty terrible right now, but there is an opportunity for a comeback.
                These opportunites are rare, but you will be able to grab them. No doubt.
            </p>`
    },
    CUBIC: {
        "name": "Cubic",
        "generalForm": `\\[y=ax^3+bx^2+cx+d\\]`,
            "image": "../images/Cubic.png",
        "horoscope": `<p class="Subsubtitle">
            Look at this cubic graph. It goes up, then down, then up again.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You can perservere through anything life throws at you. Whatever shit you have to deal with right now, it is nothing compared to your with your willpower.
                <br>
                After all, your spirit graph can get through f''(x) > 0.
                You can do anything!
            </p>`
    },
    EXPONENTIAL: {
        "name": "Exponential",
        "generalForm": `\\[y=Ae^{kx}\\]`,
            "image": "../images/Exponential.png",
        "horoscope": `<p class="Subsubtitle">
            An exponential graph grows out of control quick.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                Your are a being of pure positive energy. As seen in this graph. You never let anything get you down,
                and your enthusiasm is like no other. 
            </p>`
    },
    LOGARITHMIC: {
        "name": "Logarithmic",
        "generalForm": `\\[y=log_{b}(x-h) + k\\]`,
            "image": "../images/Logarithmic.png",
        "horoscope": `<p class="Subsubtitle">
            The growth of a logarithmic graph gets slower and slower.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You are no different. Not growth, but motivation. You procrastinate.
                All day long. Watching videos, scrolling your feed, doing mathematical horoscopes...
                <br>
                You try to get things done. But you get demotivated. Progress slows down too much.
            </p>`
    },
    INVERSE: {
        "name": "Inverse",
        "generalForm": `\\[y=\\frac{k}{x-h} + c\\]`,
            "image": "../images/Inverse.png",
        "horoscope": `<p class="Subsubtitle">
            The inverse graph tends towards zero in either direction.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                I'm sorry to break it to you, but you have depression. You keep going too hard
                on yourself. You keep focusing on the sad things in life, and it makes you miserable.
                <br>
                Well, stop! When I feel sad, I stop feeling sad and be awesome instead!
                <br>
                I know this advice is pretty terrible, but there is 
                no reason to be this down! Besides, what else can I do?
            </p>`
    },
    ABSOLUTE: {
        "name": "Absolute / Modulus",
        "generalForm": `\\[y=|mx + c|\\]`,
            "image": "../images/Absolute.png",
        "horoscope": `<p class="Subsubtitle">
            The modulus graph takes the positive value of everything.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                I feel like this needs no explanation. You are positive.
                <br>
                You ooze positivity. So much so that even an inverse graph person becomes happy again.
                Keep spreading the positivity!
            </p>`
    },
    SINECOSINE: {
        "name": "Sine / Cosine",
        "generalForm": `\\[y=sin(x) / cos(x)\\]`,
            "image": "../images/SineCosine.png",
        "horoscope": `<p class="Subsubtitle">
            The sine and cosine graphs oscillate between -1 and 1.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You are in a routine, and it is great! You don't take uneccessary risks, because...
                <br>
                Well, because they are unceccessary. And that's fine! Why risk losing everything, right?
            </p>`
    },
    TANGENT: {
        "name": "Tangent",
        "generalForm": `\\[y=tan(x)\\]`,
            "image": "../images/Tangent.png",
        "horoscope": `<p class="Subsubtitle">
            The tangent graph goes wild every 180° along the x axis.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You may not necessarily be an adrenaline junkie, but you love taking risks.
                <br>
                These risks will take you to the extreme - but not necessarily the good kind.
                Just like the tangent graph, these risks will shoot you over the moon or drive you into the ground.
                Just be careful.
            </p>`
    },
    SPIRAL: {
        "name": "Spiral",
        "generalForm": `\\[r=k\\theta\\]`,
            "image": "../images/Spiral.png",
        "horoscope": `<p class="Subsubtitle">
            The spiral graph goes around and around and around...
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You may not know what you want to do in life, but you are searching,
                crawling your way through the world looking for something that piques your interest
                and excites you... But that may never come...
                <br>
                You have no idea what the fuck you're doing, do you?
            </p>`
    },
    PUSSY: {
        "name": "Blank",
        "generalForm": `\\[????????????\\]`,
            "image": "../images/Blank.png",
        "horoscope": `<p class="Subsubtitle">
            The blank graph is... well, blank.
            </p>
            <p class="Subsubtitle" style="padding-left: 10vw; padding-right: 10vw; text-align: center">
                You keep answering "I don't know". I can't tell you your function if
                you keep telling me nothing. Why are you telling me nothing?
                Do you have anything to hide? What the fuck are you not telling me?
                <br>
                Answer me, pussy!
            </p>`
    }
}