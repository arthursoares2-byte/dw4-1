<script>
	export let data;
</script>

{#each data.filmes as filme}
	<div class="card" style="width: 18rem;">
		<img src={filme.capa} class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{filme.titulo}</h5>
		</div>
	</div>
{/each}
