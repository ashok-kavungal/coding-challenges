const job1 = (intervel)=>{
  console.log('job1 is running after '+ intervel+ ' ms');
}
const job2 = (intervel)=>{
  console.log('job2 is running after '+ intervel+ ' ms');
}
const jobTerminator = (jobId,expire)=>{
  setTimeout(
    function(){ 
      clearInterval(jobId),
      console.log('job expired')},
      expire
  )
}
const jobScheduler = (job,intervel,expire)=>{
  timerId = setInterval(
    function() { job(intervel)},
    intervel);
 jobTerminator(timerId,expire);
}

jobScheduler(job1,3000,12100);
//jobScheduler(job2,5000,15001); 
