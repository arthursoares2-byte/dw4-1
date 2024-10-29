<script>
	let n1, n2;
	let resposta = '';
	function acao() {
		if (n1 && n2) resposta = n1 + n2;
	}
</script>

<p>Digite dois números...</p>
<input type="number" name="n1" id="n1" bind:value={n1} />
<input type="number" name="n2" id="n2" bind:value={n2} />
<button onclick={acao}>Ação!</button>

<p>A resposta é {resposta}</p>
