import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import Layout from '../../components/Layout';
/**
* @author
* @function ContactUS
**/

const ContactUS = (props) => {
  return(
 <Card>


<div className="contact">
      <form>
        
        <h1>İletişim</h1>
        <label>İsim</label>
        <input name="isim" placeholder="Adınız"></input>
        <label>E-Posta</label>
        <input name="eposta" type="email" placeholder="Mail Adresiniz"></input>
        <label>İleti</label>
        <textarea name="mesaj" placeholder="Mesajınız"></textarea>
        <input id="kaydet" name="kaydet" type="submit" value="Kaydet"></input> 
      </form>  
      
</div>

</Card>


    
    

   )

 }

export default ContactUS