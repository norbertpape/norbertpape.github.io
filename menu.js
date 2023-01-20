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
            <h2> as choreographer </h2>\
            <a href="digital.html">Digital</a>\
            <a href="o.html">O</a>\
            <a href="schwerelos.html">Schwerelos</a>\
            <a href="tollemaus.html">Die tolle Maus</a>\
            <a href="davidetjonathas.html">David et Jonathas</a>\
            <a href="21stcentury.html">The 21st Century</a>\
            <a href="iamyours.html">I am Yours</a>\
            <h2> as dancer </h2>\
            <br>\
            <a onclick="openPage("MiC", this); closeNav()">Moving in Concert</a>\
            <a onclick="openPage("TCE", this); closeNav()">To Come: extended</a>\
            <a onclick="openPage("7Pleasures", this); closeNav()">7 Pleasures</a>\
            <a onclick="openPage("FuerMich", this); closeNav()">Für mich</a>\
            <a onclick="openPage("FG", this); closeNav()">Faits et Gestes</a>\
            <a onclick="openPage("Removing", this); closeNav()">Removing</a>\
            <a onclick="openPage("MovementMaterials", this); closeNav()">Movement Materials</a>\
            <h1> Publications </h1>\
            <a onclick="openPage(""InterviewJeanLouisGeorget"", this); closeNav()">Interview by Jean‑Louis Georget</a>\
            <a onclick="openPage("DearColleaguesAndFriends", this); closeNav()">Dear colleagues and friends</a>\
            <a onclick="openPage("UsingAudioVisual", this); closeNav()">The Future of Education</a>\
      </div>\
    </div>\
    <span style="font-size:30px;color:white;cursor:pointer" onclick="openNav()">&#9776; menu</span>\
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
    <center> -- website under construction -- </center>\
');