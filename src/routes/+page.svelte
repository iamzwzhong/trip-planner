<script lang="ts">
	import { Heading } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Trip Planner" content="Trip Planner App" />
</svelte:head>

<section>
	<div class="flex flex-col items-center">
		<div class="relative h-[887px] w-full overflow-hidden bg-blue-300 dark:bg-black">
			<div class="plane pos left-[20%] h-1 w-1">
				<div class="plane-body"></div>
				<div class="wingOne"></div>
				<div class="wingTwo"></div>
				<div
					class="cloudOne dark:bg-gray-500 before:dark:bg-gray-500 before:dark:shadow-[65px_0px_rgb(107,114,128)]"
				/>
				<div
					class="cloudTwo dark:bg-gray-500 before:dark:bg-gray-500 before:dark:shadow-[65px_0px_rgb(107,114,128)]"
				/>
				<div
					class="cloudThree dark:bg-gray-500 before:dark:bg-gray-500 before:dark:shadow-[65px_0px_rgb(107,114,128)]"
				/>
				<div
					class="cloudFour dark:bg-gray-500 before:dark:bg-gray-500 before:dark:shadow-[65px_0px_rgb(107,114,128)]"
				/>
			</div>
			<div class="flex h-full flex-col items-center justify-center">
				<Heading tag="h1" class="flex justify-center md:text-9xl">EXPLORE</Heading>
				<Heading tag="h6" class="flex justify-center">NOTMAINGROUP©</Heading>
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 380px) {
		.pos {
			left: 25%;
		}
	}

	@media (min-width: 500px) {
		.pos {
			left: 30%;
		}
	}

	@media (min-width: 600px) {
		.pos {
			left: 40%;
		}
	}

	@media (min-width: 1000px) {
		.pos {
			left: 45%;
		}
	}
	.plane {
		position: relative;
		top: 75px;
		animation: fly 2s linear infinite;
	}

	.plane-body {
		position: absolute;
		width: 220px;
		height: 40px;
		background-color: #0077b6;
		top: 100px;
		border-radius: 0 100px 30px 100px;
		overflow: hidden;
		box-shadow: inset -10px -10px rgba(0, 0, 0, 0.2);
		z-index: 2;
	}
	.plane-body:before,
	.plane-body:after {
		content: '';
		position: absolute;
		background-color: #fdc921;
		top: 10px;
	}

	.plane-body:before {
		width: 40px;
		height: 10px;
		border-radius: 0 0 0 30px;
		left: 190px;
	}

	.plane-body:after {
		width: 5px;
		height: 10px;
		border-radius: 20px;
		left: 160px;
		box-shadow:
			-10px 0 #fdc921,
			-20px 0 #fdc921,
			-30px 0 #fdc921,
			-40px 0 #fdc921,
			-50px 0 #fdc921,
			-60px 0 #fdc921,
			-70px 0 #fdc921,
			-80px 0 #fdc921,
			-90px 0 #fdc921,
			-100px 0 #fdc921,
			-110px 0 #fdc921,
			-120px 0 #fdc921;
	}

	.wingOne {
		position: absolute;
		width: 50px;
		border-right: 20px solid transparent;
		border-left: 20px solid transparent;
		border-top: 80px solid #0077b6;
		height: 0;
		top: 115px;
		left: 60px;
		transform: skew(-45deg) rotateX(30deg);
		z-index: 4;
	}

	.wingTwo {
		position: absolute;
		width: 50px;
		border-right: 20px solid transparent;
		border-left: 20px solid transparent;
		border-bottom: 80px solid #023e8a;
		height: 0;
		top: 55px;
		left: 60px;
		transform: skew(45deg) rotateX(30deg);
	}

	.wingTwo:after {
		content: '';
		position: absolute;
		width: 20px;
		border-right: 15px solid transparent;
		border-left: 15px solid transparent;
		border-bottom: 35px solid #0077b6;
		height: 0;
		left: -100px;
		top: 29px;
	}

	.wingOne:after {
		content: '';
		position: absolute;
		width: 20px;
		height: 25px;
		background-color: #0077b6;
		top: -105px;
		left: -140px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.wingTwo:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 25px;
		background-color: #023e8a;
		left: -80px;
		top: 35px;
		transform: skew(-55deg);
	}

	.cloudOne,
	.cloudTwo,
	.cloudThree,
	.cloudFour {
		position: absolute;
		width: 50px;
		height: 25px;
		background-color: #fff;
		border-radius: 100px 100px 0 0;
	}

	.cloudOne {
		top: 0;
		animation: cloud 4s linear infinite reverse;
	}

	.cloudTwo {
		top: 50px;
		animation: cloud 3s linear infinite reverse;
	}

	.cloudThree {
		top: 250px;
		animation: cloud 5s linear infinite reverse;
	}

	.cloudFour {
		top: 125px;
		animation: cloud 3.5s linear infinite reverse;
	}

	.cloudOne:before,
	.cloudTwo:before,
	.cloudThree:before,
	.cloudFour:before {
		content: '';
		position: absolute;
		width: 25px;
		height: 12.5px;
		background-color: #fff;
		border-radius: 100px 100px 0 0;
		left: -20px;
		top: 12.5px;
		box-shadow: 65px 0 #fff;
	}

	@keyframes fly {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-10px);
		}
		50% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes cloud {
		from {
			left: -1000px;
		}
		to {
			left: 1000px;
		}
	}

	@keyframes up {
		20% {
			opacity: 0.7;
		}
		35% {
			left: 100px;
			opacity: 0.7;
		}
		70% {
			left: 70px;
			opacity: 0;
		}
	}
</style>
