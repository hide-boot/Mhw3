//O46002083 Bonadonna Stefano
const apiflag='https://restcountries.eu/rest/v2/name/';

const newarticle=document.querySelector('.new');
const input=document.querySelector('form');


const apikey='2dba0ab390msh655f706525291a3p1c6c30jsn349c4840506e';
const apihost='covid-19-coronavirus-statistics.p.rapidapi.com';
const api='https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total/?rapidapi-key='+apikey+'&rapiapi-host='+apihost;



input.addEventListener('submit',search);


fetch(apiflag+'USA').then(onResponce).then(onJs);
fetch(apiflag+'Japan').then(onResponce).then(onJs);


function onJs(json){
  const resp=json[0].flag;
  const nome=json[0].name;
  const alpha=json[0].alpha2Code;
  console.log(nome);
  if(resp && nome){
  const div=document.createElement('div');
  div.classList.add('citta');
  const title=document.createElement('h4');
  if(nome==='United States of America'){
    title.textContent=alpha;
  }
  else{
  title.textContent=nome;
}
  title.classList.add('titolo');
  const image=document.createElement('img');
  image.src=resp;
  image.classList.add('image');
  div.appendChild(title);
  div.appendChild(image);
  fetch(api+'&country='+title.textContent).then(onResponce).then(onJsn);
  newarticle.appendChild(div);

  }
}


function onJsn(json){
 const result = json.data;
 const country=json.data.location;
 
  if(result){
    const div=document.querySelectorAll('.citta');
    for(d of div){
     
      
   if(d.firstChild.textContent===country){
     const cont=document.createElement('div');
    for(r in result){
    const paragrafo= document.createElement('p');
    paragrafo.textContent=r+' : '+result[r];
    
    paragrafo.classList.add('paragrafo');
    cont.appendChild(paragrafo)
    d.appendChild(cont);
   }
   }
  }
  }
}
    




function search(event){
  event.preventDefault();
  const content=document.querySelector('.search').value;
  if(content){
  const text=encodeURIComponent(content);
  const txt=text[0].toUpperCase()+text.substring(1);
  const request=apiflag+txt;
  fetch(request).then(onResponce).then(onJson);
   }
}
 
function onJson(json){
    if(newarticle.childElementCount!==0){
      newarticle.innerHTML='';
    }
    const resp=json[0].flag;
    const nome=json[0].name;
    const alpha=json[0].alpha2Code;
    console.log(nome);
    if(resp && nome){
    const div=document.createElement('div');
    div.classList.add('citta');
    const title=document.createElement('h4');
    if(nome==='United States of America'){
      title.textContent=alpha;
    }
    else{
    title.textContent=nome;}
    title.classList.add('titolo');
    const image=document.createElement('img');
    image.src=resp;
    image.classList.add('image');
    div.appendChild(title);
    div.appendChild(image);
    fetch(api+'&country='+title.textContent).then(onResponce).then(onJsn);
    newarticle.appendChild(div);
  
  }
}
function onResponce(responce){
  return responce.json();
}
