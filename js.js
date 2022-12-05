 function tiente() {
     let tiente = +document.getElementById('tiente').value;
     let a =  document.getElementById('a').value;
     let b =  document.getElementById('b').value;
     let kq = document.getElementById('kq')
     console.log('select 1 -->',a)
     console.log('select 2 -->',b)

  if ( a===b) {
     kq=tiente
 } else{
    if(a === 'vnd'){
        kq = tiente/23000;
    } else {
        kq = tiente * 23000;
    }
  }
  document.getElementById('kq').innerHTML = kq + b