    
   let winner = document.querySelector('.winner');
   let chance = document.querySelector('.chance');
   let error = document.querySelector('.error');
   let players = document.querySelector('.players'); 
   let player_1 = document.querySelector('.player_1');  
   let  player_2 = document.querySelector('.player_2');  
   let submit_1 = document.querySelector('.submit_1');  
   let  submit_2 = document.querySelector('.submit_2'); 
   let player_3 = document.querySelector('.player_3');  
   let submit_3 = document.querySelector(".submit_3"); 
   let player_4 = document.querySelector(".player_4"); 
   let submit_4 = document.querySelector(".submit_4"); 
   let click = 0;
   
   submit_1.addEventListener('click',()=>{ 
       if(player_1.value - 0){
           if(player_1.value < 9){ 
             players.innerHTML = "Player 2"
            player_1.style = "display:none"; 
            submit_1.style = "display:none";
            player_2.style = "display:inline-block"; 
            submit_2.style = "display:inline-block";   
        }else{
          error.innerHTML = "please input a anumber less than 10";
        }         
       }else{ 
        error.innerHTML = "Please input a number";
       }
   }) 
   submit_2.addEventListener('click',()=>{ 
       if(player_2.value - 0){
         if(player_2.value < 9){ 
              players.innerHTML = "Player 3" ;
              player_2.style = 'display:none' ;
              submit_2.style = 'display:none'; 
              player_3.style = "display:inline-block" 
              submit_3.style = "display:inline-block"
              if(player_1.value === player_2.value){ 
                players.style = "display:none";  
                player_2.style = "display:none"; 
                submit_2.style = "display:none"; 
                player_3.style = "display:none";  
                submit_3.style = "display:none";
                winner.innerHTML = "player 2 winner";
              }
         }else{ 
          error.innerHTML = "please input a anumber less than 10";
         }
       }else{ 
        error.innerHTML = "Please input a number";
       }
   }) 
   submit_3.addEventListener('click',()=>{ 
      if(player_3.value - 0){
        if(player_3.value < 9){  
               players.innerHTML = "player 4"; 
               player_3.style = "display:none"; 
               submit_3.style = "display:none" 
               chance.style = "display:inline-block"
               player_4.style = "display:inline-block" 
               submit_4.style = "display:inline-block"
              if(player_2.value < player_3.value){ 
                players.style = "display:none"; 
                player_3.style = "display:none";  
                submit_3.style = "display:none"; 
                player_4.style = "display:none";
                submit_4.style = "display:none";  
                chance.style = "display:none";
                 winner.innerHTML = "Player 3 winner";
              }
        } else{ 
          error.innerHTML = "Please input a anumber less than 10";
        } 
      }else{ 
        error.innerHTML = "Please input a number";
      }
   })   

   submit_4.addEventListener('click',()=>{ 
          ++click
      if(player_4.value - 0){
          if(player_4.value < 9){ 
              if(click < 6){ 
                  if(player_3.value === player_4.value){ 
                      players.style = 'display:none'; 
                      player_4.style = 'display:none';  
                      submit_4.style = "display:none";  
                      chance.style = "display:none"
                      winner.innerHTML = "Player 4 winner" 
                  }
              } else{
                players.style = 'display:none'; 
                player_4.style = 'display:none';  
                submit_4.style = "display:none";  
                chance.style = "display:none";
                winner.innerHTML = "Player 1 winner"; 

              }             

          } else{ 
            error.innerHTML = "Please input a anumber less than 10"
          }
      }else{ 
        error.innerHTML = "Please input a number";
      }
   })