<script>
    let celsius = 0,
        lumi = 0;

    function c2f() {
        lumi = (celsius - 10) / 2.5;
    }

    function f2c() {
        celsius = lumi * 2.5 + 10;
    }
</script>

<div class="bia">
    <h1>convesão entre L e C:</h1>
    Celsius:<input oninput={c2f} type="number" bind:value={celsius} />
    Lumi: <input oninput={f2c} type="number" bind:value={lumi} />
</div>

<style>
    .bia {
        font-family: 'Segoe Ui', Tahoma, Geneva, Verdana, Sans-serif;
        background-color: hsl(239, 90%, 41%);
        color: rgb(116, 5, 5);
        line-height: 1.6;
    }
</style>
