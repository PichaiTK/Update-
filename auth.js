// auth.js — client-side demo auth (signup/login) using WebCrypto SHA-256 and localStorage
const STORAGE_USERS = 'demo_users_v1';
const STORAGE_SESSION = 'demo_session_v1';

function loadUsers(){ try{ return JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]'); } catch(e){ return []; } }
function saveUsers(u){ localStorage.setItem(STORAGE_USERS, JSON.stringify(u)); }
function loadSession(){ try{ return JSON.parse(localStorage.getItem(STORAGE_SESSION) || 'null'); } catch(e){ return null; } }
function saveSession(s){ localStorage.setItem(STORAGE_SESSION, JSON.stringify(s)); }
function clearSession(){ localStorage.removeItem(STORAGE_SESSION); }

async function hashPassword(pw){
  const enc = new TextEncoder();
  const data = enc.encode(pw);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

async function signupHandler(){
  const name = document.getElementById('su-name').value.trim();
  const email = document.getElementById('su-email').value.trim().toLowerCase();
  const pw = document.getElementById('su-password').value;
  const role = document.getElementById('su-role').value || 'USER';
  const msg = document.getElementById('su-msg'); msg.textContent = '';

  if(!name || !email || pw.length < 6){ msg.textContent = 'กรุณากรอกข้อมูลให้ครบและรหัสผ่านอย่างน้อย 6 ตัว'; return; }
  const users = loadUsers();
  if(users.find(u=>u.email === email)){ msg.textContent = 'อีเมลนี้ถูกใช้งานแล้ว'; return; }
  const hash = await hashPassword(pw);
  users.push({ email, name, passwordHash: hash, role, createdAt: new Date().toISOString() });
  saveUsers(users);
  msg.textContent = 'สมัครสมาชิกสำเร็จ';
  // optional: auto-login
  saveSession({ email, name, role, loggedAt: new Date().toISOString() });
  renderUserArea();
  refreshAdmin();
}

async function loginHandler(){
  const email = document.getElementById('li-email').value.trim().toLowerCase();
  const pw = document.getElementById('li-password').value;
  const msg = document.getElementById('li-msg'); msg.textContent = '';
  if(!email || !pw){ msg.textContent = 'กรุณากรอกอีเมลและรหัสผ่าน'; return; }
  const users = loadUsers();
  const user = users.find(u=>u.email === email);
  if(!user){ msg.textContent = 'ไม่พบผู้ใช้'; return; }
  const hash = await hashPassword(pw);
  if(hash !== user.passwordHash){ msg.textContent = 'รหัสผ่านไม่ถูกต้อง'; return; }
  saveSession({ email:user.email, name:user.name, role:user.role, loggedAt: new Date().toISOString() });
  msg.textContent = 'เข้าสู่ระบบสำเร็จ';
  renderUserArea();
  refreshAdmin();
}

function logoutHandler(){
  clearSession();
  renderUserArea();
  refreshAdmin();
}

function renderUserArea(){
  const container = document.getElementById('user-area');
  const s = loadSession();
  if(s){
    container.innerHTML = `<div class="small">Hi, ${escapeHtml(s.name)} (${escapeHtml(s.role)})</div><button id="btn-logout">Logout</button>`;
    document.getElementById('btn-logout').addEventListener('click', logoutHandler);
  } else {
    container.innerHTML = `<button id="btn-show-signup">Sign up</button><button id="btn-show-login">Log in</button>`;
    document.getElementById('btn-show-signup').addEventListener('click', ()=> showModalUnder('#su-name'));
    document.getElementById('btn-show-login').addEventListener('click', ()=> showModalUnder('#li-email'));
  }
}

function showModalUnder(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  // clone the form card to modal
  const card = el.closest('.card') ? el.closest('.card').cloneNode(true) : null;
  body.innerHTML = '';
  if(card) body.appendChild(card);
  document.getElementById('modal').style.display = 'block';
  // wire buttons in cloned card (signup/login)
  const cloneSignupBtn = body.querySelector('#btn-signup');
  const cloneLoginBtn = body.querySelector('#btn-login');
  if(cloneSignupBtn) cloneSignupBtn.addEventListener('click', async ()=> { await signupHandler(); document.getElementById('modal').style.display='none'; });
  if(cloneLoginBtn) cloneLoginBtn.addEventListener('click', async ()=> { await loginHandler(); document.getElementById('modal').style.display='none'; });
}

// modal close
document.getElementById('modal-close').addEventListener('click', ()=> { document.getElementById('modal').style.display='none'; });

// helpers
function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

/* expose functions and wire local elements */
window.signupHandler = signupHandler;
window.loginHandler = loginHandler;
window.logoutHandler = logoutHandler;
window.renderUserArea = renderUserArea;

document.getElementById('btn-signup').addEventListener('click', signupHandler);
document.getElementById('btn-login').addEventListener('click', loginHandler);

// initial render
renderUserArea();
