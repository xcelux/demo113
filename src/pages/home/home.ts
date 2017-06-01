import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private facebook: Facebook
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loginFacebook(){
    this.facebook.login(['public_profile', 'email'])
    .then(rta => {
      console.log(rta.status);
      if(rta.status == 'connected'){
        this.getInfo();
      };
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getInfo(){
    this.facebook.api('/me?fields=id,name,email,first_name,last_name,gender',['public_profile','email'])
    .then(rta=>{
      console.log(rta);
    })
    .catch(error =>{
      console.error( error );
    });
  }

}