<script>
	import logo from '$lib/images/plane.svg';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="sticky top-0 mx-auto w-full flex-none bg-white dark:bg-gray-900">
	<Navbar>
		<NavBrand href="/">
			<img src={logo} class="me-3 h-6 sm:h-9" alt="Trip Planner Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Trip Planner</span
			>
		</NavBrand>
		<div class="flex md:order-2">
			<NavHamburger />
			<DarkMode />
		</div>
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/trips">Trips</NavLi>
		</NavUl>
	</Navbar>
</div>
