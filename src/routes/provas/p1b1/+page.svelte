<script>
    let idade = $state(0);
</script>

Idade: <input type="number" min="0" bind:value={idade} />

{#if idade < 13}
    <p>desconto de 50% 😁</p>
{:else if idade <= 17}
    <p>desconto de 30% 😎</p>
{:else if idade <= 59}
    <p>sem desconto 😅</p>
{:else}
    <p>desconto de 40% 😱</p>
{/if}
