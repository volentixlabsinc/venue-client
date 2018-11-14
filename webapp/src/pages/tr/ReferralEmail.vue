<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="row p-t-xl p-b-lg">
        <div class="logo has-text-centered">
          <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/logo.png">
        </div>
        <div class="content">
          <p class="no-padding">Merhaba,</p>
          <p class="no-padding">İletişim bilgileriniz, Volentix Projesi ile ilgilenebileceğinizi düşünen {{ username }} tarafından sağlandı.</p>
          <p class="no-padding">Volentix projesine dahil olmanın yollarından biri de,
          <a target="_blank" href="https://bitcointalk.org/">bitcointalk.org</a> imza kampanyasına katılmaktır.</p>
          <p class="no-padding">Eğer Bitcointalk hesabınız şu seviyelerden biriyse, siz de kampanyaya katılabilirsiniz:</p>

          <ul class="p-t-md p-b-md">
            <li>Üye (Member)</li>
            <li>Tam Üye (Full Member)</li>
            <li>Eski Üye (Sr. Member)</li>
            <li>Kahraman Üye (Hero Member)</li>
            <li>Efsane (Legendary)</li>
          </ul>

          <p>Çoğu imza ödül kampanyası, imza barındıran mesajların manuel olarak takip edilmesini gerektirir. Venue ise, bu
          takip işlemini otomatikleştirmiştir ve güncel sonuçları bir skor tablosu üzerinde yayımlar. Volentix imzasını
          mesajlarınıza eklemek kolaydır ve kazandığınız VTX'leri anlık olarak görebildiğiniz için hem şeffaf, hem de eğlenceli
          bir sistemdir. </p>

          <p>Bu imza kampanyasına katılırsanız, {{ username }} bir referans ödülü kazanacaktır. Ayrıca siz de Volentix ödül kampanyalarına
          katılarak VTX kazanma şansı elde edeceksiniz. Ödüller, bir Volentix imzası barındıran mesajların sayısına ve
          imzalı mesajların gönderim tarihine göre belirlenecektir.</p>
          <p class="has-text-centered bold is-size-5">
            <a :href="toSignUp" class="has-text-centered bold">Lütfen kayıt olmak için buraya tıklayın.</a>
          </p>
          <a target="_blank" href="https://www.youtube.com/watch?v=CUSy7bVnnVg">
            <p class="player-button background has-text-centered">
              <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/play-button.jpg">
            </p>
          </a>

          <div class="clearfix p-b-md"/>

          <p class="has-text-centered">Eğer siz de arkadaşlarınızı Venue web uygulamasındaki Bitcointalk imza kampanyasına katılmaya davet etmek istiyorsanız, lütfen <a target="_blank" href="https://venue.volentix.io/">venue.volentix.io</a> adresini ziyaret edin ve kaydolun. Böylelikle siz de kendi referans kodunuzu diğerlerine gönderebilirsiniz. </p>

          <div class="background has-text-centered color-white">
            <p class="p-t-md"> Volentix, VTX tarafından desteklenen ve bir kripto para birimine dayalı merkezi olmayan bir </p>
            <p class="p-b-md">ekosistemdir
            <a target="_blank" class="color-white" href="https://volentix.io/">Volentix</a> ekosistemi hakkında kısa bir tanıtımı aşağıda bulabilirsiniz:</p>
          </div>

          <div class="clearfix p-b-md"/>

          <div class="level">
            <div class="level-item bottom-block p-b-sm">
              <div>
                <p class="has-text-centered p">
                  <a target="_blank" href="https://venue.volentix.io/">
                    <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/img1.png">
                  </a>
                </p>
                <p class="p-r-sm p-l-sm">Topluluk oluşturma faaliyetleri veya Volentix ekosistemine yapılıp topluluğa fayda sağlayan katkılar karşılığında
                kullanıcıların VTX jetonlarını kazanmalarını sağlayan dinamik bir topluluk platformudur. Yol haritası: Temmuz
                2018'de yayımlandı.
                </p>
              </div>
            </div>
            <div class="level-item bottom-block p-b-sm">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">
                    <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/img2.png">
                  </a>
                </p>
                <p class="p-r-sm p-l-sm">EOS üzerine kurulu merkezi olmayan bir kripto para birimi takas aracıdır. Kripto kullanıcılarının farklı blokzincirleri
                arasında eşler arası finansal işlemler gerçekleştirmelerini sağlar. Kullanıcı bilgileri ile menkul kıymetleri
                merkezi bir yerde depolamaz ve kaydetmez.
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">
                  VDEX tanıtım belgesi,</a> Yol haritası: 2019 ilk çeyrekte Beta yayımlanacak.
                </p>
              </div>
            </div>
          </div>

          <div class="clearfix p-b-sm"/>

          <div class="level">
            <div class="level-item bottom-block p-b-sm">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://venue.volentix.io/">
                    <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/img3.png">
                  </a>
                </p>
                <p class="p-r-sm p-l-sm">TVDEX ve Volentix Ekosistemindeki diğer DApp'lar üzerinde kullanılabilen yerel ve çok sayıda para birimini destekleyen
                cüzdan. Yol haritası: Lütfen
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">VDEX tanıtım belgesine</a> göz atın.
                </p>
              </div>
            </div>
            <div class="level-item bottom-block p-b-sm">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">
                    <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/img4.png">
                  </a>
                </p>
                <p class="p-r-sm p-l-sm">Kripto para birimlerini analiz etmek için makine öğrenim algoritmalarını kullanan analitik bir motor olup, verilerini
                şu kaynaklardan alır: Piyasa Verileri, Sosyal duyarlılık analizi, Teknik analizler. Yol haritası: Tanıtım belgesi
                2018 yazı.
                </p>
              </div>
            </div>
          </div>

          <div class="clearfix p-b-sm"/>

          <p class="bold p-t-sm p-b-sm text-center is-size-6 has-text-centered">Bizi Sosyal Medya Üzerinde Takip Edin</p>

          <div class="icons text-center p-t-sm p-b-sm">
            <div class="level">
              <div class="level-item">
                <a target="_blank" href="https://twitter.com/Volentix">
                  <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/icon1.png">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://t.me/volentix">
                  <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/icon2.png">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://github.com/Volentix">
                  <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/icon3.png">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://www.linkedin.com/company/volentix-labs/">
                  <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/icon4.png">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://www.youtube.com/channel/UCGjUbCE-kht1gK6y5neD1cQ">
                  <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/icon5.png">
                </a>
              </div>
            </div>
          </div>

          <div class="clearfix p-b-sm"/>

          <div class="level">
            <div class="level-item bottom-block has-text-centered logo-bottom">
              <a target="_blank" href="https://volentix.io/">
                <img src="http://dm7lsapjc0ehv.cloudfront.net/referral-email/img5.png">
              </a>
            </div>
            <div class="level-item bottom-block has-text-centered">
              <a href="https://volentix.io/" class="btn btn-primary custom-btn">Volentix.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "email",
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
      "/signup?code=" +
      this.$route.query.code;
    this.username = this.$route.query.referrer_name;
  }
};
</script>

<style scoped>
.row {
  color: black;
  font-size: 0.9rem;
  font-family: Calibri, Helvetica, Arial, sans-serif;
}
.no-padding {
  margin-bottom: 0 !important;
}
.row li {
  margin: 0;
}
a,
a:hover,
a:link,
a:visited {
  color: rgb(152, 5, 168);
  text-decoration: underline;
}
.logo img {
  margin: 0 auto;
  width: 16rem;
}
.content {
  padding: 2rem;
}
.content p.bold {
  font-family: Calibri, Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: rgb(79, 3, 87);
}
.content .background {
  background-color: rgb(61, 2, 67);
}
.content .player-button {
  margin-top: 1rem;
}
.content .player-button img {
  width: 15rem;
  margin: 0 auto;
  padding: 1rem 0;
}
.content .color-white {
  color: white;
}
.content .icons img {
  width: 2rem;
  margin: 0 auto;
}
.content .custom-btn {
  background-color: rgb(61, 2, 67);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 0;
  outline: none;
  margin-top: 1rem;
  margin-left: 2rem;
  font-weight: bold;
}
.bottom-block {
  width: 40% !important;
  margin-bottom: auto;
}
.bottom-block img {
  height: 2rem;
}
</style>
