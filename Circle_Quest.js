window.onload = function()
{
  let buttonQuantity = 8, // кол-во кнопок
      buttonArray = [];   // для исключения повторений при нажатии кнопок


  for(let i = 0; i<buttonQuantity; i++)
  { // вывод кнопок на экран
    createCircle (document.body);
    buttonArray.push(i);
  }

  let btnRow = document.querySelectorAll(".buttons");
  btnRow.forEach((elem,index)=>{

    let arrToRandom = buttonArray.slice(0);
    arrToRandom.splice(index,1);

    let firstRandomNum = arrToRandom.splice(randomInteger(1,arrToRandom.length-1),1);
    console.log (firstRandomNum, arrToRandom, arrToRandom.length);

    let firstElem = pushBtn.bind(elem);
    let otherElem = pushBtn.bind(btnRow[firstRandomNum]);

    elem.onclick = ()=>{
      firstElem();
      otherElem()
    };
    // let otherElem = pushBtn.bind(btnRow[0]);
    // elem.onclick = otherElem;
  });
}

// Функции
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

// Функция создания счётчика
function getcounter()
{
  let count = 0;
  return function ()
  {
    return count++;
  }
}

// Функция создания окружностей
function createCircle (context)
{
  let circleCount = getcounter();
  let circle = document.createElement('input');
  circle.setAttribute('type','button');
  circle.className = "buttons";
  circle.id = circleCount;
  context.appendChild(circle);
}
