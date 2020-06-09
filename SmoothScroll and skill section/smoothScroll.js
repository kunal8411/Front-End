//smooth scroll effect 

var anchortags= document.querySelectorAll('.nav-menu a');
var interval;

for(var i=0;i<anchortags.length;i++){
    anchortags[i].addEventListener('click', function(event){
        event.preventDefault();
        
      var sectionId=this.textContent.trim().toLowerCase();
        var targetsection=document.getElementById(sectionId);

        var interval=setInterval(function(){
                var targetcordinates=targetsection.getBoundingClientRect();
                if(targetcordinates.top<=0){
                    clearInterval(interval);
                    return;


                }
                window.scrollBy(0,50);
        },20)

      

    })
}


//skill bar effect 

var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;
window.addEventListener('scroll', checkScroll);

function initializebars(){
    for(let bar of progressBars){
        bar.style.width=0+ '%';
    }
}
initializebars();

function fillBars(){
    for(let bar of progressBars){
        
        let currentWidth=0;
        let ineterval= setInterval(function(){
            let targetWidth=bar.getAttribute('data-bar-width');
                if(currentWidth>=targetWidth){
                    clearInterval(interval);
                    return;
                }
                currentWidth++;
                bar.style.width=currentWidth+ '%';
        },5)
    }
}



function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        //start Animation
        animationDone=true;
        
        fillBars();

      
    }else if(coordinates.top > window.innerHeight){
        animationDone=false;
        initializebars();
    }
}
