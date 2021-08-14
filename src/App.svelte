<script>
  import { Route, Router } from "svelte-navigator";
import Blogs from "./Blogs.svelte";
import Contact from "./Contact.svelte";
import Home from "./Home.svelte";
import Scerling from "./Scerling.svelte";
</script>

<main>
  <Router>

	
	<Route path="contact">
		<Contact/>
    </Route>

	<Route path="blogs">
		<Blogs/>
    </Route>

	<Route path="scerling">
		<Scerling/>
    </Route>

    <Route path="/">
		<Home/>
    </Route>

  </Router>
</main>
