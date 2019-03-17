window.onload = function()
{
  let buttonQuantity = 8, // кол-во кнопок
      buttonArray = [];   // для исключения повторений при нажатии кнопок


  for(let i = 0; i<buttonQuantity; i++)
  { // вывод кнопок на экран
    createButton (buttonBox); // Вставка кновки в div id="buttonBox"
    buttonArray.push(i);
  }

  let btnRow = document.querySelectorAll(".buttons"); // коллекция кнопок
  // console.log (btnRow[0].className);
  btnRow.forEach((elem,index)=>{

    let arrToRandom = buttonArray.slice(0);
    arrToRandom.splice(index,1);

    let firstRandomNum = arrToRandom.splice(randomInteger(1,arrToRandom.length-1),1),
        lastRandomNum = arrToRandom.splice(randomInteger(1,arrToRandom.length-1),1);

    let zeeroElem = pushBtn.bind(elem);
    let firstElem = pushBtn.bind(btnRow[firstRandomNum]);
    let lastElem = pushBtn.bind(btnRow[lastRandomNum]);

    elem.onclick = ()=>{
      zeeroElem();
      firstElem();
      //lastElem();

      let btnArr = [];
      for (let i = 0; i < btnRow.length; i++){
        btnRow[i].className == "buttons tag" ? btnArr.push(1) : btnArr.push(0);
      };
      if (btnArr.every((elem)=>{
        return elem == 1;
      })){
        whiteBack.removeAttribute("hidden");
        winBox ();
      }else{clickCountField.value++}
    };
  });
}


// ================== Функции ==================
function randomInteger(min, max)
{
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

// Изменение цвета объекта по нажатию
function pushBtn ()
{
  this.classList.toggle("tag");
}

// Создание счётчика
function getcounter()
{
  let count = 0;
  return function ()
  {
    return count++;
  }
}

// Создание кнопок
function createButton (context)
{
  let buttonCount = getcounter();
  let button = document.createElement('input');
  button.setAttribute('type','button');
  button.className = "buttons";
  button.id = buttonCount;
  context.appendChild(button);
}

// ================== winner Field ==================
function winBox ()
{
  let winBox = document.createElement("div");
  winBox.className = "winner";
  winBox.innerHTML = "Ну молодец, чё! Верной дорогой идёшь, товарищ.<br>Кол-во ходов: "+clickCountField.value;
  whiteBack.appendChild(winBox);
}
