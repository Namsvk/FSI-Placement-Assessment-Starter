var uditNarayan= ["Pal Pal Soch Mein Aana Na","Tujhko na Dekhun Toh","Pyar ki Kashti Mein"]

var abhijeet = ["Tumhe Jo Maine Dekha","Pyar Ke Kagaz Pe Dil Ki Kalam","Badi Mushkil Hai Khoya Mera Dil Hai","Hum Nahin Tere Dushmano Mein","Ole Ole"]

var kumarSanu = ["Is Tarah Ashique ka","Mera Chand Mujhe Aaya Nazar","Jab se Mein Tujhse Mila Hoon",
"Humko Tumse Pyar Hai","Kitna Pyar Tumhe Karte Hai","Pucho Zara Pucho","Kitni Kasrat Hai Humein","Mere Khwaabon Mein Tu","Dil Deewana Dhoondta Hai"]

var sonuNigam = ["Jal Jal Ke Dhuan","Ishq Hai Kya","Dard","Chain Ho Chain Ho Mere Dil Ka","Apnaa Mujhe Tu Lagaa","Dil Mein Jo Baat"]

var arijitSingh = ["Khairiyat","Jeene Bhi De","Aa Raat Bhar","Tu Har Lamha","Baatein ye Kabhi Na","Suno Na Sangemarmar",
"Chahun Main Ya Na","Mera Pyar Tera Pyar","Hai Dil Ye Mera"]

var bennyDayal =["Aadat se Majboor"]

var babulSupriyo = ["Mai ishq Uska"]

var armanMalik = ["Dil me Ho Tum","Mujhko Barsaat Bana Lo"]

var sayeedQuadri = ["Lambi Judaai"]

var adnanSami = ["Bheegi Bheegi Raaton Mein"]

var jubinNautiyal = ["Tum hi Aana","Humnava Mere","Baarsaat Ki Dhun","Lut Gaye",]

var tauseef = ["Chand Taare Phool Shabnam"]

var kk = ["Abhi Abhi Tho Mile Ho","Labon Ko","Dil Ibadat"]

var funnySongs = ["Stop That","Loveria","Kusu Kusu","Sharara Sharara","Ek Do Teen Male","Ranu Ranu Telugu","Tu Isaq Mera","Taiyabali Pyar Ka Dushman","Bade Kaam Ka Bandar","Mere Angne Mein Tumhara Kya Kaam Hai","Oo Antava","Daiya Daiya Re","Laila Mein Laila","Yamma Yamma",
"Romeo Naam Mera","Aadat Se Majboor","Batamiz Dil","Dus Bahane"]

var vinodRathor =["Romeo Naam Mera"]

var oldSongs =["Neele Neele Ambar Par","O mere Dil ki Chain","Masti Bhara hai Sama","Meri Mehboob Khayamat Hogi"]




var uploadedTracks = ["Aila re Aila Sooryavanshi MMB","Medley Mujhse Dosti Karoge MMB","Kishore Kumar Medley MMB","Tere Bina MMB","Ladki Pataya MMB",
"Raatan Lambiyan MMB","hum Rahe Ya Na Rahe Indian Idol MMB","Jubin Nautiyal Medley MMB","Urvashi Urvashi MMB","Aap Ki Khatir MMB","M Bole Toh MBBS MMB","Khairiyat MMB","Kumar Sanu Medley MMB",
"Mr India Parody MMB","Woh Teri Yaadein Woh Teri Baatein MMB","Saagar Jaisi Aankho Waali-UNWIND","Tumse Bhi Zyada","Dil Lootne Wale Jadugar - Suhane Pal","Dilbar Mere - The Unwind Mix",
"Pyar Manga Hai Tumhi Se - The Unwind Mix","MASTI BHARA HAI SAMA - SUHANE PAL","DIL KYA KARE - THE UNWIND MIX","The Unwind Mix Mashup-1","Saaton Janam Tujhko Paate","Jaan Hai Meri HD - Radhe Shyam","Nacho Nacho HD - RRR","Hawaon Ne Yeh Kaha HD",
"Madiney Diyaan Pak Galiyaan - IMRAN ABBAS","Ya Muhammad Noor E Mujassam - IMRAN ABBAS"]

