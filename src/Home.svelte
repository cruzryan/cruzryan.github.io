<script>
import { Link } from "svelte-navigator";

</script>


<main>

    <h1 class="title">Ryan Cruz</h1>
    <h2 class="just">just trying to live a good life man...</h2>

    <Link to="contact"><h2 class="contact">contact me</h2></Link>
    <Link to="blogs"><h2 class="contact">blogs</h2> </Link>

</main>


<style>

    
    main {
        width: 85vw;
        margin-left: 15vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1,h2{
        font-weight: 600;
    }

    .title{
        margin-top: -33vh;
        color: #242424;
    }

    .just{
        color: #AAAAAA;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    .contact{
        color: #4A4A4A;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 0.5em;
    }

</style>