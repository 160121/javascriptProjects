const input=document.querySelectorAll('input');
//console.log(input);
function handleclick(){
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
input.forEach(input=>input.addEventListener('change',handleclick));

input.forEach((input) => input.addEventListener('mousemove', handleclick));