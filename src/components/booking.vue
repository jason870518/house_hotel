<template>
  <div>
    <section id="booking" class="bookingnow modal fade">
      <div class="booking-container modal-dialog">
        <div class="modal-content">
          <a href="" class="close" data-dismiss="modal">
            <font-awesome-icon :icon="['fa', 'times']" />
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

              <a href="" class="finishbtn">確認送出</a>
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

<style lang="sass" scoped>
@import '@/assets/_booking.sass'
</style>
