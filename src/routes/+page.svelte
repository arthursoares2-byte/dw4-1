<script>
	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';
	let nome = 'Mude seu nome aqui';
	let a = 10;
	let b = 20;
</script>

<Cabecalho />

<p class="azul">Meu nome é {nome}!</p>
<p class="vermelho">{a} + {b} = {a + b}</p>

<Rodape />

<style>
	.azul {
		color: blue;
	}

	.vermelho {
		color: red;
	}
</style>
