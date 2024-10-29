<script>
	let n1 = $state(0);
	let n2 = $state(0);
	let nf = $state(0);
</script>

<h1>Boletim Escolar</h1>

Nota do 1º Bimestre: <input type="number" bind:value={n1} min="0" max="10" />
<br />
Nota do 2º Bimestre: <input type="number" bind:value={n2} min="0" max="10" />
<br />
<button>Calcular a nota final!</button>
<p>Tua nota final é: {nf}</p>
