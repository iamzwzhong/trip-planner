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

<div class="sticky top-0 z-40 flex-none mx-auto w-full bg-white dark:bg-gray-900">
	<Navbar rounded color="form">
		<NavBrand href="/">
			<img src={logo} class="mx-3 h-6 sm:h-9" alt="Trip Planner Logo" />
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
			<div class="hidden relative md:block">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<SearchOutline class="w-4 h-4" />
				</div>
				<Input id="search-navbar" class="pl-10" placeholder="Search..." />
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
		</div>
	</Navbar>
</div>
