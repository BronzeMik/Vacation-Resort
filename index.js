//target constant element variables
const pageTitle = document.getElementById('hero-heading');
const heroBg = document.getElementById('hero-container');
const heroContent = document.getElementById('hero-content');
const attrHeader = document.getElementById('experience-header');
const attrItemOne = document.getElementById('attract-one');
const attrItemTwo = document.getElementById('attract-two');
const attrItemThree = document.getElementById('attract-three');


//load js after content is loaded to page
document.addEventListener('DOMContentLoaded', function() {
    //slide in top animation
    const slideInTop = (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('slideInTop');
            }
        }
    }

    const observer = new IntersectionObserver(slideInTop)

    
    observer.observe(pageTitle);

    //slide in bottom animation
    const slideInBottom = (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('slideInBottom');
            }
        }
    }

    const observerBottom = new IntersectionObserver(slideInBottom)

    
    observerBottom.observe(heroContent);

    //fade in animation
    const fadeIn = (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            }
        }
    }

    const observerFadeIn = new IntersectionObserver(fadeIn)

    
    observerFadeIn.observe(heroBg);
    observerFadeIn.observe(attrHeader);



    //slide in attractions animation with short delay
    const slideInItemOne = (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('slideInBottom'); 
                entry.target.classList.remove('hidden')               
            }
        }
    }

    const slideInItemTwo = (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('slideInBottomTwo'); 
                setTimeout(() => {
                    entry.target.classList.remove('hidden')
                }, 500)
                               
            }
        }
    }

    const slideInItemThree = (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('slideInBottomThree');
                setTimeout(() => {
                    entry.target.classList.remove('hidden') 
                }, 1000) 
                              
            }
        }
    }

    const observerItemOne = new IntersectionObserver(slideInItemOne);
    const observerItemTwo = new IntersectionObserver(slideInItemTwo);
    const observerItemThree = new IntersectionObserver(slideInItemThree);



    
    observerItemOne.observe(attrItemOne);
    observerItemTwo.observe(attrItemTwo);
    observerItemThree.observe(attrItemThree);
    

    
    
})
