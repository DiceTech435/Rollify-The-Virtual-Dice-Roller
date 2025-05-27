    //ROLL DICE PROGRAM
    function rollDice(){
        const numOfDice = document.getElementById("numOfDice").value;
        const diceResult = document.getElementById("diceResult");
        const diceImages = document.getElementById("diceImages");
        const values = [];
        const images = [];
    
        for(let i = 0; i < numOfDice; i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
    
            if(value == 1 || value == 6){
           images.push(`<img src = "images/${value}.png" alt="Dice ${value}">`);
            }
            else if (value == 3 || value == 4 || value == 5){
           images.push(`<img src = "images/${value}.jpeg">`);
            }
            else{
           images.push(`<img src = "images/${value}.jpg">`);
    
            }
                   
        }
        diceResult.textContent = `dice: ${values.join(', ')}`;
        diceImages.innerHTML = images.join('');
    }
    