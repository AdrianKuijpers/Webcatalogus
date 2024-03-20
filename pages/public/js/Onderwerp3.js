fetch("/api/onderwerpen")
.then(myData3 => myData3.json())
.then(textData3 => showCards3(textData3));


fetch("/api/onderwerp1")
.then(myData1 => myData1.json())
.then(textData1 => showCards1(textData1));

fetch("/api/onderwerp2")
.then(myData2 => myData2.json())
.then(textData2 => showCards2(textData2));

fetch("/api/onderwerp3")
.then(myData => myData.json())
.then(textData => showCards(textData));


function showCards(data) {
    const cards = data;
    cardsContainer = document.querySelector(".onderwerpenContainer");
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] 
      cardsContainer.innerHTML += `
        <div class="ond${i} ond">
            <img class = "ond-IMG" src="${card.img}" alt=""></img>
        <h2>${card.title}</h2>
          <p>
           ${card.description}
            <a href="onderwerp3_Sub${i}.html"><button class="ondBtn">
              button
            </button></a>
          </p>
        </div>
        ` 
        }     
    };

    
function showCards1(data1) {
  const cards = data1;
  cardsContainer1 = document.querySelector(".onderwerpenContainer1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i] 
    cardsContainer1.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="onderwerp1_Sub${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      ` 
      }     
  };

  function showCards2(data2) {
    const cards = data2;
    cardsContainer2 = document.querySelector(".onderwerpenContainer2");
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] 
      cardsContainer2.innerHTML += `
        <div class="ond${i} ond">
            <img class = "ond-IMG" src="${card.img}" alt=""></img>
        <h2>${card.title}</h2>
          <p>
           ${card.description}
            <a href="onderwerp2_Sub${i}.html"><button class="ondBtn">
              button
            </button></a>
          </p>
        </div>
        ` 
        }     
    };

    function showCards3(data3) {
      const cards = data3;
      cardsContainer3 = document.querySelector(".onderwerpenContainer3");
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] 
        cardsContainer3.innerHTML += `
          <div class="ond${i} ond">
              <img class = "ond-IMG" src="${card.img}" alt=""></img>
          <h2>${card.title}</h2>
            <p>
             ${card.description}
              <a href="Onderwerp${i}.html"><button class="ondBtn">
                button
              </button></a>
            </p>
          </div>
          ` 
          }     
      };