window.onload = function()
{
  let btnRow = document.querySelectorAll(".buttons");
  btnRow.forEach((e)=>{
    e.onclick = push;
  });
}

function push ()
{
  this.classList.toggle("tag");
}
