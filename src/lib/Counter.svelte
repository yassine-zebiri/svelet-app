<script>
  let value=0;
  const inc=(nbr)=>{
    value+=nbr;
  }
  const rest=()=>{
    value=0;
  }
  
</script>

<main class="mt-5 w-100">
  <h1 class="text-white" >counter : {value}</h1>
  <div class="group-btn p-1 pt-5">
  <button on:click={()=>inc(1)} class="btn btn-primary">+</button>
  <button on:click={()=>rest()} class="btn btn-secondary">rest</button>
  <button on:click={()=>inc(-1)} class="btn btn-danger">-</button>
  </div>
</main>


<style>
  .group-btn{
    display: flex;
    justify-content: space-between;
    
  }
</style>