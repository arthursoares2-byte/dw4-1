<script>
  let { img, title, type, text } = $props();
</script>

<div class="card h-100" style="width: 18rem;">
  <img src={img} class="card-img-top" alt="invisibility" width="200px" />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{type}</h6>
    <p class="card-text">{text}</p>
  </div>
</div>
