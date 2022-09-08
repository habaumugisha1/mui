console.log("first!!!")
const linkCont = document.querySelectorAll(".ul-side li");
const content = document.querySelectorAll(".content");
// console.log(linkCont)

linkCont.forEach(link=>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        document.querySelector("li.active").classList.remove("active");
        document.querySelector("div.active").classList.remove("active");

        const parentEl = link.parentElement;
        const clickedLink = e.target
        console.log(parentEl)
        clickedLink.classList.add("active");
        const index = [...parentEl.children].indexOf(clickedLink);
        console.log([...parentEl.children])
        console.log(index)
        console.log([...content])
        const conte = [...content].filter(elem =>elem.getAttribute("data-index")==index);
        conte[0].classList.add("active");
        // console.log(conte)
    })
})