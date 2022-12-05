document.addEventListener("DOMContentLoaded", function(){
    fetchPictures();
});

function fetchPictures(){
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => renderPicture(data))
}

function renderPicture(pictures){
    let ramenDiv = document.querySelector("#ramen-menu");
    pictures.forEach(picture => {
       const img = document.createElement("img");
       img.setAttribute("src", picture.image);
       img.setAttribute("id", picture.id)
       ramenDiv.appendChild(img);
       img.addEventListener("click", function(){
        const pic = document.getElementById("imgPick")
        pic.setAttribute("src", picture.image)
        document.querySelector(".name").textContent = picture.name;
        document.querySelector(".restaurant").textContent = picture.restaurant;
        document.querySelector("#rating-display").textContent = picture.rating;
        document.querySelector("#comment-display").textContent = picture.comment;
       })
    });
}

let input = document.querySelector("#new-ramen")
input.addEventListener("submit",function(e){
    e.preventDefault();
    let details = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target.new_comment.value
    }

    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(details)
    });

    //  console.log(details);
})



