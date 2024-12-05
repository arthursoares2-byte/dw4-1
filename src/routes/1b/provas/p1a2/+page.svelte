<script>
    let reais = 0,
        lunis = 0;

    function r2l() {
        lunis = reais * 32;
    }

    function l2r() {
        reais = lunis / 32;
    }
</script>

<div class="text-primary border border-info">
    Reais: R$<input oninput={r2l} type="number" bind:value={reais} />
</div>

<div class="text-success border border-success-subtle">
    Lúnis: L$<input oninput={l2r} type="number" bind:value={lunis} />
</div>
