<script>
    let idade;
</script>

<p class="pergunta">
    Qual tua idade?
    <input type="number" min="0" bind:value={idade} />
</p>

{#if idade < 18}
    <p>(1) Não pode tirar carteira</p>
{:else if idade < 65}
    <p>(2) carteira com validade de 10 anos</p>
{:else}
    <p>(3) carteira com validade de 5 anos.</p>
{/if}

<style>
    .pergunta {
        color: darkgoldenrod;
        background-color: floralwhite;
    }
</style>
