<template>
  <div class="container mx-auto">
    <header class="bg-red-400 p-4">
      <Header />
    </header>
    <main>
      <slot name="content"> Default content </slot>
    </main>
    <footer class="bg-red-400 p-2">
      <Footer />
    </footer>
  </div>
</template>