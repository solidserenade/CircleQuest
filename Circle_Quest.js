window.onload = function()
{

  for(let i = 0; i<8; i++)
  {
    createCircle (document.body);
  }

  let btnRow = document.querySelectorAll(".buttons");
  btnRow.forEach((e)=>{
    e.onclick = push;
  });
}

// Классы
// class circles
// {
//
//   constructor(type,cirClass,id)
//   {
//     this.type = type;
//     this.cirClass = cirClass;
//     this.id = id;
//   }
//
// }

// Функции
function randomInteger(min, max)
{
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

// Изменение цвета объекта по нажатию
function push ()
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