var ownTracks =["Oo Bolega male version - Pushpa","Why this Makkikirkiri - Kolavari Di","Khairiyat Pucho - GF ko Looto","Kabhi KHushi Kabhie Gham - SM Guests Song",
"Phir Bhi Dil Hai Hindustani - SM Admins Song","Zara Zara Bhooki GF","THE KHUJLI SONG","Srivalli Bhooki","SM PER LUTGAYE - SONG ON BIG LEVEL ID'S",
"My Haleema is My ATM","PATI-PATNI AUR WFH","CHAAT LOVERS SONG CLEAR","BOHATH KUCH HOTA HAI","BOX LUTERA-GIFTER SONG","DP KA DHOKA","BAKK BAKK GF","BROADCASTER CRUSH","SONG ON SM WIFE'S","GHAR DAMAAD - Aaj Kal Tere Mere Pyar","SHAADI KA KHAANA - Roop Tera Mastana",
"FAIRNESS CREAM - Chup Gaye Sare Nazare","GIFTER JI GIFTER JIJAANA NAHI - PARDESI PARDESI JAANA NAHI","UDHAAR MAANGNE WAALA DOST - Pyar Maanga Hai Tumhi se","SAR MAI JUAN HONGE - Jab Hum Jawan Honge"]


//SELECTING THE ELEMENT BUTTON FOR PLAYLIST
let playListBtn = document.querySelector(".check")
//SELECTING THE ELEMENT BUTTON FOR UPLOADED TRACKS
let uploadedTracksBtn = document.querySelector(".uploaded")
//SELECTING THE ELEMENT BUTTON FOR LYRICIST SONGS
let ownTracksBtn = document.querySelector(".ownLyrics")
//SELECTING THE ELEMENT BUTTON FOR FUN SONGS
let funBtn = document.querySelector(".fun")
// SELECTING THE ELEMENT BUTTON FOR OLD SONGS
let oldBtn = document.querySelector(".old")



// CLICK EVENT ON UPLOADED TRACKS BUTTON
uploadedTracksBtn.addEventListener('click', function(){

    //SELECTING ELEMENT h2 TO DISPLAY THE BUTTON SELECTED
    let typeOfCat = document.getElementById("typeOfBtn");
    typeOfCat.textContent ="UPLOADED TRACKS";

    //SELECTING THE ELEMENT LEFTDIV & RIGHTDIV
    let leftDiv = document.getElementById("leftDiv")
    let rightDiv = document.getElementById("rightDiv")
    leftDiv.textContent="";
    rightDiv.textContent="";

    //1.CREATING ELEMENT OL FOR UPLOADED TRACKS
    let uploadedTracksList = document.createElement("ol");
    uploadedTracksList.textContent = " ";
            uploadedTracks.forEach((item)=>{
                let li=document.createElement("li");
                li.innerText= item;
                uploadedTracksList.appendChild(li);
            }) 
    //APPENDING OL TO LEFT DIV        
    leftDiv.append(uploadedTracksList);


} )

// CLICK EVENT ON LYRICIST SONGS
ownTracksBtn.addEventListener('click', function(){

    //SELECTING ELEMENT h2 TO DISPLAY THE BUTTON SELECTED
    let typeOfCat = document.getElementById("typeOfBtn");
    typeOfCat.textContent ="MY LYRICS SONGS";

    //SELECTING THE ELEMENT LEFTDIV & RIGHTDIV
    let leftDiv = document.getElementById("leftDiv")
    let rightDiv = document.getElementById("rightDiv")
    leftDiv.textContent="";
    rightDiv.textContent="";

    //1.CREATING ELEMENT OL FOR UPLOADED TRACKS
    let ownTracksList = document.createElement("ol");
    ownTracksList.textContent = "";
            ownTracks.forEach((item)=>{
                let li=document.createElement("li");
                li.innerText= item;
                ownTracksList.appendChild(li);
            }) 
    //APPENDING OL TO LEFT DIV        
    leftDiv.append(ownTracksList);


} )

