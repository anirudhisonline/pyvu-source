<script>
	import { onMount,afterUpdate } from "svelte";
    
    import { goto } from '$app/navigation';
    
    import sdk from "$lib/appwrite.js";
    let loggedin;
    onMount(async () => {
		
	});
</script>

<style>
    
</style>

<div class="container mx-auto px-4 py-8">
  
<div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="/hero_img.svg" class="max-w-sm rounded-lg " />
      <div>
        <h1 class="text-xl font-bold lg:text-5xl md:text-3xl">Simplify Your Event Management and plan spectacular events</h1>
        <p class="py-6">Effortlessly plan, organize, and collaborate on events using our powerful event
            management platform.</p>
        <button class="btn btn-primary font-bold text-xl" on:click={async()=>{
            const res = await sdk.getlogin();
		if(res){
            loggedin=true;
            goto('./app')
        }
        else
        {
            loggedin=false;
            goto('./auth')
        }
        }}>Get Started ஃ</button>
      </div>
    </div>
  </div>

  <h2 class="text-center text-5xl font-bold mb-12">Key Features</h2>
  <div class="flex flex-wrap items-center justify-center">
  <div class="card w-80 m-4 bg-base-100 shadow-xl">
    <figure><img src="/f1.png" alt=""></figure>
    <div class="card-body">
      <h2 class="card-title">Shared To-Do List</h2>
      <p>Collaborate with your team or friends using a shared to-do list. Add, complete,
        and delete tasks in real-time.</p>
    </div>
  </div>

  <div class="card w-80 m-4 bg-base-100 shadow-xl">
    <figure><img src="/f2.png" alt=""></figure>
    <div class="card-body">
      <h2 class="card-title">Real-Time Chat</h2>
      <p>Stay connected and communicate with event attendees through our real-time chat
        feature.</p>
    </div>
  </div>

  <div class="card w-80 m-4 bg-base-100 shadow-xl">
    <figure><img src="/f3.png" alt=""></figure>
    <div class="card-body">
      <h2 class="card-title">RSVP easily</h2>
      <p>Track the number of people attending your event, and view their names for better
        planning and organization.</p>
    </div>
  </div>

  <div class="card w-80 m-4 bg-base-100 shadow-xl">
    <figure><img src="/f4.png" alt=""></figure>
    <div class="card-body">
      <h2 class="card-title">Flexible Event Details</h2>
      <p>Specify event details such as date, location, description, and choose between
        online or offline events and customise your invite page aswell.</p>
    </div>
  </div>

</div>
    
   
    
  </div>

