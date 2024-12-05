<script>
    let cf = $state(),
        cc = $state();

    function calcularcusto() {
        if (cf <= 12000) {
            cc = cf + cf * 0.05;
        } else if (cf <= 25000) {
            cc = cf + cf * 0.1 + cf * 0.15;
        } else {
            cc = cf + cf * 0.15 + cf * 0.2;
        }
    }
</script>

<h1>Capítulo 05 - Exercício 2</h1>
<p>Cálculo do custo do carro ao consumidor, considerando o custo de produção pela fábrica e as taxas e impostos embutidos.</p>

<p>
    Custo da fábrica:
    <input oninput={calcularcusto} type="number" bind:value={cf} />
</p>
<p>Custo do carro: R${cc || '...'}</p>
