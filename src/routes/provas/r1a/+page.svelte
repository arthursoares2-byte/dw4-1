<script>
    let massa = $state(0),
        aceleração = $state(0),
        força = $state(0);

    function calcularforça() {
        força = massa * aceleração;
    }
</script>

<p>
    Massa: <input oninput={calcularforça} type="number" min="0" bind:value={massa} />
    Aceleração: <input oninput={calcularforça} type="number" min="0" bind:value={aceleração} />
</p>

<p>Força: {força}J</p>

{#if massa < 2000}
    <p class="bg-success-subtle">Dentro da margem de segurança. Voe tranquilo!</p>
{:else if massa <= 4000}
    <p class="bg-warning-subtle">Acima da margem de segurança. Você tem certeza disso?</p>
{:else}
    <p class="bg-danger-subtle">Acidente na certa! Depois não diga que eu não te avisei...</p>
{/if}
