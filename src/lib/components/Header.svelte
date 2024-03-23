<script>
	import logo from '$lib/images/plane.svg';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="sticky top-0 w-full flex-none">
	<Navbar class="bg-gray-300">
		<NavBrand href="/" class="sm:min-w-40">
			<img src={logo} class="me-3 h-6 sm:h-9" alt="Trip Planner Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Trip Planner</span
			>
		</NavBrand>
		<div class="flex justify-end sm:min-w-40 md:order-2">
			<NavHamburger />
			<DarkMode />
		</div>
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/trips">Trips</NavLi>
		</NavUl>
	</Navbar>
</div>
