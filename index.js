function breakOut(array,change,stop)
{
  var n=array.length;
for(var i=0;i<n;i++)
{
   if(array[i]==stop)
    break;
  array[i]=change;
 
}
return array;
}

function keepGoing(array,change,skip)
{
  for(var i=0;i<array.length;i++)
  {
    if(array[i]===skip)
    continue;
    array[i]=change;
  }
  return array;
}

function findBy(array,findFn)
{
 array.forEach(item=>
 {
  if (findFn(item))
   {
        console.log(item);

     return item;
   }
 }
 );
  return null;

}
 