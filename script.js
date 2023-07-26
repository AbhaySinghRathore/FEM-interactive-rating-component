let rate=null;

const rating_buttons=document.querySelectorAll(".rating-buttons")
rating_buttons.forEach((rating_button)=>{
    rating_button.addEventListener('click',(e)=>{

        const active=document.querySelector('.rating-button-selected');
        if(active){
            active.classList.remove('rating-button-selected')
        }
        e.target.classList.add("rating-button-selected")
        rate=e.target.innerText;
        console.log(rate);
        
    })
})

const submit_btn=document.getElementById("submit");
submit_btn.onclick=(e)=>{
    if(rate){
        const container=document.getElementById("container");
        container.innerHTML=`<img src="./images/illustration-thank-you.svg" alt="" class="thank-you-image">

        <div class="selected-rating">
          You selected <span id="selected-btn">${rate}</span> out of 5
        </div>
    
        <h2 class="thank-you-heading">
          Thank you!
        </h2>
    
        <p class="thank-you-description">
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>`
    }
    else{
        alert("Please select rating!")
    }
}