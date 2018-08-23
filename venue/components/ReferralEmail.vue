<template>
  <div class="container-fluid">
    <div class="row">
      <div class="column col-md-6">
        <div class="logo has-text-centered">
          <img src="~assets/logo.png" class="img-responsive">
        </div>
        <div class="content">
          <p>Merhaba,</p>
          <p>İletişim bilgileriniz, Volentix Projesi ile ilgilenebileceğinizi düşünen {{ username }} tarafından sağlandı.</p>
          <p>Volentix projesine dahil olmanın yollarından biri de,
          <a target="_blank" href="https://bitcointalk.org/">bitcointalk.org</a> imza kampanyasına katılmaktır.</p>
          <p>Eğer Bitcointalk hesabınız şu seviyelerden biriyse, siz de kampanyaya katılabilirsiniz:</p>

          <ul>
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
          <p class="top-padding">Bu imza kampanyasına katılırsanız, {{ username }} bir referans ödülü kazanacaktır. Ayrıca siz de Volentix ödül kampanyalarına
          katılarak VTX kazanma şansı elde edeceksiniz. Ödüller, bir Volentix imzası barındıran mesajların sayısına ve
          imzalı mesajların gönderim tarihine göre belirlenecektir.</p>
          <p class="text-center top-padding bold">Lütfen kayıt olmak için buraya tıklayın.</p>

          <a target="_blank" href="https://www.youtube.com/watch?v=CUSy7bVnnVg">
            <p class="player-button background has-text-centered">
              <img src="~assets/play-button.jpg" class="img-responsive">
            </p>
          </a>

          <p class="text-center padding-top-10px">Eğer siz de arkadaşlarınızı Venue web uygulamasındaki Bitcointalk imza kampanyasına katılmaya</p>
          <p class="text-center">davet etmek istiyorsanız, lütfen
          <a target="_blank" href="https://venue.volentix.io/">venue.volentix.io</a> adresini ziyaret edin ve kaydolun. Böylelikle siz</p>
          <p class="text-center padding-bottom-10px">de kendi referans kodunuzu diğerlerine gönderebilirsiniz. </p>

          <div class="background has-text-centered color-white">
            <p class="p-t-md"> Volentix, VTX tarafından desteklenen ve bir kripto para birimine dayalı merkezi olmayan bir </p>
            <p class="p-b-md">ekosistemdir
            <a target="_blank" class="color-white" href="https://volentix.io/">Volentix</a> ekosistemi hakkında kısa bir tanıtımı aşağıda bulabilirsiniz:</p>
          </div>

          <div class="clearfix padding-bottom-10px"/>

          <div class="level">
            <div class="level-item bottom-block small-logo padding-bottom-10px">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://venue.volentix.io/">
                    <img src="~assets/img1.png" class="img-responsive">
                  </a>
                </p>
                <p>Topluluk oluşturma faaliyetleri veya Volentix ekosistemine yapılıp topluluğa fayda sağlayan katkılar karşılığında
                kullanıcıların VTX jetonlarını kazanmalarını sağlayan dinamik bir topluluk platformudur. Yol haritası: Temmuz
                2018'de yayımlandı.
                </p>
              </div>
            </div>
            <div class="level-item bottom-block small-logo padding-bottom-10px">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">
                    <img src="~assets/img2.png" class="img-responsive">
                  </a>
                </p>
                <p>EOS üzerine kurulu merkezi olmayan bir kripto para birimi takas aracıdır. Kripto kullanıcılarının farklı blokzincirleri
                arasında eşler arası finansal işlemler gerçekleştirmelerini sağlar. Kullanıcı bilgileri ile menkul kıymetleri
                merkezi bir yerde depolamaz ve kaydetmez.
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">
                  VDEX tanıtım belgesi,</a> Yol haritası: 2019 ilk çeyrekte Beta yayımlanacak.
                </p>
              </div>
            </div>
          </div>

          <div class="clearfix padding-bottom-10px"/>

          <div class="level">
            <div class="level-item bottom-block small-logo padding-bottom-10px">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://venue.volentix.io/">
                    <img src="~assets/img3.png" class="img-responsive">
                  </a>
                </p>
                <p>TVDEX ve Volentix Ekosistemindeki diğer DApp'lar üzerinde kullanılabilen yerel ve çok sayıda para birimini destekleyen
                cüzdan. Yol haritası: Lütfen
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">VDEX tanıtım belgesine</a> göz atın.
                </p>
              </div>
            </div>
            <div class="level-item bottom-block small-logo padding-bottom-10px">
              <div>
                <p class="has-text-centered">
                  <a target="_blank" href="https://s3.ca-central-1.amazonaws.com/volentix/VDexWhitePaper-v0.1.0.pdf">
                    <img src="~assets/img4.png" class="img-responsive">
                  </a>
                </p>
                <p>Kripto para birimlerini analiz etmek için makine öğrenim algoritmalarını kullanan analitik bir motor olup, verilerini
                şu kaynaklardan alır: Piyasa Verileri, Sosyal duyarlılık analizi, Teknik analizler. Yol haritası: Tanıtım belgesi
                2018 yazı.
                </p>
              </div>
            </div>
          </div>

          <div class="clearfix padding-bottom-10px"/>

          <p class="bold padding-top-10px padding-bottom-10px text-center font-size-16px has-text-centered">Bizi Sosyal Medya Üzerinde Takip Edin</p>

          <div class="icons text-center padding-top-10px padding-bottom-10px">
            <div class="level">
              <div class="level-item">
                <a target="_blank" href="https://twitter.com/Volentix">
                  <img src="~assets/icon1.png" class="img-responsive">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://t.me/volentix">
                  <img src="~assets/icon2.png" class="img-responsive">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://github.com/Volentix">
                  <img src="~assets/icon3.png" class="img-responsive">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://www.linkedin.com/company/volentix-labs/">
                  <img src="~assets/icon4.png" class="img-responsive">
                </a>
              </div>
              <div class="level-item">
                <a target="_blank" href="https://www.youtube.com/channel/UCGjUbCE-kht1gK6y5neD1cQ">
                  <img src="~assets/icon5.png" class="img-responsive">
                </a>
              </div>
            </div>
          </div>

          <div class="clearfix padding-bottom-10px"/>

          <div class="level">
            <div class="level-item bottom-block has-text-centered">
              <a target="_blank" href="https://volentix.io/">
                <img src="~assets/img5.png">
              </a>
            </div>
            <div class="level-item bottom-block has-text-centered">
              <a href="https://volentix.io/" class="btn btn-primary custom-btn">Volentix.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

