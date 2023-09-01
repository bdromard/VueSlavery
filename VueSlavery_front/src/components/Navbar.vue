<script setup>

</script>

<template>
  <nav id="navbar" class="bg-violet-eggplant relative rounded-lg p-2 z-999">
      <ul class="m-1 p-1 list-none">
      <img alt="VueSlavery logo" class="inline-block p-1"/>
        <li class="group inline-block"><a href="#" class="block group-hover:bg-teal-500">Home</a></li>
        <li class="group p-1 border-solid border-2 border-black relative dropdown inline-block m-6">
          <a href="#" class="block group-hover:bg-teal-500">Database</a>
            <ul class="group-hover:block dropdown-menu absolute hidden top-full h-auto">
              <li class="py-1"><a href="#" class="bg-red-700 block no-underline h-15 w-20 pt-15 pr-25 text-center">Table 1</a></li>
              <li class="py-1"><a href="#" class="bg-red-700 block no-underline h-15 w-20 pt-15 pr-25 text-center">Table 2</a></li>
              <li class="py-1"><a href="#" class="bg-red-700 block no-underline h-15 w-20 pt-15 pr-25 text-center">Table 3</a></li>
            </ul>
        </li>
        <li class="group p-1 relative border-solid border-2 border-black dropdown inline-block m-6">
          <a href="#" class="block group-hover:bg-teal-500">Chapters</a>
            <ul class="group-hover:block dropdown-menu absolute hidden top-full h-auto">
              <li class="py-1"><a href="#" class="bg-red-700 block no-underline h-15 w-20 pt-15 pr-30 text-center">Chapter 1</a></li>
              <li class="py-1"><a href="#" class="bg-red-700 block no-underline h-15 w-20 pt-15 pr-30 text-center">Chapter 2</a></li>
              <li class="py-1"><a href="#" class="bg-red-700 block no-underline h-15 w-20 pt-15 pr-30 text-center">Chapter 3</a></li>
            </ul>
        </li>
      </ul>    
  </nav>
</template> 
