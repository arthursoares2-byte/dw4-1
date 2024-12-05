<script>
    let fontsize = 6;
    let fundo = 'bg-primary-subtle';

    function aumentarFonte() {
        if (fontsize > 1) fontsize--;
    }
    function diminuirFonte() {
        if (fontsize < 6) fontsize++;
    }
    function mudarFundo() {
        if (fundo == 'bg-primary-subtle') fundo = 'bg-danger-subtle';
        else fundo = 'bg-primary-subtle';
    }
</script>

<div>
    <button class="btn btn-primary" onclick={diminuirFonte}>Diminuir fonte</button>
    <button class="btn btn-primary" onclick={aumentarFonte}>Aumentar fonte</button>
    <button class="btn btn-primary" onclick={mudarFundo}>Mudar fundo</button>
</div>

<div class="fs-{fontsize} p-3 text-primary-emphasis {fundo} border border-primary-subtle rounded-3">Example element with utilities</div>
