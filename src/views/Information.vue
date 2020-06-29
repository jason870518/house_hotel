<template>
  <div class="containers" v-if="roomInfo">
    <loading
      :active.sync="isLoading"
      loader="dots"
      color="#38470B"
      background-color="#000"
    ></loading>
    <div class="roomimgGroup">
      <router-link class="back" to="/Home">
        <font-awesome-icon :icon="['fas', 'chevron-left']" /> 查看其他房型
      </router-link>
      <div class="slide-wrap">
        <input type="radio" name="r" id="r1" checked />
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />

        <div
          class="slide s1"
          id="slide_1"
          :style="{ backgroundImage: 'url(' + imageUrl[0] + ')' }"
        ></div>
        <div
          class="slide"
          id="slide_2"
          :style="{ backgroundImage: 'url(' + imageUrl[1] + ')' }"
        ></div>
        <div
          class="slide"
          id="slide_3"
          :style="{ backgroundImage: 'url(' + imageUrl[2] + ')' }"
        ></div>

        <div class="navigation">
          <label for="r1" id="dot1" class="bar"></label>
          <label for="r2" id="dot2" class="bar"></label>
          <label for="r3" id="dot3" class="bar"></label>
        </div>
      </div>

      <div class="content">
        <h1>${{ roomInfo.normalDayPrice }} <span>/ &nbsp;1晚</span></h1>
        <button
          type="button"
          class="btn"
          data-toggle="modal"
          data-target="#booking"
        >
          Booking now
        </button>
      </div>
    </div>

    <div class="info">
      <div class="roominfo">
        <div class="roomtitle">
          <h1>{{ roomInfo.name }}</h1>
          <p>
            {{ descriptionShort.GuestMax }}人・床型
            {{ descriptionShort.Bed[0] }}・ 附早餐・衛浴{{
              descriptionShort['Private-Bath']
            }}間・{{ descriptionShort.Footage }}平方公尺
          </p>
        </div>

        <div class="checkinfo">
          <span class="price"
            >平日（一～四）價格：${{ roomInfo.normalDayPrice }}/
            假日（五〜日）價格：${{ roomInfo.holidayPrice }}</span
          ><br />
          <span class="checkintime"
            >入住時間：{{ checkInAndOut.checkInEarly }}（最早）/
            {{ checkInAndOut.checkInLate }}（最晚）</span
          ><br />
          <span class="checkouttime"
            >退房時間：{{ checkInAndOut.checkOut }}</span
          >
        </div>

        <ul>
          <li>・單人間僅供一位客人使用。</li>
          <li>・臥室配有單人床和私人浴室。</li>
          <li>
            ・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。
          </li>
          <li>・房間裡有AC，當然還有WiFi。</li>
        </ul>

        <div class="roomAmenitiesGroup">
          <div
            class="breakfast amenitiesIcon"
            data-amenities="Breakfast"
            :class="{ norIcon: !amenities.Breakfast }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities.Breakfast"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/breakfast-Icon.png" alt="" />
            <p>早餐</p>
          </div>

          <div
            class="minibar amenitiesIcon"
            data-amenities="Mini-Bar"
            :class="{ norIcon: !amenities['Mini-Bar'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Mini-Bar']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/miniBar-Icon.png" alt="" />
            <p>Mini Bar</p>
          </div>

          <div
            class="roomservice amenitiesIcon"
            data-amenities="Room-Service"
            :class="{ norIcon: !amenities['Room-Service'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Room-Service']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/RoomService-Icon.png" alt="" />
            <p>Room Service</p>
          </div>

          <div
            class="wifi amenitiesIcon"
            data-amenities="Wi-Fi"
            :class="{ norIcon: !amenities['Wi-Fi'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Wi-Fi']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/wifi-Icon.png" alt="" />
            <p>Wifi</p>
          </div>

          <div
            class="child amenitiesIcon"
            data-amenities="Child-Friendly"
            :class="{ norIcon: !amenities['Child-Friendly'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Child-Friendly']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/child-Icon.png" alt="" />
            <p>適合兒童</p>
          </div>

          <div
            class="television amenitiesIcon"
            data-amenities="Television"
            :class="{ norIcon: !amenities.Television }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities.Television"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/television-Icon.png" alt="" />
            <p>電視</p>
          </div>

          <div
            class="greatview amenitiesIcon"
            data-amenities="Great-View"
            :class="{ norIcon: !amenities['Great-View'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Great-View']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/greatView-Icon.png" alt="" />
            <p>漂亮的視野</p>
          </div>

          <div
            class="refrigerator amenitiesIcon"
            data-amenities="Refrigerator"
            :class="{ norIcon: !amenities.Refrigerator }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities.Refrigerator"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/refrigerator-Icon.png" alt="" />
            <p>冰箱</p>
          </div>

          <div
            class="sofa amenitiesIcon"
            data-amenities="Sofa"
            :class="{ norIcon: !amenities.Sofa }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities.Sofa"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/Sofa-Icon.png" alt="" />
            <p>沙發</p>
          </div>

          <div
            class="petfriendly amenitiesIcon"
            data-amenities="Pet-Friendly"
            :class="{ norIcon: !amenities['Pet-Friendly'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Pet-Friendly']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/petFriendly-Icon.png" alt="" />
            <p>攜帶寵物</p>
          </div>

          <div
            class="smokefree amenitiesIcon"
            data-amenities="Smoke-Free"
            :class="{ norIcon: !amenities['Smoke-Free'] }"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Smoke-Free']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <img src="@/assets/image/smokeFree-Icon.png" alt="" />
            <p>全面禁菸</p>
          </div>

          <div
            class="airconditioner amenitiesIcon"
            data-amenities="Air-Conditioner"
            :class="{ norIcon: !amenities['Air-Conditioner'] }"
          >
            <img src="@/assets/image/airConditioner-Icon.png" alt="" />
            <font-awesome-icon
              class="icon"
              :icon="['fa', 'check-circle']"
              v-if="amenities['Air-Conditioner']"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'times-circle']"
              v-else
            />
            <p>空調</p>
          </div>
        </div>

        <p>空房狀態查詢</p>
        <vc-calendar
          is-expanded
          :columns="2"
          :step="1"
          :min-date="new Date()"
          v-model="selectedDate"
        ></vc-calendar>
      </div>
    </div>

    <section id="booking" class="bookingnow modal fade">
      <div class="booking-container modal-dialog">
        <div class="modal-content">
          <a href="" class="close" data-dismiss="modal">
            <font-awesome-icon :icon="['fa', 'times']" />
            <!-- <i class="fa fa-close" aria-hidden="true"></i> -->
          </a>

          <div class="checkformContent">
            <form action="" class="checkform">
              <label for="name">姓名</label>
              <input type="text" id="name" />
              <label for="phone">手機號碼</label>
              <input type="text" id="phone" />
              <label for="startDate">入住日期</label>
              <vc-date-picker v-model="startDate" />
              <!-- <input type="text" id="startDate" /> -->
              <label for="endDate">退房日期</label>
              <vc-date-picker v-model="endDate" />
              <!-- <input type="text" id="endDate" /> -->
              <p class="dayNight">{{ day }}天，總共{{ day }}晚</p>
              <hr />
              <p class="totalprice">
                總計<br />
                <span>${{ totalnum }}</span>
              </p>

              <a href="" class="finishbtn" @click="bookingstatus = false"
                >確認送出</a
              >
              <p class="text">此預約系統僅預約功能，並不會對您進行收費</p>
            </form>
          </div>

          <div class="checkContent">
            <div class="checkTitle">
              <h1 class="checktitle">{{ roomInfo.name }}</h1>
            </div>
            <p class="bookingRoomSize">
              {{ descriptionShort.GuestMax }}人・床型
              {{ descriptionShort.Bed[0] }}・ 附早餐・衛浴{{
                descriptionShort['Private-Bath']
              }}間・{{ descriptionShort.Footage }}平方公尺
            </p>
            <p class="bookingCheckIn">
              平日（一～四）價格：${{ roomInfo.normalDayPrice }}/
              假日（五〜日）價格：${{ roomInfo.holidayPrice }}
            </p>
            <div class="bookingAmenities">
              <div
                class="breakfast bookingIcon"
                data-amenities="Breakfast"
                v-if="amenities.Breakfast"
              >
                <img src="@/assets/image/breakfast-Icon.png" alt="" />
                <p>早餐</p>
              </div>

              <div
                class="minibar bookingIcon"
                data-amenities="Mini-Bar"
                v-if="amenities['Moni-Bar']"
              >
                <img src="@/assets/image/miniBar-Icon.png" alt="" />
                <p>Mini Bar</p>
              </div>

              <div
                class="roomservice bookingIcon"
                data-amenities="Room-Service"
                v-if="amenities['Room-Service']"
              >
                <img src="@/assets/image/RoomService-Icon.png" alt="" />
                <p>Room Service</p>
              </div>

              <div
                class="wifi bookingIcon"
                data-amenities="Wi-Fi"
                v-if="amenities['Wi-Fi']"
              >
                <img src="@/assets/image/wifi-Icon.png" alt="" />
                <p>Wifi</p>
              </div>

              <div
                class="child bookingIcon"
                data-amenities="Child-Friendly"
                v-if="amenities['Child-Friendly']"
              >
                <img src="@/assets/image/child-Icon.png" alt="" />
                <p>適合兒童</p>
              </div>

              <div
                class="television bookingIcon"
                data-amenities="Television"
                v-if="amenities.Televison"
              >
                <img src="@/assets/image/television-Icon.png" alt="" />
                <p>電腦</p>
              </div>

              <div
                class="greatview bookingIcon"
                data-amenities="Great-View"
                v-if="amenities['Great-View']"
              >
                <img src="@/assets/image/greatView-Icon.png" alt="" />
                <p>漂亮的視野</p>
              </div>

              <div
                class="refrigerator bookingIcon"
                data-amenities="Refrigerator"
                v-if="amenities.Refrigerator"
              >
                <img src="@/assets/image/refrigerator-Icon.png" alt="" />
                <p>冰箱</p>
              </div>

              <div
                class="sofa bookingIcon"
                data-amenities="Sofa"
                v-if="amenities.Sofa"
              >
                <img src="@/assets/image/Sofa-Icon.png" alt="" />
                <p>沙發</p>
              </div>

              <div
                class="petfriendly bookingIcon"
                data-amenities="Pet-Friendly"
                v-if="amenities['Pet-Friendly']"
              >
                <img src="@/assets/image/petFriendly-Icon.png" alt="" />
                <p>攜帶寵物</p>
              </div>

              <div
                class="smokefree bookingIcon"
                data-amenities="Smoke-Free"
                v-if="amenities['Smoke-Free']"
              >
                <img src="@/assets/image/smokeFree-Icon.png" alt="" />
                <p>全面禁菸</p>
              </div>

              <div
                class="airconditioner bookingIcon"
                data-amenities="Air-Conditioner"
                v-if="amenities['Air-Conditioner']"
              >
                <img src="@/assets/image/airConditioner-Icon.png" alt="" />
                <p>空調</p>
              </div>
            </div>
            <div class="bookingInfoContent">
              <p class="bookingInfotitle">訂房資訊</p>
            </div>
            <ul class="bookingInfoText">
              <li>
                ・入住時間：最早15：00，最晚21：00；退房時間：10：00，請自行確認行程安排。
              </li>
              <li>・平日定義週一至週四；假日定義週五至週日及國定假日。</li>
              <li>・好室旅店全面禁止吸菸。</li>
              <li>
                ・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六
                10:00 - 18:00 )。
              </li>
            </ul>
            <div class="booingProcessContent">
              <p class="bookingProcesstitle">預約流程</p>
            </div>
            <div class="bookingProcessChart">
              <div class="ChartOne chart">
                <div class="chartImg">
                  <img src="@/assets/image/chartOne.png" alt="" />
                </div>
                <p>送出線上預約單</p>
              </div>

              <div class="nextIcon">
                <p>
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
                  <!-- <i class="fas fa-chevron-right" aria-hidden="true"></i> -->
                </p>
              </div>

              <div class="ChartTwo chart">
                <div class="chartImg">
                  <img src="@/assets/image/chartTwo.png" alt="" />
                </div>
                <p>
                  系統立即回覆是否預訂成功 並以簡訊發送訂房通知<br />(若未收到簡訊請來電確認)
                </p>
              </div>

              <div class="nextIcon">
                <p>
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
                  <!-- <i class="fas fa-chevron-right" aria-hidden="true"></i> -->
                </p>
              </div>

              <div class="ChartThree chart">
                <div class="chartImg">
                  <img src="@/assets/image/chartThree.png" alt="" />
                </div>
                <p>
                  入住當日憑訂房通知 以現金或刷卡付款即可<br />(僅接受VISA.JCB.銀聯卡)
                </p>
              </div>
            </div>
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
    // Data used by the date picker
    return {
      mode: 'single',
      selectedDate: null,
      id: '',
      roomInfo: {},
      descriptionShort: {
        Bed: [],
        GuestMax: '',
        PrivateBath: '',
      },
      checkInAndOut: {
        checkInEarly: '',
        checkInLate: '',
        checkOut: '',
      },
      imageUrl: [],
      amenities: {
        'Air-Conditioner': false,
        Breakfast: false,
        'Child-Friendly': false,
        'Great-View': false,
        'Mini-Bar': false,
        'Pet-Friendly': false,
        Refrigerator: false,
        'Room-Service': false,
        'Smoke-Free': false,
        Sofa: false,
        Television: false,
        'Wi-Fi': false,
      },
      //   total: 0,
      startDate: new Date(),
      endDate: new Date(),
      isLoading: false,
    };
  },
  computed: {
    day() {
      const vm = this;
      let days = vm.endDate - vm.startDate;
      let day = parseInt(days / (1000 * 60 * 60 * 24)) + 1;
      return day;
    },
    totalnum() {
      return this.day * this.roomInfo.normalDayPrice;
    },
  },
  methods: {
    getRoom() {
      const vm = this;
      vm.id = vm.$route.params.id;
      const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.id}`;
      const aut =
        'Bearer 0dU6jTw5gCELzulLuNgvXna0UTAuygjhGdUvEKblySmHBuWB7tHRvomiGfaq';
      vm.isLoading = true;
      this.$http
        .get(url, {
          headers: { Accept: 'application/json', Authorization: aut },
        })
        .then((response) => {
          console.log(response.data);
          vm.roomInfo = response.data.room[0];
          vm.descriptionShort = response.data.room[0].descriptionShort;
          vm.checkInAndOut = response.data.room[0].checkInAndOut;
          vm.imageUrl = response.data.room[0].imageUrl;
          console.log(response.data.room[0].amenities);
          vm.amenities = response.data.room[0].amenities;
          vm.isLoading = false;
        });
    },
    routeToinfo() {
      const vm = this;
      vm.$router.push({
        name: 'Booking',
      });
    },
  },
  created() {
    this.getRoom();
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/information.sass'
@import '@/assets/_booking.sass'
</style>
