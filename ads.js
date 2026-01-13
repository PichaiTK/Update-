// ads.js — carousel + HLS support + admin UI (localStorage-based)
// Requires Hls.js (loaded in index.html)

const STORAGE_ADS = 'demo_ads_v1';

function loadAds(){ try{ return JSON.parse(localStorage.getItem(STORAGE_ADS) || '[]'); } catch(e){ return []; } }
function saveAds(a){ localStorage.setItem(STORAGE_ADS, JSON.stringify(a)); }

let ads = loadAds();
let currentIndex = 0;
let autoTimer = null;

const slidesEl = document.getElementById('slides');
const indicatorsEl = document.getElementById('indicators');
const carouselEl = document.getElementById('carousel');

function renderCarousel(){
  ads = loadAds();
  if(ads.length === 0){ slidesEl.innerHTML = '<div class="slide"><div class="small muted">No ads</div></div>'; return; }
  slidesEl.innerHTML = '';
  indicatorsEl.innerHTML = '';
  ads.forEach((ad, idx) => {
    const slide = document.createElement('div'); slide.className='slide'; slide.dataset.index = idx;
    if(ad.type === 'image'){
      const img = document.createElement('img'); img.src = ad.src; img.alt = ad.caption || 'ad';
      slide.appendChild(img);
    } else if(ad.type === 'video'){
      // support mp4 and hls (.m3u8)
      if(ad.src.endsWith('.m3u8') && window.Hls && Hls.isSupported()){
        const video = document.createElement('video');
        video.muted = true; video.playsInline = true; video.controls = false; video.style.width='100%'; video.style.height='100%';
        slide.appendChild(video);
        // attach HLS when slide becomes active
        slide._hlsSrc = ad.src;
      } else {
        const video = document.createElement('video'); video.src = ad.src; video.muted = true; video.playsInline = true; video.controls = false; video.loop = true;
        slide.appendChild(video);
      }
      if(ad.thumb) slide.querySelector('video')?.setAttribute('poster', ad.thumb);
    }
    if(ad.caption) {
      const overlay = document.createElement('div');
      overlay.style.position='absolute'; overlay.style.left='12px'; overlay.style.bottom='12px'; overlay.style.color='#fff';
      overlay.style.background='rgba(0,0,0,0.25)'; overlay.style.padding='6px 10px'; overlay.style.borderRadius='8px';
      overlay.textContent = ad.caption;
      slide.appendChild(overlay);
    }
    slidesEl.appendChild(slide);

    const dot = document.createElement('div'); dot.className='dot'; dot.dataset.index = idx;
    dot.addEventListener('click', ()=> goToSlide(parseInt(dot.dataset.index)));
    indicatorsEl.appendChild(dot);
  });
  updatePosition();
  startAuto();
}

function updatePosition(){
  if(!carouselEl) return;
  const width = carouselEl.clientWidth;
  slidesEl.style.transform = `translateX(-${currentIndex * width}px)`;
  $$('.dot').forEach(d=> d.classList.remove('active'));
  const active = indicatorsEl.querySelector(`[data-index="${currentIndex}"]`);
  if(active) active.classList.add('active');
  // handle video attachments
  $$('.slide').forEach((sl, idx) => {
    const vid = sl.querySelector('video');
    if(sl._hlsSrc && idx === currentIndex){
      // attach hls to video element
      if(vid && !vid._hlsAttached && window.Hls && Hls.isSupported()){
        const hls = new Hls();
        hls.loadSource(sl._hlsSrc);
        hls.attachMedia(vid);
        vid._hlsAttached = true;
        sl._hls = hls;
      }
    }
    if(vid){
      if(idx === currentIndex){ vid.play().catch(()=>{}); } else { vid.pause(); }
    }
  });
}

function next(){ currentIndex = (currentIndex + 1) % Math.max(1, ads.length); updatePosition(); restartAuto(); }
function prev(){ currentIndex = (currentIndex - 1 + Math.max(1, ads.length)) % Math.max(1, ads.length); updatePosition(); restartAuto(); }
function goToSlide(i){ currentIndex = i; updatePosition(); restartAuto(); }

function startAuto(){
  stopAuto();
  if(!ads || ads.length === 0) return;
  const duration = ads[currentIndex]?.duration || 5000;
  autoTimer = setTimeout(()=>{ next(); startAuto(); }, duration);
}
function stopAuto(){ if(autoTimer){ clearTimeout(autoTimer); autoTimer = null; } }
function restartAuto(){ stopAuto(); startAuto(); }

carouselEl.addEventListener('mouseenter', ()=> stopAuto());
carouselEl.addEventListener('mouseleave', ()=> startAuto());
window.addEventListener('resize', ()=> updatePosition());

document.getElementById('next').addEventListener('click', ()=> next());
document.getElementById('prev').addEventListener('click', ()=> prev());

// Admin Ads Manager wiring
function renderAdsTable(){
  const tbody = document.querySelector('#ads-table tbody');
  const rows = (loadAds() || []).map((a, idx) => {
    return `<tr><td>${idx+1}</td><td>${a.type}</td><td style="max-width:420px;word-break:break-all">${escapeHtml(a.src)}</td><td>${escapeHtml(a.caption||'')}</td>
      <td><button data-idx="${idx}" class="del-ad">Delete</button></td></tr>`;
  }).join('');
  tbody.innerHTML = rows;
  $$('.del-ad').forEach(btn => btn.addEventListener('click', (e) => {
    const idx = parseInt(e.target.dataset.idx);
    const arr = loadAds(); arr.splice(idx,1); saveAds(arr); renderCarousel(); renderAdsTable();
  }));
}

document.getElementById('btn-add-ad').addEventListener('click', ()=>{
  const type = document.getElementById('ad-type').value;
  const src = document.getElementById('ad-src').value.trim();
  const thumb = document.getElementById('ad-thumb').value.trim();
  const caption = document.getElementById('ad-caption').value.trim();
  const duration = parseInt(document.getElementById('ad-duration').value) || (type==='video'?8000:5000);
  if(!src){ alert('กรุณาใส่ URL'); return; }
  const arr = loadAds(); arr.push({ id:'ad'+Date.now(), type, src, thumb, caption, duration }); saveAds(arr); renderCarousel(); renderAdsTable();
  // clear inputs
  document.getElementById('ad-src').value=''; document.getElementById('ad-thumb').value=''; document.getElementById('ad-caption').value=''; document.getElementById('ad-duration').value='';
});

// small helper
function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function $$(sel){ return Array.from(document.querySelectorAll(sel)); }

// expose to global for auth to call
window.renderCarousel = renderCarousel;
window.renderAdsTable = renderAdsTable;
window.refreshAdmin = function(){ const s = JSON.parse(localStorage.getItem(STORAGE_ADS) || 'null'); renderAdsTable(); };

// initial render
renderCarousel();
renderAdsTable();
