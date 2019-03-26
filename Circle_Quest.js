window.onload = function()
{
  let buttonQuantity = 9; // кол-во кнопок
  let buttonsHalf = Math.sqrt(buttonQuantity);
  let buttonArray = [];   // для исключения повторений при нажатии кнопок
  let clickCountField = 0;

// ++++++++++++++++++++ вроде работает ++++++++++++++++++++
  // приведение элемент buttonBox к квадратуному состоянию
  let sizeDifference = buttonBox.offsetWidth - buttonBox.offsetHeight;
  while(sizeDifference%4 != 0)
  {
    sizeDifference--;
  }

  let sizeDiffHalf = sizeDifference/2;

  buttonBox.style.width = buttonBox.offsetWidth-sizeDifference+"px";
  buttonBox.style.left = buttonBox.offsetLeft+sizeDiffHalf+"px";

// ++++++++++++++++++++ вроде работает ++++++++++++++++++++

  for(let i = 0; i<buttonQuantity; i++)
  { // вывод кнопок на экран
    createButton (buttonBox,buttonsHalf); // Вставка кновки в div id="buttonBox"
    buttonArray.push(i);
  }

  let btnRow = document.querySelectorAll(".buttons"); // коллекция кнопок

  btnRow.forEach((elem,index)=>{

    let arrToRandom = buttonArray.slice(0);
    arrToRandom.splice(index,1);  // клонирование массива index

    let firstRandomNum = arrToRandom.splice(randomInteger(1,arrToRandom.length-1),1),
        lastRandomNum  = arrToRandom.splice(randomInteger(1,arrToRandom.length-1),1);

    let zeeroElem = pushBtn.bind(elem);
    elem.classList.toggle("tag");
    let firstElem = pushBtn.bind(btnRow[firstRandomNum]);
    btnRow[firstRandomNum].classList.toggle("tag");
    let lastElem  = pushBtn.bind(btnRow[lastRandomNum]);
    btnRow[lastRandomNum].classList.toggle("tag");

    elem.onclick = ()=>{
      zeeroElem();
      firstElem();
      lastElem();
      // --- проверка - все ли кнопки нажаты ---
      let btnArr = [];
      for (let i = 0; i < btnRow.length; i++){
        btnRow[i].className == "buttons tag" ? btnArr.push(1) : btnArr.push(0);
      };
      if (btnArr.every((elem)=>{
        return elem == 1;
      })){
        whiteBack.removeAttribute("hidden");
        winBox (clickCountField);
        buttonBox.setAttribute("hidden","true")
      }else{clickCountField++}
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
function createButton (context,row)
{
  let sizeSum = document.documentElement.clientWidth-document.documentElement.clientHeight;

  let buttonCount = getcounter();
  let button = document.createElement('input');
  button.setAttribute('type','button');
  button.className = "buttons tag";
  button.id = buttonCount;
  // let halfButtons = Math.sqrt(buttonQuantity); Эта хуета пока не понадобилась
  button.style.width = buttonBox.offsetWidth/row-row+"px";
  button.style.height = button.style.width;
  // if (document.documentElement.clientWidth < document.documentElement.clientHeight)
  // {
  //   button.style.width = buttonBox.offsetWidth/3-3+"px";
  //   button.style.height = button.style.width;
  // }else{
  //   button.style.width = buttonBox.offsetWidth/4-4+"px";
  //   button.style.height = button.style.width;
  // }

  context.appendChild(button);
}

// ================== winner Field ==================
function winBox (count)
{
  let winBox = document.createElement("div");
  winBox.className = "winner";
  winBox.innerHTML = "Молодец.<br>Кол-во ходов: " + count +
                    "<br><button class='reloadBtn' onclick='location.reload()'>Ещё раз?</button>";

  whiteBack.appendChild(winBox);
}
