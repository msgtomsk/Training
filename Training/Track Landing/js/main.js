var end = 0;
var end2 = 0;
var max_index = 0;
function loadjson(){
    var xmlhttp = new XMLHttpRequest();
    var data;
    xmlhttp.open("GET","/json/content.json",true);
    xmlhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            data = JSON.parse(this.responseText);
            var total ='';
            var i;
            var content;

            // first part
            content=' <div class="first_div ">\
            <div class="recruitment">\
                <div class = "wipro">\
                    <img class="circle" src="images/notification.png">\
                    <p class="para">Wipro 2017_Recruitment</p>\
                    <div class = "menu_icon">\
                        <img class = "report" src="images/graph-blue.svg" />\
                        <img class = "report menu" src= "images/menu-blue.svg">\
                    </div>\
                </div>\
                <div class ="wipro">\
                    <img class = "walk" src = "/images/walkin-grey.svg"/>\
                    <p class = "walk_in">Walk-in</p>\
                    <img class= "walk" src = "/images/num-user.svg"/>\
                    <span  class = "walk_in">7000</span>\
                    <img class= "walk" src = "/images/group-grey.svg"/>\
                    <span  class = "walk_in">08</span>\
                </div>\
                <div class = "candidate_details">\
                    <div class="candidates">\
                        <p class="logged_in">Logged-in</p>\
                        <p class="logged_in">Candidates</p>\
                        <p class= "candidates_count">{logged}</p>\
                    </div>\
                    <div class="candidates">\
                        <p class="logged_in">Completed</p>\
                        <p class="logged_in">Candidates</p>\
                        <p class= "candidates_count">{completed}</p>\
                    </div>\
                    <div class="candidates">\
                        <p class="logged_in">Live</p>\
                        <p class="logged_in">Groups</p>\
                        <p class= "candidates_count">{groups}</p>\
                    </div>\
                </div>\
                <p class = "status" style = "color:{color4}">{status}</p>\
                <div class = "status_bar">\
                    <p class="status0 {color}"></p>\
                    <p class="status0 {color1}"></p>\
                    <p class="status0 {color2}"></p>\
                </div>\
            </div>\
        </div>'

        end = data[1].length;
        if(end % 2 ==0){
            max_index = Math.floor(end/2)-1;
        }else{
            max_index = Math.floor(end/2);
        }
        var wide =end*50; 
        document.getElementById("carouselID").style.width=wide+'%';
        

        for(i = 0 ; i<end; i++){
            if(data[1][i].color == "status1"){
                total += content.replace("{logged}",data[1][i].logged).replace("{status}",data[1][i].status)
                    .replace("{completed}",data[1][i].completed).replace("{groups}",data[1][i].groups)
                    .replace("{color}","status1").replace("{color}","status1").replace("{color}","status1")
                    .replace("{color4}","#13be9e");
            }else if(data[1][i].color == "status2"){
                total += content.replace("{logged}",data[1][i].logged).replace("{status}",data[1][i].status)
                    .replace("{completed}",data[1][i].completed).replace("{groups}",data[1][i].groups)
                    .replace("{color}","status2").replace("{color1}","status2").replace("{color2}","status4")
                    .replace("{color4}","#ff9f4c").replace("{ids}",i);
            }else{
                total += content.replace("{logged}",data[1][i].logged).replace("{status}",data[1][i].status)
                    .replace("{completed}",data[1][i].completed).replace("{groups}",data[1][i].groups)
                    .replace("{color}","status3").replace("{color1}","status4").replace("{color2}","status4")
                    .replace("{color4}","").replace("{ids}",i);
            }
        }
        document.getElementById("carouselID").innerHTML=total;

            // Second part
            var content1;
            var total1="";
            content1 = '  <div class="senior" id = {ids}>\
            <div class="innerpadding">\
                <div class = "wipro">\
                    <p class="head_para">{title}</p>\
                    <div class = "menu_icon1">\
                        <img class = "report" src="images/graph-blue.svg" />\
                        <figure id = "fig{ids}" class= "popup" onclick="myFunction(myPopup{ids})"><img class = "report1"  src= "images/menu-blue.svg">\
                        <span  class="popuptext" id="myPopup{ids}">View Details<br><br>Email Assessment Link<br><br>Preview Assessment</span></figure>\
                    </div>\
                </div>\
                <div class ="wipro">\
                    <img class = "walk margin_style" src = ""/>\
                    <p class = "walk_in walkin_padding"></p>\
                </div>\
                <div class = "candidate_details">\
                        <div class="candidates_appeared">\
                            <p class="appeared_count">Candidates Appeared</p>\
                            <p class="count_date">{count}/300</p>\
                            </div>\
                        <div class="last_active">\
                            <p class="appeared_count">Last Active</p>\
                            <p class="count_date">{date}</p>\
                            </div>\
                    </div>\
                    <p class="appeared_count">Performance</p>\
                    <p class = "status_style" style = "color:{color4}">{status}</p>\
                    <div class = "status_bar">\
                        <span class="status0 {color} status11"></span>\
                        <span class="status0 {color1} status11"></span>\
                        <span class="status0 {color2} status11"></span>\
                    </div>\
                </div>\
        </div>';
        end2 = data[0].length;
        for(i = 0 ; i < end2; i++){
            if(data[0][i].color == "status1"){
                total1 += content1.replace("{title}",data[0][i].title).replace("{count}",data[0][i].count).
                replace("{date}",data[0][i].date).replace("{color4}","#13be9e").replace("{ids}",i).replace("{ids}",i)
                .replace("{status}",data[0][i].status).replace("{color}",data[0][i].color).replace("{ids}",i).
                replace("{color1}",data[0][i].color).replace("{color2}",data[0][i].color).replace("{ids}",i);
            }else if(data[0][i].color == "status2"){
                total1 += content1.replace("{title}",data[0][i].title).replace("{count}",data[0][i].count).
                replace("{date}",data[0][i].date).replace("{color4}","#ff9f4c").replace("{ids}",i).replace("{ids}",i)
                .replace("{status}",data[0][i].status).replace("{color}",data[0][i].color).replace("{ids}",i).
                replace("{color1}",data[0][i].color).replace("{color2}","status4").replace("{ids}",i);
            }else{
                total1 += content1.replace("{title}",data[0][i].title).replace("{count}",data[0][i].count).
                replace("{date}",data[0][i].date).replace("{color4}","").replace("{ids}",i).replace("{ids}",i)
                .replace("{status}",data[0][i].status).replace("{color}",data[0][i].color).replace("{ids}",i).
                replace("{color1}","status4").replace("{color2}","status4").replace("{ids}",i);
            }
        }
        document.getElementById("bodycontent").innerHTML = total1;
        removeheight();
    }
}
    xmlhttp.send();
}

