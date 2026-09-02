const target = new Date('2026-12-20T15:00:00-06:00').getTime();

  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000); diff -= days*86400000;
    const hours = Math.floor(diff / 3600000); diff -= hours*3600000;
    const mins = Math.floor(diff / 60000); diff -= mins*60000;
    const secs = Math.floor(diff / 1000);
    document.getElementById('d').textContent = String(days).padStart(2,'0');
    document.getElementById('h').textContent = String(hours).padStart(2,'0');
    document.getElementById('m').textContent = String(mins).padStart(2,'0');
    document.getElementById('s').textContent = String(secs).padStart(2,'0');
  }
  tick();
  setInterval(tick,1000);

  document.querySelectorAll('.fade').forEach(el=>{
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }});
    },{threshold:.15});
    io.observe(el);
  });

  document.getElementById('rsvp').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const asistencia = document.getElementById('asistencia').value;
    document.getElementById('respuesta').textContent =
      `Gracias, ${nombre}. Tu respuesta quedó registrada en esta invitación: ${asistencia}.`;
    this.reset();
  });
