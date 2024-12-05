<script>
    const frutas = ['açaí', 'cajá', 'coco', 'figo', 'ingá'];
</script>

<h2>Minhas frutas preferidas</h2>
<ul>
    {#each frutas as fruta}
        <li>{fruta}</li>
    {/each}
</ul>
