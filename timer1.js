process.argv.slice(2).forEach(element => {
  
  if(!isNaN(element) && element>0){
    setTimeout(()=>{
      process.stdout.write('.');
    },element * 1000)
  }
});