<script>
    let { massa, calor, tfinal, tinicial, Q } = $state(0);

    function calcularQ() {
        Q = massa * calor * (tfinal - tinicial);
    }
</script>

Massa: <input oninput={calcularQ} type="number" bind:value={massa} /><br />
Calor: <input oninput={calcularQ} type="number" bind:value={calor} /><br />
Temperatura inicial:
<input oninput={calcularQ} type="number" bind:value={tfinal} /><br />
Temperatura final:
<input oninput={calcularQ} type="number" bind:value={tinicial} /><br />
<br />
Para uma massa de {massa} kg e um calor específico de {calor} J/(kg·°C), a quantidade de calor
{#if Q < 0}
    liberada
{:else}
    absorvida
{/if}
ao variar de {tinicial} °C para {tfinal} °C é {Q} Joules.
