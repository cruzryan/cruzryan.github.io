<script>
import { Link } from "svelte-navigator";

</script>


<main>
    <h1 class="title">Contact</h1> 
    <a href="https://www.instagram.com/ryancruzb"> <h2 class="contact">instagram</h2> </a>
    <a href="https://www.twitter.com/ryancruzb"><h2 class="contact">twitter</h2></a>
    <h2 href="htttps://www.github.com/cruzryan" class="contact">github</h2>
    <h2 class="contact" style="cursor: text;">rncb0963@gmail.com</h2>
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

    .contact{
        color: #4A4A4A;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 0.5em;
    }

</style>