<script>
  import { Link } from "svelte-navigator";

</script>

<main>

    <Link to="/happy"><div class="blog">
        <h1>Happiness</h1>
        <h2>15/Sep/2021</h2>
    </div>
    </Link>

    <Link to="/everything_repeats"><div class="blog">
        <h1>Everything repeats</h1>
        <h2>9/Sep/2021</h2>
    </div>
    </Link>

    <Link to="/what_is_everyone_doing"><div class="blog">
        <h1>What is everyone doing?</h1>
        <h2>7/Sep/2021</h2>
    </div>
    </Link>

</main>


<style>

    div{
        margin-bottom: 3vh;
    }

    main {
        width: 85vw;
        margin-left: 15vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        user-select: none;
    }

    h1,h2{
        font-weight: 600;
    }

    .blog{
        cursor: pointer;
    }

    .blog h2{
        color:  #828282;
    }

    .blog:hover{
        transform: translate(7px);
    }

</style>