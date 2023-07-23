document.write('<div id="myNav" class="overlay">\
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
      <div class="overlay-content">\
        <a href="index.html">Home</a>\
        <a href="news.html">News</a>\
        <a onclick="openNav2();closeNav()">Archive</a>\
        <a href="about.html">About</a>\
        <a href="contact.html">Contact</a>\
      </div>\
    </div>\
    <div id="myNav2" class="overlay">\
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav2()">&times;</a>\
      <div class="overlay-content">\
            
            <h1> Selected works </h1>\
            <h2> &#8210; currently &#8210; </h2>\
            <a href="jacki.html">Grasping the Jacki Liebezeit Set</a>\
            <h2> &#8210; as choreographer &#8210; </h2>\
            <a href="digital.html">Digit(al) - on touching Clouds</a>\
            <a href="O2.html">O &#35;2</a>\
            <a href="O.html">O</a>\
            <a href="tollemaus.html">Die tolle Maus</a>\
            <a href="davidetjonathas.html">David et Jonathas</a>\
            <a href="21stcentury.html">The 21st Century</a>\
            <a href="iamyours.html">I am Yours</a>\
            <h2> &#8210; as dancer &#8210; </h2>\
            <a href="https://www.metteingvartsen.net/performance/moving-in-concert/">Moving in Concert</a>\
            <a href="https://www.metteingvartsen.net/performance/to-come-extended/">to come (extended)</a>\
            <a href="https://www.metteingvartsen.net/performance/performance-1/">7 Pleasures</a>\
            <a href="https://www.antjepfundtner.de/fuer-mich-2018/">Für Mich</a>\
            <a href="https://www.numeridanse.tv/videotheque-danse/faits-et-gestes">Faits et Gestes</a>\
            <a href="https://www.numeridanse.tv/en/dance-videotheque/removing">Removing</a>\
            <a href="https://www.fondationlouisvuitton.fr/en/events/noe-soulier-movement-materials">Movement Materials</a>\
            <h2> &#8210; publications &#8210; </h2>\
            <a href="/images/interview.pdf">Interview by Jean‑Louis Georget</a>\
            <a href="/images/colleagues.pdf">Dear colleagues and friends</a>\
            <a href="/images/foe.pdf">The Future of Education</a>\
      </div>\
    </div>\
    <span style="font-size:30px;color:white;cursor:pointer;z-index:99" onclick="openNav()">&#9776; menu</span>\
    <script>\
            function openNav() {\
              document.getElementById("myNav").style.width = "100%";\
            }\
            function closeNav() {\
              document.getElementById("myNav").style.width = "0%";\
            }        \
            function openNav2() {\
              document.getElementById("myNav2").style.width = "100%";\
            }\
            function closeNav2() {\
              document.getElementById("myNav2").style.width = "0%";\
            }\
            function openPage(pageName,elmnt) {\
            var tabcontent;\
            tabcontent = document.getElementsByClassName("tabcontent");\
            for (var i = 0; i < tabcontent.length; i++) {\
            tabcontent[i].style.display = "none";\
            }\
            document.getElementById(pageName).style.display = "block";\
            elmnt.style.backgroundColor = "";\
        }\
        </script>\
');

//  <a href="schwerelos.html">Schwerelos</a>\