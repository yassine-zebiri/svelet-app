
<!--   javascript  -->
<script>
import Counter from "./lib/Counter.svelte";

    
</script>


<!--   TAG HTML  -->
<svelte:head>
	<link rel="stylesheet" href="/src/css/bootstrap-5.css">
</svelte:head>
<main class="container-fluid p-1 my-contant">
    <header class="mb-5 header">SVELTE APP</header>
    <div class="mt-5 ">
        
        <Counter/>
    </div>
</main>


<!--   CSS style  -->

<style>
*{
    margin: 0;
    padding: 0;
}

.my-contant{
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
border: 1px black solid;
margin: auto;
width: 100%;
height: 150vh;
background: linear-gradient(50deg,#03001e,#7303c0,#ec38bc,#fdeff9);
}
.header{
    position: fixed;
    height: 70px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 18px;
    font-weight: 600;
    top: 0%;
    color: white;
}
</style>