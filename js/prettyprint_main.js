//laptop waar alles op stond (dit was voordat we git hadden geleerd) hdd was corrupt gegaan dus ik heb jammer genoeg alleen de minified files kunnen vinden.
window.onload = function() {
    let e = document.getElementById("js--defaultContainer")
      , n = document.getElementById("js--responseContainer")
      , t = document.getElementById("js--chatContainer")
      , a = document.getElementsByClassName("responseMessage")
      , s = document.getElementById("js--textBar")
      , i = document.getElementById("js--textBar-text")
      , o = document.getElementById("js--unlock")
      , r = document.getElementById("js--homeScreen")
      , l = document.getElementById("js--time")
      , d = document.getElementById("js--date");
    const g = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    let m = document.getElementById("js--topBar")
      , p = document.getElementById("js--bottomBar")
      , h = document.getElementById("js--status")
      , c = document.getElementById("js--callScreen")
      , k = document.getElementById("js--call")
      , u = document.getElementById("js--hangUp")
      , j = document.getElementById("js--callStatus")
      , v = document.getElementsByClassName("callScreen__dotsContainer__dot")
      , b = document.getElementById("js--imageOverlay")
      , y = document.getElementById("js--overlayImage")
      , C = document.getElementById("js--overlay_close")
      , w = document.getElementsByClassName("textMessage__image")
      , I = new Audio("../data/phone_alert.mp3")
      , z = new Audio("../data/sent_txt.mp3")
      , E = new Audio("../data/click.mp3")
      , f = new Audio("../data/ringing.mp3")
      , H = new Audio("../data/protest_sounds.mp3")
      , M = document.getElementById("js--endingOverlay")
      , B = document.getElementById("js--endingStory")
      , L = document.getElementById("js--endingOverlay__informationContainer")
      , T = document.getElementById("js--endingRestart")
      , W = !1
      , D = [{
        messages: ["Hey!", "ben je online?", "Ik heb je hulp nodig. 😅"],
        responses: ["Hey! Wat is er?", "Wie ben je?"],
        image: "",
        linkChapter: [4, 1]
    }, {
        messages: ["Ben je me alweer vergeten? 😋", "Grapje hoor, het is alweer een tijdje geleden.", "Ik ben Ashley, we studeerde samen, maar ik ben naar Hong Kong verhuisd."],
        responses: ["Ashley! Natuurlijk!", "Wie?"],
        image: "",
        linkChapter: [4, 2]
    }, {
        messages: ["Ha ha, heel leuk.", "Maar even serieus, ik heb je hulp nodig."],
        responses: ["Wat is er?", "Sorry, ik bedoelde het niet zo."],
        image: "",
        linkChapter: [4, 3]
    }, {
        messages: ["Maakt niet uit!", "Anyway,"],
        responses: [],
        image: "",
        linkChapter: [4, 4]
    }, {
        messages: ["Heb je gehoord van de protesten in Hong Kong?"],
        responses: ["Nee?", "Volgens mij wel"],
        image: "",
        linkChapter: [13, 5]
    }, {
        messages: ["Oh mooi!", "Hoe heb je ervan gehoord?"],
        responses: ["Het nieuws.", "Social media."],
        image: "",
        linkChapter: [6, 9]
    }, {
        messages: ["Het nieuws?", "Mooi! Eindelijk wat internationale attentie"],
        responses: ["Hoezo ben je zo verbaasd?", "Is dat niet gebruikelijk dan?"],
        image: "",
        linkChapter: [7, 7]
    }, {
        messages: ["Dat komt omdat de meeste nieuwszenders omgekocht worden door China.", "Dus veel media wilt niet over de protesten praten."],
        responses: ["Wow...", "Dat is vreselijk!"],
        image: "",
        linkChapter: [8, 8]
    }, {
        messages: ["Ja...", "Wacht maar tot je hoort over wat ze nog meer doen hier."],
        responses: ["Wat doen ze dan?", "Wacht, ik heb hiervan gehoord."],
        image: "",
        linkChapter: [12, 12]
    }, {
        messages: ["Mooi.", "Ze kunnen niet alle posts op social media stoppen."],
        responses: ["Waarom willen ze het stoppen?", "Hoe bedoel je?"],
        image: "",
        linkChapter: [10, 10]
    }, {
        messages: ["Ze willen niet dat mensen te weten komen wat ze doen."],
        responses: ["Waarom niet?", "Wat doen ze dan?"],
        image: "",
        linkChapter: [11, 12]
    }, {
        messages: ["Omdat ze dingen doen die afschuwlijk zijn."],
        responses: ["Wat doen ze dan?", "Wacht, ik heb hiervan gehoord."],
        image: "",
        linkChapter: [12, 12]
    }, {
        messages: ["Ze hebben bijvoorbeeld laatst nog een man gepeppersprayed!", "Puur omdat hij een vraag stelde aan de politie agent.", "Schoften zijn het. 😔"],
        responses: ["Wat??", "Is dat niet van veels te dichtbij?"],
        image: "../data/pepperspray.png",
        linkChapter: [16, 17]
    }, {
        messages: ["Nou kijk,", "China wilt weer controle over Hong Kong.", "En daar zijn de mensen hier niet zo blij mee. 😬"],
        responses: [],
        image: "../data/protest.jpg",
        linkChapter: [14, 14]
    }, {
        messages: [],
        responses: ["Waarom zijn mensen zo boos?", "Wat houdt dat in?"],
        image: "../data/protest2.jpg",
        linkChapter: [15, 15]
    }, {
        messages: ["Mensen zijn daar zo tegen omdat als het zo doorgaat...", "..je opgepakt zou kunnen worden als je kritiek hebt op China."],
        responses: ["Wow.. Dat is belachelijk.", "Dat kan toch niet?"],
        image: "",
        linkChapter: [16, 16]
    }, {
        messages: ["Ja belachelijk toch?", "Dit gebeurt in China al jaren, Hong Kong heeft gelukkig hun eigen overheid.", "Naja, 'gelukkig', de vraag is hoe lang dat zo blijft. 🙁"],
        responses: ["Maar wat was er?", "Wat houdt dat in?"],
        image: "",
        linkChapter: [19, 18]
    }, {
        messages: ["Ja dat is het ook."],
        responses: ["Maar wat was er?", "Waar had je mijn hulp voor nodig?"],
        image: "",
        linkChapter: [19, 19]
    }, {
        messages: ["Dat houdt in dat als ik wat slechts zou zeggen over China,", "Of zou ik een van hun domme wetten breken,", "Ik opgepakt kan worden en/of gestuurd kan worden naar een kamp"],
        responses: ["Had je hiermee hulp nodig?", "Waarvoor appte je trouwens?"],
        image: "",
        linkChapter: [19, 19]
    }, {
        messages: ["Nou kijk,", "Er zijn dus mensen aan het protesteren.", "Dus ik vraag me af of ik mee zal protesteren."],
        responses: ["Ja, doen!", "Ik zou eerst naar de media gaan."],
        image: "",
        linkChapter: [25, 20]
    }, {
        messages: ["Dat heb ik dus al geprobeerd,", "Maar ze wouden niet luisteren. 😟", "Ik ben bang dat ze omgekocht zijn."],
        responses: ["En heb je social media al geprobeerd?", "Dan maar de straten op!"],
        image: "",
        linkChapter: [21, 25]
    }, {
        messages: ["Ja, dat werkt gelukkig het beste,", "Ik en een paar vrienden zijn samen de vreselijke dingen die de politie doet aan het posten.", "Gelukkig doen de meeste mensen dit al."],
        responses: ["Dan kan je nog alleen protesteren niet?", "Wat kan je nog doen dan?"],
        image: "../data/police_act.png",
        linkChapter: [25, 22]
    }, {
        messages: ["Naja ik heb eigenlijk maar 2 opties:", "Of ik ga mee protesteren,", "Of ik doe alsof er niks aan de hand is"],
        responses: ["Ga protesteren!", "Waarom zou je doen alsof er niks is?"],
        image: "",
        linkChapter: [25, 23]
    }, {
        messages: ["Ik weet het niet.", "Misschien gaat het allemaal vanzelf over.", "Hopelijk..."],
        responses: ["Nee! Dat is dom!", "[EINDE] Doe dat maar"],
        image: "",
        linkChapter: [24, 43]
    }, {
        messages: ["Ja je hebt gelijk..."],
        responses: [],
        image: "",
        linkChapter: [25]
    }, {
        messages: ["Ik ga de straten op dan", "Zal ik met vrienden gaan of alleen?"],
        responses: ["Ga met je vrienden!", "Je hebt geen vrienden nodig!"],
        image: "",
        linkChapter: [26, 27]
    }, {
        messages: ["Okee, ik heb buiten afgesproken met mijn vrienden.", "Ik ben wel een beetje bang voor de politie. 😟"],
        responses: ["Waarom ben je bang?", "'T komt goed!"],
        image: "",
        linkChapter: [27, 30]
    }, {
        messages: ["Ik ben bang omdat een meisje van 15 jaar oud, naakt en dood gevonden was in de zee", "Dit was nadat ze een video op social media had gezet waarop ze huilde over de traangas en de politie bij haar", "Ze zat in haar zwemteam van school, en toch is ze 'verdronken?'", "Sorry hoor, dat geloof ik niet."],
        responses: ["Wow...", "En de politie dan?"],
        image: "../data/zwemmer.png",
        linkChapter: [28, 28]
    }, {
        messages: ["De politie zei dat het NIET verdacht was, en heeft de zaak meteen afgesloten.", "Verder was ze meteen gecremeerd...", "Beetje verdacht als je het aan mij vraagt"],
        responses: ["Schoften", "Blijf goed bij je vrienden!"],
        image: "",
        linkChapter: [29, 30]
    }, {
        messages: ["Ja... Ik ben daarom heel voorzichtig rond politie."],
        responses: [],
        image: "",
        linkChapter: [30]
    }, {
        messages: ["Ik zal zo veel mogelijk bij mijn vrienden blijven.", "We lopen nu naar de hoofdstraat waar het meeste geprotesteerd wordt."],
        responses: [],
        image: "../data/chain.jpg",
        linkChapter: [31]
    }, {
        messages: ["Tot nu toe is het rustig,", "Er is nog niet veel politie, dus alles is goed voor nu."],
        responses: ["Goed zo", "Heb je meer foto's?"],
        image: "",
        linkChapter: [34, 32]
    }, {
        messages: [],
        responses: [],
        image: "../data/sign.jpg",
        linkChapter: [33]
    }, {
        messages: [],
        responses: [],
        image: "../data/sign2.jpg",
        linkChapter: [34]
    }, {
        messages: ["We zijn er nu,", "Mensen beginnen onrustig te worden, ze horen dat er politie aan komt.", "'Politie', oftewel Chinese militairen gekleed als politie."],
        responses: [],
        image: "../data/onrust.jpg",
        linkChapter: [35]
    }, {
        messages: ["Oh nee..."],
        responses: ["Wat?", "Wat zie je?"],
        image: "",
        linkChapter: [36, 36]
    }, {
        messages: ["Ze beginnen met traangas te schieten...", "Ik ben mijn gasmasker vergeten...", "Wat moet ik doen??"],
        responses: ["Ren weg!", "Doe een natte doek voor je mond!"],
        image: "../data/teargas.jpg",
        linkChapter: [37, 37]
    }, {
        messages: ["Het is te laat...", "Er landde een traangas bus achter me", "Ik heb het ingeade.."],
        responses: ["Hey! Gaat het goed?", "Ashley?"],
        image: "",
        linkChapter: [38, 38]
    }, {
        messages: [],
        responses: ["Ashley??", "Hallo?"],
        image: "",
        linkChapter: [39, 39]
    }, {
        messages: [],
        responses: ["Ben je er nog??", "ASHLEY?"],
        image: "",
        linkChapter: [40, 40]
    }, {
        messages: [],
        responses: ["ASHLEY??!", "Waar ben je??!"],
        image: "",
        linkChapter: [41, 41]
    }, {
        messages: ["Hey...", "Politie deed een aanval.", "Vrienden kwijt.."],
        responses: ["Ga terug naar huis!", "[EINDE] Zoek je vrienden!"],
        image: "",
        linkChapter: [42, 43]
    }, {
        messages: ["Ben uit de groep.", "Effect traangas begint te stoppen", "Ik weet niet waar mijn vrienden zijn."],
        responses: ["[EINDE] Snel je huis in!", "[EINDE] Shit..."],
        image: "",
        linkChapter: [43]
    }, {
        messages: [],
        responses: [],
        image: "",
        linkChapter: [43]
    }]
      , x = 0
      , N = ()=>{
        let e = new Date
          , n = ""
          , t = "";
        e.getHours() <= 9 && (n += "0"),
        e.getMinutes() <= 9 && (t += "0"),
        n += e.getHours(),
        t += e.getMinutes(),
        l.innerHTML = n + ":" + t;
        let a = e.getDate()
          , s = g[e.getMonth()]
          , i = e.getYear();
        d.innerHTML = a + " " + s + " " + (1900 + i)
    }
    ;
    N();
    let _ = setInterval(function() {
        N()
    }, 1e3)
      , A = !1;
    T.onclick = function() {
        document.location.reload()
    }
    ;
    C.onclick = function() {
        b.style.display = "none"
    }
    ,
    b.onclick = function() {
        b.style.display = "none"
    }
    ,
    k.onclick = function() {
        f.play(),
        c.style.display = "block";
        setTimeout(function() {
            j.innerHTML = "in call",
            f.pause(),
            f.currentTime = 0,
            H.play();
            for (let e = 0; e < v.length; e++)
                v[e].classList.remove("calling"),
                setTimeout(function() {
                    v[e].classList.add("prepareCall", "inCall")
                }, 1e3)
        }, 6e3)
    }
    ,
    u.onclick = function() {
        H.pause(),
        H.currentTime = 0,
        j.innerHTML = "calling",
        f.pause(),
        f.currentTime = 0,
        c.style.display = "none";
        for (let e = 0; e < v.length; e++)
            v[e].classList.remove("inCall", "prepareCall"),
            v[e].classList.add("calling");
        setTimeout(function() {
            I.play(),
            J("Ik kan nu echt niet praten! Sorry!", !1),
            setTimeout(function() {
                J("Zit te dicht bij de protesten momenteel.", !1)
            }, 1e3)
        }, 1500)
    }
    ,
    e.onclick = function() {
        A && (n.classList.toggle("hidden"),
        t.classList.toggle("scootUp"),
        t.lastChild.scrollIntoView(!0, {
            behavior: "smooth"
        }))
    }
    ,
    t.onclick = function() {
        n.classList.add("hidden"),
        t.classList.remove("scootUp")
    }
    ;
    for (let e = 0; e < a.length; e++)
        a[e].onclick = function() {
            if (!W)
                return;
            if (W = !1,
            -1 !== a[e].children[0].innerHTML.indexOf("[EINDE]"))
                switch (a[e].children[0].innerHTML = a[e].children[0].innerHTML.replace("[EINDE]", ""),
                x) {
                case 23:
                    return void S("Iedereen denkt dat één persoon niet uit maakt in het grotere geheel. Je hebt ervoor gekozen om Ashley niet te laten protesteren. Hierdoor waren er niet genoeg mensen voor internationale attentie, en Hong Kong is hun vrijheid kwijt.");
                case 41:
                    return void S("Je hebt gekozen om terug de straten in te gaan om je vrienden te zoeken. Je bent opgepakt door de politie en naar een 'heropvoedingskamp' gestuurd. Hier wordt je wreed behandelt.");
                case 42:
                    return void S("Je hebt gekozen om Ashley naar huis te laten gaan, en zij is veilig. Echter zijn haar vrienden opgepakt en naar een 'heropvoedingskamp' gestuurd, waar ze wreed behandeld worden.")
                }
            let o = a[e].children[0].innerHTML.split("");
            i.innerHTML = "";
            let r = setInterval(function() {
                o.length > 0 ? (E.currentTime = .6,
                E.play(),
                i.innerHTML += o[0],
                o.splice(0, 1)) : (clearInterval(r),
                J(a[e].children[0].innerHTML, !0),
                i.innerHTML = "kies een antwoord",
                z.play(),
                n.classList.add("hidden"),
                t.classList.remove("scootUp"),
                s.classList.remove("show"),
                A = !1,
                x = a[e].children[0].innerHTML === D[x].responses[0] ? D[x].linkChapter[0] : D[x].linkChapter[1],
                Z())
            }, 75)
        }
        ;
    o.onclick = function() {
        clearInterval(_),
        r.style.display = "none",
        m.style.display = "block",
        p.style.display = "block",
        Z()
    }
    ;
    let S = e=>{
        M.style.display = "block";
        let n = e.split("");
        console.log(n);
        let t = setInterval(function() {
            n.length > 0 ? (E.currentTime = .6,
            E.play(),
            B.innerHTML += n[0],
            n.splice(0, 1)) : (clearInterval(t),
            L.style.opacity = "1")
        }, 65)
    }
      , J = (e,n)=>{
        let a = document.createTextNode(e)
          , s = document.createElement("h2")
          , i = document.createElement("div")
          , o = document.createElement("div");
        s.appendChild(a),
        i.appendChild(s),
        o.appendChild(i),
        n ? i.classList.add("textBubble__green") : i.classList.add("textBubble"),
        o.classList.add("textMessage"),
        e.length >= 31 && (i.style.margin = "5px 20px"),
        t.appendChild(o),
        o.scrollIntoView({
            behavior: "smooth"
        })
    }
      , O = (e,n)=>{
        let a = document.createElement("img");
        a.src = e,
        a.setAttribute("data-src", e),
        a.classList.add("textMessage__image");
        let s = document.createElement("div")
          , i = document.createElement("div");
        s.appendChild(a),
        i.appendChild(s),
        n ? s.classList.add("textBubble__green") : s.classList.add("textBubble"),
        i.classList.add("textMessage-image", "textMessage"),
        t.appendChild(i),
        i.scrollIntoView({
            behavior: "smooth"
        }),
        (()=>{
            w = document.getElementsByClassName("textMessage__image");
            for (let e = 0; e < w.length; e++)
                w[e].onclick = function() {
                    b.style.display = "block",
                    y.src = w[e].dataset.src
                }
        }
        )()
    }
      , Z = ()=>{
        h.innerHTML = "Aan het typen...",
        I.play().catch(function(e) {
            console.log("error: " + e)
        });
        let e = D[x].messages
          , n = 0
          , t = setInterval(function() {
            n == e.length ? (D[x].image.length > 0 && O(D[x].image, !1),
            clearInterval(t),
            h.innerHTML = "Online",
            0 !== D[x].responses.length ? ((e,n)=>{
                W = !0,
                a[0].children[0].innerHTML = e,
                a[1].children[0].innerHTML = n;
                for (var t = 0; t < a.length; t++)
                    -1 !== a[t].children[0].innerHTML.indexOf("[EINDE]") ? a[t].children[0].style.textDecoration = "underline" : a[t].children[0].style.textDecoration = "none";
                s.classList.add("show"),
                A = !0
            }
            )(D[x].responses[0], D[x].responses[1]) : (x = D[x].linkChapter[0],
            Z())) : (J(e[n], !1),
            n++)
        }, 1250)
    }
}
;
