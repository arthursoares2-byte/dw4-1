<script>
    let celsius = 0,
        fahrenheit = 0;

    function c2f() {
        fahrenheit = celsius * 1.8 + 32;
    }

    function f2c() {
        celsius = ((fahrenheit - 32) * 5) / 9;
    }
</script>

Celsius: <input oninput={c2f} type="number" bind:value={celsius} />
Fahrenheit: <input oninput={f2c} type="number" bind:value={fahrenheit} />
