<script>
	import logo from '$lib/images/plane.svg';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		Button,
		Input,
		Avatar,
		NavHamburger,
		Dropdown,
		DropdownHeader,
		DropdownItem
	} from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<Navbar rounded color="form">
	<NavBrand href="/">
		<img src={logo} class="mx-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Trip Planner</span
		>
	</NavBrand>
	<NavUl class="ml-3">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/dashboard">Dashboard</NavLi>
		<NavLi href="/sverdle">Sverdle</NavLi>
	</NavUl>
	<div class="flex ml-auto">
		<Button
			color="none"
			data-collapse-toggle="mobile-menu-3"
			aria-controls="mobile-menu-3"
			aria-expanded="false"
			class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
		>
			<SearchOutline class="w-5 h-5" />
		</Button>
		<div class="hidden relative md:block">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<SearchOutline class="w-4 h-4" />
			</div>
			<Input id="search-navbar" class="pl-10" placeholder="Search..." />
		</div>
	</div>
	<DarkMode class="ml-2" />
	<div class="flex items-center md:order-2 ml-2">
		<Avatar id="avatar-menu" src="https://api.dicebear.com/7.x/thumbs/svg?seed=mock" />
		<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm">Tester</span>
		</DropdownHeader>
		<DropdownItem>Settings</DropdownItem>
		<DropdownItem>Sign out</DropdownItem>
	</Dropdown>
</Navbar>
