<template>
  <div class="home">
    <section class="loading">
      <p class="hotelName">
        <span class="hotelSlonganTop">好室旅店 </span>。
        <span class="hotelSlonganBottom">HOUSE HOTEL</span>
      </p>
    </section>

    <section class="home">
      <!-- <carousel class="slide-wrap"> -->
      <div class="slide-wrap" id="owl-carousel">
        <input type="radio" name="r" id="r1" checked />
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />
        <input type="radio" name="r" id="r4" />
        <!-- <div class="slides"> -->
        <div class="slide s1" id="slide_1"></div>
        <div class="slide" id="slide_2"></div>
        <div class="slide" id="slide_3"></div>
        <div class="slide" id="slide_4"></div>
        <!-- </div> -->

        <div class="navigation">
          <label for="r1" id="dot1" class="bar"></label>
          <label for="r2" id="dot2" class="bar"></label>
          <label for="r3" id="dot3" class="bar"></label>
          <label for="r4" id="dot4" class="bar"></label>
        </div>
      </div>
      <!-- </carousel> -->

      <div class="homeContent container">
        <div class="homeContact">
          <img src="@/assets/image/houseHotelLogo.png" alt="" class="logo" />
          <div class="home-info">
            <p class="hometitle">好室旅店。HOUSE HOTEL</p>
            <p class="hometext">
              花蓮縣花蓮市國聯一路1號<br />
              03-8321155<br />
              HOUSE@hotel.com
            </p>
          </div>
        </div>

        <div class="homerooms">
          <div
            class="room-img"
            v-for="room in rooms"
            :key="room.id"
            @click="RouterTo(room.id)"
          >
            <p>{{ room.name }}</p>
            <img :src="room.imageUrl" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      rooms: [],
    };
  },
  methods: {
    RouterTo(id) {
      const vm = this;
      vm.$router.push({
        name: 'Information',
        params: { id: id },
      });
    },
    getAllRooms() {
      const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
      const aut =
        'Bearer 0dU6jTw5gCELzulLuNgvXna0UTAuygjhGdUvEKblySmHBuWB7tHRvomiGfaq';
      this.$http
        .get(url, {
          headers: {
            Accept: 'application/json',
            Authorization: aut,
          },
        })
        .then((response) => {
          const vm = this;
          vm.rooms = response.data.items;
        });
    },
    load() {
      // if (document.querySelector('.hotelSlonganTop') != undefined) {
      setTimeout(function() {
        document.querySelector('.hotelSlonganTop').textContent = '像家一樣';
        document.querySelector('.hotelSlonganBottom').textContent = '溫暖自在';
      }, 1700);
      // }
    },
  },
  created() {
    this.getAllRooms();
    this.load();
  },
};
</script>
