<template>
  <div>
    <p class="email-body">
      Merhaba,</p>
    <p class="email-body">
      İletişim bilgileriniz, Volentix Projesi ile ilgilenebileceğinizi düşünen {{ username }} tarafından sağlandı.
    </p>
    <p class="email-body">Volentix projesine dahil olmanın yollarından biri de, bitcointalk.org imza kampanyasına katılmaktır.</p>
    <p class="email-body">Eğer Bitcointalk hesabınız şu seviyelerden biriyse, siz de kampanyaya katılabilirsiniz:</p>
    <br>
    <p class="p-l-md">
      <ul>
        <li style="font-size:14px">Üye (Member)</li>
        <li style="font-size:14px">Tam Üye (Full Member)</li>
        <li style="font-size:14px">Eski Üye (Sr. Member)</li>
        <li style="font-size:14px">Kahraman Üye (Hero Member)</li>
        <li style="font-size:14px">Efsane (Legendary)</li>
      </ul>
    </p>
    <br>
    <p class="email-body">
      Çoğu imza ödül kampanyası, imza barındıran mesajların manuel olarak takip edilmesini gerektirir. Venue ise, bu takip işlemini otomatikleştirmiştir ve güncel sonuçları bir skor tablosu üzerinde yayımlar. Volentix imzasını mesajlarınıza eklemek kolaydır ve kazandığınız VTX'leri anlık olarak görebildiğiniz için hem şeffaf, hem de eğlenceli bir sistemdir.
    </p>
    <br>
    <p class="email-body">
      Bu imza kampanyasına katılırsanız, XXXXXX bir referans ödülü kazanacaktır. Ayrıca siz de Volentix ödül kampanyalarına katılarak VTX kazanma şansı elde edeceksiniz. Ödüller, bir Volentix imzası barındıran mesajların sayısına ve imzalı mesajların gönderim tarihine göre belirlenecektir.
    </p>
    <a href="https://venue.volentix.io/" style="color:rgb(79,3,87);font-family:Calibri,Helvetica,Arial,sans-serif;font-size:18px;font-style:normal;font-weight:bold;text-decoration:none" target="_blank"
       data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://venue.volentix.io/&amp;source=gmail&amp;ust=1534601263065000&amp;usg=AFQjCNHGsIXpgDw1HVrJvRA6SNV-eqAj6Q">Lütfen kayıt
       olmak için
       buraya tıklayın.</a>
    <a :href="toSignUp">Follow this link to sign up</a>
  </div>
</template>

<script>
export default {
  data() {
    let data = {
      toSignUp: "",
      username: ""
    };
    return data;
  },
  mounted() {
    this.toSignUp +=
      location.protocol +
      "//" +
      location.host +
      "/signup?referrer_name=" +
      this.$route.query.referrer_name +
      "&code=" +
      this.$route.query.code;
    this.username = this.$route.query.referrer_name;
  },
  methods: {}
};
</script>

<style>
.email-body {
  font-family: Calibri, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
}
</style>
