var uditNarayan= ["Pal Pal Soch Mein Aana Na","Tujhko na Dekhun Toh","Pyar ki Kashti Mein"]

var abhijeet = ["Tumhe Jo Maine Dekha","Pyar Ke Kagaz Pe Dil Ki Kalam","Badi Mushkil Hai Khoya Mera Dil Hai","Hum Nahin Tere Dushmano Mein","Ole Ole"]

//SELECTING THE ELEMENT BUTTON FOR PLAYLIST
let playListBtn = document.querySelector(".check")

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
    abhijeetList.textContent = "ABHIJEET BHATTACHARYA :";
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


    //4. CREATING ELEMENT UL FOR SONU NIGAM


    
        
        
 
    
})


   
   

                