<style scoped>
.row {
  color: #4f0357;
  font-size: 14px;
  font-family: Calibri, Helvetica, Arial, sans-serif;
  padding-top: 60px;
  padding-bottom: 40px;
}
p {
  margin-bottom: 0;
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
  width: 250px;
}
.content {
  padding: 20px;
}
.content ul {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 0;
}
.content p.top-padding {
  padding-top: 25px;
}
.content p.bold {
  font-size: 18px;
  font-family: Calibri, Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: rgb(79, 3, 87);
}
.content .background {
  background-color: rgb(61, 2, 67);
}
.content .player-button {
  margin-top: 10px;
}
.content .player-button img {
  width: 250px;
  margin: 0 auto;
  padding: 15px 0;
}
.content .padding-top-10px {
  padding-top: 10px;
}
.content .padding-bottom-10px {
  padding-bottom: 10px;
}
.content .color-white {
  color: white;
}

.content .small-logo img {
  width: 150px;
  margin: 0 auto;
  height: 50px;
}

.content .font-size-16px {
  font-size: 16px !important;
}

.content .icons img {
  width: 30px;
  margin: 0 auto;
}

.content .footer img {
  width: 200px;
  padding-left: 25px;
}
.content .custom-btn {
  background-color: rgb(61, 2, 67);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 0;
  outline: none;
  margin-top: 15px;
  margin-left: 25px;
  font-weight: bold;
}

.bottom-block {
  width: 50% !important;
  margin-bottom: auto;
}

.bottom-block img {
  width: 60%;
}
</style>
