console.log("hello");
let buttons = document.querySelectorAll('button')
let questionDivs = document.querySelectorAll("article")
let removal= document.querySelectorAll(".removal")
console.log(Array.from(removal[0].classList).includes("answer"))
console.log(buttons[1])

buttons.forEach((item)=>{
    item.onclick=()=>{
        item.parentElement.nextElementSibling.classList.toggle('answers')
        item.parentElement.nextElementSibling.classList.toggle('clear')
        item.children[0].classList.toggle('fa-plus')
        item.children[0].classList.toggle('fa-minus')

           if(item.id=="question_1"){
                removal[1].classList.remove("answers")
                removal[2].classList.remove("answers")
                removal[1].classList.add("clear")
                removal[2].classList.add("clear")
                buttons[1].children[0].className="fa-solid fa-plus"
                buttons[2].children[0].className="fa-solid fa-plus"
            }
            if(item.id=="question_2"){
                removal[0].classList.remove("answers")
                removal[2].classList.remove("answers")
                removal[0].classList.add('clear')
                removal[2].classList.add('clear')
                buttons[0].children[0].className="fa-solid fa-plus"
                buttons[2].children[0].className="fa-solid fa-plus"
            }
            if(item.id=="question_3"){
                removal[0].classList.remove("answers")
                removal[1].classList.remove("answers")
                removal[0].classList.add('clear')
                removal[1].classList.add('clear')
                buttons[0].children[0].className="fa-solid fa-plus"
                buttons[1].children[0].className="fa-solid fa-plus"
            }

    }
})

