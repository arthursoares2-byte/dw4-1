<script>
    let np, nt, ns;
    let nf = $state(0);

    function calcularnota() {

    }
</script>

<h1>Boletim Escolar</h1>

Nota da prova:
<input type="number" bind:value={np} min="0" max="10" />
<br />

Nota do trabalho:
<input type="number" bind:value={nt} min="0" max="10" />
<br />

Nota do seminário:
<input type="number" bind:value={ns} min="0" max="10" />
<br />

<button onclick={calcularnota}> Calcular a nota final!</button>

<p>Tua nota final é: {nf}</p>