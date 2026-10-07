const target=new Date('2026-11-08T18:00:00+02:00').getTime();
const cd=document.getElementById('countdown');
function tick(){const d=target-Date.now();if(d<=0){cd.textContent='The celebration has started ❤️';return}const days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);cd.textContent=`${days}d  ${h}h  ${m}m  ${s}s`}
tick();setInterval(tick,1000);
const key='karim-laila-celebrations';const total=document.getElementById('total');
function load(){total.textContent=localStorage.getItem(key)||0}load();
document.getElementById('celebrate').onclick=e=>{let n=Number(localStorage.getItem(key)||0)+1;localStorage.setItem(key,n);total.textContent=n;const x=document.createElement('span');x.className='heart';x.textContent='♥';x.style.left=(e.clientX-10)+'px';x.style.top=(e.clientY-10)+'px';document.body.appendChild(x);setTimeout(()=>x.remove(),900)};
