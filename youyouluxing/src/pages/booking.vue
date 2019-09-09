<template>
  <div class="booking">
    <BookingHeader></BookingHeader>
    <BookingMain></BookingMain>
  </div>
</template>

<script>
import BookingHeader from "../components/bookingheader";
import BookingMain from "../components/bookingmain";
export default {
  name: "booking",
  components: {
    BookingHeader,
    BookingMain
  }
};
</script>

<style scoped>
</style>