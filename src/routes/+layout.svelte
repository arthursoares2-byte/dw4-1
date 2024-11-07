<script>
	let { children } = $props();
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/#">
			<img src="/logo.png" alt="Logo" width="24" height="24" />
			DW4
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/about">Sobre</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

{@render children()}