var count=0,c=0,s = 0;
function removeheight(){
    if(count == 0){
        for(i = 6 ; i < end2 ; i++ ){
            document.getElementById(i).style.cssText = 'display: none';
        }
        count = 1;
        document.getElementById("showmore").innerHTML = '<u class = "show_more"  onClick="removeheight()">SHOW MORE</u>';
        if(s > 0){
            pageScrollUp();
        }
        s++;        
    }else{
        pageScroll();
        for(i = 6 ; i < end2 ; i++ ){
            document.getElementById(i).style.cssText = 'display: visible;';
        }
        document.getElementById("showmore").innerHTML = '<u class = "show_more"  onClick="removeheight()">SHOW LESS</u>';
         count = 0;       
        //  window.scrollBy({ 
        //      top: 5000, // could be negative value
        //     left: 0, 
        //     behavior: 'smooth' 
        //   });   
    }
   
}

function pageScroll() {
    c++;
    window.scrollBy(0,40);
    scrolldelay = setTimeout('pageScroll()',30); 
    if(c == 10){
        clearTimeout(scrolldelay);
        c = 0;
    }
}
var c1 = 0;
function pageScrollUp() {
    c1++;
    window.scrollBy(0,-40);
    scrolldelay1 = setTimeout('pageScrollUp()',30);
    if(c1 == 10){
        c1 = 0;
        clearTimeout(scrolldelay1);
    }
}

