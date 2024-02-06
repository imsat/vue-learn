<template>
  <div :class="{ 'rtl': isRtl, 'dark-mode': isDarkMode }" class="font-sans h-screen flex bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r" :class="{ 'hidden': !isSidebarVisible }">
      <div class="flex items-center justify-between p-4 border-b">
        <div class="text-xl font-semibold">Admin Panel</div>
        <button @click="toggleSidebar">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <nav class="py-4">
        <router-link to="/" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Dashboard</router-link>
        <router-link to="/users" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Users</router-link>
        <router-link to="/products" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Products</router-link>
        <!-- Add more menu items as needed -->
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <!-- Page Title -->
      <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>

      <!-- Main Content Area -->
      <div class="bg-white p-6 rounded-md shadow-md">
        <!-- Your dashboard content goes here -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarVisible: true,
      isRtl: false,
      isDarkMode: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    toggleRtl() {
      this.isRtl = !this.isRtl;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style>
/* Add your global styles here */
</style>
