<script>
    let counter1 = 0;
    let counter2 = $state(0);
</script>

<button onclick={() => {counter1 -= 1; console.log(counter1)}}>Decrease</button>
<button onclick={() => {counter1 += 1; console.log(counter1)}}>Increase</button>
<h1>{counter1}</h1>

<button onclick={() => {counter2 -= 1; console.log(counter2)}}>Decrease</button>
<button onclick={() => {counter2 += 1; console.log(counter2)}}>Increase</button>
<h1>{counter2}</h1>