var tog=0;
var toogleid;
function myFunction(ids) {
    toogleid = ids;
    if(tog != 0 && tog != document.getElementById(ids.id)){
        tog.classList.toggle("show");
    }
    var popup = document.getElementById(ids.id);
    popup.classList.toggle("show");
    tooglecheck = popup;
    if(tog === popup){
        tog = 0;
    }else{
        tog = popup;
    }
}

window.addEventListener('click', function(e){  
    for(var i = 0 ; i < end2 ; i++){ 
        if (document.getElementById('fig'+i).contains(e.target)){
            //console.log("in");
        } else{
                var li = document.getElementById("myPopup"+i);
                if(li.className[10] === 's'){
                    li.classList.toggle("show");
                    tog = 0;
                    break;
                }
            }
    }
});

window.onscroll = function() {myHeader()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;
            
function myHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function activeFunction(){
    var nav = document.getElementById("list");
    var btns = nav.getElementsByClassName("inactive");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
    
    
    // for(var i = 1 ; i < 5 ; i ++){
    //      if("list"+i != list){
    //          console.log(i);
    //          document.getElementById("list"+i).style.cssText='color:#ffffff; background-color: inherit';
    //      }
        
    // }
}

// var temp = 2;
// var start = 0;
// function Scrollright(){
//     console.log("right" +temp +start);
//     document.getElementById("container"+start).style.cssText = 'display: none';
//     document.getElementById("container"+temp).style.cssText = 'display: visible';
//     temp++;
//     start++;
//     if(start >= end){
//         start = 0;
//     }
//     if(temp >= end){
//         temp = 0;
//     }
// }

// function Scrollleft(){
//     console.log("left"+temp+start+end);
//     document.getElementById("container"+start).style.cssText = 'display: none';
//     document.getElementById("container"+temp).style.cssText = 'display: visible';
//     start--;
//     temp--;
//     if(start < 0){
//         start = end-1;
//     }
//     if(temp < 0){
//         temp = end-1;
//     }
// }




var current_index = 0;

$(document).ready(function() {
   var min_index = 0;
   
   function slideLeft() {
    if(current_index <= min_index){
      return
    }
    else{ 
      current_index -= 1;
      console.log(current_index);
      setHeight1();
      var slideValue = -960 * current_index
      var slideString = String(slideValue)
      document.getElementById("carouselID").style.transform = "translateX(" + slideString + "px)"
    }
   }
   

   function slideRight() {
    if(current_index >= max_index){
      return
    }
    else{
      current_index += 1;
      console.log(current_index);
      setHeight2();
      var slideValue = -960 * current_index
      var slideString = String(slideValue)
      document.getElementById("carouselID").style.transform = "translateX(" + slideString + "px)";
      
    }
   }
   
   document.getElementById("left_arrow1").onclick = slideLeft
    document.getElementById("right_arrow1").onclick = slideRight
   })

   function setHeight1(){
       
    if(current_index <= max_index){
        document.getElementById('right_arrow1').style.cssText='background-color:#177ac1;\
        border: 1px solid #177ac1';
        document.getElementById('right_arrow1').src='images/right-chevron-white.svg';
      }
      if(current_index == 0){
        document.getElementById('left_arrow1').style.cssText='background-color:#ffffff;\
        border: 1px solid #ffffff';
        document.getElementById('left_arrow1').src='images/left-chevron.svg';
      }
   }

   function setHeight2(){
    if(current_index > 0){
        document.getElementById('left_arrow1').style.cssText='background-color:#177ac1;\
        border: 1px solid #177ac1';
        document.getElementById('left_arrow1').src='images/left-chevron-white.svg';
      }
      if(current_index == max_index){
        document.getElementById('right_arrow1').style.cssText='background-color:#ffffff;\
        border: 1px solid #ffffff';
        document.getElementById('right_arrow1').src='images/right-chevron.svg';
      }
      
   }
   