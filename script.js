const getPasswordFromInput = () =>{
    let input = document.querySelector('input')
    return input.value
}

getPasswordFromInput();

let password = document.querySelector('.output')
let percent = document.querySelector('.hard-percent')
let colorBlock = document.querySelector(".color-block")
let comment = document.querySelector(".comment")

const showPassword = () =>{
    password.textContent = 'Your password: '+ getPasswordFromInput()
}

function checkPassword(){

    showPassword()

    if(password != ''){
        let score = 0
        if(/[A-Z]/.test(password)){
            score++
        }
        else if(/[0-9]/.test(password)){
            score++
        }
        else if(/\W/.test(password)){
            score+=1
        }
        else if(password.length > 8){
            score+=1
        }
        switch(score){
            case 0:
            case 1:
                percent.textContent = '25%';
                colorBlock.style.backgroundColor = '#FF0000'
                comment.textContent = "Your password is too simple"
                break;
            case 2:
                percent.textContent = '50%';
                colorBlock.style.backgroundColor = '#FFB300'
                comment.textContent = "Your password is simple"
                break;
            case 3:
                percent.textContent = '75%';
                colorBlock.style.backgroundColor = '#FFD717'
                comment.textContent= "Your password is normal"
                break;
            case 4:
                percent.textContent= '100%';
                colorBlock.style.backgroundColor = '#7EEF3C'
                comment.textContent = "Your password is strong"
                break;
        }
    }
}