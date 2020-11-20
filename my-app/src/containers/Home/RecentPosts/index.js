import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';
import {NavLink}from 'react-router-dom';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
       
    <div style={props.style}>
        <Card style={{marginBottom:'20px'}}>
                    <div className="postImageWrapper">
                        <img src={"https://www.halildurmus.com/wp-content/uploads/2020/02/231-1024x576.jpg"} alt="" />
                    </div>

                    <div style={{textAlign:'center'}}>
                      <span>Teknoloji</span>
                      <h2>Ekran Teknolojileri Gelişiyor</h2>
                      <span>Tarih:  25 Ocak, 2020 Yazar: Hamza Durmuş</span>
                      <p>Dev teknoloji firmaları ekran teknolojileri konusunda hayatımıza her gün yenilikler katıyor. Gelişen AR-GE, yapay zeka 
                        sistemleri ve çok daha fazlasıyla yıllarca hayal ürünü olarak anılan akıllı teknolojiler bugün gerçek oluyor. ...</p>                      
                      <button>Daha fazla Oku..</button>
                    </div>
        </Card>
        <Card style={{marginBottom:'20px'}}>
                    <div className="postImageWrapper">
                        <img src={"https://miro.medium.com/max/3000/1*hycgtWGVfT8htfcML2lxRw.png"} alt="" />
                    </div>

                    <div style={{textAlign:'center'}}>
                      <span>Teknoloji</span>
                      <h2>İşlemci (CPU – Merkezi İşlem Birimi)</h2>
                      <span>Tarih:  22 Ocak, 2020 Yazar: Kerem Durmuş</span>
                      <p>Bilgisayarın yaptığı tüm görevleri yürüten, yönlendiren ve bilgisayarın adeta beyni gibi tüm işlemleri 
                        yapan donanım birimidir. Bilgisayarda işlemler yürütülürken kendisine verilen komutları yerine getiren en 
                        önemli bileşene işlemci denir. Milyonlarca transistörlerden oluşmuştur....</p>                      
                      <button>Daha fazla Oku..</button>
                    </div>
        </Card>
        <Card style={{marginBottom:'20px' }}>
                    <div className="postImageWrapper">
                        <img src={"https://www.halildurmus.com/wp-content/uploads/2019/04/37.jpg"} alt="" />
                    </div>

                    <div style={{textAlign:'center'}}>
                      <span>Sağlık</span>
                      <h2>Vücudumuzda İlaç Taşıyan Nano Robotlar</h2>
                      <span>Tarih:  15 Ocak, 2020 Yazar: Fatih Durmuş</span>
                      <p>Tedavi amaçlı ilaçların vücutta hedeflenen bölgelere ulaştırılması için küçük robotların kullanımı konusund
                         çeşitli uygulamalar geliştiriliyor. Bu sayede ilaçlardaki etken maddelerin tedavi edilecek bölgeye
                          ulaştırılması ve kontrollü bir şekilde salınımının sağlanması hedefleniyor...</p>                      
                      <button>Daha fazla Oku..</button>
                    </div>
        </Card>
        <Card style={{marginBottom:'20px' }}>
                    <div className="postImageWrapper">
                        <img src={"https://www.halildurmus.com/wp-content/uploads/2020/01/54.png"} alt="" />
                    </div>

                    <div style={{textAlign:'center'}}>
                      <span>Bilimsel</span>
                      <h2>Yapay zekayı kandırmak mı?</h2>
                      <span>Tarih:  11 Ocak, 2020 Yazar: Derviş Durmuş</span>
                      <p>Derin öğrenme ile eğitilmiş yapay zekâ uygulamaları, günlük hayatımızın bir parçası oldular. Örüntü tanıma
                         konusunda çok başarılılar. Görüntü ve konuşma da dâhil olmak üzere her türlü veriyi sınıflandırabiliyorlar.
                          Otomatik telefon sistemlerinden, otonom araçları idare etmeye ve hastalara teşhis koymaya kadar pek çok
                           alanda kullanılıyorlar. Ancak yakın zamanlarda yapılan araştırmalar, derin öğrenme ile eğitilmiş yapay 
                           zekâ...</p>                      
                      <button>Daha fazla Oku..</button>
                    </div>
        </Card>
        <Card style={{marginBottom:'20px'}}>
                    <div className="postImageWrapper">
                        <img src={"https://www.tvmidtvest.dk/files/media/2020/12/20200315-123308-2_25mb.jpg"} alt="" />
                    </div>

                    <div style={{textAlign:'center'}}>
                      <span>Sağlık</span>
                      <h2>Küresel Kabus: Covid-19</h2>
                      <span>Tarih:  1 Şubat, 2020 Yazar: Halil Durmuş</span>
                      <p>Dünya Sağlık Örgütünün (WHO) uluslararası halk sağlığı acil durumu
                      ilan etmesine neden olan ve hâlihazırda devam eden, başladığı günlerde 2019-nCoV. Daha sonra WHO’nun resmi 
                      kararıyla Covid-19 olarak adlandırılan salgın, 2019’un Aralık ayının son günlerinden beri dünyanın gündeminde....</p>
                      
                      <button>Daha fazla Oku..</button>
                    </div>
        </Card>
    </div>
   )

 }

export default RecentPosts