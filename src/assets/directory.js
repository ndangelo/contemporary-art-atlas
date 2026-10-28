const search=document.querySelector('#search');
const filter=document.querySelector('#filter');
const cards=[...document.querySelectorAll('.artist-card')];
const count=document.querySelector('#count');
function update(){
  const q=(search?.value||'').toLocaleLowerCase().trim();
  const category=filter?.value||'all';
  let visible=0;
  cards.forEach(card=>{
    const matchesText=!q||(card.dataset.search||'').includes(q);
    const matchesCategory=category==='all'||card.dataset.category===category;
    card.hidden=!(matchesText&&matchesCategory);
    if(!card.hidden)visible++;
  });
  if(count)count.textContent='('+visible+')';
}
search?.addEventListener('input',update);
filter?.addEventListener('change',update);
update();
