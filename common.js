// Utilidades compartidas por las webs de clientes
const $=s=>document.querySelector(s);
const im=(id,c='')=>`<div class="${c} overflow-hidden bg-black/10"><img loading="lazy" src="https://images.unsplash.com/photo-${id}?w=700&q=70" alt="" class="w-full h-full object-cover transition duration-700 hover:scale-110" onerror="this.remove()"></div>`;
const gal=(ids,c)=>ids.map(i=>im(i,c)).join('');
const rev=(l,c)=>l.map(([n,t])=>`<figure class="${c}"><div class="flex gap-1 text-amber-400 text-xl">${'<i class="ph-fill ph-star"></i>'.repeat(5)}</div><blockquote class="mt-3 leading-relaxed">${t}</blockquote><figcaption class="mt-4 font-bold text-sm">${n}</figcaption></figure>`).join('');
// Carta/lista de precios con pestañas
function menu(d,on,off){const k=Object.keys(d);const draw=t=>{
 $('#tb').innerHTML=k.map(x=>`<button class="${x==t?on:off}" data-t="${x}">${x}</button>`).join('');
 $('#mi').innerHTML=d[t].map(([n,s,p])=>`<li class="flex items-baseline gap-3 py-4" style="border-bottom:1px solid color-mix(in srgb,currentColor 15%,transparent)"><div><b>${n}</b><p class="text-sm opacity-70">${s}</p></div><span class="flex-1"></span><b class="whitespace-nowrap">${p}</b></li>`).join('');
 document.querySelectorAll('#tb button').forEach(b=>b.onclick=()=>draw(b.dataset.t));};draw(k[0]);}
// Menú móvil
$('#mb').onclick=()=>$('#mm').classList.toggle('hidden');
document.querySelectorAll('#mm a').forEach(a=>a.onclick=()=>$('#mm').classList.add('hidden'));
// Formulario de reserva: abre WhatsApp con el mensaje
$('#rf').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);open('https://wa.me/'+WA_NUM+'?text='+encodeURIComponent(`Hola, soy ${f.get('n')}. Quiero reservar para ${f.get('p')} personas el ${f.get('d')} a las ${f.get('h')}.`))};