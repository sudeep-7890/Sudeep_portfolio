let ratingstarinput = [...document.querySelectorAll('rating-star')];

ratingstarinput.map((star, index) => {
    star.addEventListener('click', () =>{
        for(let i=0; i<5; i++){
            if(i <= index){
                ratingstarinput[i].src='fill star.png';
            }else{
                ratingstarinput[i].src='no fill star.png';
            }
        }
    })
})