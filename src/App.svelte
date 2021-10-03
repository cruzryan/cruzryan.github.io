<script>
  import { Route, Router } from "svelte-navigator";
import Blogs from "./Blogs.svelte";
import Contact from "./Contact.svelte";
import Home from "./Home.svelte";
import Scerling from "./Scerling.svelte";
import Ryanfans from "./Ryanfans.svelte";
import GeneHacker from "./GeneHacker.svelte";
import Blog1 from "./Blogs/Blog1.svelte";
import Blog2 from "./Blogs/Blog2.svelte";
import Blog3 from "./Blogs/Blog3.svelte";
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

  <Route path="fans">
		<Ryanfans/>
  </Route>


  <Route path="what_is_everyone_doing">
  	<Blog1/>
  </Route>

  <Route path="everything_repeats">
    <Blog2/>
  </Route>

  <Route path="happy">
    <Blog3/>
  </Route>

  <Route path="gh">
    <GeneHacker/>
  </Route>

    <Route path="/">
		<Home/>
    </Route>

  </Router>
</main>