// CLICK EVENT ON FUN SONGS
funBtn.addEventListener('click', function(){

    //SELECTING ELEMENT h2 TO DISPLAY THE BUTTON SELECTED
    let typeOfCat = document.getElementById("typeOfBtn");
    typeOfCat.textContent ="FUN & ENTERTAINING SONGS";

    //SELECTING THE ELEMENT LEFTDIV & RIGHTDIV
    let leftDiv = document.getElementById("leftDiv")
    let rightDiv = document.getElementById("rightDiv")
    leftDiv.textContent="";
    rightDiv.textContent="";

        // CREATING ELEMENT UL FOR FUNNY SONGS
        let funnySongsList = document.createElement("ul");
            funnySongs.forEach((item)=>{
                let li=document.createElement("li");
                li.innerText= item;
                funnySongsList.appendChild(li);
            }) 
        //APPENDING UL TO RIGHT DIV        
        leftDiv.append(funnySongsList);

    


} )

// CLICK EVENT ON OLD SONGS
oldBtn.addEventListener('click', function(){

    //SELECTING ELEMENT h2 TO DISPLAY THE BUTTON SELECTED
    let typeOfCat = document.getElementById("typeOfBtn");
    typeOfCat.textContent ="OLD SONGS";

    //SELECTING THE ELEMENT LEFTDIV & RIGHTDIV
    let leftDiv = document.getElementById("leftDiv")
    let rightDiv = document.getElementById("rightDiv")
    leftDiv.textContent="";
    rightDiv.textContent="";

        // CREATING ELEMENT UL FOR OLD SONGS
        let oldSongsList = document.createElement("ul");
            oldSongs.forEach((item)=>{
                let li=document.createElement("li");
                li.innerText= item;
                oldSongsList.appendChild(li);
            }) 
        //APPENDING UL TO RIGHT DIV        
        leftDiv.append(oldSongsList);

    


} )



