<template>
    <div class="icon-bar">
        <router-link to="/home"><i class="fa fa-home"></i></router-link> 
        <router-link to="/about"><i class="fas fa-question"></i></router-link>         
    </div>
</template>

<style>
.icon-bar {
    height: 100%;
    width: 90px;
    background-color: #fff;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    /*z-index: 1;*/ /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 0;
  }

  .icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: #5D54A4;
    font-size: 36px;

  }

  .icon-bar a:hover {
    background-color: #858585;
  }

  .active {
    background-color: #ffcc80;
  }

</style>