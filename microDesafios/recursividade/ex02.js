// Recrusividade
//

function chamarFatorial (n) {
   if (n === 0) return 1;
   if (n === 1) return 1;
   return n * chamarFatorial(n-1);
}
console.log(chamarFatorial(10));