// CLICK EVENT ON PLAYLIST BUTTON
playListBtn.addEventListener('click' , function(){

    //SELECTING ELEMENT h2 TO DISPLAY THE BUTTON SELECTED
    let typeOfCat = document.getElementById("typeOfBtn");
    typeOfCat.textContent ="Playlist";
    
    //SELECTING THE ELEMENT LEFTDIV & RIGHTDIV
    let leftDiv = document.getElementById("leftDiv")
    let rightDiv = document.getElementById("rightDiv")
    leftDiv.textContent="";
    rightDiv.textContent="";

    //1.CREATING ELEMENT UL FOR UDIT NARAYAN
    let uditList = document.createElement("ul");
    uditList.textContent = "UDIT NARAYAN : ";
            uditNarayan.forEach((item)=>{
                let li=document.createElement("li");
                li.innerText= item;
                uditList.appendChild(li);
            }) 
    //APPENDING UL TO LEFT DIV        
    leftDiv.append(uditList);

    //2. CREATING ELEMENT UL FOR ABHIJEET BHATTACHARYA        
    let abhijeetList = document.createElement("ul");
    abhijeetList.textContent = "ABHIJEET BHATTACHARYA:";
            abhijeet.forEach((item)=>{
                console.log("abhijeet begin")
                let li= document.createElement("li");
                li.innerText= item;
                abhijeetList.appendChild(li);
                console.log("abhijeet append")
            })
            console.log("abhijeet out")
    //APPENDING UL TO LEFT DIV        
    leftDiv.append(abhijeetList);

    //3. CREATING ELEMENT UL FOR KUMAR SANU
    let kumarSanuList = document.createElement("ul");
    kumarSanuList.textContent = "KUMAR SANU : ";
        kumarSanu.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            kumarSanuList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    leftDiv.append(kumarSanuList);

    //4. CREATING ELEMENT UL FOR SONU NIGAM
    let sonuNigamList = document.createElement("ul");
    sonuNigamList.textContent = "SONU NIGAM : ";
        sonuNigam.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            sonuNigamList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    leftDiv.append(sonuNigamList);

    //5. CREATING ELEMENT UL FOR ARIJIT SINGH
    let arijitSinghList = document.createElement("ul");
    arijitSinghList.textContent = "ARIJIT SINGH : ";
        arijitSingh.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            arijitSinghList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    leftDiv.append(arijitSinghList);

    //6. CREATING ELEMENT UL FOR JUBIN NAUTIYAL
    let jubinNautiyalList = document.createElement("ul");
    jubinNautiyalList.textContent = "JUBIN NAUTIYAL : ";
        jubinNautiyal.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            jubinNautiyalList.appendChild(li);
        }) 
    //APPENDING UL TO RIGHT DIV        
    rightDiv.append(jubinNautiyalList);

    //7. CREATING ELEMENT UL FOR ARMAN MALIK
    let armanMalikList = document.createElement("ul");
    armanMalikList.textContent = "ARMAN MALIK : ";
        armanMalik.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            armanMalikList.appendChild(li);
        }) 
    //APPENDING UL TO RIGHT DIV        
    rightDiv.append(armanMalikList);

    //8. CREATING ELEMENT UL FOR BENNY DAYAL
    let bennyDayalList = document.createElement("ul");
    bennyDayalList.textContent = "BENNY DAYAL : ";
        bennyDayal.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            bennyDayalList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    rightDiv.append(bennyDayalList);

    //9. CREATING ELEMENT UL FOR BABUL SUPRIYO
    let babulSupriyoList = document.createElement("ul");
    babulSupriyoList.textContent = "BABUL SUPRIYO : ";
        babulSupriyo.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            babulSupriyoList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    rightDiv.append(babulSupriyoList);
    

    //10. CREATING ELEMENT UL FOR SAYEED QUADRI
    let sayeedQuadriList = document.createElement("ul");
    sayeedQuadriList.textContent = "SAYEED QUADRI : ";
        sayeedQuadri.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            sayeedQuadriList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    rightDiv.append(sayeedQuadriList);

    //11. CREATING ELEMENT UL FOR ADNAN SAMI
    let adnanSamiList = document.createElement("ul");
    adnanSamiList.textContent = "ADNAN SAMI: ";
        adnanSami.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            adnanSamiList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    rightDiv.append(adnanSamiList);

    //12. CREATING ELEMENT UL FOR TAUSEEF
    let tauseefList = document.createElement("ul");
    tauseefList.textContent = "TAUSEEF: ";
        tauseef.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            tauseefList.appendChild(li);
        }) 
    //APPENDING UL TO LEFT DIV        
    rightDiv.append(tauseefList);

    //13. CREATING ELEMENT UL FOR KK
    let kkList = document.createElement("ul");
    kkList.textContent = "KK : ";
        kk.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            kkList.appendChild(li);
        }) 
    //APPENDING UL TO RIGHT DIV        
    rightDiv.append(kkList);

    //14. CREATING ELEMENT UL FOR VINOD RATHOR
    let vinodRathorList = document.createElement("ul");
    vinodRathorList.textContent = "VINOD RATHOR : ";
        vinodRathor.forEach((item)=>{
            let li=document.createElement("li");
            li.innerText= item;
            vinodRathorList.appendChild(li);
        }) 
    //APPENDING UL TO RIGHT DIV        
    rightDiv.append(vinodRathorList);


        
        
 
    
})


   
   

                